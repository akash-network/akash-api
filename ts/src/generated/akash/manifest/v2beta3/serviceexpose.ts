/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ServiceExposeHTTPOptions } from "./httpoptions";

export const protobufPackage = "akash.manifest.v2beta3";

/** ServiceExpose stores exposed ports and hosts details */
export interface ServiceExpose {
    /** port on the container */
    port: number;
    /** port on the service definition */
    externalPort: number;
    proto: string;
    service: string;
    global: boolean;
    hosts: string[];
    httpOptions: ServiceExposeHTTPOptions | undefined;
    /** The name of the IP address associated with this, if any */
    ip: string;
    /** The sequence number of the associated endpoint in the on-chain data */
    endpointSequenceNumber: number;
}

function createBaseServiceExpose(): ServiceExpose {
    return {
        port: 0,
        externalPort: 0,
        proto: "",
        service: "",
        global: false,
        hosts: [],
        httpOptions: undefined,
        ip: "",
        endpointSequenceNumber: 0,
    };
}

export const ServiceExpose = {
    encode(
        message: ServiceExpose,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).uint32(message.port);
        }
        if (message.externalPort !== 0) {
            writer.uint32(16).uint32(message.externalPort);
        }
        if (message.proto !== "") {
            writer.uint32(26).string(message.proto);
        }
        if (message.service !== "") {
            writer.uint32(34).string(message.service);
        }
        if (message.global !== false) {
            writer.uint32(40).bool(message.global);
        }
        for (const v of message.hosts) {
            writer.uint32(50).string(v!);
        }
        if (message.httpOptions !== undefined) {
            ServiceExposeHTTPOptions.encode(
                message.httpOptions,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.ip !== "") {
            writer.uint32(66).string(message.ip);
        }
        if (message.endpointSequenceNumber !== 0) {
            writer.uint32(72).uint32(message.endpointSequenceNumber);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceExpose {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceExpose();
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

                    message.proto = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.service = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.global = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.hosts.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.httpOptions = ServiceExposeHTTPOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.ip = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.endpointSequenceNumber = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ServiceExpose {
        return {
            port: isSet(object.port) ? globalThis.Number(object.port) : 0,
            externalPort: isSet(object.externalPort)
                ? globalThis.Number(object.externalPort)
                : 0,
            proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
            service: isSet(object.service)
                ? globalThis.String(object.service)
                : "",
            global: isSet(object.global)
                ? globalThis.Boolean(object.global)
                : false,
            hosts: globalThis.Array.isArray(object?.hosts)
                ? object.hosts.map((e: any) => globalThis.String(e))
                : [],
            httpOptions: isSet(object.httpOptions)
                ? ServiceExposeHTTPOptions.fromJSON(object.httpOptions)
                : undefined,
            ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
            endpointSequenceNumber: isSet(object.endpointSequenceNumber)
                ? globalThis.Number(object.endpointSequenceNumber)
                : 0,
        };
    },

    toJSON(message: ServiceExpose): unknown {
        const obj: any = {};
        if (message.port !== 0) {
            obj.port = Math.round(message.port);
        }
        if (message.externalPort !== 0) {
            obj.externalPort = Math.round(message.externalPort);
        }
        if (message.proto !== "") {
            obj.proto = message.proto;
        }
        if (message.service !== "") {
            obj.service = message.service;
        }
        if (message.global !== false) {
            obj.global = message.global;
        }
        if (message.hosts?.length) {
            obj.hosts = message.hosts;
        }
        if (message.httpOptions !== undefined) {
            obj.httpOptions = ServiceExposeHTTPOptions.toJSON(
                message.httpOptions,
            );
        }
        if (message.ip !== "") {
            obj.ip = message.ip;
        }
        if (message.endpointSequenceNumber !== 0) {
            obj.endpointSequenceNumber = Math.round(
                message.endpointSequenceNumber,
            );
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceExpose>, I>>(
        base?: I,
    ): ServiceExpose {
        return ServiceExpose.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceExpose>, I>>(
        object: I,
    ): ServiceExpose {
        const message = createBaseServiceExpose();
        message.port = object.port ?? 0;
        message.externalPort = object.externalPort ?? 0;
        message.proto = object.proto ?? "";
        message.service = object.service ?? "";
        message.global = object.global ?? false;
        message.hosts = object.hosts?.map((e) => e) || [];
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? ServiceExposeHTTPOptions.fromPartial(object.httpOptions)
                : undefined;
        message.ip = object.ip ?? "";
        message.endpointSequenceNumber = object.endpointSequenceNumber ?? 0;
        return message;
    },
};

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
