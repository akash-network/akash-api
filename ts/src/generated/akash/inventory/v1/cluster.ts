/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Node } from "./node";
import { Storage } from "./storage";

/** Cluster reports inventory across entire cluster */
export interface Cluster {
  $type: "akash.inventory.v1.Cluster";
  nodes: Node[];
  storage: Storage[];
}

function createBaseCluster(): Cluster {
  return { $type: "akash.inventory.v1.Cluster", nodes: [], storage: [] };
}

export const Cluster = {
  $type: "akash.inventory.v1.Cluster" as const,

  encode(
    message: Cluster,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.storage.push(Storage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cluster {
    return {
      $type: Cluster.$type,
      nodes: globalThis.Array.isArray(object?.nodes)
        ? object.nodes.map((e: any) => Node.fromJSON(e))
        : [],
      storage: globalThis.Array.isArray(object?.storage)
        ? object.storage.map((e: any) => Storage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Cluster): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    if (message.storage?.length) {
      obj.storage = message.storage.map((e) => Storage.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Cluster>): Cluster {
    return Cluster.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Cluster>): Cluster {
    const message = createBaseCluster();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.storage = object.storage?.map((e) => Storage.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

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
