import type { DescMessage, MessageShape } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import type { Interceptor, StreamRequest, StreamResponse, UnaryRequest, UnaryResponse } from "@connectrpc/connect";

// import { transformCustomTypes } from "../../encoding/protobuf";

function transformCustomTypes(transformType: "encode" | "decode", schema: DescMessage, message: MessageShape<DescMessage>) {
  return message;
}

export const transformCustomTypesInterceptor: Interceptor = (next) => async (req) => {
  const newReq = {
    ...req,
    message: req.stream ? wrapStreamMessage("encode", req.method.input, req) : transformCustomTypes("encode", req.method.input, req.message),
  } as UnaryRequest | StreamRequest;
  const res = await next(newReq);
  console.dir(res.message, { depth: null });
  return {
    ...res,
    message: res.stream ? wrapStreamMessage("decode", req.method.output, res) : transformCustomTypes("decode", req.method.output, res.message),
  } as UnaryResponse | StreamResponse;
};

async function *wrapStreamMessage<T extends DescMessage>(transformType: "encode" | "decode", schema: T, reqOrRes: { message: AsyncIterable<MessageShape<T>> }) {
  for await (const message of reqOrRes.message) {
    yield transformCustomTypes(transformType, schema, message);
  }
}
