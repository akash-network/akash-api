/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { messageTypeRegistry } from '../../../typeRegistry';
import {
  GroupSpec,
  MsgCloseGroup,
  MsgCloseGroupResponse,
  MsgPauseGroup,
  MsgPauseGroupResponse,
  MsgStartGroup,
  MsgStartGroupResponse,
} from './group';

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  $type: 'akash.deployment.v1beta1.MsgCreateDeployment';
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin | undefined;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
  $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse';
}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  $type: 'akash.deployment.v1beta1.MsgDepositDeployment';
  id: DeploymentID | undefined;
  amount: Coin | undefined;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
  $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse';
}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  $type: 'akash.deployment.v1beta1.MsgUpdateDeployment';
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
  $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse';
}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  $type: 'akash.deployment.v1beta1.MsgCloseDeployment';
  id: DeploymentID | undefined;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
  $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse';
}

/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  $type: 'akash.deployment.v1beta1.DeploymentID';
  owner: string;
  dseq: Long;
}

/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  $type: 'akash.deployment.v1beta1.Deployment';
  deploymentId: DeploymentID | undefined;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: Long;
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
    case 'invalid':
      return Deployment_State.invalid;
    case 1:
    case 'active':
      return Deployment_State.active;
    case 2:
    case 'closed':
      return Deployment_State.closed;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}

export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return 'invalid';
    case Deployment_State.active:
      return 'active';
    case Deployment_State.closed:
      return 'closed';
    case Deployment_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  $type: 'akash.deployment.v1beta1.DeploymentFilters';
  owner: string;
  dseq: Long;
  state: string;
}

function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    $type: 'akash.deployment.v1beta1.MsgCreateDeployment',
    id: undefined,
    groups: [],
    version: new Uint8Array(0),
    deposit: undefined,
  };
}

export const MsgCreateDeployment = {
  $type: 'akash.deployment.v1beta1.MsgCreateDeployment' as const,

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
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment {
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

          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
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
      $type: MsgCreateDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => GroupSpec.fromJSON(e))
        : [],
      version: isSet(object.version)
        ? bytesFromBase64(object.version)
        : new Uint8Array(0),
      deposit: isSet(object.deposit)
        ? Coin.fromJSON(object.deposit)
        : undefined,
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
    if (message.version.length !== 0) {
      obj.version = base64FromBytes(message.version);
    }
    if (message.deposit !== undefined) {
      obj.deposit = Coin.toJSON(message.deposit);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    return MsgCreateDeployment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id =
      object.id !== undefined && object.id !== null
        ? DeploymentID.fromPartial(object.id)
        : undefined;
    message.groups = object.groups?.map((e) => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array(0);
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? Coin.fromPartial(object.deposit)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDeployment.$type, MsgCreateDeployment);

function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return { $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse' };
}

export const MsgCreateDeploymentResponse = {
  $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse' as const,

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
    return { $type: MsgCreateDeploymentResponse.$type };
  },

  toJSON(_: MsgCreateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgCreateDeploymentResponse>,
  ): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgCreateDeploymentResponse>,
  ): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateDeploymentResponse.$type,
  MsgCreateDeploymentResponse,
);

function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    $type: 'akash.deployment.v1beta1.MsgDepositDeployment',
    id: undefined,
    amount: undefined,
  };
}

export const MsgDepositDeployment = {
  $type: 'akash.deployment.v1beta1.MsgDepositDeployment' as const,

  encode(
    message: MsgDepositDeployment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDepositDeployment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeployment();
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

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDepositDeployment {
    return {
      $type: MsgDepositDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDepositDeployment): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = DeploymentID.toJSON(message.id);
    }
    if (message.amount !== undefined) {
      obj.amount = Coin.toJSON(message.amount);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    return MsgDepositDeployment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id =
      object.id !== undefined && object.id !== null
        ? DeploymentID.fromPartial(object.id)
        : undefined;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgDepositDeployment.$type, MsgDepositDeployment);

function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return { $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse' };
}

export const MsgDepositDeploymentResponse = {
  $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse' as const,

  encode(
    _: MsgDepositDeploymentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDepositDeploymentResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeploymentResponse();
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

  fromJSON(_: any): MsgDepositDeploymentResponse {
    return { $type: MsgDepositDeploymentResponse.$type };
  },

  toJSON(_: MsgDepositDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgDepositDeploymentResponse>,
  ): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgDepositDeploymentResponse>,
  ): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgDepositDeploymentResponse.$type,
  MsgDepositDeploymentResponse,
);

function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeployment',
    id: undefined,
    groups: [],
    version: new Uint8Array(0),
  };
}

