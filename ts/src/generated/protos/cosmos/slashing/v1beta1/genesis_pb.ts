// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file cosmos/slashing/v1beta1/genesis.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Params, ParamsJson, ValidatorSigningInfo, ValidatorSigningInfoJson } from "./slashing_pb";
import { file_cosmos_slashing_v1beta1_slashing } from "./slashing_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_amino_amino } from "../../../amino/amino_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/slashing/v1beta1/genesis.proto.
 */
export const file_cosmos_slashing_v1beta1_genesis: GenFile = /*@__PURE__*/
  fileDesc("CiVjb3Ntb3Mvc2xhc2hpbmcvdjFiZXRhMS9nZW5lc2lzLnByb3RvEhdjb3Ntb3Muc2xhc2hpbmcudjFiZXRhMSLkAQoMR2VuZXNpc1N0YXRlEjoKBnBhcmFtcxgBIAEoCzIfLmNvc21vcy5zbGFzaGluZy52MWJldGExLlBhcmFtc0IJyN4fAKjnsCoBEkYKDXNpZ25pbmdfaW5mb3MYAiADKAsyJC5jb3Ntb3Muc2xhc2hpbmcudjFiZXRhMS5TaWduaW5nSW5mb0IJyN4fAKjnsCoBElAKDW1pc3NlZF9ibG9ja3MYAyADKAsyLi5jb3Ntb3Muc2xhc2hpbmcudjFiZXRhMS5WYWxpZGF0b3JNaXNzZWRCbG9ja3NCCcjeHwCo57AqASKSAQoLU2lnbmluZ0luZm8SKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nElgKFnZhbGlkYXRvcl9zaWduaW5nX2luZm8YAiABKAsyLS5jb3Ntb3Muc2xhc2hpbmcudjFiZXRhMS5WYWxpZGF0b3JTaWduaW5nSW5mb0IJyN4fAKjnsCoBIooBChVWYWxpZGF0b3JNaXNzZWRCbG9ja3MSKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEkYKDW1pc3NlZF9ibG9ja3MYAiADKAsyJC5jb3Ntb3Muc2xhc2hpbmcudjFiZXRhMS5NaXNzZWRCbG9ja0IJyN4fAKjnsCoBIiwKC01pc3NlZEJsb2NrEg0KBWluZGV4GAEgASgDEg4KBm1pc3NlZBgCIAEoCEIvWi1naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvc2xhc2hpbmcvdHlwZXNiBnByb3RvMw", [file_gogoproto_gogo, file_cosmos_slashing_v1beta1_slashing, file_cosmos_proto_cosmos, file_amino_amino]);

/**
 * GenesisState defines the slashing module's genesis state.
 *
 * @generated from message cosmos.slashing.v1beta1.GenesisState
 */
export type GenesisState = Message<"cosmos.slashing.v1beta1.GenesisState"> & {
  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: cosmos.slashing.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.SigningInfo signing_infos = 2;
   */
  signingInfos: SigningInfo[];

  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorMissedBlocks missed_blocks = 3;
   */
  missedBlocks: ValidatorMissedBlocks[];
};

/**
 * GenesisState defines the slashing module's genesis state.
 *
 * @generated from message cosmos.slashing.v1beta1.GenesisState
 */
export type GenesisStateJson = {
  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: cosmos.slashing.v1beta1.Params params = 1;
   */
  params?: ParamsJson;

  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.SigningInfo signing_infos = 2;
   */
  signingInfos?: SigningInfoJson[];

  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorMissedBlocks missed_blocks = 3;
   */
  missedBlocks?: ValidatorMissedBlocksJson[];
};

/**
 * Describes the message cosmos.slashing.v1beta1.GenesisState.
 * Use `create(GenesisStateSchema)` to create a new message.
 */
export const GenesisStateSchema: GenMessage<GenesisState, GenesisStateJson> = /*@__PURE__*/
  messageDesc(file_cosmos_slashing_v1beta1_genesis, 0);

/**
 * SigningInfo stores validator signing info of corresponding address.
 *
 * @generated from message cosmos.slashing.v1beta1.SigningInfo
 */
export type SigningInfo = Message<"cosmos.slashing.v1beta1.SigningInfo"> & {
  /**
   * address is the validator address.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * validator_signing_info represents the signing info of this validator.
   *
   * @generated from field: cosmos.slashing.v1beta1.ValidatorSigningInfo validator_signing_info = 2;
   */
  validatorSigningInfo?: ValidatorSigningInfo;
};

/**
 * SigningInfo stores validator signing info of corresponding address.
 *
 * @generated from message cosmos.slashing.v1beta1.SigningInfo
 */
export type SigningInfoJson = {
  /**
   * address is the validator address.
   *
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * validator_signing_info represents the signing info of this validator.
   *
   * @generated from field: cosmos.slashing.v1beta1.ValidatorSigningInfo validator_signing_info = 2;
   */
  validatorSigningInfo?: ValidatorSigningInfoJson;
};

/**
 * Describes the message cosmos.slashing.v1beta1.SigningInfo.
 * Use `create(SigningInfoSchema)` to create a new message.
 */
export const SigningInfoSchema: GenMessage<SigningInfo, SigningInfoJson> = /*@__PURE__*/
  messageDesc(file_cosmos_slashing_v1beta1_genesis, 1);

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export type ValidatorMissedBlocks = Message<"cosmos.slashing.v1beta1.ValidatorMissedBlocks"> & {
  /**
   * address is the validator address.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * missed_blocks is an array of missed blocks by the validator.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.MissedBlock missed_blocks = 2;
   */
  missedBlocks: MissedBlock[];
};

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export type ValidatorMissedBlocksJson = {
  /**
   * address is the validator address.
   *
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * missed_blocks is an array of missed blocks by the validator.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.MissedBlock missed_blocks = 2;
   */
  missedBlocks?: MissedBlockJson[];
};

/**
 * Describes the message cosmos.slashing.v1beta1.ValidatorMissedBlocks.
 * Use `create(ValidatorMissedBlocksSchema)` to create a new message.
 */
export const ValidatorMissedBlocksSchema: GenMessage<ValidatorMissedBlocks, ValidatorMissedBlocksJson> = /*@__PURE__*/
  messageDesc(file_cosmos_slashing_v1beta1_genesis, 2);

/**
 * MissedBlock contains height and missed status as boolean.
 *
 * @generated from message cosmos.slashing.v1beta1.MissedBlock
 */
export type MissedBlock = Message<"cosmos.slashing.v1beta1.MissedBlock"> & {
  /**
   * index is the height at which the block was missed.
   *
   * @generated from field: int64 index = 1;
   */
  index: bigint;

  /**
   * missed is the missed status.
   *
   * @generated from field: bool missed = 2;
   */
  missed: boolean;
};

/**
 * MissedBlock contains height and missed status as boolean.
 *
 * @generated from message cosmos.slashing.v1beta1.MissedBlock
 */
export type MissedBlockJson = {
  /**
   * index is the height at which the block was missed.
   *
   * @generated from field: int64 index = 1;
   */
  index?: string;

  /**
   * missed is the missed status.
   *
   * @generated from field: bool missed = 2;
   */
  missed?: boolean;
};

/**
 * Describes the message cosmos.slashing.v1beta1.MissedBlock.
 * Use `create(MissedBlockSchema)` to create a new message.
 */
export const MissedBlockSchema: GenMessage<MissedBlock, MissedBlockJson> = /*@__PURE__*/
  messageDesc(file_cosmos_slashing_v1beta1_genesis, 3);

