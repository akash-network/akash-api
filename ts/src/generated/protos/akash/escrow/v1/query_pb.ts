// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/escrow/v1/query.proto (package akash.escrow.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import { file_google_api_annotations } from "../../../google/api/annotations_pb.ts";
import type { PageRequest, PageRequestJson, PageResponse, PageResponseJson } from "../../../cosmos/base/query/v1beta1/pagination_pb.ts";
import { file_cosmos_base_query_v1beta1_pagination } from "../../../cosmos/base/query/v1beta1/pagination_pb.ts";
import type { Account, AccountJson } from "./account_pb.ts";
import { file_akash_escrow_v1_account } from "./account_pb.ts";
import type { FractionalPayment, FractionalPaymentJson } from "./fractional_payment_pb.ts";
import { file_akash_escrow_v1_fractional_payment } from "./fractional_payment_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/escrow/v1/query.proto.
 */
export const file_akash_escrow_v1_query: GenFile = /*@__PURE__*/
  fileDesc("Chtha2FzaC9lc2Nyb3cvdjEvcXVlcnkucHJvdG8SD2FrYXNoLmVzY3Jvdy52MSKMAQoUUXVlcnlBY2NvdW50c1JlcXVlc3QSDQoFc2NvcGUYASABKAkSCwoDeGlkGAIgASgJEg0KBW93bmVyGAMgASgJEg0KBXN0YXRlGAQgASgJEjoKCnBhZ2luYXRpb24YBSABKAsyJi5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXF1ZXN0IpIBChVRdWVyeUFjY291bnRzUmVzcG9uc2USPAoIYWNjb3VudHMYASADKAsyGC5ha2FzaC5lc2Nyb3cudjEuQWNjb3VudEIQyN4fAKrfHwhBY2NvdW50cxI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UimAEKFFF1ZXJ5UGF5bWVudHNSZXF1ZXN0Eg0KBXNjb3BlGAEgASgJEgsKA3hpZBgCIAEoCRIKCgJpZBgDIAEoCRINCgVvd25lchgEIAEoCRINCgVzdGF0ZRgFIAEoCRI6CgpwYWdpbmF0aW9uGAYgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdCKmAQoVUXVlcnlQYXltZW50c1Jlc3BvbnNlElAKCHBheW1lbnRzGAEgAygLMiIuYWthc2guZXNjcm93LnYxLkZyYWN0aW9uYWxQYXltZW50QhrI3h8Aqt8fEkZyYWN0aW9uYWxQYXltZW50cxI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UymwIKBVF1ZXJ5EocBCghBY2NvdW50cxIlLmFrYXNoLmVzY3Jvdy52MS5RdWVyeUFjY291bnRzUmVxdWVzdBomLmFrYXNoLmVzY3Jvdy52MS5RdWVyeUFjY291bnRzUmVzcG9uc2UiLILT5JMCJhIkL2FrYXNoL2VzY3Jvdy92MS90eXBlcy9hY2NvdW50cy9saXN0EocBCghQYXltZW50cxIlLmFrYXNoLmVzY3Jvdy52MS5RdWVyeVBheW1lbnRzUmVxdWVzdBomLmFrYXNoLmVzY3Jvdy52MS5RdWVyeVBheW1lbnRzUmVzcG9uc2UiLILT5JMCJhIkL2FrYXNoL2VzY3Jvdy92MS90eXBlcy9wYXltZW50cy9saXN0Qh9aHXBrZy5ha3QuZGV2L2dvL25vZGUvZXNjcm93L3YxYgZwcm90bzM", [file_gogoproto_gogo, file_google_api_annotations, file_cosmos_base_query_v1beta1_pagination, file_akash_escrow_v1_account, file_akash_escrow_v1_fractional_payment]);

/**
 * QueryAccountRequest is request type for the Query/Account RPC method.
 *
 * @generated from message akash.escrow.v1.QueryAccountsRequest
 */
export type QueryAccountsRequest = Message<"akash.escrow.v1.QueryAccountsRequest"> & {
  /**
   * Scope holds the scope of the account.
   *
   * @generated from field: string scope = 1;
   */
  scope: string;

  /**
   * Xid TODO: What is this?
   *
   * @generated from field: string xid = 2;
   */
  xid: string;

  /**
   * Owner is the bech32 address of the account.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 3;
   */
  owner: string;

  /**
   * State represents the current state of an Account.
   *
   * @generated from field: string state = 4;
   */
  state: string;

  /**
   * Pagination is used to paginate request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 5;
   */
  pagination?: PageRequest;
};

/**
 * QueryAccountRequest is request type for the Query/Account RPC method.
 *
 * @generated from message akash.escrow.v1.QueryAccountsRequest
 */
export type QueryAccountsRequestJson = {
  /**
   * Scope holds the scope of the account.
   *
   * @generated from field: string scope = 1;
   */
  scope?: string;

  /**
   * Xid TODO: What is this?
   *
   * @generated from field: string xid = 2;
   */
  xid?: string;

  /**
   * Owner is the bech32 address of the account.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 3;
   */
  owner?: string;

  /**
   * State represents the current state of an Account.
   *
   * @generated from field: string state = 4;
   */
  state?: string;

  /**
   * Pagination is used to paginate request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 5;
   */
  pagination?: PageRequestJson;
};

/**
 * Describes the message akash.escrow.v1.QueryAccountsRequest.
 * Use `create(QueryAccountsRequestSchema)` to create a new message.
 */
