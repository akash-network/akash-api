import type {
  DescMessage,
  DescMethod,
  DescMethodBiDiStreaming,
  DescMethodClientStreaming,
  DescMethodServerStreaming,
  DescMethodUnary,
  DescService,
  JsonValue,
  MessageJsonType,
  MessageShape,
} from "@bufbuild/protobuf";
import {
  fromJson,
  toJson,
} from "@bufbuild/protobuf";

import type { CallOptions, Transport } from "../transport/types.ts";
import type { TypePatches } from "../utils/applyPatches.ts";
import { applyPatches } from "../utils/applyPatches.ts";
import { createAsyncIterable, handleStreamResponse, mapStream } from "../utils/stream.ts";

export type Client<Desc extends DescService, TCallOptions> = {
  [P in keyof Desc["method"]]:
  Desc["method"][P] extends DescMethodUnary<infer I, infer O> ? (input: MessageJsonType<I>, options?: TCallOptions) => Promise<MessageJsonType<O>>
    : Desc["method"][P] extends DescMethodServerStreaming<infer I, infer O> ? (input: MessageJsonType<I>, options?: TCallOptions) => AsyncIterable<MessageJsonType<O>>
      : Desc["method"][P] extends DescMethodClientStreaming<infer I, infer O> ? (input: AsyncIterable<MessageJsonType<I>>, options?: TCallOptions) => Promise<MessageJsonType<O>>
        : Desc["method"][P] extends DescMethodBiDiStreaming<infer I, infer O> ? (input: AsyncIterable<MessageJsonType<I>>, options?: TCallOptions) => AsyncIterable<MessageJsonType<O>>
          : never;
};

export function createServiceClient<TSchema extends DescService, TCallOptions>(
  service: TSchema,
  transport: Transport,
  options?: ServiceClientOptions,
): Client<TSchema, TCallOptions> {
  const methodOptions: MethodOptions = options?.typePatches
    ? { encode: createFromJsonWithPatches(options.typePatches), decode: createToJsonWithPatches(options.typePatches) }
    : { encode: fromJson, decode: toJson as MethodOptions["decode"] };
  const client: Record<string, ReturnType<typeof createMethod>> = {};
  for (let i = 0; i < service.methods.length; i++) {
    const methodDesc = service.methods[i];
    client[methodDesc.localName] = createMethod(methodDesc, transport, methodOptions);
  }

  return client as Client<TSchema, TCallOptions>;
}

export interface ServiceClientOptions {
  typePatches?: TypePatches;
}

function createMethod(methodDesc: DescMethod, transport: Transport, options: MethodOptions) {
  switch (methodDesc.methodKind) {
    case "unary":
      return createUnaryFn(transport, methodDesc as DescMethodUnary, options);
    case "server_streaming":
      return createServerStreamingFn(transport, methodDesc as DescMethodServerStreaming, options);
    case "client_streaming":
      return createClientStreamingFn(transport, methodDesc as DescMethodClientStreaming, options);
    case "bidi_streaming":
      return createBiDiStreamingFn(transport, methodDesc as DescMethodBiDiStreaming, options);
    default:
      throw new Error(`Unexpected method kind: ${methodDesc.methodKind}`);
  }
}

interface MethodOptions {
  encode: <T extends DescMessage>(schema: T, value: JsonValue) => MessageShape<T>;
  decode: <T extends DescMessage>(schema: T, value: MessageShape<T>) => MessageJsonType<T>;
}

type UnaryFn<I extends DescMessage, O extends DescMessage> = (
  input: MessageJsonType<I>,
  options?: CallOptions,
) => Promise<MessageJsonType<O>>;

function createUnaryFn<I extends DescMessage, O extends DescMessage>(
  transport: Transport,
  method: DescMethodUnary<I, O>,
  methodOptions: MethodOptions,
): UnaryFn<I, O> {
  return async (input, options) => {
    const response = await transport.unary(
      method,
      methodOptions.encode(method.input, input as JsonValue),
      options,
    );
    options?.onHeader?.(response.header);
    options?.onTrailer?.(response.trailer);

    return methodOptions.decode(method.output, response.message);
  };
}

