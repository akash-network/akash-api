// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/capability/module/v1/module.proto (package cosmos.capability.module.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_app_v1alpha1_module } from "../../../app/v1alpha1/module_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/capability/module/v1/module.proto.
 */
export const file_cosmos_capability_module_v1_module: GenFile = /*@__PURE__*/
  fileDesc("Cihjb3Ntb3MvY2FwYWJpbGl0eS9tb2R1bGUvdjEvbW9kdWxlLnByb3RvEhtjb3Ntb3MuY2FwYWJpbGl0eS5tb2R1bGUudjEiUAoGTW9kdWxlEhMKC3NlYWxfa2VlcGVyGAEgASgIOjG6wJbaASsKKWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9jYXBhYmlsaXR5YgZwcm90bzM", [file_cosmos_app_v1alpha1_module]);

/**
 * Module is the config object of the capability module.
 *
 * @generated from message cosmos.capability.module.v1.Module
 */
export type Module = Message<"cosmos.capability.module.v1.Module"> & {
  /**
   * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
   * keeper. For more details check x/capability/keeper.go.
   *
   * @generated from field: bool seal_keeper = 1;
   */
  sealKeeper: boolean;
};

/**
 * Module is the config object of the capability module.
 *
 * @generated from message cosmos.capability.module.v1.Module
 */
export type ModuleJson = {
  /**
   * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
   * keeper. For more details check x/capability/keeper.go.
   *
   * @generated from field: bool seal_keeper = 1;
   */
  sealKeeper?: boolean;
};

/**
 * Describes the message cosmos.capability.module.v1.Module.
 * Use `create(ModuleSchema)` to create a new message.
 */
export const ModuleSchema: GenMessage<Module, ModuleJson> = /*@__PURE__*/
  messageDesc(file_cosmos_capability_module_v1_module, 0);

