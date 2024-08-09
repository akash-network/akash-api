/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.staking.v1beta3";

/** Params extends the parameters for the x/staking module */
export interface Params {
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    minCommissionRate: string;
}

function createBaseParams(): Params {
    return { minCommissionRate: "" };
}

export const Params = {
    encode(
        message: Params,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.minCommissionRate !== "") {
            writer.uint32(10).string(message.minCommissionRate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.minCommissionRate = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Params {
        return {
            minCommissionRate: isSet(object.minCommissionRate)
                ? globalThis.String(object.minCommissionRate)
                : "",
        };
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        if (message.minCommissionRate !== "") {
            obj.minCommissionRate = message.minCommissionRate;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
        return Params.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
        const message = createBaseParams();
        message.minCommissionRate = object.minCommissionRate ?? "";
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
