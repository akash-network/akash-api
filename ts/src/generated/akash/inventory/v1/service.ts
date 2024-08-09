/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";
import { Cluster } from "./cluster";
import { Node } from "./node";

export const protobufPackage = "akash.inventory.v1";

/** NodeRPC defines the RPC server of node */
export interface NodeRPC {
    /**
     * QueryNode defines a method to query hardware state of the node
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryNode(request: Empty): Promise<Node>;
    /**
     * StreamNode defines a method to stream hardware state of the node
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    StreamNode(request: Empty): Observable<Node>;
}

export const NodeRPCServiceName = "akash.inventory.v1.NodeRPC";
export class NodeRPCClientImpl implements NodeRPC {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || NodeRPCServiceName;
        this.rpc = rpc;
        this.QueryNode = this.QueryNode.bind(this);
        this.StreamNode = this.StreamNode.bind(this);
    }
    QueryNode(request: Empty): Promise<Node> {
        const data = Empty.encode(request).finish();
        const promise = this.rpc.request(this.service, "QueryNode", data);
        return promise.then((data) => Node.decode(_m0.Reader.create(data)));
    }

    StreamNode(request: Empty): Observable<Node> {
        const data = Empty.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(
            this.service,
            "StreamNode",
            data,
        );
        return result.pipe(map((data) => Node.decode(_m0.Reader.create(data))));
    }
}

/** ClusterRPC defines the RPC server of cluster */
export interface ClusterRPC {
    /**
     * QueryCluster defines a method to query hardware state of the cluster
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryCluster(request: Empty): Promise<Cluster>;
    /**
     * StreamCluster defines a method to stream hardware state of the cluster
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    StreamCluster(request: Empty): Observable<Cluster>;
}

export const ClusterRPCServiceName = "akash.inventory.v1.ClusterRPC";
export class ClusterRPCClientImpl implements ClusterRPC {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || ClusterRPCServiceName;
        this.rpc = rpc;
        this.QueryCluster = this.QueryCluster.bind(this);
        this.StreamCluster = this.StreamCluster.bind(this);
    }
    QueryCluster(request: Empty): Promise<Cluster> {
        const data = Empty.encode(request).finish();
        const promise = this.rpc.request(this.service, "QueryCluster", data);
        return promise.then((data) => Cluster.decode(_m0.Reader.create(data)));
    }

    StreamCluster(request: Empty): Observable<Cluster> {
        const data = Empty.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(
            this.service,
            "StreamCluster",
            data,
        );
        return result.pipe(
            map((data) => Cluster.decode(_m0.Reader.create(data))),
        );
    }
}

interface Rpc {
    request(
        service: string,
        method: string,
        data: Uint8Array,
    ): Promise<Uint8Array>;
    clientStreamingRequest(
        service: string,
        method: string,
        data: Observable<Uint8Array>,
    ): Promise<Uint8Array>;
    serverStreamingRequest(
        service: string,
        method: string,
        data: Uint8Array,
    ): Observable<Uint8Array>;
    bidirectionalStreamingRequest(
        service: string,
        method: string,
        data: Observable<Uint8Array>,
    ): Observable<Uint8Array>;
}
