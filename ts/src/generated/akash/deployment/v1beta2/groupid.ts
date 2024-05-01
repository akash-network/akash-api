/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  $type: "akash.deployment.v1beta2.GroupID";
  owner: string;
  dseq: Long;
  gseq: number;
}

function createBaseGroupID(): GroupID {
  return { $type: "akash.deployment.v1beta2.GroupID", owner: "", dseq: Long.UZERO, gseq: 0 };
}

export const GroupID = {
  $type: "akash.deployment.v1beta2.GroupID" as const,

  encode(message: GroupID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.dseq = reader.uint64() as Long;
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
      $type: GroupID.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
    };
  },

  toJSON(message: GroupID): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (!message.dseq.equals(Long.UZERO)) {
      obj.dseq = (message.dseq || Long.UZERO).toString();
    }
    if (message.gseq !== 0) {
      obj.gseq = Math.round(message.gseq);
    }
    return obj;
  },

  create(base?: DeepPartial<GroupID>): GroupID {
    return GroupID.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = (object.dseq !== undefined && object.dseq !== null) ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GroupID.$type, GroupID);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
