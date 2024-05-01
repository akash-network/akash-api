/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

/** ClientInfo akash specific client info */
export interface ClientInfo {
  $type: "akash.discovery.v1.ClientInfo";
  apiVersion: string;
}

function createBaseClientInfo(): ClientInfo {
  return { $type: "akash.discovery.v1.ClientInfo", apiVersion: "" };
}

export const ClientInfo = {
  $type: "akash.discovery.v1.ClientInfo" as const,

  encode(message: ClientInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientInfo {
    return {
      $type: ClientInfo.$type,
      apiVersion: isSet(object.apiVersion) ? globalThis.String(object.apiVersion) : "",
    };
  },

  toJSON(message: ClientInfo): unknown {
    const obj: any = {};
    if (message.apiVersion !== "") {
      obj.apiVersion = message.apiVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<ClientInfo>): ClientInfo {
    return ClientInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientInfo>): ClientInfo {
    const message = createBaseClientInfo();
    message.apiVersion = object.apiVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClientInfo.$type, ClientInfo);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
