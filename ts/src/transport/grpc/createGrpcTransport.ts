import type { Transport } from "@connectrpc/connect";
import { createGrpcTransport as makeGrpcTransport } from "@connectrpc/connect-node";

import { transformCustomTypesInterceptor } from "../interceptors/transformCustomTypesInterceptor";

export function createGrpcTransport(options: GrpcTransportOptions): Transport {
  return makeGrpcTransport({
    baseUrl: options.baseUrl,
    useBinaryFormat: true,
    nodeOptions: {
      rejectUnauthorized: false,
    },
    interceptors: [transformCustomTypesInterceptor],
    binaryOptions: {
      readUnknownFields: false,
      writeUnknownFields: false,
    },
  });
}

export interface GrpcTransportOptions {
  baseUrl: string;
}
