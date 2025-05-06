import { createGrpcTransport as makeGrpcTransport, type GrpcTransportOptions as ConnectGrpcTransportOptions } from "@connectrpc/connect-node";

import type { CallOptions, Transport } from "../types.ts";

export type GrpcCallOptions = Omit<CallOptions, "onHeader" | "onTrailer">;
export type GrpcTransportOptions = Omit<ConnectGrpcTransportOptions, "useBinaryFormat">;

export function createGrpcTransport(options: GrpcTransportOptions): Transport<GrpcCallOptions> {
  const transport = makeGrpcTransport({
    ...options,
    useBinaryFormat: true,
  });

  return {
    async unary(method, input, options) {
      return transport.unary(method, options?.signal, options?.timeoutMs, options?.headers, input, options?.contextValues);
    },
    async stream(method, input, options) {
      return transport.stream(method, options?.signal, options?.timeoutMs, options?.headers, input, options?.contextValues);
    },
  };
}
