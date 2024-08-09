/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Resources } from "../../base/v1beta3/resources";
import { ServiceExpose } from "./serviceexpose";

/** StorageParams */
export interface StorageParams {
    $type: "akash.manifest.v2beta2.StorageParams";
    name: string;
    mount: string;
    readOnly: boolean;
}

/** ServiceParams */
export interface ServiceParams {
    $type: "akash.manifest.v2beta2.ServiceParams";
    storage: StorageParams[];
}

/** Credentials to fetch image from registry */
export interface ServiceImageCredentials {
    $type: "akash.manifest.v2beta2.ServiceImageCredentials";
    host: string;
    email: string;
    username: string;
    password: string;
}

/** Service stores name, image, args, env, unit, count and expose list of service */
export interface Service {
    $type: "akash.manifest.v2beta2.Service";
    name: string;
    image: string;
    command: string[];
    args: string[];
    env: string[];
    resources: Resources | undefined;
    count: number;
    expose: ServiceExpose[];
    params: ServiceParams | undefined;
    credentials: ServiceImageCredentials | undefined;
}

function createBaseStorageParams(): StorageParams {
    return {
        $type: "akash.manifest.v2beta2.StorageParams",
        name: "",
        mount: "",
        readOnly: false,
    };
}

export const StorageParams = {
    $type: "akash.manifest.v2beta2.StorageParams" as const,

    encode(
        message: StorageParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.mount !== "") {
            writer.uint32(18).string(message.mount);
        }
        if (message.readOnly !== false) {
            writer.uint32(24).bool(message.readOnly);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageParams {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorageParams();
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

                    message.mount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.readOnly = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): StorageParams {
        return {
            $type: StorageParams.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            mount: isSet(object.mount) ? globalThis.String(object.mount) : "",
            readOnly: isSet(object.readOnly)
                ? globalThis.Boolean(object.readOnly)
                : false,
        };
    },

    toJSON(message: StorageParams): unknown {
        const obj: any = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.mount !== "") {
            obj.mount = message.mount;
        }
        if (message.readOnly !== false) {
            obj.readOnly = message.readOnly;
        }
        return obj;
    },

    create(base?: DeepPartial<StorageParams>): StorageParams {
        return StorageParams.fromPartial(base ?? {});
    },
    fromPartial(object: DeepPartial<StorageParams>): StorageParams {
        const message = createBaseStorageParams();
        message.name = object.name ?? "";
        message.mount = object.mount ?? "";
        message.readOnly = object.readOnly ?? false;
        return message;
    },
};

messageTypeRegistry.set(StorageParams.$type, StorageParams);

function createBaseServiceParams(): ServiceParams {
    return { $type: "akash.manifest.v2beta2.ServiceParams", storage: [] };
}

