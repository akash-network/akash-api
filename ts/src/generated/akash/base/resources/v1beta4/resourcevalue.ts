/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.base.resources.v1beta4";

/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
    val: Uint8Array;
}

function createBaseResourceValue(): ResourceValue {
    return { val: new Uint8Array(0) };
}

export const ResourceValue = {
    encode(
        message: ResourceValue,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.val.length !== 0) {
            writer.uint32(10).bytes(message.val);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceValue {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.val = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ResourceValue {
        return {
            val: isSet(object.val)
                ? bytesFromBase64(object.val)
                : new Uint8Array(0),
        };
    },

    toJSON(message: ResourceValue): unknown {
        const obj: any = {};
        if (message.val.length !== 0) {
            obj.val = base64FromBytes(message.val);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ResourceValue>, I>>(
        base?: I,
    ): ResourceValue {
        return ResourceValue.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ResourceValue>, I>>(
        object: I,
    ): ResourceValue {
        const message = createBaseResourceValue();
        message.val = object.val ?? new Uint8Array(0);
        return message;
    },
};

function bytesFromBase64(b64: string): Uint8Array {
    if ((globalThis as any).Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if ((globalThis as any).Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}

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
