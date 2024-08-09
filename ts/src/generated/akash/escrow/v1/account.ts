/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { AccountID } from "./accountid";
import Long = require("long");

export const protobufPackage = "akash.escrow.v1";

/** Account stores state for an escrow account */
export interface Account {
    /** unique identifier for this escrow account */
    id: AccountID | undefined;
    /** bech32 encoded account address of the owner of this escrow account */
    owner: string;
    /** current state of this escrow account */
    state: Account_State;
    /** unspent coins received from the owner's wallet */
    balance: DecCoin | undefined;
    /** total coins spent by this account */
    transferred: DecCoin | undefined;
    /** block height at which this account was last settled */
    settledAt: number;
    /**
     * bech32 encoded account address of the depositor.
     * If depositor is same as the owner, then any incoming coins are added to the Balance.
     * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
     */
    depositor: string;
    /**
     * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
     * If there are any funds, they should be spent before spending the Balance.
     */
    funds: DecCoin | undefined;
}

/** State stores state for an escrow account */
export enum Account_State {
    /** invalid - AccountStateInvalid is an invalid state */
    invalid = 0,
    /** open - AccountOpen is the state when an account is open */
    open = 1,
    /** closed - AccountClosed is the state when an account is closed */
    closed = 2,
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1,
}

export function account_StateFromJSON(object: any): Account_State {
    switch (object) {
        case 0:
        case "invalid":
            return Account_State.invalid;
        case 1:
        case "open":
            return Account_State.open;
        case 2:
        case "closed":
            return Account_State.closed;
        case 3:
        case "overdrawn":
            return Account_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Account_State.UNRECOGNIZED;
    }
}

export function account_StateToJSON(object: Account_State): string {
    switch (object) {
        case Account_State.invalid:
            return "invalid";
        case Account_State.open:
            return "open";
        case Account_State.closed:
            return "closed";
        case Account_State.overdrawn:
            return "overdrawn";
        case Account_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseAccount(): Account {
    return {
        id: undefined,
        owner: "",
        state: 0,
        balance: undefined,
        transferred: undefined,
        settledAt: 0,
        depositor: "",
        funds: undefined,
    };
}

export const Account = {
    encode(
        message: Account,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.balance !== undefined) {
            DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        if (message.transferred !== undefined) {
            DecCoin.encode(
                message.transferred,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.settledAt !== 0) {
            writer.uint32(48).int64(message.settledAt);
        }
        if (message.depositor !== "") {
            writer.uint32(58).string(message.depositor);
        }
        if (message.funds !== undefined) {
            DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Account {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = AccountID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.balance = DecCoin.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.transferred = DecCoin.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.settledAt = longToNumber(reader.int64() as Long);
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.depositor = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.funds = DecCoin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Account {
        return {
            id: isSet(object.id) ? AccountID.fromJSON(object.id) : undefined,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            state: isSet(object.state)
                ? account_StateFromJSON(object.state)
                : 0,
            balance: isSet(object.balance)
                ? DecCoin.fromJSON(object.balance)
                : undefined,
            transferred: isSet(object.transferred)
                ? DecCoin.fromJSON(object.transferred)
                : undefined,
            settledAt: isSet(object.settledAt)
                ? globalThis.Number(object.settledAt)
                : 0,
            depositor: isSet(object.depositor)
                ? globalThis.String(object.depositor)
                : "",
            funds: isSet(object.funds)
                ? DecCoin.fromJSON(object.funds)
                : undefined,
        };
    },

    toJSON(message: Account): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = AccountID.toJSON(message.id);
        }
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.state !== 0) {
            obj.state = account_StateToJSON(message.state);
        }
        if (message.balance !== undefined) {
            obj.balance = DecCoin.toJSON(message.balance);
        }
        if (message.transferred !== undefined) {
            obj.transferred = DecCoin.toJSON(message.transferred);
        }
        if (message.settledAt !== 0) {
            obj.settledAt = Math.round(message.settledAt);
        }
        if (message.depositor !== "") {
            obj.depositor = message.depositor;
        }
        if (message.funds !== undefined) {
            obj.funds = DecCoin.toJSON(message.funds);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Account>, I>>(base?: I): Account {
        return Account.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
        const message = createBaseAccount();
        message.id =
            object.id !== undefined && object.id !== null
                ? AccountID.fromPartial(object.id)
                : undefined;
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? DecCoin.fromPartial(object.balance)
                : undefined;
        message.transferred =
            object.transferred !== undefined && object.transferred !== null
                ? DecCoin.fromPartial(object.transferred)
                : undefined;
        message.settledAt = object.settledAt ?? 0;
        message.depositor = object.depositor ?? "";
        message.funds =
            object.funds !== undefined && object.funds !== null
                ? DecCoin.fromPartial(object.funds)
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
