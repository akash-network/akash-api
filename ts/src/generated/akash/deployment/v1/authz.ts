/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "akash.deployment.v1";

/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositAuthorization {
    /**
     * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
     * the purpose of deployment.
     */
    spendLimit: Coin | undefined;
}

function createBaseDepositAuthorization(): DepositAuthorization {
    return { spendLimit: undefined };
}

export const DepositAuthorization = {
    encode(
        message: DepositAuthorization,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.spendLimit !== undefined) {
            Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): DepositAuthorization {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.spendLimit = Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DepositAuthorization {
        return {
            spendLimit: isSet(object.spendLimit)
                ? Coin.fromJSON(object.spendLimit)
                : undefined,
        };
    },

    toJSON(message: DepositAuthorization): unknown {
        const obj: any = {};
        if (message.spendLimit !== undefined) {
            obj.spendLimit = Coin.toJSON(message.spendLimit);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<DepositAuthorization>, I>>(
        base?: I,
    ): DepositAuthorization {
        return DepositAuthorization.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<DepositAuthorization>, I>>(
        object: I,
    ): DepositAuthorization {
        const message = createBaseDepositAuthorization();
        message.spendLimit =
            object.spendLimit !== undefined && object.spendLimit !== null
                ? Coin.fromPartial(object.spendLimit)
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
