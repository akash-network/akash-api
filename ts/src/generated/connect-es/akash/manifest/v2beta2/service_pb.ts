// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file akash/manifest/v2beta2/service.proto (package akash.manifest.v2beta2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';
import { Resources } from '../../base/v1beta3/resources_pb.js';
import { ServiceExpose } from './serviceexpose_pb.js';

/**
 * StorageParams
 *
 * @generated from message akash.manifest.v2beta2.StorageParams
 */
export class StorageParams extends Message<StorageParams> {
  /**
   * @generated from field: string name = 1;
   */
  name = '';

  /**
   * @generated from field: string mount = 2;
   */
  mount = '';

  /**
   * @generated from field: bool read_only = 3;
   */
  readOnly = false;

  constructor(data?: PartialMessage<StorageParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.manifest.v2beta2.StorageParams';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'mount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'read_only', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): StorageParams {
    return new StorageParams().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): StorageParams {
    return new StorageParams().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): StorageParams {
    return new StorageParams().fromJsonString(jsonString, options);
  }

  static equals(
    a: StorageParams | PlainMessage<StorageParams> | undefined,
    b: StorageParams | PlainMessage<StorageParams> | undefined,
  ): boolean {
    return proto3.util.equals(StorageParams, a, b);
  }
}

/**
 * ServiceParams
 *
 * @generated from message akash.manifest.v2beta2.ServiceParams
 */
export class ServiceParams extends Message<ServiceParams> {
  /**
   * @generated from field: repeated akash.manifest.v2beta2.StorageParams storage = 1;
   */
  storage: StorageParams[] = [];

  constructor(data?: PartialMessage<ServiceParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.manifest.v2beta2.ServiceParams';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'storage',
      kind: 'message',
      T: StorageParams,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ServiceParams {
    return new ServiceParams().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ServiceParams {
    return new ServiceParams().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ServiceParams {
    return new ServiceParams().fromJsonString(jsonString, options);
  }

  static equals(
    a: ServiceParams | PlainMessage<ServiceParams> | undefined,
    b: ServiceParams | PlainMessage<ServiceParams> | undefined,
  ): boolean {
    return proto3.util.equals(ServiceParams, a, b);
  }
}

/**
 * Credentials to fetch image from registry
 *
 * @generated from message akash.manifest.v2beta2.ServiceImageCredentials
 */
export class ServiceImageCredentials extends Message<ServiceImageCredentials> {
  /**
   * @generated from field: string host = 1;
   */
  host = '';

  /**
   * @generated from field: string email = 2;
   */
  email = '';

  /**
   * @generated from field: string username = 3;
   */
  username = '';

  /**
   * @generated from field: string password = 4;
   */
  password = '';

  constructor(data?: PartialMessage<ServiceImageCredentials>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.manifest.v2beta2.ServiceImageCredentials';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'host', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'email', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'username', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'password', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ServiceImageCredentials {
    return new ServiceImageCredentials().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ServiceImageCredentials {
    return new ServiceImageCredentials().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ServiceImageCredentials {
    return new ServiceImageCredentials().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | ServiceImageCredentials
      | PlainMessage<ServiceImageCredentials>
      | undefined,
    b:
      | ServiceImageCredentials
      | PlainMessage<ServiceImageCredentials>
      | undefined,
  ): boolean {
    return proto3.util.equals(ServiceImageCredentials, a, b);
  }
}

/**
 * Service stores name, image, args, env, unit, count and expose list of service
 *
 * @generated from message akash.manifest.v2beta2.Service
 */
export class Service extends Message<Service> {
  /**
   * @generated from field: string name = 1;
   */
  name = '';

  /**
   * @generated from field: string image = 2;
   */
  image = '';

  /**
   * @generated from field: repeated string command = 3;
   */
  command: string[] = [];

  /**
   * @generated from field: repeated string args = 4;
   */
  args: string[] = [];

  /**
   * @generated from field: repeated string env = 5;
   */
  env: string[] = [];

  /**
   * @generated from field: akash.base.v1beta3.Resources resources = 6;
   */
  resources?: Resources;

  /**
   * @generated from field: uint32 count = 7;
   */
  count = 0;

  /**
   * @generated from field: repeated akash.manifest.v2beta2.ServiceExpose expose = 8;
   */
  expose: ServiceExpose[] = [];

  /**
   * @generated from field: akash.manifest.v2beta2.ServiceParams params = 9;
   */
  params?: ServiceParams;

  /**
   * @generated from field: akash.manifest.v2beta2.ServiceImageCredentials credentials = 10;
   */
  credentials?: ServiceImageCredentials;

  constructor(data?: PartialMessage<Service>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.manifest.v2beta2.Service';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'image', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'command',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    {
      no: 4,
      name: 'args',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    {
      no: 5,
      name: 'env',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    { no: 6, name: 'resources', kind: 'message', T: Resources },
    { no: 7, name: 'count', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    {
      no: 8,
      name: 'expose',
      kind: 'message',
      T: ServiceExpose,
      repeated: true,
    },
    { no: 9, name: 'params', kind: 'message', T: ServiceParams },
    {
      no: 10,
      name: 'credentials',
      kind: 'message',
      T: ServiceImageCredentials,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Service {
    return new Service().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Service {
    return new Service().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Service {
    return new Service().fromJsonString(jsonString, options);
  }

  static equals(
    a: Service | PlainMessage<Service> | undefined,
    b: Service | PlainMessage<Service> | undefined,
  ): boolean {
    return proto3.util.equals(Service, a, b);
  }
}
