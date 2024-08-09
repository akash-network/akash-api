/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Group } from "../../../manifest/v2beta3/group";
import { LeaseID } from "../../../market/v1/lease";
import Long = require("long");

export const protobufPackage = "akash.provider.lease.v1";

/** LeaseServiceStatus */
export interface LeaseServiceStatus {
    available: number;
    total: number;
    uris: string[];
    observedGeneration: number;
    replicas: number;
    updatedReplicas: number;
    readyReplicas: number;
    availableReplicas: number;
}

/** LeaseIPStatus */
export interface LeaseIPStatus {
    port: number;
    externalPort: number;
    protocol: string;
    ip: string;
}

/** ForwarderPortStatus */
export interface ForwarderPortStatus {
    host: string;
    port: number;
    externalPort: number;
    proto: string;
    name: string;
}

/** ServiceStatus */
export interface ServiceStatus {
    name: string;
    status: LeaseServiceStatus | undefined;
    ports: ForwarderPortStatus[];
    ips: LeaseIPStatus[];
}

/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequest {
    leaseId: LeaseID | undefined;
    manifest: Group[];
}

/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponse {}

/** ServiceLogsRequest */
export interface ServiceLogsRequest {
    leaseId: LeaseID | undefined;
    services: string[];
}

/** ServiceLogs */
export interface ServiceLogs {
    name: string;
    logs: Uint8Array;
}

/** ServiceLogsResponse */
export interface ServiceLogsResponse {
    services: ServiceLogs[];
}

/** ShellRequest */
export interface ShellRequest {
    leaseId: LeaseID | undefined;
}

/** ServiceStatusRequest */
export interface ServiceStatusRequest {
    leaseId: LeaseID | undefined;
    services: string[];
}

/** ServiceStatusResponse */
export interface ServiceStatusResponse {
    services: ServiceStatus[];
}

function createBaseLeaseServiceStatus(): LeaseServiceStatus {
    return {
        available: 0,
        total: 0,
        uris: [],
        observedGeneration: 0,
        replicas: 0,
        updatedReplicas: 0,
        readyReplicas: 0,
        availableReplicas: 0,
    };
}

