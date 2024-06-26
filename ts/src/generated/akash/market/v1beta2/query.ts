/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Account, FractionalPayment } from "../../escrow/v1beta2/types";
import { Bid, BidFilters, BidID } from "./bid";
import { Lease, LeaseFilters, LeaseID } from "./lease";
import { Order, OrderFilters, OrderID } from "./order";

/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
  $type: "akash.market.v1beta2.QueryOrdersRequest";
  filters: OrderFilters | undefined;
  pagination: PageRequest | undefined;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
  $type: "akash.market.v1beta2.QueryOrdersResponse";
  orders: Order[];
  pagination: PageResponse | undefined;
}

/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
  $type: "akash.market.v1beta2.QueryOrderRequest";
  id: OrderID | undefined;
}

/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
  $type: "akash.market.v1beta2.QueryOrderResponse";
  order: Order | undefined;
}

/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
  $type: "akash.market.v1beta2.QueryBidsRequest";
  filters: BidFilters | undefined;
  pagination: PageRequest | undefined;
}

/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
  $type: "akash.market.v1beta2.QueryBidsResponse";
  bids: QueryBidResponse[];
  pagination: PageResponse | undefined;
}

/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
  $type: "akash.market.v1beta2.QueryBidRequest";
  id: BidID | undefined;
}

/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
  $type: "akash.market.v1beta2.QueryBidResponse";
  bid: Bid | undefined;
  escrowAccount: Account | undefined;
}

/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
  $type: "akash.market.v1beta2.QueryLeasesRequest";
  filters: LeaseFilters | undefined;
  pagination: PageRequest | undefined;
}

/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
  $type: "akash.market.v1beta2.QueryLeasesResponse";
  leases: QueryLeaseResponse[];
  pagination: PageResponse | undefined;
}

/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
  $type: "akash.market.v1beta2.QueryLeaseRequest";
  id: LeaseID | undefined;
}

/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
  $type: "akash.market.v1beta2.QueryLeaseResponse";
  lease: Lease | undefined;
  escrowPayment: FractionalPayment | undefined;
}

function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    $type: "akash.market.v1beta2.QueryOrdersRequest",
    filters: undefined,
    pagination: undefined,
  };
}

