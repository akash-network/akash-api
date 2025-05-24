import { createSDK } from "../../generated/createProviderSDK.ts";
import { createGrpcTransport } from "../../transport/grpc/createGrpcTransport.ts";
import type { PickByPath } from "../../utils/types.ts";

export type { PayloadOf, ResponseOf } from "../types.ts";

type ProviderSDK = PickByPath<ReturnType<typeof createSDK>, "akash.provider.v1">;

export function createProviderSDK(options: ProviderSDKOptions): ProviderSDK {
  const certificateOptions = options.authentication?.type === "certificate"
    ? {
        cert: options.authentication?.cert,
        key: options.authentication?.key,
      }
    : null;

  return createSDK(
    createGrpcTransport({
      baseUrl: options.baseUrl,
      nodeOptions: {
        ...certificateOptions,
        rejectUnauthorized: false,
      },
    }),
  );
}

export interface ProviderSDKOptions {
  baseUrl: string;
  authentication?: {
    type: "certificate";
    cert: string;
    key: string;
  };
}
