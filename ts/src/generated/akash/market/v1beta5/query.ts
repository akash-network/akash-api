/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
    PageRequest,
    PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "../../escrow/v1/account";
import { FractionalPayment } from "../../escrow/v1/fractional_payment";
import { BidID } from "../v1/bid";
import { LeaseFilters } from "../v1/filters";
import { Lease, LeaseID } from "../v1/lease";
import { OrderID } from "../v1/order";
import { Bid } from "./bid";
import { BidFilters, OrderFilters } from "./filters";
import { Order } from "./order";
import { Params } from "./params";

export const protobufPackage = "akash.market.v1beta5";

/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
    filters: OrderFilters | undefined;
    pagination: PageRequest | undefined;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination: PageResponse | undefined;
}

/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
    id: OrderID | undefined;
}

/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
    order: Order | undefined;
}

/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
    filters: BidFilters | undefined;
    pagination: PageRequest | undefined;
}

/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
    bids: QueryBidResponse[];
    pagination: PageResponse | undefined;
}

/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
    id: BidID | undefined;
}

/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
    bid: Bid | undefined;
    escrowAccount: Account | undefined;
}

/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
    filters: LeaseFilters | undefined;
    pagination: PageRequest | undefined;
}

/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
    leases: QueryLeaseResponse[];
    pagination: PageResponse | undefined;
}

/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
    id: LeaseID | undefined;
}

/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
    lease: Lease | undefined;
    escrowPayment: FractionalPayment | undefined;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}

function createBaseQueryOrdersRequest(): QueryOrdersRequest {
    return { filters: undefined, pagination: undefined };
}

