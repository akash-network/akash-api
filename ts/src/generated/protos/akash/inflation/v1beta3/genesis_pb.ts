// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/inflation/v1beta3/genesis.proto (package akash.inflation.v1beta3, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import type { Params, ParamsJson } from "./params_pb.ts";
import { file_akash_inflation_v1beta3_params } from "./params_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/inflation/v1beta3/genesis.proto.
 */
export const file_akash_inflation_v1beta3_genesis: GenFile = /*@__PURE__*/
  fileDesc("CiVha2FzaC9pbmZsYXRpb24vdjFiZXRhMy9nZW5lc2lzLnByb3RvEhdha2FzaC5pbmZsYXRpb24udjFiZXRhMyJgCgxHZW5lc2lzU3RhdGUSUAoGcGFyYW1zGAEgASgLMh8uYWthc2guaW5mbGF0aW9uLnYxYmV0YTMuUGFyYW1zQh/I3h8A6t4fBnBhcmFtc/LeHw15YW1sOiJwYXJhbXMiQidaJXBrZy5ha3QuZGV2L2dvL25vZGUvaW5mbGF0aW9uL3YxYmV0YTNiBnByb3RvMw", [file_gogoproto_gogo, file_akash_inflation_v1beta3_params]);

/**
 * GenesisState stores slice of genesis inflation.
 *
 * @generated from message akash.inflation.v1beta3.GenesisState
 */
export type GenesisState = Message<"akash.inflation.v1beta3.GenesisState"> & {
  /**
   * Params holds parameters of the genesis of inflation.
   *
   * @generated from field: akash.inflation.v1beta3.Params params = 1;
   */
  params?: Params;
};

/**
 * GenesisState stores slice of genesis inflation.
 *
 * @generated from message akash.inflation.v1beta3.GenesisState
 */
export type GenesisStateJson = {
  /**
   * Params holds parameters of the genesis of inflation.
   *
   * @generated from field: akash.inflation.v1beta3.Params params = 1;
   */
  params?: ParamsJson;
};

/**
 * Describes the message akash.inflation.v1beta3.GenesisState.
 * Use `create(GenesisStateSchema)` to create a new message.
 */
export const GenesisStateSchema: GenMessage<GenesisState, GenesisStateJson> = /*@__PURE__*/
  messageDesc(file_akash_inflation_v1beta3_genesis, 0);

