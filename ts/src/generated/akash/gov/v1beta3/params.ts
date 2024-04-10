/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';

/** DepositParams defines the parameters for the x/gov module */
export interface DepositParams {
  $type: 'akash.gov.v1beta3.DepositParams';
  /**
   * min_initial_deposit_rate minimum % of TotalDeposit
   * author of the proposal must put in order for proposal tx to be committed
   */
  minInitialDepositRate: Uint8Array;
}

function createBaseDepositParams(): DepositParams {
  return {
    $type: 'akash.gov.v1beta3.DepositParams',
    minInitialDepositRate: new Uint8Array(0),
  };
}

export const DepositParams = {
  $type: 'akash.gov.v1beta3.DepositParams' as const,

  encode(
    message: DepositParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minInitialDepositRate.length !== 0) {
      writer.uint32(10).bytes(message.minInitialDepositRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minInitialDepositRate = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositParams {
    return {
      $type: DepositParams.$type,
      minInitialDepositRate: isSet(object.minInitialDepositRate)
        ? bytesFromBase64(object.minInitialDepositRate)
        : new Uint8Array(0),
    };
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.minInitialDepositRate.length !== 0) {
      obj.minInitialDepositRate = base64FromBytes(
        message.minInitialDepositRate,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<DepositParams>): DepositParams {
    return DepositParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minInitialDepositRate =
      object.minInitialDepositRate ?? new Uint8Array(0);
    return message;
  },
};

messageTypeRegistry.set(DepositParams.$type, DepositParams);

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
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
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
