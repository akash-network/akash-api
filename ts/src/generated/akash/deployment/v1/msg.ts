/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { DeploymentID } from "./deployment";

export const protobufPackage = "akash.deployment.v1";

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id: DeploymentID | undefined;
    amount: Coin | undefined;
    /** Depositor pays for the deposit */
    depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}

function createBaseMsgDepositDeployment(): MsgDepositDeployment {
    return { id: undefined, amount: undefined, depositor: "" };
}

export const MsgDepositDeployment = {
    encode(
        message: MsgDepositDeployment,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgDepositDeployment {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.depositor = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDepositDeployment {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
            amount: isSet(object.amount)
                ? Coin.fromJSON(object.amount)
                : undefined,
            depositor: isSet(object.depositor)
                ? globalThis.String(object.depositor)
                : "",
        };
    },

    toJSON(message: MsgDepositDeployment): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        if (message.amount !== undefined) {
            obj.amount = Coin.toJSON(message.amount);
        }
        if (message.depositor !== "") {
            obj.depositor = message.depositor;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDepositDeployment>, I>>(
        base?: I,
    ): MsgDepositDeployment {
        return MsgDepositDeployment.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgDepositDeployment>, I>>(
        object: I,
    ): MsgDepositDeployment {
        const message = createBaseMsgDepositDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? Coin.fromPartial(object.amount)
                : undefined;
        message.depositor = object.depositor ?? "";
        return message;
    },
};

function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
    return {};
}

export const MsgDepositDeploymentResponse = {
    encode(
        _: MsgDepositDeploymentResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgDepositDeploymentResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeploymentResponse();
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

    fromJSON(_: any): MsgDepositDeploymentResponse {
        return {};
    },

    toJSON(_: MsgDepositDeploymentResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDepositDeploymentResponse>, I>>(
        base?: I,
    ): MsgDepositDeploymentResponse {
        return MsgDepositDeploymentResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgDepositDeploymentResponse>, I>>(
        _: I,
    ): MsgDepositDeploymentResponse {
        const message = createBaseMsgDepositDeploymentResponse();
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
