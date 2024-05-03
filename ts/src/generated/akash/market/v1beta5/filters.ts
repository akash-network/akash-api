// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: akash/market/v1beta5/filters.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { messageTypeRegistry } from "../../../typeRegistry";

/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  $type: "akash.market.v1beta5.BidFilters";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
  $type: "akash.market.v1beta5.OrderFilters";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  state: string;
}

function createBaseBidFilters(): BidFilters {
  return {
    $type: "akash.market.v1beta5.BidFilters",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: "",
  };
}

export const BidFilters: MessageFns<
  BidFilters,
  "akash.market.v1beta5.BidFilters"
> = {
  $type: "akash.market.v1beta5.BidFilters" as const,

  encode(
    message: BidFilters,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.dseq.toString());
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BidFilters {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();
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
          if (tag !== 16) {
            break;
          }

          message.dseq = Long.fromString(reader.uint64().toString(), true);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gseq = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.oseq = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.state = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BidFilters {
    return {
      $type: BidFilters.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
      provider: isSet(object.provider)
        ? globalThis.String(object.provider)
        : "",
      state: isSet(object.state) ? globalThis.String(object.state) : "",
    };
  },

  toJSON(message: BidFilters): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (!message.dseq.equals(Long.UZERO)) {
      obj.dseq = (message.dseq || Long.UZERO).toString();
    }
    if (message.gseq !== 0) {
      obj.gseq = Math.round(message.gseq);
    }
    if (message.oseq !== 0) {
      obj.oseq = Math.round(message.oseq);
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    return obj;
  },

  create(base?: DeepPartial<BidFilters>): BidFilters {
    return BidFilters.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BidFilters>): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq =
      object.dseq !== undefined && object.dseq !== null
        ? Long.fromValue(object.dseq)
        : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
};

messageTypeRegistry.set(BidFilters.$type, BidFilters);

function createBaseOrderFilters(): OrderFilters {
  return {
    $type: "akash.market.v1beta5.OrderFilters",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    state: "",
  };
}

export const OrderFilters: MessageFns<
  OrderFilters,
  "akash.market.v1beta5.OrderFilters"
> = {
  $type: "akash.market.v1beta5.OrderFilters" as const,

  encode(
    message: OrderFilters,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.dseq.toString());
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OrderFilters {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderFilters();
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
          if (tag !== 16) {
            break;
          }

          message.dseq = Long.fromString(reader.uint64().toString(), true);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gseq = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.oseq = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.state = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderFilters {
    return {
      $type: OrderFilters.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
      state: isSet(object.state) ? globalThis.String(object.state) : "",
    };
  },

  toJSON(message: OrderFilters): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (!message.dseq.equals(Long.UZERO)) {
      obj.dseq = (message.dseq || Long.UZERO).toString();
    }
    if (message.gseq !== 0) {
      obj.gseq = Math.round(message.gseq);
    }
    if (message.oseq !== 0) {
      obj.oseq = Math.round(message.oseq);
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    return obj;
  },

  create(base?: DeepPartial<OrderFilters>): OrderFilters {
    return OrderFilters.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrderFilters>): OrderFilters {
    const message = createBaseOrderFilters();
    message.owner = object.owner ?? "";
    message.dseq =
      object.dseq !== undefined && object.dseq !== null
        ? Long.fromValue(object.dseq)
        : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.state = object.state ?? "";
    return message;
  },
};

messageTypeRegistry.set(OrderFilters.$type, OrderFilters);

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
