// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file cosmos/evidence/v1beta1/evidence.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../../amino/amino_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Timestamp, TimestampJson } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/evidence/v1beta1/evidence.proto.
 */
export const file_cosmos_evidence_v1beta1_evidence: GenFile = /*@__PURE__*/
  fileDesc("CiZjb3Ntb3MvZXZpZGVuY2UvdjFiZXRhMS9ldmlkZW5jZS5wcm90bxIXY29zbW9zLmV2aWRlbmNlLnYxYmV0YTEixQEKDEVxdWl2b2NhdGlvbhIOCgZoZWlnaHQYASABKAMSNwoEdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCDcjeHwCQ3x8BqOewKgESDQoFcG93ZXIYAyABKAMSMwoRY29uc2Vuc3VzX2FkZHJlc3MYBCABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZzooiKAfAJigHwDooB8AiuewKhdjb3Ntb3Mtc2RrL0VxdWl2b2NhdGlvbkIzWi1naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvZXZpZGVuY2UvdHlwZXOo4h4BYgZwcm90bzM", [file_amino_amino, file_gogoproto_gogo, file_google_protobuf_timestamp, file_cosmos_proto_cosmos]);

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 *
 * @generated from message cosmos.evidence.v1beta1.Equivocation
 */
export type Equivocation = Message<"cosmos.evidence.v1beta1.Equivocation"> & {
  /**
   * height is the equivocation height.
   *
   * @generated from field: int64 height = 1;
   */
  height: bigint;

  /**
   * time is the equivocation time.
   *
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * power is the equivocation validator power.
   *
   * @generated from field: int64 power = 3;
   */
  power: bigint;

  /**
   * consensus_address is the equivocation validator consensus address.
   *
   * @generated from field: string consensus_address = 4;
   */
  consensusAddress: string;
};

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 *
 * @generated from message cosmos.evidence.v1beta1.Equivocation
 */
export type EquivocationJson = {
  /**
   * height is the equivocation height.
   *
   * @generated from field: int64 height = 1;
   */
  height?: string;

  /**
   * time is the equivocation time.
   *
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: TimestampJson;

  /**
   * power is the equivocation validator power.
   *
   * @generated from field: int64 power = 3;
   */
  power?: string;

  /**
   * consensus_address is the equivocation validator consensus address.
   *
   * @generated from field: string consensus_address = 4;
   */
  consensusAddress?: string;
};

/**
 * Describes the message cosmos.evidence.v1beta1.Equivocation.
 * Use `create(EquivocationSchema)` to create a new message.
 */
export const EquivocationSchema: GenMessage<Equivocation, EquivocationJson> = /*@__PURE__*/
  messageDesc(file_cosmos_evidence_v1beta1_evidence, 0);

