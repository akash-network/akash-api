/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GroupSpec } from "../../deployment/v1beta4/groupspec";
import { OrderID } from "../v1/order";
import Long = require("long");

export const protobufPackage = "akash.market.v1beta5";

/** Order stores orderID, state of order and other details */
export interface Order {
    id: OrderID | undefined;
    state: Order_State;
    spec: GroupSpec | undefined;
    createdAt: number;
}

/** State is an enum which refers to state of order */
export enum Order_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - OrderOpen denotes state for order open */
    open = 1,
    /** active - OrderMatched denotes state for order matched */
    active = 2,
    /** closed - OrderClosed denotes state for order lost */
    closed = 3,
    UNRECOGNIZED = -1,
}

export function order_StateFromJSON(object: any): Order_State {
    switch (object) {
        case 0:
        case "invalid":
            return Order_State.invalid;
        case 1:
        case "open":
            return Order_State.open;
        case 2:
        case "active":
            return Order_State.active;
        case 3:
        case "closed":
            return Order_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order_State.UNRECOGNIZED;
    }
}

export function order_StateToJSON(object: Order_State): string {
    switch (object) {
        case Order_State.invalid:
            return "invalid";
        case Order_State.open:
            return "open";
        case Order_State.active:
            return "active";
        case Order_State.closed:
            return "closed";
        case Order_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseOrder(): Order {
    return { id: undefined, state: 0, spec: undefined, createdAt: 0 };
}

export const Order = {
    encode(
        message: Order,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.spec !== undefined) {
            GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== 0) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Order {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = OrderID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.spec = GroupSpec.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.createdAt = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Order {
        return {
            id: isSet(object.id) ? OrderID.fromJSON(object.id) : undefined,
            state: isSet(object.state) ? order_StateFromJSON(object.state) : 0,
            spec: isSet(object.spec)
                ? GroupSpec.fromJSON(object.spec)
                : undefined,
            createdAt: isSet(object.createdAt)
                ? globalThis.Number(object.createdAt)
                : 0,
        };
    },

    toJSON(message: Order): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = OrderID.toJSON(message.id);
        }
        if (message.state !== 0) {
            obj.state = order_StateToJSON(message.state);
        }
        if (message.spec !== undefined) {
            obj.spec = GroupSpec.toJSON(message.spec);
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Order>, I>>(base?: I): Order {
        return Order.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
        const message = createBaseOrder();
        message.id =
            object.id !== undefined && object.id !== null
                ? OrderID.fromPartial(object.id)
                : undefined;
        message.state = object.state ?? 0;
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? GroupSpec.fromPartial(object.spec)
                : undefined;
        message.createdAt = object.createdAt ?? 0;
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

function longToNumber(long: Long): number {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            "Value is larger than Number.MAX_SAFE_INTEGER",
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
