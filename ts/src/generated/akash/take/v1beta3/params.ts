/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';

/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRate {
  $type: 'akash.take.v1beta3.DenomTakeRate';
  denom: string;
  rate: number;
}

/** Params defines the parameters for the x/take package */
export interface Params {
  $type: 'akash.take.v1beta3.Params';
  /** denom -> % take rate */
  denomTakeRates: DenomTakeRate[];
  defaultTakeRate: number;
}

function createBaseDenomTakeRate(): DenomTakeRate {
  return { $type: 'akash.take.v1beta3.DenomTakeRate', denom: '', rate: 0 };
}

export const DenomTakeRate = {
  $type: 'akash.take.v1beta3.DenomTakeRate' as const,

  encode(
    message: DenomTakeRate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== 0) {
      writer.uint32(16).uint32(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTakeRate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTakeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rate = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomTakeRate {
    return {
      $type: DenomTakeRate.$type,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : '',
      rate: isSet(object.rate) ? globalThis.Number(object.rate) : 0,
    };
  },

  toJSON(message: DenomTakeRate): unknown {
    const obj: any = {};
    if (message.denom !== '') {
      obj.denom = message.denom;
    }
    if (message.rate !== 0) {
      obj.rate = Math.round(message.rate);
    }
    return obj;
  },

  create(base?: DeepPartial<DenomTakeRate>): DenomTakeRate {
    return DenomTakeRate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DenomTakeRate>): DenomTakeRate {
    const message = createBaseDenomTakeRate();
    message.denom = object.denom ?? '';
    message.rate = object.rate ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DenomTakeRate.$type, DenomTakeRate);

function createBaseParams(): Params {
  return {
    $type: 'akash.take.v1beta3.Params',
    denomTakeRates: [],
    defaultTakeRate: 0,
  };
}

export const Params = {
  $type: 'akash.take.v1beta3.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.denomTakeRates) {
      DenomTakeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultTakeRate !== 0) {
      writer.uint32(16).uint32(message.defaultTakeRate);
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

          message.denomTakeRates.push(
            DenomTakeRate.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.defaultTakeRate = reader.uint32();
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
      denomTakeRates: globalThis.Array.isArray(object?.denomTakeRates)
        ? object.denomTakeRates.map((e: any) => DenomTakeRate.fromJSON(e))
        : [],
      defaultTakeRate: isSet(object.defaultTakeRate)
        ? globalThis.Number(object.defaultTakeRate)
        : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomTakeRates?.length) {
      obj.denomTakeRates = message.denomTakeRates.map((e) =>
        DenomTakeRate.toJSON(e),
      );
    }
    if (message.defaultTakeRate !== 0) {
      obj.defaultTakeRate = Math.round(message.defaultTakeRate);
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denomTakeRates =
      object.denomTakeRates?.map((e) => DenomTakeRate.fromPartial(e)) || [];
    message.defaultTakeRate = object.defaultTakeRate ?? 0;
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
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
