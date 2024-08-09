/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { PlacementRequirements } from "../../base/attributes/v1/attribute";
import { ResourceUnit } from "./resourceunit";

export const protobufPackage = "akash.deployment.v1beta4";

/** Spec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements: PlacementRequirements | undefined;
    resources: ResourceUnit[];
}

function createBaseGroupSpec(): GroupSpec {
    return { name: "", requirements: undefined, resources: [] };
}

export const GroupSpec = {
    encode(
        message: GroupSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            PlacementRequirements.encode(
                message.requirements,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        for (const v of message.resources) {
            ResourceUnit.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupSpec();
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

                    message.requirements = PlacementRequirements.decode(
                        reader,
                        reader.uint32(),
                    );
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.resources.push(
                        ResourceUnit.decode(reader, reader.uint32()),
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

    fromJSON(object: any): GroupSpec {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            requirements: isSet(object.requirements)
                ? PlacementRequirements.fromJSON(object.requirements)
                : undefined,
            resources: globalThis.Array.isArray(object?.resources)
                ? object.resources.map((e: any) => ResourceUnit.fromJSON(e))
                : [],
        };
    },

    toJSON(message: GroupSpec): unknown {
        const obj: any = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.requirements !== undefined) {
            obj.requirements = PlacementRequirements.toJSON(
                message.requirements,
            );
        }
        if (message.resources?.length) {
            obj.resources = message.resources.map((e) =>
                ResourceUnit.toJSON(e),
            );
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<GroupSpec>, I>>(base?: I): GroupSpec {
        return GroupSpec.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<GroupSpec>, I>>(
        object: I,
    ): GroupSpec {
        const message = createBaseGroupSpec();
        message.name = object.name ?? "";
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? PlacementRequirements.fromPartial(object.requirements)
                : undefined;
        message.resources =
            object.resources?.map((e) => ResourceUnit.fromPartial(e)) || [];
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
