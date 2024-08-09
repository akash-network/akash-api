/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../base/attributes/v1/attribute";

export const protobufPackage = "akash.audit.v1";

/** Provider stores owner auditor and attributes details */
export interface AuditedProvider {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}

/** Attributes */
export interface AuditedAttributesStore {
    attributes: Attribute[];
}

/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
    auditors: string[];
    owners: string[];
}

function createBaseAuditedProvider(): AuditedProvider {
    return { owner: "", auditor: "", attributes: [] };
}

export const AuditedProvider = {
    encode(
        message: AuditedProvider,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AuditedProvider {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuditedProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.auditor = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.attributes.push(
                        Attribute.decode(reader, reader.uint32()),
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

    fromJSON(object: any): AuditedProvider {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            auditor: isSet(object.auditor)
                ? globalThis.String(object.auditor)
                : "",
            attributes: globalThis.Array.isArray(object?.attributes)
                ? object.attributes.map((e: any) => Attribute.fromJSON(e))
                : [],
        };
    },

    toJSON(message: AuditedProvider): unknown {
        const obj: any = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.auditor !== "") {
            obj.auditor = message.auditor;
        }
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<AuditedProvider>, I>>(
        base?: I,
    ): AuditedProvider {
        return AuditedProvider.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<AuditedProvider>, I>>(
        object: I,
    ): AuditedProvider {
        const message = createBaseAuditedProvider();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes =
            object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        return message;
    },
};

function createBaseAuditedAttributesStore(): AuditedAttributesStore {
    return { attributes: [] };
}

export const AuditedAttributesStore = {
    encode(
        message: AuditedAttributesStore,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): AuditedAttributesStore {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuditedAttributesStore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.attributes.push(
                        Attribute.decode(reader, reader.uint32()),
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

    fromJSON(object: any): AuditedAttributesStore {
        return {
            attributes: globalThis.Array.isArray(object?.attributes)
                ? object.attributes.map((e: any) => Attribute.fromJSON(e))
                : [],
        };
    },

    toJSON(message: AuditedAttributesStore): unknown {
        const obj: any = {};
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<AuditedAttributesStore>, I>>(
        base?: I,
    ): AuditedAttributesStore {
        return AuditedAttributesStore.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<AuditedAttributesStore>, I>>(
        object: I,
    ): AuditedAttributesStore {
        const message = createBaseAuditedAttributesStore();
        message.attributes =
            object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        return message;
    },
};

function createBaseAttributesFilters(): AttributesFilters {
    return { auditors: [], owners: [] };
}

export const AttributesFilters = {
    encode(
        message: AttributesFilters,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.auditors) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.owners) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.auditors.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.owners.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): AttributesFilters {
        return {
            auditors: globalThis.Array.isArray(object?.auditors)
                ? object.auditors.map((e: any) => globalThis.String(e))
                : [],
            owners: globalThis.Array.isArray(object?.owners)
                ? object.owners.map((e: any) => globalThis.String(e))
                : [],
        };
    },

    toJSON(message: AttributesFilters): unknown {
        const obj: any = {};
        if (message.auditors?.length) {
            obj.auditors = message.auditors;
        }
        if (message.owners?.length) {
            obj.owners = message.owners;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<AttributesFilters>, I>>(
        base?: I,
    ): AttributesFilters {
        return AttributesFilters.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<AttributesFilters>, I>>(
        object: I,
    ): AttributesFilters {
        const message = createBaseAttributesFilters();
        message.auditors = object.auditors?.map((e) => e) || [];
        message.owners = object.owners?.map((e) => e) || [];
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
