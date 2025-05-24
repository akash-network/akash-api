import type { DescMessage, DescMethodBiDiStreaming, DescMethodUnary } from "@bufbuild/protobuf";
import type { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { describe, expect, it, jest } from "@jest/globals";
import { proto } from "@test/helpers/proto";

import { createAsyncIterable } from "../../utils/stream.ts";
import { createTxTransport } from "./createTxTransport.ts";
import type { TxClient, TxRaw } from "./TxClient.ts";
import { TxError } from "./TxError.ts";

describe(createTxTransport.name, () => {
  describe("stream", () => {
    it("throws when `stream` method is called", async () => {
      const { TestServiceSchema } = await setup();
      const transport = createTxTransport({
        client: createMockTxClient(),
        getMessageType,
      });

      await expect(transport.stream(TestServiceSchema.method.streamMethod, createAsyncIterable([{ test: "input" }]))).rejects.toThrow(/not supported/i);
    });
  });

  describe("unary", () => {
    it("calls `estimateFee` if no fee is provided", async () => {
      const { TestServiceSchema } = await setup();
      const fee: StdFee = {
        amount: [{ denom: "uakt", amount: "100000" }],
        gas: "100000",
      };
      const client = createMockTxClient({ estimateFee: jest.fn(() => Promise.resolve(fee)) });
      const transport = createTxTransport({
        client,
        getMessageType,
      });

      await transport.unary(TestServiceSchema.method.testMethod, { test: "input" });

      expect(client.estimateFee).toHaveBeenCalled();
      expect(client.sign).toHaveBeenCalledWith(expect.anything(), fee, expect.anything());
    });

    it("does not `estimateFee` if a fee is provided", async () => {
      const { TestServiceSchema } = await setup();
      const client = createMockTxClient();
      const transport = createTxTransport({
        client,
        getMessageType,
      });
      const fee: StdFee = {
        amount: [{ denom: "uakt", amount: "100000" }],
        gas: "100000",
      };

      await transport.unary(TestServiceSchema.method.testMethod, { test: "input" }, {
        fee,
      });

      expect(client.estimateFee).not.toHaveBeenCalled();
      expect(client.sign).toHaveBeenCalledWith(expect.anything(), fee, expect.anything());
    });

    it("signs and broadcasts a transaction with single message", async () => {
      const { TestServiceSchema } = await setup();
      const fee: StdFee = {
        amount: [{ denom: "uakt", amount: "100000" }],
        gas: "100000",
      };
      const txRaw: TxRaw = {
        bodyBytes: new Uint8Array(0),
        authInfoBytes: new Uint8Array(0),
        signatures: [],
      };
      const txResponse: DeliverTxResponse = {
        height: 1,
        txIndex: 0,
        code: 0,
        transactionHash: "123",
        events: [],
        msgResponses: [],
        gasUsed: 1n,
        gasWanted: 1n,
      };
      const client = createMockTxClient({
        estimateFee: jest.fn(() => Promise.resolve(fee)),
        sign: jest.fn(() => Promise.resolve(txRaw)),
        broadcast: jest.fn(() => Promise.resolve(txResponse)),
      });
      const transport = createTxTransport({
        client,
        getMessageType,
      });

      const afterSign = jest.fn();
      const afterBroadcast = jest.fn();
      const result = await transport.unary(TestServiceSchema.method.testMethod, { test: "input" }, {
        memo: "test",
        afterSign,
        afterBroadcast,
      });
      const messages = [{
        typeUrl: `/${TestServiceSchema.method.testMethod.input.typeName}`,
        value: { test: "input" },
      }];

      expect(client.estimateFee).toHaveBeenCalledWith(messages, "test");
      expect(client.sign).toHaveBeenCalledWith(messages, fee, "test");
      expect(afterSign).toHaveBeenCalledWith(txRaw);
      expect(client.broadcast).toHaveBeenCalledWith(txRaw);
      expect(afterBroadcast).toHaveBeenCalledWith(txResponse);
      expect(result.message).toEqual({});
    });

    it("decodes response if `msgResponses` has a response", async () => {
      const { TestServiceSchema } = await setup();
      const client = createMockTxClient({
        broadcast: jest.fn(() => Promise.resolve({
          height: 1,
          txIndex: 0,
          code: 0,
          transactionHash: "123",
          events: [],
          msgResponses: [{
            typeUrl: `/${TestServiceSchema.method.testMethod.output.typeName}`,
            value: new Uint8Array(0),
          }],
          gasUsed: 1n,
          gasWanted: 1n,
        })),
      });
      const transport = createTxTransport({
        client,
        getMessageType: (typeUrl) => ({
          ...getMessageType(),
          decode: jest.fn(() => (typeUrl === `/${TestServiceSchema.method.testMethod.output.typeName}` ? { test: "output", ok: true } : null)),
        }),
      });

      const result = await transport.unary(TestServiceSchema.method.testMethod, { test: "input" });
      expect(result.message).toEqual({ test: "output", ok: true });
    });

    it("throws if tx response has a non-zero code", async () => {
      const { TestServiceSchema } = await setup();
      const client = createMockTxClient({
        broadcast: jest.fn(() => Promise.resolve({
          height: 1,
          txIndex: 0,
          code: 1,
          transactionHash: "123",
          events: [],
          msgResponses: [],
          gasUsed: 1n,
          gasWanted: 1n,
        })),
      });
      const transport = createTxTransport({
        client,
        getMessageType,
      });

      await expect(transport.unary(TestServiceSchema.method.testMethod, { test: "input" })).rejects.toThrow(TxError);
    });
  });

  async function setup() {
    const def = await proto`
      service TestService {
        rpc TestMethod(TestInput) returns (TestOutput);
        rpc StreamMethod(stream TestInput) returns (stream TestOutput);
      }

      message TestInput {
        string test = 1;
      }

      message TestOutput {
        string result = 1;
      }
    `;
    const TestServiceSchema = def.getService<{
      testMethod: DescMethodUnary<DescMessage, DescMessage>;
      streamMethod: DescMethodBiDiStreaming<DescMessage, DescMessage>;
    }>("TestService");

    return { TestServiceSchema };
  }

  function createMockTxClient(overrides?: Partial<TxClient>): TxClient {
    return {
      broadcast: jest.fn(() => Promise.resolve({
        height: 1,
        txIndex: 0,
        code: 0,
        transactionHash: "123",
        events: [],
        msgResponses: [],
        gasUsed: 1n,
        gasWanted: 1n,
      })),
      estimateFee: jest.fn(() => Promise.resolve({
        amount: [],
        gas: "100000",
      })),
      sign: jest.fn(() => Promise.resolve({
        bodyBytes: new Uint8Array(0),
        authInfoBytes: new Uint8Array(0),
        signatures: [],
      })),
      ...overrides,
    };
  }

  function getMessageType() {
    return {
      decode: jest.fn(),
      encode: jest.fn(),
      fromPartial: jest.fn(),
    };
  }
});
