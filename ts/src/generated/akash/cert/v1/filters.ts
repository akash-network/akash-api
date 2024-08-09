/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.cert.v1";

/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
    owner: string;
    serial: string;
    state: string;
}

function createBaseCertificateFilter(): CertificateFilter {
    return { owner: "", serial: "", state: "" };
}

export const CertificateFilter = {
    encode(
        message: CertificateFilter,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateFilter();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.state = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CertificateFilter {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            serial: isSet(object.serial)
                ? globalThis.String(object.serial)
                : "",
            state: isSet(object.state) ? globalThis.String(object.state) : "",
        };
    },

    toJSON(message: CertificateFilter): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.serial !== "") {
            obj.serial = message.serial;
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CertificateFilter>, I>>(
        base?: I,
    ): CertificateFilter {
        return CertificateFilter.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CertificateFilter>, I>>(
        object: I,
    ): CertificateFilter {
        const message = createBaseCertificateFilter();
        message.owner = object.owner ?? "";
        message.serial = object.serial ?? "";
        message.state = object.state ?? "";
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
