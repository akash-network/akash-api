/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.escrow.v1";

/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}

function createBaseAccountID(): AccountID {
    return { scope: "", xid: "" };
}

export const AccountID = {
    encode(
        message: AccountID,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccountID {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.scope = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.xid = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): AccountID {
        return {
            scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
            xid: isSet(object.xid) ? globalThis.String(object.xid) : "",
        };
    },

    toJSON(message: AccountID): unknown {
        const obj: any = {};
        if (message.scope !== "") {
            obj.scope = message.scope;
        }
        if (message.xid !== "") {
            obj.xid = message.xid;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<AccountID>, I>>(base?: I): AccountID {
        return AccountID.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<AccountID>, I>>(
        object: I,
    ): AccountID {
        const message = createBaseAccountID();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
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
