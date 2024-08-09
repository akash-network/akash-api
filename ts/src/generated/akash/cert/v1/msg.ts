/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ID } from "./cert";

export const protobufPackage = "akash.cert.v1";

/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}

/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {}

/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
    id: ID | undefined;
}

/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {}

function createBaseMsgCreateCertificate(): MsgCreateCertificate {
    return { owner: "", cert: new Uint8Array(0), pubkey: new Uint8Array(0) };
}

export const MsgCreateCertificate = {
    encode(
        message: MsgCreateCertificate,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.cert.length !== 0) {
            writer.uint32(18).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(26).bytes(message.pubkey);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateCertificate {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificate();
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
                    if (tag !== 18) {
                        break;
                    }

                    message.cert = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.pubkey = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgCreateCertificate {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            cert: isSet(object.cert)
                ? bytesFromBase64(object.cert)
                : new Uint8Array(0),
            pubkey: isSet(object.pubkey)
                ? bytesFromBase64(object.pubkey)
                : new Uint8Array(0),
        };
    },

    toJSON(message: MsgCreateCertificate): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.cert.length !== 0) {
            obj.cert = base64FromBytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            obj.pubkey = base64FromBytes(message.pubkey);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateCertificate>, I>>(
        base?: I,
    ): MsgCreateCertificate {
        return MsgCreateCertificate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateCertificate>, I>>(
        object: I,
    ): MsgCreateCertificate {
        const message = createBaseMsgCreateCertificate();
        message.owner = object.owner ?? "";
        message.cert = object.cert ?? new Uint8Array(0);
        message.pubkey = object.pubkey ?? new Uint8Array(0);
        return message;
    },
};

function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
    return {};
}

export const MsgCreateCertificateResponse = {
    encode(
        _: MsgCreateCertificateResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateCertificateResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificateResponse();
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

    fromJSON(_: any): MsgCreateCertificateResponse {
        return {};
    },

    toJSON(_: MsgCreateCertificateResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateCertificateResponse>, I>>(
        base?: I,
    ): MsgCreateCertificateResponse {
        return MsgCreateCertificateResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateCertificateResponse>, I>>(
        _: I,
    ): MsgCreateCertificateResponse {
        const message = createBaseMsgCreateCertificateResponse();
        return message;
    },
};

function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
    return { id: undefined };
}

export const MsgRevokeCertificate = {
    encode(
        message: MsgRevokeCertificate,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgRevokeCertificate {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = ID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgRevokeCertificate {
        return { id: isSet(object.id) ? ID.fromJSON(object.id) : undefined };
    },

    toJSON(message: MsgRevokeCertificate): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = ID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgRevokeCertificate>, I>>(
        base?: I,
    ): MsgRevokeCertificate {
        return MsgRevokeCertificate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgRevokeCertificate>, I>>(
        object: I,
    ): MsgRevokeCertificate {
        const message = createBaseMsgRevokeCertificate();
        message.id =
            object.id !== undefined && object.id !== null
                ? ID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
    return {};
}

export const MsgRevokeCertificateResponse = {
    encode(
        _: MsgRevokeCertificateResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgRevokeCertificateResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificateResponse();
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

    fromJSON(_: any): MsgRevokeCertificateResponse {
        return {};
    },

    toJSON(_: MsgRevokeCertificateResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgRevokeCertificateResponse>, I>>(
        base?: I,
    ): MsgRevokeCertificateResponse {
        return MsgRevokeCertificateResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgRevokeCertificateResponse>, I>>(
        _: I,
    ): MsgRevokeCertificateResponse {
        const message = createBaseMsgRevokeCertificateResponse();
        return message;
    },
};

function bytesFromBase64(b64: string): Uint8Array {
    if ((globalThis as any).Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if ((globalThis as any).Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}

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
