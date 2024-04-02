/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { messageTypeRegistry } from '../../../typeRegistry';
import { PlacementRequirements } from '../../base/v1beta1/attribute';
import { ResourceUnits } from '../../base/v1beta1/resource';

export const protobufPackage = 'akash.deployment.v1beta1';

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  $type: 'akash.deployment.v1beta1.MsgCloseGroup';
  id: GroupID | undefined;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {
  $type: 'akash.deployment.v1beta1.MsgCloseGroupResponse';
}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  $type: 'akash.deployment.v1beta1.MsgPauseGroup';
  id: GroupID | undefined;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {
  $type: 'akash.deployment.v1beta1.MsgPauseGroupResponse';
}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  $type: 'akash.deployment.v1beta1.MsgStartGroup';
  id: GroupID | undefined;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {
  $type: 'akash.deployment.v1beta1.MsgStartGroupResponse';
}

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  $type: 'akash.deployment.v1beta1.GroupID';
  owner: string;
  dseq: Long;
  gseq: number;
}

/** GroupSpec stores group specifications */
export interface GroupSpec {
  $type: 'akash.deployment.v1beta1.GroupSpec';
  name: string;
  requirements: PlacementRequirements | undefined;
  resources: Resource[];
}

/** Group stores group id, state and specifications of group */
export interface Group {
  $type: 'akash.deployment.v1beta1.Group';
  groupId: GroupID | undefined;
  state: Group_State;
  groupSpec: GroupSpec | undefined;
  createdAt: Long;
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
    case 'invalid':
      return Group_State.invalid;
    case 1:
    case 'open':
      return Group_State.open;
    case 2:
    case 'paused':
      return Group_State.paused;
    case 3:
    case 'insufficient_funds':
      return Group_State.insufficient_funds;
    case 4:
    case 'closed':
      return Group_State.closed;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Group_State.UNRECOGNIZED;
  }
}

