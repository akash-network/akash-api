import type { DescMethod, DescMethodBiDiStreaming, DescMethodClientStreaming, DescMethodServerStreaming, DescMethodUnary, MessageShape } from "@bufbuild/protobuf";
import type { UnaryResponse } from "@connectrpc/connect";
import { describe, expect, it, jest } from "@jest/globals";
import { proto } from "@test/helpers/proto";

import type { StreamResponse, Transport } from "../transport/types.ts";
import { createAsyncIterable } from "../utils/stream.ts";
import { createServiceClient } from "./createServiceClient.ts";

describe(createServiceClient.name, () => {
  describe("unary method", () => {
    it("can create unary method", async () => {
      const { TestServiceSchema } = await setup();
      const transport = createTransport("unary", () => ({
        message: { $typeName: "akash.test.unit.TestOutput", result: "result" },
        header: new Headers(),
        trailer: new Headers(),
      }));

      const client = createServiceClient(TestServiceSchema, transport);

      const abortSignal = new AbortController().signal;
      const headers = {
        "x-test": "test",
      };
      const onHeader = jest.fn();
      const onTrailer = jest.fn();
      const result = await client.testMethod({ test: "input" }, {
        signal: abortSignal,
        timeoutMs: 1000,
        headers,
        onHeader,
        onTrailer,
      });
      expect(result).toEqual({ result: "result" });
      expect(transport.unary).toHaveBeenCalledWith(
        TestServiceSchema.method.testMethod,
        { $typeName: "akash.test.unit.TestInput", test: "input" },
        {
          signal: abortSignal,
          timeoutMs: 1000,
          headers,
          onHeader,
          onTrailer,
        },
      );

      const transportResult = (await transport.unary.mock.results.at(-1)?.value) as Awaited<ReturnType<typeof transport.unary>>;
      expect(onHeader).toHaveBeenCalledWith(transportResult.header);
      expect(onTrailer).toHaveBeenCalledWith(transportResult.trailer);
    });

    it("applies patches to types if provided", async () => {
      const { TestServiceSchema } = await setup();
      const transport = createTransport("unary", () => ({
        message: { $typeName: "akash.test.unit.TestOutput", result: "result" },
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestOutput"(value: MessageShape<typeof TestServiceSchema.method.testMethod.output>, transform) {
            value.result = `${transform}-${value.result}`;
            return value;
          },
          "akash.test.unit.TestInput"(value: MessageShape<typeof TestServiceSchema.method.testMethod.input>, transform) {
            value.test = `${transform}-${value.test}`;
            return value;
          },
        },
      });
      const result = await client.testMethod({ test: "input" });

      expect(transport.unary).toHaveBeenCalledWith(
        TestServiceSchema.method.testMethod,
        { $typeName: "akash.test.unit.TestInput", test: "encode-input" },
        undefined,
      );
      expect(result).toEqual({ result: "decode-result" });
    });

    it("returns object as is if its type does not require patching", async () => {
      const { TestServiceSchema } = await setup();
      const transport = createTransport("unary", () => ({
        message: { $typeName: "akash.test.unit.TestOutput", result: "result" },
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestInput"(value: MessageShape<typeof TestServiceSchema.method.testMethod.input>, transform) {
            value.test = `${transform}-${value.test}`;
            return value;
          },
        },
      });
      const result = await client.testMethod({ test: "input" });

      expect(transport.unary).toHaveBeenCalledWith(
        TestServiceSchema.method.testMethod,
        { $typeName: "akash.test.unit.TestInput", test: "encode-input" },
        undefined,
      );
      expect(result).toEqual({ result: "result" });
    });

    async function setup() {
      const def = await proto`
        service TestService {
          rpc TestMethod(TestInput) returns (TestOutput);
        }

        message TestInput {
          string test = 1;
        }

        message TestOutput {
          string result = 1;
        }
      `;
      const TestInputSchema = def.getMessage<"TestInput", { test: string }>("TestInput");
      const TestOutputSchema = def.getMessage<"TestOutput", { result: string }>("TestOutput");
      const TestServiceSchema = def.getService<{
        testMethod: DescMethodUnary<typeof TestInputSchema, typeof TestOutputSchema>;
      }>("TestService");

      return {
        TestInputSchema,
        TestOutputSchema,
        TestServiceSchema,
      };
    }
  });

  describe("server streaming method", () => {
    it("can create server streaming method", async () => {
      const { TestServiceSchema } = await setup();
      const results = Array.from({ length: 3 }, (_, i) => ({ result: `result${i + 1}` }));

      const transport = createTransport("stream", () => ({
        message: createAsyncIterable(results.map((result) => ({
          ...result,
          $typeName: "akash.test.unit.TestOutput",
        }))),
        header: new Headers(),
        trailer: new Headers(),
      }));

      const client = createServiceClient(TestServiceSchema, transport);

      const abortSignal = new AbortController().signal;
      const headers = {
        "x-test": "test",
      };
      const onHeader = jest.fn();
      const onTrailer = jest.fn();
      const stream = client.testStreamMethod({ test: "input" }, {
        signal: abortSignal,
        timeoutMs: 1000,
        headers,
        onHeader,
        onTrailer,
      });

      expect(await Array.fromAsync(stream)).toEqual(results);
      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testStreamMethod,
        expect.anything(),
        {
          signal: abortSignal,
          timeoutMs: 1000,
          headers,
          onHeader,
          onTrailer,
        },
      );
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual([{
        $typeName: "akash.test.unit.TestInput",
        test: "input",
      }]);
      const transportResult = (await transport.stream.mock.results.at(-1)?.value) as Awaited<ReturnType<typeof transport.stream>>;
      expect(onHeader).toHaveBeenCalledWith(transportResult.header);
      expect(onTrailer).toHaveBeenCalledWith(transportResult.trailer);
    });

    it("applies patches to types if provided", async () => {
      const { TestServiceSchema } = await setup();
      const results = Array.from({ length: 3 }, (_, i) => ({ result: `result${i + 1}` }));

      const transport = createTransport("stream", () => ({
        message: createAsyncIterable(results.map((result) => ({
          ...result,
          $typeName: "akash.test.unit.TestOutput",
        }))),
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestOutput"(value: MessageShape<typeof TestServiceSchema.method.testStreamMethod.output>, transform) {
            value.result = `${transform}-${value.result}`;
            return value;
          },
          "akash.test.unit.TestInput"(value: MessageShape<typeof TestServiceSchema.method.testStreamMethod.input>, transform) {
            value.test = `${transform}-${value.test}`;
            return value;
          },
        },
      });
      const stream = client.testStreamMethod({ test: "input" });

      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testStreamMethod,
        expect.anything(),
        undefined,
      );
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual([{
        $typeName: "akash.test.unit.TestInput",
        test: "encode-input",
      }]);
      expect(await Array.fromAsync(stream)).toEqual(results.map((result) => ({
        ...result,
        result: `decode-${result.result}`,
      })));
    });

    it("returns object as is if its type does not require patching", async () => {
      const { TestServiceSchema } = await setup();
      const results = Array.from({ length: 3 }, (_, i) => ({ result: `result${i + 1}` }));

      const transport = createTransport("stream", () => ({
        message: createAsyncIterable(results.map((result) => ({
          ...result,
          $typeName: "akash.test.unit.TestOutput",
        }))),
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestOutput"(value: MessageShape<typeof TestServiceSchema.method.testStreamMethod.output>, transform) {
            value.result = `${transform}-${value.result}`;
            return value;
          },
        },
      });
      const stream = client.testStreamMethod({ test: "input" });

      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testStreamMethod,
        expect.anything(),
        undefined,
      );
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual([{
        $typeName: "akash.test.unit.TestInput",
        test: "input",
      }]);
      expect(await Array.fromAsync(stream)).toEqual(results.map((result) => ({
        ...result,
        result: `decode-${result.result}`,
      })));
    });

    async function setup() {
      const def = await proto`
        service TestService {
          rpc TestStreamMethod(TestInput) returns (stream TestOutput);
        }

        message TestInput {
          string test = 1;
        }

        message TestOutput {
          string result = 1;
        }
      `;
      const TestInputSchema = def.getMessage<"TestInput", { test: string }>("TestInput");
      const TestOutputSchema = def.getMessage<"TestOutput", { result: string }>("TestOutput");
      const TestServiceSchema = def.getService<{
        testStreamMethod: DescMethodServerStreaming<typeof TestInputSchema, typeof TestOutputSchema>;
      }>("TestService");

      return {
        TestInputSchema,
        TestOutputSchema,
        TestServiceSchema,
      };
    }
  });

  describe("client streaming method", () => {
    it("can create client streaming method", async () => {
      const { TestServiceSchema } = await setup();
      const transport = createTransport("stream", () => ({
        message: createAsyncIterable([
          { $typeName: "akash.test.unit.TestOutput", result: "result" },
        ]),
        header: new Headers(),
        trailer: new Headers(),
      }));
      const client = createServiceClient(TestServiceSchema, transport);

      const abortSignal = new AbortController().signal;
      const headers = {
        "x-test": "test",
      };
      const onHeader = jest.fn();
      const onTrailer = jest.fn();
      const input = Array.from({ length: 3 }, (_, i) => ({ test: `input${i + 1}` }));
      const result = await client.testClientStreamMethod(createAsyncIterable(input), {
        signal: abortSignal,
        timeoutMs: 1000,
        headers,
        onHeader,
        onTrailer,
      });

      expect(result).toEqual({ result: "result" });
      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testClientStreamMethod,
        expect.anything(),
        {
          signal: abortSignal,
          timeoutMs: 1000,
          headers,
          onHeader,
          onTrailer,
        },
      );
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual(
        input.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestInput",
        })),
      );
      const transportResult = (await transport.stream.mock.results.at(-1)?.value) as Awaited<ReturnType<typeof transport.stream>>;
      expect(onHeader).toHaveBeenCalledWith(transportResult.header);
      expect(onTrailer).toHaveBeenCalledWith(transportResult.trailer);
    });

    it("applies patches to types if provided", async () => {
      const { TestServiceSchema } = await setup();
      const input = Array.from({ length: 3 }, (_, i) => ({ test: `input${i + 1}` }));

      const transport = createTransport("stream", () => ({
        message: createAsyncIterable([
          { $typeName: "akash.test.unit.TestOutput", result: "result" },
        ]),
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestOutput"(value: MessageShape<typeof TestServiceSchema.method.testClientStreamMethod.output>, transform) {
            value.result = `${transform}-${value.result}`;
            return value;
          },
          "akash.test.unit.TestInput"(value: MessageShape<typeof TestServiceSchema.method.testClientStreamMethod.input>, transform) {
            value.test = `${transform}-${value.test}`;
            return value;
          },
        },
      });
      const result = await client.testClientStreamMethod(createAsyncIterable(input));

      expect(result).toEqual({ result: "decode-result" });
      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testClientStreamMethod,
        expect.anything(),
        undefined,
      );
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual(
        input.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestInput",
          test: `encode-${item.test}`,
        })),
      );
    });

    it("returns object as is if its type does not require patching", async () => {
      const { TestServiceSchema } = await setup();
      const input = Array.from({ length: 3 }, (_, i) => ({ test: `input${i + 1}` }));

      const transport = createTransport("stream", () => ({
        message: createAsyncIterable([
          { $typeName: "akash.test.unit.TestOutput", result: "result" },
        ]),
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestOutput"(value: MessageShape<typeof TestServiceSchema.method.testClientStreamMethod.output>, transform) {
            value.result = `${transform}-${value.result}`;
            return value;
          },
        },
      });
      const result = await client.testClientStreamMethod(createAsyncIterable(input));

      expect(result).toEqual({ result: "decode-result" });
      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testClientStreamMethod,
        expect.anything(),
        undefined,
      );
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual(
        input.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestInput",
        })),
      );
    });

    async function setup() {
      const def = await proto`
        service TestService {
          rpc TestClientStreamMethod(stream TestInput) returns (TestOutput);
        }

        message TestInput {
          string test = 1;
        }

        message TestOutput {
          string result = 1;
        }
      `;
      const TestInputSchema = def.getMessage<"TestInput", { test: string }>("TestInput");
      const TestOutputSchema = def.getMessage<"TestOutput", { result: string }>("TestOutput");
      const TestServiceSchema = def.getService<{
        testClientStreamMethod: DescMethodClientStreaming<typeof TestInputSchema, typeof TestOutputSchema>;
      }>("TestService");

      return {
        TestInputSchema,
        TestOutputSchema,
        TestServiceSchema,
      };
    }
  });

  describe("bidi streaming method", () => {
    it("can create bidi streaming method", async () => {
      const { TestServiceSchema } = await setup();
      const results = Array.from({ length: 3 }, (_, i) => ({
        result: `result${i + 1}`,
      }));
      const transport = createTransport("stream", () => ({
        message: createAsyncIterable(results.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestOutput",
        }))),
        header: new Headers(),
        trailer: new Headers(),
      }));
      const client = createServiceClient(TestServiceSchema, transport);

      const abortSignal = new AbortController().signal;
      const headers = {
        "x-test": "test",
      };
      const onHeader = jest.fn();
      const onTrailer = jest.fn();
      const input = Array.from({ length: 3 }, (_, i) => ({ test: `input${i + 1}` }));
      const methodsCallResult = client.testBiDiStreamMethod(createAsyncIterable(input), {
        signal: abortSignal,
        timeoutMs: 1000,
        headers,
        onHeader,
        onTrailer,
      });

      expect(await Array.fromAsync(methodsCallResult)).toEqual(results);
      expect(transport.stream).toHaveBeenCalledWith(
        TestServiceSchema.method.testBiDiStreamMethod,
        expect.anything(),
        {
          signal: abortSignal,
          timeoutMs: 1000,
          headers,
          onHeader,
          onTrailer,
        },
      );

      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual(
        input.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestInput",
        })),
      );
      const transportResult = (await transport.stream.mock.results.at(-1)?.value) as Awaited<ReturnType<typeof transport.stream>>;
      expect(onHeader).toHaveBeenCalledWith(transportResult.header);
      expect(onTrailer).toHaveBeenCalledWith(transportResult.trailer);
    });

    it("applies patches to types if provided", async () => {
      const { TestServiceSchema } = await setup();
      const results = Array.from({ length: 3 }, (_, i) => ({
        result: `result${i + 1}`,
      }));
      const transport = createTransport("stream", () => ({
        message: createAsyncIterable(results.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestOutput",
        }))),
        header: new Headers(),
        trailer: new Headers(),
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestOutput"(value: MessageShape<typeof TestServiceSchema.method.testBiDiStreamMethod.output>, transform) {
            value.result = `${transform}-${value.result}`;
            return value;
          },
          "akash.test.unit.TestInput"(value: MessageShape<typeof TestServiceSchema.method.testBiDiStreamMethod.input>, transform) {
            value.test = `${transform}-${value.test}`;
            return value;
          },
        },
      });
      const input = Array.from({ length: 3 }, (_, i) => ({ test: `input${i + 1}` }));
      const methodsCallResult = client.testBiDiStreamMethod(createAsyncIterable(input));

      expect(await Array.fromAsync(methodsCallResult)).toEqual(results.map((result) => ({
        ...result,
        result: `decode-${result.result}`,
      })));
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual(
        input.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestInput",
          test: `encode-${item.test}`,
        })),
      );
    });

    it("returns object as is if its type does not require patching", async () => {
      const { TestServiceSchema } = await setup();
      const results = Array.from({ length: 3 }, (_, i) => ({
        result: `result${i + 1}`,
      }));
      const transport = createTransport("stream", () => ({
        message: createAsyncIterable(results.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestOutput",
        }))),
        header: new Headers(),
        trailer: new Headers(),
      }));
      const client = createServiceClient(TestServiceSchema, transport, {
        typePatches: {
          "akash.test.unit.TestInput"(value: MessageShape<typeof TestServiceSchema.method.testBiDiStreamMethod.input>, transform) {
            value.test = `${transform}-${value.test}`;
            return value;
          },
        },
      });
      const input = Array.from({ length: 3 }, (_, i) => ({ test: `input${i + 1}` }));
      const methodsCallResult = client.testBiDiStreamMethod(createAsyncIterable(input));

      expect(await Array.fromAsync(methodsCallResult)).toEqual(results);
      expect(await Array.fromAsync(transport.stream.mock.lastCall?.at(1) as AsyncIterable<unknown>)).toEqual(
        input.map((item) => ({
          ...item,
          $typeName: "akash.test.unit.TestInput",
          test: `encode-${item.test}`,
        })),
      );
    });

    async function setup() {
      const def = await proto`
        service TestService {
          rpc TestBiDiStreamMethod(stream TestInput) returns (stream TestOutput);
        }

        message TestInput {
          string test = 1;
        }

        message TestOutput {
          string result = 1;
        }
      `;
      const TestInputSchema = def.getMessage<"TestInput", { test: string }>("TestInput");
      const TestOutputSchema = def.getMessage<"TestOutput", { result: string }>("TestOutput");
      const TestServiceSchema = def.getService<{
        testBiDiStreamMethod: DescMethodBiDiStreaming<typeof TestInputSchema, typeof TestOutputSchema>;
      }>("TestService");

      return {
        TestInputSchema,
        TestOutputSchema,
        TestServiceSchema,
      };
    }
  });

  type Response<T extends "stream" | "unary"> = T extends "stream" ? StreamResponse : UnaryResponse;
  function createTransport<T extends "stream" | "unary">(responseType: T, createResponse: () => Pick<Response<T>, "message"> & Partial<Pick<Response<T>, "header" | "trailer">>) {
    const method = jest.fn(async (method: DescMethod) => {
      return {
        header: new Headers(),
        trailer: new Headers(),
        ...createResponse(),
        stream: responseType === "stream" as const,
        service: method.parent,
        method,
      } as Response<T>;
    });

    return {
      unary: notImplemented,
      stream: notImplemented,
      [responseType]: method,
    } as unknown as Omit<Transport, T> & Record<T, jest.MockedFunction<Transport[T]>>;
  }

  async function notImplemented(): Promise<never> {
    throw new Error("not implemented");
  }
});
