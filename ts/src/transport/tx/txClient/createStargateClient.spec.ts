import type {
  EncodeObject,
  OfflineSigner,
} from "@cosmjs/proto-signing";
import type { SigningStargateClient, StdFee } from "@cosmjs/stargate";
import { describe, expect, it, jest } from "@jest/globals";

import type { TxClient } from "../TxClient.ts";
import { createStargateClient } from "./createStargateClient.ts";

describe(createStargateClient.name, () => {
  const MESSAGE_TYPE = "/test.type";

  describe("sign", () => {
    includeSigningTests(async (client) => {
      const messages: EncodeObject[] = [{ typeUrl: MESSAGE_TYPE, value: {} }];
      const fee: StdFee = { amount: [], gas: "1000" };
      await client.sign(messages, fee, "test memo");
    });
  });

  describe("estimateFee", () => {
    includeSigningTests(async (client) => {
      const messages: EncodeObject[] = [{ typeUrl: MESSAGE_TYPE, value: {} }];
      await client.estimateFee(messages, "test memo");
    });
  });

  function includeSigningTests(sign: (client: TxClient) => Promise<unknown>) {
    it("does not calls `getMessageType` when signing message with types that are already registered", async () => {
      const getMessageType = jest.fn(() => {
        throw new Error("no types");
      });
      const client = createStargateClient({
        baseUrl: "https://rpc.akash.network",
        signer: createOfflineSigner(),
        builtInTypes: [{
          typeUrl: MESSAGE_TYPE,
          encode: () => new Uint8Array(0),
          decode: () => ({}),
          fromPartial: () => ({}),
        }],
        getMessageType,
        createClient: async () => ({
          sign: jest.fn(),
          simulate: jest.fn(),
          broadcastTx: jest.fn(),
        } as unknown as SigningStargateClient),
      });

      await sign(client);

      expect(getMessageType).not.toHaveBeenCalled();
    });

    it("calls `getMessageType` when signing message with types that are not registered", async () => {
      const getMessageType = jest.fn(() => ({
        typeUrl: MESSAGE_TYPE,
        encode: () => new Uint8Array(0),
        decode: () => ({}),
        fromPartial: () => ({}),
      }));
      const client = createStargateClient({
        baseUrl: "https://rpc.akash.network",
        signer: createOfflineSigner(),
        getMessageType,
        createClient: async () => ({
          sign: jest.fn(),
          simulate: jest.fn(),
          broadcastTx: jest.fn(),
        } as unknown as SigningStargateClient),
      });

      await sign(client);

      expect(getMessageType).toHaveBeenCalledWith(MESSAGE_TYPE);
    });
  }

  function createOfflineSigner(): OfflineSigner {
    return {
      getAccounts: async () => [{
        address: "test-address",
        algo: "secp256k1",
        pubkey: new Uint8Array(),
      }],
      signDirect: async (_, signDoc) => ({
        signed: signDoc,
        signature: {
          pub_key: {
            type: "tendermint/PubKeySecp256k1",
            value: new Uint8Array(0),
          },
          signature: "test-signature",
        },
      }),
    };
  }
});
