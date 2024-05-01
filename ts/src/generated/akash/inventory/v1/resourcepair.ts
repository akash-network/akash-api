/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Quantity } from "../../../k8s.io/apimachinery/pkg/api/resource/generated";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Attribute } from "../../base/v1beta3/attribute";

/** ResourcePair to extents resource.Quantity to provide total and available units of the resource */
export interface ResourcePair {
  $type: "akash.inventory.v1.ResourcePair";
  allocatable: Quantity | undefined;
  allocated: Quantity | undefined;
  attributes: Attribute[];
}

function createBaseResourcePair(): ResourcePair {
  return { $type: "akash.inventory.v1.ResourcePair", allocatable: undefined, allocated: undefined, attributes: [] };
}

export const ResourcePair = {
  $type: "akash.inventory.v1.ResourcePair" as const,

  encode(message: ResourcePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocatable !== undefined) {
      Quantity.encode(message.allocatable, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocated !== undefined) {
      Quantity.encode(message.allocated, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocatable = Quantity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocated = Quantity.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourcePair {
    return {
      $type: ResourcePair.$type,
      allocatable: isSet(object.allocatable) ? Quantity.fromJSON(object.allocatable) : undefined,
      allocated: isSet(object.allocated) ? Quantity.fromJSON(object.allocated) : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResourcePair): unknown {
    const obj: any = {};
    if (message.allocatable !== undefined) {
      obj.allocatable = Quantity.toJSON(message.allocatable);
    }
    if (message.allocated !== undefined) {
      obj.allocated = Quantity.toJSON(message.allocated);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ResourcePair>): ResourcePair {
    return ResourcePair.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourcePair>): ResourcePair {
    const message = createBaseResourcePair();
    message.allocatable = (object.allocatable !== undefined && object.allocatable !== null)
      ? Quantity.fromPartial(object.allocatable)
      : undefined;
    message.allocated = (object.allocated !== undefined && object.allocated !== null)
      ? Quantity.fromPartial(object.allocated)
      : undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ResourcePair.$type, ResourcePair);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
