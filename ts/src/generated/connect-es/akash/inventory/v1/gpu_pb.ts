// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file akash/inventory/v1/gpu.proto (package akash.inventory.v1, syntax proto3)
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
import { ResourcePair } from './resourcepair_pb.js';

/**
 * GPUInfo reports GPU details
 *
 * @generated from message akash.inventory.v1.GPUInfo
 */
export class GPUInfo extends Message<GPUInfo> {
  /**
   * @generated from field: string vendor = 1;
   */
  vendor = '';

  /**
   * @generated from field: string vendor_id = 2;
   */
  vendorId = '';

  /**
   * @generated from field: string name = 3;
   */
  name = '';

  /**
   * @generated from field: string modelid = 4;
   */
  modelid = '';

  /**
   * @generated from field: string interface = 5;
   */
  interface = '';

  /**
   * @generated from field: string memory_size = 6;
   */
  memorySize = '';

  constructor(data?: PartialMessage<GPUInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.inventory.v1.GPUInfo';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'vendor', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'vendor_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'modelid', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'interface', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 6,
      name: 'memory_size',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): GPUInfo {
    return new GPUInfo().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): GPUInfo {
    return new GPUInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): GPUInfo {
    return new GPUInfo().fromJsonString(jsonString, options);
  }

  static equals(
    a: GPUInfo | PlainMessage<GPUInfo> | undefined,
    b: GPUInfo | PlainMessage<GPUInfo> | undefined,
  ): boolean {
    return proto3.util.equals(GPUInfo, a, b);
  }
}

/**
 * GPUInfo reports GPU inventory details
 *
 * @generated from message akash.inventory.v1.GPU
 */
export class GPU extends Message<GPU> {
  /**
   * @generated from field: akash.inventory.v1.ResourcePair quantity = 1;
   */
  quantity?: ResourcePair;

  /**
   * @generated from field: repeated akash.inventory.v1.GPUInfo info = 2;
   */
  info: GPUInfo[] = [];

  constructor(data?: PartialMessage<GPU>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.inventory.v1.GPU';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'quantity', kind: 'message', T: ResourcePair },
    { no: 2, name: 'info', kind: 'message', T: GPUInfo, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): GPU {
    return new GPU().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): GPU {
    return new GPU().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): GPU {
    return new GPU().fromJsonString(jsonString, options);
  }

  static equals(
    a: GPU | PlainMessage<GPU> | undefined,
    b: GPU | PlainMessage<GPU> | undefined,
  ): boolean {
    return proto3.util.equals(GPU, a, b);
  }
}
