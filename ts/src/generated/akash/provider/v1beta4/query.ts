/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
    PageRequest,
    PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./provider";

export const protobufPackage = "akash.provider.v1beta4";

/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
    pagination: PageRequest | undefined;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination: PageResponse | undefined;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    owner: string;
}

/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
    provider: Provider | undefined;
}

function createBaseQueryProvidersRequest(): QueryProvidersRequest {
    return { pagination: undefined };
}

export const QueryProvidersRequest = {
    encode(
        message: QueryProvidersRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(
                message.pagination,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryProvidersRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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

    fromJSON(object: any): QueryProvidersRequest {
        return {
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryProvidersRequest): unknown {
        const obj: any = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryProvidersRequest>, I>>(
        base?: I,
    ): QueryProvidersRequest {
        return QueryProvidersRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryProvidersRequest>, I>>(
        object: I,
    ): QueryProvidersRequest {
        const message = createBaseQueryProvidersRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryProvidersResponse(): QueryProvidersResponse {
    return { providers: [], pagination: undefined };
}

export const QueryProvidersResponse = {
    encode(
        message: QueryProvidersResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.providers) {
            Provider.encode(v!, writer.uint32(10).fork()).ldelim();
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
    ): QueryProvidersResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.providers.push(
                        Provider.decode(reader, reader.uint32()),
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

    fromJSON(object: any): QueryProvidersResponse {
        return {
            providers: globalThis.Array.isArray(object?.providers)
                ? object.providers.map((e: any) => Provider.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryProvidersResponse): unknown {
        const obj: any = {};
        if (message.providers?.length) {
            obj.providers = message.providers.map((e) => Provider.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(
        base?: I,
    ): QueryProvidersResponse {
        return QueryProvidersResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(
        object: I,
    ): QueryProvidersResponse {
        const message = createBaseQueryProvidersResponse();
        message.providers =
            object.providers?.map((e) => Provider.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryProviderRequest(): QueryProviderRequest {
    return { owner: "" };
}

export const QueryProviderRequest = {
    encode(
        message: QueryProviderRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryProviderRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryProviderRequest {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
        };
    },

    toJSON(message: QueryProviderRequest): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(
        base?: I,
    ): QueryProviderRequest {
        return QueryProviderRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(
        object: I,
    ): QueryProviderRequest {
        const message = createBaseQueryProviderRequest();
        message.owner = object.owner ?? "";
        return message;
    },
};

function createBaseQueryProviderResponse(): QueryProviderResponse {
    return { provider: undefined };
}

export const QueryProviderResponse = {
    encode(
        message: QueryProviderResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.provider !== undefined) {
            Provider.encode(
                message.provider,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryProviderResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.provider = Provider.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryProviderResponse {
        return {
            provider: isSet(object.provider)
                ? Provider.fromJSON(object.provider)
                : undefined,
        };
    },

    toJSON(message: QueryProviderResponse): unknown {
        const obj: any = {};
        if (message.provider !== undefined) {
            obj.provider = Provider.toJSON(message.provider);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(
        base?: I,
    ): QueryProviderResponse {
        return QueryProviderResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(
        object: I,
    ): QueryProviderResponse {
        const message = createBaseQueryProviderResponse();
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? Provider.fromPartial(object.provider)
                : undefined;
        return message;
    },
};

/** Query defines the gRPC querier service */
export interface Query {
    /** Providers queries providers */
    Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    /** Provider queries provider details */
    Provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}

export const QueryServiceName = "akash.provider.v1beta4.Query";
export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Providers = this.Providers.bind(this);
        this.Provider = this.Provider.bind(this);
    }
    Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse> {
        const data = QueryProvidersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Providers", data);
        return promise.then((data) =>
            QueryProvidersResponse.decode(_m0.Reader.create(data)),
        );
    }

    Provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
        const data = QueryProviderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Provider", data);
        return promise.then((data) =>
            QueryProviderResponse.decode(_m0.Reader.create(data)),
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
