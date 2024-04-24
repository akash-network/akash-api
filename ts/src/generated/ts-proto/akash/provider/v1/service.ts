/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Empty } from '../../../google/protobuf/empty';
import { Status } from './status';

/** ProviderRPC defines the RPC server for provider */
export interface ProviderRPC {
  /**
   * GetStatus defines a method to query provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  GetStatus(request: Empty): Promise<Status>;
  /**
   * Status defines a method to stream provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  StreamStatus(request: Empty): Observable<Status>;
}

export const ProviderRPCServiceName = 'akash.provider.v1.ProviderRPC';
export class ProviderRPCClientImpl implements ProviderRPC {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProviderRPCServiceName;
    this.rpc = rpc;
    this.GetStatus = this.GetStatus.bind(this);
    this.StreamStatus = this.StreamStatus.bind(this);
  }
  GetStatus(request: Empty): Promise<Status> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, 'GetStatus', data);
    return promise.then((data) => Status.decode(_m0.Reader.create(data)));
  }

  StreamStatus(request: Empty): Observable<Status> {
    const data = Empty.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      this.service,
      'StreamStatus',
      data,
    );
    return result.pipe(map((data) => Status.decode(_m0.Reader.create(data))));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>,
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array,
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>,
  ): Observable<Uint8Array>;
}
