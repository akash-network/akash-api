/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { messageTypeRegistry } from "../../../typeRegistry";
import { ResourceUnits } from "../../base/v1beta2/resourceunits";

/** Resource stores unit, total count and price of resource */
export interface Resource {
  $type: "akash.deployment.v1beta2.Resource";
  resources: ResourceUnits | undefined;
  count: number;
  price: DecCoin | undefined;
}

function createBaseResource(): Resource {
  return {
    $type: "akash.deployment.v1beta2.Resource",
    resources: undefined,
    count: 0,
    price: undefined,
  };
}

export const Resource = {
  $type: "akash.deployment.v1beta2.Resource" as const,

  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(
        message.resources,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = ResourceUnits.decode(reader, reader.uint32());
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

  fromJSON(object: any): Resource {
    return {
      $type: Resource.$type,
      resources: isSet(object.resources)
        ? ResourceUnits.fromJSON(object.resources)
        : undefined,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = ResourceUnits.toJSON(message.resources);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.price !== undefined) {
      obj.price = DecCoin.toJSON(message.price);
    }
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? ResourceUnits.fromPartial(object.resources)
        : undefined;
    message.count = object.count ?? 0;
    message.price =
      object.price !== undefined && object.price !== null
        ? DecCoin.fromPartial(object.price)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Resource.$type, Resource);

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
