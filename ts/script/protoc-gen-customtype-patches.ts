#!/usr/bin/env -S node --experimental-strip-types

import { type DescField, type DescMessage, ScalarType } from "@bufbuild/protobuf";
import {
  createEcmaScriptPlugin,
  type GeneratedFile,
  runNodeJs,
  type Schema,
} from "@bufbuild/protoplugin";
import { basename, normalize as normalizePath } from "path";

import { findPathsToCustomField, getCustomType } from "../src/encoding/customTypes/utils.ts";

runNodeJs(
  createEcmaScriptPlugin({
    name: "protoc-gen-customtype-patches",
    version: "v1",
    generateTs,
  }),
);

const PROTO_PATH = "../protos";
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

  const messageToCustomFields: Map<DescMessage, Set<DescField>> = new Map();
  allPaths.forEach((path) => {
    path.forEach((field) => {
      if (!messageToCustomFields.has(field.parent)) {
        messageToCustomFields.set(field.parent, new Set());
      }
      messageToCustomFields.get(field.parent)!.add(field);
    });
  });

  const patches: string[] = [];
  const imports: Record<string, Set<string>> = {};
  const fileName = getOutputFileName(schema);
  const patchesFile = schema.generateFile(fileName);

  Array.from(messageToCustomFields.entries()).forEach(([descMessage, fields]) => {
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

        encoded.push(generateFieldTransformation(field, {
          fn: `${customType.shortName}[transformType]`,
          value: "value",
          newValue: "newValue",
        }));
      } else {
        encoded.push(generateNestedFieldUpdate(field, {
          fn: `p["${field.message!.typeName}"]`,
          value: "value",
          newValue: "newValue",
        }));
      }
    });

    const shapeImport = patchesFile.importShape(fields.values().next().value.parent);
    const path = normalizePath(`${PROTO_PATH}/${shapeImport.from.replace(/\.js$/, "")}`);
    imports[path] ??= new Set(["type *"]);

    patches.push([
      `"${descMessage.typeName}"(value: ${dirnameToVar(path)}.${shapeImport.name} | undefined | null, transformType: 'encode' | 'decode') {\n${
        indent(`if (value == null) return;`) + "\n"
        + indent(`const newValue = { ...value };`) + "\n"
        + indent(encoded.join("\n")) + "\n"
        + indent("return newValue;")
      }\n}`,
    ].join("\n"));
  });

  const importExtension = schema.options.importExtension ? `.${schema.options.importExtension}` : "";
  Object.entries(imports).forEach(([path, symbols]) => {
    patchesFile.print(`import ${generateImportSymbols(path, symbols)} from "${path}${importExtension}";`);
  });
  patchesFile.print("");
  patchesFile.print(`const p = {\n${indent(patches.join(",\n"))}\n};\n`);
  patchesFile.print(`export const patches = p;`);

  const testsFile = schema.generateFile(fileName.replace(/\.ts$/, ".spec.ts"));
  generateTests(basename(fileName), testsFile, messageToCustomFields);
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
    return `if (${fieldRef}) ${newValueRef} = ${fieldRef}.map((item) => ${vars.fn}(item, transformType)!);`;
  }

  if (field.fieldKind === "map") {
    return `if (${fieldRef}) {\n`
      + `  ${newValueRef} = {};\n`
      + `  Object.keys(${fieldRef}).forEach(k => ${newValueRef}[k] = ${vars.fn}(${fieldRef}[k], transformType)!);\n`
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

function generateFieldTransformation(field: DescField, vars: VarNames) {
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

function generateTests(fileName: string, testsFile: GeneratedFile, messageToCustomFields: Map<DescMessage, Set<DescField>>) {
  testsFile.print(`import { expect, describe, it } from "@jest/globals";`);
  testsFile.print(`import type { DescMessage } from "@bufbuild/protobuf";`);
  testsFile.print(`import { patches } from "./${basename(fileName)}";`);
  testsFile.print(`import { generateMessage } from "@test/helpers/generateMessage";`);
  testsFile.print(`import type { TypePatches } from "../../utils/applyPatches";`);
  testsFile.print("");
  testsFile.print(`type MessageTypes = Record<string, { fields: string[], schema: DescMessage }>;`);
  testsFile.print(`const messageTypes: MessageTypes = {`);
  for (const [message, fields] of messageToCustomFields.entries()) {
    const importedSchema = testsFile.importSchema(message);
    testsFile.print(`  "${message.typeName}": {`);
    testsFile.print(`    fields: ${JSON.stringify(Array.from(fields, (f) => f.localName))},`);
    testsFile.print(`    schema: `, {
      ...importedSchema,
      from: normalizePath(`${PROTO_PATH}/${importedSchema.from}`),
    });
    testsFile.print(`  },`);
  }
  testsFile.print(`};`);
  testsFile.print(`describe("${fileName}", () => {`);
  testsFile.print(`  describe.each(Object.entries(patches))('patch %s', (typeName, patch: TypePatches[keyof TypePatches]) => {`);
  testsFile.print(`    it('returns undefined if receives null or undefined', () => {`);
  testsFile.print(`      expect(patch(null, 'encode')).toBe(undefined);`);
  testsFile.print(`      expect(patch(null, 'decode')).toBe(undefined);`);
  testsFile.print(`      expect(patch(undefined, 'encode')).toBe(undefined);`);
  testsFile.print(`      expect(patch(undefined, 'decode')).toBe(undefined);`);
  testsFile.print(`    });`);
  testsFile.print("");
  testsFile.print(`    it.each(generateTestCases(typeName, messageTypes))('patches and returns cloned value: %s', (name, value) => {`);
  testsFile.print(`      const transformedValue = patch(patch(value, 'encode'), 'decode');`);
  testsFile.print(`      expect(value).toEqual(transformedValue);`);
  testsFile.print(`      expect(value).not.toBe(transformedValue);`);
  testsFile.print(`    });`);
  testsFile.print(`  });`);
  testsFile.print("");
  testsFile.print(`  function generateTestCases(typeName: string, messageTypes: MessageTypes) {`);
  testsFile.print(`    const type = messageTypes[typeName];`);
  testsFile.print(`    const cases = type.fields.map((name) => ["single " + name + " field", generateMessage(type.schema, {`);
  testsFile.print(`      ...messageTypes,`);
  testsFile.print(`      [typeName]: {`);
  testsFile.print(`        ...type,`);
  testsFile.print(`        fields: [name],`);
  testsFile.print(`      }`);
  testsFile.print(`    })]);`);
  testsFile.print(`    cases.push(["all fields", generateMessage(type.schema, messageTypes)]);`);
  testsFile.print(`    return cases;`);
  testsFile.print(`  }`);
  testsFile.print("});");
}
