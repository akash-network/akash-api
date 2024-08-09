/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "./bid";
import { LeaseID } from "./lease";
import { OrderID } from "./order";

export const protobufPackage = "akash.market.v1";

/** EventOrderCreated */
export interface EventOrderCreated {
    id: OrderID | undefined;
}

/** EventOrderClosed */
export interface EventOrderClosed {
    id: OrderID | undefined;
}

/** EventBidCreated */
export interface EventBidCreated {
    id: BidID | undefined;
    price: DecCoin | undefined;
}

/** EventBidClosed */
export interface EventBidClosed {
    id: BidID | undefined;
}

/** EventLeaseCreated */
export interface EventLeaseCreated {
    id: LeaseID | undefined;
    price: DecCoin | undefined;
}

/** EventLeaseClosed */
export interface EventLeaseClosed {
    id: LeaseID | undefined;
}

function createBaseEventOrderCreated(): EventOrderCreated {
    return { id: undefined };
}

export const EventOrderCreated = {
    encode(
        message: EventOrderCreated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventOrderCreated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOrderCreated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = OrderID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventOrderCreated {
        return {
            id: isSet(object.id) ? OrderID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventOrderCreated): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = OrderID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventOrderCreated>, I>>(
        base?: I,
    ): EventOrderCreated {
        return EventOrderCreated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventOrderCreated>, I>>(
        object: I,
    ): EventOrderCreated {
        const message = createBaseEventOrderCreated();
        message.id =
            object.id !== undefined && object.id !== null
                ? OrderID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseEventOrderClosed(): EventOrderClosed {
    return { id: undefined };
}

export const EventOrderClosed = {
    encode(
        message: EventOrderClosed,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventOrderClosed {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOrderClosed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = OrderID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventOrderClosed {
        return {
            id: isSet(object.id) ? OrderID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventOrderClosed): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = OrderID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventOrderClosed>, I>>(
        base?: I,
    ): EventOrderClosed {
        return EventOrderClosed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventOrderClosed>, I>>(
        object: I,
    ): EventOrderClosed {
        const message = createBaseEventOrderClosed();
        message.id =
            object.id !== undefined && object.id !== null
                ? OrderID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseEventBidCreated(): EventBidCreated {
    return { id: undefined, price: undefined };
}

export const EventBidCreated = {
    encode(
        message: EventBidCreated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventBidCreated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBidCreated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = BidID.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.price = DecCoin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventBidCreated {
        return {
            id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined,
            price: isSet(object.price)
                ? DecCoin.fromJSON(object.price)
                : undefined,
        };
    },

    toJSON(message: EventBidCreated): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = BidID.toJSON(message.id);
        }
        if (message.price !== undefined) {
            obj.price = DecCoin.toJSON(message.price);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventBidCreated>, I>>(
        base?: I,
    ): EventBidCreated {
        return EventBidCreated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventBidCreated>, I>>(
        object: I,
    ): EventBidCreated {
        const message = createBaseEventBidCreated();
        message.id =
            object.id !== undefined && object.id !== null
                ? BidID.fromPartial(object.id)
                : undefined;
        message.price =
            object.price !== undefined && object.price !== null
                ? DecCoin.fromPartial(object.price)
                : undefined;
        return message;
    },
};

function createBaseEventBidClosed(): EventBidClosed {
    return { id: undefined };
}

export const EventBidClosed = {
    encode(
        message: EventBidClosed,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventBidClosed {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBidClosed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = BidID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventBidClosed {
        return { id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined };
    },

    toJSON(message: EventBidClosed): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = BidID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventBidClosed>, I>>(
        base?: I,
    ): EventBidClosed {
        return EventBidClosed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventBidClosed>, I>>(
        object: I,
    ): EventBidClosed {
        const message = createBaseEventBidClosed();
        message.id =
            object.id !== undefined && object.id !== null
                ? BidID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseEventLeaseCreated(): EventLeaseCreated {
    return { id: undefined, price: undefined };
}

export const EventLeaseCreated = {
    encode(
        message: EventLeaseCreated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaseCreated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaseCreated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = LeaseID.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.price = DecCoin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventLeaseCreated {
        return {
            id: isSet(object.id) ? LeaseID.fromJSON(object.id) : undefined,
            price: isSet(object.price)
                ? DecCoin.fromJSON(object.price)
                : undefined,
        };
    },

    toJSON(message: EventLeaseCreated): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = LeaseID.toJSON(message.id);
        }
        if (message.price !== undefined) {
            obj.price = DecCoin.toJSON(message.price);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventLeaseCreated>, I>>(
        base?: I,
    ): EventLeaseCreated {
        return EventLeaseCreated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventLeaseCreated>, I>>(
        object: I,
    ): EventLeaseCreated {
        const message = createBaseEventLeaseCreated();
        message.id =
            object.id !== undefined && object.id !== null
                ? LeaseID.fromPartial(object.id)
                : undefined;
        message.price =
            object.price !== undefined && object.price !== null
                ? DecCoin.fromPartial(object.price)
                : undefined;
        return message;
    },
};

function createBaseEventLeaseClosed(): EventLeaseClosed {
    return { id: undefined };
}

export const EventLeaseClosed = {
    encode(
        message: EventLeaseClosed,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaseClosed {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaseClosed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = LeaseID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventLeaseClosed {
        return {
            id: isSet(object.id) ? LeaseID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventLeaseClosed): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = LeaseID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventLeaseClosed>, I>>(
        base?: I,
    ): EventLeaseClosed {
        return EventLeaseClosed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventLeaseClosed>, I>>(
        object: I,
    ): EventLeaseClosed {
        const message = createBaseEventLeaseClosed();
        message.id =
            object.id !== undefined && object.id !== null
                ? LeaseID.fromPartial(object.id)
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
