/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { AccountID } from "./accountid";

export const protobufPackage = "akash.escrow.v1";

/** Payment stores state for a payment */
export interface FractionalPayment {
    accountId: AccountID | undefined;
    paymentId: string;
    owner: string;
    state: FractionalPayment_State;
    rate: DecCoin | undefined;
    balance: DecCoin | undefined;
    withdrawn: Coin | undefined;
}

/** State defines payment state */
export enum FractionalPayment_State {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    invalid = 0,
    /** open - PaymentStateOpen is the state when the payment is open */
    open = 1,
    /** closed - PaymentStateClosed is the state when the payment is closed */
    closed = 2,
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1,
}

export function fractionalPayment_StateFromJSON(
    object: any,
): FractionalPayment_State {
    switch (object) {
        case 0:
        case "invalid":
            return FractionalPayment_State.invalid;
        case 1:
        case "open":
            return FractionalPayment_State.open;
        case 2:
        case "closed":
            return FractionalPayment_State.closed;
        case 3:
        case "overdrawn":
            return FractionalPayment_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FractionalPayment_State.UNRECOGNIZED;
    }
}

export function fractionalPayment_StateToJSON(
    object: FractionalPayment_State,
): string {
    switch (object) {
        case FractionalPayment_State.invalid:
            return "invalid";
        case FractionalPayment_State.open:
            return "open";
        case FractionalPayment_State.closed:
            return "closed";
        case FractionalPayment_State.overdrawn:
            return "overdrawn";
        case FractionalPayment_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseFractionalPayment(): FractionalPayment {
    return {
        accountId: undefined,
        paymentId: "",
        owner: "",
        state: 0,
        rate: undefined,
        balance: undefined,
        withdrawn: undefined,
    };
}

export const FractionalPayment = {
    encode(
        message: FractionalPayment,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.accountId !== undefined) {
            AccountID.encode(
                message.accountId,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.paymentId !== "") {
            writer.uint32(18).string(message.paymentId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.rate !== undefined) {
            DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.withdrawn !== undefined) {
            Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FractionalPayment {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFractionalPayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.accountId = AccountID.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.paymentId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.rate = DecCoin.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.balance = DecCoin.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.withdrawn = Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): FractionalPayment {
        return {
            accountId: isSet(object.accountId)
                ? AccountID.fromJSON(object.accountId)
                : undefined,
            paymentId: isSet(object.paymentId)
                ? globalThis.String(object.paymentId)
                : "",
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            state: isSet(object.state)
                ? fractionalPayment_StateFromJSON(object.state)
                : 0,
            rate: isSet(object.rate)
                ? DecCoin.fromJSON(object.rate)
                : undefined,
            balance: isSet(object.balance)
                ? DecCoin.fromJSON(object.balance)
                : undefined,
            withdrawn: isSet(object.withdrawn)
                ? Coin.fromJSON(object.withdrawn)
                : undefined,
        };
    },

    toJSON(message: FractionalPayment): unknown {
        const obj: any = {};
        if (message.accountId !== undefined) {
            obj.accountId = AccountID.toJSON(message.accountId);
        }
        if (message.paymentId !== "") {
            obj.paymentId = message.paymentId;
        }
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.state !== 0) {
            obj.state = fractionalPayment_StateToJSON(message.state);
        }
        if (message.rate !== undefined) {
            obj.rate = DecCoin.toJSON(message.rate);
        }
        if (message.balance !== undefined) {
            obj.balance = DecCoin.toJSON(message.balance);
        }
        if (message.withdrawn !== undefined) {
            obj.withdrawn = Coin.toJSON(message.withdrawn);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<FractionalPayment>, I>>(
        base?: I,
    ): FractionalPayment {
        return FractionalPayment.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<FractionalPayment>, I>>(
        object: I,
    ): FractionalPayment {
        const message = createBaseFractionalPayment();
        message.accountId =
            object.accountId !== undefined && object.accountId !== null
                ? AccountID.fromPartial(object.accountId)
                : undefined;
        message.paymentId = object.paymentId ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.rate =
            object.rate !== undefined && object.rate !== null
                ? DecCoin.fromPartial(object.rate)
                : undefined;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? DecCoin.fromPartial(object.balance)
                : undefined;
        message.withdrawn =
            object.withdrawn !== undefined && object.withdrawn !== null
                ? Coin.fromPartial(object.withdrawn)
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
