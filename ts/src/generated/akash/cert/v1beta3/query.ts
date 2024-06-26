/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Certificate, CertificateFilter } from "./cert";

/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
  $type: "akash.cert.v1beta3.CertificateResponse";
  certificate: Certificate | undefined;
  serial: string;
}

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
  $type: "akash.cert.v1beta3.QueryCertificatesRequest";
  filter: CertificateFilter | undefined;
  pagination: PageRequest | undefined;
}

/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
  $type: "akash.cert.v1beta3.QueryCertificatesResponse";
  certificates: CertificateResponse[];
  pagination: PageResponse | undefined;
}

function createBaseCertificateResponse(): CertificateResponse {
  return {
    $type: "akash.cert.v1beta3.CertificateResponse",
    certificate: undefined,
    serial: "",
  };
}

export const CertificateResponse = {
  $type: "akash.cert.v1beta3.CertificateResponse" as const,

  encode(
    message: CertificateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificate = Certificate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serial = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CertificateResponse {
    return {
      $type: CertificateResponse.$type,
      certificate: isSet(object.certificate)
        ? Certificate.fromJSON(object.certificate)
        : undefined,
      serial: isSet(object.serial) ? globalThis.String(object.serial) : "",
    };
  },

  toJSON(message: CertificateResponse): unknown {
    const obj: any = {};
    if (message.certificate !== undefined) {
      obj.certificate = Certificate.toJSON(message.certificate);
    }
    if (message.serial !== "") {
      obj.serial = message.serial;
    }
    return obj;
  },

  create(base?: DeepPartial<CertificateResponse>): CertificateResponse {
    return CertificateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CertificateResponse>): CertificateResponse {
    const message = createBaseCertificateResponse();
    message.certificate =
      object.certificate !== undefined && object.certificate !== null
        ? Certificate.fromPartial(object.certificate)
        : undefined;
    message.serial = object.serial ?? "";
    return message;
  },
};

messageTypeRegistry.set(CertificateResponse.$type, CertificateResponse);

function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return {
    $type: "akash.cert.v1beta3.QueryCertificatesRequest",
    filter: undefined,
    pagination: undefined,
  };
}

export const QueryCertificatesRequest = {
  $type: "akash.cert.v1beta3.QueryCertificatesRequest" as const,

  encode(
    message: QueryCertificatesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filter !== undefined) {
      CertificateFilter.encode(
        message.filter,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCertificatesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = CertificateFilter.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryCertificatesRequest {
    return {
      $type: QueryCertificatesRequest.$type,
      filter: isSet(object.filter)
        ? CertificateFilter.fromJSON(object.filter)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryCertificatesRequest): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = CertificateFilter.toJSON(message.filter);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(
    base?: DeepPartial<QueryCertificatesRequest>,
  ): QueryCertificatesRequest {
    return QueryCertificatesRequest.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<QueryCertificatesRequest>,
  ): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? CertificateFilter.fromPartial(object.filter)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryCertificatesRequest.$type,
  QueryCertificatesRequest,
);

function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return {
    $type: "akash.cert.v1beta3.QueryCertificatesResponse",
    certificates: [],
    pagination: undefined,
  };
}

export const QueryCertificatesResponse = {
  $type: "akash.cert.v1beta3.QueryCertificatesResponse" as const,

  encode(
    message: QueryCertificatesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.certificates) {
      CertificateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryCertificatesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificates.push(
            CertificateResponse.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryCertificatesResponse {
    return {
      $type: QueryCertificatesResponse.$type,
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => CertificateResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) =>
        CertificateResponse.toJSON(e),
      );
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(
    base?: DeepPartial<QueryCertificatesResponse>,
  ): QueryCertificatesResponse {
    return QueryCertificatesResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<QueryCertificatesResponse>,
  ): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates =
      object.certificates?.map((e) => CertificateResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryCertificatesResponse.$type,
  QueryCertificatesResponse,
);

/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  Certificates(
    request: QueryCertificatesRequest,
  ): Promise<QueryCertificatesResponse>;
}

export const QueryServiceName = "akash.cert.v1beta3.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Certificates = this.Certificates.bind(this);
  }
  Certificates(
    request: QueryCertificatesRequest,
  ): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Certificates", data);
    return promise.then((data) =>
      QueryCertificatesResponse.decode(_m0.Reader.create(data)),
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
