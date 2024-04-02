/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { CPU } from './cpu';
import { GPU } from './gpu';
import { Memory } from './memory';
import { ResourcePair } from './resourcepair';

export const protobufPackage = 'akash.inventory.v1';

/** NodeResources reports node inventory details */
export interface NodeResources {
  $type: 'akash.inventory.v1.NodeResources';
  cpu: CPU | undefined;
  memory: Memory | undefined;
  gpu: GPU | undefined;
  ephemeralStorage: ResourcePair | undefined;
  volumesAttached: ResourcePair | undefined;
  volumesMounted: ResourcePair | undefined;
}

function createBaseNodeResources(): NodeResources {
  return {
    $type: 'akash.inventory.v1.NodeResources',
    cpu: undefined,
    memory: undefined,
    gpu: undefined,
    ephemeralStorage: undefined,
    volumesAttached: undefined,
    volumesMounted: undefined,
  };
}

export const NodeResources = {
  $type: 'akash.inventory.v1.NodeResources' as const,

  encode(
    message: NodeResources,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      GPU.encode(message.gpu, writer.uint32(26).fork()).ldelim();
    }
    if (message.ephemeralStorage !== undefined) {
      ResourcePair.encode(
        message.ephemeralStorage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.volumesAttached !== undefined) {
      ResourcePair.encode(
        message.volumesAttached,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.volumesMounted !== undefined) {
      ResourcePair.encode(
        message.volumesMounted,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeResources {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeResources();
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

          message.gpu = GPU.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ephemeralStorage = ResourcePair.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.volumesAttached = ResourcePair.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.volumesMounted = ResourcePair.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeResources {
    return {
      $type: NodeResources.$type,
      cpu: isSet(object.cpu) ? CPU.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromJSON(object.memory) : undefined,
      gpu: isSet(object.gpu) ? GPU.fromJSON(object.gpu) : undefined,
      ephemeralStorage: isSet(object.ephemeralStorage)
        ? ResourcePair.fromJSON(object.ephemeralStorage)
        : undefined,
      volumesAttached: isSet(object.volumesAttached)
        ? ResourcePair.fromJSON(object.volumesAttached)
        : undefined,
      volumesMounted: isSet(object.volumesMounted)
        ? ResourcePair.fromJSON(object.volumesMounted)
        : undefined,
    };
  },

  toJSON(message: NodeResources): unknown {
    const obj: any = {};
    if (message.cpu !== undefined) {
      obj.cpu = CPU.toJSON(message.cpu);
    }
    if (message.memory !== undefined) {
      obj.memory = Memory.toJSON(message.memory);
    }
    if (message.gpu !== undefined) {
      obj.gpu = GPU.toJSON(message.gpu);
    }
    if (message.ephemeralStorage !== undefined) {
      obj.ephemeralStorage = ResourcePair.toJSON(message.ephemeralStorage);
    }
    if (message.volumesAttached !== undefined) {
      obj.volumesAttached = ResourcePair.toJSON(message.volumesAttached);
    }
    if (message.volumesMounted !== undefined) {
      obj.volumesMounted = ResourcePair.toJSON(message.volumesMounted);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeResources>, I>>(
    base?: I,
  ): NodeResources {
    return NodeResources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeResources>, I>>(
    object: I,
  ): NodeResources {
    const message = createBaseNodeResources();
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? CPU.fromPartial(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Memory.fromPartial(object.memory)
        : undefined;
    message.gpu =
      object.gpu !== undefined && object.gpu !== null
        ? GPU.fromPartial(object.gpu)
        : undefined;
    message.ephemeralStorage =
      object.ephemeralStorage !== undefined && object.ephemeralStorage !== null
        ? ResourcePair.fromPartial(object.ephemeralStorage)
        : undefined;
    message.volumesAttached =
      object.volumesAttached !== undefined && object.volumesAttached !== null
        ? ResourcePair.fromPartial(object.volumesAttached)
        : undefined;
    message.volumesMounted =
      object.volumesMounted !== undefined && object.volumesMounted !== null
        ? ResourcePair.fromPartial(object.volumesMounted)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(NodeResources.$type, NodeResources);

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
