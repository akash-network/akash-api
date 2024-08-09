/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { BidID } from "../v1/bid";
import { LeaseID } from "../v1/lease";

export const protobufPackage = "akash.market.v1beta5";

/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
    bidId: BidID | undefined;
}

/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {}

/** MsgWithdrawLease defines an SDK message for withdrawing lease funds */
export interface MsgWithdrawLease {
    bidId: LeaseID | undefined;
}

/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {}

/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
    leaseId: LeaseID | undefined;
}

/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {}

function createBaseMsgCreateLease(): MsgCreateLease {
    return { bidId: undefined };
}

export const MsgCreateLease = {
    encode(
        message: MsgCreateLease,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bidId !== undefined) {
            BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.bidId = BidID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgCreateLease {
        return {
            bidId: isSet(object.bidId)
                ? BidID.fromJSON(object.bidId)
                : undefined,
        };
    },

    toJSON(message: MsgCreateLease): unknown {
        const obj: any = {};
        if (message.bidId !== undefined) {
            obj.bidId = BidID.toJSON(message.bidId);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateLease>, I>>(
        base?: I,
    ): MsgCreateLease {
        return MsgCreateLease.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateLease>, I>>(
        object: I,
    ): MsgCreateLease {
        const message = createBaseMsgCreateLease();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? BidID.fromPartial(object.bidId)
                : undefined;
        return message;
    },
};

function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
    return {};
}

export const MsgCreateLeaseResponse = {
    encode(
        _: MsgCreateLeaseResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateLeaseResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLeaseResponse();
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

    fromJSON(_: any): MsgCreateLeaseResponse {
        return {};
    },

    toJSON(_: MsgCreateLeaseResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateLeaseResponse>, I>>(
        base?: I,
    ): MsgCreateLeaseResponse {
        return MsgCreateLeaseResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateLeaseResponse>, I>>(
        _: I,
    ): MsgCreateLeaseResponse {
        const message = createBaseMsgCreateLeaseResponse();
        return message;
    },
};

function createBaseMsgWithdrawLease(): MsgWithdrawLease {
    return { bidId: undefined };
}

export const MsgWithdrawLease = {
    encode(
        message: MsgWithdrawLease,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bidId !== undefined) {
            LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.bidId = LeaseID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawLease {
        return {
            bidId: isSet(object.bidId)
                ? LeaseID.fromJSON(object.bidId)
                : undefined,
        };
    },

    toJSON(message: MsgWithdrawLease): unknown {
        const obj: any = {};
        if (message.bidId !== undefined) {
            obj.bidId = LeaseID.toJSON(message.bidId);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawLease>, I>>(
        base?: I,
    ): MsgWithdrawLease {
        return MsgWithdrawLease.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawLease>, I>>(
        object: I,
    ): MsgWithdrawLease {
        const message = createBaseMsgWithdrawLease();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? LeaseID.fromPartial(object.bidId)
                : undefined;
        return message;
    },
};

function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
    return {};
}

export const MsgWithdrawLeaseResponse = {
    encode(
        _: MsgWithdrawLeaseResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgWithdrawLeaseResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLeaseResponse();
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

    fromJSON(_: any): MsgWithdrawLeaseResponse {
        return {};
    },

    toJSON(_: MsgWithdrawLeaseResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawLeaseResponse>, I>>(
        base?: I,
    ): MsgWithdrawLeaseResponse {
        return MsgWithdrawLeaseResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawLeaseResponse>, I>>(
        _: I,
    ): MsgWithdrawLeaseResponse {
        const message = createBaseMsgWithdrawLeaseResponse();
        return message;
    },
};

function createBaseMsgCloseLease(): MsgCloseLease {
    return { leaseId: undefined };
}

export const MsgCloseLease = {
    encode(
        message: MsgCloseLease,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.leaseId = LeaseID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgCloseLease {
        return {
            leaseId: isSet(object.leaseId)
                ? LeaseID.fromJSON(object.leaseId)
                : undefined,
        };
    },

    toJSON(message: MsgCloseLease): unknown {
        const obj: any = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = LeaseID.toJSON(message.leaseId);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseLease>, I>>(
        base?: I,
    ): MsgCloseLease {
        return MsgCloseLease.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseLease>, I>>(
        object: I,
    ): MsgCloseLease {
        const message = createBaseMsgCloseLease();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? LeaseID.fromPartial(object.leaseId)
                : undefined;
        return message;
    },
};

function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
    return {};
}

export const MsgCloseLeaseResponse = {
    encode(
        _: MsgCloseLeaseResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCloseLeaseResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLeaseResponse();
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

    fromJSON(_: any): MsgCloseLeaseResponse {
        return {};
    },

    toJSON(_: MsgCloseLeaseResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseLeaseResponse>, I>>(
        base?: I,
    ): MsgCloseLeaseResponse {
        return MsgCloseLeaseResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseLeaseResponse>, I>>(
        _: I,
    ): MsgCloseLeaseResponse {
        const message = createBaseMsgCloseLeaseResponse();
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
