// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file cosmos/slashing/module/v1/module.proto (package cosmos.slashing.module.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_app_v1alpha1_module } from "../../../app/v1alpha1/module_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/slashing/module/v1/module.proto.
 */
export const file_cosmos_slashing_module_v1_module: GenFile = /*@__PURE__*/
  fileDesc("CiZjb3Ntb3Mvc2xhc2hpbmcvbW9kdWxlL3YxL21vZHVsZS5wcm90bxIZY29zbW9zLnNsYXNoaW5nLm1vZHVsZS52MSJMCgZNb2R1bGUSEQoJYXV0aG9yaXR5GAEgASgJOi+6wJbaASkKJ2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9zbGFzaGluZ2IGcHJvdG8z", [file_cosmos_app_v1alpha1_module]);

/**
 * Module is the config object of the slashing module.
 *
 * @generated from message cosmos.slashing.module.v1.Module
 */
export type Module = Message<"cosmos.slashing.module.v1.Module"> & {
  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 1;
   */
  authority: string;
};

/**
 * Module is the config object of the slashing module.
 *
 * @generated from message cosmos.slashing.module.v1.Module
 */
export type ModuleJson = {
  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 1;
   */
  authority?: string;
};

/**
 * Describes the message cosmos.slashing.module.v1.Module.
 * Use `create(ModuleSchema)` to create a new message.
 */
export const ModuleSchema: GenMessage<Module, ModuleJson> = /*@__PURE__*/
  messageDesc(file_cosmos_slashing_module_v1_module, 0);

