// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/base/snapshots/v1beta1/snapshot.proto (package cosmos.base.snapshots.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../../gogoproto/gogo_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/base/snapshots/v1beta1/snapshot.proto.
 */
export const file_cosmos_base_snapshots_v1beta1_snapshot: GenFile = /*@__PURE__*/
  fileDesc("Cixjb3Ntb3MvYmFzZS9zbmFwc2hvdHMvdjFiZXRhMS9zbmFwc2hvdC5wcm90bxIdY29zbW9zLmJhc2Uuc25hcHNob3RzLnYxYmV0YTEiiQEKCFNuYXBzaG90Eg4KBmhlaWdodBgBIAEoBBIOCgZmb3JtYXQYAiABKA0SDgoGY2h1bmtzGAMgASgNEgwKBGhhc2gYBCABKAwSPwoIbWV0YWRhdGEYBSABKAsyJy5jb3Ntb3MuYmFzZS5zbmFwc2hvdHMudjFiZXRhMS5NZXRhZGF0YUIEyN4fACIgCghNZXRhZGF0YRIUCgxjaHVua19oYXNoZXMYASADKAwi0QMKDFNuYXBzaG90SXRlbRJBCgVzdG9yZRgBIAEoCzIwLmNvc21vcy5iYXNlLnNuYXBzaG90cy52MWJldGExLlNuYXBzaG90U3RvcmVJdGVtSAASSQoEaWF2bBgCIAEoCzIvLmNvc21vcy5iYXNlLnNuYXBzaG90cy52MWJldGExLlNuYXBzaG90SUFWTEl0ZW1CCOLeHwRJQVZMSAASSQoJZXh0ZW5zaW9uGAMgASgLMjQuY29zbW9zLmJhc2Uuc25hcHNob3RzLnYxYmV0YTEuU25hcHNob3RFeHRlbnNpb25NZXRhSAASVAoRZXh0ZW5zaW9uX3BheWxvYWQYBCABKAsyNy5jb3Ntb3MuYmFzZS5zbmFwc2hvdHMudjFiZXRhMS5TbmFwc2hvdEV4dGVuc2lvblBheWxvYWRIABJFCgJrdhgFIAEoCzItLmNvc21vcy5iYXNlLnNuYXBzaG90cy52MWJldGExLlNuYXBzaG90S1ZJdGVtQggYAeLeHwJLVkgAEkMKBnNjaGVtYRgGIAEoCzItLmNvc21vcy5iYXNlLnNuYXBzaG90cy52MWJldGExLlNuYXBzaG90U2NoZW1hQgIYAUgAQgYKBGl0ZW0iIQoRU25hcHNob3RTdG9yZUl0ZW0SDAoEbmFtZRgBIAEoCSJPChBTbmFwc2hvdElBVkxJdGVtEgsKA2tleRgBIAEoDBINCgV2YWx1ZRgCIAEoDBIPCgd2ZXJzaW9uGAMgASgDEg4KBmhlaWdodBgEIAEoBSI1ChVTbmFwc2hvdEV4dGVuc2lvbk1ldGESDAoEbmFtZRgBIAEoCRIOCgZmb3JtYXQYAiABKA0iKwoYU25hcHNob3RFeHRlbnNpb25QYXlsb2FkEg8KB3BheWxvYWQYASABKAwiMAoOU25hcHNob3RLVkl0ZW0SCwoDa2V5GAEgASgMEg0KBXZhbHVlGAIgASgMOgIYASIiCg5TbmFwc2hvdFNjaGVtYRIMCgRrZXlzGAEgAygMOgIYAUIuWixnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3NuYXBzaG90cy90eXBlc2IGcHJvdG8z", [file_gogoproto_gogo]);

/**
 * Snapshot contains Tendermint state sync snapshot info.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Snapshot
 */
export type Snapshot = Message<"cosmos.base.snapshots.v1beta1.Snapshot"> & {
  /**
   * @generated from field: uint64 height = 1;
   */
  height: bigint;

  /**
   * @generated from field: uint32 format = 2;
   */
  format: number;

  /**
   * @generated from field: uint32 chunks = 3;
   */
  chunks: number;

  /**
   * @generated from field: bytes hash = 4;
   */
  hash: Uint8Array;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.Metadata metadata = 5;
   */
  metadata?: Metadata;
};

