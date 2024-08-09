/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DepositParams } from "./params";

export const protobufPackage = "akash.gov.v1beta3";

/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    depositParams: DepositParams | undefined;
}

function createBaseGenesisState(): GenesisState {
    return { depositParams: undefined };
}

export const GenesisState = {
    encode(
        message: GenesisState,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.depositParams !== undefined) {
            DepositParams.encode(
                message.depositParams,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositParams = DepositParams.decode(
                        reader,
                        reader.uint32(),
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

    fromJSON(object: any): GenesisState {
        return {
            depositParams: isSet(object.depositParams)
                ? DepositParams.fromJSON(object.depositParams)
                : undefined,
        };
    },

    toJSON(message: GenesisState): unknown {
        const obj: any = {};
        if (message.depositParams !== undefined) {
            obj.depositParams = DepositParams.toJSON(message.depositParams);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<GenesisState>, I>>(
        base?: I,
    ): GenesisState {
        return GenesisState.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
        object: I,
    ): GenesisState {
        const message = createBaseGenesisState();
        message.depositParams =
            object.depositParams !== undefined && object.depositParams !== null
                ? DepositParams.fromPartial(object.depositParams)
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
