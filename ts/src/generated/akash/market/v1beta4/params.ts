/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { messageTypeRegistry } from "../../../typeRegistry";

/** Params is the params for the x/market module */
export interface Params {
  $type: "akash.market.v1beta4.Params";
  bidMinDeposit: Coin | undefined;
  orderMaxBids: number;
}

function createBaseParams(): Params {
  return { $type: "akash.market.v1beta4.Params", bidMinDeposit: undefined, orderMaxBids: 0 };
}

export const Params = {
  $type: "akash.market.v1beta4.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bidMinDeposit = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.orderMaxBids = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      bidMinDeposit: isSet(object.bidMinDeposit) ? Coin.fromJSON(object.bidMinDeposit) : undefined,
      orderMaxBids: isSet(object.orderMaxBids) ? globalThis.Number(object.orderMaxBids) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.bidMinDeposit !== undefined) {
      obj.bidMinDeposit = Coin.toJSON(message.bidMinDeposit);
    }
    if (message.orderMaxBids !== 0) {
      obj.orderMaxBids = Math.round(message.orderMaxBids);
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.bidMinDeposit = (object.bidMinDeposit !== undefined && object.bidMinDeposit !== null)
      ? Coin.fromPartial(object.bidMinDeposit)
      : undefined;
    message.orderMaxBids = object.orderMaxBids ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

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
