// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: akash/market/v1beta5/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Lease } from "../v1/lease";
import { Bid } from "./bid";
import { Order } from "./order";
import { Params } from "./params";

/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
  $type: "akash.market.v1beta5.GenesisState";
  params: Params | undefined;
  orders: Order[];
  leases: Lease[];
  bids: Bid[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: "akash.market.v1beta5.GenesisState",
    params: undefined,
    orders: [],
    leases: [],
    bids: [],
  };
}

export const GenesisState: MessageFns<
  GenesisState,
  "akash.market.v1beta5.GenesisState"
> = {
  $type: "akash.market.v1beta5.GenesisState" as const,

  encode(
    message: GenesisState,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leases.push(Lease.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bids.push(Bid.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      orders: globalThis.Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      leases: globalThis.Array.isArray(object?.leases)
        ? object.leases.map((e: any) => Lease.fromJSON(e))
        : [],
      bids: globalThis.Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Bid.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    if (message.leases?.length) {
      obj.leases = message.leases.map((e) => Lease.toJSON(e));
    }
    if (message.bids?.length) {
      obj.bids = message.bids.map((e) => Bid.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map((e) => Lease.fromPartial(e)) || [];
    message.bids = object.bids?.map((e) => Bid.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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