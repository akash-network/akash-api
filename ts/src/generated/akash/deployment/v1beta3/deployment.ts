/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';

export const protobufPackage = 'akash.deployment.v1beta3';

/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  $type: 'akash.deployment.v1beta3.DeploymentID';
  owner: string;
  dseq: Long;
}

/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  $type: 'akash.deployment.v1beta3.Deployment';
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
  $type: 'akash.deployment.v1beta3.DeploymentFilters';
  owner: string;
  dseq: Long;
  state: string;
}

function createBaseDeploymentID(): DeploymentID {
  return {
    $type: 'akash.deployment.v1beta3.DeploymentID',
    owner: '',
    dseq: Long.UZERO,
  };
}

export const DeploymentID = {
  $type: 'akash.deployment.v1beta3.DeploymentID' as const,

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
    $type: 'akash.deployment.v1beta3.Deployment',
    deploymentId: undefined,
    state: 0,
    version: new Uint8Array(0),
    createdAt: Long.ZERO,
  };
}

export const Deployment = {
  $type: 'akash.deployment.v1beta3.Deployment' as const,

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
    $type: 'akash.deployment.v1beta3.DeploymentFilters',
    owner: '',
    dseq: Long.UZERO,
    state: '',
  };
}

export const DeploymentFilters = {
  $type: 'akash.deployment.v1beta3.DeploymentFilters' as const,

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
