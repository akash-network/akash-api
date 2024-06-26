/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

/** Params extends the parameters for the x/staking module */
export interface Params {
  $type: "akash.staking.v1beta3.Params";
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
}

function createBaseParams(): Params {
  return { $type: "akash.staking.v1beta3.Params", minCommissionRate: "" };
}

export const Params = {
  $type: "akash.staking.v1beta3.Params" as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minCommissionRate !== "") {
      writer.uint32(10).string(message.minCommissionRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minCommissionRate = reader.string();
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
      minCommissionRate: isSet(object.minCommissionRate)
        ? globalThis.String(object.minCommissionRate)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.minCommissionRate !== "") {
      obj.minCommissionRate = message.minCommissionRate;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minCommissionRate = object.minCommissionRate ?? "";
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

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
