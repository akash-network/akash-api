import type { DescField, DescMessage, MessageShape } from "@bufbuild/protobuf";
import { clone, ScalarType } from "@bufbuild/protobuf";
import type { ReflectMessage } from "@bufbuild/protobuf/reflect";
import { isReflectList, isReflectMap, isReflectMessage, reflect } from "@bufbuild/protobuf/reflect";

import { decodeBinary, encodeBinary } from "../binaryEncoding";
import { findPathsToCustomField, getCustomType } from "./utils";

export const createTransformCustomTypes = (hasCustomTypeRef: (typeName: string) => boolean) =>
  function transformCustomTypes<T extends DescMessage>(transformType: "encode" | "decode", schema: T, message: MessageShape<T>): MessageShape<T> {
    if (!hasCustomTypeRef(schema.typeName)) return message;

    const paths = findPathsToCustomField(schema, hasCustomTypeRef);
    if (!paths.length) {
      throw new Error(`Expected ${schema.typeName} to have fields with custom types but could not find paths to them`);
    }

    // we don't need to make a clone for decoding because object is newly created, from bytes
    const changedMessage = transformType === "encode" ? clone(schema, message) : message;
    const reflectedMsg = reflect(schema, changedMessage);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const target = getReflectionPath(schema, reflectedMsg, path, 0, path.length - 1);
      const lastField = path[path.length - 1];

      if (isReflectMessage(target)) {
        transformCustomField(transformType, target, lastField);
      } else {
        for (let i = 0; i < target.length; i++) {
          transformCustomField(transformType, target[i], lastField);
        }
      }
    }

    return changedMessage;
  };

const readablePath = (path: DescField[], endIndex = path.length - 1) => path.slice(0, endIndex).map((field) => field.localName).join(".");
const createUnexpectedValueError = (value: unknown, root: DescMessage, path: DescField[], pathIndex: number, expectedTypes = "ReflectList | ReflectMap | ReflectMessage | ReflectMessage[]") => {
  return new Error(`Expected value at "${root.typeName}.${readablePath(path, pathIndex)}" to be one of ${expectedTypes} but got "type=${typeof value}; constructor=${value?.constructor?.name}"`);
};

function getReflectionPath(root: DescMessage, value: unknown, path: DescField[], pathIndex = 0, length = path.length): ReflectMessage[] | ReflectMessage {
  if (pathIndex >= length) return toOneOrManyReflectMessages(value, root, path, pathIndex);
  const field = path[pathIndex];

  if (isReflectMessage(value)) {
    return getReflectionPath(root, value.get(field), path, pathIndex + 1, length);
  }

  if (Array.isArray(value) || isReflectList(value) || isReflectMap(value)) {
    const results: ReflectMessage[] = [];
    const array = isReflectList(value) || isReflectMap(value) ? Array.from(value.values()) : value;
    for (let i = 0; i < array.length; i++) {
      const result = toOneOrManyReflectMessages(getReflectionPath(root, array[i], path, pathIndex, length), root, path, pathIndex);
      if (Array.isArray(result)) {
        results.push(...result);
      } else {
        results.push(result);
      }
    }
    return results;
  }

  throw createUnexpectedValueError(value, root, path, pathIndex);
}

function toOneOrManyReflectMessages(value: unknown, root: DescMessage, path: DescField[], pathIndex: number): ReflectMessage | ReflectMessage[] {
  if (isReflectMessage(value) || Array.isArray(value)) return value;
  if (isReflectList(value) || isReflectMap(value)) return Array.from(value.values(), (item) => {
    if (!isReflectMessage(item)) throw createUnexpectedValueError(value, root, path, pathIndex, "ReflectMessage");
    return item;
  });
  throw createUnexpectedValueError(value, root, path, pathIndex);
}

function transformCustomField(transformType: "encode" | "decode", msg: ReflectMessage, field: DescField) {
  const customType = getCustomType(field);
  if (!customType) {
    throw new Error(`Expected ${msg.message.$typeName}.${field.localName} to have customtype option but it does not have it`);
  }

  if (field.fieldKind !== "scalar") {
    throw new Error(`Expected custom type to found scalar field but ${msg.message.$typeName}.${field.localName} is of type "${field.fieldKind}"`);
  }

  const rawValue = msg.get(field);
  if (rawValue === undefined || rawValue === null) return;

  const transform = customType[transformType];
  const value = field.scalar === ScalarType.BYTES && rawValue instanceof Uint8Array
    ? encodeBinary(transform(decodeBinary(rawValue)))
    : transform(rawValue);
  msg.set(field, value);
}
