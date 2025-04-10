#!/usr/bin/env node --experimental-strip-types

import { type DescField, ScalarType } from "@bufbuild/protobuf";
import {
  createEcmaScriptPlugin,
  runNodeJs,
  type Schema,
} from "@bufbuild/protoplugin";
import { normalize as normalizePath } from "path";

import { findPathsToCustomField, getCustomType } from "../src/encoding/customTypes/utils.ts";

runNodeJs(
  createEcmaScriptPlugin({
    name: "protoc-gen-customtype-patches",
    version: "v1",
    generateTs,
  }),
);

function generateTs(schema: Schema): void {
  const allPaths: DescField[][] = [];

  schema.files.forEach((file) => {
    file.messages.forEach((message) => {
      const paths = findPathsToCustomField(message, () => true);
      allPaths.push(...paths);
    });
  });
  if (!allPaths.length) {
    return;
  }

  const messageToCustomFields: Record<string, Set<DescField>> = {};
  allPaths.forEach((path) => {
    path.forEach((field) => {
      messageToCustomFields[field.parent.typeName] ??= new Set();
      messageToCustomFields[field.parent.typeName].add(field);
    });
  });

  const patches: string[] = [];
  const imports: Record<string, Set<string>> = {};
  const f = schema.generateFile(getOutputFileName(schema));

  Object.entries(messageToCustomFields).forEach(([typeName, fields]) => {
    const encoded: string[] = [];

    fields.forEach((field) => {
      const customType = getCustomType(field);

      if (customType) {
        const pathToCustomType = `../../encoding/customTypes/${customType.shortName}`;
        imports[pathToCustomType] ??= new Set();
        imports[pathToCustomType].add(customType.shortName);

        if (field.scalar === ScalarType.BYTES) {
          imports[`../../encoding/binaryEncoding`] ??= new Set(["encodeBinary", "decodeBinary"]);
        }

        encoded.push(generateNestedFieldSetter(field, {
          fn: `${customType.shortName}[transformType]`,
          value: "value",
          newValue: "newValue",
        }));
      } else {
        encoded.push(generateNestedFieldUpdate(field, {
          fn: `t["${field.message!.typeName}"]`,
          value: "value",
          newValue: "newValue",
        }));
      }
    });

    const shapeImport = f.importShape(fields.values().next().value.parent);
    const path = normalizePath(`../protos/${shapeImport.from.replace(/\.js$/, "")}`);
    imports[path] ??= new Set(["type *"]);

    patches.push([
      `"${typeName}"(value: ${dirnameToVar(path)}.${shapeImport.name}, transformType: 'encode' | 'decode') {\n${
        indent(`if (value == null) return value;`) + "\n"
        + indent(`const newValue = { ...value };`) + "\n"
        + indent(encoded.join(";\n")) + "\n"
        + indent("return newValue;")
      }\n}`,
    ].join("\n"));
  });

  const importExtension = schema.options.importExtension ? `.${schema.options.importExtension}` : "";
  Object.entries(imports).forEach(([path, symbols]) => {
    f.print(`import ${generateImportSymbols(path, symbols)} from "${path}${importExtension}";`);
  });
  f.print("");
  f.print(`const t = {\n${indent(patches.join(",\n"))}\n};\n`);
  f.print(`export const transformations = t;`);
}

function getOutputFileName(schema: Schema): string {
  if (process.env.BUF_PLUGIN_CUSTOMTYPE_TYPES_PATCHES_OUTPUT_FILE) {
    return process.env.BUF_PLUGIN_CUSTOMTYPE_TYPES_PATCHES_OUTPUT_FILE;
  }

  for (const file of schema.files) {
    if (file.name.includes("akash/provider/lease")) {
      return "providerCustomTypePatches.ts";
    }
    if (file.name.includes("akash/cert/v1/msg")) {
      return "nodeCustomTypePatches.ts";
    }
    if (file.name.includes("cosmos/base/tendermint/v1beta1/query") || file.name.includes("cosmos/base/query/v1/query")) {
      return "cosmosCustomTypePatches.ts";
    }
  }

  throw new Error("Cannot determine file name for custom patches");
}

const indent = (value: string, tab = "  ") => tab + value.replace(/\n/g, "\n" + tab);

function generateNestedFieldUpdate(field: DescField, vars: VarNames) {
  const fieldRef = `${vars.value}.${field.localName}`;
  const newValueRef = `${vars.newValue}.${field.localName}`;
  if (field.fieldKind === "list") {
    return `if (${fieldRef}) ${newValueRef} = ${fieldRef}.map((item) => ${vars.fn}(item, transformType));`;
  }

  if (field.fieldKind === "map") {
    return `if (${fieldRef}) {\n`
      + `  ${newValueRef} = {};\n`
      + `  Object.keys(${fieldRef}).forEach(k => ${newValueRef}[k] = ${vars.fn}(${fieldRef}[k], transformType));\n`
      + `}`;
  }

  if (field.oneof && field.message) {
    const oneofValueRef = `${vars.value}.${field.oneof.localName}`;
    return `if (${oneofValueRef}?.case === "${field.localName}") {\n`
      + `  ${newValueRef} = {\n`
      + `    ...${oneofValueRef},\n`
      + `    value: ${vars.fn}(${oneofValueRef}.value, transformType)\n`
      + `  };\n`
      + `}`;
  }

  return `if (${fieldRef} != null) ${newValueRef} = ${vars.fn}(${fieldRef}, transformType);`;
}

function generateNestedFieldSetter(field: DescField, vars: VarNames) {
  const valueRef = `${vars.value}.${field.localName}`;
  const newValueRef = `${vars.newValue}.${field.localName}`;

  if (field.scalar !== ScalarType.BYTES) {
    return `if (${valueRef} != null) ${newValueRef} = ${vars.fn}(${valueRef});`;
  }

  return `if (${valueRef} != null) ${newValueRef} = encodeBinary(${vars.fn}(decodeBinary(${valueRef})));`;
}

interface VarNames {
  fn: string;
  value: string;
  newValue: string;
}

const dirnameToVar = (path: string) => path.replace(/\.+\//g, "_").replace(/\//g, "_").replace(/_pb$/, "");
function generateImportSymbols(path: string, symbols: Set<string>): string {
  if (symbols.has("type *")) return `type * as ${dirnameToVar(path)}`;
  if (symbols.has("*")) return `* as ${dirnameToVar(path)}`;
  return `{ ${Array.from(symbols).join(", ")} }`;
}
