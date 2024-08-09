/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DeploymentID } from "./deployment";
import { GroupID } from "./group";

export const protobufPackage = "akash.deployment.v1";

/** EventDeploymentCreated event is triggered when deployment is created on chain */
export interface EventDeploymentCreated {
    id: DeploymentID | undefined;
    hash: Uint8Array;
}

/** EventDeploymentUpdated is triggered when deployment is updated on chain */
export interface EventDeploymentUpdated {
    id: DeploymentID | undefined;
    hash: Uint8Array;
}

/** EventDeploymentClosed is triggered when deployment is closed on chain */
export interface EventDeploymentClosed {
    id: DeploymentID | undefined;
}

/** EventGroupStarted is triggered when deployment group is started */
export interface EventGroupStarted {
    id: GroupID | undefined;
}

/** EventGroupPaused is triggered when deployment group is paused */
export interface EventGroupPaused {
    id: GroupID | undefined;
}

/** EventGroupClosed is triggered when deployment group is closed */
export interface EventGroupClosed {
    id: GroupID | undefined;
}

function createBaseEventDeploymentCreated(): EventDeploymentCreated {
    return { id: undefined, hash: new Uint8Array(0) };
}

export const EventDeploymentCreated = {
    encode(
        message: EventDeploymentCreated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventDeploymentCreated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDeploymentCreated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.hash = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventDeploymentCreated {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(0),
        };
    },

    toJSON(message: EventDeploymentCreated): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventDeploymentCreated>, I>>(
        base?: I,
    ): EventDeploymentCreated {
        return EventDeploymentCreated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventDeploymentCreated>, I>>(
        object: I,
    ): EventDeploymentCreated {
        const message = createBaseEventDeploymentCreated();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        message.hash = object.hash ?? new Uint8Array(0);
        return message;
    },
};

function createBaseEventDeploymentUpdated(): EventDeploymentUpdated {
    return { id: undefined, hash: new Uint8Array(0) };
}

export const EventDeploymentUpdated = {
    encode(
        message: EventDeploymentUpdated,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventDeploymentUpdated {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDeploymentUpdated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.hash = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventDeploymentUpdated {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(0),
        };
    },

    toJSON(message: EventDeploymentUpdated): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventDeploymentUpdated>, I>>(
        base?: I,
    ): EventDeploymentUpdated {
        return EventDeploymentUpdated.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventDeploymentUpdated>, I>>(
        object: I,
    ): EventDeploymentUpdated {
        const message = createBaseEventDeploymentUpdated();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        message.hash = object.hash ?? new Uint8Array(0);
        return message;
    },
};

function createBaseEventDeploymentClosed(): EventDeploymentClosed {
    return { id: undefined };
}

export const EventDeploymentClosed = {
    encode(
        message: EventDeploymentClosed,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EventDeploymentClosed {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDeploymentClosed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = DeploymentID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventDeploymentClosed {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventDeploymentClosed): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventDeploymentClosed>, I>>(
        base?: I,
    ): EventDeploymentClosed {
        return EventDeploymentClosed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventDeploymentClosed>, I>>(
        object: I,
    ): EventDeploymentClosed {
        const message = createBaseEventDeploymentClosed();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseEventGroupStarted(): EventGroupStarted {
    return { id: undefined };
}

export const EventGroupStarted = {
    encode(
        message: EventGroupStarted,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventGroupStarted {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGroupStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = GroupID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventGroupStarted {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventGroupStarted): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventGroupStarted>, I>>(
        base?: I,
    ): EventGroupStarted {
        return EventGroupStarted.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventGroupStarted>, I>>(
        object: I,
    ): EventGroupStarted {
        const message = createBaseEventGroupStarted();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseEventGroupPaused(): EventGroupPaused {
    return { id: undefined };
}

export const EventGroupPaused = {
    encode(
        message: EventGroupPaused,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventGroupPaused {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGroupPaused();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = GroupID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventGroupPaused {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventGroupPaused): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventGroupPaused>, I>>(
        base?: I,
    ): EventGroupPaused {
        return EventGroupPaused.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventGroupPaused>, I>>(
        object: I,
    ): EventGroupPaused {
        const message = createBaseEventGroupPaused();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseEventGroupClosed(): EventGroupClosed {
    return { id: undefined };
}

export const EventGroupClosed = {
    encode(
        message: EventGroupClosed,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EventGroupClosed {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGroupClosed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = GroupID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): EventGroupClosed {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: EventGroupClosed): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<EventGroupClosed>, I>>(
        base?: I,
    ): EventGroupClosed {
        return EventGroupClosed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<EventGroupClosed>, I>>(
        object: I,
    ): EventGroupClosed {
        const message = createBaseEventGroupClosed();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
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
