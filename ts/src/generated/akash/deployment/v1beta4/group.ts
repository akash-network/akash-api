/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GroupID } from "../v1/group";
import { GroupSpec } from "./groupspec";
import Long = require("long");

export const protobufPackage = "akash.deployment.v1beta4";

/** Group stores group id, state and specifications of group */
export interface Group {
    id: GroupID | undefined;
    state: Group_State;
    groupSpec: GroupSpec | undefined;
    createdAt: number;
}

/** State is an enum which refers to state of group */
export enum Group_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - GroupOpen denotes state for group open */
    open = 1,
    /** paused - GroupOrdered denotes state for group ordered */
    paused = 2,
    /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
    insufficient_funds = 3,
    /** closed - GroupClosed denotes state for group closed */
    closed = 4,
    UNRECOGNIZED = -1,
}

export function group_StateFromJSON(object: any): Group_State {
    switch (object) {
        case 0:
        case "invalid":
            return Group_State.invalid;
        case 1:
        case "open":
            return Group_State.open;
        case 2:
        case "paused":
            return Group_State.paused;
        case 3:
        case "insufficient_funds":
            return Group_State.insufficient_funds;
        case 4:
        case "closed":
            return Group_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Group_State.UNRECOGNIZED;
    }
}

export function group_StateToJSON(object: Group_State): string {
    switch (object) {
        case Group_State.invalid:
            return "invalid";
        case Group_State.open:
            return "open";
        case Group_State.paused:
            return "paused";
        case Group_State.insufficient_funds:
            return "insufficient_funds";
        case Group_State.closed:
            return "closed";
        case Group_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseGroup(): Group {
    return { id: undefined, state: 0, groupSpec: undefined, createdAt: 0 };
}

export const Group = {
    encode(
        message: Group,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.groupSpec !== undefined) {
            GroupSpec.encode(
                message.groupSpec,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.createdAt !== 0) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Group {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = GroupID.decode(reader, reader.uint32());
                    continue;
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

                    message.groupSpec = GroupSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.createdAt = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Group {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
            state: isSet(object.state) ? group_StateFromJSON(object.state) : 0,
            groupSpec: isSet(object.groupSpec)
                ? GroupSpec.fromJSON(object.groupSpec)
                : undefined,
            createdAt: isSet(object.createdAt)
                ? globalThis.Number(object.createdAt)
                : 0,
        };
    },

    toJSON(message: Group): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        if (message.state !== 0) {
            obj.state = group_StateToJSON(message.state);
        }
        if (message.groupSpec !== undefined) {
            obj.groupSpec = GroupSpec.toJSON(message.groupSpec);
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
        return Group.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
        const message = createBaseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        message.state = object.state ?? 0;
        message.groupSpec =
            object.groupSpec !== undefined && object.groupSpec !== null
                ? GroupSpec.fromPartial(object.groupSpec)
                : undefined;
        message.createdAt = object.createdAt ?? 0;
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

function longToNumber(long: Long): number {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            "Value is larger than Number.MAX_SAFE_INTEGER",
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
