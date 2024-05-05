/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from '@grpc/grpc-js';
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../../typeRegistry';
import { Group } from '../../../manifest/v2beta2/group';
import { LeaseID } from '../../../market/v1beta4/lease';

export const protobufPackage = 'akash.provider.lease.v1';

/** LeaseServiceStatus */
export interface LeaseServiceStatus {
  $type: 'akash.provider.lease.v1.LeaseServiceStatus';
  available: number;
  total: number;
  uris: string[];
  observedGeneration: Long;
  replicas: number;
  updatedReplicas: number;
  readyReplicas: number;
  availableReplicas: number;
}

/** LeaseIPStatus */
export interface LeaseIPStatus {
  $type: 'akash.provider.lease.v1.LeaseIPStatus';
  port: number;
  externalPort: number;
  protocol: string;
  ip: string;
}

/** ForwarderPortStatus */
export interface ForwarderPortStatus {
  $type: 'akash.provider.lease.v1.ForwarderPortStatus';
  host: string;
  port: number;
  externalPort: number;
  proto: string;
  name: string;
}

/** ServiceStatus */
export interface ServiceStatus {
  $type: 'akash.provider.lease.v1.ServiceStatus';
  name: string;
  status: LeaseServiceStatus | undefined;
  ports: ForwarderPortStatus[];
  ips: LeaseIPStatus[];
}

/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequest {
  $type: 'akash.provider.lease.v1.SendManifestRequest';
  leaseId: LeaseID | undefined;
  manifest: Group[];
}

/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponse {
  $type: 'akash.provider.lease.v1.SendManifestResponse';
}

/** ServiceLogsRequest */
export interface ServiceLogsRequest {
  $type: 'akash.provider.lease.v1.ServiceLogsRequest';
  leaseId: LeaseID | undefined;
  services: string[];
  lines: number;
}

/** ServiceLogs */
export interface ServiceLogs {
  $type: 'akash.provider.lease.v1.ServiceLogs';
  name: string;
  logs: Uint8Array;
}

/** ServiceLogsResponse */
export interface ServiceLogsResponse {
  $type: 'akash.provider.lease.v1.ServiceLogsResponse';
  services: ServiceLogs[];
}

/** ShellRequest */
export interface ShellRequest {
  $type: 'akash.provider.lease.v1.ShellRequest';
  leaseId: LeaseID | undefined;
}

/** ServiceStatusRequest */
export interface ServiceStatusRequest {
  $type: 'akash.provider.lease.v1.ServiceStatusRequest';
  leaseId: LeaseID | undefined;
  services: string[];
}

/** ServiceStatusResponse */
export interface ServiceStatusResponse {
  $type: 'akash.provider.lease.v1.ServiceStatusResponse';
  services: ServiceStatus[];
}

function createBaseLeaseServiceStatus(): LeaseServiceStatus {
  return {
    $type: 'akash.provider.lease.v1.LeaseServiceStatus',
    available: 0,
    total: 0,
    uris: [],
    observedGeneration: Long.ZERO,
    replicas: 0,
    updatedReplicas: 0,
    readyReplicas: 0,
    availableReplicas: 0,
  };
}

