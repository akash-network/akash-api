// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file tendermint/p2p/types.proto (package tendermint.p2p, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file tendermint/p2p/types.proto.
 */
export const file_tendermint_p2p_types: GenFile = /*@__PURE__*/
  fileDesc("Chp0ZW5kZXJtaW50L3AycC90eXBlcy5wcm90bxIOdGVuZGVybWludC5wMnAiQgoKTmV0QWRkcmVzcxISCgJpZBgBIAEoCUIG4t4fAklEEhIKAmlwGAIgASgJQgbi3h8CSVASDAoEcG9ydBgDIAEoDSJDCg9Qcm90b2NvbFZlcnNpb24SFAoDcDJwGAEgASgEQgfi3h8DUDJQEg0KBWJsb2NrGAIgASgEEgsKA2FwcBgDIAEoBCKTAgoPRGVmYXVsdE5vZGVJbmZvEj8KEHByb3RvY29sX3ZlcnNpb24YASABKAsyHy50ZW5kZXJtaW50LnAycC5Qcm90b2NvbFZlcnNpb25CBMjeHwASKgoPZGVmYXVsdF9ub2RlX2lkGAIgASgJQhHi3h8NRGVmYXVsdE5vZGVJRBITCgtsaXN0ZW5fYWRkchgDIAEoCRIPCgduZXR3b3JrGAQgASgJEg8KB3ZlcnNpb24YBSABKAkSEAoIY2hhbm5lbHMYBiABKAwSDwoHbW9uaWtlchgHIAEoCRI5CgVvdGhlchgIIAEoCzIkLnRlbmRlcm1pbnQucDJwLkRlZmF1bHROb2RlSW5mb090aGVyQgTI3h8AIk0KFERlZmF1bHROb2RlSW5mb090aGVyEhAKCHR4X2luZGV4GAEgASgJEiMKC3JwY19hZGRyZXNzGAIgASgJQg7i3h8KUlBDQWRkcmVzc0IzWjFnaXRodWIuY29tL2NvbWV0YmZ0L2NvbWV0YmZ0L3Byb3RvL3RlbmRlcm1pbnQvcDJwYgZwcm90bzM", [file_gogoproto_gogo]);

/**
 * @generated from message tendermint.p2p.NetAddress
 */
export type NetAddress = Message<"tendermint.p2p.NetAddress"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string ip = 2;
   */
  ip: string;

  /**
   * @generated from field: uint32 port = 3;
   */
  port: number;
};

/**
 * @generated from message tendermint.p2p.NetAddress
 */
export type NetAddressJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string ip = 2;
   */
  ip?: string;

  /**
   * @generated from field: uint32 port = 3;
   */
  port?: number;
};

/**
 * Describes the message tendermint.p2p.NetAddress.
 * Use `create(NetAddressSchema)` to create a new message.
 */
export const NetAddressSchema: GenMessage<NetAddress, NetAddressJson> = /*@__PURE__*/
  messageDesc(file_tendermint_p2p_types, 0);

/**
 * @generated from message tendermint.p2p.ProtocolVersion
 */
export type ProtocolVersion = Message<"tendermint.p2p.ProtocolVersion"> & {
  /**
   * @generated from field: uint64 p2p = 1;
   */
  p2p: bigint;

  /**
   * @generated from field: uint64 block = 2;
   */
  block: bigint;

  /**
   * @generated from field: uint64 app = 3;
   */
  app: bigint;
};

/**
 * @generated from message tendermint.p2p.ProtocolVersion
 */
export type ProtocolVersionJson = {
  /**
   * @generated from field: uint64 p2p = 1;
   */
  p2p?: string;

  /**
   * @generated from field: uint64 block = 2;
   */
  block?: string;

  /**
   * @generated from field: uint64 app = 3;
   */
  app?: string;
};

/**
 * Describes the message tendermint.p2p.ProtocolVersion.
 * Use `create(ProtocolVersionSchema)` to create a new message.
 */
export const ProtocolVersionSchema: GenMessage<ProtocolVersion, ProtocolVersionJson> = /*@__PURE__*/
  messageDesc(file_tendermint_p2p_types, 1);

/**
 * @generated from message tendermint.p2p.DefaultNodeInfo
 */
export type DefaultNodeInfo = Message<"tendermint.p2p.DefaultNodeInfo"> & {
  /**
   * @generated from field: tendermint.p2p.ProtocolVersion protocol_version = 1;
   */
  protocolVersion?: ProtocolVersion;

  /**
   * @generated from field: string default_node_id = 2;
   */
  defaultNodeId: string;

  /**
   * @generated from field: string listen_addr = 3;
   */
  listenAddr: string;

  /**
   * @generated from field: string network = 4;
   */
  network: string;

  /**
   * @generated from field: string version = 5;
   */
  version: string;

  /**
   * @generated from field: bytes channels = 6;
   */
  channels: Uint8Array;

  /**
   * @generated from field: string moniker = 7;
   */
  moniker: string;

  /**
   * @generated from field: tendermint.p2p.DefaultNodeInfoOther other = 8;
   */
  other?: DefaultNodeInfoOther;
};

/**
 * @generated from message tendermint.p2p.DefaultNodeInfo
 */
export type DefaultNodeInfoJson = {
  /**
   * @generated from field: tendermint.p2p.ProtocolVersion protocol_version = 1;
   */
  protocolVersion?: ProtocolVersionJson;

  /**
   * @generated from field: string default_node_id = 2;
   */
  defaultNodeId?: string;

  /**
   * @generated from field: string listen_addr = 3;
   */
  listenAddr?: string;

  /**
   * @generated from field: string network = 4;
   */
  network?: string;

  /**
   * @generated from field: string version = 5;
   */
  version?: string;

  /**
   * @generated from field: bytes channels = 6;
   */
  channels?: string;

  /**
   * @generated from field: string moniker = 7;
   */
  moniker?: string;

  /**
   * @generated from field: tendermint.p2p.DefaultNodeInfoOther other = 8;
   */
  other?: DefaultNodeInfoOtherJson;
};

/**
 * Describes the message tendermint.p2p.DefaultNodeInfo.
 * Use `create(DefaultNodeInfoSchema)` to create a new message.
 */
export const DefaultNodeInfoSchema: GenMessage<DefaultNodeInfo, DefaultNodeInfoJson> = /*@__PURE__*/
  messageDesc(file_tendermint_p2p_types, 2);

/**
 * @generated from message tendermint.p2p.DefaultNodeInfoOther
 */
export type DefaultNodeInfoOther = Message<"tendermint.p2p.DefaultNodeInfoOther"> & {
  /**
   * @generated from field: string tx_index = 1;
   */
  txIndex: string;

  /**
   * @generated from field: string rpc_address = 2;
   */
  rpcAddress: string;
};

/**
 * @generated from message tendermint.p2p.DefaultNodeInfoOther
 */
export type DefaultNodeInfoOtherJson = {
  /**
   * @generated from field: string tx_index = 1;
   */
  txIndex?: string;

  /**
   * @generated from field: string rpc_address = 2;
   */
  rpcAddress?: string;
};

/**
 * Describes the message tendermint.p2p.DefaultNodeInfoOther.
 * Use `create(DefaultNodeInfoOtherSchema)` to create a new message.
 */
export const DefaultNodeInfoOtherSchema: GenMessage<DefaultNodeInfoOther, DefaultNodeInfoOtherJson> = /*@__PURE__*/
  messageDesc(file_tendermint_p2p_types, 3);

