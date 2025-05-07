import { createSDK as createCosmosSDK, serviceLoader as cosmosServiceLoader } from "../../generated/createCosmosSDK.ts";
import { createSDK as createNodeSDK, serviceLoader as nodeServiceLoader } from "../../generated/createNodeSDK.ts";
import { TxRawSchema } from "../../generated/protos/cosmos/tx/v1beta1/tx_pb.ts";
import { createGrpcTransport } from "../../transport/grpc/createGrpcTransport.ts";
import { createTxTransport } from "../../transport/tx/createTxTransport.ts";
import type { StargateClientOptions } from "../../transport/tx/txClient/createStargateClient.ts";
import { createStargateClient } from "../../transport/tx/txClient/createStargateClient.ts";
import { createMessageType } from "../../utils/createServiceLoader.ts";

export function createChainNodeSDK(options: ChainNodeSDKOptions) {
  const queryTransport = createGrpcTransport({
    baseUrl: options.query.baseUrl,
  });
  const getMessageType: StargateClientOptions["getMessageType"] = (typeUrl) => nodeServiceLoader.getLoadedType(typeUrl) || cosmosServiceLoader.getLoadedType(typeUrl);
  const txTransport = createTxTransport({
    getMessageType,
    client: createStargateClient({
      ...options.tx,
      getMessageType,
      builtInTypes: [
        createMessageType(TxRawSchema),
      ],
    }),
  });
  const nodeSDK = createNodeSDK(queryTransport, txTransport);
  const cosmosSDK = createCosmosSDK(queryTransport, txTransport);
  return { ...nodeSDK, ...cosmosSDK };
}

export interface ChainNodeSDKOptions {
  query: {
    baseUrl: string;
  };
  tx: Omit<StargateClientOptions, "getMessageType" | "builtInTypes">;
}
