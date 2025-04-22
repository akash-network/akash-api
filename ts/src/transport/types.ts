import type { DescMessage, DescMethodStreaming, DescMethodUnary, MessageInitShape } from "@bufbuild/protobuf";
import type { CallOptions as ConnectCallOptions, StreamResponse, UnaryResponse } from "@connectrpc/connect";
import type { DeliverTxResponse, StdFee } from "@cosmjs/stargate";

import type { TxRaw } from "./tx/TxClient.ts";

export type { StreamResponse } from "@connectrpc/connect";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CallOptions extends ConnectCallOptions {}

export interface TxCallOptions {
  afterSign?: (tx: TxRaw) => void;
  afterBroadcast?: (tx: DeliverTxResponse) => void;
  memo?: string;
  fee?: StdFee;
}

export interface Transport<TCallOptions = unknown> {
  /**
   * Call a unary RPC - a method that takes a single input message, and
   * responds with a single output message.
   */
  unary<I extends DescMessage, O extends DescMessage>(method: DescMethodUnary<I, O>, input: MessageInitShape<I>, options?: TCallOptions): Promise<UnaryResponse<I, O>>;
  /**
   * Call a streaming RPC - a method that takes zero or more input messages,
   * and responds with zero or more output messages.
   */
  stream<I extends DescMessage, O extends DescMessage>(method: DescMethodStreaming<I, O>, input: AsyncIterable<MessageInitShape<I>>, options?: TCallOptions): Promise<StreamResponse<I, O>>;
}
