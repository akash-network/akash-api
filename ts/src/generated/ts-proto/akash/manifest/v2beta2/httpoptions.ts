/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';

/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptions {
  $type: 'akash.manifest.v2beta2.ServiceExposeHTTPOptions';
  maxBodySize: number;
  readTimeout: number;
  sendTimeout: number;
  nextTries: number;
  nextTimeout: number;
  nextCases: string[];
}

function createBaseServiceExposeHTTPOptions(): ServiceExposeHTTPOptions {
  return {
    $type: 'akash.manifest.v2beta2.ServiceExposeHTTPOptions',
    maxBodySize: 0,
    readTimeout: 0,
    sendTimeout: 0,
    nextTries: 0,
    nextTimeout: 0,
    nextCases: [],
  };
}

export const ServiceExposeHTTPOptions = {
  $type: 'akash.manifest.v2beta2.ServiceExposeHTTPOptions' as const,

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
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
