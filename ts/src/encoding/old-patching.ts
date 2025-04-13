function cloneAndTransformCustomType(message: Record<string, unknown>, transform: (value: any) => unknown, path: DescField[], pathIndex = 0): unknown {
  const field = path[pathIndex];

  if (field.oneof) {
    const wrapper = message?.[field.oneof.localName] as OneOfValue | undefined;
    if (!wrapper?.value) return message;
    return {
      ...message,
      [field.oneof.localName]: {
        ...wrapper,
        value: cloneAndTransformCustomType(wrapper.value as Record<string, unknown>, transform, path, pathIndex + 1),
      },
    };
  }

  const value = message?.[field.jsonName];

  if (value === null || value === undefined) return message;
  if (pathIndex === path.length - 1) {
    return field.fieldKind === "scalar" && field.scalar === ScalarType.BYTES
      ? encodeBinary(transform(decodeBinary(value as Uint8Array)) as string)
      : transform(value);
  }

  if (!field.message) {
    throw new Error(`Cannot clone subtree of field "${readablePath(path, pathIndex)}" because its type ${field.fieldKind} does not support this.`);
  }

  switch (field.fieldKind) {
    case "list":
      if (!Array.isArray(value)) return message;
      return {
        ...message,
        [field.jsonName]: value.map((item: Record<string, unknown>) => cloneAndTransformCustomType(item, transform, path, pathIndex + 1)),
      };
    case "map":
      if (!isObject(value)) return message;
      return {
        ...message,
        [field.jsonName]: Object.keys(value).reduce<Record<string, unknown>>((newObj, key) => {
          newObj[key] = cloneAndTransformCustomType(value[key] as Record<string, unknown>, transform, path, pathIndex + 1);
          return newObj;
        }, {}),
      };
    case "message":
      if (!isObject(value)) return message;
      return {
        ...message,
        [field.jsonName]: cloneAndTransformCustomType(value, transform, path, pathIndex + 1),
      };
  }
}

// const lastField = path[path.length - 1];
// const customType = getCustomType(lastField);
// if (!customType) {
//   throw new Error(`Expected ${schema.typeName}#${readablePath(path)} to have custom type but it does not have it`);
// }

// const transform = customTypeEncoding[customType][transformType];
// const rawValue = current.get(lastField) as any;
// const value = (lastField.fieldKind === 'scalar' && lastField.scalar === ScalarType.BYTES)
//   ? encodeBinary(transform(decodeBinary(rawValue)))
//   : transform(rawValue);
// current.set(lastField, value);

// if (!path[0].oneof && !Object.hasOwn(changedMessage, path[0].jsonName)) continue;

// const lastField = path[path.length - 1];
// const customType = getCustomType(lastField);
// if (!customType) {
//   throw new Error(`Expected ${schema.typeName}#${readablePath(path)} to have custom type but it does not have it`);
// }

// const transform = customTypeEncoding[customType][transformType];
// changedMessage = cloneAndTransformCustomType(changedMessage, transform, path) as MessageShape<T>;

interface OneOfValue {
  case: string;
  value: unknown;
}

// type EncodingObject = Record<string, ((value: any) => any) | undefined>;

function isObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object";
}