export const MsgUpdateDeployment = {
  $type: 'akash.deployment.v1beta1.MsgUpdateDeployment' as const,

  encode(
    message: MsgUpdateDeployment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment {
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.bytes();
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
      $type: MsgUpdateDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => GroupSpec.fromJSON(e))
        : [],
      version: isSet(object.version)
        ? bytesFromBase64(object.version)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgUpdateDeployment): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = DeploymentID.toJSON(message.id);
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => GroupSpec.toJSON(e));
    }
    if (message.version.length !== 0) {
      obj.version = base64FromBytes(message.version);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    return MsgUpdateDeployment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id =
      object.id !== undefined && object.id !== null
        ? DeploymentID.fromPartial(object.id)
        : undefined;
    message.groups = object.groups?.map((e) => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array(0);
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDeployment.$type, MsgUpdateDeployment);

function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return { $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse' };
}

export const MsgUpdateDeploymentResponse = {
  $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse' as const,

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
    return { $type: MsgUpdateDeploymentResponse.$type };
  },

  toJSON(_: MsgUpdateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgUpdateDeploymentResponse>,
  ): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgUpdateDeploymentResponse>,
  ): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateDeploymentResponse.$type,
  MsgUpdateDeploymentResponse,
);

function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    $type: 'akash.deployment.v1beta1.MsgCloseDeployment',
    id: undefined,
  };
}