export const LeaseServiceStatus = {
  $type: 'akash.provider.lease.v1.LeaseServiceStatus' as const,

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
    if (!message.observedGeneration.equals(Long.ZERO)) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseServiceStatus {
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

          message.observedGeneration = reader.int64() as Long;
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
      $type: LeaseServiceStatus.$type,
      available: isSet(object.available)
        ? globalThis.Number(object.available)
        : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      uris: globalThis.Array.isArray(object?.uris)
        ? object.uris.map((e: any) => globalThis.String(e))
        : [],
      observedGeneration: isSet(object.observedGeneration)
        ? Long.fromValue(object.observedGeneration)
        : Long.ZERO,
      replicas: isSet(object.replicas) ? globalThis.Number(object.replicas) : 0,
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
    if (!message.observedGeneration.equals(Long.ZERO)) {
      obj.observedGeneration = (
        message.observedGeneration || Long.ZERO
      ).toString();
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

  create(base?: DeepPartial<LeaseServiceStatus>): LeaseServiceStatus {
    return LeaseServiceStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LeaseServiceStatus>): LeaseServiceStatus {
    const message = createBaseLeaseServiceStatus();
    message.available = object.available ?? 0;
    message.total = object.total ?? 0;
    message.uris = object.uris?.map((e) => e) || [];
    message.observedGeneration =
      object.observedGeneration !== undefined &&
      object.observedGeneration !== null
        ? Long.fromValue(object.observedGeneration)
        : Long.ZERO;
    message.replicas = object.replicas ?? 0;
    message.updatedReplicas = object.updatedReplicas ?? 0;
    message.readyReplicas = object.readyReplicas ?? 0;
    message.availableReplicas = object.availableReplicas ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LeaseServiceStatus.$type, LeaseServiceStatus);

function createBaseLeaseIPStatus(): LeaseIPStatus {
  return {
    $type: 'akash.provider.lease.v1.LeaseIPStatus',
    port: 0,
    externalPort: 0,
    protocol: '',
    ip: '',
  };
}

export const LeaseIPStatus = {
  $type: 'akash.provider.lease.v1.LeaseIPStatus' as const,

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
    if (message.protocol !== '') {
      writer.uint32(26).string(message.protocol);
    }
    if (message.ip !== '') {
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
      $type: LeaseIPStatus.$type,
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      externalPort: isSet(object.externalPort)
        ? globalThis.Number(object.externalPort)
        : 0,
      protocol: isSet(object.protocol)
        ? globalThis.String(object.protocol)
        : '',
      ip: isSet(object.ip) ? globalThis.String(object.ip) : '',
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
    if (message.protocol !== '') {
      obj.protocol = message.protocol;
    }
    if (message.ip !== '') {
      obj.ip = message.ip;
    }
    return obj;
  },

  create(base?: DeepPartial<LeaseIPStatus>): LeaseIPStatus {
    return LeaseIPStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LeaseIPStatus>): LeaseIPStatus {
    const message = createBaseLeaseIPStatus();
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.protocol = object.protocol ?? '';
    message.ip = object.ip ?? '';
    return message;
  },
};

messageTypeRegistry.set(LeaseIPStatus.$type, LeaseIPStatus);

function createBaseForwarderPortStatus(): ForwarderPortStatus {
  return {
    $type: 'akash.provider.lease.v1.ForwarderPortStatus',
    host: '',
    port: 0,
    externalPort: 0,
    proto: '',
    name: '',
  };
}

export const ForwarderPortStatus = {
  $type: 'akash.provider.lease.v1.ForwarderPortStatus' as const,

  encode(
    message: ForwarderPortStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.host !== '') {
      writer.uint32(10).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.externalPort !== 0) {
      writer.uint32(24).uint32(message.externalPort);
    }
    if (message.proto !== '') {
      writer.uint32(34).string(message.proto);
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwarderPortStatus {
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
      $type: ForwarderPortStatus.$type,
      host: isSet(object.host) ? globalThis.String(object.host) : '',
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      externalPort: isSet(object.externalPort)
        ? globalThis.Number(object.externalPort)
        : 0,
      proto: isSet(object.proto) ? globalThis.String(object.proto) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
    };
  },

  toJSON(message: ForwarderPortStatus): unknown {
    const obj: any = {};
    if (message.host !== '') {
      obj.host = message.host;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.externalPort !== 0) {
      obj.externalPort = Math.round(message.externalPort);
    }
    if (message.proto !== '') {
      obj.proto = message.proto;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ForwarderPortStatus>): ForwarderPortStatus {
    return ForwarderPortStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ForwarderPortStatus>): ForwarderPortStatus {
    const message = createBaseForwarderPortStatus();
    message.host = object.host ?? '';
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.proto = object.proto ?? '';
    message.name = object.name ?? '';
    return message;
  },
};

messageTypeRegistry.set(ForwarderPortStatus.$type, ForwarderPortStatus);

function createBaseServiceStatus(): ServiceStatus {
  return {
    $type: 'akash.provider.lease.v1.ServiceStatus',
    name: '',
    status: undefined,
    ports: [],
    ips: [],
  };
}

export const ServiceStatus = {
  $type: 'akash.provider.lease.v1.ServiceStatus' as const,

  encode(
    message: ServiceStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
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

          message.status = LeaseServiceStatus.decode(reader, reader.uint32());
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

          message.ips.push(LeaseIPStatus.decode(reader, reader.uint32()));
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
      $type: ServiceStatus.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
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
    if (message.name !== '') {
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

  create(base?: DeepPartial<ServiceStatus>): ServiceStatus {
    return ServiceStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceStatus>): ServiceStatus {
    const message = createBaseServiceStatus();
    message.name = object.name ?? '';
    message.status =
      object.status !== undefined && object.status !== null
        ? LeaseServiceStatus.fromPartial(object.status)
        : undefined;
    message.ports =
      object.ports?.map((e) => ForwarderPortStatus.fromPartial(e)) || [];
    message.ips = object.ips?.map((e) => LeaseIPStatus.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ServiceStatus.$type, ServiceStatus);

function createBaseSendManifestRequest(): SendManifestRequest {
  return {
    $type: 'akash.provider.lease.v1.SendManifestRequest',
    leaseId: undefined,
    manifest: [],
  };
}

export const SendManifestRequest = {
  $type: 'akash.provider.lease.v1.SendManifestRequest' as const,

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

  decode(input: _m0.Reader | Uint8Array, length?: number): SendManifestRequest {
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

          message.manifest.push(Group.decode(reader, reader.uint32()));
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
      $type: SendManifestRequest.$type,
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

  create(base?: DeepPartial<SendManifestRequest>): SendManifestRequest {
    return SendManifestRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendManifestRequest>): SendManifestRequest {
    const message = createBaseSendManifestRequest();
    message.leaseId =
      object.leaseId !== undefined && object.leaseId !== null
        ? LeaseID.fromPartial(object.leaseId)
        : undefined;
    message.manifest = object.manifest?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SendManifestRequest.$type, SendManifestRequest);

function createBaseSendManifestResponse(): SendManifestResponse {
  return { $type: 'akash.provider.lease.v1.SendManifestResponse' };
}

export const SendManifestResponse = {
  $type: 'akash.provider.lease.v1.SendManifestResponse' as const,

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
    return { $type: SendManifestResponse.$type };
  },

  toJSON(_: SendManifestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SendManifestResponse>): SendManifestResponse {
    return SendManifestResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SendManifestResponse>): SendManifestResponse {
    const message = createBaseSendManifestResponse();
    return message;
  },
};

messageTypeRegistry.set(SendManifestResponse.$type, SendManifestResponse);

function createBaseServiceLogsRequest(): ServiceLogsRequest {
  return {
    $type: 'akash.provider.lease.v1.ServiceLogsRequest',
    leaseId: undefined,
    services: [],
    lines: 0,
  };
}

export const ServiceLogsRequest = {
  $type: 'akash.provider.lease.v1.ServiceLogsRequest' as const,

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
    if (message.lines !== 0) {
      writer.uint32(24).uint32(message.lines);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogsRequest {
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lines = reader.uint32();
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
      $type: ServiceLogsRequest.$type,
      leaseId: isSet(object.leaseId)
        ? LeaseID.fromJSON(object.leaseId)
        : undefined,
      services: globalThis.Array.isArray(object?.services)
        ? object.services.map((e: any) => globalThis.String(e))
        : [],
      lines: isSet(object.lines) ? globalThis.Number(object.lines) : 0,
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
    if (message.lines !== 0) {
      obj.lines = Math.round(message.lines);
    }
    return obj;
  },

  create(base?: DeepPartial<ServiceLogsRequest>): ServiceLogsRequest {
    return ServiceLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceLogsRequest>): ServiceLogsRequest {
    const message = createBaseServiceLogsRequest();
    message.leaseId =
      object.leaseId !== undefined && object.leaseId !== null
        ? LeaseID.fromPartial(object.leaseId)
        : undefined;
    message.services = object.services?.map((e) => e) || [];
    message.lines = object.lines ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ServiceLogsRequest.$type, ServiceLogsRequest);

function createBaseServiceLogs(): ServiceLogs {
  return {
    $type: 'akash.provider.lease.v1.ServiceLogs',
    name: '',
    logs: new Uint8Array(0),
  };
}

export const ServiceLogs = {
  $type: 'akash.provider.lease.v1.ServiceLogs' as const,

  encode(
    message: ServiceLogs,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
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
      $type: ServiceLogs.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      logs: isSet(object.logs)
        ? bytesFromBase64(object.logs)
        : new Uint8Array(0),
    };
  },

  toJSON(message: ServiceLogs): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.logs.length !== 0) {
      obj.logs = base64FromBytes(message.logs);
    }
    return obj;
  },

  create(base?: DeepPartial<ServiceLogs>): ServiceLogs {
    return ServiceLogs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceLogs>): ServiceLogs {
    const message = createBaseServiceLogs();
    message.name = object.name ?? '';
    message.logs = object.logs ?? new Uint8Array(0);
    return message;
  },
};

messageTypeRegistry.set(ServiceLogs.$type, ServiceLogs);

function createBaseServiceLogsResponse(): ServiceLogsResponse {
  return { $type: 'akash.provider.lease.v1.ServiceLogsResponse', services: [] };
}

export const ServiceLogsResponse = {
  $type: 'akash.provider.lease.v1.ServiceLogsResponse' as const,

  encode(
    message: ServiceLogsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.services) {
      ServiceLogs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogsResponse {
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

          message.services.push(ServiceLogs.decode(reader, reader.uint32()));
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
      $type: ServiceLogsResponse.$type,
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

  create(base?: DeepPartial<ServiceLogsResponse>): ServiceLogsResponse {
    return ServiceLogsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceLogsResponse>): ServiceLogsResponse {
    const message = createBaseServiceLogsResponse();
    message.services =
      object.services?.map((e) => ServiceLogs.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ServiceLogsResponse.$type, ServiceLogsResponse);

function createBaseShellRequest(): ShellRequest {
  return { $type: 'akash.provider.lease.v1.ShellRequest', leaseId: undefined };
}

export const ShellRequest = {
  $type: 'akash.provider.lease.v1.ShellRequest' as const,

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
      $type: ShellRequest.$type,
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

  create(base?: DeepPartial<ShellRequest>): ShellRequest {
    return ShellRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ShellRequest>): ShellRequest {
    const message = createBaseShellRequest();
    message.leaseId =
      object.leaseId !== undefined && object.leaseId !== null
        ? LeaseID.fromPartial(object.leaseId)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ShellRequest.$type, ShellRequest);

function createBaseServiceStatusRequest(): ServiceStatusRequest {
  return {
    $type: 'akash.provider.lease.v1.ServiceStatusRequest',
    leaseId: undefined,
    services: [],
  };
}

export const ServiceStatusRequest = {
  $type: 'akash.provider.lease.v1.ServiceStatusRequest' as const,

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
      $type: ServiceStatusRequest.$type,
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

  create(base?: DeepPartial<ServiceStatusRequest>): ServiceStatusRequest {
    return ServiceStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceStatusRequest>): ServiceStatusRequest {
    const message = createBaseServiceStatusRequest();
    message.leaseId =
      object.leaseId !== undefined && object.leaseId !== null
        ? LeaseID.fromPartial(object.leaseId)
        : undefined;
    message.services = object.services?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ServiceStatusRequest.$type, ServiceStatusRequest);

function createBaseServiceStatusResponse(): ServiceStatusResponse {
  return {
    $type: 'akash.provider.lease.v1.ServiceStatusResponse',
    services: [],
  };
}

export const ServiceStatusResponse = {
  $type: 'akash.provider.lease.v1.ServiceStatusResponse' as const,

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

          message.services.push(ServiceStatus.decode(reader, reader.uint32()));
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
      $type: ServiceStatusResponse.$type,
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

  create(base?: DeepPartial<ServiceStatusResponse>): ServiceStatusResponse {
    return ServiceStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ServiceStatusResponse>,
  ): ServiceStatusResponse {
    const message = createBaseServiceStatusResponse();
    message.services =
      object.services?.map((e) => ServiceStatus.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ServiceStatusResponse.$type, ServiceStatusResponse);

/** LeaseRPC defines the RPC server for lease control */
export type LeaseRPCService = typeof LeaseRPCService;
export const LeaseRPCService = {
  /** SendManifest sends manifest to the provider */
  sendManifest: {
    path: '/akash.provider.lease.v1.LeaseRPC/SendManifest',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SendManifestRequest) =>
      Buffer.from(SendManifestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SendManifestRequest.decode(value),
    responseSerialize: (value: SendManifestResponse) =>
      Buffer.from(SendManifestResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SendManifestResponse.decode(value),
  },
  /**
   * ServiceStatus
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  serviceStatus: {
    path: '/akash.provider.lease.v1.LeaseRPC/ServiceStatus',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ServiceStatusRequest) =>
      Buffer.from(ServiceStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServiceStatusRequest.decode(value),
    responseSerialize: (value: ServiceStatusResponse) =>
      Buffer.from(ServiceStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceStatusResponse.decode(value),
  },
  /**
   * StreamServiceStatus
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamServiceStatus: {
    path: '/akash.provider.lease.v1.LeaseRPC/StreamServiceStatus',
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: ServiceStatusRequest) =>
      Buffer.from(ServiceStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServiceStatusRequest.decode(value),
    responseSerialize: (value: ServiceStatusResponse) =>
      Buffer.from(ServiceStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceStatusResponse.decode(value),
  },
  /**
   * ServiceLogs
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  serviceLogs: {
    path: '/akash.provider.lease.v1.LeaseRPC/ServiceLogs',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ServiceLogsRequest) =>
      Buffer.from(ServiceLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServiceLogsRequest.decode(value),
    responseSerialize: (value: ServiceLogsResponse) =>
      Buffer.from(ServiceLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceLogsResponse.decode(value),
  },
  /**
   * StreamServiceLogs
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamServiceLogs: {
    path: '/akash.provider.lease.v1.LeaseRPC/StreamServiceLogs',
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: ServiceLogsRequest) =>
      Buffer.from(ServiceLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServiceLogsRequest.decode(value),
    responseSerialize: (value: ServiceLogsResponse) =>
      Buffer.from(ServiceLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceLogsResponse.decode(value),
  },
} as const;

export interface LeaseRPCServer extends UntypedServiceImplementation {
  /** SendManifest sends manifest to the provider */
  sendManifest: handleUnaryCall<SendManifestRequest, SendManifestResponse>;
  /**
   * ServiceStatus
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  serviceStatus: handleUnaryCall<ServiceStatusRequest, ServiceStatusResponse>;
  /**
   * StreamServiceStatus
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamServiceStatus: handleServerStreamingCall<
    ServiceStatusRequest,
    ServiceStatusResponse
  >;
  /**
   * ServiceLogs
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  serviceLogs: handleUnaryCall<ServiceLogsRequest, ServiceLogsResponse>;
  /**
   * StreamServiceLogs
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamServiceLogs: handleServerStreamingCall<
    ServiceLogsRequest,
    ServiceLogsResponse
  >;
}

export interface LeaseRPCClient extends Client {
  /** SendManifest sends manifest to the provider */
  sendManifest(
    request: SendManifestRequest,
    callback: (
      error: ServiceError | null,
      response: SendManifestResponse,
    ) => void,
  ): ClientUnaryCall;
  sendManifest(
    request: SendManifestRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SendManifestResponse,
    ) => void,
  ): ClientUnaryCall;
  sendManifest(
    request: SendManifestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SendManifestResponse,
    ) => void,
  ): ClientUnaryCall;
  /**
   * ServiceStatus
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  serviceStatus(
    request: ServiceStatusRequest,
    callback: (
      error: ServiceError | null,
      response: ServiceStatusResponse,
    ) => void,
  ): ClientUnaryCall;
  serviceStatus(
    request: ServiceStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ServiceStatusResponse,
    ) => void,
  ): ClientUnaryCall;
  serviceStatus(
    request: ServiceStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ServiceStatusResponse,
    ) => void,
  ): ClientUnaryCall;
  /**
   * StreamServiceStatus
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamServiceStatus(
    request: ServiceStatusRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ServiceStatusResponse>;
  streamServiceStatus(
    request: ServiceStatusRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ServiceStatusResponse>;
  /**
   * ServiceLogs
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  serviceLogs(
    request: ServiceLogsRequest,
    callback: (
      error: ServiceError | null,
      response: ServiceLogsResponse,
    ) => void,
  ): ClientUnaryCall;
  serviceLogs(
    request: ServiceLogsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ServiceLogsResponse,
    ) => void,
  ): ClientUnaryCall;
  serviceLogs(
    request: ServiceLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ServiceLogsResponse,
    ) => void,
  ): ClientUnaryCall;
  /**
   * StreamServiceLogs
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  streamServiceLogs(
    request: ServiceLogsRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ServiceLogsResponse>;
  streamServiceLogs(
    request: ServiceLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ServiceLogsResponse>;
}

export const LeaseRPCClient = makeGenericClientConstructor(
  LeaseRPCService,
  'akash.provider.lease.v1.LeaseRPC',
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): LeaseRPCClient;
  service: typeof LeaseRPCService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
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
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
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
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
