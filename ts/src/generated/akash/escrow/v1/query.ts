/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
    PageRequest,
    PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "./account";
import { FractionalPayment } from "./fractional_payment";

export const protobufPackage = "akash.escrow.v1";

/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination: PageRequest | undefined;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
    accounts: Account[];
    pagination: PageResponse | undefined;
}

/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
    scope: string;
    xid: string;
    id: string;
    owner: string;
    state: string;
    pagination: PageRequest | undefined;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
    payments: FractionalPayment[];
    pagination: PageResponse | undefined;
}

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
    return { scope: "", xid: "", owner: "", state: "", pagination: undefined };
}

export const QueryAccountsRequest = {
    encode(
        message: QueryAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(34).string(message.state);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(
                message.pagination,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryAccountsRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.scope = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.xid = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.state = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
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

    fromJSON(object: any): QueryAccountsRequest {
        return {
            scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
            xid: isSet(object.xid) ? globalThis.String(object.xid) : "",
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            state: isSet(object.state) ? globalThis.String(object.state) : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryAccountsRequest): unknown {
        const obj: any = {};
        if (message.scope !== "") {
            obj.scope = message.scope;
        }
        if (message.xid !== "") {
            obj.xid = message.xid;
        }
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(
        base?: I,
    ): QueryAccountsRequest {
        return QueryAccountsRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(
        object: I,
    ): QueryAccountsRequest {
        const message = createBaseQueryAccountsRequest();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
    return { accounts: [], pagination: undefined };
}

export const QueryAccountsResponse = {
    encode(
        message: QueryAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.accounts) {
            Account.encode(v!, writer.uint32(10).fork()).ldelim();
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
    ): QueryAccountsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.accounts.push(
                        Account.decode(reader, reader.uint32()),
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

    fromJSON(object: any): QueryAccountsResponse {
        return {
            accounts: globalThis.Array.isArray(object?.accounts)
                ? object.accounts.map((e: any) => Account.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryAccountsResponse): unknown {
        const obj: any = {};
        if (message.accounts?.length) {
            obj.accounts = message.accounts.map((e) => Account.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountsResponse>, I>>(
        base?: I,
    ): QueryAccountsResponse {
        return QueryAccountsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryAccountsResponse>, I>>(
        object: I,
    ): QueryAccountsResponse {
        const message = createBaseQueryAccountsResponse();
        message.accounts =
            object.accounts?.map((e) => Account.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
    return {
        scope: "",
        xid: "",
        id: "",
        owner: "",
        state: "",
        pagination: undefined,
    };
}

export const QueryPaymentsRequest = {
    encode(
        message: QueryPaymentsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(
                message.pagination,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryPaymentsRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.scope = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.xid = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.state = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
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

    fromJSON(object: any): QueryPaymentsRequest {
        return {
            scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
            xid: isSet(object.xid) ? globalThis.String(object.xid) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            state: isSet(object.state) ? globalThis.String(object.state) : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryPaymentsRequest): unknown {
        const obj: any = {};
        if (message.scope !== "") {
            obj.scope = message.scope;
        }
        if (message.xid !== "") {
            obj.xid = message.xid;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPaymentsRequest>, I>>(
        base?: I,
    ): QueryPaymentsRequest {
        return QueryPaymentsRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryPaymentsRequest>, I>>(
        object: I,
    ): QueryPaymentsRequest {
        const message = createBaseQueryPaymentsRequest();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
    return { payments: [], pagination: undefined };
}

export const QueryPaymentsResponse = {
    encode(
        message: QueryPaymentsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.payments) {
            FractionalPayment.encode(v!, writer.uint32(10).fork()).ldelim();
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
    ): QueryPaymentsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.payments.push(
                        FractionalPayment.decode(reader, reader.uint32()),
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

    fromJSON(object: any): QueryPaymentsResponse {
        return {
            payments: globalThis.Array.isArray(object?.payments)
                ? object.payments.map((e: any) => FractionalPayment.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryPaymentsResponse): unknown {
        const obj: any = {};
        if (message.payments?.length) {
            obj.payments = message.payments.map((e) =>
                FractionalPayment.toJSON(e),
            );
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPaymentsResponse>, I>>(
        base?: I,
    ): QueryPaymentsResponse {
        return QueryPaymentsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryPaymentsResponse>, I>>(
        object: I,
    ): QueryPaymentsResponse {
        const message = createBaseQueryPaymentsResponse();
        message.payments =
            object.payments?.map((e) => FractionalPayment.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

/** Query defines the gRPC querier service */
export interface Query {
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}

export const QueryServiceName = "akash.escrow.v1.Query";
export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Accounts = this.Accounts.bind(this);
        this.Payments = this.Payments.bind(this);
    }
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
        const data = QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Accounts", data);
        return promise.then((data) =>
            QueryAccountsResponse.decode(_m0.Reader.create(data)),
        );
    }

    Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
        const data = QueryPaymentsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Payments", data);
        return promise.then((data) =>
            QueryPaymentsResponse.decode(_m0.Reader.create(data)),
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
