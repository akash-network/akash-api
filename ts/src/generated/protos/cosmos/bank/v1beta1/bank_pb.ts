// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/bank/v1beta1/bank.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb.ts";
import type { Coin, CoinJson } from "../../base/v1beta1/coin_pb.ts";
import { file_cosmos_base_v1beta1_coin } from "../../base/v1beta1/coin_pb.ts";
import { file_cosmos_msg_v1_msg } from "../../msg/v1/msg_pb.ts";
import { file_amino_amino } from "../../../amino/amino_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/bank/v1beta1/bank.proto.
 */
export const file_cosmos_bank_v1beta1_bank: GenFile = /*@__PURE__*/
  fileDesc("Ch5jb3Ntb3MvYmFuay92MWJldGExL2JhbmsucHJvdG8SE2Nvc21vcy5iYW5rLnYxYmV0YTEihQEKBlBhcmFtcxI6CgxzZW5kX2VuYWJsZWQYASADKAsyIC5jb3Ntb3MuYmFuay52MWJldGExLlNlbmRFbmFibGVkQgIYARIcChRkZWZhdWx0X3NlbmRfZW5hYmxlZBgCIAEoCDohmKAfAIrnsCoYY29zbW9zLXNkay94L2JhbmsvUGFyYW1zIjcKC1NlbmRFbmFibGVkEg0KBWRlbm9tGAEgASgJEg8KB2VuYWJsZWQYAiABKAg6CJigHwDooB8BIqkBCgVJbnB1dBIpCgdhZGRyZXNzGAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmcSXwoFY29pbnMYAiADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CNcjeHwCq3x8oZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2luc6jnsCoBOhSIoB8A6KAfAILnsCoHYWRkcmVzcyKeAQoGT3V0cHV0EikKB2FkZHJlc3MYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxJfCgVjb2lucxgCIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkI1yN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zqOewKgE6CIigHwDooB8AIpQBCgZTdXBwbHkSXwoFdG90YWwYASADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CNcjeHwCq3x8oZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2luc6jnsCoBOikYAYigHwDooB8ByrQtG2Nvc21vcy5iYW5rLnYxYmV0YTEuU3VwcGx5SSI9CglEZW5vbVVuaXQSDQoFZGVub20YASABKAkSEAoIZXhwb25lbnQYAiABKA0SDwoHYWxpYXNlcxgDIAMoCSLGAQoITWV0YWRhdGESEwoLZGVzY3JpcHRpb24YASABKAkSMwoLZGVub21fdW5pdHMYAiADKAsyHi5jb3Ntb3MuYmFuay52MWJldGExLkRlbm9tVW5pdBIMCgRiYXNlGAMgASgJEg8KB2Rpc3BsYXkYBCABKAkSDAoEbmFtZRgFIAEoCRIOCgZzeW1ib2wYBiABKAkSFAoDdXJpGAcgASgJQgfi3h8DVVJJEh0KCHVyaV9oYXNoGAggASgJQgvi3h8HVVJJSGFzaEIrWilnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYmFuay90eXBlc2IGcHJvdG8z", [file_gogoproto_gogo, file_cosmos_proto_cosmos, file_cosmos_base_v1beta1_coin, file_cosmos_msg_v1_msg, file_amino_amino]);

/**
 * Params defines the parameters for the bank module.
 *
 * @generated from message cosmos.bank.v1beta1.Params
 */
export type Params = Message<"cosmos.bank.v1beta1.Params"> & {
  /**
   * Deprecated: Use of SendEnabled in params is deprecated.
   * For genesis, use the newly added send_enabled field in the genesis object.
   * Storage, lookup, and manipulation of this information is now in the keeper.
   *
   * As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.
   *
   * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1 [deprecated = true];
   * @deprecated
   */
  sendEnabled: SendEnabled[];

  /**
   * @generated from field: bool default_send_enabled = 2;
   */
  defaultSendEnabled: boolean;
};

/**
 * Params defines the parameters for the bank module.
 *
 * @generated from message cosmos.bank.v1beta1.Params
 */
export type ParamsJson = {
  /**
   * Deprecated: Use of SendEnabled in params is deprecated.
   * For genesis, use the newly added send_enabled field in the genesis object.
   * Storage, lookup, and manipulation of this information is now in the keeper.
   *
   * As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.
   *
   * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1 [deprecated = true];
   * @deprecated
   */
  sendEnabled?: SendEnabledJson[];

  /**
   * @generated from field: bool default_send_enabled = 2;
   */
  defaultSendEnabled?: boolean;
};

/**
 * Describes the message cosmos.bank.v1beta1.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params, ParamsJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 0);

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from message cosmos.bank.v1beta1.SendEnabled
 */
export type SendEnabled = Message<"cosmos.bank.v1beta1.SendEnabled"> & {
  /**
   * @generated from field: string denom = 1;
   */
  denom: string;

  /**
   * @generated from field: bool enabled = 2;
   */
  enabled: boolean;
};

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from message cosmos.bank.v1beta1.SendEnabled
 */
export type SendEnabledJson = {
  /**
   * @generated from field: string denom = 1;
   */
  denom?: string;

  /**
   * @generated from field: bool enabled = 2;
   */
  enabled?: boolean;
};

