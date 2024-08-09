/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "../v1/bid";
import { ResourceOffer } from "./resourcesoffer";
import Long = require("long");

export const protobufPackage = "akash.market.v1beta5";

/** Bid stores BidID, state of bid and price */
export interface Bid {
    id: BidID | undefined;
    state: Bid_State;
    price: DecCoin | undefined;
    createdAt: number;
    resourcesOffer: ResourceOffer[];
}

/** BidState is an enum which refers to state of bid */
export enum Bid_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - BidOpen denotes state for bid open */
    open = 1,
    /** active - BidMatched denotes state for bid open */
    active = 2,
    /** lost - BidLost denotes state for bid lost */
    lost = 3,
    /** closed - BidClosed denotes state for bid closed */
    closed = 4,
    UNRECOGNIZED = -1,
}

export function bid_StateFromJSON(object: any): Bid_State {
    switch (object) {
        case 0:
        case "invalid":
            return Bid_State.invalid;
        case 1:
        case "open":
            return Bid_State.open;
        case 2:
        case "active":
            return Bid_State.active;
        case 3:
        case "lost":
            return Bid_State.lost;
        case 4:
        case "closed":
            return Bid_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Bid_State.UNRECOGNIZED;
    }
}

export function bid_StateToJSON(object: Bid_State): string {
    switch (object) {
        case Bid_State.invalid:
            return "invalid";
        case Bid_State.open:
            return "open";
        case Bid_State.active:
            return "active";
        case Bid_State.lost:
            return "lost";
        case Bid_State.closed:
            return "closed";
        case Bid_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseBid(): Bid {
    return {
        id: undefined,
        state: 0,
        price: undefined,
        createdAt: 0,
        resourcesOffer: [],
    };
}

export const Bid = {
    encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== undefined) {
            BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== 0) {
            writer.uint32(32).int64(message.createdAt);
        }
        for (const v of message.resourcesOffer) {
            ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = BidID.decode(reader, reader.uint32());
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

                    message.price = DecCoin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.createdAt = longToNumber(reader.int64() as Long);
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.resourcesOffer.push(
                        ResourceOffer.decode(reader, reader.uint32()),
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

    fromJSON(object: any): Bid {
        return {
            id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined,
            state: isSet(object.state) ? bid_StateFromJSON(object.state) : 0,
            price: isSet(object.price)
                ? DecCoin.fromJSON(object.price)
                : undefined,
            createdAt: isSet(object.createdAt)
                ? globalThis.Number(object.createdAt)
                : 0,
            resourcesOffer: globalThis.Array.isArray(object?.resourcesOffer)
                ? object.resourcesOffer.map((e: any) =>
                      ResourceOffer.fromJSON(e),
                  )
                : [],
        };
    },

    toJSON(message: Bid): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = BidID.toJSON(message.id);
        }
        if (message.state !== 0) {
            obj.state = bid_StateToJSON(message.state);
        }
        if (message.price !== undefined) {
            obj.price = DecCoin.toJSON(message.price);
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.resourcesOffer?.length) {
            obj.resourcesOffer = message.resourcesOffer.map((e) =>
                ResourceOffer.toJSON(e),
            );
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Bid>, I>>(base?: I): Bid {
        return Bid.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
        const message = createBaseBid();
        message.id =
            object.id !== undefined && object.id !== null
                ? BidID.fromPartial(object.id)
                : undefined;
        message.state = object.state ?? 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? DecCoin.fromPartial(object.price)
                : undefined;
        message.createdAt = object.createdAt ?? 0;
        message.resourcesOffer =
            object.resourcesOffer?.map((e) => ResourceOffer.fromPartial(e)) ||
            [];
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
