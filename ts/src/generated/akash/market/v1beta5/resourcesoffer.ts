/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Resources } from "../../base/resources/v1beta4/resources";

export const protobufPackage = "akash.market.v1beta5";

/**
 * ResourceOffer describes resources that provider is offering
 * for deployment
 */
export interface ResourceOffer {
    resources: Resources | undefined;
    count: number;
}

function createBaseResourceOffer(): ResourceOffer {
    return { resources: undefined, count: 0 };
}

export const ResourceOffer = {
    encode(
        message: ResourceOffer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOffer {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceOffer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.resources = Resources.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.count = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ResourceOffer {
        return {
            resources: isSet(object.resources)
                ? Resources.fromJSON(object.resources)
                : undefined,
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
        };
    },

    toJSON(message: ResourceOffer): unknown {
        const obj: any = {};
        if (message.resources !== undefined) {
            obj.resources = Resources.toJSON(message.resources);
        }
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ResourceOffer>, I>>(
        base?: I,
    ): ResourceOffer {
        return ResourceOffer.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ResourceOffer>, I>>(
        object: I,
    ): ResourceOffer {
        const message = createBaseResourceOffer();
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.count = object.count ?? 0;
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