/**
 * Describes the message cosmos.bank.v1beta1.SendEnabled.
 * Use `create(SendEnabledSchema)` to create a new message.
 */
export const SendEnabledSchema: GenMessage<SendEnabled, SendEnabledJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 1);

/**
 * Input models transaction input.
 *
 * @generated from message cosmos.bank.v1beta1.Input
 */
export type Input = Message<"cosmos.bank.v1beta1.Input"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins: Coin[];
};

/**
 * Input models transaction input.
 *
 * @generated from message cosmos.bank.v1beta1.Input
 */
export type InputJson = {
  /**
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins?: CoinJson[];
};

/**
 * Describes the message cosmos.bank.v1beta1.Input.
 * Use `create(InputSchema)` to create a new message.
 */
export const InputSchema: GenMessage<Input, InputJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 2);

/**
 * Output models transaction outputs.
 *
 * @generated from message cosmos.bank.v1beta1.Output
 */
export type Output = Message<"cosmos.bank.v1beta1.Output"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins: Coin[];
};

/**
 * Output models transaction outputs.
 *
 * @generated from message cosmos.bank.v1beta1.Output
 */
export type OutputJson = {
  /**
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins?: CoinJson[];
};

/**
 * Describes the message cosmos.bank.v1beta1.Output.
 * Use `create(OutputSchema)` to create a new message.
 */
export const OutputSchema: GenMessage<Output, OutputJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 3);

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @generated from message cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export type Supply = Message<"cosmos.bank.v1beta1.Supply"> & {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total = 1;
   */
  total: Coin[];
};

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @generated from message cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export type SupplyJson = {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total = 1;
   */
  total?: CoinJson[];
};

/**
 * Describes the message cosmos.bank.v1beta1.Supply.
 * Use `create(SupplySchema)` to create a new message.
 * @deprecated
 */
export const SupplySchema: GenMessage<Supply, SupplyJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 4);

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from message cosmos.bank.v1beta1.DenomUnit
 */
export type DenomUnit = Message<"cosmos.bank.v1beta1.DenomUnit"> & {
  /**
   * denom represents the string name of the given denom unit (e.g uatom).
   *
   * @generated from field: string denom = 1;
   */
  denom: string;

  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   *
   * @generated from field: uint32 exponent = 2;
   */
  exponent: number;

  /**
   * aliases is a list of string aliases for the given denom
   *
   * @generated from field: repeated string aliases = 3;
   */
  aliases: string[];
};

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from message cosmos.bank.v1beta1.DenomUnit
 */
export type DenomUnitJson = {
  /**
   * denom represents the string name of the given denom unit (e.g uatom).
   *
   * @generated from field: string denom = 1;
   */
  denom?: string;

  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   *
   * @generated from field: uint32 exponent = 2;
   */
  exponent?: number;

  /**
   * aliases is a list of string aliases for the given denom
   *
   * @generated from field: repeated string aliases = 3;
   */
  aliases?: string[];
};

/**
 * Describes the message cosmos.bank.v1beta1.DenomUnit.
 * Use `create(DenomUnitSchema)` to create a new message.
 */
export const DenomUnitSchema: GenMessage<DenomUnit, DenomUnitJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 5);

/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from message cosmos.bank.v1beta1.Metadata
 */
export type Metadata = Message<"cosmos.bank.v1beta1.Metadata"> & {
  /**
   * @generated from field: string description = 1;
   */
  description: string;

  /**
   * denom_units represents the list of DenomUnit's for a given coin
   *
   * @generated from field: repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2;
   */
  denomUnits: DenomUnit[];

  /**
   * base represents the base denom (should be the DenomUnit with exponent = 0).
   *
   * @generated from field: string base = 3;
   */
  base: string;

  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   *
   * @generated from field: string display = 4;
   */
  display: string;

  /**
   * name defines the name of the token (eg: Cosmos Atom)
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string symbol = 6;
   */
  symbol: string;

  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: string uri = 7;
   */
  uri: string;

  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: string uri_hash = 8;
   */
  uriHash: string;
};

/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from message cosmos.bank.v1beta1.Metadata
 */
export type MetadataJson = {
  /**
   * @generated from field: string description = 1;
   */
  description?: string;

  /**
   * denom_units represents the list of DenomUnit's for a given coin
   *
   * @generated from field: repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2;
   */
  denomUnits?: DenomUnitJson[];

  /**
   * base represents the base denom (should be the DenomUnit with exponent = 0).
   *
   * @generated from field: string base = 3;
   */
  base?: string;

  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   *
   * @generated from field: string display = 4;
   */
  display?: string;

  /**
   * name defines the name of the token (eg: Cosmos Atom)
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string name = 5;
   */
  name?: string;

  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string symbol = 6;
   */
  symbol?: string;

  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: string uri = 7;
   */
  uri?: string;

  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: string uri_hash = 8;
   */
  uriHash?: string;
};

/**
 * Describes the message cosmos.bank.v1beta1.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export const MetadataSchema: GenMessage<Metadata, MetadataJson> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_bank, 6);

