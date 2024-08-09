/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
    PageRequest,
    PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "../../escrow/v1/account";
import { Deployment, DeploymentID } from "../v1/deployment";
import { GroupID } from "../v1/group";
import { DeploymentFilters } from "./filters";
import { Group } from "./group";
import { Params } from "./params";

export const protobufPackage = "akash.deployment.v1beta4";

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
    filters: DeploymentFilters | undefined;
    pagination: PageRequest | undefined;
}

/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
    deployments: QueryDeploymentResponse[];
    pagination: PageResponse | undefined;
}

/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
    id: DeploymentID | undefined;
}

/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
    deployment: Deployment | undefined;
    groups: Group[];
    escrowAccount: Account | undefined;
}

/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
    id: GroupID | undefined;
}

/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
    group: Group | undefined;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}

function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
    return { filters: undefined, pagination: undefined };
}

export const QueryDeploymentsRequest = {
    encode(
        message: QueryDeploymentsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.filters !== undefined) {
            DeploymentFilters.encode(
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
    ): QueryDeploymentsRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.filters = DeploymentFilters.decode(
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

    fromJSON(object: any): QueryDeploymentsRequest {
        return {
            filters: isSet(object.filters)
                ? DeploymentFilters.fromJSON(object.filters)
                : undefined,
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryDeploymentsRequest): unknown {
        const obj: any = {};
        if (message.filters !== undefined) {
            obj.filters = DeploymentFilters.toJSON(message.filters);
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDeploymentsRequest>, I>>(
        base?: I,
    ): QueryDeploymentsRequest {
        return QueryDeploymentsRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryDeploymentsRequest>, I>>(
        object: I,
    ): QueryDeploymentsRequest {
        const message = createBaseQueryDeploymentsRequest();
        message.filters =
            object.filters !== undefined && object.filters !== null
                ? DeploymentFilters.fromPartial(object.filters)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
    return { deployments: [], pagination: undefined };
}

export const QueryDeploymentsResponse = {
    encode(
        message: QueryDeploymentsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.deployments) {
            QueryDeploymentResponse.encode(
                v!,
                writer.uint32(10).fork(),
            ).ldelim();
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
    ): QueryDeploymentsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.deployments.push(
                        QueryDeploymentResponse.decode(reader, reader.uint32()),
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

    fromJSON(object: any): QueryDeploymentsResponse {
        return {
            deployments: globalThis.Array.isArray(object?.deployments)
                ? object.deployments.map((e: any) =>
                      QueryDeploymentResponse.fromJSON(e),
                  )
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryDeploymentsResponse): unknown {
        const obj: any = {};
        if (message.deployments?.length) {
            obj.deployments = message.deployments.map((e) =>
                QueryDeploymentResponse.toJSON(e),
            );
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDeploymentsResponse>, I>>(
        base?: I,
    ): QueryDeploymentsResponse {
        return QueryDeploymentsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryDeploymentsResponse>, I>>(
        object: I,
    ): QueryDeploymentsResponse {
        const message = createBaseQueryDeploymentsResponse();
        message.deployments =
            object.deployments?.map((e) =>
                QueryDeploymentResponse.fromPartial(e),
            ) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
    return { id: undefined };
}

export const QueryDeploymentRequest = {
    encode(
        message: QueryDeploymentRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryDeploymentRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = DeploymentID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryDeploymentRequest {
        return {
            id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: QueryDeploymentRequest): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = DeploymentID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDeploymentRequest>, I>>(
        base?: I,
    ): QueryDeploymentRequest {
        return QueryDeploymentRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryDeploymentRequest>, I>>(
        object: I,
    ): QueryDeploymentRequest {
        const message = createBaseQueryDeploymentRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
    return { deployment: undefined, groups: [], escrowAccount: undefined };
}

export const QueryDeploymentResponse = {
    encode(
        message: QueryDeploymentResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.deployment !== undefined) {
            Deployment.encode(
                message.deployment,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        for (const v of message.groups) {
            Group.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            Account.encode(
                message.escrowAccount,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryDeploymentResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.deployment = Deployment.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.groups.push(Group.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
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

    fromJSON(object: any): QueryDeploymentResponse {
        return {
            deployment: isSet(object.deployment)
                ? Deployment.fromJSON(object.deployment)
                : undefined,
            groups: globalThis.Array.isArray(object?.groups)
                ? object.groups.map((e: any) => Group.fromJSON(e))
                : [],
            escrowAccount: isSet(object.escrowAccount)
                ? Account.fromJSON(object.escrowAccount)
                : undefined,
        };
    },

    toJSON(message: QueryDeploymentResponse): unknown {
        const obj: any = {};
        if (message.deployment !== undefined) {
            obj.deployment = Deployment.toJSON(message.deployment);
        }
        if (message.groups?.length) {
            obj.groups = message.groups.map((e) => Group.toJSON(e));
        }
        if (message.escrowAccount !== undefined) {
            obj.escrowAccount = Account.toJSON(message.escrowAccount);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDeploymentResponse>, I>>(
        base?: I,
    ): QueryDeploymentResponse {
        return QueryDeploymentResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryDeploymentResponse>, I>>(
        object: I,
    ): QueryDeploymentResponse {
        const message = createBaseQueryDeploymentResponse();
        message.deployment =
            object.deployment !== undefined && object.deployment !== null
                ? Deployment.fromPartial(object.deployment)
                : undefined;
        message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
        message.escrowAccount =
            object.escrowAccount !== undefined && object.escrowAccount !== null
                ? Account.fromPartial(object.escrowAccount)
                : undefined;
        return message;
    },
};

function createBaseQueryGroupRequest(): QueryGroupRequest {
    return { id: undefined };
}

export const QueryGroupRequest = {
    encode(
        message: QueryGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = GroupID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryGroupRequest {
        return {
            id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
        };
    },

    toJSON(message: QueryGroupRequest): unknown {
        const obj: any = {};
        if (message.id !== undefined) {
            obj.id = GroupID.toJSON(message.id);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryGroupRequest>, I>>(
        base?: I,
    ): QueryGroupRequest {
        return QueryGroupRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryGroupRequest>, I>>(
        object: I,
    ): QueryGroupRequest {
        const message = createBaseQueryGroupRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};

function createBaseQueryGroupResponse(): QueryGroupResponse {
    return { group: undefined };
}

export const QueryGroupResponse = {
    encode(
        message: QueryGroupResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.group !== undefined) {
            Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): QueryGroupResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.group = Group.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryGroupResponse {
        return {
            group: isSet(object.group)
                ? Group.fromJSON(object.group)
                : undefined,
        };
    },

    toJSON(message: QueryGroupResponse): unknown {
        const obj: any = {};
        if (message.group !== undefined) {
            obj.group = Group.toJSON(message.group);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryGroupResponse>, I>>(
        base?: I,
    ): QueryGroupResponse {
        return QueryGroupResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<QueryGroupResponse>, I>>(
        object: I,
    ): QueryGroupResponse {
        const message = createBaseQueryGroupResponse();
        message.group =
            object.group !== undefined && object.group !== null
                ? Group.fromPartial(object.group)
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
    /** Deployments queries deployments */
    Deployments(
        request: QueryDeploymentsRequest,
    ): Promise<QueryDeploymentsResponse>;
    /** Deployment queries deployment details */
    Deployment(
        request: QueryDeploymentRequest,
    ): Promise<QueryDeploymentResponse>;
    /** Group queries group details */
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
    /** Params returns the total set of minting parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceName = "akash.deployment.v1beta4.Query";
export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Deployments = this.Deployments.bind(this);
        this.Deployment = this.Deployment.bind(this);
        this.Group = this.Group.bind(this);
        this.Params = this.Params.bind(this);
    }
    Deployments(
        request: QueryDeploymentsRequest,
    ): Promise<QueryDeploymentsResponse> {
        const data = QueryDeploymentsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Deployments", data);
        return promise.then((data) =>
            QueryDeploymentsResponse.decode(_m0.Reader.create(data)),
        );
    }

    Deployment(
        request: QueryDeploymentRequest,
    ): Promise<QueryDeploymentResponse> {
        const data = QueryDeploymentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Deployment", data);
        return promise.then((data) =>
            QueryDeploymentResponse.decode(_m0.Reader.create(data)),
        );
    }

    Group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
        const data = QueryGroupRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Group", data);
        return promise.then((data) =>
            QueryGroupResponse.decode(_m0.Reader.create(data)),
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
