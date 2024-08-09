/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../attributes/v1/attribute";
import { ResourceValue } from "./resourcevalue";

export const protobufPackage = "akash.base.resources.v1beta4";

/** Memory stores resource quantity and memory attributes */
export interface Memory {
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}

function createBaseMemory(): Memory {
    return { quantity: undefined, attributes: [] };
}

export const Memory = {
    encode(
        message: Memory,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quantity !== undefined) {
            ResourceValue.encode(
                message.quantity,
                writer.uint32(10).fork(),
            ).ldelim();
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

                    message.quantity = ResourceValue.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.attributes.push(
                        Attribute.decode(reader, reader.uint32()),
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

    create<I extends Exact<DeepPartial<Memory>, I>>(base?: I): Memory {
        return Memory.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Memory>, I>>(object: I): Memory {
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
