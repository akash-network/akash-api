#!/usr/bin/env npx ts-node -T

import { DescField } from "@bufbuild/protobuf";
import {
  createEcmaScriptPlugin,
  runNodeJs,
  type Schema,
} from "@bufbuild/protoplugin";
import { findPathsToCustomField } from "../src/encoding/customTypes";

runNodeJs(
  createEcmaScriptPlugin({
    name: "protoc-gen-customtype-locations",
    version: "v1",
    generateTs,
  }),
);

function generateTs(schema: Schema): void {
  const shouldVisitAll = () => true;
  const allPaths: DescField[][] = [];

  for (const file of schema.files) {
    for (const message of file.messages) {
      const paths = findPathsToCustomField(message, shouldVisitAll);
      allPaths.push(...paths);
    }
  }

  const typesThatHasRefToCustomField = new Set<string>();
  for (const path of allPaths) {
    for (const field of path) {
      if (field.message) {
        typesThatHasRefToCustomField.add(field.message.typeName);
      }
      if (field.parent) {
        typesThatHasRefToCustomField.add(field.parent.typeName);
      }
    }
  }

  if (typesThatHasRefToCustomField.size === 0) return;

  const f = schema.generateFile(getOutputFileName(schema));
  f.print(`export const refsToCustomTypes = new Set(${JSON.stringify(Array.from(typesThatHasRefToCustomField), null, 2)})`)
}

function getOutputFileName(schema: Schema): string {
  if (process.env.BUF_PLUGIN_KNOWN_CUSTOMTYPE_TYPES_OUTPUT_FILE) {
    return process.env.BUF_PLUGIN_KNOWN_CUSTOMTYPE_TYPES_OUTPUT_FILE;
  }

  for (const file of schema.files) {
    if (file.name.includes("akash/provider/lease")) {
      return "providerCustomTypeRefs.ts";
    }
    if (file.name.includes("akash/cert/v1/msg")) {
      return "nodeCustomTypeRefs.ts";
    }
    if (file.name.includes("cosmos/base/tendermint/v1beta1/query") || file.name.includes("cosmos/base/query/v1/query")) {
      return "cosmosCustomTypeRefs.ts";
    }
  }

  return 'unknownCustomTypeRefs.ts';

  throw new Error('Cannot determine file name for custom type refs generator');
}