/**
 * Snapshot contains Tendermint state sync snapshot info.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Snapshot
 */
export type SnapshotJson = {
  /**
   * @generated from field: uint64 height = 1;
   */
  height?: string;

  /**
   * @generated from field: uint32 format = 2;
   */
  format?: number;

  /**
   * @generated from field: uint32 chunks = 3;
   */
  chunks?: number;

  /**
   * @generated from field: bytes hash = 4;
   */
  hash?: string;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.Metadata metadata = 5;
   */
  metadata?: MetadataJson;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.Snapshot.
 * Use `create(SnapshotSchema$)` to create a new message.
 */
export const SnapshotSchema$: GenMessage<Snapshot, SnapshotJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 0);

/**
 * Metadata contains SDK-specific snapshot metadata.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Metadata
 */
export type Metadata = Message<"cosmos.base.snapshots.v1beta1.Metadata"> & {
  /**
   * SHA-256 chunk hashes
   *
   * @generated from field: repeated bytes chunk_hashes = 1;
   */
  chunkHashes: Uint8Array[];
};

/**
 * Metadata contains SDK-specific snapshot metadata.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Metadata
 */
export type MetadataJson = {
  /**
   * SHA-256 chunk hashes
   *
   * @generated from field: repeated bytes chunk_hashes = 1;
   */
  chunkHashes?: string[];
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export const MetadataSchema: GenMessage<Metadata, MetadataJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 1);

/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotItem
 */
export type SnapshotItem = Message<"cosmos.base.snapshots.v1beta1.SnapshotItem"> & {
  /**
   * item is the specific type of snapshot item.
   *
   * @generated from oneof cosmos.base.snapshots.v1beta1.SnapshotItem.item
   */
  item: {
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotStoreItem store = 1;
     */
    value: SnapshotStoreItem;
    case: "store";
  } | {
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotIAVLItem iavl = 2;
     */
    value: SnapshotIAVLItem;
    case: "iavl";
  } | {
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta extension = 3;
     */
    value: SnapshotExtensionMeta;
    case: "extension";
  } | {
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload extension_payload = 4;
     */
    value: SnapshotExtensionPayload;
    case: "extensionPayload";
  } | {
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotKVItem kv = 5 [deprecated = true];
     * @deprecated
     */
    value: SnapshotKVItem;
    case: "kv";
  } | {
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotSchema schema = 6 [deprecated = true];
     * @deprecated
     */
    value: SnapshotSchema;
    case: "schema";
  } | { case: undefined; value?: undefined };
};

/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotItem
 */
export type SnapshotItemJson = {
  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotStoreItem store = 1;
   */
  store?: SnapshotStoreItemJson;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotIAVLItem iavl = 2;
   */
  iavl?: SnapshotIAVLItemJson;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta extension = 3;
   */
  extension?: SnapshotExtensionMetaJson;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload extension_payload = 4;
   */
  extensionPayload?: SnapshotExtensionPayloadJson;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotKVItem kv = 5 [deprecated = true];
   * @deprecated
   */
  kv?: SnapshotKVItemJson;

  /**
   * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotSchema schema = 6 [deprecated = true];
   * @deprecated
   */
  schema?: SnapshotSchemaJson;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotItem.
 * Use `create(SnapshotItemSchema)` to create a new message.
 */
export const SnapshotItemSchema: GenMessage<SnapshotItem, SnapshotItemJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 2);

/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotStoreItem
 */
export type SnapshotStoreItem = Message<"cosmos.base.snapshots.v1beta1.SnapshotStoreItem"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotStoreItem
 */
export type SnapshotStoreItemJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotStoreItem.
 * Use `create(SnapshotStoreItemSchema)` to create a new message.
 */
export const SnapshotStoreItemSchema: GenMessage<SnapshotStoreItem, SnapshotStoreItemJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 3);

