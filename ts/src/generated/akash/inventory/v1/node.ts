/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { NodeResources } from "./resources";

export const protobufPackage = "akash.inventory.v1";

/** NodeCapabilities extended list of node capabilities */
export interface NodeCapabilities {
    storageClasses: string[];
}

/** Node reports node inventory details */
export interface Node {
    name: string;
    resources: NodeResources | undefined;
    capabilities: NodeCapabilities | undefined;
}

function createBaseNodeCapabilities(): NodeCapabilities {
    return { storageClasses: [] };
}

export const NodeCapabilities = {
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

    create<I extends Exact<DeepPartial<NodeCapabilities>, I>>(
        base?: I,
    ): NodeCapabilities {
        return NodeCapabilities.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<NodeCapabilities>, I>>(
        object: I,
    ): NodeCapabilities {
        const message = createBaseNodeCapabilities();
        message.storageClasses = object.storageClasses?.map((e) => e) || [];
        return message;
    },
};

function createBaseNode(): Node {
    return { name: "", resources: undefined, capabilities: undefined };
}

export const Node = {
    encode(
        message: Node,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

                    message.resources = NodeResources.decode(
                        reader,
                        reader.uint32(),
                    );
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

    create<I extends Exact<DeepPartial<Node>, I>>(base?: I): Node {
        return Node.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
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
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
          [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
      };

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
