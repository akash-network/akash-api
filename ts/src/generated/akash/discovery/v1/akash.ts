/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ClientInfo } from "./client_info";

export const protobufPackage = "akash.discovery.v1";

/** Akash akash specific RPC parameters */
export interface Akash {
    clientInfo: ClientInfo | undefined;
}

function createBaseAkash(): Akash {
    return { clientInfo: undefined };
}

export const Akash = {
    encode(
        message: Akash,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clientInfo !== undefined) {
            ClientInfo.encode(
                message.clientInfo,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Akash {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAkash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.clientInfo = ClientInfo.decode(
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

    fromJSON(object: any): Akash {
        return {
            clientInfo: isSet(object.clientInfo)
                ? ClientInfo.fromJSON(object.clientInfo)
                : undefined,
        };
    },

    toJSON(message: Akash): unknown {
        const obj: any = {};
        if (message.clientInfo !== undefined) {
            obj.clientInfo = ClientInfo.toJSON(message.clientInfo);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Akash>, I>>(base?: I): Akash {
        return Akash.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Akash>, I>>(object: I): Akash {
        const message = createBaseAkash();
        message.clientInfo =
            object.clientInfo !== undefined && object.clientInfo !== null
                ? ClientInfo.fromPartial(object.clientInfo)
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
