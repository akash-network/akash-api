/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { ResourcePair } from './resourcepair';

export const protobufPackage = 'akash.inventory.v1';

/** CPUInfo reports CPU details */
export interface CPUInfo {
  $type: 'akash.inventory.v1.CPUInfo';
  id: string;
  vendor: string;
  model: string;
  vcores: number;
}

/** CPU reports CPU inventory details */
export interface CPU {
  $type: 'akash.inventory.v1.CPU';
  quantity: ResourcePair | undefined;
  info: CPUInfo[];
}

function createBaseCPUInfo(): CPUInfo {
  return {
    $type: 'akash.inventory.v1.CPUInfo',
    id: '',
    vendor: '',
    model: '',
    vcores: 0,
  };
}

export const CPUInfo = {
  $type: 'akash.inventory.v1.CPUInfo' as const,

  encode(
    message: CPUInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.vendor !== '') {
      writer.uint32(18).string(message.vendor);
    }
    if (message.model !== '') {
      writer.uint32(26).string(message.model);
    }
    if (message.vcores !== 0) {
      writer.uint32(32).uint32(message.vcores);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPUInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPUInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vendor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.model = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.vcores = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPUInfo {
    return {
      $type: CPUInfo.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : '',
      model: isSet(object.model) ? globalThis.String(object.model) : '',
      vcores: isSet(object.vcores) ? globalThis.Number(object.vcores) : 0,
    };
  },

  toJSON(message: CPUInfo): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.vendor !== '') {
      obj.vendor = message.vendor;
    }
    if (message.model !== '') {
      obj.model = message.model;
    }
    if (message.vcores !== 0) {
      obj.vcores = Math.round(message.vcores);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPUInfo>, I>>(base?: I): CPUInfo {
    return CPUInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CPUInfo>, I>>(object: I): CPUInfo {
    const message = createBaseCPUInfo();
    message.id = object.id ?? '';
    message.vendor = object.vendor ?? '';
    message.model = object.model ?? '';
    message.vcores = object.vcores ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CPUInfo.$type, CPUInfo);

function createBaseCPU(): CPU {
  return { $type: 'akash.inventory.v1.CPU', quantity: undefined, info: [] };
}

export const CPU = {
  $type: 'akash.inventory.v1.CPU' as const,

  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.info) {
      CPUInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quantity = ResourcePair.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.info.push(CPUInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPU {
    return {
      $type: CPU.$type,
      quantity: isSet(object.quantity)
        ? ResourcePair.fromJSON(object.quantity)
        : undefined,
      info: globalThis.Array.isArray(object?.info)
        ? object.info.map((e: any) => CPUInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPU): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = ResourcePair.toJSON(message.quantity);
    }
    if (message.info?.length) {
      obj.info = message.info.map((e) => CPUInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPU>, I>>(base?: I): CPU {
    return CPU.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CPU>, I>>(object: I): CPU {
    const message = createBaseCPU();
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? ResourcePair.fromPartial(object.quantity)
        : undefined;
    message.info = object.info?.map((e) => CPUInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CPU.$type, CPU);

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
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | '$type'>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