export const QueryOrdersRequest = {
  $type: "akash.market.v1beta2.QueryOrdersRequest" as const,

  encode(
    message: QueryOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filters = OrderFilters.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOrdersRequest {
    return {
      $type: QueryOrdersRequest.$type,
      filters: isSet(object.filters)
        ? OrderFilters.fromJSON(object.filters)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    if (message.filters !== undefined) {
      obj.filters = OrderFilters.toJSON(message.filters);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    return QueryOrdersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.filters =
      object.filters !== undefined && object.filters !== null
        ? OrderFilters.fromPartial(object.filters)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryOrdersRequest.$type, QueryOrdersRequest);

function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    $type: "akash.market.v1beta2.QueryOrdersResponse",
    orders: [],
    pagination: undefined,
  };
}

export const QueryOrdersResponse = {
  $type: "akash.market.v1beta2.QueryOrdersResponse" as const,

  encode(
    message: QueryOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOrdersResponse {
    return {
      $type: QueryOrdersResponse.$type,
      orders: globalThis.Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    return QueryOrdersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryOrdersResponse.$type, QueryOrdersResponse);

function createBaseQueryOrderRequest(): QueryOrderRequest {
  return { $type: "akash.market.v1beta2.QueryOrderRequest", id: undefined };
}

export const QueryOrderRequest = {
  $type: "akash.market.v1beta2.QueryOrderRequest" as const,

  encode(
    message: QueryOrderRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = OrderID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOrderRequest {
    return {
      $type: QueryOrderRequest.$type,
      id: isSet(object.id) ? OrderID.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = OrderID.toJSON(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    return QueryOrderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? OrderID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryOrderRequest.$type, QueryOrderRequest);

function createBaseQueryOrderResponse(): QueryOrderResponse {
  return { $type: "akash.market.v1beta2.QueryOrderResponse", order: undefined };
}

export const QueryOrderResponse = {
  $type: "akash.market.v1beta2.QueryOrderResponse" as const,

  encode(
    message: QueryOrderResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOrderResponse {
    return {
      $type: QueryOrderResponse.$type,
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    if (message.order !== undefined) {
      obj.order = Order.toJSON(message.order);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    return QueryOrderResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryOrderResponse.$type, QueryOrderResponse);

function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    $type: "akash.market.v1beta2.QueryBidsRequest",
    filters: undefined,
    pagination: undefined,
  };
}

export const QueryBidsRequest = {
  $type: "akash.market.v1beta2.QueryBidsRequest" as const,

  encode(
    message: QueryBidsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filters = BidFilters.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBidsRequest {
    return {
      $type: QueryBidsRequest.$type,
      filters: isSet(object.filters)
        ? BidFilters.fromJSON(object.filters)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBidsRequest): unknown {
    const obj: any = {};
    if (message.filters !== undefined) {
      obj.filters = BidFilters.toJSON(message.filters);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    return QueryBidsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.filters =
      object.filters !== undefined && object.filters !== null
        ? BidFilters.fromPartial(object.filters)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBidsRequest.$type, QueryBidsRequest);

function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    $type: "akash.market.v1beta2.QueryBidsResponse",
    bids: [],
    pagination: undefined,
  };
}

export const QueryBidsResponse = {
  $type: "akash.market.v1beta2.QueryBidsResponse" as const,

  encode(
    message: QueryBidsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bids.push(QueryBidResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBidsResponse {
    return {
      $type: QueryBidsResponse.$type,
      bids: globalThis.Array.isArray(object?.bids)
        ? object.bids.map((e: any) => QueryBidResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBidsResponse): unknown {
    const obj: any = {};
    if (message.bids?.length) {
      obj.bids = message.bids.map((e) => QueryBidResponse.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    return QueryBidsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids =
      object.bids?.map((e) => QueryBidResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBidsResponse.$type, QueryBidsResponse);

function createBaseQueryBidRequest(): QueryBidRequest {
  return { $type: "akash.market.v1beta2.QueryBidRequest", id: undefined };
}

export const QueryBidRequest = {
  $type: "akash.market.v1beta2.QueryBidRequest" as const,

  encode(
    message: QueryBidRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = BidID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBidRequest {
    return {
      $type: QueryBidRequest.$type,
      id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = BidID.toJSON(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBidRequest>): QueryBidRequest {
    return QueryBidRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? BidID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBidRequest.$type, QueryBidRequest);

function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    $type: "akash.market.v1beta2.QueryBidResponse",
    bid: undefined,
    escrowAccount: undefined,
  };
}

export const QueryBidResponse = {
  $type: "akash.market.v1beta2.QueryBidResponse" as const,

  encode(
    message: QueryBidResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bid = Bid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.escrowAccount = Account.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBidResponse {
    return {
      $type: QueryBidResponse.$type,
      bid: isSet(object.bid) ? Bid.fromJSON(object.bid) : undefined,
      escrowAccount: isSet(object.escrowAccount)
        ? Account.fromJSON(object.escrowAccount)
        : undefined,
    };
  },

  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {};
    if (message.bid !== undefined) {
      obj.bid = Bid.toJSON(message.bid);
    }
    if (message.escrowAccount !== undefined) {
      obj.escrowAccount = Account.toJSON(message.escrowAccount);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBidResponse>): QueryBidResponse {
    return QueryBidResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? Bid.fromPartial(object.bid)
        : undefined;
    message.escrowAccount =
      object.escrowAccount !== undefined && object.escrowAccount !== null
        ? Account.fromPartial(object.escrowAccount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBidResponse.$type, QueryBidResponse);

function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return {
    $type: "akash.market.v1beta2.QueryLeasesRequest",
    filters: undefined,
    pagination: undefined,
  };
}

export const QueryLeasesRequest = {
  $type: "akash.market.v1beta2.QueryLeasesRequest" as const,

  encode(
    message: QueryLeasesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filters = LeaseFilters.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLeasesRequest {
    return {
      $type: QueryLeasesRequest.$type,
      filters: isSet(object.filters)
        ? LeaseFilters.fromJSON(object.filters)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLeasesRequest): unknown {
    const obj: any = {};
    if (message.filters !== undefined) {
      obj.filters = LeaseFilters.toJSON(message.filters);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    return QueryLeasesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    message.filters =
      object.filters !== undefined && object.filters !== null
        ? LeaseFilters.fromPartial(object.filters)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryLeasesRequest.$type, QueryLeasesRequest);

function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return {
    $type: "akash.market.v1beta2.QueryLeasesResponse",
    leases: [],
    pagination: undefined,
  };
}

export const QueryLeasesResponse = {
  $type: "akash.market.v1beta2.QueryLeasesResponse" as const,

  encode(
    message: QueryLeasesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leases.push(
            QueryLeaseResponse.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLeasesResponse {
    return {
      $type: QueryLeasesResponse.$type,
      leases: globalThis.Array.isArray(object?.leases)
        ? object.leases.map((e: any) => QueryLeaseResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLeasesResponse): unknown {
    const obj: any = {};
    if (message.leases?.length) {
      obj.leases = message.leases.map((e) => QueryLeaseResponse.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    return QueryLeasesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases =
      object.leases?.map((e) => QueryLeaseResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryLeasesResponse.$type, QueryLeasesResponse);

function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return { $type: "akash.market.v1beta2.QueryLeaseRequest", id: undefined };
}

export const QueryLeaseRequest = {
  $type: "akash.market.v1beta2.QueryLeaseRequest" as const,

  encode(
    message: QueryLeaseRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = LeaseID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLeaseRequest {
    return {
      $type: QueryLeaseRequest.$type,
      id: isSet(object.id) ? LeaseID.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: QueryLeaseRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = LeaseID.toJSON(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    return QueryLeaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? LeaseID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryLeaseRequest.$type, QueryLeaseRequest);

function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return {
    $type: "akash.market.v1beta2.QueryLeaseResponse",
    lease: undefined,
    escrowPayment: undefined,
  };
}

export const QueryLeaseResponse = {
  $type: "akash.market.v1beta2.QueryLeaseResponse" as const,

  encode(
    message: QueryLeaseResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowPayment !== undefined) {
      FractionalPayment.encode(
        message.escrowPayment,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lease = Lease.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.escrowPayment = FractionalPayment.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLeaseResponse {
    return {
      $type: QueryLeaseResponse.$type,
      lease: isSet(object.lease) ? Lease.fromJSON(object.lease) : undefined,
      escrowPayment: isSet(object.escrowPayment)
        ? FractionalPayment.fromJSON(object.escrowPayment)
        : undefined,
    };
  },

  toJSON(message: QueryLeaseResponse): unknown {
    const obj: any = {};
    if (message.lease !== undefined) {
      obj.lease = Lease.toJSON(message.lease);
    }
    if (message.escrowPayment !== undefined) {
      obj.escrowPayment = FractionalPayment.toJSON(message.escrowPayment);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    return QueryLeaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    message.lease =
      object.lease !== undefined && object.lease !== null
        ? Lease.fromPartial(object.lease)
        : undefined;
    message.escrowPayment =
      object.escrowPayment !== undefined && object.escrowPayment !== null
        ? FractionalPayment.fromPartial(object.escrowPayment)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryLeaseResponse.$type, QueryLeaseResponse);

/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order queries order details */
  Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** Bids queries bids with filters */
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  /** Bid queries bid details */
  Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
  /** Leases queries leases with filters */
  Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
  /** Lease queries lease details */
  Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}

export const QueryServiceName = "akash.market.v1beta2.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Orders = this.Orders.bind(this);
    this.Order = this.Order.bind(this);
    this.Bids = this.Bids.bind(this);
    this.Bid = this.Bid.bind(this);
    this.Leases = this.Leases.bind(this);
    this.Lease = this.Lease.bind(this);
  }
  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Orders", data);
    return promise.then((data) =>
      QueryOrdersResponse.decode(_m0.Reader.create(data)),
    );
  }

  Order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Order", data);
    return promise.then((data) =>
      QueryOrderResponse.decode(_m0.Reader.create(data)),
    );
  }

  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bids", data);
    return promise.then((data) =>
      QueryBidsResponse.decode(_m0.Reader.create(data)),
    );
  }

  Bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bid", data);
    return promise.then((data) =>
      QueryBidResponse.decode(_m0.Reader.create(data)),
    );
  }

  Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Leases", data);
    return promise.then((data) =>
      QueryLeasesResponse.decode(_m0.Reader.create(data)),
    );
  }

  Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Lease", data);
    return promise.then((data) =>
      QueryLeaseResponse.decode(_m0.Reader.create(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
