// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file akash/deployment/v1beta4/params.proto (package akash.deployment.v1beta4, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Coin, CoinJson } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../../cosmos/base/v1beta1/coin_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/deployment/v1beta4/params.proto.
 */
export const file_akash_deployment_v1beta4_params: GenFile = /*@__PURE__*/
  fileDesc("CiVha2FzaC9kZXBsb3ltZW50L3YxYmV0YTQvcGFyYW1zLnByb3RvEhhha2FzaC5kZXBsb3ltZW50LnYxYmV0YTQiogEKBlBhcmFtcxKXAQoMbWluX2RlcG9zaXRzGAEgAygLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQmbI3h8A4t4fC01pbkRlcG9zaXRz6t4fDG1pbl9kZXBvc2l0c/LeHxN5YW1sOiJtaW5fZGVwb3NpdHMiqt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnNCKFomcGtnLmFrdC5kZXYvZ28vbm9kZS9kZXBsb3ltZW50L3YxYmV0YTRiBnByb3RvMw", [file_gogoproto_gogo, file_cosmos_base_v1beta1_coin]);

/**
 * Params defines the parameters for the x/deployment module.
 *
 * @generated from message akash.deployment.v1beta4.Params
 */
export type Params = Message<"akash.deployment.v1beta4.Params"> & {
  /**
   * MinDeposits holds a list of the minimum amount of deposits for each a coin.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposits = 1;
   */
  minDeposits: Coin[];
};

/**
 * Params defines the parameters for the x/deployment module.
 *
 * @generated from message akash.deployment.v1beta4.Params
 */
export type ParamsJson = {
  /**
   * MinDeposits holds a list of the minimum amount of deposits for each a coin.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposits = 1;
   */
  minDeposits?: CoinJson[];
};

/**
 * Describes the message akash.deployment.v1beta4.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params, ParamsJson> = /*@__PURE__*/
  messageDesc(file_akash_deployment_v1beta4_params, 0);

