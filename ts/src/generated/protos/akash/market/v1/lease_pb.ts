// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/market/v1/lease.proto (package akash.market.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb.ts";
import type { DecCoin, DecCoinJson } from "../../../cosmos/base/v1beta1/coin_pb.ts";
import { file_cosmos_base_v1beta1_coin } from "../../../cosmos/base/v1beta1/coin_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/market/v1/lease.proto.
 */
export const file_akash_market_v1_lease: GenFile = /*@__PURE__*/
  fileDesc("Chtha2FzaC9tYXJrZXQvdjEvbGVhc2UucHJvdG8SD2FrYXNoLm1hcmtldC52MSKtAgoHTGVhc2VJRBJACgVvd25lchgBIAEoCUIx6t4fBW93bmVy8t4fDHlhbWw6Im93bmVyItK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxItCgRkc2VxGAIgASgEQh/i3h8ERFNlcereHwRkc2Vx8t4fC3lhbWw6ImRzZXEiEi0KBGdzZXEYAyABKA1CH+LeHwRHU2Vx6t4fBGdzZXHy3h8LeWFtbDoiZ3NlcSISLQoEb3NlcRgEIAEoDUIf4t4fBE9TZXHq3h8Eb3NlcfLeHwt5YW1sOiJvc2VxIhJJCghwcm92aWRlchgFIAEoCUI36t4fCHByb3ZpZGVy8t4fD3lhbWw6InByb3ZpZGVyItK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZzoImKAfAOigHwAi+wMKBUxlYXNlEkMKAmlkGAEgASgLMhguYWthc2gubWFya2V0LnYxLkxlYXNlSURCHcjeHwDi3h8CSUTq3h8CaWTy3h8JeWFtbDoiaWQiEkYKBXN0YXRlGAIgASgOMhwuYWthc2gubWFya2V0LnYxLkxlYXNlLlN0YXRlQhnq3h8Fc3RhdGXy3h8MeWFtbDoic3RhdGUiEkoKBXByaWNlGAMgASgLMhwuY29zbW9zLmJhc2UudjFiZXRhMS5EZWNDb2luQh3I3h8A6t4fBXByaWNl8t4fDHlhbWw6InByaWNlIhI3CgpjcmVhdGVkX2F0GAQgASgDQiPq3h8KY3JlYXRlZF9hdPLeHxF5YW1sOiJjcmVhdGVkX2F0IhI0CgljbG9zZWRfb24YBSABKANCIereHwljbG9zZWRfb27y3h8QeWFtbDoiY2xvc2VkX29uIiKfAQoFU3RhdGUSIgoHaW52YWxpZBAAGhWKnSARTGVhc2VTdGF0ZUludmFsaWQSGwoGYWN0aXZlEAEaD4qdIAtMZWFzZUFjdGl2ZRIyChJpbnN1ZmZpY2llbnRfZnVuZHMQAhoaip0gFkxlYXNlSW5zdWZmaWNpZW50RnVuZHMSGwoGY2xvc2VkEAMaD4qdIAtMZWFzZUNsb3NlZBoEiKMeADoImKAfAOigHwBCH1odcGtnLmFrdC5kZXYvZ28vbm9kZS9tYXJrZXQvdjFiBnByb3RvMw", [file_gogoproto_gogo, file_cosmos_proto_cosmos, file_cosmos_base_v1beta1_coin]);

/**
 * LeaseID stores bid details of lease.
 *
 * @generated from message akash.market.v1.LeaseID
 */
export type LeaseID = Message<"akash.market.v1.LeaseID"> & {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
   * It is used to differentiate deployments created by the same owner.
   *
   * @generated from field: uint64 dseq = 2;
   */
  dseq: bigint;

  /**
   * Gseq (group sequence number) is a unique numeric identifier for the group.
   * It is used to differentiate groups created by the same owner in a deployment.
   *
   * @generated from field: uint32 gseq = 3;
   */
  gseq: number;

  /**
   * Oseq (order sequence) distinguishes multiple orders associated with a single deployment.
   * Oseq is incremented when a lease associated with an existing deployment is closed, and a new order is generated.
   *
   * @generated from field: uint32 oseq = 4;
   */
  oseq: number;

  /**
   * Provider is the account bech32 address of the provider making the bid.
   * It is a string representing a valid account bech32 address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string provider = 5;
   */
  provider: string;
};

/**
 * LeaseID stores bid details of lease.
 *
 * @generated from message akash.market.v1.LeaseID
 */
