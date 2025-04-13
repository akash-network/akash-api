import type { Transport } from "@connectrpc/connect";
import { createGrpcWebTransport as makeGrpcWebTransport } from "@connectrpc/connect-web";

import { transformCustomTypesInterceptor } from "../interceptors/transformCustomTypesInterceptor";

export function createGrpcWebTransport(options: GrpcTransportOptions): Transport {
  return makeGrpcWebTransport({
    baseUrl: options.baseUrl,
    useBinaryFormat: true,
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
