/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.audit.v1";

/** EventTrustedAuditorCreated defines an SDK message for signing a provider attributes */
export interface EventTrustedAuditorCreated {
    owner: string;
    auditor: string;
}

/** EventTrustedAuditorCreated defines an SDK message for signing a provider attributes */
export interface EventTrustedAuditorDeleted {
    owner: string;
    auditor: string;
}

function createBaseEventTrustedAuditorCreated(): EventTrustedAuditorCreated {
    return { owner: "", auditor: "" };
}

export const EventTrustedAuditorCreated = {
    encode(
        message: EventTrustedAuditorCreated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventTrustedAuditorCreated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTrustedAuditorCreated();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventTrustedAuditorCreated {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            auditor: isSet(object.auditor)
                ? globalThis.String(object.auditor)
                : "",
        };
    },

    toJSON(message: EventTrustedAuditorCreated): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.auditor !== "") {
            obj.auditor = message.auditor;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventTrustedAuditorCreated>, I>>(
        base?: I,
    ): EventTrustedAuditorCreated {
        return EventTrustedAuditorCreated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventTrustedAuditorCreated>, I>>(
        object: I,
    ): EventTrustedAuditorCreated {
        const message = createBaseEventTrustedAuditorCreated();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        return message;
    },
};

function createBaseEventTrustedAuditorDeleted(): EventTrustedAuditorDeleted {
    return { owner: "", auditor: "" };
}

export const EventTrustedAuditorDeleted = {
    encode(
        message: EventTrustedAuditorDeleted,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventTrustedAuditorDeleted {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTrustedAuditorDeleted();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventTrustedAuditorDeleted {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            auditor: isSet(object.auditor)
                ? globalThis.String(object.auditor)
                : "",
        };
    },

    toJSON(message: EventTrustedAuditorDeleted): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.auditor !== "") {
            obj.auditor = message.auditor;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventTrustedAuditorDeleted>, I>>(
        base?: I,
    ): EventTrustedAuditorDeleted {
        return EventTrustedAuditorDeleted.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventTrustedAuditorDeleted>, I>>(
        object: I,
    ): EventTrustedAuditorDeleted {
        const message = createBaseEventTrustedAuditorDeleted();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
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
