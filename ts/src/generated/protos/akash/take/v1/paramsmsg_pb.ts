// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/take/v1/paramsmsg.proto (package akash.take.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import { file_cosmos_msg_v1_msg } from "../../../cosmos/msg/v1/msg_pb.ts";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb.ts";
import type { Params, ParamsJson } from "./params_pb.ts";
import { file_akash_take_v1_params } from "./params_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/take/v1/paramsmsg.proto.
 */
export const file_akash_take_v1_paramsmsg: GenFile = /*@__PURE__*/
  fileDesc("Ch1ha2FzaC90YWtlL3YxL3BhcmFtc21zZy5wcm90bxINYWthc2gudGFrZS52MSJ7Cg9Nc2dVcGRhdGVQYXJhbXMSKwoJYXV0aG9yaXR5GAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmcSKwoGcGFyYW1zGAIgASgLMhUuYWthc2gudGFrZS52MS5QYXJhbXNCBMjeHwA6DoLnsCoJYXV0aG9yaXR5IhkKF01zZ1VwZGF0ZVBhcmFtc1Jlc3BvbnNlQh1aG3BrZy5ha3QuZGV2L2dvL25vZGUvdGFrZS92MWIGcHJvdG8z", [file_gogoproto_gogo, file_cosmos_msg_v1_msg, file_cosmos_proto_cosmos, file_akash_take_v1_params]);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: akash v1.0.0
 *
 * @generated from message akash.take.v1.MsgUpdateParams
 */
export type MsgUpdateParams = Message<"akash.take.v1.MsgUpdateParams"> & {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * params defines the x/deployment parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: akash.take.v1.Params params = 2;
   */
  params?: Params;
};

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: akash v1.0.0
 *
 * @generated from message akash.take.v1.MsgUpdateParams
 */
export type MsgUpdateParamsJson = {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority?: string;

  /**
   * params defines the x/deployment parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: akash.take.v1.Params params = 2;
   */
  params?: ParamsJson;
};

/**
 * Describes the message akash.take.v1.MsgUpdateParams.
 * Use `create(MsgUpdateParamsSchema)` to create a new message.
 */
export const MsgUpdateParamsSchema: GenMessage<MsgUpdateParams, MsgUpdateParamsJson> = /*@__PURE__*/
  messageDesc(file_akash_take_v1_paramsmsg, 0);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: akash v1.0.0
 *
 * @generated from message akash.take.v1.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponse = Message<"akash.take.v1.MsgUpdateParamsResponse"> & {
};

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: akash v1.0.0
 *
 * @generated from message akash.take.v1.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponseJson = {
};

/**
 * Describes the message akash.take.v1.MsgUpdateParamsResponse.
 * Use `create(MsgUpdateParamsResponseSchema)` to create a new message.
 */
export const MsgUpdateParamsResponseSchema: GenMessage<MsgUpdateParamsResponse, MsgUpdateParamsResponseJson> = /*@__PURE__*/
  messageDesc(file_akash_take_v1_paramsmsg, 1);

