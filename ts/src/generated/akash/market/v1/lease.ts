/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import Long = require("long");

export const protobufPackage = "akash.market.v1";

/** LeaseID stores bid details of lease */
export interface LeaseID {
    owner: string;
    dseq: number;
    gseq: number;
    oseq: number;
    provider: string;
}

/** Lease stores LeaseID, state of lease and price */
export interface Lease {
    id: LeaseID | undefined;
    state: Lease_State;
    price: DecCoin | undefined;
    createdAt: number;
    closedOn: number;
}

/** State is an enum which refers to state of lease */
export enum Lease_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** active - LeaseActive denotes state for lease active */
    active = 1,
    /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
    insufficient_funds = 2,
    /** closed - LeaseClosed denotes state for lease closed */
    closed = 3,
    UNRECOGNIZED = -1,
}

export function lease_StateFromJSON(object: any): Lease_State {
    switch (object) {
        case 0:
        case "invalid":
            return Lease_State.invalid;
        case 1:
        case "active":
            return Lease_State.active;
        case 2:
        case "insufficient_funds":
            return Lease_State.insufficient_funds;
        case 3:
        case "closed":
            return Lease_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Lease_State.UNRECOGNIZED;
    }
}

export function lease_StateToJSON(object: Lease_State): string {
    switch (object) {
        case Lease_State.invalid:
            return "invalid";
        case Lease_State.active:
            return "active";
        case Lease_State.insufficient_funds:
            return "insufficient_funds";
        case Lease_State.closed:
            return "closed";
        case Lease_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseLeaseID(): LeaseID {
    return { owner: "", dseq: 0, gseq: 0, oseq: 0, provider: "" };
}

export const LeaseID = {
    encode(
        message: LeaseID,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== 0) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== "") {
            writer.uint32(42).string(message.provider);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseID {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.dseq = longToNumber(reader.uint64() as Long);
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.gseq = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.oseq = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.provider = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): LeaseID {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            dseq: isSet(object.dseq) ? globalThis.Number(object.dseq) : 0,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
            oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : "",
        };
    },

    toJSON(message: LeaseID): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.dseq !== 0) {
            obj.dseq = Math.round(message.dseq);
        }
        if (message.gseq !== 0) {
            obj.gseq = Math.round(message.gseq);
        }
        if (message.oseq !== 0) {
            obj.oseq = Math.round(message.oseq);
        }
        if (message.provider !== "") {
            obj.provider = message.provider;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<LeaseID>, I>>(base?: I): LeaseID {
        return LeaseID.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<LeaseID>, I>>(object: I): LeaseID {
        const message = createBaseLeaseID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq ?? 0;
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        message.provider = object.provider ?? "";
        return message;
    },
};

function createBaseLease(): Lease {
    return {
        id: undefined,
        state: 0,
        price: undefined,
        createdAt: 0,
        closedOn: 0,
    };
}

export const Lease = {
    encode(
        message: Lease,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
        if (message.closedOn !== 0) {
            writer.uint32(40).int64(message.closedOn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Lease {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = LeaseID.decode(reader, reader.uint32());
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
                    if (tag !== 40) {
                        break;
                    }

                    message.closedOn = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Lease {
        return {
            id: isSet(object.id) ? LeaseID.fromJSON(object.id) : undefined,
            state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
            price: isSet(object.price)
                ? DecCoin.fromJSON(object.price)
                : undefined,
            createdAt: isSet(object.createdAt)
                ? globalThis.Number(object.createdAt)
                : 0,
            closedOn: isSet(object.closedOn)
                ? globalThis.Number(object.closedOn)
                : 0,
        };
    },

    toJSON(message: Lease): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = LeaseID.toJSON(message.id);
        }
        if (message.state !== 0) {
            obj.state = lease_StateToJSON(message.state);
        }
        if (message.price !== undefined) {
            obj.price = DecCoin.toJSON(message.price);
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.closedOn !== 0) {
            obj.closedOn = Math.round(message.closedOn);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Lease>, I>>(base?: I): Lease {
        return Lease.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Lease>, I>>(object: I): Lease {
        const message = createBaseLease();
        message.id =
            object.id !== undefined && object.id !== null
                ? LeaseID.fromPartial(object.id)
                : undefined;
        message.state = object.state ?? 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? DecCoin.fromPartial(object.price)
                : undefined;
        message.createdAt = object.createdAt ?? 0;
        message.closedOn = object.closedOn ?? 0;
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
