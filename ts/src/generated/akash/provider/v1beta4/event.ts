/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.provider.v1beta4";

/** EventProviderCreated defines an SDK message for provider created event */
export interface EventProviderCreated {
    owner: string;
}

/** EventProviderUpdated defines an SDK message for provider updated event */
export interface EventProviderUpdated {
    owner: string;
}

/** EventProviderDeleted defines an SDK message for provider deleted event */
export interface EventProviderDeleted {
    owner: string;
}

function createBaseEventProviderCreated(): EventProviderCreated {
    return { owner: "" };
}

export const EventProviderCreated = {
    encode(
        message: EventProviderCreated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventProviderCreated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventProviderCreated();
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

    fromJSON(object: any): EventProviderCreated {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
        };
    },

    toJSON(message: EventProviderCreated): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventProviderCreated>, I>>(
        base?: I,
    ): EventProviderCreated {
        return EventProviderCreated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventProviderCreated>, I>>(
        object: I,
    ): EventProviderCreated {
        const message = createBaseEventProviderCreated();
        message.owner = object.owner ?? "";
        return message;
    },
};

function createBaseEventProviderUpdated(): EventProviderUpdated {
    return { owner: "" };
}

export const EventProviderUpdated = {
    encode(
        message: EventProviderUpdated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventProviderUpdated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventProviderUpdated();
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

    fromJSON(object: any): EventProviderUpdated {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
        };
    },

    toJSON(message: EventProviderUpdated): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventProviderUpdated>, I>>(
        base?: I,
    ): EventProviderUpdated {
        return EventProviderUpdated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventProviderUpdated>, I>>(
        object: I,
    ): EventProviderUpdated {
        const message = createBaseEventProviderUpdated();
        message.owner = object.owner ?? "";
        return message;
    },
};

function createBaseEventProviderDeleted(): EventProviderDeleted {
    return { owner: "" };
}

export const EventProviderDeleted = {
    encode(
        message: EventProviderDeleted,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventProviderDeleted {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventProviderDeleted();
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

    fromJSON(object: any): EventProviderDeleted {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
        };
    },

    toJSON(message: EventProviderDeleted): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventProviderDeleted>, I>>(
        base?: I,
    ): EventProviderDeleted {
        return EventProviderDeleted.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventProviderDeleted>, I>>(
        object: I,
    ): EventProviderDeleted {
        const message = createBaseEventProviderDeleted();
        message.owner = object.owner ?? "";
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
