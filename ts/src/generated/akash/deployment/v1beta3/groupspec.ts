/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';
import { PlacementRequirements } from '../../base/v1beta3/attribute';
import { ResourceUnit } from './resourceunit';

/** GroupSpec stores group specifications */
export interface GroupSpec {
  $type: 'akash.deployment.v1beta3.GroupSpec';
  name: string;
  requirements: PlacementRequirements | undefined;
  resources: ResourceUnit[];
}

function createBaseGroupSpec(): GroupSpec {
  return {
    $type: 'akash.deployment.v1beta3.GroupSpec',
    name: '',
    requirements: undefined,
    resources: [],
  };
}

export const GroupSpec = {
  $type: 'akash.deployment.v1beta3.GroupSpec' as const,

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
      ResourceUnit.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.resources.push(ResourceUnit.decode(reader, reader.uint32()));
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
        ? object.resources.map((e: any) => ResourceUnit.fromJSON(e))
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
      obj.resources = message.resources.map((e) => ResourceUnit.toJSON(e));
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
      object.resources?.map((e) => ResourceUnit.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GroupSpec.$type, GroupSpec);

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
