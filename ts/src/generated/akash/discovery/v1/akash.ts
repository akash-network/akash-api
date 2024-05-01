/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { ClientInfo } from "./client_info";

/** Akash akash specific RPC parameters */
export interface Akash {
  $type: "akash.discovery.v1.Akash";
  clientInfo: ClientInfo | undefined;
}

function createBaseAkash(): Akash {
  return { $type: "akash.discovery.v1.Akash", clientInfo: undefined };
}

export const Akash = {
  $type: "akash.discovery.v1.Akash" as const,

  encode(message: Akash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Akash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Akash {
    return {
      $type: Akash.$type,
      clientInfo: isSet(object.clientInfo) ? ClientInfo.fromJSON(object.clientInfo) : undefined,
    };
  },

  toJSON(message: Akash): unknown {
    const obj: any = {};
    if (message.clientInfo !== undefined) {
      obj.clientInfo = ClientInfo.toJSON(message.clientInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<Akash>): Akash {
    return Akash.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Akash>): Akash {
    const message = createBaseAkash();
    message.clientInfo = (object.clientInfo !== undefined && object.clientInfo !== null)
      ? ClientInfo.fromPartial(object.clientInfo)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Akash.$type, Akash);

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