/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotIAVLItem
 */
export type SnapshotIAVLItem = Message<"cosmos.base.snapshots.v1beta1.SnapshotIAVLItem"> & {
  /**
   * @generated from field: bytes key = 1;
   */
  key: Uint8Array;

  /**
   * @generated from field: bytes value = 2;
   */
  value: Uint8Array;

  /**
   * version is block height
   *
   * @generated from field: int64 version = 3;
   */
  version: bigint;

  /**
   * height is depth of the tree.
   *
   * @generated from field: int32 height = 4;
   */
  height: number;
};

/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotIAVLItem
 */
export type SnapshotIAVLItemJson = {
  /**
   * @generated from field: bytes key = 1;
   */
  key?: string;

  /**
   * @generated from field: bytes value = 2;
   */
  value?: string;

  /**
   * version is block height
   *
   * @generated from field: int64 version = 3;
   */
  version?: string;

  /**
   * height is depth of the tree.
   *
   * @generated from field: int32 height = 4;
   */
  height?: number;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotIAVLItem.
 * Use `create(SnapshotIAVLItemSchema)` to create a new message.
 */
export const SnapshotIAVLItemSchema: GenMessage<SnapshotIAVLItem, SnapshotIAVLItemJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 4);

/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta
 */
export type SnapshotExtensionMeta = Message<"cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: uint32 format = 2;
   */
  format: number;
};

/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta
 */
export type SnapshotExtensionMetaJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: uint32 format = 2;
   */
  format?: number;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta.
 * Use `create(SnapshotExtensionMetaSchema)` to create a new message.
 */
export const SnapshotExtensionMetaSchema: GenMessage<SnapshotExtensionMeta, SnapshotExtensionMetaJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 5);

/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload
 */
export type SnapshotExtensionPayload = Message<"cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload"> & {
  /**
   * @generated from field: bytes payload = 1;
   */
  payload: Uint8Array;
};

/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload
 */
export type SnapshotExtensionPayloadJson = {
  /**
   * @generated from field: bytes payload = 1;
   */
  payload?: string;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload.
 * Use `create(SnapshotExtensionPayloadSchema)` to create a new message.
 */
export const SnapshotExtensionPayloadSchema: GenMessage<SnapshotExtensionPayload, SnapshotExtensionPayloadJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 6);

/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotKVItem
 * @deprecated
 */
export type SnapshotKVItem = Message<"cosmos.base.snapshots.v1beta1.SnapshotKVItem"> & {
  /**
   * @generated from field: bytes key = 1;
   */
  key: Uint8Array;

  /**
   * @generated from field: bytes value = 2;
   */
  value: Uint8Array;
};

/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotKVItem
 * @deprecated
 */
export type SnapshotKVItemJson = {
  /**
   * @generated from field: bytes key = 1;
   */
  key?: string;

  /**
   * @generated from field: bytes value = 2;
   */
  value?: string;
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotKVItem.
 * Use `create(SnapshotKVItemSchema)` to create a new message.
 * @deprecated
 */
export const SnapshotKVItemSchema: GenMessage<SnapshotKVItem, SnapshotKVItemJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 7);

/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotSchema
 * @deprecated
 */
export type SnapshotSchema = Message<"cosmos.base.snapshots.v1beta1.SnapshotSchema"> & {
  /**
   * @generated from field: repeated bytes keys = 1;
   */
  keys: Uint8Array[];
};

/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotSchema
 * @deprecated
 */
export type SnapshotSchemaJson = {
  /**
   * @generated from field: repeated bytes keys = 1;
   */
  keys?: string[];
};

/**
 * Describes the message cosmos.base.snapshots.v1beta1.SnapshotSchema.
 * Use `create(SnapshotSchemaSchema)` to create a new message.
 * @deprecated
 */
export const SnapshotSchemaSchema: GenMessage<SnapshotSchema, SnapshotSchemaJson> = /*@__PURE__*/
  messageDesc(file_cosmos_base_snapshots_v1beta1_snapshot, 8);

