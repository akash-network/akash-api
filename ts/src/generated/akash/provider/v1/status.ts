/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Quantity } from "../../../k8s.io/apimachinery/pkg/api/resource/generated";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Cluster } from "../../inventory/v1/cluster";

/** ResourceMetrics */
export interface ResourcesMetric {
  $type: "akash.provider.v1.ResourcesMetric";
  cpu: Quantity | undefined;
  memory: Quantity | undefined;
  gpu: Quantity | undefined;
  ephemeralStorage: Quantity | undefined;
  storage: { [key: string]: Quantity };
}

export interface ResourcesMetric_StorageEntry {
  $type: "akash.provider.v1.ResourcesMetric.StorageEntry";
  key: string;
  value: Quantity | undefined;
}

/** Leases */
export interface Leases {
  $type: "akash.provider.v1.Leases";
  active: number;
}

/** ReservationsMetric */
export interface ReservationsMetric {
  $type: "akash.provider.v1.ReservationsMetric";
  count: number;
  resources: ResourcesMetric | undefined;
}

/** Reservations */
export interface Reservations {
  $type: "akash.provider.v1.Reservations";
  pending: ReservationsMetric | undefined;
  active: ReservationsMetric | undefined;
}

/** Inventory */
export interface Inventory {
  $type: "akash.provider.v1.Inventory";
  cluster: Cluster | undefined;
  reservations: Reservations | undefined;
}

/** ClusterStatus */
export interface ClusterStatus {
  $type: "akash.provider.v1.ClusterStatus";
  leases: Leases | undefined;
  inventory: Inventory | undefined;
}

/** BidEngineStatus */
export interface BidEngineStatus {
  $type: "akash.provider.v1.BidEngineStatus";
  orders: number;
}

/** ManifestStatus */
export interface ManifestStatus {
  $type: "akash.provider.v1.ManifestStatus";
  deployments: number;
}

/** Status */
export interface Status {
  $type: "akash.provider.v1.Status";
  errors: string[];
  cluster: ClusterStatus | undefined;
  bidEngine: BidEngineStatus | undefined;
  manifest: ManifestStatus | undefined;
  publicHostnames: string[];
  timestamp: Date | undefined;
}

function createBaseResourcesMetric(): ResourcesMetric {
  return {
    $type: "akash.provider.v1.ResourcesMetric",
    cpu: undefined,
    memory: undefined,
    gpu: undefined,
    ephemeralStorage: undefined,
    storage: {},
  };
}

