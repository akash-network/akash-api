// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file akash/manifest/v2beta2/group.proto (package akash.manifest.v2beta2, syntax proto3)
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
import { Service } from './service_pb.js';

/**
 * Group store name and list of services
 *
 * @generated from message akash.manifest.v2beta2.Group
 */
export class Group extends Message<Group> {
  /**
   * @generated from field: string name = 1;
   */
  name = '';

  /**
   * @generated from field: repeated akash.manifest.v2beta2.Service services = 2;
   */
  services: Service[] = [];

  constructor(data?: PartialMessage<Group>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'akash.manifest.v2beta2.Group';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'services', kind: 'message', T: Service, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Group {
    return new Group().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Group {
    return new Group().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Group {
    return new Group().fromJsonString(jsonString, options);
  }

  static equals(
    a: Group | PlainMessage<Group> | undefined,
    b: Group | PlainMessage<Group> | undefined,
  ): boolean {
    return proto3.util.equals(Group, a, b);
  }
}
