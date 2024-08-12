/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "akash.market.v1beta5";

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: akash v1.0.0
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/deployment parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: akash v1.0.0
 */
export interface MsgUpdateParamsResponse {}

function createBaseMsgUpdateParams(): MsgUpdateParams {
    return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
    encode(
        message: MsgUpdateParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.params = Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateParams {
        return {
            authority: isSet(object.authority)
                ? globalThis.String(object.authority)
                : "",
            params: isSet(object.params)
                ? Params.fromJSON(object.params)
                : undefined,
        };
    },

    toJSON(message: MsgUpdateParams): unknown {
        const obj: any = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
        base?: I,
    ): MsgUpdateParams {
        return MsgUpdateParams.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
        object: I,
    ): MsgUpdateParams {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
    return {};
}

export const MsgUpdateParamsResponse = {
    encode(
        _: MsgUpdateParamsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgUpdateParamsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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

    fromJSON(_: any): MsgUpdateParamsResponse {
        return {};
    },

    toJSON(_: MsgUpdateParamsResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
        base?: I,
    ): MsgUpdateParamsResponse {
        return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
        _: I,
    ): MsgUpdateParamsResponse {
        const message = createBaseMsgUpdateParamsResponse();
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
