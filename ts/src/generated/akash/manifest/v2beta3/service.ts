/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Resources } from "../../base/resources/v1beta4/resources";
import { ServiceExpose } from "./serviceexpose";

export const protobufPackage = "akash.manifest.v2beta3";

/** StorageParams */
export interface StorageParams {
    name: string;
    mount: string;
    readOnly: boolean;
}

/** ServiceParams */
export interface ServiceParams {
    storage: StorageParams[];
    credentials: ImageCredentials | undefined;
}

/** Credentials to fetch image from registry */
export interface ImageCredentials {
    host: string;
    email: string;
    username: string;
    password: string;
}

/** Service stores name, image, args, env, unit, count and expose list of service */
export interface Service {
    name: string;
    image: string;
    command: string[];
    args: string[];
    env: string[];
    resources: Resources | undefined;
    count: number;
    expose: ServiceExpose[];
    params: ServiceParams | undefined;
    credentials: ImageCredentials | undefined;
}

function createBaseStorageParams(): StorageParams {
    return { name: "", mount: "", readOnly: false };
}

export const StorageParams = {
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

    create<I extends Exact<DeepPartial<StorageParams>, I>>(
        base?: I,
    ): StorageParams {
        return StorageParams.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<StorageParams>, I>>(
        object: I,
    ): StorageParams {
        const message = createBaseStorageParams();
        message.name = object.name ?? "";
        message.mount = object.mount ?? "";
        message.readOnly = object.readOnly ?? false;
        return message;
    },
};

function createBaseServiceParams(): ServiceParams {
    return { storage: [], credentials: undefined };
}

export const ServiceParams = {
    encode(
        message: ServiceParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.storage) {
            StorageParams.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.credentials !== undefined) {
            ImageCredentials.encode(
                message.credentials,
                writer.uint32(82).fork(),
            ).ldelim();
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
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.credentials = ImageCredentials.decode(
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

    fromJSON(object: any): ServiceParams {
        return {
            storage: globalThis.Array.isArray(object?.storage)
                ? object.storage.map((e: any) => StorageParams.fromJSON(e))
                : [],
            credentials: isSet(object.credentials)
                ? ImageCredentials.fromJSON(object.credentials)
                : undefined,
        };
    },

    toJSON(message: ServiceParams): unknown {
        const obj: any = {};
        if (message.storage?.length) {
            obj.storage = message.storage.map((e) => StorageParams.toJSON(e));
        }
        if (message.credentials !== undefined) {
            obj.credentials = ImageCredentials.toJSON(message.credentials);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ServiceParams>, I>>(
        base?: I,
    ): ServiceParams {
        return ServiceParams.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ServiceParams>, I>>(
        object: I,
    ): ServiceParams {
        const message = createBaseServiceParams();
        message.storage =
            object.storage?.map((e) => StorageParams.fromPartial(e)) || [];
        message.credentials =
            object.credentials !== undefined && object.credentials !== null
                ? ImageCredentials.fromPartial(object.credentials)
                : undefined;
        return message;
    },
};

function createBaseImageCredentials(): ImageCredentials {
    return { host: "", email: "", username: "", password: "" };
}

export const ImageCredentials = {
    encode(
        message: ImageCredentials,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageCredentials {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseImageCredentials();
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

    fromJSON(object: any): ImageCredentials {
        return {
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

    toJSON(message: ImageCredentials): unknown {
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

    create<I extends Exact<DeepPartial<ImageCredentials>, I>>(
        base?: I,
    ): ImageCredentials {
        return ImageCredentials.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ImageCredentials>, I>>(
        object: I,
    ): ImageCredentials {
        const message = createBaseImageCredentials();
        message.host = object.host ?? "";
        message.email = object.email ?? "";
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        return message;
    },
};

function createBaseService(): Service {
    return {
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
            ImageCredentials.encode(
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

                    message.credentials = ImageCredentials.decode(
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
                ? ImageCredentials.fromJSON(object.credentials)
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
            obj.credentials = ImageCredentials.toJSON(message.credentials);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Service>, I>>(base?: I): Service {
        return Service.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
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
                ? ImageCredentials.fromPartial(object.credentials)
                : undefined;
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
