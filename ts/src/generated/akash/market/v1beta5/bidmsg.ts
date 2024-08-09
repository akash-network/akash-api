/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "../v1/bid";
import { OrderID } from "../v1/order";
import { ResourceOffer } from "./resourcesoffer";

export const protobufPackage = "akash.market.v1beta5";

/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
    orderId: OrderID | undefined;
    provider: string;
    price: DecCoin | undefined;
    deposit: Coin | undefined;
    resourcesOffer: ResourceOffer[];
}

/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {}

/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
    id: BidID | undefined;
}

/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {}

function createBaseMsgCreateBid(): MsgCreateBid {
    return {
        orderId: undefined,
        provider: "",
        price: undefined,
        deposit: undefined,
        resourcesOffer: [],
    };
}

export const MsgCreateBid = {
    encode(
        message: MsgCreateBid,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.orderId !== undefined) {
            OrderID.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.resourcesOffer) {
            ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.orderId = OrderID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.provider = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.price = DecCoin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.deposit = Coin.decode(reader, reader.uint32());
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

    fromJSON(object: any): MsgCreateBid {
        return {
            orderId: isSet(object.orderId)
                ? OrderID.fromJSON(object.orderId)
                : undefined,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : "",
            price: isSet(object.price)
                ? DecCoin.fromJSON(object.price)
                : undefined,
            deposit: isSet(object.deposit)
                ? Coin.fromJSON(object.deposit)
                : undefined,
            resourcesOffer: globalThis.Array.isArray(object?.resourcesOffer)
                ? object.resourcesOffer.map((e: any) =>
                      ResourceOffer.fromJSON(e),
                  )
                : [],
        };
    },

    toJSON(message: MsgCreateBid): unknown {
        const obj: any = {};
        if (message.orderId !== undefined) {
            obj.orderId = OrderID.toJSON(message.orderId);
        }
        if (message.provider !== "") {
            obj.provider = message.provider;
        }
        if (message.price !== undefined) {
            obj.price = DecCoin.toJSON(message.price);
        }
        if (message.deposit !== undefined) {
            obj.deposit = Coin.toJSON(message.deposit);
        }
        if (message.resourcesOffer?.length) {
            obj.resourcesOffer = message.resourcesOffer.map((e) =>
                ResourceOffer.toJSON(e),
            );
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateBid>, I>>(
        base?: I,
    ): MsgCreateBid {
        return MsgCreateBid.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateBid>, I>>(
        object: I,
    ): MsgCreateBid {
        const message = createBaseMsgCreateBid();
        message.orderId =
            object.orderId !== undefined && object.orderId !== null
                ? OrderID.fromPartial(object.orderId)
                : undefined;
        message.provider = object.provider ?? "";
        message.price =
            object.price !== undefined && object.price !== null
                ? DecCoin.fromPartial(object.price)
                : undefined;
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? Coin.fromPartial(object.deposit)
                : undefined;
        message.resourcesOffer =
            object.resourcesOffer?.map((e) => ResourceOffer.fromPartial(e)) ||
            [];
        return message;
    },
};

function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
    return {};
}

export const MsgCreateBidResponse = {
    encode(
        _: MsgCreateBidResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateBidResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgCreateBidResponse {
        return {};
    },

    toJSON(_: MsgCreateBidResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateBidResponse>, I>>(
        base?: I,
    ): MsgCreateBidResponse {
        return MsgCreateBidResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateBidResponse>, I>>(
        _: I,
    ): MsgCreateBidResponse {
        const message = createBaseMsgCreateBidResponse();
        return message;
    },
};

function createBaseMsgCloseBid(): MsgCloseBid {
    return { id: undefined };
}

export const MsgCloseBid = {
    encode(
        message: MsgCloseBid,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBid();
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

    fromJSON(object: any): MsgCloseBid {
        return { id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined };
    },

    toJSON(message: MsgCloseBid): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = BidID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseBid>, I>>(
        base?: I,
    ): MsgCloseBid {
        return MsgCloseBid.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseBid>, I>>(
        object: I,
    ): MsgCloseBid {
        const message = createBaseMsgCloseBid();
        message.id =
            object.id !== undefined && object.id !== null
                ? BidID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
    return {};
}

export const MsgCloseBidResponse = {
    encode(
        _: MsgCloseBidResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCloseBidResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgCloseBidResponse {
        return {};
    },

    toJSON(_: MsgCloseBidResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseBidResponse>, I>>(
        base?: I,
    ): MsgCloseBidResponse {
        return MsgCloseBidResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseBidResponse>, I>>(
        _: I,
    ): MsgCloseBidResponse {
        const message = createBaseMsgCloseBidResponse();
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
