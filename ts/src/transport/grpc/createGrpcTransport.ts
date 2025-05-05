import { createGrpcTransport as makeGrpcTransport, type GrpcTransportOptions } from "@connectrpc/connect-node";

import type { Transport } from "../types.ts";

export function createGrpcTransport(options: Omit<GrpcTransportOptions, "useBinaryFormat">): Transport {
  return makeGrpcTransport({
    ...options,
    useBinaryFormat: true,
  });
}
