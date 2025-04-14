import type { DescMessage, DescService, JsonValue, MessageJsonType } from "@bufbuild/protobuf";
import { fromBinary, fromJson, toBinary, toJson } from "@bufbuild/protobuf";
import type { BinaryReader } from "@bufbuild/protobuf/wire";
import { BinaryWriter } from "@bufbuild/protobuf/wire";

type LoadGrpcService = () => unknown;

/**
 * Loads a service and registers its methods input and output message types.
 */
export function createServiceLoader<T extends ReadonlyArray<LoadGrpcService>>(fns: T): ServiceLoader<T> {
  const loadedTypes: Record<string, GRPCMessageType> = {};
  return {
    getLoadedType(typeUrl) {
      return loadedTypes[typeUrl];
    },
    async loadAt(index) {
      const service = await fns[index]() as DescService;
      service.methods.forEach((method) => {
        loadedTypes[`/${method.input.typeName}`] = createMessageType(method.input);
        loadedTypes[`/${method.output.typeName}`] = createMessageType(method.output);
      });

      return service;
    },
  } as ServiceLoader<T>;
}

/**
 * Create a message type for a given protobuf schema.
 * @param schema - The protobuf schema to create a message type for.
 * @returns A message type for the given protobuf schema.
 */
export function createMessageType<T extends DescMessage>(schema: T): GRPCMessageType<T> {
  return {
    typeUrl: `/${schema.typeName}`,
    encode(message, writer = new BinaryWriter()) {
      const bytes = toBinary(schema, fromJson(schema, message as JsonValue));
      writer.raw(bytes);
      return writer;
    },
    decode(input) {
      const bytes = input instanceof Uint8Array ? input : (input as unknown as { buf: Uint8Array }).buf;
      return toJson(schema, fromBinary(schema, bytes)) as MessageJsonType<T>;
    },
    fromPartial(message) {
      return toJson(schema, fromJson(schema, message as JsonValue)) as T;
    },
  };
}
export interface GRPCMessageType<T extends DescMessage = DescMessage> {
  typeUrl: string;
  encode(message: MessageJsonType<T>, writer?: BinaryWriter): BinaryWriter;
  decode(input: Uint8Array | BinaryReader, length?: number): MessageJsonType<T>;
  fromPartial(message: unknown): T;
}

export interface ServiceLoader<T extends ReadonlyArray<LoadGrpcService>> {
  loadAt<TIndex extends keyof T & number>(index: TIndex): ReturnType<T[TIndex]>;
  getLoadedType(typeUrl: string): GRPCMessageType | undefined;
}
