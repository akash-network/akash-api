/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { NodeResources } from "./resources";

/** NodeCapabilities extended list of node capabilities */
export interface NodeCapabilities {
  $type: "akash.inventory.v1.NodeCapabilities";
  storageClasses: string[];
}

/** Node reports node inventory details */
export interface Node {
  $type: "akash.inventory.v1.Node";
  name: string;
  resources: NodeResources | undefined;
  capabilities: NodeCapabilities | undefined;
}

function createBaseNodeCapabilities(): NodeCapabilities {
  return { $type: "akash.inventory.v1.NodeCapabilities", storageClasses: [] };
}

export const NodeCapabilities = {
  $type: "akash.inventory.v1.NodeCapabilities" as const,

  encode(
    message: NodeCapabilities,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.storageClasses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeCapabilities {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeCapabilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storageClasses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeCapabilities {
    return {
      $type: NodeCapabilities.$type,
      storageClasses: globalThis.Array.isArray(object?.storageClasses)
        ? object.storageClasses.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: NodeCapabilities): unknown {
    const obj: any = {};
    if (message.storageClasses?.length) {
      obj.storageClasses = message.storageClasses;
    }
    return obj;
  },

  create(base?: DeepPartial<NodeCapabilities>): NodeCapabilities {
    return NodeCapabilities.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NodeCapabilities>): NodeCapabilities {
    const message = createBaseNodeCapabilities();
    message.storageClasses = object.storageClasses?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NodeCapabilities.$type, NodeCapabilities);

function createBaseNode(): Node {
  return {
    $type: "akash.inventory.v1.Node",
    name: "",
    resources: undefined,
    capabilities: undefined,
  };
}

export const Node = {
  $type: "akash.inventory.v1.Node" as const,

  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      NodeResources.encode(
        message.resources,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.capabilities !== undefined) {
      NodeCapabilities.encode(
        message.capabilities,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
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

          message.resources = NodeResources.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.capabilities = NodeCapabilities.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      $type: Node.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resources: isSet(object.resources)
        ? NodeResources.fromJSON(object.resources)
        : undefined,
      capabilities: isSet(object.capabilities)
        ? NodeCapabilities.fromJSON(object.capabilities)
        : undefined,
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resources !== undefined) {
      obj.resources = NodeResources.toJSON(message.resources);
    }
    if (message.capabilities !== undefined) {
      obj.capabilities = NodeCapabilities.toJSON(message.capabilities);
    }
    return obj;
  },

  create(base?: DeepPartial<Node>): Node {
    return Node.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.name = object.name ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? NodeResources.fromPartial(object.resources)
        : undefined;
    message.capabilities =
      object.capabilities !== undefined && object.capabilities !== null
        ? NodeCapabilities.fromPartial(object.capabilities)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Node.$type, Node);

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
