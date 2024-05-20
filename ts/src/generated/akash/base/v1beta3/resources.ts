/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { CPU } from "./cpu";
import { Endpoint } from "./endpoint";
import { GPU } from "./gpu";
import { Memory } from "./memory";
import { Storage } from "./storage";

/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface Resources {
  $type: "akash.base.v1beta3.Resources";
  id: number;
  cpu: CPU | undefined;
  memory: Memory | undefined;
  storage: Storage[];
  gpu: GPU | undefined;
  endpoints: Endpoint[];
}

function createBaseResources(): Resources {
  return {
    $type: "akash.base.v1beta3.Resources",
    id: 0,
    cpu: undefined,
    memory: undefined,
    storage: [],
    gpu: undefined,
    endpoints: [],
  };
}

export const Resources = {
  $type: "akash.base.v1beta3.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(18).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      GPU.encode(message.gpu, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cpu = CPU.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.memory = Memory.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storage.push(Storage.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gpu = GPU.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): Resources {
    return {
      $type: Resources.$type,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      cpu: isSet(object.cpu) ? CPU.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromJSON(object.memory) : undefined,
      storage: globalThis.Array.isArray(object?.storage)
        ? object.storage.map((e: any) => Storage.fromJSON(e))
        : [],
      gpu: isSet(object.gpu) ? GPU.fromJSON(object.gpu) : undefined,
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => Endpoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.cpu !== undefined) {
      obj.cpu = CPU.toJSON(message.cpu);
    }
    if (message.memory !== undefined) {
      obj.memory = Memory.toJSON(message.memory);
    }
    if (message.storage?.length) {
      obj.storage = message.storage.map((e) => Storage.toJSON(e));
    }
    if (message.gpu !== undefined) {
      obj.gpu = GPU.toJSON(message.gpu);
    }
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => Endpoint.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Resources>): Resources {
    return Resources.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resources>): Resources {
    const message = createBaseResources();
    message.id = object.id ?? 0;
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? CPU.fromPartial(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Memory.fromPartial(object.memory)
        : undefined;
    message.storage = object.storage?.map((e) => Storage.fromPartial(e)) || [];
    message.gpu =
      object.gpu !== undefined && object.gpu !== null
        ? GPU.fromPartial(object.gpu)
        : undefined;
    message.endpoints =
      object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

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
