/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Endpoint } from "./endpoint";
import { CPU, Memory, Storage } from "./resource";

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  $type: "akash.base.v1beta2.ResourceUnits";
  cpu: CPU | undefined;
  memory: Memory | undefined;
  storage: Storage[];
  endpoints: Endpoint[];
}

function createBaseResourceUnits(): ResourceUnits {
  return {
    $type: "akash.base.v1beta2.ResourceUnits",
    cpu: undefined,
    memory: undefined,
    storage: [],
    endpoints: [],
  };
}

export const ResourceUnits = {
  $type: "akash.base.v1beta2.ResourceUnits" as const,

  encode(
    message: ResourceUnits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cpu = CPU.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memory = Memory.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.storage.push(Storage.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceUnits {
    return {
      $type: ResourceUnits.$type,
      cpu: isSet(object.cpu) ? CPU.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromJSON(object.memory) : undefined,
      storage: globalThis.Array.isArray(object?.storage)
        ? object.storage.map((e: any) => Storage.fromJSON(e))
        : [],
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => Endpoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResourceUnits): unknown {
    const obj: any = {};
    if (message.cpu !== undefined) {
      obj.cpu = CPU.toJSON(message.cpu);
    }
    if (message.memory !== undefined) {
      obj.memory = Memory.toJSON(message.memory);
    }
    if (message.storage?.length) {
      obj.storage = message.storage.map((e) => Storage.toJSON(e));
    }
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => Endpoint.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceUnits>): ResourceUnits {
    return ResourceUnits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits {
    const message = createBaseResourceUnits();
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? CPU.fromPartial(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Memory.fromPartial(object.memory)
        : undefined;
    message.storage = object.storage?.map((e) => Storage.fromPartial(e)) || [];
    message.endpoints =
      object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ResourceUnits.$type, ResourceUnits);

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
