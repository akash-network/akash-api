import type { DescMessage, MessageShape } from "@bufbuild/protobuf";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypePatches = Record<string, (value: any, transform: "encode" | "decode") => any>;

export function applyPatches<T extends DescMessage>(transform: "encode" | "decode", schema: T, message: MessageShape<T>, patches: TypePatches): MessageShape<T> {
  if (Object.hasOwn(patches, schema.typeName)) {
    return patches[schema.typeName](message, transform);
  }
  return message;
}
