// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/mint/v1beta1/tx.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_msg_v1_msg } from "../../msg/v1/msg_pb.ts";
import { file_amino_amino } from "../../../amino/amino_pb.ts";
import type { Params, ParamsJson } from "./mint_pb.ts";
import { file_cosmos_mint_v1beta1_mint } from "./mint_pb.ts";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/mint/v1beta1/tx.proto.
 */
export const file_cosmos_mint_v1beta1_tx: GenFile = /*@__PURE__*/
  fileDesc("Chxjb3Ntb3MvbWludC92MWJldGExL3R4LnByb3RvEhNjb3Ntb3MubWludC52MWJldGExIqwBCg9Nc2dVcGRhdGVQYXJhbXMSKwoJYXV0aG9yaXR5GAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmcSNgoGcGFyYW1zGAIgASgLMhsuY29zbW9zLm1pbnQudjFiZXRhMS5QYXJhbXNCCcjeHwCo57AqATo0guewKglhdXRob3JpdHmK57AqIWNvc21vcy1zZGsveC9taW50L01zZ1VwZGF0ZVBhcmFtcyIZChdNc2dVcGRhdGVQYXJhbXNSZXNwb25zZTJwCgNNc2cSYgoMVXBkYXRlUGFyYW1zEiQuY29zbW9zLm1pbnQudjFiZXRhMS5Nc2dVcGRhdGVQYXJhbXMaLC5jb3Ntb3MubWludC52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1Jlc3BvbnNlGgWA57AqAUIrWilnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvbWludC90eXBlc2IGcHJvdG8z", [file_cosmos_msg_v1_msg, file_amino_amino, file_cosmos_mint_v1beta1_mint, file_gogoproto_gogo, file_cosmos_proto_cosmos]);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.mint.v1beta1.MsgUpdateParams
 */
export type MsgUpdateParams = Message<"cosmos.mint.v1beta1.MsgUpdateParams"> & {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * params defines the x/mint parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: cosmos.mint.v1beta1.Params params = 2;
   */
  params?: Params;
};

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.mint.v1beta1.MsgUpdateParams
 */
export type MsgUpdateParamsJson = {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority?: string;

  /**
   * params defines the x/mint parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: cosmos.mint.v1beta1.Params params = 2;
   */
  params?: ParamsJson;
};

/**
 * Describes the message cosmos.mint.v1beta1.MsgUpdateParams.
 * Use `create(MsgUpdateParamsSchema)` to create a new message.
 */
export const MsgUpdateParamsSchema: GenMessage<MsgUpdateParams, MsgUpdateParamsJson> = /*@__PURE__*/
  messageDesc(file_cosmos_mint_v1beta1_tx, 0);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.mint.v1beta1.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponse = Message<"cosmos.mint.v1beta1.MsgUpdateParamsResponse"> & {
};

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.mint.v1beta1.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponseJson = {
};

/**
 * Describes the message cosmos.mint.v1beta1.MsgUpdateParamsResponse.
 * Use `create(MsgUpdateParamsResponseSchema)` to create a new message.
 */
export const MsgUpdateParamsResponseSchema: GenMessage<MsgUpdateParamsResponse, MsgUpdateParamsResponseJson> = /*@__PURE__*/
  messageDesc(file_cosmos_mint_v1beta1_tx, 1);

/**
 * Msg defines the x/mint Msg service.
 *
 * @generated from service cosmos.mint.v1beta1.Msg
 */
export const Msg: GenService<{
  /**
   * UpdateParams defines a governance operation for updating the x/mint module
   * parameters. The authority is defaults to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.mint.v1beta1.Msg.UpdateParams
   */
  updateParams: {
    methodKind: "unary";
    input: typeof MsgUpdateParamsSchema;
    output: typeof MsgUpdateParamsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_cosmos_mint_v1beta1_tx, 0);