export const LeaseServiceStatus = {
    encode(
        message: LeaseServiceStatus,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.available !== 0) {
            writer.uint32(8).int32(message.available);
        }
        if (message.total !== 0) {
            writer.uint32(16).int32(message.total);
        }
        for (const v of message.uris) {
            writer.uint32(26).string(v!);
        }
        if (message.observedGeneration !== 0) {
            writer.uint32(32).int64(message.observedGeneration);
        }
        if (message.replicas !== 0) {
            writer.uint32(40).int32(message.replicas);
        }
        if (message.updatedReplicas !== 0) {
            writer.uint32(48).int32(message.updatedReplicas);
        }
        if (message.readyReplicas !== 0) {
            writer.uint32(56).int32(message.readyReplicas);
        }
        if (message.availableReplicas !== 0) {
            writer.uint32(64).int32(message.availableReplicas);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): LeaseServiceStatus {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseServiceStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.available = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.total = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.uris.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.observedGeneration = longToNumber(
                        reader.int64() as Long,
                    );
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.replicas = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.updatedReplicas = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.readyReplicas = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.availableReplicas = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): LeaseServiceStatus {
        return {
            available: isSet(object.available)
                ? globalThis.Number(object.available)
                : 0,
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
            uris: globalThis.Array.isArray(object?.uris)
                ? object.uris.map((e: any) => globalThis.String(e))
                : [],
            observedGeneration: isSet(object.observedGeneration)
                ? globalThis.Number(object.observedGeneration)
                : 0,
            replicas: isSet(object.replicas)
                ? globalThis.Number(object.replicas)
                : 0,
            updatedReplicas: isSet(object.updatedReplicas)
                ? globalThis.Number(object.updatedReplicas)
                : 0,
            readyReplicas: isSet(object.readyReplicas)
                ? globalThis.Number(object.readyReplicas)
                : 0,
            availableReplicas: isSet(object.availableReplicas)
                ? globalThis.Number(object.availableReplicas)
                : 0,
        };
    },

    toJSON(message: LeaseServiceStatus): unknown {
        const obj: any = {};
        if (message.available !== 0) {
            obj.available = Math.round(message.available);
        }
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        if (message.uris?.length) {
            obj.uris = message.uris;
        }
        if (message.observedGeneration !== 0) {
            obj.observedGeneration = Math.round(message.observedGeneration);
        }
        if (message.replicas !== 0) {
            obj.replicas = Math.round(message.replicas);
        }
        if (message.updatedReplicas !== 0) {
            obj.updatedReplicas = Math.round(message.updatedReplicas);
        }
        if (message.readyReplicas !== 0) {
            obj.readyReplicas = Math.round(message.readyReplicas);
        }
        if (message.availableReplicas !== 0) {
            obj.availableReplicas = Math.round(message.availableReplicas);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<LeaseServiceStatus>, I>>(
        base?: I,
    ): LeaseServiceStatus {
        return LeaseServiceStatus.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<LeaseServiceStatus>, I>>(
        object: I,
    ): LeaseServiceStatus {
        const message = createBaseLeaseServiceStatus();
        message.available = object.available ?? 0;
        message.total = object.total ?? 0;
        message.uris = object.uris?.map((e) => e) || [];
        message.observedGeneration = object.observedGeneration ?? 0;
        message.replicas = object.replicas ?? 0;
        message.updatedReplicas = object.updatedReplicas ?? 0;
        message.readyReplicas = object.readyReplicas ?? 0;
        message.availableReplicas = object.availableReplicas ?? 0;
        return message;
    },
};

function createBaseLeaseIPStatus(): LeaseIPStatus {
    return { port: 0, externalPort: 0, protocol: "", ip: "" };
}

export const LeaseIPStatus = {
    encode(
        message: LeaseIPStatus,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).uint32(message.port);
        }
        if (message.externalPort !== 0) {
            writer.uint32(16).uint32(message.externalPort);
        }
        if (message.protocol !== "") {
            writer.uint32(26).string(message.protocol);
        }
        if (message.ip !== "") {
            writer.uint32(34).string(message.ip);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseIPStatus {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseIPStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.port = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.externalPort = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.protocol = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.ip = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): LeaseIPStatus {
        return {
            port: isSet(object.port) ? globalThis.Number(object.port) : 0,
            externalPort: isSet(object.externalPort)
                ? globalThis.Number(object.externalPort)
                : 0,
            protocol: isSet(object.protocol)
                ? globalThis.String(object.protocol)
                : "",
            ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
        };
    },

    toJSON(message: LeaseIPStatus): unknown {
        const obj: any = {};
        if (message.port !== 0) {
            obj.port = Math.round(message.port);
        }
        if (message.externalPort !== 0) {
            obj.externalPort = Math.round(message.externalPort);
        }
        if (message.protocol !== "") {
            obj.protocol = message.protocol;
        }
        if (message.ip !== "") {
            obj.ip = message.ip;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<LeaseIPStatus>, I>>(
        base?: I,
    ): LeaseIPStatus {
        return LeaseIPStatus.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<LeaseIPStatus>, I>>(
        object: I,
    ): LeaseIPStatus {
        const message = createBaseLeaseIPStatus();
        message.port = object.port ?? 0;
        message.externalPort = object.externalPort ?? 0;
        message.protocol = object.protocol ?? "";
        message.ip = object.ip ?? "";
        return message;
    },
};

function createBaseForwarderPortStatus(): ForwarderPortStatus {
    return { host: "", port: 0, externalPort: 0, proto: "", name: "" };
}

export const ForwarderPortStatus = {
    encode(
        message: ForwarderPortStatus,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).uint32(message.port);
        }
        if (message.externalPort !== 0) {
            writer.uint32(24).uint32(message.externalPort);
        }
        if (message.proto !== "") {
            writer.uint32(34).string(message.proto);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ForwarderPortStatus {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForwarderPortStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.host = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.port = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.externalPort = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.proto = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ForwarderPortStatus {
        return {
            host: isSet(object.host) ? globalThis.String(object.host) : "",
            port: isSet(object.port) ? globalThis.Number(object.port) : 0,
            externalPort: isSet(object.externalPort)
                ? globalThis.Number(object.externalPort)
                : 0,
            proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },

    toJSON(message: ForwarderPortStatus): unknown {
        const obj: any = {};
        if (message.host !== "") {
            obj.host = message.host;
        }
        if (message.port !== 0) {
            obj.port = Math.round(message.port);
        }
        if (message.externalPort !== 0) {
            obj.externalPort = Math.round(message.externalPort);
        }
        if (message.proto !== "") {
            obj.proto = message.proto;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ForwarderPortStatus>, I>>(
        base?: I,
    ): ForwarderPortStatus {
        return ForwarderPortStatus.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ForwarderPortStatus>, I>>(
        object: I,
    ): ForwarderPortStatus {
        const message = createBaseForwarderPortStatus();
        message.host = object.host ?? "";
        message.port = object.port ?? 0;
        message.externalPort = object.externalPort ?? 0;
        message.proto = object.proto ?? "";
        message.name = object.name ?? "";
        return message;
    },
};

function createBaseServiceStatus(): ServiceStatus {
    return { name: "", status: undefined, ports: [], ips: [] };
}

export const ServiceStatus = {
    encode(
        message: ServiceStatus,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.status !== undefined) {
            LeaseServiceStatus.encode(
                message.status,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        for (const v of message.ports) {
            ForwarderPortStatus.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.ips) {
            LeaseIPStatus.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatus {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.status = LeaseServiceStatus.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.ports.push(
                        ForwarderPortStatus.decode(reader, reader.uint32()),
                    );
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.ips.push(
                        LeaseIPStatus.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ServiceStatus {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            status: isSet(object.status)
                ? LeaseServiceStatus.fromJSON(object.status)
                : undefined,
            ports: globalThis.Array.isArray(object?.ports)
                ? object.ports.map((e: any) => ForwarderPortStatus.fromJSON(e))
                : [],
            ips: globalThis.Array.isArray(object?.ips)
                ? object.ips.map((e: any) => LeaseIPStatus.fromJSON(e))
                : [],
        };
    },

    toJSON(message: ServiceStatus): unknown {
        const obj: any = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.status !== undefined) {
            obj.status = LeaseServiceStatus.toJSON(message.status);
        }
        if (message.ports?.length) {
            obj.ports = message.ports.map((e) => ForwarderPortStatus.toJSON(e));
        }
        if (message.ips?.length) {
            obj.ips = message.ips.map((e) => LeaseIPStatus.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceStatus>, I>>(
        base?: I,
    ): ServiceStatus {
        return ServiceStatus.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceStatus>, I>>(
        object: I,
    ): ServiceStatus {
        const message = createBaseServiceStatus();
        message.name = object.name ?? "";
        message.status =
            object.status !== undefined && object.status !== null
                ? LeaseServiceStatus.fromPartial(object.status)
                : undefined;
        message.ports =
            object.ports?.map((e) => ForwarderPortStatus.fromPartial(e)) || [];
        message.ips =
            object.ips?.map((e) => LeaseIPStatus.fromPartial(e)) || [];
        return message;
    },
};

function createBaseSendManifestRequest(): SendManifestRequest {
    return { leaseId: undefined, manifest: [] };
}

export const SendManifestRequest = {
    encode(
        message: SendManifestRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.manifest) {
            Group.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): SendManifestRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendManifestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.leaseId = LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.manifest.push(
                        Group.decode(reader, reader.uint32()),
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

    fromJSON(object: any): SendManifestRequest {
        return {
            leaseId: isSet(object.leaseId)
                ? LeaseID.fromJSON(object.leaseId)
                : undefined,
            manifest: globalThis.Array.isArray(object?.manifest)
                ? object.manifest.map((e: any) => Group.fromJSON(e))
                : [],
        };
    },

    toJSON(message: SendManifestRequest): unknown {
        const obj: any = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = LeaseID.toJSON(message.leaseId);
        }
        if (message.manifest?.length) {
            obj.manifest = message.manifest.map((e) => Group.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<SendManifestRequest>, I>>(
        base?: I,
    ): SendManifestRequest {
        return SendManifestRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<SendManifestRequest>, I>>(
        object: I,
    ): SendManifestRequest {
        const message = createBaseSendManifestRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.manifest =
            object.manifest?.map((e) => Group.fromPartial(e)) || [];
        return message;
    },
};

function createBaseSendManifestResponse(): SendManifestResponse {
    return {};
}

export const SendManifestResponse = {
    encode(
        _: SendManifestResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): SendManifestResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendManifestResponse();
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

    fromJSON(_: any): SendManifestResponse {
        return {};
    },

    toJSON(_: SendManifestResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<SendManifestResponse>, I>>(
        base?: I,
    ): SendManifestResponse {
        return SendManifestResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<SendManifestResponse>, I>>(
        _: I,
    ): SendManifestResponse {
        const message = createBaseSendManifestResponse();
        return message;
    },
};

function createBaseServiceLogsRequest(): ServiceLogsRequest {
    return { leaseId: undefined, services: [] };
}

export const ServiceLogsRequest = {
    encode(
        message: ServiceLogsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.services) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ServiceLogsRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLogsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.leaseId = LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.services.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ServiceLogsRequest {
        return {
            leaseId: isSet(object.leaseId)
                ? LeaseID.fromJSON(object.leaseId)
                : undefined,
            services: globalThis.Array.isArray(object?.services)
                ? object.services.map((e: any) => globalThis.String(e))
                : [],
        };
    },

    toJSON(message: ServiceLogsRequest): unknown {
        const obj: any = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = LeaseID.toJSON(message.leaseId);
        }
        if (message.services?.length) {
            obj.services = message.services;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceLogsRequest>, I>>(
        base?: I,
    ): ServiceLogsRequest {
        return ServiceLogsRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceLogsRequest>, I>>(
        object: I,
    ): ServiceLogsRequest {
        const message = createBaseServiceLogsRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.services = object.services?.map((e) => e) || [];
        return message;
    },
};

function createBaseServiceLogs(): ServiceLogs {
    return { name: "", logs: new Uint8Array(0) };
}

export const ServiceLogs = {
    encode(
        message: ServiceLogs,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.logs.length !== 0) {
            writer.uint32(18).bytes(message.logs);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogs {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLogs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.logs = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ServiceLogs {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            logs: isSet(object.logs)
                ? bytesFromBase64(object.logs)
                : new Uint8Array(0),
        };
    },

    toJSON(message: ServiceLogs): unknown {
        const obj: any = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.logs.length !== 0) {
            obj.logs = base64FromBytes(message.logs);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceLogs>, I>>(
        base?: I,
    ): ServiceLogs {
        return ServiceLogs.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceLogs>, I>>(
        object: I,
    ): ServiceLogs {
        const message = createBaseServiceLogs();
        message.name = object.name ?? "";
        message.logs = object.logs ?? new Uint8Array(0);
        return message;
    },
};

function createBaseServiceLogsResponse(): ServiceLogsResponse {
    return { services: [] };
}

export const ServiceLogsResponse = {
    encode(
        message: ServiceLogsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.services) {
            ServiceLogs.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ServiceLogsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLogsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.services.push(
                        ServiceLogs.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ServiceLogsResponse {
        return {
            services: globalThis.Array.isArray(object?.services)
                ? object.services.map((e: any) => ServiceLogs.fromJSON(e))
                : [],
        };
    },

    toJSON(message: ServiceLogsResponse): unknown {
        const obj: any = {};
        if (message.services?.length) {
            obj.services = message.services.map((e) => ServiceLogs.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceLogsResponse>, I>>(
        base?: I,
    ): ServiceLogsResponse {
        return ServiceLogsResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceLogsResponse>, I>>(
        object: I,
    ): ServiceLogsResponse {
        const message = createBaseServiceLogsResponse();
        message.services =
            object.services?.map((e) => ServiceLogs.fromPartial(e)) || [];
        return message;
    },
};

function createBaseShellRequest(): ShellRequest {
    return { leaseId: undefined };
}

export const ShellRequest = {
    encode(
        message: ShellRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ShellRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShellRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.leaseId = LeaseID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ShellRequest {
        return {
            leaseId: isSet(object.leaseId)
                ? LeaseID.fromJSON(object.leaseId)
                : undefined,
        };
    },

    toJSON(message: ShellRequest): unknown {
        const obj: any = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = LeaseID.toJSON(message.leaseId);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ShellRequest>, I>>(
        base?: I,
    ): ShellRequest {
        return ShellRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ShellRequest>, I>>(
        object: I,
    ): ShellRequest {
        const message = createBaseShellRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? LeaseID.fromPartial(object.leaseId)
                : undefined;
        return message;
    },
};

function createBaseServiceStatusRequest(): ServiceStatusRequest {
    return { leaseId: undefined, services: [] };
}

export const ServiceStatusRequest = {
    encode(
        message: ServiceStatusRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.services) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ServiceStatusRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.leaseId = LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.services.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ServiceStatusRequest {
        return {
            leaseId: isSet(object.leaseId)
                ? LeaseID.fromJSON(object.leaseId)
                : undefined,
            services: globalThis.Array.isArray(object?.services)
                ? object.services.map((e: any) => globalThis.String(e))
                : [],
        };
    },

    toJSON(message: ServiceStatusRequest): unknown {
        const obj: any = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = LeaseID.toJSON(message.leaseId);
        }
        if (message.services?.length) {
            obj.services = message.services;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceStatusRequest>, I>>(
        base?: I,
    ): ServiceStatusRequest {
        return ServiceStatusRequest.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceStatusRequest>, I>>(
        object: I,
    ): ServiceStatusRequest {
        const message = createBaseServiceStatusRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.services = object.services?.map((e) => e) || [];
        return message;
    },
};

function createBaseServiceStatusResponse(): ServiceStatusResponse {
    return { services: [] };
}

export const ServiceStatusResponse = {
    encode(
        message: ServiceStatusResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.services) {
            ServiceStatus.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ServiceStatusResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.services.push(
                        ServiceStatus.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ServiceStatusResponse {
        return {
            services: globalThis.Array.isArray(object?.services)
                ? object.services.map((e: any) => ServiceStatus.fromJSON(e))
                : [],
        };
    },

    toJSON(message: ServiceStatusResponse): unknown {
        const obj: any = {};
        if (message.services?.length) {
            obj.services = message.services.map((e) => ServiceStatus.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceStatusResponse>, I>>(
        base?: I,
    ): ServiceStatusResponse {
        return ServiceStatusResponse.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceStatusResponse>, I>>(
        object: I,
    ): ServiceStatusResponse {
        const message = createBaseServiceStatusResponse();
        message.services =
            object.services?.map((e) => ServiceStatus.fromPartial(e)) || [];
        return message;
    },
};

/** LeaseRPC defines the RPC server for lease control */
export interface LeaseRPC {
    /** SendManifest sends manifest to the provider */
    SendManifest(request: SendManifestRequest): Promise<SendManifestResponse>;
    /**
     * ServiceStatus
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    ServiceStatus(
        request: ServiceStatusRequest,
    ): Promise<ServiceStatusResponse>;
    /**
     * StreamServiceStatus
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    StreamServiceStatus(
        request: ServiceStatusRequest,
    ): Observable<ServiceStatusResponse>;
    /**
     * ServiceLogs
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    ServiceLogs(request: ServiceLogsRequest): Promise<ServiceLogsResponse>;
    /**
     * StreamServiceLogs
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    StreamServiceLogs(
        request: ServiceLogsRequest,
    ): Observable<ServiceLogsResponse>;
}

export const LeaseRPCServiceName = "akash.provider.lease.v1.LeaseRPC";
export class LeaseRPCClientImpl implements LeaseRPC {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || LeaseRPCServiceName;
        this.rpc = rpc;
        this.SendManifest = this.SendManifest.bind(this);
        this.ServiceStatus = this.ServiceStatus.bind(this);
        this.StreamServiceStatus = this.StreamServiceStatus.bind(this);
        this.ServiceLogs = this.ServiceLogs.bind(this);
        this.StreamServiceLogs = this.StreamServiceLogs.bind(this);
    }
    SendManifest(request: SendManifestRequest): Promise<SendManifestResponse> {
        const data = SendManifestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendManifest", data);
        return promise.then((data) =>
            SendManifestResponse.decode(_m0.Reader.create(data)),
        );
    }

    ServiceStatus(
        request: ServiceStatusRequest,
    ): Promise<ServiceStatusResponse> {
        const data = ServiceStatusRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ServiceStatus", data);
        return promise.then((data) =>
            ServiceStatusResponse.decode(_m0.Reader.create(data)),
        );
    }

    StreamServiceStatus(
        request: ServiceStatusRequest,
    ): Observable<ServiceStatusResponse> {
        const data = ServiceStatusRequest.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(
            this.service,
            "StreamServiceStatus",
            data,
        );
        return result.pipe(
            map((data) =>
                ServiceStatusResponse.decode(_m0.Reader.create(data)),
            ),
        );
    }

    ServiceLogs(request: ServiceLogsRequest): Promise<ServiceLogsResponse> {
        const data = ServiceLogsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ServiceLogs", data);
        return promise.then((data) =>
            ServiceLogsResponse.decode(_m0.Reader.create(data)),
        );
    }

    StreamServiceLogs(
        request: ServiceLogsRequest,
    ): Observable<ServiceLogsResponse> {
        const data = ServiceLogsRequest.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(
            this.service,
            "StreamServiceLogs",
            data,
        );
        return result.pipe(
            map((data) => ServiceLogsResponse.decode(_m0.Reader.create(data))),
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

function bytesFromBase64(b64: string): Uint8Array {
    if ((globalThis as any).Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if ((globalThis as any).Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
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

function longToNumber(long: Long): number {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            "Value is larger than Number.MAX_SAFE_INTEGER",
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
