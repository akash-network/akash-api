/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { ResourcePair } from './resourcepair';

/** MemoryInfo reports Memory details */
export interface MemoryInfo {
  $type: 'akash.inventory.v1.MemoryInfo';
  vendor: string;
  type: string;
  totalSize: string;
  speed: string;
}

/** Memory reports Memory inventory details */
export interface Memory {
  $type: 'akash.inventory.v1.Memory';
  quantity: ResourcePair | undefined;
  info: MemoryInfo[];
}

function createBaseMemoryInfo(): MemoryInfo {
  return {
    $type: 'akash.inventory.v1.MemoryInfo',
    vendor: '',
    type: '',
    totalSize: '',
    speed: '',
  };
}

export const MemoryInfo = {
  $type: 'akash.inventory.v1.MemoryInfo' as const,

  encode(
    message: MemoryInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.vendor !== '') {
      writer.uint32(10).string(message.vendor);
    }
    if (message.type !== '') {
      writer.uint32(18).string(message.type);
    }
    if (message.totalSize !== '') {
      writer.uint32(26).string(message.totalSize);
    }
    if (message.speed !== '') {
      writer.uint32(34).string(message.speed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoryInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryInfo();
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

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalSize = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.speed = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MemoryInfo {
    return {
      $type: MemoryInfo.$type,
      vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : '',
      type: isSet(object.type) ? globalThis.String(object.type) : '',
      totalSize: isSet(object.totalSize)
        ? globalThis.String(object.totalSize)
        : '',
      speed: isSet(object.speed) ? globalThis.String(object.speed) : '',
    };
  },

  toJSON(message: MemoryInfo): unknown {
    const obj: any = {};
    if (message.vendor !== '') {
      obj.vendor = message.vendor;
    }
    if (message.type !== '') {
      obj.type = message.type;
    }
    if (message.totalSize !== '') {
      obj.totalSize = message.totalSize;
    }
    if (message.speed !== '') {
      obj.speed = message.speed;
    }
    return obj;
  },

  create(base?: DeepPartial<MemoryInfo>): MemoryInfo {
    return MemoryInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MemoryInfo>): MemoryInfo {
    const message = createBaseMemoryInfo();
    message.vendor = object.vendor ?? '';
    message.type = object.type ?? '';
    message.totalSize = object.totalSize ?? '';
    message.speed = object.speed ?? '';
    return message;
  },
};

messageTypeRegistry.set(MemoryInfo.$type, MemoryInfo);

function createBaseMemory(): Memory {
  return { $type: 'akash.inventory.v1.Memory', quantity: undefined, info: [] };
}

export const Memory = {
  $type: 'akash.inventory.v1.Memory' as const,

  encode(
    message: Memory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.info) {
      MemoryInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Memory {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
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

          message.info.push(MemoryInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Memory {
    return {
      $type: Memory.$type,
      quantity: isSet(object.quantity)
        ? ResourcePair.fromJSON(object.quantity)
        : undefined,
      info: globalThis.Array.isArray(object?.info)
        ? object.info.map((e: any) => MemoryInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Memory): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = ResourcePair.toJSON(message.quantity);
    }
    if (message.info?.length) {
      obj.info = message.info.map((e) => MemoryInfo.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Memory>): Memory {
    return Memory.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? ResourcePair.fromPartial(object.quantity)
        : undefined;
    message.info = object.info?.map((e) => MemoryInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Memory.$type, Memory);

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