export const ServiceParams = {
    $type: "akash.manifest.v2beta2.ServiceParams" as const,

    encode(
        message: ServiceParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.storage) {
            StorageParams.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceParams {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.storage.push(
                        StorageParams.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ServiceParams {
        return {
            $type: ServiceParams.$type,
            storage: globalThis.Array.isArray(object?.storage)
                ? object.storage.map((e: any) => StorageParams.fromJSON(e))
                : [],
        };
    },

    toJSON(message: ServiceParams): unknown {
        const obj: any = {};
        if (message.storage?.length) {
            obj.storage = message.storage.map((e) => StorageParams.toJSON(e));
        }
        return obj;
    },

    create(base?: DeepPartial<ServiceParams>): ServiceParams {
        return ServiceParams.fromPartial(base ?? {});
    },
    fromPartial(object: DeepPartial<ServiceParams>): ServiceParams {
        const message = createBaseServiceParams();
        message.storage =
            object.storage?.map((e) => StorageParams.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ServiceParams.$type, ServiceParams);

function createBaseServiceImageCredentials(): ServiceImageCredentials {
    return {
        $type: "akash.manifest.v2beta2.ServiceImageCredentials",
        host: "",
        email: "",
        username: "",
        password: "",
    };
}

export const ServiceImageCredentials = {
    $type: "akash.manifest.v2beta2.ServiceImageCredentials" as const,

    encode(
        message: ServiceImageCredentials,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(34).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ServiceImageCredentials {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceImageCredentials();
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
                    if (tag !== 18) {
                        break;
                    }

                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.username = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.password = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ServiceImageCredentials {
        return {
            $type: ServiceImageCredentials.$type,
            host: isSet(object.host) ? globalThis.String(object.host) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            username: isSet(object.username)
                ? globalThis.String(object.username)
                : "",
            password: isSet(object.password)
                ? globalThis.String(object.password)
                : "",
        };
    },

    toJSON(message: ServiceImageCredentials): unknown {
        const obj: any = {};
        if (message.host !== "") {
            obj.host = message.host;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },

    create(
        base?: DeepPartial<ServiceImageCredentials>,
    ): ServiceImageCredentials {
        return ServiceImageCredentials.fromPartial(base ?? {});
    },
    fromPartial(
        object: DeepPartial<ServiceImageCredentials>,
    ): ServiceImageCredentials {
        const message = createBaseServiceImageCredentials();
        message.host = object.host ?? "";
        message.email = object.email ?? "";
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        return message;
    },
};

messageTypeRegistry.set(ServiceImageCredentials.$type, ServiceImageCredentials);

function createBaseService(): Service {
    return {
        $type: "akash.manifest.v2beta2.Service",
        name: "",
        image: "",
        command: [],
        args: [],
        env: [],
        resources: undefined,
        count: 0,
        expose: [],
        params: undefined,
        credentials: undefined,
    };
}

export const Service = {
    $type: "akash.manifest.v2beta2.Service" as const,

    encode(
        message: Service,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.image !== "") {
            writer.uint32(18).string(message.image);
        }
        for (const v of message.command) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.args) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.env) {
            writer.uint32(42).string(v!);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(56).uint32(message.count);
        }
        for (const v of message.expose) {
            ServiceExpose.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.params !== undefined) {
            ServiceParams.encode(
                message.params,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.credentials !== undefined) {
            ServiceImageCredentials.encode(
                message.credentials,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Service {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
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

                    message.image = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.command.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.args.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.env.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.resources = Resources.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.count = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.expose.push(
                        ServiceExpose.decode(reader, reader.uint32()),
                    );
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.params = ServiceParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.credentials = ServiceImageCredentials.decode(
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

    fromJSON(object: any): Service {
        return {
            $type: Service.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            image: isSet(object.image) ? globalThis.String(object.image) : "",
            command: globalThis.Array.isArray(object?.command)
                ? object.command.map((e: any) => globalThis.String(e))
                : [],
            args: globalThis.Array.isArray(object?.args)
                ? object.args.map((e: any) => globalThis.String(e))
                : [],
            env: globalThis.Array.isArray(object?.env)
                ? object.env.map((e: any) => globalThis.String(e))
                : [],
            resources: isSet(object.resources)
                ? Resources.fromJSON(object.resources)
                : undefined,
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
            expose: globalThis.Array.isArray(object?.expose)
                ? object.expose.map((e: any) => ServiceExpose.fromJSON(e))
                : [],
            params: isSet(object.params)
                ? ServiceParams.fromJSON(object.params)
                : undefined,
            credentials: isSet(object.credentials)
                ? ServiceImageCredentials.fromJSON(object.credentials)
                : undefined,
        };
    },

    toJSON(message: Service): unknown {
        const obj: any = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.image !== "") {
            obj.image = message.image;
        }
        if (message.command?.length) {
            obj.command = message.command;
        }
        if (message.args?.length) {
            obj.args = message.args;
        }
        if (message.env?.length) {
            obj.env = message.env;
        }
        if (message.resources !== undefined) {
            obj.resources = Resources.toJSON(message.resources);
        }
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if (message.expose?.length) {
            obj.expose = message.expose.map((e) => ServiceExpose.toJSON(e));
        }
        if (message.params !== undefined) {
            obj.params = ServiceParams.toJSON(message.params);
        }
        if (message.credentials !== undefined) {
            obj.credentials = ServiceImageCredentials.toJSON(
                message.credentials,
            );
        }
        return obj;
    },

    create(base?: DeepPartial<Service>): Service {
        return Service.fromPartial(base ?? {});
    },
    fromPartial(object: DeepPartial<Service>): Service {
        const message = createBaseService();
        message.name = object.name ?? "";
        message.image = object.image ?? "";
        message.command = object.command?.map((e) => e) || [];
        message.args = object.args?.map((e) => e) || [];
        message.env = object.env?.map((e) => e) || [];
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.count = object.count ?? 0;
        message.expose =
            object.expose?.map((e) => ServiceExpose.fromPartial(e)) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? ServiceParams.fromPartial(object.params)
                : undefined;
        message.credentials =
            object.credentials !== undefined && object.credentials !== null
                ? ServiceImageCredentials.fromPartial(object.credentials)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Service.$type, Service);

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
