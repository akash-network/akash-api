/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Group } from "../../manifest/v2beta2/group";
import { Status } from "./status";

/** PreBidCheckRequest is request type for the PreBidCheck RPC method */
export interface PreBidCheckRequest {
  $type: "akash.provider.v1.PreBidCheckRequest";
  manifest: Group[];
}

/** PreBidCheckResponse is response type for the PreBidCheck RPC method */
export interface PreBidCheckResponse {
  $type: "akash.provider.v1.PreBidCheckResponse";
  canBid: boolean;
  price: string;
  reason: string;
}

function createBasePreBidCheckRequest(): PreBidCheckRequest {
  return { $type: "akash.provider.v1.PreBidCheckRequest", manifest: [] };
}

export const PreBidCheckRequest = {
  $type: "akash.provider.v1.PreBidCheckRequest" as const,

  encode(
    message: PreBidCheckRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.manifest) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreBidCheckRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreBidCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.manifest.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PreBidCheckRequest {
    return {
      $type: PreBidCheckRequest.$type,
      manifest: globalThis.Array.isArray(object?.manifest)
        ? object.manifest.map((e: any) => Group.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PreBidCheckRequest): unknown {
    const obj: any = {};
    if (message.manifest?.length) {
      obj.manifest = message.manifest.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PreBidCheckRequest>): PreBidCheckRequest {
    return PreBidCheckRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PreBidCheckRequest>): PreBidCheckRequest {
    const message = createBasePreBidCheckRequest();
    message.manifest = object.manifest?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PreBidCheckRequest.$type, PreBidCheckRequest);

function createBasePreBidCheckResponse(): PreBidCheckResponse {
  return {
    $type: "akash.provider.v1.PreBidCheckResponse",
    canBid: false,
    price: "",
    reason: "",
  };
}

export const PreBidCheckResponse = {
  $type: "akash.provider.v1.PreBidCheckResponse" as const,

  encode(
    message: PreBidCheckResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.canBid !== false) {
      writer.uint32(8).bool(message.canBid);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreBidCheckResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreBidCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.canBid = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.price = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PreBidCheckResponse {
    return {
      $type: PreBidCheckResponse.$type,
      canBid: isSet(object.canBid) ? globalThis.Boolean(object.canBid) : false,
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: PreBidCheckResponse): unknown {
    const obj: any = {};
    if (message.canBid !== false) {
      obj.canBid = message.canBid;
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create(base?: DeepPartial<PreBidCheckResponse>): PreBidCheckResponse {
    return PreBidCheckResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PreBidCheckResponse>): PreBidCheckResponse {
    const message = createBasePreBidCheckResponse();
    message.canBid = object.canBid ?? false;
    message.price = object.price ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

messageTypeRegistry.set(PreBidCheckResponse.$type, PreBidCheckResponse);

/** ProviderRPC defines the RPC server for provider */
export interface ProviderRPC {
  /**
   * GetStatus defines a method to query provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  GetStatus(request: Empty): Promise<Status>;
  /**
   * Status defines a method to stream provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  StreamStatus(request: Empty): Observable<Status>;
  /**
   * PreBidCheck defines a method to check if a provider can bid on a manifest
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  PreBidCheck(request: PreBidCheckRequest): Promise<PreBidCheckResponse>;
}

export const ProviderRPCServiceName = "akash.provider.v1.ProviderRPC";
export class ProviderRPCClientImpl implements ProviderRPC {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProviderRPCServiceName;
    this.rpc = rpc;
    this.GetStatus = this.GetStatus.bind(this);
    this.StreamStatus = this.StreamStatus.bind(this);
    this.PreBidCheck = this.PreBidCheck.bind(this);
  }
  GetStatus(request: Empty): Promise<Status> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStatus", data);
    return promise.then((data) => Status.decode(_m0.Reader.create(data)));
  }

  StreamStatus(request: Empty): Observable<Status> {
    const data = Empty.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      this.service,
      "StreamStatus",
      data,
    );
    return result.pipe(map((data) => Status.decode(_m0.Reader.create(data))));
  }

  PreBidCheck(request: PreBidCheckRequest): Promise<PreBidCheckResponse> {
    const data = PreBidCheckRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PreBidCheck", data);
    return promise.then((data) =>
      PreBidCheckResponse.decode(_m0.Reader.create(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>,
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array,
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>,
  ): Observable<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
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
