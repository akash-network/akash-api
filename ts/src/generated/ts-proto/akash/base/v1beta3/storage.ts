/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { Attribute } from './attribute';
import { ResourceValue } from './resourcevalue';

/** Storage stores resource quantity and storage attributes */
export interface Storage {
  $type: 'akash.base.v1beta3.Storage';
  name: string;
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

function createBaseStorage(): Storage {
  return {
    $type: 'akash.base.v1beta3.Storage',
    name: '',
    quantity: undefined,
    attributes: [],
  };
}

export const Storage = {
  $type: 'akash.base.v1beta3.Storage' as const,

  encode(
    message: Storage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quantity = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      quantity: isSet(object.quantity)
        ? ResourceValue.fromJSON(object.quantity)
        : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Storage): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.quantity !== undefined) {
      obj.quantity = ResourceValue.toJSON(message.quantity);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Storage>): Storage {
    return Storage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? '';
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? ResourceValue.fromPartial(object.quantity)
        : undefined;
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
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