export const ResourcesMetric = {
  $type: "akash.provider.v1.ResourcesMetric" as const,

  encode(
    message: ResourcesMetric,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cpu !== undefined) {
      Quantity.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Quantity.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      Quantity.encode(message.gpu, writer.uint32(26).fork()).ldelim();
    }
    if (message.ephemeralStorage !== undefined) {
      Quantity.encode(
        message.ephemeralStorage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    Object.entries(message.storage).forEach(([key, value]) => {
      ResourcesMetric_StorageEntry.encode(
        {
          $type: "akash.provider.v1.ResourcesMetric.StorageEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesMetric {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cpu = Quantity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memory = Quantity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpu = Quantity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ephemeralStorage = Quantity.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = ResourcesMetric_StorageEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry5.value !== undefined) {
            message.storage[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourcesMetric {
    return {
      $type: ResourcesMetric.$type,
      cpu: isSet(object.cpu) ? Quantity.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory)
        ? Quantity.fromJSON(object.memory)
        : undefined,
      gpu: isSet(object.gpu) ? Quantity.fromJSON(object.gpu) : undefined,
      ephemeralStorage: isSet(object.ephemeralStorage)
        ? Quantity.fromJSON(object.ephemeralStorage)
        : undefined,
      storage: isObject(object.storage)
        ? Object.entries(object.storage).reduce<{ [key: string]: Quantity }>(
            (acc, [key, value]) => {
              acc[key] = Quantity.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: ResourcesMetric): unknown {
    const obj: any = {};
    if (message.cpu !== undefined) {
      obj.cpu = Quantity.toJSON(message.cpu);
    }
    if (message.memory !== undefined) {
      obj.memory = Quantity.toJSON(message.memory);
    }
    if (message.gpu !== undefined) {
      obj.gpu = Quantity.toJSON(message.gpu);
    }
    if (message.ephemeralStorage !== undefined) {
      obj.ephemeralStorage = Quantity.toJSON(message.ephemeralStorage);
    }
    if (message.storage) {
      const entries = Object.entries(message.storage);
      if (entries.length > 0) {
        obj.storage = {};
        entries.forEach(([k, v]) => {
          obj.storage[k] = Quantity.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<ResourcesMetric>): ResourcesMetric {
    return ResourcesMetric.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourcesMetric>): ResourcesMetric {
    const message = createBaseResourcesMetric();
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? Quantity.fromPartial(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Quantity.fromPartial(object.memory)
        : undefined;
    message.gpu =
      object.gpu !== undefined && object.gpu !== null
        ? Quantity.fromPartial(object.gpu)
        : undefined;
    message.ephemeralStorage =
      object.ephemeralStorage !== undefined && object.ephemeralStorage !== null
        ? Quantity.fromPartial(object.ephemeralStorage)
        : undefined;
    message.storage = Object.entries(object.storage ?? {}).reduce<{
      [key: string]: Quantity;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Quantity.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(ResourcesMetric.$type, ResourcesMetric);

function createBaseResourcesMetric_StorageEntry(): ResourcesMetric_StorageEntry {
  return {
    $type: "akash.provider.v1.ResourcesMetric.StorageEntry",
    key: "",
    value: undefined,
  };
}

export const ResourcesMetric_StorageEntry = {
  $type: "akash.provider.v1.ResourcesMetric.StorageEntry" as const,

  encode(
    message: ResourcesMetric_StorageEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Quantity.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResourcesMetric_StorageEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesMetric_StorageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Quantity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourcesMetric_StorageEntry {
    return {
      $type: ResourcesMetric_StorageEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Quantity.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ResourcesMetric_StorageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Quantity.toJSON(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ResourcesMetric_StorageEntry>,
  ): ResourcesMetric_StorageEntry {
    return ResourcesMetric_StorageEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ResourcesMetric_StorageEntry>,
  ): ResourcesMetric_StorageEntry {
    const message = createBaseResourcesMetric_StorageEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Quantity.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ResourcesMetric_StorageEntry.$type,
  ResourcesMetric_StorageEntry,
);

function createBaseLeases(): Leases {
  return { $type: "akash.provider.v1.Leases", active: 0 };
}

export const Leases = {
  $type: "akash.provider.v1.Leases" as const,

  encode(
    message: Leases,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.active !== 0) {
      writer.uint32(8).uint32(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Leases {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeases();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.active = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Leases {
    return {
      $type: Leases.$type,
      active: isSet(object.active) ? globalThis.Number(object.active) : 0,
    };
  },

  toJSON(message: Leases): unknown {
    const obj: any = {};
    if (message.active !== 0) {
      obj.active = Math.round(message.active);
    }
    return obj;
  },

  create(base?: DeepPartial<Leases>): Leases {
    return Leases.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Leases>): Leases {
    const message = createBaseLeases();
    message.active = object.active ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Leases.$type, Leases);

function createBaseReservationsMetric(): ReservationsMetric {
  return {
    $type: "akash.provider.v1.ReservationsMetric",
    count: 0,
    resources: undefined,
  };
}

export const ReservationsMetric = {
  $type: "akash.provider.v1.ReservationsMetric" as const,

  encode(
    message: ReservationsMetric,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    if (message.resources !== undefined) {
      ResourcesMetric.encode(
        message.resources,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReservationsMetric {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservationsMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resources = ResourcesMetric.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReservationsMetric {
    return {
      $type: ReservationsMetric.$type,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      resources: isSet(object.resources)
        ? ResourcesMetric.fromJSON(object.resources)
        : undefined,
    };
  },

  toJSON(message: ReservationsMetric): unknown {
    const obj: any = {};
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.resources !== undefined) {
      obj.resources = ResourcesMetric.toJSON(message.resources);
    }
    return obj;
  },

  create(base?: DeepPartial<ReservationsMetric>): ReservationsMetric {
    return ReservationsMetric.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReservationsMetric>): ReservationsMetric {
    const message = createBaseReservationsMetric();
    message.count = object.count ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? ResourcesMetric.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ReservationsMetric.$type, ReservationsMetric);

function createBaseReservations(): Reservations {
  return {
    $type: "akash.provider.v1.Reservations",
    pending: undefined,
    active: undefined,
  };
}

export const Reservations = {
  $type: "akash.provider.v1.Reservations" as const,

  encode(
    message: Reservations,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pending !== undefined) {
      ReservationsMetric.encode(
        message.pending,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      ReservationsMetric.encode(
        message.active,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reservations {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pending = ReservationsMetric.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.active = ReservationsMetric.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reservations {
    return {
      $type: Reservations.$type,
      pending: isSet(object.pending)
        ? ReservationsMetric.fromJSON(object.pending)
        : undefined,
      active: isSet(object.active)
        ? ReservationsMetric.fromJSON(object.active)
        : undefined,
    };
  },

  toJSON(message: Reservations): unknown {
    const obj: any = {};
    if (message.pending !== undefined) {
      obj.pending = ReservationsMetric.toJSON(message.pending);
    }
    if (message.active !== undefined) {
      obj.active = ReservationsMetric.toJSON(message.active);
    }
    return obj;
  },

  create(base?: DeepPartial<Reservations>): Reservations {
    return Reservations.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Reservations>): Reservations {
    const message = createBaseReservations();
    message.pending =
      object.pending !== undefined && object.pending !== null
        ? ReservationsMetric.fromPartial(object.pending)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? ReservationsMetric.fromPartial(object.active)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Reservations.$type, Reservations);

function createBaseInventory(): Inventory {
  return {
    $type: "akash.provider.v1.Inventory",
    cluster: undefined,
    reservations: undefined,
  };
}

export const Inventory = {
  $type: "akash.provider.v1.Inventory" as const,

  encode(
    message: Inventory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cluster !== undefined) {
      Cluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservations !== undefined) {
      Reservations.encode(
        message.reservations,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Inventory {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cluster = Cluster.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reservations = Reservations.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Inventory {
    return {
      $type: Inventory.$type,
      cluster: isSet(object.cluster)
        ? Cluster.fromJSON(object.cluster)
        : undefined,
      reservations: isSet(object.reservations)
        ? Reservations.fromJSON(object.reservations)
        : undefined,
    };
  },

  toJSON(message: Inventory): unknown {
    const obj: any = {};
    if (message.cluster !== undefined) {
      obj.cluster = Cluster.toJSON(message.cluster);
    }
    if (message.reservations !== undefined) {
      obj.reservations = Reservations.toJSON(message.reservations);
    }
    return obj;
  },

  create(base?: DeepPartial<Inventory>): Inventory {
    return Inventory.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Inventory>): Inventory {
    const message = createBaseInventory();
    message.cluster =
      object.cluster !== undefined && object.cluster !== null
        ? Cluster.fromPartial(object.cluster)
        : undefined;
    message.reservations =
      object.reservations !== undefined && object.reservations !== null
        ? Reservations.fromPartial(object.reservations)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Inventory.$type, Inventory);

function createBaseClusterStatus(): ClusterStatus {
  return {
    $type: "akash.provider.v1.ClusterStatus",
    leases: undefined,
    inventory: undefined,
  };
}

export const ClusterStatus = {
  $type: "akash.provider.v1.ClusterStatus" as const,

  encode(
    message: ClusterStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.leases !== undefined) {
      Leases.encode(message.leases, writer.uint32(10).fork()).ldelim();
    }
    if (message.inventory !== undefined) {
      Inventory.encode(message.inventory, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leases = Leases.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inventory = Inventory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClusterStatus {
    return {
      $type: ClusterStatus.$type,
      leases: isSet(object.leases) ? Leases.fromJSON(object.leases) : undefined,
      inventory: isSet(object.inventory)
        ? Inventory.fromJSON(object.inventory)
        : undefined,
    };
  },

  toJSON(message: ClusterStatus): unknown {
    const obj: any = {};
    if (message.leases !== undefined) {
      obj.leases = Leases.toJSON(message.leases);
    }
    if (message.inventory !== undefined) {
      obj.inventory = Inventory.toJSON(message.inventory);
    }
    return obj;
  },

  create(base?: DeepPartial<ClusterStatus>): ClusterStatus {
    return ClusterStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClusterStatus>): ClusterStatus {
    const message = createBaseClusterStatus();
    message.leases =
      object.leases !== undefined && object.leases !== null
        ? Leases.fromPartial(object.leases)
        : undefined;
    message.inventory =
      object.inventory !== undefined && object.inventory !== null
        ? Inventory.fromPartial(object.inventory)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterStatus.$type, ClusterStatus);

function createBaseBidEngineStatus(): BidEngineStatus {
  return { $type: "akash.provider.v1.BidEngineStatus", orders: 0 };
}

export const BidEngineStatus = {
  $type: "akash.provider.v1.BidEngineStatus" as const,

  encode(
    message: BidEngineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.orders !== 0) {
      writer.uint32(8).uint32(message.orders);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidEngineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidEngineStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.orders = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BidEngineStatus {
    return {
      $type: BidEngineStatus.$type,
      orders: isSet(object.orders) ? globalThis.Number(object.orders) : 0,
    };
  },

  toJSON(message: BidEngineStatus): unknown {
    const obj: any = {};
    if (message.orders !== 0) {
      obj.orders = Math.round(message.orders);
    }
    return obj;
  },

  create(base?: DeepPartial<BidEngineStatus>): BidEngineStatus {
    return BidEngineStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BidEngineStatus>): BidEngineStatus {
    const message = createBaseBidEngineStatus();
    message.orders = object.orders ?? 0;
    return message;
  },
};

messageTypeRegistry.set(BidEngineStatus.$type, BidEngineStatus);

function createBaseManifestStatus(): ManifestStatus {
  return { $type: "akash.provider.v1.ManifestStatus", deployments: 0 };
}

export const ManifestStatus = {
  $type: "akash.provider.v1.ManifestStatus" as const,

  encode(
    message: ManifestStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deployments !== 0) {
      writer.uint32(8).uint32(message.deployments);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManifestStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManifestStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deployments = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ManifestStatus {
    return {
      $type: ManifestStatus.$type,
      deployments: isSet(object.deployments)
        ? globalThis.Number(object.deployments)
        : 0,
    };
  },

  toJSON(message: ManifestStatus): unknown {
    const obj: any = {};
    if (message.deployments !== 0) {
      obj.deployments = Math.round(message.deployments);
    }
    return obj;
  },

  create(base?: DeepPartial<ManifestStatus>): ManifestStatus {
    return ManifestStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ManifestStatus>): ManifestStatus {
    const message = createBaseManifestStatus();
    message.deployments = object.deployments ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ManifestStatus.$type, ManifestStatus);

function createBaseStatus(): Status {
  return {
    $type: "akash.provider.v1.Status",
    errors: [],
    cluster: undefined,
    bidEngine: undefined,
    manifest: undefined,
    publicHostnames: [],
    timestamp: undefined,
  };
}

export const Status = {
  $type: "akash.provider.v1.Status" as const,

  encode(
    message: Status,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.errors) {
      writer.uint32(10).string(v!);
    }
    if (message.cluster !== undefined) {
      ClusterStatus.encode(message.cluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidEngine !== undefined) {
      BidEngineStatus.encode(
        message.bidEngine,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.manifest !== undefined) {
      ManifestStatus.encode(
        message.manifest,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    for (const v of message.publicHostnames) {
      writer.uint32(42).string(v!);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errors.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cluster = ClusterStatus.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bidEngine = BidEngineStatus.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.manifest = ManifestStatus.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.publicHostnames.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Status {
    return {
      $type: Status.$type,
      errors: globalThis.Array.isArray(object?.errors)
        ? object.errors.map((e: any) => globalThis.String(e))
        : [],
      cluster: isSet(object.cluster)
        ? ClusterStatus.fromJSON(object.cluster)
        : undefined,
      bidEngine: isSet(object.bidEngine)
        ? BidEngineStatus.fromJSON(object.bidEngine)
        : undefined,
      manifest: isSet(object.manifest)
        ? ManifestStatus.fromJSON(object.manifest)
        : undefined,
      publicHostnames: globalThis.Array.isArray(object?.publicHostnames)
        ? object.publicHostnames.map((e: any) => globalThis.String(e))
        : [],
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    if (message.errors?.length) {
      obj.errors = message.errors;
    }
    if (message.cluster !== undefined) {
      obj.cluster = ClusterStatus.toJSON(message.cluster);
    }
    if (message.bidEngine !== undefined) {
      obj.bidEngine = BidEngineStatus.toJSON(message.bidEngine);
    }
    if (message.manifest !== undefined) {
      obj.manifest = ManifestStatus.toJSON(message.manifest);
    }
    if (message.publicHostnames?.length) {
      obj.publicHostnames = message.publicHostnames;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Status>): Status {
    return Status.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.errors = object.errors?.map((e) => e) || [];
    message.cluster =
      object.cluster !== undefined && object.cluster !== null
        ? ClusterStatus.fromPartial(object.cluster)
        : undefined;
    message.bidEngine =
      object.bidEngine !== undefined && object.bidEngine !== null
        ? BidEngineStatus.fromPartial(object.bidEngine)
        : undefined;
    message.manifest =
      object.manifest !== undefined && object.manifest !== null
        ? ManifestStatus.fromPartial(object.manifest)
        : undefined;
    message.publicHostnames = object.publicHostnames?.map((e) => e) || [];
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Status.$type, Status);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
