/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

/** CORSConfig defines CORS configuration for HTTP services */
export interface CORSConfig {
  $type: "akash.manifest.v2beta1.CORSConfig";
  allowedOrigins: string[];
  allowedMethods: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  allowCredentials: boolean;
  maxAge: number;
}

/** BasicAuthConfig defines basic authentication configuration for HTTP services */
export interface BasicAuthConfig {
  $type: "akash.manifest.v2beta1.BasicAuthConfig";
  username: string;
  password: string;
}

/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptions {
  $type: "akash.manifest.v2beta1.ServiceExposeHTTPOptions";
  maxBodySize: number;
  readTimeout: number;
  sendTimeout: number;
  nextTries: number;
  nextTimeout: number;
  nextCases: string[];
  cors: CORSConfig | undefined;
  basicAuth: BasicAuthConfig | undefined;
}

function createBaseCORSConfig(): CORSConfig {
  return {
    $type: "akash.manifest.v2beta1.CORSConfig",
    allowedOrigins: [],
    allowedMethods: [],
    allowedHeaders: [],
    exposedHeaders: [],
    allowCredentials: false,
    maxAge: 0,
  };
}

export const CORSConfig = {
  $type: "akash.manifest.v2beta1.CORSConfig" as const,

  encode(
    message: CORSConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.allowedOrigins) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.allowedMethods) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.allowedHeaders) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.exposedHeaders) {
      writer.uint32(34).string(v!);
    }
    if (message.allowCredentials !== false) {
      writer.uint32(40).bool(message.allowCredentials);
    }
    if (message.maxAge !== 0) {
      writer.uint32(48).uint32(message.maxAge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CORSConfig {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCORSConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allowedOrigins.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allowedMethods.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowedHeaders.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.exposedHeaders.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allowCredentials = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxAge = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CORSConfig {
    return {
      $type: CORSConfig.$type,
      allowedOrigins: globalThis.Array.isArray(object?.allowedOrigins)
        ? object.allowedOrigins.map((e: any) => globalThis.String(e))
        : [],
      allowedMethods: globalThis.Array.isArray(object?.allowedMethods)
        ? object.allowedMethods.map((e: any) => globalThis.String(e))
        : [],
      allowedHeaders: globalThis.Array.isArray(object?.allowedHeaders)
        ? object.allowedHeaders.map((e: any) => globalThis.String(e))
        : [],
      exposedHeaders: globalThis.Array.isArray(object?.exposedHeaders)
        ? object.exposedHeaders.map((e: any) => globalThis.String(e))
        : [],
      allowCredentials: isSet(object.allowCredentials)
        ? globalThis.Boolean(object.allowCredentials)
        : false,
      maxAge: isSet(object.maxAge) ? globalThis.Number(object.maxAge) : 0,
    };
  },

  toJSON(message: CORSConfig): unknown {
    const obj: any = {};
    if (message.allowedOrigins?.length) {
      obj.allowedOrigins = message.allowedOrigins;
    }
    if (message.allowedMethods?.length) {
      obj.allowedMethods = message.allowedMethods;
    }
    if (message.allowedHeaders?.length) {
      obj.allowedHeaders = message.allowedHeaders;
    }
    if (message.exposedHeaders?.length) {
      obj.exposedHeaders = message.exposedHeaders;
    }
    if (message.allowCredentials !== false) {
      obj.allowCredentials = message.allowCredentials;
    }
    if (message.maxAge !== 0) {
      obj.maxAge = Math.round(message.maxAge);
    }
    return obj;
  },

  create(base?: DeepPartial<CORSConfig>): CORSConfig {
    return CORSConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CORSConfig>): CORSConfig {
    const message = createBaseCORSConfig();
    message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
    message.allowedMethods = object.allowedMethods?.map((e) => e) || [];
    message.allowedHeaders = object.allowedHeaders?.map((e) => e) || [];
    message.exposedHeaders = object.exposedHeaders?.map((e) => e) || [];
    message.allowCredentials = object.allowCredentials ?? false;
    message.maxAge = object.maxAge ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CORSConfig.$type, CORSConfig);

function createBaseBasicAuthConfig(): BasicAuthConfig {
  return {
    $type: "akash.manifest.v2beta1.BasicAuthConfig",
    username: "",
    password: "",
  };
}

export const BasicAuthConfig = {
  $type: "akash.manifest.v2beta1.BasicAuthConfig" as const,

  encode(
    message: BasicAuthConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicAuthConfig {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAuthConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BasicAuthConfig {
    return {
      $type: BasicAuthConfig.$type,
      username: isSet(object.username)
        ? globalThis.String(object.username)
        : "",
      password: isSet(object.password)
        ? globalThis.String(object.password)
        : "",
    };
  },

  toJSON(message: BasicAuthConfig): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<BasicAuthConfig>): BasicAuthConfig {
    return BasicAuthConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BasicAuthConfig>): BasicAuthConfig {
    const message = createBaseBasicAuthConfig();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(BasicAuthConfig.$type, BasicAuthConfig);

function createBaseServiceExposeHTTPOptions(): ServiceExposeHTTPOptions {
  return {
    $type: "akash.manifest.v2beta1.ServiceExposeHTTPOptions",
    maxBodySize: 0,
    readTimeout: 0,
    sendTimeout: 0,
    nextTries: 0,
    nextTimeout: 0,
    nextCases: [],
    cors: undefined,
    basicAuth: undefined,
  };
}

export const ServiceExposeHTTPOptions = {
  $type: "akash.manifest.v2beta1.ServiceExposeHTTPOptions" as const,

  encode(
    message: ServiceExposeHTTPOptions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.maxBodySize !== 0) {
      writer.uint32(8).uint32(message.maxBodySize);
    }
    if (message.readTimeout !== 0) {
      writer.uint32(16).uint32(message.readTimeout);
    }
    if (message.sendTimeout !== 0) {
      writer.uint32(24).uint32(message.sendTimeout);
    }
    if (message.nextTries !== 0) {
      writer.uint32(32).uint32(message.nextTries);
    }
    if (message.nextTimeout !== 0) {
      writer.uint32(40).uint32(message.nextTimeout);
    }
    for (const v of message.nextCases) {
      writer.uint32(50).string(v!);
    }
    if (message.cors !== undefined) {
      CORSConfig.encode(message.cors, writer.uint32(58).fork()).ldelim();
    }
    if (message.basicAuth !== undefined) {
      BasicAuthConfig.encode(
        message.basicAuth,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ServiceExposeHTTPOptions {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceExposeHTTPOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxBodySize = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.readTimeout = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sendTimeout = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nextTries = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nextTimeout = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nextCases.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cors = CORSConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.basicAuth = BasicAuthConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceExposeHTTPOptions {
    return {
      $type: ServiceExposeHTTPOptions.$type,
      maxBodySize: isSet(object.maxBodySize)
        ? globalThis.Number(object.maxBodySize)
        : 0,
      readTimeout: isSet(object.readTimeout)
        ? globalThis.Number(object.readTimeout)
        : 0,
      sendTimeout: isSet(object.sendTimeout)
        ? globalThis.Number(object.sendTimeout)
        : 0,
      nextTries: isSet(object.nextTries)
        ? globalThis.Number(object.nextTries)
        : 0,
      nextTimeout: isSet(object.nextTimeout)
        ? globalThis.Number(object.nextTimeout)
        : 0,
      nextCases: globalThis.Array.isArray(object?.nextCases)
        ? object.nextCases.map((e: any) => globalThis.String(e))
        : [],
      cors: isSet(object.cors) ? CORSConfig.fromJSON(object.cors) : undefined,
      basicAuth: isSet(object.basicAuth)
        ? BasicAuthConfig.fromJSON(object.basicAuth)
        : undefined,
    };
  },

  toJSON(message: ServiceExposeHTTPOptions): unknown {
    const obj: any = {};
    if (message.maxBodySize !== 0) {
      obj.maxBodySize = Math.round(message.maxBodySize);
    }
    if (message.readTimeout !== 0) {
      obj.readTimeout = Math.round(message.readTimeout);
    }
    if (message.sendTimeout !== 0) {
      obj.sendTimeout = Math.round(message.sendTimeout);
    }
    if (message.nextTries !== 0) {
      obj.nextTries = Math.round(message.nextTries);
    }
    if (message.nextTimeout !== 0) {
      obj.nextTimeout = Math.round(message.nextTimeout);
    }
    if (message.nextCases?.length) {
      obj.nextCases = message.nextCases;
    }
    if (message.cors !== undefined) {
      obj.cors = CORSConfig.toJSON(message.cors);
    }
    if (message.basicAuth !== undefined) {
      obj.basicAuth = BasicAuthConfig.toJSON(message.basicAuth);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ServiceExposeHTTPOptions>,
  ): ServiceExposeHTTPOptions {
    return ServiceExposeHTTPOptions.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ServiceExposeHTTPOptions>,
  ): ServiceExposeHTTPOptions {
    const message = createBaseServiceExposeHTTPOptions();
    message.maxBodySize = object.maxBodySize ?? 0;
    message.readTimeout = object.readTimeout ?? 0;
    message.sendTimeout = object.sendTimeout ?? 0;
    message.nextTries = object.nextTries ?? 0;
    message.nextTimeout = object.nextTimeout ?? 0;
    message.nextCases = object.nextCases?.map((e) => e) || [];
    message.cors =
      object.cors !== undefined && object.cors !== null
        ? CORSConfig.fromPartial(object.cors)
        : undefined;
    message.basicAuth =
      object.basicAuth !== undefined && object.basicAuth !== null
        ? BasicAuthConfig.fromPartial(object.basicAuth)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ServiceExposeHTTPOptions.$type,
  ServiceExposeHTTPOptions,
);

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
