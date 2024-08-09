/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../base/attributes/v1/attribute";

export const protobufPackage = "akash.audit.v1";

/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}

/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {}

/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
    owner: string;
    auditor: string;
    keys: string[];
}

/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {}

function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
    return { owner: "", auditor: "", attributes: [] };
}

export const MsgSignProviderAttributes = {
    encode(
        message: MsgSignProviderAttributes,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgSignProviderAttributes {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributes();
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

                    message.auditor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.attributes.push(
                        Attribute.decode(reader, reader.uint32()),
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

    fromJSON(object: any): MsgSignProviderAttributes {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            auditor: isSet(object.auditor)
                ? globalThis.String(object.auditor)
                : "",
            attributes: globalThis.Array.isArray(object?.attributes)
                ? object.attributes.map((e: any) => Attribute.fromJSON(e))
                : [],
        };
    },

    toJSON(message: MsgSignProviderAttributes): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.auditor !== "") {
            obj.auditor = message.auditor;
        }
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgSignProviderAttributes>, I>>(
        base?: I,
    ): MsgSignProviderAttributes {
        return MsgSignProviderAttributes.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgSignProviderAttributes>, I>>(
        object: I,
    ): MsgSignProviderAttributes {
        const message = createBaseMsgSignProviderAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes =
            object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        return message;
    },
};

function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
    return {};
}

export const MsgSignProviderAttributesResponse = {
    encode(
        _: MsgSignProviderAttributesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgSignProviderAttributesResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributesResponse();
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

    fromJSON(_: any): MsgSignProviderAttributesResponse {
        return {};
    },

    toJSON(_: MsgSignProviderAttributesResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgSignProviderAttributesResponse>, I>>(
        base?: I,
    ): MsgSignProviderAttributesResponse {
        return MsgSignProviderAttributesResponse.fromPartial(
            base ?? ({} as any),
        );
    },
    fromPartial<
        I extends Exact<DeepPartial<MsgSignProviderAttributesResponse>, I>,
    >(_: I): MsgSignProviderAttributesResponse {
        const message = createBaseMsgSignProviderAttributesResponse();
        return message;
    },
};

function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
    return { owner: "", auditor: "", keys: [] };
}

export const MsgDeleteProviderAttributes = {
    encode(
        message: MsgDeleteProviderAttributes,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.keys) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgDeleteProviderAttributes {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributes();
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

                    message.auditor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.keys.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDeleteProviderAttributes {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            auditor: isSet(object.auditor)
                ? globalThis.String(object.auditor)
                : "",
            keys: globalThis.Array.isArray(object?.keys)
                ? object.keys.map((e: any) => globalThis.String(e))
                : [],
        };
    },

    toJSON(message: MsgDeleteProviderAttributes): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.auditor !== "") {
            obj.auditor = message.auditor;
        }
        if (message.keys?.length) {
            obj.keys = message.keys;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDeleteProviderAttributes>, I>>(
        base?: I,
    ): MsgDeleteProviderAttributes {
        return MsgDeleteProviderAttributes.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderAttributes>, I>>(
        object: I,
    ): MsgDeleteProviderAttributes {
        const message = createBaseMsgDeleteProviderAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.keys = object.keys?.map((e) => e) || [];
        return message;
    },
};

function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
    return {};
}

export const MsgDeleteProviderAttributesResponse = {
    encode(
        _: MsgDeleteProviderAttributesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgDeleteProviderAttributesResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributesResponse();
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

    fromJSON(_: any): MsgDeleteProviderAttributesResponse {
        return {};
    },

    toJSON(_: MsgDeleteProviderAttributesResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<
        I extends Exact<DeepPartial<MsgDeleteProviderAttributesResponse>, I>,
    >(base?: I): MsgDeleteProviderAttributesResponse {
        return MsgDeleteProviderAttributesResponse.fromPartial(
            base ?? ({} as any),
        );
    },
    fromPartial<
        I extends Exact<DeepPartial<MsgDeleteProviderAttributesResponse>, I>,
    >(_: I): MsgDeleteProviderAttributesResponse {
        const message = createBaseMsgDeleteProviderAttributesResponse();
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
