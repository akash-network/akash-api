// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: akash/audit/v1/service.proto

/* eslint-disable */
import { BinaryReader } from "@bufbuild/protobuf/wire";
import {
  MsgDeleteProviderAttributes,
  MsgDeleteProviderAttributesResponse,
  MsgSignProviderAttributes,
  MsgSignProviderAttributesResponse,
} from "./msg";

/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  SignProviderAttributes(
    request: MsgSignProviderAttributes,
  ): Promise<MsgSignProviderAttributesResponse>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  DeleteProviderAttributes(
    request: MsgDeleteProviderAttributes,
  ): Promise<MsgDeleteProviderAttributesResponse>;
}

export const MsgServiceName = "akash.audit.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
    this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
  }
  SignProviderAttributes(
    request: MsgSignProviderAttributes,
  ): Promise<MsgSignProviderAttributesResponse> {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SignProviderAttributes",
      data,
    );
    return promise.then((data) =>
      MsgSignProviderAttributesResponse.decode(new BinaryReader(data)),
    );
  }

  DeleteProviderAttributes(
    request: MsgDeleteProviderAttributes,
  ): Promise<MsgDeleteProviderAttributesResponse> {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "DeleteProviderAttributes",
      data,
    );
    return promise.then((data) =>
      MsgDeleteProviderAttributesResponse.decode(new BinaryReader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}