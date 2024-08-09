/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { DeploymentID } from "../v1/deployment";
import { GroupSpec } from "./groupspec";

export const protobufPackage = "akash.deployment.v1beta4";

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id: DeploymentID | undefined;
    groups: GroupSpec[];
    hash: Uint8Array;
    deposit: Coin | undefined;
    /** Depositor pays for the deposit */
    depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id: DeploymentID | undefined;
    hash: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id: DeploymentID | undefined;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}

function createBaseMsgCreateDeployment(): MsgCreateDeployment {
    return {
        id: undefined,
        groups: [],
        hash: new Uint8Array(0),
        deposit: undefined,
        depositor: "",
    };
}

export const MsgCreateDeployment = {
    encode(
        message: MsgCreateDeployment,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(26).bytes(message.hash);
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(42).string(message.depositor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateDeployment {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeployment();
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

                    message.groups.push(
                        GroupSpec.decode(reader, reader.uint32()),
                    );
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.hash = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.deposit = Coin.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.depositor = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgCreateDeployment {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
            groups: globalThis.Array.isArray(object?.groups)
                ? object.groups.map((e: any) => GroupSpec.fromJSON(e))
                : [],
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(0),
            deposit: isSet(object.deposit)
                ? Coin.fromJSON(object.deposit)
                : undefined,
            depositor: isSet(object.depositor)
                ? globalThis.String(object.depositor)
                : "",
        };
    },

    toJSON(message: MsgCreateDeployment): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        if (message.groups?.length) {
            obj.groups = message.groups.map((e) => GroupSpec.toJSON(e));
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.deposit !== undefined) {
            obj.deposit = Coin.toJSON(message.deposit);
        }
        if (message.depositor !== "") {
            obj.depositor = message.depositor;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateDeployment>, I>>(
        base?: I,
    ): MsgCreateDeployment {
        return MsgCreateDeployment.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateDeployment>, I>>(
        object: I,
    ): MsgCreateDeployment {
        const message = createBaseMsgCreateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        message.groups =
            object.groups?.map((e) => GroupSpec.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array(0);
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? Coin.fromPartial(object.deposit)
                : undefined;
        message.depositor = object.depositor ?? "";
        return message;
    },
};

function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
    return {};
}

export const MsgCreateDeploymentResponse = {
    encode(
        _: MsgCreateDeploymentResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCreateDeploymentResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeploymentResponse();
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

    fromJSON(_: any): MsgCreateDeploymentResponse {
        return {};
    },

    toJSON(_: MsgCreateDeploymentResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateDeploymentResponse>, I>>(
        base?: I,
    ): MsgCreateDeploymentResponse {
        return MsgCreateDeploymentResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCreateDeploymentResponse>, I>>(
        _: I,
    ): MsgCreateDeploymentResponse {
        const message = createBaseMsgCreateDeploymentResponse();
        return message;
    },
};

function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
    return { id: undefined, hash: new Uint8Array(0) };
}

export const MsgUpdateDeployment = {
    encode(
        message: MsgUpdateDeployment,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(26).bytes(message.hash);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgUpdateDeployment {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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

    fromJSON(object: any): MsgUpdateDeployment {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(0),
        };
    },

    toJSON(message: MsgUpdateDeployment): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateDeployment>, I>>(
        base?: I,
    ): MsgUpdateDeployment {
        return MsgUpdateDeployment.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgUpdateDeployment>, I>>(
        object: I,
    ): MsgUpdateDeployment {
        const message = createBaseMsgUpdateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        message.hash = object.hash ?? new Uint8Array(0);
        return message;
    },
};

function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
    return {};
}

export const MsgUpdateDeploymentResponse = {
    encode(
        _: MsgUpdateDeploymentResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgUpdateDeploymentResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeploymentResponse();
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

    fromJSON(_: any): MsgUpdateDeploymentResponse {
        return {};
    },

    toJSON(_: MsgUpdateDeploymentResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateDeploymentResponse>, I>>(
        base?: I,
    ): MsgUpdateDeploymentResponse {
        return MsgUpdateDeploymentResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgUpdateDeploymentResponse>, I>>(
        _: I,
    ): MsgUpdateDeploymentResponse {
        const message = createBaseMsgUpdateDeploymentResponse();
        return message;
    },
};

function createBaseMsgCloseDeployment(): MsgCloseDeployment {
    return { id: undefined };
}

export const MsgCloseDeployment = {
    encode(
        message: MsgCloseDeployment,
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
    ): MsgCloseDeployment {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeployment();
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

    fromJSON(object: any): MsgCloseDeployment {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: MsgCloseDeployment): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseDeployment>, I>>(
        base?: I,
    ): MsgCloseDeployment {
        return MsgCloseDeployment.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseDeployment>, I>>(
        object: I,
    ): MsgCloseDeployment {
        const message = createBaseMsgCloseDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
    return {};
}

export const MsgCloseDeploymentResponse = {
    encode(
        _: MsgCloseDeploymentResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MsgCloseDeploymentResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeploymentResponse();
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

    fromJSON(_: any): MsgCloseDeploymentResponse {
        return {};
    },

    toJSON(_: MsgCloseDeploymentResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCloseDeploymentResponse>, I>>(
        base?: I,
    ): MsgCloseDeploymentResponse {
        return MsgCloseDeploymentResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<MsgCloseDeploymentResponse>, I>>(
        _: I,
    ): MsgCloseDeploymentResponse {
        const message = createBaseMsgCloseDeploymentResponse();
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
