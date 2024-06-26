/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { GroupSpec } from "../../deployment/v1beta3/groupspec";

/** OrderID stores owner and all other seq numbers */
export interface OrderID {
  $type: "akash.market.v1beta4.OrderID";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
}

/** Order stores orderID, state of order and other details */
export interface Order {
  $type: "akash.market.v1beta4.Order";
  orderId: OrderID | undefined;
  state: Order_State;
  spec: GroupSpec | undefined;
  createdAt: Long;
}

/** State is an enum which refers to state of order */
export enum Order_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - OrderOpen denotes state for order open */
  open = 1,
  /** active - OrderMatched denotes state for order matched */
  active = 2,
  /** closed - OrderClosed denotes state for order lost */
  closed = 3,
  UNRECOGNIZED = -1,
}

export function order_StateFromJSON(object: any): Order_State {
  switch (object) {
    case 0:
    case "invalid":
      return Order_State.invalid;
    case 1:
    case "open":
      return Order_State.open;
    case 2:
    case "active":
      return Order_State.active;
    case 3:
    case "closed":
      return Order_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_State.UNRECOGNIZED;
  }
}

export function order_StateToJSON(object: Order_State): string {
  switch (object) {
    case Order_State.invalid:
      return "invalid";
    case Order_State.open:
      return "open";
    case Order_State.active:
      return "active";
    case Order_State.closed:
      return "closed";
    case Order_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
  $type: "akash.market.v1beta4.OrderFilters";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  state: string;
}

function createBaseOrderID(): OrderID {
  return {
    $type: "akash.market.v1beta4.OrderID",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
  };
}

export const OrderID = {
  $type: "akash.market.v1beta4.OrderID" as const,

  encode(
    message: OrderID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderID {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderID();
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

          message.dseq = reader.uint64() as Long;
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderID {
    return {
      $type: OrderID.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
    };
  },

  toJSON(message: OrderID): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<OrderID>): OrderID {
    return OrderID.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrderID>): OrderID {
    const message = createBaseOrderID();
    message.owner = object.owner ?? "";
    message.dseq =
      object.dseq !== undefined && object.dseq !== null
        ? Long.fromValue(object.dseq)
        : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    return message;
  },
};

messageTypeRegistry.set(OrderID.$type, OrderID);

function createBaseOrder(): Order {
  return {
    $type: "akash.market.v1beta4.Order",
    orderId: undefined,
    state: 0,
    spec: undefined,
    createdAt: Long.ZERO,
  };
}

export const Order = {
  $type: "akash.market.v1beta4.Order" as const,

  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== undefined) {
      OrderID.encode(message.orderId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.spec !== undefined) {
      GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = OrderID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spec = GroupSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.createdAt = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      $type: Order.$type,
      orderId: isSet(object.orderId)
        ? OrderID.fromJSON(object.orderId)
        : undefined,
      state: isSet(object.state) ? order_StateFromJSON(object.state) : 0,
      spec: isSet(object.spec) ? GroupSpec.fromJSON(object.spec) : undefined,
      createdAt: isSet(object.createdAt)
        ? Long.fromValue(object.createdAt)
        : Long.ZERO,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.orderId !== undefined) {
      obj.orderId = OrderID.toJSON(message.orderId);
    }
    if (message.state !== 0) {
      obj.state = order_StateToJSON(message.state);
    }
    if (message.spec !== undefined) {
      obj.spec = GroupSpec.toJSON(message.spec);
    }
    if (!message.createdAt.equals(Long.ZERO)) {
      obj.createdAt = (message.createdAt || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.orderId =
      object.orderId !== undefined && object.orderId !== null
        ? OrderID.fromPartial(object.orderId)
        : undefined;
    message.state = object.state ?? 0;
    message.spec =
      object.spec !== undefined && object.spec !== null
        ? GroupSpec.fromPartial(object.spec)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? Long.fromValue(object.createdAt)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Order.$type, Order);

function createBaseOrderFilters(): OrderFilters {
  return {
    $type: "akash.market.v1beta4.OrderFilters",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    state: "",
  };
}

export const OrderFilters = {
  $type: "akash.market.v1beta4.OrderFilters" as const,

  encode(
    message: OrderFilters,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.dseq);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderFilters {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.dseq = reader.uint64() as Long;
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
      reader.skipType(tag & 7);
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
