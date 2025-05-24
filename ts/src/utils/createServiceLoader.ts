import type { DescMessage, DescService, MessageInitShape, MessageShape } from "@bufbuild/protobuf";
import { create, fromBinary, toBinary } from "@bufbuild/protobuf";
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
      const type = loadedTypes[typeUrl];
      if (!type) {
        throw new Error(`Cannot find message type ${typeUrl} in service loader. Probably it's not loaded yet.`);
      }
      return type;
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
      const object = message.$typeName ? message as MessageShape<T> : create(schema, message as MessageInitShape<T>);
      const bytes = toBinary(schema, object);
      writer.raw(bytes);
      return writer;
    },
    decode(input) {
      const bytes = input instanceof Uint8Array ? input : (input as unknown as { buf: Uint8Array }).buf;
      return fromBinary(schema, bytes);
    },
    fromPartial(message) {
      return create(schema, message);
    },
  };
}
export interface GRPCMessageType<T extends DescMessage = DescMessage> {
  typeUrl: string;
  encode(message: MessageShape<T> | MessageInitShape<T>, writer?: BinaryWriter): BinaryWriter;
  decode(input: Uint8Array | BinaryReader, length?: number): MessageShape<T>;
  fromPartial(message: MessageInitShape<T>): MessageShape<T>;
}

export interface ServiceLoader<T extends ReadonlyArray<LoadGrpcService>> {
  loadAt<TIndex extends keyof T & number>(index: TIndex): ReturnType<T[TIndex]>;
  getLoadedType(typeUrl: string): GRPCMessageType;
}
