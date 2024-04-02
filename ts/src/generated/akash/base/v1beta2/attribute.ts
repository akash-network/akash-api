/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';

export const protobufPackage = 'akash.base.v1beta2';

/** Attribute represents key value pair */
export interface Attribute {
  $type: 'akash.base.v1beta2.Attribute';
  key: string;
  value: string;
}

/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBy {
  $type: 'akash.base.v1beta2.SignedBy';
  /** all_of all keys in this list must have signed attributes */
  allOf: string[];
  /** any_of at least of of the keys from the list must have signed attributes */
  anyOf: string[];
}

/** PlacementRequirements */
export interface PlacementRequirements {
  $type: 'akash.base.v1beta2.PlacementRequirements';
  /** SignedBy list of keys that tenants expect to have signatures from */
  signedBy: SignedBy | undefined;
  /** Attribute list of attributes tenant expects from the provider */
  attributes: Attribute[];
}

function createBaseAttribute(): Attribute {
  return { $type: 'akash.base.v1beta2.Attribute', key: '', value: '' };
}

export const Attribute = {
  $type: 'akash.base.v1beta2.Attribute' as const,

  encode(
    message: Attribute,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      $type: Attribute.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : '',
      value: isSet(object.value) ? globalThis.String(object.value) : '',
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    if (message.key !== '') {
      obj.key = message.key;
    }
    if (message.value !== '') {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Attribute>): Attribute {
    return Attribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

messageTypeRegistry.set(Attribute.$type, Attribute);

function createBaseSignedBy(): SignedBy {
  return { $type: 'akash.base.v1beta2.SignedBy', allOf: [], anyOf: [] };
}

export const SignedBy = {
  $type: 'akash.base.v1beta2.SignedBy' as const,

  encode(
    message: SignedBy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.allOf) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.anyOf) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedBy {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allOf.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.anyOf.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignedBy {
    return {
      $type: SignedBy.$type,
      allOf: globalThis.Array.isArray(object?.allOf)
        ? object.allOf.map((e: any) => globalThis.String(e))
        : [],
      anyOf: globalThis.Array.isArray(object?.anyOf)
        ? object.anyOf.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SignedBy): unknown {
    const obj: any = {};
    if (message.allOf?.length) {
      obj.allOf = message.allOf;
    }
    if (message.anyOf?.length) {
      obj.anyOf = message.anyOf;
    }
    return obj;
  },

  create(base?: DeepPartial<SignedBy>): SignedBy {
    return SignedBy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignedBy>): SignedBy {
    const message = createBaseSignedBy();
    message.allOf = object.allOf?.map((e) => e) || [];
    message.anyOf = object.anyOf?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SignedBy.$type, SignedBy);

function createBasePlacementRequirements(): PlacementRequirements {
  return {
    $type: 'akash.base.v1beta2.PlacementRequirements',
    signedBy: undefined,
    attributes: [],
  };
}

export const PlacementRequirements = {
  $type: 'akash.base.v1beta2.PlacementRequirements' as const,

  encode(
    message: PlacementRequirements,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signedBy !== undefined) {
      SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlacementRequirements {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signedBy = SignedBy.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlacementRequirements {
    return {
      $type: PlacementRequirements.$type,
      signedBy: isSet(object.signedBy)
        ? SignedBy.fromJSON(object.signedBy)
        : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlacementRequirements): unknown {
    const obj: any = {};
    if (message.signedBy !== undefined) {
      obj.signedBy = SignedBy.toJSON(message.signedBy);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PlacementRequirements>): PlacementRequirements {
    return PlacementRequirements.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<PlacementRequirements>,
  ): PlacementRequirements {
    const message = createBasePlacementRequirements();
    message.signedBy =
      object.signedBy !== undefined && object.signedBy !== null
        ? SignedBy.fromPartial(object.signedBy)
        : undefined;
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PlacementRequirements.$type, PlacementRequirements);

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
