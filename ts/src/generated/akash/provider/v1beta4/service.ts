/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
    MsgCreateProvider,
    MsgCreateProviderResponse,
    MsgDeleteProvider,
    MsgDeleteProviderResponse,
    MsgUpdateProvider,
    MsgUpdateProviderResponse,
} from "./msg";

export const protobufPackage = "akash.provider.v1beta4";

/** Msg defines the provider Msg service */
export interface Msg {
    /** CreateProvider defines a method that creates a provider given the proper inputs */
    CreateProvider(
        request: MsgCreateProvider,
    ): Promise<MsgCreateProviderResponse>;
    /** UpdateProvider defines a method that updates a provider given the proper inputs */
    UpdateProvider(
        request: MsgUpdateProvider,
    ): Promise<MsgUpdateProviderResponse>;
    /** DeleteProvider defines a method that deletes a provider given the proper inputs */
    DeleteProvider(
        request: MsgDeleteProvider,
    ): Promise<MsgDeleteProviderResponse>;
}

export const MsgServiceName = "akash.provider.v1beta4.Msg";
export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.CreateProvider = this.CreateProvider.bind(this);
        this.UpdateProvider = this.UpdateProvider.bind(this);
        this.DeleteProvider = this.DeleteProvider.bind(this);
    }
    CreateProvider(
        request: MsgCreateProvider,
    ): Promise<MsgCreateProviderResponse> {
        const data = MsgCreateProvider.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateProvider", data);
        return promise.then((data) =>
            MsgCreateProviderResponse.decode(_m0.Reader.create(data)),
        );
    }

    UpdateProvider(
        request: MsgUpdateProvider,
    ): Promise<MsgUpdateProviderResponse> {
        const data = MsgUpdateProvider.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateProvider", data);
        return promise.then((data) =>
            MsgUpdateProviderResponse.decode(_m0.Reader.create(data)),
        );
    }

    DeleteProvider(
        request: MsgDeleteProvider,
    ): Promise<MsgDeleteProviderResponse> {
        const data = MsgDeleteProvider.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteProvider", data);
        return promise.then((data) =>
            MsgDeleteProviderResponse.decode(_m0.Reader.create(data)),
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
