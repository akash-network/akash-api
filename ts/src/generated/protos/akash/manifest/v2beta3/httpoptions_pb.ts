// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/manifest/v2beta3/httpoptions.proto (package akash.manifest.v2beta3, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/manifest/v2beta3/httpoptions.proto.
 */
export const file_akash_manifest_v2beta3_httpoptions: GenFile = /*@__PURE__*/
  fileDesc("Cihha2FzaC9tYW5pZmVzdC92MmJldGEzL2h0dHBvcHRpb25zLnByb3RvEhZha2FzaC5tYW5pZmVzdC52MmJldGEzIpUDChhTZXJ2aWNlRXhwb3NlSFRUUE9wdGlvbnMSPAoNbWF4X2JvZHlfc2l6ZRgBIAEoDUIl6t4fC21heEJvZHlTaXpl8t4fEnlhbWw6Im1heEJvZHlTaXplIhI7CgxyZWFkX3RpbWVvdXQYAiABKA1CJereHwtyZWFkVGltZW91dPLeHxJ5YW1sOiJyZWFkVGltZW91dCISOwoMc2VuZF90aW1lb3V0GAMgASgNQiXq3h8Lc2VuZFRpbWVvdXTy3h8SeWFtbDoic2VuZFRpbWVvdXQiEjUKCm5leHRfdHJpZXMYBCABKA1CIereHwluZXh0VHJpZXPy3h8QeWFtbDoibmV4dFRyaWVzIhI7CgxuZXh0X3RpbWVvdXQYBSABKA1CJereHwtuZXh0VGltZW91dPLeHxJ5YW1sOiJuZXh0VGltZW91dCISTQoKbmV4dF9jYXNlcxgGIAMoCUI5yN4fAereHxNuZXh0Q2FzZXMsb21pdGVtcHR58t4fGnlhbWw6Im5leHRDYXNlcyxvbWl0ZW1wdHkiQilaH3BrZy5ha3QuZGV2L2dvL21hbmlmZXN0L3YyYmV0YTPY4R4AgOIeAWIGcHJvdG8z", [file_gogoproto_gogo]);

/**
 * ServiceExposeHTTPOptions
 *
 * @generated from message akash.manifest.v2beta3.ServiceExposeHTTPOptions
 */
export type ServiceExposeHTTPOptions = Message<"akash.manifest.v2beta3.ServiceExposeHTTPOptions"> & {
  /**
   * @generated from field: uint32 max_body_size = 1;
   */
  maxBodySize: number;

  /**
   * @generated from field: uint32 read_timeout = 2;
   */
  readTimeout: number;

  /**
   * @generated from field: uint32 send_timeout = 3;
   */
  sendTimeout: number;

  /**
   * @generated from field: uint32 next_tries = 4;
   */
  nextTries: number;

  /**
   * @generated from field: uint32 next_timeout = 5;
   */
  nextTimeout: number;

  /**
   * @generated from field: repeated string next_cases = 6;
   */
  nextCases: string[];
};

/**
 * ServiceExposeHTTPOptions
 *
 * @generated from message akash.manifest.v2beta3.ServiceExposeHTTPOptions
 */
export type ServiceExposeHTTPOptionsJson = {
  /**
   * @generated from field: uint32 max_body_size = 1;
   */
  maxBodySize?: number;

  /**
   * @generated from field: uint32 read_timeout = 2;
   */
  readTimeout?: number;

  /**
   * @generated from field: uint32 send_timeout = 3;
   */
  sendTimeout?: number;

  /**
   * @generated from field: uint32 next_tries = 4;
   */
  nextTries?: number;

  /**
   * @generated from field: uint32 next_timeout = 5;
   */
  nextTimeout?: number;

  /**
   * @generated from field: repeated string next_cases = 6;
   */
  nextCases?: string[];
};

/**
 * Describes the message akash.manifest.v2beta3.ServiceExposeHTTPOptions.
 * Use `create(ServiceExposeHTTPOptionsSchema)` to create a new message.
 */
export const ServiceExposeHTTPOptionsSchema: GenMessage<ServiceExposeHTTPOptions, ServiceExposeHTTPOptionsJson> = /*@__PURE__*/
  messageDesc(file_akash_manifest_v2beta3_httpoptions, 0);

