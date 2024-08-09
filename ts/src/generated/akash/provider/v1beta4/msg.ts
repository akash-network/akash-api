/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../base/attributes/v1/attribute";
import { Info } from "./provider";

export const protobufPackage = "akash.provider.v1beta4";

/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: Info | undefined;
}

/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}

/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: Info | undefined;
}

/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}

/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
    owner: string;
}

/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}

function createBaseMsgCreateProvider(): MsgCreateProvider {
    return { owner: "", hostUri: "", attributes: [], info: undefined };
}

export const MsgCreateProvider = {
    encode(
        message: MsgCreateProvider,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            Info.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProvider {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProvider();
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

                    message.hostUri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.attributes.push(
                        Attribute.decode(reader, reader.uint32()),
                    );
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.info = Info.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgCreateProvider {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            hostUri: isSet(object.hostUri)
                ? globalThis.String(object.hostUri)
                : "",
            attributes: globalThis.Array.isArray(object?.attributes)
                ? object.attributes.map((e: any) => Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? Info.fromJSON(object.info) : undefined,
        };
    },

    toJSON(message: MsgCreateProvider): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.hostUri !== "") {
            obj.hostUri = message.hostUri;
        }
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
        }
        if (message.info !== undefined) {
            obj.info = Info.toJSON(message.info);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateProvider>, I>>(
        base?: I,
    ): MsgCreateProvider {
        return MsgCreateProvider.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateProvider>, I>>(
        object: I,
    ): MsgCreateProvider {
        const message = createBaseMsgCreateProvider();
        message.owner = object.owner ?? "";
        message.hostUri = object.hostUri ?? "";
        message.attributes =
            object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? Info.fromPartial(object.info)
                : undefined;
        return message;
    },
};

function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
    return {};
}

export const MsgCreateProviderResponse = {
    encode(
        _: MsgCreateProviderResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateProviderResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProviderResponse();
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

    fromJSON(_: any): MsgCreateProviderResponse {
        return {};
    },

    toJSON(_: MsgCreateProviderResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateProviderResponse>, I>>(
        base?: I,
    ): MsgCreateProviderResponse {
        return MsgCreateProviderResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateProviderResponse>, I>>(
        _: I,
    ): MsgCreateProviderResponse {
        const message = createBaseMsgCreateProviderResponse();
        return message;
    },
};

function createBaseMsgUpdateProvider(): MsgUpdateProvider {
    return { owner: "", hostUri: "", attributes: [], info: undefined };
}

export const MsgUpdateProvider = {
    encode(
        message: MsgUpdateProvider,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            Info.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProvider {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProvider();
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

                    message.hostUri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.attributes.push(
                        Attribute.decode(reader, reader.uint32()),
                    );
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.info = Info.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateProvider {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            hostUri: isSet(object.hostUri)
                ? globalThis.String(object.hostUri)
                : "",
            attributes: globalThis.Array.isArray(object?.attributes)
                ? object.attributes.map((e: any) => Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? Info.fromJSON(object.info) : undefined,
        };
    },

    toJSON(message: MsgUpdateProvider): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.hostUri !== "") {
            obj.hostUri = message.hostUri;
        }
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
        }
        if (message.info !== undefined) {
            obj.info = Info.toJSON(message.info);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateProvider>, I>>(
        base?: I,
    ): MsgUpdateProvider {
        return MsgUpdateProvider.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgUpdateProvider>, I>>(
        object: I,
    ): MsgUpdateProvider {
        const message = createBaseMsgUpdateProvider();
        message.owner = object.owner ?? "";
        message.hostUri = object.hostUri ?? "";
        message.attributes =
            object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? Info.fromPartial(object.info)
                : undefined;
        return message;
    },
};

function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
    return {};
}

export const MsgUpdateProviderResponse = {
    encode(
        _: MsgUpdateProviderResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgUpdateProviderResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProviderResponse();
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

    fromJSON(_: any): MsgUpdateProviderResponse {
        return {};
    },

    toJSON(_: MsgUpdateProviderResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateProviderResponse>, I>>(
        base?: I,
    ): MsgUpdateProviderResponse {
        return MsgUpdateProviderResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgUpdateProviderResponse>, I>>(
        _: I,
    ): MsgUpdateProviderResponse {
        const message = createBaseMsgUpdateProviderResponse();
        return message;
    },
};

function createBaseMsgDeleteProvider(): MsgDeleteProvider {
    return { owner: "" };
}

export const MsgDeleteProvider = {
    encode(
        message: MsgDeleteProvider,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProvider {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDeleteProvider {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
        };
    },

    toJSON(message: MsgDeleteProvider): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDeleteProvider>, I>>(
        base?: I,
    ): MsgDeleteProvider {
        return MsgDeleteProvider.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgDeleteProvider>, I>>(
        object: I,
    ): MsgDeleteProvider {
        const message = createBaseMsgDeleteProvider();
        message.owner = object.owner ?? "";
        return message;
    },
};

function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
    return {};
}

export const MsgDeleteProviderResponse = {
    encode(
        _: MsgDeleteProviderResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgDeleteProviderResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderResponse();
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

    fromJSON(_: any): MsgDeleteProviderResponse {
        return {};
    },

    toJSON(_: MsgDeleteProviderResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDeleteProviderResponse>, I>>(
        base?: I,
    ): MsgDeleteProviderResponse {
        return MsgDeleteProviderResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderResponse>, I>>(
        _: I,
    ): MsgDeleteProviderResponse {
        const message = createBaseMsgDeleteProviderResponse();
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
