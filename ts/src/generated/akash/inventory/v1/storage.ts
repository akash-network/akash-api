/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ResourcePair } from "./resourcepair";

export const protobufPackage = "akash.inventory.v1";

/** StorageInfo reports Storage details */
export interface StorageInfo {
    class: string;
    iops: string;
}

/** Storage reports Storage inventory details */
export interface Storage {
    quantity: ResourcePair | undefined;
    info: StorageInfo | undefined;
}

function createBaseStorageInfo(): StorageInfo {
    return { class: "", iops: "" };
}

export const StorageInfo = {
    encode(
        message: StorageInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.class !== "") {
            writer.uint32(10).string(message.class);
        }
        if (message.iops !== "") {
            writer.uint32(18).string(message.iops);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageInfo {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorageInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.class = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.iops = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): StorageInfo {
        return {
            class: isSet(object.class) ? globalThis.String(object.class) : "",
            iops: isSet(object.iops) ? globalThis.String(object.iops) : "",
        };
    },

    toJSON(message: StorageInfo): unknown {
        const obj: any = {};
        if (message.class !== "") {
            obj.class = message.class;
        }
        if (message.iops !== "") {
            obj.iops = message.iops;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<StorageInfo>, I>>(
        base?: I,
    ): StorageInfo {
        return StorageInfo.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<StorageInfo>, I>>(
        object: I,
    ): StorageInfo {
        const message = createBaseStorageInfo();
        message.class = object.class ?? "";
        message.iops = object.iops ?? "";
        return message;
    },
};

function createBaseStorage(): Storage {
    return { quantity: undefined, info: undefined };
}

export const Storage = {
    encode(
        message: Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quantity !== undefined) {
            ResourcePair.encode(
                message.quantity,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.info !== undefined) {
            StorageInfo.encode(message.info, writer.uint32(18).fork()).ldelim();
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

                    message.quantity = ResourcePair.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.info = StorageInfo.decode(reader, reader.uint32());
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
            quantity: isSet(object.quantity)
                ? ResourcePair.fromJSON(object.quantity)
                : undefined,
            info: isSet(object.info)
                ? StorageInfo.fromJSON(object.info)
                : undefined,
        };
    },

    toJSON(message: Storage): unknown {
        const obj: any = {};
        if (message.quantity !== undefined) {
            obj.quantity = ResourcePair.toJSON(message.quantity);
        }
        if (message.info !== undefined) {
            obj.info = StorageInfo.toJSON(message.info);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Storage>, I>>(base?: I): Storage {
        return Storage.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Storage>, I>>(object: I): Storage {
        const message = createBaseStorage();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? ResourcePair.fromPartial(object.quantity)
                : undefined;
        message.info =
            object.info !== undefined && object.info !== null
                ? StorageInfo.fromPartial(object.info)
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
