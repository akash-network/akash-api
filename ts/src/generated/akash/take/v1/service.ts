/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./paramsmsg";

export const protobufPackage = "akash.take.v1";

/** Msg defines the market Msg service */
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/market module
     * parameters. The authority is hard-coded to the x/gov module account.
     *
     * Since: akash v1.0.0
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = "akash.take.v1.Msg";
export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) =>
            MsgUpdateParamsResponse.decode(_m0.Reader.create(data)),
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
