/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Attribute } from "./attribute";
import { Endpoint } from "./endpoint";
import { ResourceValue } from "./resourcevalue";

/** CPU stores resource units and cpu config attributes */
export interface CPU {
  $type: "akash.base.v1beta1.CPU";
  units: ResourceValue | undefined;
  attributes: Attribute[];
}

/** Memory stores resource quantity and memory attributes */
export interface Memory {
  $type: "akash.base.v1beta1.Memory";
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

/** Storage stores resource quantity and storage attributes */
export interface Storage {
  $type: "akash.base.v1beta1.Storage";
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  $type: "akash.base.v1beta1.ResourceUnits";
  cpu: CPU | undefined;
  memory: Memory | undefined;
  storage: Storage | undefined;
  endpoints: Endpoint[];
}

function createBaseCPU(): CPU {
  return { $type: "akash.base.v1beta1.CPU", units: undefined, attributes: [] };
}

export const CPU = {
  $type: "akash.base.v1beta1.CPU" as const,

  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.units = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CPU {
    return {
      $type: CPU.$type,
      units: isSet(object.units)
        ? ResourceValue.fromJSON(object.units)
        : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPU): unknown {
    const obj: any = {};
    if (message.units !== undefined) {
      obj.units = ResourceValue.toJSON(message.units);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CPU>): CPU {
    return CPU.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    message.units =
      object.units !== undefined && object.units !== null
        ? ResourceValue.fromPartial(object.units)
        : undefined;
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CPU.$type, CPU);

function createBaseMemory(): Memory {
  return {
    $type: "akash.base.v1beta1.Memory",
    quantity: undefined,
    attributes: [],
  };
}

export const Memory = {
  $type: "akash.base.v1beta1.Memory" as const,

  encode(
    message: Memory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.quantity = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Memory {
    return {
      $type: Memory.$type,
      quantity: isSet(object.quantity)
        ? ResourceValue.fromJSON(object.quantity)
        : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Memory): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = ResourceValue.toJSON(message.quantity);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
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
        ? ResourceValue.fromPartial(object.quantity)
        : undefined;
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Memory.$type, Memory);

function createBaseStorage(): Storage {
  return {
    $type: "akash.base.v1beta1.Storage",
    quantity: undefined,
    attributes: [],
  };
}

export const Storage = {
  $type: "akash.base.v1beta1.Storage" as const,

  encode(
    message: Storage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.quantity = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

function createBaseResourceUnits(): ResourceUnits {
  return {
    $type: "akash.base.v1beta1.ResourceUnits",
    cpu: undefined,
    memory: undefined,
    storage: undefined,
    endpoints: [],
  };
}

export const ResourceUnits = {
  $type: "akash.base.v1beta1.ResourceUnits" as const,

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
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
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

          message.storage = Storage.decode(reader, reader.uint32());
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
      storage: isSet(object.storage)
        ? Storage.fromJSON(object.storage)
        : undefined,
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
    if (message.storage !== undefined) {
      obj.storage = Storage.toJSON(message.storage);
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
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Storage.fromPartial(object.storage)
        : undefined;
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
