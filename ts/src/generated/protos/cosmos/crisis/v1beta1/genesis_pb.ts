// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/crisis/v1beta1/genesis.proto (package cosmos.crisis.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import type { Coin, CoinJson } from "../../base/v1beta1/coin_pb.ts";
import { file_cosmos_base_v1beta1_coin } from "../../base/v1beta1/coin_pb.ts";
import { file_amino_amino } from "../../../amino/amino_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/crisis/v1beta1/genesis.proto.
 */
export const file_cosmos_crisis_v1beta1_genesis: GenFile = /*@__PURE__*/
  fileDesc("CiNjb3Ntb3MvY3Jpc2lzL3YxYmV0YTEvZ2VuZXNpcy5wcm90bxIVY29zbW9zLmNyaXNpcy52MWJldGExIkoKDEdlbmVzaXNTdGF0ZRI6Cgxjb25zdGFudF9mZWUYAyABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CCcjeHwCo57AqAUItWitnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvY3Jpc2lzL3R5cGVzYgZwcm90bzM", [file_gogoproto_gogo, file_cosmos_base_v1beta1_coin, file_amino_amino]);

/**
 * GenesisState defines the crisis module's genesis state.
 *
 * @generated from message cosmos.crisis.v1beta1.GenesisState
 */
export type GenesisState = Message<"cosmos.crisis.v1beta1.GenesisState"> & {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   *
   * @generated from field: cosmos.base.v1beta1.Coin constant_fee = 3;
   */
  constantFee?: Coin;
};

/**
 * GenesisState defines the crisis module's genesis state.
 *
 * @generated from message cosmos.crisis.v1beta1.GenesisState
 */
export type GenesisStateJson = {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   *
   * @generated from field: cosmos.base.v1beta1.Coin constant_fee = 3;
   */
  constantFee?: CoinJson;
};

/**
 * Describes the message cosmos.crisis.v1beta1.GenesisState.
 * Use `create(GenesisStateSchema)` to create a new message.
 */
export const GenesisStateSchema: GenMessage<GenesisState, GenesisStateJson> = /*@__PURE__*/
  messageDesc(file_cosmos_crisis_v1beta1_genesis, 0);

