// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/base/resources/v1beta4/gpu.proto (package akash.base.resources.v1beta4, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../../gogoproto/gogo_pb.ts";
import type { Attribute, AttributeJson } from "../../attributes/v1/attribute_pb.ts";
import { file_akash_base_attributes_v1_attribute } from "../../attributes/v1/attribute_pb.ts";
import type { ResourceValue, ResourceValueJson } from "./resourcevalue_pb.ts";
import { file_akash_base_resources_v1beta4_resourcevalue } from "./resourcevalue_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/base/resources/v1beta4/gpu.proto.
 */
export const file_akash_base_resources_v1beta4_gpu: GenFile = /*@__PURE__*/
  fileDesc("CiZha2FzaC9iYXNlL3Jlc291cmNlcy92MWJldGE0L2dwdS5wcm90bxIcYWthc2guYmFzZS5yZXNvdXJjZXMudjFiZXRhNCL6AQoDR1BVEkAKBXVuaXRzGAEgASgLMisuYWthc2guYmFzZS5yZXNvdXJjZXMudjFiZXRhNC5SZXNvdXJjZVZhbHVlQgTI3h8AEqoBCgphdHRyaWJ1dGVzGAIgAygLMiMuYWthc2guYmFzZS5hdHRyaWJ1dGVzLnYxLkF0dHJpYnV0ZUJxyN4fAOreHxRhdHRyaWJ1dGVzLG9taXRlbXB0efLeHxt5YW1sOiJhdHRyaWJ1dGVzLG9taXRlbXB0eSKq3x8ycGtnLmFrdC5kZXYvZ28vbm9kZS90eXBlcy9hdHRyaWJ1dGVzL3YxLkF0dHJpYnV0ZXM6BOigHwFCLVorcGtnLmFrdC5kZXYvZ28vbm9kZS90eXBlcy9yZXNvdXJjZXMvdjFiZXRhNGIGcHJvdG8z", [file_gogoproto_gogo, file_akash_base_attributes_v1_attribute, file_akash_base_resources_v1beta4_resourcevalue]);

/**
 * GPU stores resource units and gpu configuration attributes.
 *
 * @generated from message akash.base.resources.v1beta4.GPU
 */
export type GPU = Message<"akash.base.resources.v1beta4.GPU"> & {
  /**
   * The resource value of the GPU, which represents the number of GPUs available.
   * This field is required and must be a non-negative integer.
   *
   * @generated from field: akash.base.resources.v1beta4.ResourceValue units = 1;
   */
  units?: ResourceValue;

  /**
   * @generated from field: repeated akash.base.attributes.v1.Attribute attributes = 2;
   */
  attributes: Attribute[];
};

/**
 * GPU stores resource units and gpu configuration attributes.
 *
 * @generated from message akash.base.resources.v1beta4.GPU
 */
export type GPUJson = {
  /**
   * The resource value of the GPU, which represents the number of GPUs available.
   * This field is required and must be a non-negative integer.
   *
   * @generated from field: akash.base.resources.v1beta4.ResourceValue units = 1;
   */
  units?: ResourceValueJson;

  /**
   * @generated from field: repeated akash.base.attributes.v1.Attribute attributes = 2;
   */
  attributes?: AttributeJson[];
};

/**
 * Describes the message akash.base.resources.v1beta4.GPU.
 * Use `create(GPUSchema)` to create a new message.
 */
export const GPUSchema: GenMessage<GPU, GPUJson> = /*@__PURE__*/
  messageDesc(file_akash_base_resources_v1beta4_gpu, 0);