type ServerStreamingFn<I extends DescMessage, O extends DescMessage> = (
  input: MessageJsonType<I>,
  options?: CallOptions,
) => AsyncIterable<MessageJsonType<O>>;

function createServerStreamingFn<
  I extends DescMessage,
  O extends DescMessage,
>(
  transport: Transport,
  method: DescMethodServerStreaming<I, O>,
  methodOptions: MethodOptions,
): ServerStreamingFn<I, O> {
  return (input, options) => {
    return handleStreamResponse(
      method,
      transport.stream(
        method,
        createAsyncIterable([methodOptions.encode(method.input, input as JsonValue)]),
        options,
      ),
      options,
      methodOptions.decode,
    );
  };
}

type ClientStreamingFn<I extends DescMessage, O extends DescMessage> = (
  input: AsyncIterable<MessageJsonType<I>>,
  options?: CallOptions,
) => Promise<MessageJsonType<O>>;

function createClientStreamingFn<
  I extends DescMessage,
  O extends DescMessage,
>(
  transport: Transport,
  method: DescMethodClientStreaming<I, O>,
  methodOptions: MethodOptions,
): ClientStreamingFn<I, O> {
  return async (input, options) => {
    const response = await transport.stream(
      method,
      mapStream(input, (json) => methodOptions.encode(method.input, json as JsonValue)),
      options,
    );
    options?.onHeader?.(response.header);
    let singleMessage: MessageShape<O> | undefined;
    let count = 0;
    for await (const message of response.message) {
      singleMessage = message;
      count++;
    }
    if (!singleMessage) {
      throw new Error("akash sdk protocol error: missing response message");
    }
    if (count > 1) {
      throw new Error("akash sdk protocol error: received extra messages for client streaming method");
    }
    options?.onTrailer?.(response.trailer);
    return methodOptions.decode(method.output, singleMessage);
  };
}

type BiDiStreamingFn<I extends DescMessage, O extends DescMessage> = (
  input: AsyncIterable<MessageJsonType<I>>,
  options?: CallOptions,
) => AsyncIterable<MessageJsonType<O>>;

function createBiDiStreamingFn<
  I extends DescMessage,
  O extends DescMessage,
>(
  transport: Transport,
  method: DescMethodBiDiStreaming<I, O>,
  methodOptions: MethodOptions,
): BiDiStreamingFn<I, O> {
  return (input, options) => {
    return handleStreamResponse(
      method,
      transport.stream(
        method,
        mapStream(input, (json) => methodOptions.encode(method.input, json as JsonValue)),
        options,
      ),
      options,
      methodOptions.decode,
    );
  };
}

const PATCHED_FROM_JSON_CACHE = new Map<TypePatches, MethodOptions["encode"]>();
function createFromJsonWithPatches(patches: TypePatches): MethodOptions["encode"] {
  if (PATCHED_FROM_JSON_CACHE.has(patches)) return PATCHED_FROM_JSON_CACHE.get(patches)!;

  const encode: MethodOptions["encode"] = (schema, value) => {
    const message = fromJson(schema, value);
    return applyPatches("encode", schema, message, patches);
  };
  PATCHED_FROM_JSON_CACHE.set(patches, encode);
  return encode;
}

const PATCHED_TO_JSON_CACHE = new Map<TypePatches, MethodOptions["decode"]>();
function createToJsonWithPatches(patches: TypePatches): MethodOptions["decode"] {
  if (PATCHED_TO_JSON_CACHE.has(patches)) return PATCHED_TO_JSON_CACHE.get(patches)!;

  const decode: MethodOptions["decode"] = (schema, message) => {
    return toJson(schema, applyPatches("decode", schema, message, patches)) as ReturnType<MethodOptions["decode"]>;
  };
  PATCHED_TO_JSON_CACHE.set(patches, decode);
  return decode;
}
