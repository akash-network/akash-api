/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { ResourcePair } from './resourcepair';

/** StorageInfo reports Storage details */
export interface StorageInfo {
  $type: 'akash.inventory.v1.StorageInfo';
  class: string;
  iops: string;
}

/** Storage reports Storage inventory details */
export interface Storage {
  $type: 'akash.inventory.v1.Storage';
  quantity: ResourcePair | undefined;
  info: StorageInfo | undefined;
}

function createBaseStorageInfo(): StorageInfo {
  return { $type: 'akash.inventory.v1.StorageInfo', class: '', iops: '' };
}

export const StorageInfo = {
  $type: 'akash.inventory.v1.StorageInfo' as const,

  encode(
    message: StorageInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.class !== '') {
      writer.uint32(10).string(message.class);
    }
    if (message.iops !== '') {
      writer.uint32(18).string(message.iops);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.class = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.iops = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageInfo {
    return {
      $type: StorageInfo.$type,
      class: isSet(object.class) ? globalThis.String(object.class) : '',
      iops: isSet(object.iops) ? globalThis.String(object.iops) : '',
    };
  },

  toJSON(message: StorageInfo): unknown {
    const obj: any = {};
    if (message.class !== '') {
      obj.class = message.class;
    }
    if (message.iops !== '') {
      obj.iops = message.iops;
    }
    return obj;
  },

  create(base?: DeepPartial<StorageInfo>): StorageInfo {
    return StorageInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StorageInfo>): StorageInfo {
    const message = createBaseStorageInfo();
    message.class = object.class ?? '';
    message.iops = object.iops ?? '';
    return message;
  },
};

messageTypeRegistry.set(StorageInfo.$type, StorageInfo);

function createBaseStorage(): Storage {
  return {
    $type: 'akash.inventory.v1.Storage',
    quantity: undefined,
    info: undefined,
  };
}

export const Storage = {
  $type: 'akash.inventory.v1.Storage' as const,

  encode(
    message: Storage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    if (message.info !== undefined) {
      StorageInfo.encode(message.info, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Storage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
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

          message.info = StorageInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Storage {
    return {
      $type: Storage.$type,
      quantity: isSet(object.quantity)
        ? ResourcePair.fromJSON(object.quantity)
        : undefined,
      info: isSet(object.info) ? StorageInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: Storage): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = ResourcePair.toJSON(message.quantity);
    }
    if (message.info !== undefined) {
      obj.info = StorageInfo.toJSON(message.info);
    }
    return obj;
  },

  create(base?: DeepPartial<Storage>): Storage {
    return Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = createBaseStorage();
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? ResourcePair.fromPartial(object.quantity)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? StorageInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Storage.$type, Storage);

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