export const MsgCloseDeployment = {
  $type: 'akash.deployment.v1beta1.MsgCloseDeployment' as const,

  encode(
    message: MsgCloseDeployment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment {
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
      $type: MsgCloseDeployment.$type,
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

  create(base?: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    return MsgCloseDeployment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id =
      object.id !== undefined && object.id !== null
        ? DeploymentID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCloseDeployment.$type, MsgCloseDeployment);

function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return { $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse' };
}

export const MsgCloseDeploymentResponse = {
  $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse' as const,

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
    return { $type: MsgCloseDeploymentResponse.$type };
  },

  toJSON(_: MsgCloseDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgCloseDeploymentResponse>,
  ): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgCloseDeploymentResponse>,
  ): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCloseDeploymentResponse.$type,
  MsgCloseDeploymentResponse,
);

function createBaseDeploymentID(): DeploymentID {
  return {
    $type: 'akash.deployment.v1beta1.DeploymentID',
    owner: '',
    dseq: Long.UZERO,
  };
}

export const DeploymentID = {
  $type: 'akash.deployment.v1beta1.DeploymentID' as const,

  encode(
    message: DeploymentID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
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

          message.dseq = reader.uint64() as Long;
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
      $type: DeploymentID.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
    };
  },

  toJSON(message: DeploymentID): unknown {
    const obj: any = {};
    if (message.owner !== '') {
      obj.owner = message.owner;
    }
    if (!message.dseq.equals(Long.UZERO)) {
      obj.dseq = (message.dseq || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<DeploymentID>): DeploymentID {
    return DeploymentID.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? '';
    message.dseq =
      object.dseq !== undefined && object.dseq !== null
        ? Long.fromValue(object.dseq)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(DeploymentID.$type, DeploymentID);

function createBaseDeployment(): Deployment {
  return {
    $type: 'akash.deployment.v1beta1.Deployment',
    deploymentId: undefined,
    state: 0,
    version: new Uint8Array(0),
    createdAt: Long.ZERO,
  };
}

export const Deployment = {
  $type: 'akash.deployment.v1beta1.Deployment' as const,

  encode(
    message: Deployment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(
        message.deploymentId,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (!message.createdAt.equals(Long.ZERO)) {
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

          message.deploymentId = DeploymentID.decode(reader, reader.uint32());
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

          message.version = reader.bytes();
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

  fromJSON(object: any): Deployment {
    return {
      $type: Deployment.$type,
      deploymentId: isSet(object.deploymentId)
        ? DeploymentID.fromJSON(object.deploymentId)
        : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
      version: isSet(object.version)
        ? bytesFromBase64(object.version)
        : new Uint8Array(0),
      createdAt: isSet(object.createdAt)
        ? Long.fromValue(object.createdAt)
        : Long.ZERO,
    };
  },

  toJSON(message: Deployment): unknown {
    const obj: any = {};
    if (message.deploymentId !== undefined) {
      obj.deploymentId = DeploymentID.toJSON(message.deploymentId);
    }
    if (message.state !== 0) {
      obj.state = deployment_StateToJSON(message.state);
    }
    if (message.version.length !== 0) {
      obj.version = base64FromBytes(message.version);
    }
    if (!message.createdAt.equals(Long.ZERO)) {
      obj.createdAt = (message.createdAt || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Deployment>): Deployment {
    return Deployment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = createBaseDeployment();
    message.deploymentId =
      object.deploymentId !== undefined && object.deploymentId !== null
        ? DeploymentID.fromPartial(object.deploymentId)
        : undefined;
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array(0);
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? Long.fromValue(object.createdAt)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Deployment.$type, Deployment);

function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    $type: 'akash.deployment.v1beta1.DeploymentFilters',
    owner: '',
    dseq: Long.UZERO,
    state: '',
  };
}

export const DeploymentFilters = {
  $type: 'akash.deployment.v1beta1.DeploymentFilters' as const,

  encode(
    message: DeploymentFilters,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== '') {
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

          message.dseq = reader.uint64() as Long;
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
      $type: DeploymentFilters.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      state: isSet(object.state) ? globalThis.String(object.state) : '',
    };
  },

  toJSON(message: DeploymentFilters): unknown {
    const obj: any = {};
    if (message.owner !== '') {
      obj.owner = message.owner;
    }
    if (!message.dseq.equals(Long.UZERO)) {
      obj.dseq = (message.dseq || Long.UZERO).toString();
    }
    if (message.state !== '') {
      obj.state = message.state;
    }
    return obj;
  },

  create(base?: DeepPartial<DeploymentFilters>): DeploymentFilters {
    return DeploymentFilters.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? '';
    message.dseq =
      object.dseq !== undefined && object.dseq !== null
        ? Long.fromValue(object.dseq)
        : Long.UZERO;
    message.state = object.state ?? '';
    return message;
  },
};

messageTypeRegistry.set(DeploymentFilters.$type, DeploymentFilters);

/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  CreateDeployment(
    request: MsgCreateDeployment,
  ): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  DepositDeployment(
    request: MsgDepositDeployment,
  ): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  UpdateDeployment(
    request: MsgUpdateDeployment,
  ): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  CloseDeployment(
    request: MsgCloseDeployment,
  ): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}

export const MsgServiceName = 'akash.deployment.v1beta1.Msg';
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateDeployment = this.CreateDeployment.bind(this);
    this.DepositDeployment = this.DepositDeployment.bind(this);
    this.UpdateDeployment = this.UpdateDeployment.bind(this);
    this.CloseDeployment = this.CloseDeployment.bind(this);
    this.CloseGroup = this.CloseGroup.bind(this);
    this.PauseGroup = this.PauseGroup.bind(this);
    this.StartGroup = this.StartGroup.bind(this);
  }
  CreateDeployment(
    request: MsgCreateDeployment,
  ): Promise<MsgCreateDeploymentResponse> {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CreateDeployment', data);
    return promise.then((data) =>
      MsgCreateDeploymentResponse.decode(_m0.Reader.create(data)),
    );
  }

  DepositDeployment(
    request: MsgDepositDeployment,
  ): Promise<MsgDepositDeploymentResponse> {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, 'DepositDeployment', data);
    return promise.then((data) =>
      MsgDepositDeploymentResponse.decode(_m0.Reader.create(data)),
    );
  }

  UpdateDeployment(
    request: MsgUpdateDeployment,
  ): Promise<MsgUpdateDeploymentResponse> {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, 'UpdateDeployment', data);
    return promise.then((data) =>
      MsgUpdateDeploymentResponse.decode(_m0.Reader.create(data)),
    );
  }

  CloseDeployment(
    request: MsgCloseDeployment,
  ): Promise<MsgCloseDeploymentResponse> {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CloseDeployment', data);
    return promise.then((data) =>
      MsgCloseDeploymentResponse.decode(_m0.Reader.create(data)),
    );
  }

  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse> {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CloseGroup', data);
    return promise.then((data) =>
      MsgCloseGroupResponse.decode(_m0.Reader.create(data)),
    );
  }

  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse> {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, 'PauseGroup', data);
    return promise.then((data) =>
      MsgPauseGroupResponse.decode(_m0.Reader.create(data)),
    );
  }

  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse> {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, 'StartGroup', data);
    return promise.then((data) =>
      MsgStartGroupResponse.decode(_m0.Reader.create(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
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
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
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

type DeepPartial<T> = T extends Builtin
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