export const QueryAccountsRequestSchema: GenMessage<QueryAccountsRequest, QueryAccountsRequestJson> = /*@__PURE__*/
  messageDesc(file_akash_escrow_v1_query, 0);

/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 *
 * @generated from message akash.escrow.v1.QueryAccountsResponse
 */
export type QueryAccountsResponse = Message<"akash.escrow.v1.QueryAccountsResponse"> & {
  /**
   * Accounts is a list of Account.
   *
   * @generated from field: repeated akash.escrow.v1.Account accounts = 1;
   */
  accounts: Account[];

  /**
   * Pagination contains the information about response pagination.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 *
 * @generated from message akash.escrow.v1.QueryAccountsResponse
 */
export type QueryAccountsResponseJson = {
  /**
   * Accounts is a list of Account.
   *
   * @generated from field: repeated akash.escrow.v1.Account accounts = 1;
   */
  accounts?: AccountJson[];

  /**
   * Pagination contains the information about response pagination.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponseJson;
};

/**
 * Describes the message akash.escrow.v1.QueryAccountsResponse.
 * Use `create(QueryAccountsResponseSchema)` to create a new message.
 */
export const QueryAccountsResponseSchema: GenMessage<QueryAccountsResponse, QueryAccountsResponseJson> = /*@__PURE__*/
  messageDesc(file_akash_escrow_v1_query, 1);

/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 *
 * @generated from message akash.escrow.v1.QueryPaymentsRequest
 */
export type QueryPaymentsRequest = Message<"akash.escrow.v1.QueryPaymentsRequest"> & {
  /**
   * Scope holds the scope of the payment.
   *
   * @generated from field: string scope = 1;
   */
  scope: string;

  /**
   * Xid TODO: What is this?
   *
   * @generated from field: string xid = 2;
   */
  xid: string;

  /**
   * Id is the unique identifier of the payment.
   *
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * Owner is the bech32 address of the account.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 4;
   */
  owner: string;

  /**
   * State represents the current state of an Account.
   *
   * @generated from field: string state = 5;
   */
  state: string;

  /**
   * Pagination is used to paginate request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 6;
   */
  pagination?: PageRequest;
};

/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 *
 * @generated from message akash.escrow.v1.QueryPaymentsRequest
 */
export type QueryPaymentsRequestJson = {
  /**
   * Scope holds the scope of the payment.
   *
   * @generated from field: string scope = 1;
   */
  scope?: string;

  /**
   * Xid TODO: What is this?
   *
   * @generated from field: string xid = 2;
   */
  xid?: string;

  /**
   * Id is the unique identifier of the payment.
   *
   * @generated from field: string id = 3;
   */
  id?: string;

  /**
   * Owner is the bech32 address of the account.
   * It is a string representing a valid account address.
   *
   * Example:
   *   "akash1..."
   *
   * @generated from field: string owner = 4;
   */
  owner?: string;

  /**
   * State represents the current state of an Account.
   *
   * @generated from field: string state = 5;
   */
  state?: string;

  /**
   * Pagination is used to paginate request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 6;
   */
  pagination?: PageRequestJson;
};

/**
 * Describes the message akash.escrow.v1.QueryPaymentsRequest.
 * Use `create(QueryPaymentsRequestSchema)` to create a new message.
 */
export const QueryPaymentsRequestSchema: GenMessage<QueryPaymentsRequest, QueryPaymentsRequestJson> = /*@__PURE__*/
  messageDesc(file_akash_escrow_v1_query, 2);

/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 *
 * @generated from message akash.escrow.v1.QueryPaymentsResponse
 */
export type QueryPaymentsResponse = Message<"akash.escrow.v1.QueryPaymentsResponse"> & {
  /**
   * Payments is a list of fractional payments.
   *
   * @generated from field: repeated akash.escrow.v1.FractionalPayment payments = 1;
   */
  payments: FractionalPayment[];

  /**
   * Pagination contains the information about response pagination.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 *
 * @generated from message akash.escrow.v1.QueryPaymentsResponse
 */
export type QueryPaymentsResponseJson = {
  /**
   * Payments is a list of fractional payments.
   *
   * @generated from field: repeated akash.escrow.v1.FractionalPayment payments = 1;
   */
  payments?: FractionalPaymentJson[];

  /**
   * Pagination contains the information about response pagination.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponseJson;
};

/**
 * Describes the message akash.escrow.v1.QueryPaymentsResponse.
 * Use `create(QueryPaymentsResponseSchema)` to create a new message.
 */
export const QueryPaymentsResponseSchema: GenMessage<QueryPaymentsResponse, QueryPaymentsResponseJson> = /*@__PURE__*/
  messageDesc(file_akash_escrow_v1_query, 3);

/**
 * Query defines the gRPC querier service for the escrow package.
 *
 * @generated from service akash.escrow.v1.Query
 */
export const Query: GenService<{
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts.
   *
   * @generated from rpc akash.escrow.v1.Query.Accounts
   */
  accounts: {
    methodKind: "unary";
    input: typeof QueryAccountsRequestSchema;
    output: typeof QueryAccountsResponseSchema;
  },
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments.
   *
   * @generated from rpc akash.escrow.v1.Query.Payments
   */
  payments: {
    methodKind: "unary";
    input: typeof QueryPaymentsRequestSchema;
    output: typeof QueryPaymentsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_akash_escrow_v1_query, 0);

