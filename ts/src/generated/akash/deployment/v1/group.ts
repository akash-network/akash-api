/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "akash.deployment.v1";

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: number;
    gseq: number;
}

function createBaseGroupID(): GroupID {
    return { owner: "", dseq: 0, gseq: 0 };
}

export const GroupID = {
    encode(
        message: GroupID,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== 0) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupID {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupID();
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

                    message.gseq = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): GroupID {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            dseq: isSet(object.dseq) ? globalThis.Number(object.dseq) : 0,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
        };
    },

    toJSON(message: GroupID): unknown {
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
        return obj;
    },

    create<I extends Exact<DeepPartial<GroupID>, I>>(base?: I): GroupID {
        return GroupID.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<GroupID>, I>>(object: I): GroupID {
        const message = createBaseGroupID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq ?? 0;
        message.gseq = object.gseq ?? 0;
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