export function group_StateToJSON(object: Group_State): string {
  switch (object) {
    case Group_State.invalid:
      return 'invalid';
    case Group_State.open:
      return 'open';
    case Group_State.paused:
      return 'paused';
    case Group_State.insufficient_funds:
      return 'insufficient_funds';
    case Group_State.closed:
      return 'closed';
    case Group_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/** Resource stores unit, total count and price of resource */
export interface Resource {
  $type: 'akash.deployment.v1beta1.Resource';
  resources: ResourceUnits | undefined;
  count: number;
  price: Coin | undefined;
}

function createBaseMsgCloseGroup(): MsgCloseGroup {
  return { $type: 'akash.deployment.v1beta1.MsgCloseGroup', id: undefined };
}

export const MsgCloseGroup = {
  $type: 'akash.deployment.v1beta1.MsgCloseGroup' as const,

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
  return { $type: 'akash.deployment.v1beta1.MsgCloseGroupResponse' };
}

export const MsgCloseGroupResponse = {
  $type: 'akash.deployment.v1beta1.MsgCloseGroupResponse' as const,

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
  return { $type: 'akash.deployment.v1beta1.MsgPauseGroup', id: undefined };
}

export const MsgPauseGroup = {
  $type: 'akash.deployment.v1beta1.MsgPauseGroup' as const,

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
  return { $type: 'akash.deployment.v1beta1.MsgPauseGroupResponse' };
}

export const MsgPauseGroupResponse = {
  $type: 'akash.deployment.v1beta1.MsgPauseGroupResponse' as const,

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
  return { $type: 'akash.deployment.v1beta1.MsgStartGroup', id: undefined };
}

export const MsgStartGroup = {
  $type: 'akash.deployment.v1beta1.MsgStartGroup' as const,

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
  return { $type: 'akash.deployment.v1beta1.MsgStartGroupResponse' };
}

export const MsgStartGroupResponse = {
  $type: 'akash.deployment.v1beta1.MsgStartGroupResponse' as const,

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

function createBaseGroupID(): GroupID {
  return {
    $type: 'akash.deployment.v1beta1.GroupID',
    owner: '',
    dseq: Long.UZERO,
    gseq: 0,
  };
}

export const GroupID = {
  $type: 'akash.deployment.v1beta1.GroupID' as const,

  encode(
    message: GroupID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
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
      owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
    };
  },

  toJSON(message: GroupID): unknown {
    const obj: any = {};
    if (message.owner !== '') {
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
    message.owner = object.owner ?? '';
    message.dseq =
      object.dseq !== undefined && object.dseq !== null
        ? Long.fromValue(object.dseq)
        : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GroupID.$type, GroupID);

function createBaseGroupSpec(): GroupSpec {
  return {
    $type: 'akash.deployment.v1beta1.GroupSpec',
    name: '',
    requirements: undefined,
    resources: [],
  };
}

export const GroupSpec = {
  $type: 'akash.deployment.v1beta1.GroupSpec' as const,

  encode(
    message: GroupSpec,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(
        message.requirements,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requirements = PlacementRequirements.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupSpec {
    return {
      $type: GroupSpec.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      requirements: isSet(object.requirements)
        ? PlacementRequirements.fromJSON(object.requirements)
        : undefined,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GroupSpec): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.requirements !== undefined) {
      obj.requirements = PlacementRequirements.toJSON(message.requirements);
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GroupSpec>): GroupSpec {
    return GroupSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GroupSpec>): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? '';
    message.requirements =
      object.requirements !== undefined && object.requirements !== null
        ? PlacementRequirements.fromPartial(object.requirements)
        : undefined;
    message.resources =
      object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GroupSpec.$type, GroupSpec);

function createBaseGroup(): Group {
  return {
    $type: 'akash.deployment.v1beta1.Group',
    groupId: undefined,
    state: 0,
    groupSpec: undefined,
    createdAt: Long.ZERO,
  };
}

export const Group = {
  $type: 'akash.deployment.v1beta1.Group' as const,

  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.equals(Long.ZERO)) {
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

          message.groupId = GroupID.decode(reader, reader.uint32());
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

          message.groupSpec = GroupSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.createdAt = reader.int64() as Long;
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
      $type: Group.$type,
      groupId: isSet(object.groupId)
        ? GroupID.fromJSON(object.groupId)
        : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : 0,
      groupSpec: isSet(object.groupSpec)
        ? GroupSpec.fromJSON(object.groupSpec)
        : undefined,
      createdAt: isSet(object.createdAt)
        ? Long.fromValue(object.createdAt)
        : Long.ZERO,
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    if (message.groupId !== undefined) {
      obj.groupId = GroupID.toJSON(message.groupId);
    }
    if (message.state !== 0) {
      obj.state = group_StateToJSON(message.state);
    }
    if (message.groupSpec !== undefined) {
      obj.groupSpec = GroupSpec.toJSON(message.groupSpec);
    }
    if (!message.createdAt.equals(Long.ZERO)) {
      obj.createdAt = (message.createdAt || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Group>): Group {
    return Group.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? GroupID.fromPartial(object.groupId)
        : undefined;
    message.state = object.state ?? 0;
    message.groupSpec =
      object.groupSpec !== undefined && object.groupSpec !== null
        ? GroupSpec.fromPartial(object.groupSpec)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? Long.fromValue(object.createdAt)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Group.$type, Group);

function createBaseResource(): Resource {
  return {
    $type: 'akash.deployment.v1beta1.Resource',
    resources: undefined,
    count: 0,
    price: undefined,
  };
}

export const Resource = {
  $type: 'akash.deployment.v1beta1.Resource' as const,

  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(
        message.resources,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources = ResourceUnits.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      $type: Resource.$type,
      resources: isSet(object.resources)
        ? ResourceUnits.fromJSON(object.resources)
        : undefined,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.resources !== undefined) {
      obj.resources = ResourceUnits.toJSON(message.resources);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.price !== undefined) {
      obj.price = Coin.toJSON(message.price);
    }
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? ResourceUnits.fromPartial(object.resources)
        : undefined;
    message.count = object.count ?? 0;
    message.price =
      object.price !== undefined && object.price !== null
        ? Coin.fromPartial(object.price)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Resource.$type, Resource);

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
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
