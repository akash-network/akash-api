/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Node } from "./node";
import { Storage } from "./storage";

export const protobufPackage = "akash.inventory.v1";

/** Cluster reports inventory across entire cluster */
export interface Cluster {
    nodes: Node[];
    storage: Storage[];
}

function createBaseCluster(): Cluster {
    return { nodes: [], storage: [] };
}

export const Cluster = {
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

                    message.storage.push(
                        Storage.decode(reader, reader.uint32()),
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

    fromJSON(object: any): Cluster {
        return {
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

    create<I extends Exact<DeepPartial<Cluster>, I>>(base?: I): Cluster {
        return Cluster.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
        const message = createBaseCluster();
        message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
        message.storage =
            object.storage?.map((e) => Storage.fromPartial(e)) || [];
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
