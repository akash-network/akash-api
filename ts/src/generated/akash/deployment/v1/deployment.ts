/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "akash.deployment.v1";

/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
    owner: string;
    dseq: number;
}

/** Deployment stores deploymentID, state and checksum details */
export interface Deployment {
    id: DeploymentID | undefined;
    state: Deployment_State;
    hash: Uint8Array;
    createdAt: number;
}

/** State is an enum which refers to state of deployment */
export enum Deployment_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** active - DeploymentActive denotes state for deployment active */
    active = 1,
    /** closed - DeploymentClosed denotes state for deployment closed */
    closed = 2,
    UNRECOGNIZED = -1,
}

export function deployment_StateFromJSON(object: any): Deployment_State {
    switch (object) {
        case 0:
        case "invalid":
            return Deployment_State.invalid;
        case 1:
        case "active":
            return Deployment_State.active;
        case 2:
        case "closed":
            return Deployment_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Deployment_State.UNRECOGNIZED;
    }
}

export function deployment_StateToJSON(object: Deployment_State): string {
    switch (object) {
        case Deployment_State.invalid:
            return "invalid";
        case Deployment_State.active:
            return "active";
        case Deployment_State.closed:
            return "closed";
        case Deployment_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}

function createBaseDeploymentID(): DeploymentID {
    return { owner: "", dseq: 0 };
}

export const DeploymentID = {
    encode(
        message: DeploymentID,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== 0) {
            writer.uint32(16).uint64(message.dseq);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeploymentID();
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
                    if (tag !== 16) {
                        break;
                    }

                    message.dseq = longToNumber(reader.uint64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DeploymentID {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            dseq: isSet(object.dseq) ? globalThis.Number(object.dseq) : 0,
        };
    },

    toJSON(message: DeploymentID): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.dseq !== 0) {
            obj.dseq = Math.round(message.dseq);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<DeploymentID>, I>>(
        base?: I,
    ): DeploymentID {
        return DeploymentID.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<DeploymentID>, I>>(
        object: I,
    ): DeploymentID {
        const message = createBaseDeploymentID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq ?? 0;
        return message;
    },
};

function createBaseDeployment(): Deployment {
    return { id: undefined, state: 0, hash: new Uint8Array(0), createdAt: 0 };
}

export const Deployment = {
    encode(
        message: Deployment,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.hash.length !== 0) {
            writer.uint32(26).bytes(message.hash);
        }
        if (message.createdAt !== 0) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Deployment {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeployment();
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
                    if (tag !== 16) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.hash = reader.bytes();
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

    fromJSON(object: any): Deployment {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
            state: isSet(object.state)
                ? deployment_StateFromJSON(object.state)
                : 0,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(0),
            createdAt: isSet(object.createdAt)
                ? globalThis.Number(object.createdAt)
                : 0,
        };
    },

    toJSON(message: Deployment): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        if (message.state !== 0) {
            obj.state = deployment_StateToJSON(message.state);
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Deployment>, I>>(base?: I): Deployment {
        return Deployment.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Deployment>, I>>(
        object: I,
    ): Deployment {
        const message = createBaseDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        message.state = object.state ?? 0;
        message.hash = object.hash ?? new Uint8Array(0);
        message.createdAt = object.createdAt ?? 0;
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
