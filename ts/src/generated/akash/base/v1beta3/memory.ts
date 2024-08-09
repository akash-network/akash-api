/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Attribute } from "./attribute";
import { ResourceValue } from "./resourcevalue";

/** Memory stores resource quantity and memory attributes */
export interface Memory {
    $type: "akash.base.v1beta3.Memory";
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}

function createBaseMemory(): Memory {
    return {
        $type: "akash.base.v1beta3.Memory",
        quantity: undefined,
        attributes: [],
    };
}

export const Memory = {
    $type: "akash.base.v1beta3.Memory" as const,

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
