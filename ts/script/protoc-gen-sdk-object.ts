#!/usr/bin/env npx ts-node -T

import { DescMethod, DescService } from "@bufbuild/protobuf";
import {
  createEcmaScriptPlugin,
  getComments,
  runNodeJs,
  type Schema,
} from "@bufbuild/protoplugin";
import { normalize as normalizePath } from "path";

runNodeJs(
  createEcmaScriptPlugin({
    name: "protoc-gen-sdk-object",
    version: "v1",
    generateTs,
  }),
);

function generateTs(schema: Schema): void {
  const servicesLoaderDefs: string[] = [];
  const sdkDefs: Record<string, string> = {};
  const imports = new Set<string>();
  const services = schema.files.map((f) => f.services).flat();
  if (!services.length) return;

  const f = schema.generateFile(getOutputFileName(schema));
  let hasTxService = false;

  services.forEach((service) => {
    if (!hasTxService) {
      hasTxService = isTxService(service);
    }
    const serviceImport = f.importSchema(service);
    const serviceImportPath = normalizePath(serviceImport.from.replace(/\.js$/, ""));
    servicesLoaderDefs.push(`() => import("./protos/${serviceImportPath}").then(m => m.${serviceImport.name})`);
    const serviceIndex = servicesLoaderDefs.length - 1;
    const serviceMethods = service.methods.map((method, methodIndex) => {
      const inputType = f.importJson(method.input);
      const importPath = inputType.from.replace(/\.js$/, "");
      const isInputEmpty = method.input.fields.length === 0;
      imports.add(importPath);
      const methodArgs = [
        `input: ${fileNameToScope(importPath)}.${inputType.name}${isInputEmpty ? " = {}" : ""}`,
        `options?: ${isTxService(service) ? "TxCallOptions" : "CallOptions"}`,
      ];
      const methodName = getSdkMethodName(method);
      let comment = jsDoc(method);
      if (comment) comment += "\n";

      return comment
        + `${methodName}: withMetadata(async function ${methodName}(${methodArgs.join(", ")}) {\n`
        + `  const service = await serviceLoader.loadAt(${serviceIndex});\n`
        + `  return clientFactory.getClient(service).${decapitalize(method.name)}(input, options);\n`
        + `}, { path: [${serviceIndex}, ${methodIndex}] })`
      ;
    });

    if (serviceMethods.length > 0) {
      const path = service.file.proto.package;
      const tabSize = path.split(".").length;
      const methods = indent(serviceMethods.join(",\n"), "  ".repeat(tabSize + 1));
      const methodsTab = "  ".repeat(tabSize);
      const existingValue = getByPath(sdkDefs, path);
      if (existingValue) {
        const value = existingValue.slice(0, -1).trim() + `,\n${methods}\n${methodsTab}}`;
        setByPath(sdkDefs, path, value);
      } else {
        setByPath(sdkDefs, path, `{\n${methods}\n${methodsTab}}`);
      }
    }
  });

  Array.from(imports).forEach((importPath) => {
    f.print(`import type * as ${fileNameToScope(importPath)} from "${importPath.startsWith("./") ? normalizePath(`./protos/${importPath}`) : importPath}";`);
  });
  f.print(`import type { ClientFactory } from '../sdk/ClientFactory';`);

  const callOptionsTypes = ["CallOptions"];
  if (hasTxService) callOptionsTypes.push("TxCallOptions");
  f.print(`import type { ${callOptionsTypes.join(", ")} } from '../transport';`);
  f.print(`import { createServiceLoader } from '../utils/createServiceLoader';`);
  f.print(`import { withMetadata } from '../utils/sdkMetadata';`);
  f.print("\n");
  f.print(f.export("const", `serviceLoader = createServiceLoader([\n${indent(servicesLoaderDefs.join(",\n"))}\n] as const);`));
  f.print(f.export("function", `createSDK<T extends ClientFactory>(clientFactory: T) {\n  return ${indent(stringifyObject(sdkDefs)).trim()}\n}`));
}

function getOutputFileName(schema: Schema): string {
  if (process.env.BUF_PLUGIN_SDK_OBJECT_OUTPUT_FILE) {
    return process.env.BUF_PLUGIN_SDK_OBJECT_OUTPUT_FILE;
  }

  for (const file of schema.files) {
    if (file.name.includes("akash/provider/lease")) {
      return "createProviderSDK.ts";
    }
    if (file.name.includes("akash/cert/v1/msg")) {
      return "createNodeSDK.ts";
    }
    if (file.name.includes("cosmos/base/tendermint/v1beta1/query") || file.name.includes("cosmos/base/query/v1/query")) {
      return "createCosmosSDK.ts";
    }
  }

  throw new Error("Cannot determine sdk file name");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getByPath(obj: Record<string, any>, path: string) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current === undefined) return;
    current = current[parts[i]];
  }
  return current;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setByPath(obj: Record<string, any>, path: string, value: unknown) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current)) {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
};

const indent = (value: string, tab = " ".repeat(2)) => tab + value.replace(/\n/g, "\n" + tab);
const isTxService = (service: DescService) => service.name === "Msg";

function getSdkMethodName(method: DescMethod) {
  if (isTxService(method.parent) || method.name.startsWith("get") || method.name.startsWith("Get")) {
    return decapitalize(method.name);
  }

  return `get${capitalize(method.name)}`;
}

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function decapitalize(str: string): string {
  return str[0].toLowerCase() + str.slice(1);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stringifyObject(obj: Record<string, any>, tabSize = 0, wrap = (value: string) => value): string {
  if (typeof obj !== "object") return obj;

  const spaces = " ".repeat(tabSize);
  const entries = Object.entries(obj).map(([key, value]) => {
    if (typeof value === "string") {
      return `${spaces}  ${key}: ${wrap(value)}`;
    }
    return `${spaces}  ${key}: ${stringifyObject(value, tabSize + 2, wrap)}`;
  });

  return `{\n${entries.join(",\n")}\n${spaces}}`;
}

function fileNameToScope(fileName: string) {
  return normalizePath(fileName).replace(/\W+/g, "_").replace(/^_+/, "");
}

function jsDoc(method: DescMethod) {
  const comments: string[] = [];
  const methodComments = getComments(method);

  if (methodComments.leading) {
    comments.push(methodComments.leading
      .trim()
      .replace(new RegExp(`\\b${method.name}\\b`, "g"), getSdkMethodName(method))
      .replace(/\n/g, "\n *"),
    );
  }
  if (method.deprecated || method.parent.deprecated) {
    comments.push(`@deprecated`);
  }

  return comments.length ? `/**\n * ${comments.join("\n * ")}\n */` : "";
}
