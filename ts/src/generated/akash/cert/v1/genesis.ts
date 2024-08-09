/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Certificate } from "./cert";

export const protobufPackage = "akash.cert.v1";

/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
    owner: string;
    certificate: Certificate | undefined;
}

/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
    certificates: GenesisCertificate[];
}

function createBaseGenesisCertificate(): GenesisCertificate {
    return { owner: "", certificate: undefined };
}

export const GenesisCertificate = {
    encode(
        message: GenesisCertificate,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.certificate !== undefined) {
            Certificate.encode(
                message.certificate,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GenesisCertificate {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisCertificate();
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

                    message.certificate = Certificate.decode(
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

    fromJSON(object: any): GenesisCertificate {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            certificate: isSet(object.certificate)
                ? Certificate.fromJSON(object.certificate)
                : undefined,
        };
    },

    toJSON(message: GenesisCertificate): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.certificate !== undefined) {
            obj.certificate = Certificate.toJSON(message.certificate);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<GenesisCertificate>, I>>(
        base?: I,
    ): GenesisCertificate {
        return GenesisCertificate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<GenesisCertificate>, I>>(
        object: I,
    ): GenesisCertificate {
        const message = createBaseGenesisCertificate();
        message.owner = object.owner ?? "";
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? Certificate.fromPartial(object.certificate)
                : undefined;
        return message;
    },
};

function createBaseGenesisState(): GenesisState {
    return { certificates: [] };
}

export const GenesisState = {
    encode(
        message: GenesisState,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.certificates) {
            GenesisCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
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

                    message.certificates.push(
                        GenesisCertificate.decode(reader, reader.uint32()),
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
            certificates: globalThis.Array.isArray(object?.certificates)
                ? object.certificates.map((e: any) =>
                      GenesisCertificate.fromJSON(e),
                  )
                : [],
        };
    },

    toJSON(message: GenesisState): unknown {
        const obj: any = {};
        if (message.certificates?.length) {
            obj.certificates = message.certificates.map((e) =>
                GenesisCertificate.toJSON(e),
            );
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
        message.certificates =
            object.certificates?.map((e) =>
                GenesisCertificate.fromPartial(e),
            ) || [];
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
