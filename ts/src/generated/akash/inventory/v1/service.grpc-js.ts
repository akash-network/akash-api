/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from '@grpc/grpc-js';
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from '@grpc/grpc-js';
import { Empty } from '../../../google/protobuf/empty';
import { Cluster } from './cluster';
import { Node } from './node';

export const protobufPackage = 'akash.inventory.v1';

/** NodeRPC defines the RPC server of node */
export type NodeRPCService = typeof NodeRPCService;
export const NodeRPCService = {
  /**
   * QueryNode defines a method to query hardware state of the node
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  queryNode: {
    path: '/akash.inventory.v1.NodeRPC/QueryNode',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Node) =>
      Buffer.from(Node.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Node.decode(value),
  },
  /**
   * StreamNode defines a method to stream hardware state of the node
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamNode: {
    path: '/akash.inventory.v1.NodeRPC/StreamNode',
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Node) =>
      Buffer.from(Node.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Node.decode(value),
  },
} as const;

export interface NodeRPCServer extends UntypedServiceImplementation {
  /**
   * QueryNode defines a method to query hardware state of the node
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  queryNode: handleUnaryCall<Empty, Node>;
  /**
   * StreamNode defines a method to stream hardware state of the node
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamNode: handleServerStreamingCall<Empty, Node>;
}

export interface NodeRPCClient extends Client {
  /**
   * QueryNode defines a method to query hardware state of the node
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  queryNode(
    request: Empty,
    callback: (error: ServiceError | null, response: Node) => void,
  ): ClientUnaryCall;
  queryNode(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Node) => void,
  ): ClientUnaryCall;
  queryNode(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Node) => void,
  ): ClientUnaryCall;
  /**
   * StreamNode defines a method to stream hardware state of the node
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamNode(
    request: Empty,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<Node>;
  streamNode(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<Node>;
}

export const NodeRPCClient = makeGenericClientConstructor(
  NodeRPCService,
  'akash.inventory.v1.NodeRPC',
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): NodeRPCClient;
  service: typeof NodeRPCService;
  serviceName: string;
};

/** ClusterRPC defines the RPC server of cluster */
export type ClusterRPCService = typeof ClusterRPCService;
export const ClusterRPCService = {
  /**
   * QueryCluster defines a method to query hardware state of the cluster
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  queryCluster: {
    path: '/akash.inventory.v1.ClusterRPC/QueryCluster',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Cluster) =>
      Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /**
   * StreamCluster defines a method to stream hardware state of the cluster
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamCluster: {
    path: '/akash.inventory.v1.ClusterRPC/StreamCluster',
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Cluster) =>
      Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
} as const;

export interface ClusterRPCServer extends UntypedServiceImplementation {
  /**
   * QueryCluster defines a method to query hardware state of the cluster
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  queryCluster: handleUnaryCall<Empty, Cluster>;
  /**
   * StreamCluster defines a method to stream hardware state of the cluster
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamCluster: handleServerStreamingCall<Empty, Cluster>;
}

export interface ClusterRPCClient extends Client {
  /**
   * QueryCluster defines a method to query hardware state of the cluster
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  queryCluster(
    request: Empty,
    callback: (error: ServiceError | null, response: Cluster) => void,
  ): ClientUnaryCall;
  queryCluster(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Cluster) => void,
  ): ClientUnaryCall;
  queryCluster(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Cluster) => void,
  ): ClientUnaryCall;
  /**
   * StreamCluster defines a method to stream hardware state of the cluster
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamCluster(
    request: Empty,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<Cluster>;
  streamCluster(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<Cluster>;
}

export const ClusterRPCClient = makeGenericClientConstructor(
  ClusterRPCService,
  'akash.inventory.v1.ClusterRPC',
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): ClusterRPCClient;
  service: typeof ClusterRPCService;
  serviceName: string;
};
