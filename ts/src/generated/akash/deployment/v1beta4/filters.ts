/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "akash.deployment.v1beta4";

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
    owner: string;
    dseq: number;
    state: string;
}

/** GroupFilters defines filters used to filter groups */
export interface GroupFilters {
    owner: string;
    dseq: number;
    gseq: number;
    state: string;
}

function createBaseDeploymentFilters(): DeploymentFilters {
    return { owner: "", dseq: 0, state: "" };
}

export const DeploymentFilters = {
    encode(
        message: DeploymentFilters,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== 0) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeploymentFilters();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.state = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DeploymentFilters {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            dseq: isSet(object.dseq) ? globalThis.Number(object.dseq) : 0,
            state: isSet(object.state) ? globalThis.String(object.state) : "",
        };
    },

    toJSON(message: DeploymentFilters): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.dseq !== 0) {
            obj.dseq = Math.round(message.dseq);
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<DeploymentFilters>, I>>(
        base?: I,
    ): DeploymentFilters {
        return DeploymentFilters.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<DeploymentFilters>, I>>(
        object: I,
    ): DeploymentFilters {
        const message = createBaseDeploymentFilters();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq ?? 0;
        message.state = object.state ?? "";
        return message;
    },
};

function createBaseGroupFilters(): GroupFilters {
    return { owner: "", dseq: 0, gseq: 0, state: "" };
}

export const GroupFilters = {
    encode(
        message: GroupFilters,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== 0) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint64(message.gseq);
        }
        if (message.state !== "") {
            writer.uint32(34).string(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupFilters {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupFilters();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.gseq = longToNumber(reader.uint64() as Long);
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.state = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): GroupFilters {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            dseq: isSet(object.dseq) ? globalThis.Number(object.dseq) : 0,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
            state: isSet(object.state) ? globalThis.String(object.state) : "",
        };
    },

    toJSON(message: GroupFilters): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.dseq !== 0) {
            obj.dseq = Math.round(message.dseq);
        }
        if (message.gseq !== 0) {
            obj.gseq = Math.round(message.gseq);
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<GroupFilters>, I>>(
        base?: I,
    ): GroupFilters {
        return GroupFilters.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<GroupFilters>, I>>(
        object: I,
    ): GroupFilters {
        const message = createBaseGroupFilters();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq ?? 0;
        message.gseq = object.gseq ?? 0;
        message.state = object.state ?? "";
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
