/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../base/attributes/v1/attribute";

export const protobufPackage = "akash.provider.v1beta4";

/** Info */
export interface Info {
    email: string;
    website: string;
}

/** Provider stores owner and host details */
export interface Provider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: Info | undefined;
}

function createBaseInfo(): Info {
    return { email: "", website: "" };
}

export const Info = {
    encode(
        message: Info,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.website !== "") {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Info {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.website = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Info {
        return {
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            website: isSet(object.website)
                ? globalThis.String(object.website)
                : "",
        };
    },

    toJSON(message: Info): unknown {
        const obj: any = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.website !== "") {
            obj.website = message.website;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Info>, I>>(base?: I): Info {
        return Info.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Info>, I>>(object: I): Info {
        const message = createBaseInfo();
        message.email = object.email ?? "";
        message.website = object.website ?? "";
        return message;
    },
};

function createBaseProvider(): Provider {
    return { owner: "", hostUri: "", attributes: [], info: undefined };
}

export const Provider = {
    encode(
        message: Provider,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProvider();
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

    fromJSON(object: any): Provider {
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

    toJSON(message: Provider): unknown {
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

    create<I extends Exact<DeepPartial<Provider>, I>>(base?: I): Provider {
        return Provider.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Provider>, I>>(
        object: I,
    ): Provider {
        const message = createBaseProvider();
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
