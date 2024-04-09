/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { messageTypeRegistry } from '../../../typeRegistry';
import { DeploymentID } from './deployment';
import { GroupSpec } from './groupspec';

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  $type: 'akash.deployment.v1beta3.MsgCreateDeployment';
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin | undefined;
  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
  $type: 'akash.deployment.v1beta3.MsgCreateDeploymentResponse';
}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  $type: 'akash.deployment.v1beta3.MsgDepositDeployment';
  id: DeploymentID | undefined;
  amount: Coin | undefined;
  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
  $type: 'akash.deployment.v1beta3.MsgDepositDeploymentResponse';
}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  $type: 'akash.deployment.v1beta3.MsgUpdateDeployment';
  id: DeploymentID | undefined;
  version: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
  $type: 'akash.deployment.v1beta3.MsgUpdateDeploymentResponse';
}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  $type: 'akash.deployment.v1beta3.MsgCloseDeployment';
  id: DeploymentID | undefined;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
  $type: 'akash.deployment.v1beta3.MsgCloseDeploymentResponse';
}

function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    $type: 'akash.deployment.v1beta3.MsgCreateDeployment',
    id: undefined,
    groups: [],
    version: new Uint8Array(0),
    deposit: undefined,
    depositor: '',
  };
}

export const MsgCreateDeployment = {
  $type: 'akash.deployment.v1beta3.MsgCreateDeployment' as const,

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
    if (message.depositor !== '') {
      writer.uint32(42).string(message.depositor);
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
      depositor: isSet(object.depositor)
        ? globalThis.String(object.depositor)
        : '',
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
    if (message.depositor !== '') {
      obj.depositor = message.depositor;
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
    message.depositor = object.depositor ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDeployment.$type, MsgCreateDeployment);

function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return { $type: 'akash.deployment.v1beta3.MsgCreateDeploymentResponse' };
}

export const MsgCreateDeploymentResponse = {
  $type: 'akash.deployment.v1beta3.MsgCreateDeploymentResponse' as const,

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
    $type: 'akash.deployment.v1beta3.MsgDepositDeployment',
    id: undefined,
    amount: undefined,
    depositor: '',
  };
}

export const MsgDepositDeployment = {
  $type: 'akash.deployment.v1beta3.MsgDepositDeployment' as const,

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
    if (message.depositor !== '') {
      writer.uint32(26).string(message.depositor);
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
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgDepositDeployment {
    return {
      $type: MsgDepositDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      depositor: isSet(object.depositor)
        ? globalThis.String(object.depositor)
        : '',
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
    if (message.depositor !== '') {
      obj.depositor = message.depositor;
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
    message.depositor = object.depositor ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgDepositDeployment.$type, MsgDepositDeployment);

function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return { $type: 'akash.deployment.v1beta3.MsgDepositDeploymentResponse' };
}

export const MsgDepositDeploymentResponse = {
  $type: 'akash.deployment.v1beta3.MsgDepositDeploymentResponse' as const,

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
    $type: 'akash.deployment.v1beta3.MsgUpdateDeployment',
    id: undefined,
    version: new Uint8Array(0),
  };
}

export const MsgUpdateDeployment = {
  $type: 'akash.deployment.v1beta3.MsgUpdateDeployment' as const,

  encode(
    message: MsgUpdateDeployment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
    message.version = object.version ?? new Uint8Array(0);
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDeployment.$type, MsgUpdateDeployment);

function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return { $type: 'akash.deployment.v1beta3.MsgUpdateDeploymentResponse' };
}

export const MsgUpdateDeploymentResponse = {
  $type: 'akash.deployment.v1beta3.MsgUpdateDeploymentResponse' as const,

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
    $type: 'akash.deployment.v1beta3.MsgCloseDeployment',
    id: undefined,
  };
}

export const MsgCloseDeployment = {
  $type: 'akash.deployment.v1beta3.MsgCloseDeployment' as const,

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
  return { $type: 'akash.deployment.v1beta3.MsgCloseDeploymentResponse' };
}

export const MsgCloseDeploymentResponse = {
  $type: 'akash.deployment.v1beta3.MsgCloseDeploymentResponse' as const,

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
