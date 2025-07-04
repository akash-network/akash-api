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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Empty } from "../../../google/protobuf/empty";
import { messageTypeRegistry } from "../../../typeRegistry";
import { GroupSpec } from "../../deployment/v1beta3/groupspec";
import { Status } from "./status";

export const protobufPackage = "akash.provider.v1";

/** BidPreCheckRequest is request type for the BidPreCheck RPC method */
export interface BidPreCheckRequest {
  $type: "akash.provider.v1.BidPreCheckRequest";
  groups: GroupSpec[];
}

/** GroupBidPreCheck contains bid information for a specific group */
export interface GroupBidPreCheck {
  $type: "akash.provider.v1.GroupBidPreCheck";
  name: string;
  minBidPrice: DecCoin | undefined;
  reason: string;
  canBid: boolean;
}

/** PreBidCheckResponse is response type for the PreBidCheck RPC method */
export interface BidPreCheckResponse {
  $type: "akash.provider.v1.BidPreCheckResponse";
  groupBidPreChecks: GroupBidPreCheck[];
  totalPrice: DecCoin | undefined;
}

function createBaseBidPreCheckRequest(): BidPreCheckRequest {
  return { $type: "akash.provider.v1.BidPreCheckRequest", groups: [] };
}

export const BidPreCheckRequest = {
  $type: "akash.provider.v1.BidPreCheckRequest" as const,

  encode(
    message: BidPreCheckRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidPreCheckRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidPreCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BidPreCheckRequest {
    return {
      $type: BidPreCheckRequest.$type,
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => GroupSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BidPreCheckRequest): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => GroupSpec.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BidPreCheckRequest>): BidPreCheckRequest {
    return BidPreCheckRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BidPreCheckRequest>): BidPreCheckRequest {
    const message = createBaseBidPreCheckRequest();
    message.groups = object.groups?.map((e) => GroupSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(BidPreCheckRequest.$type, BidPreCheckRequest);

function createBaseGroupBidPreCheck(): GroupBidPreCheck {
  return {
    $type: "akash.provider.v1.GroupBidPreCheck",
    name: "",
    minBidPrice: undefined,
    reason: "",
    canBid: false,
  };
}

export const GroupBidPreCheck = {
  $type: "akash.provider.v1.GroupBidPreCheck" as const,

  encode(
    message: GroupBidPreCheck,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.minBidPrice !== undefined) {
      DecCoin.encode(message.minBidPrice, writer.uint32(18).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.canBid !== false) {
      writer.uint32(32).bool(message.canBid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupBidPreCheck {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupBidPreCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minBidPrice = DecCoin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.canBid = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupBidPreCheck {
    return {
      $type: GroupBidPreCheck.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      minBidPrice: isSet(object.minBidPrice)
        ? DecCoin.fromJSON(object.minBidPrice)
        : undefined,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
      canBid: isSet(object.canBid) ? globalThis.Boolean(object.canBid) : false,
    };
  },

  toJSON(message: GroupBidPreCheck): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.minBidPrice !== undefined) {
      obj.minBidPrice = DecCoin.toJSON(message.minBidPrice);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.canBid !== false) {
      obj.canBid = message.canBid;
    }
    return obj;
  },

  create(base?: DeepPartial<GroupBidPreCheck>): GroupBidPreCheck {
    return GroupBidPreCheck.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GroupBidPreCheck>): GroupBidPreCheck {
    const message = createBaseGroupBidPreCheck();
    message.name = object.name ?? "";
    message.minBidPrice =
      object.minBidPrice !== undefined && object.minBidPrice !== null
        ? DecCoin.fromPartial(object.minBidPrice)
        : undefined;
    message.reason = object.reason ?? "";
    message.canBid = object.canBid ?? false;
    return message;
  },
};

messageTypeRegistry.set(GroupBidPreCheck.$type, GroupBidPreCheck);

function createBaseBidPreCheckResponse(): BidPreCheckResponse {
  return {
    $type: "akash.provider.v1.BidPreCheckResponse",
    groupBidPreChecks: [],
    totalPrice: undefined,
  };
}

export const BidPreCheckResponse = {
  $type: "akash.provider.v1.BidPreCheckResponse" as const,

  encode(
    message: BidPreCheckResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groupBidPreChecks) {
      GroupBidPreCheck.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalPrice !== undefined) {
      DecCoin.encode(message.totalPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidPreCheckResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidPreCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupBidPreChecks.push(
            GroupBidPreCheck.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalPrice = DecCoin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BidPreCheckResponse {
    return {
      $type: BidPreCheckResponse.$type,
      groupBidPreChecks: globalThis.Array.isArray(object?.groupBidPreChecks)
        ? object.groupBidPreChecks.map((e: any) => GroupBidPreCheck.fromJSON(e))
        : [],
      totalPrice: isSet(object.totalPrice)
        ? DecCoin.fromJSON(object.totalPrice)
        : undefined,
    };
  },

  toJSON(message: BidPreCheckResponse): unknown {
    const obj: any = {};
    if (message.groupBidPreChecks?.length) {
      obj.groupBidPreChecks = message.groupBidPreChecks.map((e) =>
        GroupBidPreCheck.toJSON(e),
      );
    }
    if (message.totalPrice !== undefined) {
      obj.totalPrice = DecCoin.toJSON(message.totalPrice);
    }
    return obj;
  },

  create(base?: DeepPartial<BidPreCheckResponse>): BidPreCheckResponse {
    return BidPreCheckResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BidPreCheckResponse>): BidPreCheckResponse {
    const message = createBaseBidPreCheckResponse();
    message.groupBidPreChecks =
      object.groupBidPreChecks?.map((e) => GroupBidPreCheck.fromPartial(e)) ||
      [];
    message.totalPrice =
      object.totalPrice !== undefined && object.totalPrice !== null
        ? DecCoin.fromPartial(object.totalPrice)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(BidPreCheckResponse.$type, BidPreCheckResponse);

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
  /**
   * BidPreCheck defines a method to check if a provider can bid on a manifest
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  bidPreCheck: {
    path: "/akash.provider.v1.ProviderRPC/BidPreCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BidPreCheckRequest) =>
      Buffer.from(BidPreCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BidPreCheckRequest.decode(value),
    responseSerialize: (value: BidPreCheckResponse) =>
      Buffer.from(BidPreCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BidPreCheckResponse.decode(value),
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
  /**
   * BidPreCheck defines a method to check if a provider can bid on a manifest
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  bidPreCheck: handleUnaryCall<BidPreCheckRequest, BidPreCheckResponse>;
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
  /**
   * BidPreCheck defines a method to check if a provider can bid on a manifest
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  bidPreCheck(
    request: BidPreCheckRequest,
    callback: (
      error: ServiceError | null,
      response: BidPreCheckResponse,
    ) => void,
  ): ClientUnaryCall;
  bidPreCheck(
    request: BidPreCheckRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: BidPreCheckResponse,
    ) => void,
  ): ClientUnaryCall;
  bidPreCheck(
    request: BidPreCheckRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: BidPreCheckResponse,
    ) => void,
  ): ClientUnaryCall;
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

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
