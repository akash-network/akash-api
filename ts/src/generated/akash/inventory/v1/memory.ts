/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ResourcePair } from "./resourcepair";

export const protobufPackage = "akash.inventory.v1";

/** MemoryInfo reports Memory details */
export interface MemoryInfo {
    vendor: string;
    type: string;
    totalSize: string;
    speed: string;
}

/** Memory reports Memory inventory details */
export interface Memory {
    quantity: ResourcePair | undefined;
    info: MemoryInfo[];
}

function createBaseMemoryInfo(): MemoryInfo {
    return { vendor: "", type: "", totalSize: "", speed: "" };
}

export const MemoryInfo = {
    encode(
        message: MemoryInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.vendor !== "") {
            writer.uint32(10).string(message.vendor);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.totalSize !== "") {
            writer.uint32(26).string(message.totalSize);
        }
        if (message.speed !== "") {
            writer.uint32(34).string(message.speed);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MemoryInfo {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemoryInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.vendor = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.totalSize = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.speed = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MemoryInfo {
        return {
            vendor: isSet(object.vendor)
                ? globalThis.String(object.vendor)
                : "",
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            totalSize: isSet(object.totalSize)
                ? globalThis.String(object.totalSize)
                : "",
            speed: isSet(object.speed) ? globalThis.String(object.speed) : "",
        };
    },

    toJSON(message: MemoryInfo): unknown {
        const obj: any = {};
        if (message.vendor !== "") {
            obj.vendor = message.vendor;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.totalSize !== "") {
            obj.totalSize = message.totalSize;
        }
        if (message.speed !== "") {
            obj.speed = message.speed;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MemoryInfo>, I>>(base?: I): MemoryInfo {
        return MemoryInfo.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MemoryInfo>, I>>(
        object: I,
    ): MemoryInfo {
        const message = createBaseMemoryInfo();
        message.vendor = object.vendor ?? "";
        message.type = object.type ?? "";
        message.totalSize = object.totalSize ?? "";
        message.speed = object.speed ?? "";
        return message;
    },
};

function createBaseMemory(): Memory {
    return { quantity: undefined, info: [] };
}

export const Memory = {
    encode(
        message: Memory,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quantity !== undefined) {
            ResourcePair.encode(
                message.quantity,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        for (const v of message.info) {
            MemoryInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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

                    message.quantity = ResourcePair.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.info.push(
                        MemoryInfo.decode(reader, reader.uint32()),
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

    fromJSON(object: any): Memory {
        return {
            quantity: isSet(object.quantity)
                ? ResourcePair.fromJSON(object.quantity)
                : undefined,
            info: globalThis.Array.isArray(object?.info)
                ? object.info.map((e: any) => MemoryInfo.fromJSON(e))
                : [],
        };
    },

    toJSON(message: Memory): unknown {
        const obj: any = {};
        if (message.quantity !== undefined) {
            obj.quantity = ResourcePair.toJSON(message.quantity);
        }
        if (message.info?.length) {
            obj.info = message.info.map((e) => MemoryInfo.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Memory>, I>>(base?: I): Memory {
        return Memory.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Memory>, I>>(object: I): Memory {
        const message = createBaseMemory();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? ResourcePair.fromPartial(object.quantity)
                : undefined;
        message.info = object.info?.map((e) => MemoryInfo.fromPartial(e)) || [];
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
