import {
  type DescMessage,
  DescMethod,
  type DescMethodBiDiStreaming,
  type DescMethodClientStreaming,
  type DescMethodServerStreaming,
  type DescMethodUnary,
  type DescService,
  fromJson,
  JsonValue,
  type MessageJsonType,
  toJson,
} from "@bufbuild/protobuf";
import type { CallOptions, Transport } from "@connectrpc/connect";
import { createAsyncIterable } from "@connectrpc/connect/protocol";

import { handleStreamResponse } from "../utils/handleStreamResponse";

export type Client<Desc extends DescService> = {
  [P in keyof Desc["method"]]:
  Desc["method"][P] extends DescMethodUnary<infer I, infer O> ? (request: MessageJsonType<I>, options?: CallOptions) => Promise<MessageJsonType<O>>
    : Desc["method"][P] extends DescMethodServerStreaming<infer I, infer O> ? (request: MessageJsonType<I>, options?: CallOptions) => AsyncIterable<MessageJsonType<O>>
      : Desc["method"][P] extends DescMethodClientStreaming<infer I, infer O> ? (request: AsyncIterable<MessageJsonType<I>>, options?: CallOptions) => Promise<MessageJsonType<O>>
        : Desc["method"][P] extends DescMethodBiDiStreaming<infer I, infer O> ? (request: AsyncIterable<MessageJsonType<I>>, options?: CallOptions) => AsyncIterable<MessageJsonType<O>>
          : never;
};

export function createServiceClient<T extends DescService>(
  service: T,
  transport: Transport,
): Client<T> {
  const client: Record<string, (request: JsonValue, options?: CallOptions) => unknown> = {};
  for (const methodDesc of service.methods) {
    const method = createMethod(methodDesc, transport);
    if (method === null) continue;
    client[methodDesc.localName] = method;
  }

  return client as Client<T>;
}

function createMethod(methodDesc: DescMethod, transport: Transport) {
  switch (methodDesc.methodKind) {
    case "unary":
      return createUnaryFn(transport, methodDesc as DescMethodUnary);
    case "server_streaming":
      return createServerStreamingFn(transport, methodDesc as DescMethodServerStreaming);
    default:
      return null;
  }
}

type UnaryFn<I extends DescMessage, O extends DescMessage> = (
  request: MessageJsonType<I>,
  options?: CallOptions,
) => Promise<MessageJsonType<O>>;

export function createUnaryFn<I extends DescMessage, O extends DescMessage>(
  transport: Transport,
  method: DescMethodUnary<I, O>,
): UnaryFn<I, O> {
  return async function (input, options) {
    const response = await transport.unary(
      method,
      options?.signal,
      options?.timeoutMs,
      options?.headers,
      fromJson(method.input, input as JsonValue),
      options?.contextValues,
    );
    options?.onHeader?.(response.header);
    options?.onTrailer?.(response.trailer);
    return toJson(method.output, response.message);
  };
}

type ServerStreamingFn<I extends DescMessage, O extends DescMessage> = (
  request: MessageJsonType<I>,
  options?: CallOptions,
) => AsyncIterable<MessageJsonType<O>>;

export function createServerStreamingFn<
  I extends DescMessage,
  O extends DescMessage,
>(
  transport: Transport,
  method: DescMethodServerStreaming<I, O>,
): ServerStreamingFn<I, O> {
  return function (input, options): AsyncIterable<MessageJsonType<O>> {
    return handleStreamResponse(
      method,
      transport.stream(
        method,
        options?.signal,
        options?.timeoutMs,
        options?.headers,
        createAsyncIterable([fromJson(method.input, input as JsonValue)]),
        options?.contextValues,
      ),
      options,
    );
  };
}
