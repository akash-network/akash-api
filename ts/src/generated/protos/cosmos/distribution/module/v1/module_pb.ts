// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/distribution/module/v1/module.proto (package cosmos.distribution.module.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_app_v1alpha1_module } from "../../../app/v1alpha1/module_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/distribution/module/v1/module.proto.
 */
export const file_cosmos_distribution_module_v1_module: GenFile = /*@__PURE__*/
  fileDesc("Cipjb3Ntb3MvZGlzdHJpYnV0aW9uL21vZHVsZS92MS9tb2R1bGUucHJvdG8SHWNvc21vcy5kaXN0cmlidXRpb24ubW9kdWxlLnYxImwKBk1vZHVsZRIaChJmZWVfY29sbGVjdG9yX25hbWUYASABKAkSEQoJYXV0aG9yaXR5GAIgASgJOjO6wJbaAS0KK2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb25iBnByb3RvMw", [file_cosmos_app_v1alpha1_module]);

/**
 * Module is the config object of the distribution module.
 *
 * @generated from message cosmos.distribution.module.v1.Module
 */
export type Module = Message<"cosmos.distribution.module.v1.Module"> & {
  /**
   * @generated from field: string fee_collector_name = 1;
   */
  feeCollectorName: string;

  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 2;
   */
  authority: string;
};

/**
 * Module is the config object of the distribution module.
 *
 * @generated from message cosmos.distribution.module.v1.Module
 */
export type ModuleJson = {
  /**
   * @generated from field: string fee_collector_name = 1;
   */
  feeCollectorName?: string;

  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 2;
   */
  authority?: string;
};

/**
 * Describes the message cosmos.distribution.module.v1.Module.
 * Use `create(ModuleSchema)` to create a new message.
 */
export const ModuleSchema: GenMessage<Module, ModuleJson> = /*@__PURE__*/
  messageDesc(file_cosmos_distribution_module_v1_module, 0);

