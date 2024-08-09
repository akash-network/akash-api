/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GroupID } from "../v1/group";

export const protobufPackage = "akash.deployment.v1beta4";

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
    id: GroupID | undefined;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
    id: GroupID | undefined;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
    id: GroupID | undefined;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}

function createBaseMsgCloseGroup(): MsgCloseGroup {
    return { id: undefined };
}

export const MsgCloseGroup = {
    encode(
        message: MsgCloseGroup,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroup();
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

    fromJSON(object: any): MsgCloseGroup {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: MsgCloseGroup): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseGroup>, I>>(
        base?: I,
    ): MsgCloseGroup {
        return MsgCloseGroup.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseGroup>, I>>(
        object: I,
    ): MsgCloseGroup {
        const message = createBaseMsgCloseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
    return {};
}

export const MsgCloseGroupResponse = {
    encode(
        _: MsgCloseGroupResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCloseGroupResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroupResponse();
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

    fromJSON(_: any): MsgCloseGroupResponse {
        return {};
    },

    toJSON(_: MsgCloseGroupResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseGroupResponse>, I>>(
        base?: I,
    ): MsgCloseGroupResponse {
        return MsgCloseGroupResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseGroupResponse>, I>>(
        _: I,
    ): MsgCloseGroupResponse {
        const message = createBaseMsgCloseGroupResponse();
        return message;
    },
};

function createBaseMsgPauseGroup(): MsgPauseGroup {
    return { id: undefined };
}

export const MsgPauseGroup = {
    encode(
        message: MsgPauseGroup,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroup();
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

    fromJSON(object: any): MsgPauseGroup {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: MsgPauseGroup): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgPauseGroup>, I>>(
        base?: I,
    ): MsgPauseGroup {
        return MsgPauseGroup.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgPauseGroup>, I>>(
        object: I,
    ): MsgPauseGroup {
        const message = createBaseMsgPauseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
    return {};
}

export const MsgPauseGroupResponse = {
    encode(
        _: MsgPauseGroupResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgPauseGroupResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroupResponse();
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

    fromJSON(_: any): MsgPauseGroupResponse {
        return {};
    },

    toJSON(_: MsgPauseGroupResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgPauseGroupResponse>, I>>(
        base?: I,
    ): MsgPauseGroupResponse {
        return MsgPauseGroupResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgPauseGroupResponse>, I>>(
        _: I,
    ): MsgPauseGroupResponse {
        const message = createBaseMsgPauseGroupResponse();
        return message;
    },
};

function createBaseMsgStartGroup(): MsgStartGroup {
    return { id: undefined };
}

export const MsgStartGroup = {
    encode(
        message: MsgStartGroup,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroup();
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

    fromJSON(object: any): MsgStartGroup {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: MsgStartGroup): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgStartGroup>, I>>(
        base?: I,
    ): MsgStartGroup {
        return MsgStartGroup.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgStartGroup>, I>>(
        object: I,
    ): MsgStartGroup {
        const message = createBaseMsgStartGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
    return {};
}

export const MsgStartGroupResponse = {
    encode(
        _: MsgStartGroupResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgStartGroupResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroupResponse();
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

    fromJSON(_: any): MsgStartGroupResponse {
        return {};
    },

    toJSON(_: MsgStartGroupResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgStartGroupResponse>, I>>(
        base?: I,
    ): MsgStartGroupResponse {
        return MsgStartGroupResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgStartGroupResponse>, I>>(
        _: I,
    ): MsgStartGroupResponse {
        const message = createBaseMsgStartGroupResponse();
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
