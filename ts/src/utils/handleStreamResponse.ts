import type { DescMessage, DescMethodBiDiStreaming, DescMethodClientStreaming, DescMethodServerStreaming, MessageJsonType } from "@bufbuild/protobuf";
import { toJson } from "@bufbuild/protobuf";
import type { CallOptions, StreamResponse } from "@connectrpc/connect";

export function handleStreamResponse<I extends DescMessage, O extends DescMessage>(
  method: DescMethodServerStreaming<I, O> | DescMethodBiDiStreaming<I, O> | DescMethodClientStreaming<I, O>,
  stream: Promise<StreamResponse<I, O>>,
  options?: CallOptions,
): AsyncIterable<MessageJsonType<O>> {
  const it = (async function* () {
    const response = await stream;
    options?.onHeader?.(response.header);
    yield * response.message;
    options?.onTrailer?.(response.trailer);
  })()[Symbol.asyncIterator]();
  // Create a new iterable to omit throw/return.
  return {
    [Symbol.asyncIterator]: () => ({
      next: () => it.next().then((v) => ({
        done: v.done,
        value: toJson(method.output, v.value!),
      })),
    }),
  };
}
