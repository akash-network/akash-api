// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/base/resources/v1beta4/resources.proto (package akash.base.resources.v1beta4, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../../gogoproto/gogo_pb.ts";
import type { CPU, CPUJson } from "./cpu_pb.ts";
import { file_akash_base_resources_v1beta4_cpu } from "./cpu_pb.ts";
import type { GPU, GPUJson } from "./gpu_pb.ts";
import { file_akash_base_resources_v1beta4_gpu } from "./gpu_pb.ts";
import type { Memory, MemoryJson } from "./memory_pb.ts";
import { file_akash_base_resources_v1beta4_memory } from "./memory_pb.ts";
import type { Storage, StorageJson } from "./storage_pb.ts";
import { file_akash_base_resources_v1beta4_storage } from "./storage_pb.ts";
import type { Endpoint, EndpointJson } from "./endpoint_pb.ts";
import { file_akash_base_resources_v1beta4_endpoint } from "./endpoint_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/base/resources/v1beta4/resources.proto.
 */
export const file_akash_base_resources_v1beta4_resources: GenFile = /*@__PURE__*/
  fileDesc("Cixha2FzaC9iYXNlL3Jlc291cmNlcy92MWJldGE0L3Jlc291cmNlcy5wcm90bxIcYWthc2guYmFzZS5yZXNvdXJjZXMudjFiZXRhNCLtBAoJUmVzb3VyY2VzEiUKAmlkGAEgASgNQhni3h8CSUTq3h8CaWTy3h8JeWFtbDoiaWQiEmQKA2NwdRgCIAEoCzIhLmFrYXNoLmJhc2UucmVzb3VyY2VzLnYxYmV0YTQuQ1BVQjTI3h8B4t4fA0NQVereHw1jcHUsb21pdGVtcHR58t4fFHlhbWw6ImNwdSxvbWl0ZW1wdHkiEmkKBm1lbW9yeRgDIAEoCzIkLmFrYXNoLmJhc2UucmVzb3VyY2VzLnYxYmV0YTQuTWVtb3J5QjPI3h8B6t4fEG1lbW9yeSxvbWl0ZW1wdHny3h8XeWFtbDoibWVtb3J5LG9taXRlbXB0eSISeAoHc3RvcmFnZRgEIAMoCzIlLmFrYXNoLmJhc2UucmVzb3VyY2VzLnYxYmV0YTQuU3RvcmFnZUJAyN4fAOreHxFzdG9yYWdlLG9taXRlbXB0efLeHxh5YW1sOiJzdG9yYWdlLG9taXRlbXB0eSKq3x8HVm9sdW1lcxJkCgNncHUYBSABKAsyIS5ha2FzaC5iYXNlLnJlc291cmNlcy52MWJldGE0LkdQVUI0yN4fAeLeHwNHUFXq3h8NZ3B1LG9taXRlbXB0efLeHxR5YW1sOiJncHUsb21pdGVtcHR5IhKBAQoJZW5kcG9pbnRzGAYgAygLMiYuYWthc2guYmFzZS5yZXNvdXJjZXMudjFiZXRhNC5FbmRwb2ludEJGyN4fAOreHxNlbmRwb2ludHMsb21pdGVtcHR58t4fGnlhbWw6ImVuZHBvaW50cyxvbWl0ZW1wdHkiqt8fCUVuZHBvaW50czoE6KAfAUItWitwa2cuYWt0LmRldi9nby9ub2RlL3R5cGVzL3Jlc291cmNlcy92MWJldGE0YgZwcm90bzM", [file_gogoproto_gogo, file_akash_base_resources_v1beta4_cpu, file_akash_base_resources_v1beta4_gpu, file_akash_base_resources_v1beta4_memory, file_akash_base_resources_v1beta4_storage, file_akash_base_resources_v1beta4_endpoint]);

/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 *
 * @generated from message akash.base.resources.v1beta4.Resources
 */
export type Resources = Message<"akash.base.resources.v1beta4.Resources"> & {
  /**
   * Id is a unique identifier for the resources.
   *
   * @generated from field: uint32 id = 1;
   */
  id: number;

  /**
   * CPU resources available, including the architecture, number of cores and other details.
   * This field is optional and can be empty if no CPU resources are available.
   *
   * @generated from field: akash.base.resources.v1beta4.CPU cpu = 2;
   */
  cpu?: CPU;

  /**
   * Memory resources available, including the quantity and attributes.
   * This field is optional and can be empty if no memory resources are available.
   *
   * @generated from field: akash.base.resources.v1beta4.Memory memory = 3;
   */
  memory?: Memory;

  /**
   * Storage resources available, including the quantity and attributes.
   * This field is optional and can be empty if no storage resources are available.
   *
   * @generated from field: repeated akash.base.resources.v1beta4.Storage storage = 4;
   */
  storage: Storage[];

  /**
   * GPU resources available, including the type, architecture and other details.
   * This field is optional and can be empty if no GPU resources are available.
   *
   * @generated from field: akash.base.resources.v1beta4.GPU gpu = 5;
   */
  gpu?: GPU;

  /**
   * Endpoint resources available
   *
   * @generated from field: repeated akash.base.resources.v1beta4.Endpoint endpoints = 6;
   */
  endpoints: Endpoint[];
};

/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 *
 * @generated from message akash.base.resources.v1beta4.Resources
 */
export type ResourcesJson = {
  /**
   * Id is a unique identifier for the resources.
   *
   * @generated from field: uint32 id = 1;
   */
  id?: number;

  /**
   * CPU resources available, including the architecture, number of cores and other details.
   * This field is optional and can be empty if no CPU resources are available.
   *
   * @generated from field: akash.base.resources.v1beta4.CPU cpu = 2;
   */
  cpu?: CPUJson;

  /**
   * Memory resources available, including the quantity and attributes.
   * This field is optional and can be empty if no memory resources are available.
   *
   * @generated from field: akash.base.resources.v1beta4.Memory memory = 3;
   */
  memory?: MemoryJson;

  /**
   * Storage resources available, including the quantity and attributes.
   * This field is optional and can be empty if no storage resources are available.
   *
   * @generated from field: repeated akash.base.resources.v1beta4.Storage storage = 4;
   */
  storage?: StorageJson[];

  /**
   * GPU resources available, including the type, architecture and other details.
   * This field is optional and can be empty if no GPU resources are available.
   *
   * @generated from field: akash.base.resources.v1beta4.GPU gpu = 5;
   */
  gpu?: GPUJson;

  /**
   * Endpoint resources available
   *
   * @generated from field: repeated akash.base.resources.v1beta4.Endpoint endpoints = 6;
   */
  endpoints?: EndpointJson[];
};

/**
 * Describes the message akash.base.resources.v1beta4.Resources.
 * Use `create(ResourcesSchema)` to create a new message.
 */
export const ResourcesSchema: GenMessage<Resources, ResourcesJson> = /*@__PURE__*/
  messageDesc(file_akash_base_resources_v1beta4_resources, 0);