export const QueryOrdersRequest = {
    encode(
        message: QueryOrdersRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.filters !== undefined) {
            OrderFilters.encode(
                message.filters,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(
                message.pagination,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryOrdersRequest {
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

                    message.filters = OrderFilters.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(
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

    fromJSON(object: any): QueryOrdersRequest {
        return {
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

    create<I extends Exact<DeepPartial<QueryOrdersRequest>, I>>(
        base?: I,
    ): QueryOrdersRequest {
        return QueryOrdersRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryOrdersRequest>, I>>(
        object: I,
    ): QueryOrdersRequest {
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

function createBaseQueryOrdersResponse(): QueryOrdersResponse {
    return { orders: [], pagination: undefined };
}

export const QueryOrdersResponse = {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryOrdersResponse {
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

                    message.pagination = PageResponse.decode(
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

    fromJSON(object: any): QueryOrdersResponse {
        return {
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

    create<I extends Exact<DeepPartial<QueryOrdersResponse>, I>>(
        base?: I,
    ): QueryOrdersResponse {
        return QueryOrdersResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryOrdersResponse>, I>>(
        object: I,
    ): QueryOrdersResponse {
        const message = createBaseQueryOrdersResponse();
        message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryOrderRequest(): QueryOrderRequest {
    return { id: undefined };
}

export const QueryOrderRequest = {
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

    create<I extends Exact<DeepPartial<QueryOrderRequest>, I>>(
        base?: I,
    ): QueryOrderRequest {
        return QueryOrderRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryOrderRequest>, I>>(
        object: I,
    ): QueryOrderRequest {
        const message = createBaseQueryOrderRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? OrderID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseQueryOrderResponse(): QueryOrderResponse {
    return { order: undefined };
}

export const QueryOrderResponse = {
    encode(
        message: QueryOrderResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryOrderResponse {
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
            order: isSet(object.order)
                ? Order.fromJSON(object.order)
                : undefined,
        };
    },

    toJSON(message: QueryOrderResponse): unknown {
        const obj: any = {};
        if (message.order !== undefined) {
            obj.order = Order.toJSON(message.order);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryOrderResponse>, I>>(
        base?: I,
    ): QueryOrderResponse {
        return QueryOrderResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryOrderResponse>, I>>(
        object: I,
    ): QueryOrderResponse {
        const message = createBaseQueryOrderResponse();
        message.order =
            object.order !== undefined && object.order !== null
                ? Order.fromPartial(object.order)
                : undefined;
        return message;
    },
};

function createBaseQueryBidsRequest(): QueryBidsRequest {
    return { filters: undefined, pagination: undefined };
}

export const QueryBidsRequest = {
    encode(
        message: QueryBidsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.filters !== undefined) {
            BidFilters.encode(
                message.filters,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(
                message.pagination,
                writer.uint32(18).fork(),
            ).ldelim();
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

                    message.filters = BidFilters.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(
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

    fromJSON(object: any): QueryBidsRequest {
        return {
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

    create<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(
        base?: I,
    ): QueryBidsRequest {
        return QueryBidsRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(
        object: I,
    ): QueryBidsRequest {
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

function createBaseQueryBidsResponse(): QueryBidsResponse {
    return { bids: [], pagination: undefined };
}

export const QueryBidsResponse = {
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

                    message.bids.push(
                        QueryBidResponse.decode(reader, reader.uint32()),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageResponse.decode(
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

    fromJSON(object: any): QueryBidsResponse {
        return {
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

    create<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(
        base?: I,
    ): QueryBidsResponse {
        return QueryBidsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(
        object: I,
    ): QueryBidsResponse {
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

function createBaseQueryBidRequest(): QueryBidRequest {
    return { id: undefined };
}

export const QueryBidRequest = {
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
        return { id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined };
    },

    toJSON(message: QueryBidRequest): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = BidID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryBidRequest>, I>>(
        base?: I,
    ): QueryBidRequest {
        return QueryBidRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryBidRequest>, I>>(
        object: I,
    ): QueryBidRequest {
        const message = createBaseQueryBidRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? BidID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseQueryBidResponse(): QueryBidResponse {
    return { bid: undefined, escrowAccount: undefined };
}

export const QueryBidResponse = {
    encode(
        message: QueryBidResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bid !== undefined) {
            Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            Account.encode(
                message.escrowAccount,
                writer.uint32(18).fork(),
            ).ldelim();
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

                    message.escrowAccount = Account.decode(
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

    fromJSON(object: any): QueryBidResponse {
        return {
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

    create<I extends Exact<DeepPartial<QueryBidResponse>, I>>(
        base?: I,
    ): QueryBidResponse {
        return QueryBidResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(
        object: I,
    ): QueryBidResponse {
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

function createBaseQueryLeasesRequest(): QueryLeasesRequest {
    return { filters: undefined, pagination: undefined };
}

export const QueryLeasesRequest = {
    encode(
        message: QueryLeasesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.filters !== undefined) {
            LeaseFilters.encode(
                message.filters,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(
                message.pagination,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryLeasesRequest {
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

                    message.filters = LeaseFilters.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(
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

    fromJSON(object: any): QueryLeasesRequest {
        return {
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

    create<I extends Exact<DeepPartial<QueryLeasesRequest>, I>>(
        base?: I,
    ): QueryLeasesRequest {
        return QueryLeasesRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryLeasesRequest>, I>>(
        object: I,
    ): QueryLeasesRequest {
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

function createBaseQueryLeasesResponse(): QueryLeasesResponse {
    return { leases: [], pagination: undefined };
}

export const QueryLeasesResponse = {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryLeasesResponse {
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

                    message.pagination = PageResponse.decode(
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

    fromJSON(object: any): QueryLeasesResponse {
        return {
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
            obj.leases = message.leases.map((e) =>
                QueryLeaseResponse.toJSON(e),
            );
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryLeasesResponse>, I>>(
        base?: I,
    ): QueryLeasesResponse {
        return QueryLeasesResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryLeasesResponse>, I>>(
        object: I,
    ): QueryLeasesResponse {
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

function createBaseQueryLeaseRequest(): QueryLeaseRequest {
    return { id: undefined };
}

export const QueryLeaseRequest = {
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

    create<I extends Exact<DeepPartial<QueryLeaseRequest>, I>>(
        base?: I,
    ): QueryLeaseRequest {
        return QueryLeaseRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryLeaseRequest>, I>>(
        object: I,
    ): QueryLeaseRequest {
        const message = createBaseQueryLeaseRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? LeaseID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseQueryLeaseResponse(): QueryLeaseResponse {
    return { lease: undefined, escrowPayment: undefined };
}

export const QueryLeaseResponse = {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryLeaseResponse {
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
            lease: isSet(object.lease)
                ? Lease.fromJSON(object.lease)
                : undefined,
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

    create<I extends Exact<DeepPartial<QueryLeaseResponse>, I>>(
        base?: I,
    ): QueryLeaseResponse {
        return QueryLeaseResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryLeaseResponse>, I>>(
        object: I,
    ): QueryLeaseResponse {
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

function createBaseQueryParamsRequest(): QueryParamsRequest {
    return {};
}

export const QueryParamsRequest = {
    encode(
        _: QueryParamsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryParamsRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): QueryParamsRequest {
        return {};
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
        base?: I,
    ): QueryParamsRequest {
        return QueryParamsRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
        _: I,
    ): QueryParamsRequest {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
    return { params: undefined };
}

export const QueryParamsResponse = {
    encode(
        message: QueryParamsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryParamsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.params = Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryParamsResponse {
        return {
            params: isSet(object.params)
                ? Params.fromJSON(object.params)
                : undefined,
        };
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
        base?: I,
    ): QueryParamsResponse {
        return QueryParamsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
        object: I,
    ): QueryParamsResponse {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};

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
    /** Params returns the total set of minting parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceName = "akash.market.v1beta5.Query";
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
        this.Params = this.Params.bind(this);
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

    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) =>
            QueryParamsResponse.decode(_m0.Reader.create(data)),
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

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
          [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
      };

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
