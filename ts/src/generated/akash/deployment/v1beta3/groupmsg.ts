/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { GroupID } from "./groupid";

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  $type: "akash.deployment.v1beta3.MsgCloseGroup";
  id: GroupID | undefined;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {
  $type: "akash.deployment.v1beta3.MsgCloseGroupResponse";
}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  $type: "akash.deployment.v1beta3.MsgPauseGroup";
  id: GroupID | undefined;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {
  $type: "akash.deployment.v1beta3.MsgPauseGroupResponse";
}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  $type: "akash.deployment.v1beta3.MsgStartGroup";
  id: GroupID | undefined;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {
  $type: "akash.deployment.v1beta3.MsgStartGroupResponse";
}

function createBaseMsgCloseGroup(): MsgCloseGroup {
  return { $type: "akash.deployment.v1beta3.MsgCloseGroup", id: undefined };
}

export const MsgCloseGroup = {
  $type: "akash.deployment.v1beta3.MsgCloseGroup" as const,

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
      $type: MsgCloseGroup.$type,
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

  create(base?: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    return MsgCloseGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    message.id =
      object.id !== undefined && object.id !== null
        ? GroupID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCloseGroup.$type, MsgCloseGroup);

function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
  return { $type: "akash.deployment.v1beta3.MsgCloseGroupResponse" };
}

export const MsgCloseGroupResponse = {
  $type: "akash.deployment.v1beta3.MsgCloseGroupResponse" as const,

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
    return { $type: MsgCloseGroupResponse.$type };
  },

  toJSON(_: MsgCloseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCloseGroupResponse.$type, MsgCloseGroupResponse);

function createBaseMsgPauseGroup(): MsgPauseGroup {
  return { $type: "akash.deployment.v1beta3.MsgPauseGroup", id: undefined };
}

export const MsgPauseGroup = {
  $type: "akash.deployment.v1beta3.MsgPauseGroup" as const,

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
      $type: MsgPauseGroup.$type,
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

  create(base?: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    return MsgPauseGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    message.id =
      object.id !== undefined && object.id !== null
        ? GroupID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgPauseGroup.$type, MsgPauseGroup);

function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
  return { $type: "akash.deployment.v1beta3.MsgPauseGroupResponse" };
}

export const MsgPauseGroupResponse = {
  $type: "akash.deployment.v1beta3.MsgPauseGroupResponse" as const,

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
    return { $type: MsgPauseGroupResponse.$type };
  },

  toJSON(_: MsgPauseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgPauseGroupResponse.$type, MsgPauseGroupResponse);

function createBaseMsgStartGroup(): MsgStartGroup {
  return { $type: "akash.deployment.v1beta3.MsgStartGroup", id: undefined };
}

export const MsgStartGroup = {
  $type: "akash.deployment.v1beta3.MsgStartGroup" as const,

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
      $type: MsgStartGroup.$type,
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

  create(base?: DeepPartial<MsgStartGroup>): MsgStartGroup {
    return MsgStartGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    message.id =
      object.id !== undefined && object.id !== null
        ? GroupID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgStartGroup.$type, MsgStartGroup);

function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
  return { $type: "akash.deployment.v1beta3.MsgStartGroupResponse" };
}

export const MsgStartGroupResponse = {
  $type: "akash.deployment.v1beta3.MsgStartGroupResponse" as const,

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
    return { $type: MsgStartGroupResponse.$type };
  },

  toJSON(_: MsgStartGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    return MsgStartGroupResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgStartGroupResponse.$type, MsgStartGroupResponse);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
