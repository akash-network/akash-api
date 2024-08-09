/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.cert.v1";

/** State is an enum which refers to state of deployment */
export enum State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** valid - CertificateValid denotes state for deployment active */
    valid = 1,
    /** revoked - CertificateRevoked denotes state for deployment closed */
    revoked = 2,
    UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
    switch (object) {
        case 0:
        case "invalid":
            return State.invalid;
        case 1:
        case "valid":
            return State.valid;
        case 2:
        case "revoked":
            return State.revoked;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}

export function stateToJSON(object: State): string {
    switch (object) {
        case State.invalid:
            return "invalid";
        case State.valid:
            return "valid";
        case State.revoked:
            return "revoked";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

/** ID stores owner and sequence number */
export interface ID {
    owner: string;
    serial: string;
}

/** Certificate stores state, certificate and it's public key */
export interface Certificate {
    state: State;
    cert: Uint8Array;
    pubkey: Uint8Array;
}

function createBaseID(): ID {
    return { owner: "", serial: "" };
}

export const ID = {
    encode(message: ID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ID {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseID();
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

                    message.serial = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ID {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            serial: isSet(object.serial)
                ? globalThis.String(object.serial)
                : "",
        };
    },

    toJSON(message: ID): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.serial !== "") {
            obj.serial = message.serial;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ID>, I>>(base?: I): ID {
        return ID.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ID>, I>>(object: I): ID {
        const message = createBaseID();
        message.owner = object.owner ?? "";
        message.serial = object.serial ?? "";
        return message;
    },
};

function createBaseCertificate(): Certificate {
    return { state: 0, cert: new Uint8Array(0), pubkey: new Uint8Array(0) };
}

export const Certificate = {
    encode(
        message: Certificate,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.cert.length !== 0) {
            writer.uint32(26).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(34).bytes(message.pubkey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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

                    message.cert = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
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

    fromJSON(object: any): Certificate {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            cert: isSet(object.cert)
                ? bytesFromBase64(object.cert)
                : new Uint8Array(0),
            pubkey: isSet(object.pubkey)
                ? bytesFromBase64(object.pubkey)
                : new Uint8Array(0),
        };
    },

    toJSON(message: Certificate): unknown {
        const obj: any = {};
        if (message.state !== 0) {
            obj.state = stateToJSON(message.state);
        }
        if (message.cert.length !== 0) {
            obj.cert = base64FromBytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            obj.pubkey = base64FromBytes(message.pubkey);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Certificate>, I>>(
        base?: I,
    ): Certificate {
        return Certificate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Certificate>, I>>(
        object: I,
    ): Certificate {
        const message = createBaseCertificate();
        message.state = object.state ?? 0;
        message.cert = object.cert ?? new Uint8Array(0);
        message.pubkey = object.pubkey ?? new Uint8Array(0);
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
