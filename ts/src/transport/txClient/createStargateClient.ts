import { toBinary } from "@bufbuild/protobuf";
import type {
  EncodeObject,
  GeneratedType,
  OfflineSigner } from "@cosmjs/proto-signing";
import {
  Registry,
} from "@cosmjs/proto-signing";
import type {
  SigningStargateClientOptions } from "@cosmjs/stargate";
import {
  defaultRegistryTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";

import { serviceLoader as cosmosServiceLoader } from "../../generated/createCosmosSDK";
import { serviceLoader as nodeServiceLoader } from "../../generated/createNodeSDK";
import { MsgUnjailSchema } from "../../generated/protos/cosmos/slashing/v1beta1/tx_pb";
import { TxRawSchema } from "../../generated/protos/cosmos/tx/v1beta1/tx_pb";
import { createMessageType } from "../../utils/createMessageType";
import type { TxClient } from "./TxClient";

export async function createStargateClient(
  options: StargateClientOptions,
): Promise<TxClient> {
  const builtInTypes = [MsgUnjailSchema].map((schema) => {
    const type = createMessageType(schema);
    return [type.typeUrl, type] as [string, GeneratedType];
  });
  const registry = new Registry([...defaultRegistryTypes, ...builtInTypes]);
  const client = await SigningStargateClient.connectWithSigner(
    options.endpoint,
    options.signer,
    {
      ...options.stargateOptions,
      registry,
    },
  );
  const getAccount
    = options.getAccount ?? (() => getDefaultAccount(options.signer));

  return {
    async estimateFee(messages, memo) {
      const account = await getAccount(messages);
      const gas = await client.simulate(account, messages, memo);
      return {
        amount: [
          {
            denom: "uakt",
            amount: options.defaultFeeAmount ?? "2500",
          },
        ],
        gas: Math.floor(1.2 * gas).toString(),
        granter: account,
      };
    },
    async sign(messages, fee, memo) {
      const account = await getAccount(messages);
      messages.forEach((message) => {
        if (registry.lookupType(message.typeUrl)) return;

        const type
          = nodeServiceLoader.getLoadedType(message.typeUrl)
            || cosmosServiceLoader.getLoadedType(message.typeUrl);
        if (type) return registry.register(type.typeUrl, type);

        throw new Error(
          `Unknown message type: ${message.typeUrl}. Please use "createMessage" function to make a message?`,
        );
      });
      return client.sign(account, messages, fee, memo);
    },
    async broadcast(txRaw) {
      const bytes = toBinary(TxRawSchema, {
        ...txRaw,
        $typeName: "cosmos.tx.v1beta1.TxRaw",
      });
      return client.broadcastTx(
        bytes,
        options.stargateOptions?.broadcastTimeoutMs,
        options.stargateOptions?.broadcastPollIntervalMs,
      );
    },
  };
}
export interface StargateClientOptions {
  endpoint: string;
  signer: OfflineSigner;
  defaultFeeAmount?: string;
  getAccount?(messages: EncodeObject[]): Promise<string>;
  stargateOptions?: SigningStargateClientOptions;
}

async function getDefaultAccount(signer: OfflineSigner) {
  const account = await signer.getAccounts();
  return account[0].address;
}
