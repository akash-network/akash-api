/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Deployment } from "./deployment";
import { Group } from "./group";
import { Params } from "./params";

/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
  $type: "akash.deployment.v1beta3.GenesisDeployment";
  deployment: Deployment | undefined;
  groups: Group[];
}

/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  $type: "akash.deployment.v1beta3.GenesisState";
  deployments: GenesisDeployment[];
  params: Params | undefined;
}

function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    $type: "akash.deployment.v1beta3.GenesisDeployment",
    deployment: undefined,
    groups: [],
  };
}

export const GenesisDeployment = {
  $type: "akash.deployment.v1beta3.GenesisDeployment" as const,

  encode(
    message: GenesisDeployment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDeployment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deployment = Deployment.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisDeployment {
    return {
      $type: GenesisDeployment.$type,
      deployment: isSet(object.deployment)
        ? Deployment.fromJSON(object.deployment)
        : undefined,
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => Group.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisDeployment): unknown {
    const obj: any = {};
    if (message.deployment !== undefined) {
      obj.deployment = Deployment.toJSON(message.deployment);
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisDeployment>): GenesisDeployment {
    return GenesisDeployment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisDeployment>): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment =
      object.deployment !== undefined && object.deployment !== null
        ? Deployment.fromPartial(object.deployment)
        : undefined;
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisDeployment.$type, GenesisDeployment);

function createBaseGenesisState(): GenesisState {
  return {
    $type: "akash.deployment.v1beta3.GenesisState",
    deployments: [],
    params: undefined,
  };
}

export const GenesisState = {
  $type: "akash.deployment.v1beta3.GenesisState" as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deployments.push(
            GenesisDeployment.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      deployments: globalThis.Array.isArray(object?.deployments)
        ? object.deployments.map((e: any) => GenesisDeployment.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.deployments?.length) {
      obj.deployments = message.deployments.map((e) =>
        GenesisDeployment.toJSON(e),
      );
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.deployments =
      object.deployments?.map((e) => GenesisDeployment.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
