import type {
  DescMessage,
  MessageInitShape,
  MessageShape } from "@bufbuild/protobuf";
import {
  create,
  fromBinary,
  toBinary } from "@bufbuild/protobuf";
import type { BinaryReader } from "@bufbuild/protobuf/wire";
import { BinaryWriter } from "@bufbuild/protobuf/wire";

import { transformCustomTypes } from "../encoding";

/**
 * Create a message type for a given protobuf schema.
 * @param schema - The protobuf schema to create a message type for.
 * @returns A message type for the given protobuf schema.
 */
export function createMessageType<T extends DescMessage>(
  schema: T,
): GRPCMessageType<T> {
  return {
    typeUrl: `/${schema.typeName}`,
    encode(message, writer = new BinaryWriter()) {
      const bytes = toBinary(schema, transformCustomTypes("encode", schema, message));
      writer.raw(bytes);
      return writer;
    },
    decode(input) {
      const bytes
        = input instanceof Uint8Array
          ? input
          : (input as unknown as { buf: Uint8Array }).buf; // BUGALERT: reading private property
      const value = fromBinary(schema, bytes);
      return transformCustomTypes("decode", schema, value);
    },
    fromPartial(input) {
      return create(schema, input);
    },
  };
}
export interface GRPCMessageType<T extends DescMessage = DescMessage> {
  typeUrl: string;
  encode(message: MessageShape<T>, writer?: BinaryWriter): BinaryWriter;
  decode(input: Uint8Array | BinaryReader, length?: number): MessageShape<T>;
  fromPartial(message: MessageInitShape<T>): MessageShape<T>;
}
