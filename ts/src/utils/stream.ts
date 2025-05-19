import type { DescMessage, DescMethodBiDiStreaming, DescMethodClientStreaming, DescMethodServerStreaming, MessageJsonType, MessageShape } from "@bufbuild/protobuf";
import { toJson } from "@bufbuild/protobuf";

import type { CallOptions, StreamResponse } from "../transport/types.ts";

export { createAsyncIterable } from "@connectrpc/connect/protocol";

export function handleStreamResponse<I extends DescMessage, O extends DescMessage>(
  method: DescMethodServerStreaming<I, O> | DescMethodBiDiStreaming<I, O> | DescMethodClientStreaming<I, O>,
  stream: Promise<StreamResponse<I, O>>,
  options?: CallOptions,
  transform: (schema: DescMessage, value: MessageShape<DescMessage>) => MessageJsonType<DescMessage> = toJson,
): AsyncIterable<MessageJsonType<O>> {
  const it = (async function* () {
    const response = await stream;
    options?.onHeader?.(response.header);
    yield * response.message;
    options?.onTrailer?.(response.trailer);
  })()[Symbol.asyncIterator]();
  return {
    [Symbol.asyncIterator]: () => ({
      next: () => it.next().then((v) => ({
        done: v.done!,
        value: v.value ? transform(method.output, v.value) : undefined,
      } as IteratorYieldResult<MessageJsonType<O>>)),
    }),
  };
}

export function mapStream<T, U>(stream: AsyncIterable<T>, transform: (value: T) => U): AsyncIterable<U> {
  const it = stream[Symbol.asyncIterator]();
  return {
    [Symbol.asyncIterator]: () => ({
      next: () => it.next().then((v) => ({
        done: v.done,
        value: v.value ? transform(v.value) : undefined,
      } as IteratorYieldResult<U>)),
    }),
  };
}
