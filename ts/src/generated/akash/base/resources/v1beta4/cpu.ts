// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: akash/base/resources/v1beta4/cpu.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Attribute } from "../../attributes/v1/attribute";
import { ResourceValue } from "./resourcevalue";

/** CPU stores resource units and cpu config attributes */
export interface CPU {
  $type: "akash.base.resources.v1beta4.CPU";
  units: ResourceValue | undefined;
  attributes: Attribute[];
}

function createBaseCPU(): CPU {
  return {
    $type: "akash.base.resources.v1beta4.CPU",
    units: undefined,
    attributes: [],
  };
}

export const CPU: MessageFns<CPU, "akash.base.resources.v1beta4.CPU"> = {
  $type: "akash.base.resources.v1beta4.CPU" as const,

  encode(
    message: CPU,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).join();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CPU {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.units = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPU {
    return {
      $type: CPU.$type,
      units: isSet(object.units)
        ? ResourceValue.fromJSON(object.units)
        : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPU): unknown {
    const obj: any = {};
    if (message.units !== undefined) {
      obj.units = ResourceValue.toJSON(message.units);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CPU>): CPU {
    return CPU.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    message.units =
      object.units !== undefined && object.units !== null
        ? ResourceValue.fromPartial(object.units)
        : undefined;
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CPU.$type, CPU);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T, V extends string> {
  readonly $type: V;
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}