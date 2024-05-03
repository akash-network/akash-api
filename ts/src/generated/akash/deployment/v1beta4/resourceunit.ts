/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { messageTypeRegistry } from '../../../typeRegistry';
import { Resources } from '../../base/resources/v1/resources';

/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnit {
  $type: 'akash.deployment.v1beta4.ResourceUnit';
  resource: Resources | undefined;
  count: number;
  price: DecCoin | undefined;
}

function createBaseResourceUnit(): ResourceUnit {
  return {
    $type: 'akash.deployment.v1beta4.ResourceUnit',
    resource: undefined,
    count: 0,
    price: undefined,
  };
}

export const ResourceUnit = {
  $type: 'akash.deployment.v1beta4.ResourceUnit' as const,

  encode(
    message: ResourceUnit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resources.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnit {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = Resources.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price = DecCoin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceUnit {
    return {
      $type: ResourceUnit.$type,
      resource: isSet(object.resource)
        ? Resources.fromJSON(object.resource)
        : undefined,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
    };
  },

  toJSON(message: ResourceUnit): unknown {
    const obj: any = {};
    if (message.resource !== undefined) {
      obj.resource = Resources.toJSON(message.resource);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.price !== undefined) {
      obj.price = DecCoin.toJSON(message.price);
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceUnit>): ResourceUnit {
    return ResourceUnit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourceUnit>): ResourceUnit {
    const message = createBaseResourceUnit();
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resources.fromPartial(object.resource)
        : undefined;
    message.count = object.count ?? 0;
    message.price =
      object.price !== undefined && object.price !== null
        ? DecCoin.fromPartial(object.price)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceUnit.$type, ResourceUnit);

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
