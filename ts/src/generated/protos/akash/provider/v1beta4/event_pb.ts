// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/provider/v1beta4/event.proto (package akash.provider.v1beta4, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/provider/v1beta4/event.proto.
 */
export const file_akash_provider_v1beta4_event: GenFile = /*@__PURE__*/
  fileDesc("CiJha2FzaC9wcm92aWRlci92MWJldGE0L2V2ZW50LnByb3RvEhZha2FzaC5wcm92aWRlci52MWJldGE0IlgKFEV2ZW50UHJvdmlkZXJDcmVhdGVkEkAKBW93bmVyGAEgASgJQjHq3h8Fb3duZXLy3h8MeWFtbDoib3duZXIi0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nIlgKFEV2ZW50UHJvdmlkZXJVcGRhdGVkEkAKBW93bmVyGAEgASgJQjHq3h8Fb3duZXLy3h8MeWFtbDoib3duZXIi0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nIlgKFEV2ZW50UHJvdmlkZXJEZWxldGVkEkAKBW93bmVyGAEgASgJQjHq3h8Fb3duZXLy3h8MeWFtbDoib3duZXIi0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nQiZaJHBrZy5ha3QuZGV2L2dvL25vZGUvcHJvdmlkZXIvdjFiZXRhNGIGcHJvdG8z", [file_gogoproto_gogo, file_cosmos_proto_cosmos]);

/**
 * EventProviderCreated defines an SDK message for provider created event.
 * It contains all the required information to identify a provider on-chain.
 *
 * @generated from message akash.provider.v1beta4.EventProviderCreated
 */
export type EventProviderCreated = Message<"akash.provider.v1beta4.EventProviderCreated"> & {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner: string;
};

/**
 * EventProviderCreated defines an SDK message for provider created event.
 * It contains all the required information to identify a provider on-chain.
 *
 * @generated from message akash.provider.v1beta4.EventProviderCreated
 */
export type EventProviderCreatedJson = {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner?: string;
};

/**
 * Describes the message akash.provider.v1beta4.EventProviderCreated.
 * Use `create(EventProviderCreatedSchema)` to create a new message.
 */
export const EventProviderCreatedSchema: GenMessage<EventProviderCreated, EventProviderCreatedJson> = /*@__PURE__*/
  messageDesc(file_akash_provider_v1beta4_event, 0);

/**
 * EventProviderUpdated defines an SDK message for provider updated event.
 * It contains all the required information to identify a provider on-chain.
 *
 * @generated from message akash.provider.v1beta4.EventProviderUpdated
 */
export type EventProviderUpdated = Message<"akash.provider.v1beta4.EventProviderUpdated"> & {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner: string;
};

/**
 * EventProviderUpdated defines an SDK message for provider updated event.
 * It contains all the required information to identify a provider on-chain.
 *
 * @generated from message akash.provider.v1beta4.EventProviderUpdated
 */
export type EventProviderUpdatedJson = {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner?: string;
};

/**
 * Describes the message akash.provider.v1beta4.EventProviderUpdated.
 * Use `create(EventProviderUpdatedSchema)` to create a new message.
 */
export const EventProviderUpdatedSchema: GenMessage<EventProviderUpdated, EventProviderUpdatedJson> = /*@__PURE__*/
  messageDesc(file_akash_provider_v1beta4_event, 1);

/**
 * EventProviderDeleted defines an SDK message for provider deleted event.
 *
 * @generated from message akash.provider.v1beta4.EventProviderDeleted
 */
export type EventProviderDeleted = Message<"akash.provider.v1beta4.EventProviderDeleted"> & {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner: string;
};

/**
 * EventProviderDeleted defines an SDK message for provider deleted event.
 *
 * @generated from message akash.provider.v1beta4.EventProviderDeleted
 */
export type EventProviderDeletedJson = {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner?: string;
};

/**
 * Describes the message akash.provider.v1beta4.EventProviderDeleted.
 * Use `create(EventProviderDeletedSchema)` to create a new message.
 */
export const EventProviderDeletedSchema: GenMessage<EventProviderDeleted, EventProviderDeletedJson> = /*@__PURE__*/
  messageDesc(file_akash_provider_v1beta4_event, 2);

