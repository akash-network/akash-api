/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Attribute } from "../../base/v1beta1/attribute";

/** Provider stores owner auditor and attributes details */
export interface Provider {
  $type: "akash.audit.v1beta1.Provider";
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** Attributes */
export interface AuditedAttributes {
  $type: "akash.audit.v1beta1.AuditedAttributes";
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
  $type: "akash.audit.v1beta1.AttributesResponse";
  attributes: AuditedAttributes[];
}

/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
  $type: "akash.audit.v1beta1.AttributesFilters";
  auditors: string[];
  owners: string[];
}

/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
  $type: "akash.audit.v1beta1.MsgSignProviderAttributes";
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {
  $type: "akash.audit.v1beta1.MsgSignProviderAttributesResponse";
}

/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  $type: "akash.audit.v1beta1.MsgDeleteProviderAttributes";
  owner: string;
  auditor: string;
  keys: string[];
}

/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {
  $type: "akash.audit.v1beta1.MsgDeleteProviderAttributesResponse";
}

function createBaseProvider(): Provider {
  return {
    $type: "akash.audit.v1beta1.Provider",
    owner: "",
    auditor: "",
    attributes: [],
  };
}

export const Provider = {
  $type: "akash.audit.v1beta1.Provider" as const,

  encode(
    message: Provider,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
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
          if (tag !== 18) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): Provider {
    return {
      $type: Provider.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.auditor !== "") {
      obj.auditor = message.auditor;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Provider>): Provider {
    return Provider.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Provider.$type, Provider);

function createBaseAuditedAttributes(): AuditedAttributes {
  return {
    $type: "akash.audit.v1beta1.AuditedAttributes",
    owner: "",
    auditor: "",
    attributes: [],
  };
}

export const AuditedAttributes = {
  $type: "akash.audit.v1beta1.AuditedAttributes" as const,

  encode(
    message: AuditedAttributes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuditedAttributes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditedAttributes();
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
          if (tag !== 18) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): AuditedAttributes {
    return {
      $type: AuditedAttributes.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuditedAttributes): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.auditor !== "") {
      obj.auditor = message.auditor;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AuditedAttributes>): AuditedAttributes {
    return AuditedAttributes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditedAttributes>): AuditedAttributes {
    const message = createBaseAuditedAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AuditedAttributes.$type, AuditedAttributes);

function createBaseAttributesResponse(): AttributesResponse {
  return { $type: "akash.audit.v1beta1.AttributesResponse", attributes: [] };
}

export const AttributesResponse = {
  $type: "akash.audit.v1beta1.AttributesResponse" as const,

  encode(
    message: AttributesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributes.push(
            AuditedAttributes.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributesResponse {
    return {
      $type: AttributesResponse.$type,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AttributesResponse): unknown {
    const obj: any = {};
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) =>
        AuditedAttributes.toJSON(e),
      );
    }
    return obj;
  },

  create(base?: DeepPartial<AttributesResponse>): AttributesResponse {
    return AttributesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributesResponse>): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes =
      object.attributes?.map((e) => AuditedAttributes.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AttributesResponse.$type, AttributesResponse);

function createBaseAttributesFilters(): AttributesFilters {
  return {
    $type: "akash.audit.v1beta1.AttributesFilters",
    auditors: [],
    owners: [],
  };
}

export const AttributesFilters = {
  $type: "akash.audit.v1beta1.AttributesFilters" as const,

  encode(
    message: AttributesFilters,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.auditors.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owners.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributesFilters {
    return {
      $type: AttributesFilters.$type,
      auditors: globalThis.Array.isArray(object?.auditors)
        ? object.auditors.map((e: any) => globalThis.String(e))
        : [],
      owners: globalThis.Array.isArray(object?.owners)
        ? object.owners.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AttributesFilters): unknown {
    const obj: any = {};
    if (message.auditors?.length) {
      obj.auditors = message.auditors;
    }
    if (message.owners?.length) {
      obj.owners = message.owners;
    }
    return obj;
  },

  create(base?: DeepPartial<AttributesFilters>): AttributesFilters {
    return AttributesFilters.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map((e) => e) || [];
    message.owners = object.owners?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AttributesFilters.$type, AttributesFilters);

function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
  return {
    $type: "akash.audit.v1beta1.MsgSignProviderAttributes",
    owner: "",
    auditor: "",
    attributes: [],
  };
}

export const MsgSignProviderAttributes = {
  $type: "akash.audit.v1beta1.MsgSignProviderAttributes" as const,

  encode(
    message: MsgSignProviderAttributes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSignProviderAttributes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributes();
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
          if (tag !== 18) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgSignProviderAttributes {
    return {
      $type: MsgSignProviderAttributes.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSignProviderAttributes): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.auditor !== "") {
      obj.auditor = message.auditor;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(
    base?: DeepPartial<MsgSignProviderAttributes>,
  ): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MsgSignProviderAttributes>,
  ): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MsgSignProviderAttributes.$type,
  MsgSignProviderAttributes,
);

function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return { $type: "akash.audit.v1beta1.MsgSignProviderAttributesResponse" };
}

export const MsgSignProviderAttributesResponse = {
  $type: "akash.audit.v1beta1.MsgSignProviderAttributesResponse" as const,

  encode(
    _: MsgSignProviderAttributesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSignProviderAttributesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributesResponse();
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

  fromJSON(_: any): MsgSignProviderAttributesResponse {
    return { $type: MsgSignProviderAttributesResponse.$type };
  },

  toJSON(_: MsgSignProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgSignProviderAttributesResponse>,
  ): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgSignProviderAttributesResponse>,
  ): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgSignProviderAttributesResponse.$type,
  MsgSignProviderAttributesResponse,
);

function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
  return {
    $type: "akash.audit.v1beta1.MsgDeleteProviderAttributes",
    owner: "",
    auditor: "",
    keys: [],
  };
}

export const MsgDeleteProviderAttributes = {
  $type: "akash.audit.v1beta1.MsgDeleteProviderAttributes" as const,

  encode(
    message: MsgDeleteProviderAttributes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteProviderAttributes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributes();
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
          if (tag !== 18) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProviderAttributes {
    return {
      $type: MsgDeleteProviderAttributes.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : "",
      keys: globalThis.Array.isArray(object?.keys)
        ? object.keys.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: MsgDeleteProviderAttributes): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.auditor !== "") {
      obj.auditor = message.auditor;
    }
    if (message.keys?.length) {
      obj.keys = message.keys;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MsgDeleteProviderAttributes>,
  ): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MsgDeleteProviderAttributes>,
  ): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MsgDeleteProviderAttributes.$type,
  MsgDeleteProviderAttributes,
);

function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return { $type: "akash.audit.v1beta1.MsgDeleteProviderAttributesResponse" };
}

export const MsgDeleteProviderAttributesResponse = {
  $type: "akash.audit.v1beta1.MsgDeleteProviderAttributesResponse" as const,

  encode(
    _: MsgDeleteProviderAttributesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteProviderAttributesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributesResponse();
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

  fromJSON(_: any): MsgDeleteProviderAttributesResponse {
    return { $type: MsgDeleteProviderAttributesResponse.$type };
  },

  toJSON(_: MsgDeleteProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgDeleteProviderAttributesResponse>,
  ): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgDeleteProviderAttributesResponse>,
  ): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgDeleteProviderAttributesResponse.$type,
  MsgDeleteProviderAttributesResponse,
);

/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  SignProviderAttributes(
    request: MsgSignProviderAttributes,
  ): Promise<MsgSignProviderAttributesResponse>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  DeleteProviderAttributes(
    request: MsgDeleteProviderAttributes,
  ): Promise<MsgDeleteProviderAttributesResponse>;
}

export const MsgServiceName = "akash.audit.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
    this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
  }
  SignProviderAttributes(
    request: MsgSignProviderAttributes,
  ): Promise<MsgSignProviderAttributesResponse> {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SignProviderAttributes",
      data,
    );
    return promise.then((data) =>
      MsgSignProviderAttributesResponse.decode(_m0.Reader.create(data)),
    );
  }

  DeleteProviderAttributes(
    request: MsgDeleteProviderAttributes,
  ): Promise<MsgDeleteProviderAttributesResponse> {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeleteProviderAttributes",
      data,
    );
    return promise.then((data) =>
      MsgDeleteProviderAttributesResponse.decode(_m0.Reader.create(data)),
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
