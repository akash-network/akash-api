// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file akash/market/v1beta5/order.proto (package akash.market.v1beta5, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import type { GroupSpec, GroupSpecJson } from "../../deployment/v1beta4/groupspec_pb.ts";
import { file_akash_deployment_v1beta4_groupspec } from "../../deployment/v1beta4/groupspec_pb.ts";
import type { OrderID, OrderIDJson } from "../v1/order_pb.ts";
import { file_akash_market_v1_order } from "../v1/order_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file akash/market/v1beta5/order.proto.
 */
export const file_akash_market_v1beta5_order: GenFile = /*@__PURE__*/
  fileDesc("CiBha2FzaC9tYXJrZXQvdjFiZXRhNS9vcmRlci5wcm90bxIUYWthc2gubWFya2V0LnYxYmV0YTUijgMKBU9yZGVyEkMKAmlkGAEgASgLMhguYWthc2gubWFya2V0LnYxLk9yZGVySURCHcjeHwDi3h8CSUTq3h8CaWTy3h8JeWFtbDoiaWQiEksKBXN0YXRlGAIgASgOMiEuYWthc2gubWFya2V0LnYxYmV0YTUuT3JkZXIuU3RhdGVCGereHwVzdGF0ZfLeHwx5YW1sOiJzdGF0ZSISTgoEc3BlYxgDIAEoCzIjLmFrYXNoLmRlcGxveW1lbnQudjFiZXRhNC5Hcm91cFNwZWNCG8jeHwDq3h8Ec3BlY/LeHwt5YW1sOiJzcGVjIhISCgpjcmVhdGVkX2F0GAQgASgDIoQBCgVTdGF0ZRIiCgdpbnZhbGlkEAAaFYqdIBFPcmRlclN0YXRlSW52YWxpZBIXCgRvcGVuEAEaDYqdIAlPcmRlck9wZW4SGwoGYWN0aXZlEAIaD4qdIAtPcmRlckFjdGl2ZRIbCgZjbG9zZWQQAxoPip0gC09yZGVyQ2xvc2VkGgSIox4AOgiYoB8A6KAfAEIkWiJwa2cuYWt0LmRldi9nby9ub2RlL21hcmtldC92MWJldGE1YgZwcm90bzM", [file_gogoproto_gogo, file_akash_deployment_v1beta4_groupspec, file_akash_market_v1_order]);

/**
 * Order stores orderID, state of order and other details.
 *
 * @generated from message akash.market.v1beta5.Order
 */
export type Order = Message<"akash.market.v1beta5.Order"> & {
  /**
   * Id is the unique identifier of the order.
   *
   * @generated from field: akash.market.v1.OrderID id = 1;
   */
  id?: OrderID;

  /**
   * @generated from field: akash.market.v1beta5.Order.State state = 2;
   */
  state: Order_State;

  /**
   * @generated from field: akash.deployment.v1beta4.GroupSpec spec = 3;
   */
  spec?: GroupSpec;

  /**
   * @generated from field: int64 created_at = 4;
   */
  createdAt: bigint;
};

/**
 * Order stores orderID, state of order and other details.
 *
 * @generated from message akash.market.v1beta5.Order
 */
export type OrderJson = {
  /**
   * Id is the unique identifier of the order.
   *
   * @generated from field: akash.market.v1.OrderID id = 1;
   */
  id?: OrderIDJson;

  /**
   * @generated from field: akash.market.v1beta5.Order.State state = 2;
   */
  state?: Order_StateJson;

  /**
   * @generated from field: akash.deployment.v1beta4.GroupSpec spec = 3;
   */
  spec?: GroupSpecJson;

  /**
   * @generated from field: int64 created_at = 4;
   */
  createdAt?: string;
};

/**
 * Describes the message akash.market.v1beta5.Order.
 * Use `create(OrderSchema)` to create a new message.
 */
export const OrderSchema: GenMessage<Order, OrderJson> = /*@__PURE__*/
  messageDesc(file_akash_market_v1beta5_order, 0);

/**
 * State is an enum which refers to state of order.
 *
 * @generated from enum akash.market.v1beta5.Order.State
 */
export enum Order_State {
  /**
   * Prefix should start with 0 in enum. So declaring dummy state.
   *
   * @generated from enum value: invalid = 0;
   */
  invalid = 0,

  /**
   * OrderOpen denotes state for order open.
   *
   * @generated from enum value: open = 1;
   */
  open = 1,

  /**
   * OrderMatched denotes state for order matched.
   *
   * @generated from enum value: active = 2;
   */
  active = 2,

  /**
   * OrderClosed denotes state for order lost.
   *
   * @generated from enum value: closed = 3;
   */
  closed = 3,
}

/**
 * State is an enum which refers to state of order.
 *
 * @generated from enum akash.market.v1beta5.Order.State
 */
export type Order_StateJson = "invalid" | "open" | "active" | "closed";

/**
 * Describes the enum akash.market.v1beta5.Order.State.
 */
export const Order_StateSchema: GenEnum<Order_State, Order_StateJson> = /*@__PURE__*/
  enumDesc(file_akash_market_v1beta5_order, 0, 0);