export type LeaseIDJson = {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 1;
   */
  owner?: string;

  /**
   * Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
   * It is used to differentiate deployments created by the same owner.
   *
   * @generated from field: uint64 dseq = 2;
   */
  dseq?: string;

  /**
   * Gseq (group sequence number) is a unique numeric identifier for the group.
   * It is used to differentiate groups created by the same owner in a deployment.
   *
   * @generated from field: uint32 gseq = 3;
   */
  gseq?: number;

  /**
   * Oseq (order sequence) distinguishes multiple orders associated with a single deployment.
   * Oseq is incremented when a lease associated with an existing deployment is closed, and a new order is generated.
   *
   * @generated from field: uint32 oseq = 4;
   */
  oseq?: number;

  /**
   * Provider is the account bech32 address of the provider making the bid.
   * It is a string representing a valid account bech32 address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string provider = 5;
   */
  provider?: string;
};

/**
 * Describes the message akash.market.v1.LeaseID.
 * Use `create(LeaseIDSchema)` to create a new message.
 */
export const LeaseIDSchema: GenMessage<LeaseID, LeaseIDJson> = /*@__PURE__*/
  messageDesc(file_akash_market_v1_lease, 0);

/**
 * Lease stores LeaseID, state of lease and price.
 * The Lease defines the terms under which the provider allocates resources to fulfill
 * the tenant's deployment requirements.
 * Leases are paid from the tenant to the provider through a deposit and withdraw mechanism and are priced in blocks.
 *
 * @generated from message akash.market.v1.Lease
 */
export type Lease = Message<"akash.market.v1.Lease"> & {
  /**
   * Id is the unique identifier of the Lease.
   *
   * @generated from field: akash.market.v1.LeaseID id = 1;
   */
  id?: LeaseID;

  /**
   * State represents the state of the Lease.
   *
   * @generated from field: akash.market.v1.Lease.State state = 2;
   */
  state: Lease_State;

  /**
   * Price holds the settled price for the Lease.
   *
   * @generated from field: cosmos.base.v1beta1.DecCoin price = 3;
   */
  price?: DecCoin;

  /**
   * CreatedAt is the block height at which the Lease was created.
   *
   * @generated from field: int64 created_at = 4;
   */
  createdAt: bigint;

  /**
   * ClosedOn is the block height at which the Lease was closed.
   *
   * @generated from field: int64 closed_on = 5;
   */
  closedOn: bigint;
};

/**
 * Lease stores LeaseID, state of lease and price.
 * The Lease defines the terms under which the provider allocates resources to fulfill
 * the tenant's deployment requirements.
 * Leases are paid from the tenant to the provider through a deposit and withdraw mechanism and are priced in blocks.
 *
 * @generated from message akash.market.v1.Lease
 */
export type LeaseJson = {
  /**
   * Id is the unique identifier of the Lease.
   *
   * @generated from field: akash.market.v1.LeaseID id = 1;
   */
  id?: LeaseIDJson;

  /**
   * State represents the state of the Lease.
   *
   * @generated from field: akash.market.v1.Lease.State state = 2;
   */
  state?: Lease_StateJson;

  /**
   * Price holds the settled price for the Lease.
   *
   * @generated from field: cosmos.base.v1beta1.DecCoin price = 3;
   */
  price?: DecCoinJson;

  /**
   * CreatedAt is the block height at which the Lease was created.
   *
   * @generated from field: int64 created_at = 4;
   */
  createdAt?: string;

  /**
   * ClosedOn is the block height at which the Lease was closed.
   *
   * @generated from field: int64 closed_on = 5;
   */
  closedOn?: string;
};

/**
 * Describes the message akash.market.v1.Lease.
 * Use `create(LeaseSchema)` to create a new message.
 */
export const LeaseSchema: GenMessage<Lease, LeaseJson> = /*@__PURE__*/
  messageDesc(file_akash_market_v1_lease, 1);

/**
 * State is an enum which refers to state of lease.
 *
 * @generated from enum akash.market.v1.Lease.State
 */
export enum Lease_State {
  /**
   * Prefix should start with 0 in enum. So declaring dummy state.
   *
   * @generated from enum value: invalid = 0;
   */
  invalid = 0,

  /**
   * LeaseActive denotes state for lease active.
   *
   * @generated from enum value: active = 1;
   */
  active = 1,

  /**
   * LeaseInsufficientFunds denotes state for lease insufficient_funds.
   *
   * @generated from enum value: insufficient_funds = 2;
   */
  insufficient_funds = 2,

  /**
   * LeaseClosed denotes state for lease closed.
   *
   * @generated from enum value: closed = 3;
   */
  closed = 3,
}

/**
 * State is an enum which refers to state of lease.
 *
 * @generated from enum akash.market.v1.Lease.State
 */
export type Lease_StateJson = "invalid" | "active" | "insufficient_funds" | "closed";

/**
 * Describes the enum akash.market.v1.Lease.State.
 */
export const Lease_StateSchema: GenEnum<Lease_State, Lease_StateJson> = /*@__PURE__*/
  enumDesc(file_akash_market_v1_lease, 1, 0);

