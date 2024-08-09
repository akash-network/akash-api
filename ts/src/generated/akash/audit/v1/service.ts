/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
    MsgDeleteProviderAttributes,
    MsgDeleteProviderAttributesResponse,
    MsgSignProviderAttributes,
    MsgSignProviderAttributesResponse,
} from "./msg";

export const protobufPackage = "akash.audit.v1";

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
        this.DeleteProviderAttributes =
            this.DeleteProviderAttributes.bind(this);
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
            MsgSignProviderAttributesResponse.decode(_m0.Reader.create(data)),
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
            MsgDeleteProviderAttributesResponse.decode(_m0.Reader.create(data)),
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
