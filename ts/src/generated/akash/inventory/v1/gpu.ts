/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { ResourcePair } from './resourcepair';

export const protobufPackage = 'akash.inventory.v1';

/** GPUInfo reports GPU details */
export interface GPUInfo {
  $type: 'akash.inventory.v1.GPUInfo';
  vendor: string;
  vendorId: string;
  name: string;
  modelid: string;
  interface: string;
  memorySize: string;
}

/** GPUInfo reports GPU inventory details */
export interface GPU {
  $type: 'akash.inventory.v1.GPU';
  quantity: ResourcePair | undefined;
  info: GPUInfo[];
}

function createBaseGPUInfo(): GPUInfo {
  return {
    $type: 'akash.inventory.v1.GPUInfo',
    vendor: '',
    vendorId: '',
    name: '',
    modelid: '',
    interface: '',
    memorySize: '',
  };
}

export const GPUInfo = {
  $type: 'akash.inventory.v1.GPUInfo' as const,

  encode(
    message: GPUInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.vendor !== '') {
      writer.uint32(10).string(message.vendor);
    }
    if (message.vendorId !== '') {
      writer.uint32(18).string(message.vendorId);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.modelid !== '') {
      writer.uint32(34).string(message.modelid);
    }
    if (message.interface !== '') {
      writer.uint32(42).string(message.interface);
    }
    if (message.memorySize !== '') {
      writer.uint32(50).string(message.memorySize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GPUInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPUInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vendor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vendorId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.modelid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.interface = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.memorySize = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GPUInfo {
    return {
      $type: GPUInfo.$type,
      vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : '',
      vendorId: isSet(object.vendorId)
        ? globalThis.String(object.vendorId)
        : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      modelid: isSet(object.modelid) ? globalThis.String(object.modelid) : '',
      interface: isSet(object.interface)
        ? globalThis.String(object.interface)
        : '',
      memorySize: isSet(object.memorySize)
        ? globalThis.String(object.memorySize)
        : '',
    };
  },

  toJSON(message: GPUInfo): unknown {
    const obj: any = {};
    if (message.vendor !== '') {
      obj.vendor = message.vendor;
    }
    if (message.vendorId !== '') {
      obj.vendorId = message.vendorId;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.modelid !== '') {
      obj.modelid = message.modelid;
    }
    if (message.interface !== '') {
      obj.interface = message.interface;
    }
    if (message.memorySize !== '') {
      obj.memorySize = message.memorySize;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GPUInfo>, I>>(base?: I): GPUInfo {
    return GPUInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GPUInfo>, I>>(object: I): GPUInfo {
    const message = createBaseGPUInfo();
    message.vendor = object.vendor ?? '';
    message.vendorId = object.vendorId ?? '';
    message.name = object.name ?? '';
    message.modelid = object.modelid ?? '';
    message.interface = object.interface ?? '';
    message.memorySize = object.memorySize ?? '';
    return message;
  },
};

messageTypeRegistry.set(GPUInfo.$type, GPUInfo);

function createBaseGPU(): GPU {
  return { $type: 'akash.inventory.v1.GPU', quantity: undefined, info: [] };
}

export const GPU = {
  $type: 'akash.inventory.v1.GPU' as const,

  encode(message: GPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.info) {
      GPUInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GPU {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPU();
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

          message.info.push(GPUInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GPU {
    return {
      $type: GPU.$type,
      quantity: isSet(object.quantity)
        ? ResourcePair.fromJSON(object.quantity)
        : undefined,
      info: globalThis.Array.isArray(object?.info)
        ? object.info.map((e: any) => GPUInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GPU): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = ResourcePair.toJSON(message.quantity);
    }
    if (message.info?.length) {
      obj.info = message.info.map((e) => GPUInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GPU>, I>>(base?: I): GPU {
    return GPU.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GPU>, I>>(object: I): GPU {
    const message = createBaseGPU();
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? ResourcePair.fromPartial(object.quantity)
        : undefined;
    message.info = object.info?.map((e) => GPUInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GPU.$type, GPU);

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
