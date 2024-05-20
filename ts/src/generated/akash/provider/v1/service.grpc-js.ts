/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "../../../google/protobuf/empty";
import { Status } from "./status";

export const protobufPackage = "akash.provider.v1";

/** ProviderRPC defines the RPC server for provider */
export type ProviderRPCService = typeof ProviderRPCService;
export const ProviderRPCService = {
  /**
   * GetStatus defines a method to query provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  getStatus: {
    path: "/akash.provider.v1.ProviderRPC/GetStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Status) =>
      Buffer.from(Status.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Status.decode(value),
  },
  /**
   * Status defines a method to stream provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamStatus: {
    path: "/akash.provider.v1.ProviderRPC/StreamStatus",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Status) =>
      Buffer.from(Status.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Status.decode(value),
  },
} as const;

export interface ProviderRPCServer extends UntypedServiceImplementation {
  /**
   * GetStatus defines a method to query provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  getStatus: handleUnaryCall<Empty, Status>;
  /**
   * Status defines a method to stream provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamStatus: handleServerStreamingCall<Empty, Status>;
}

export interface ProviderRPCClient extends Client {
  /**
   * GetStatus defines a method to query provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  getStatus(
    request: Empty,
    callback: (error: ServiceError | null, response: Status) => void,
  ): ClientUnaryCall;
  getStatus(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Status) => void,
  ): ClientUnaryCall;
  getStatus(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Status) => void,
  ): ClientUnaryCall;
  /**
   * Status defines a method to stream provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamStatus(
    request: Empty,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<Status>;
  streamStatus(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<Status>;
}

export const ProviderRPCClient = makeGenericClientConstructor(
  ProviderRPCService,
  "akash.provider.v1.ProviderRPC",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): ProviderRPCClient;
  service: typeof ProviderRPCService;
  serviceName: string;
};
