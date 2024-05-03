/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  makeGenericClientConstructor,
  Metadata,
} from '@grpc/grpc-js';
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from '@grpc/grpc-js';
import {
  MsgCloseDeployment,
  MsgCloseDeploymentResponse,
  MsgCreateDeployment,
  MsgCreateDeploymentResponse,
  MsgDepositDeployment,
  MsgDepositDeploymentResponse,
  MsgUpdateDeployment,
  MsgUpdateDeploymentResponse,
} from './deploymentmsg';
import {
  MsgCloseGroup,
  MsgCloseGroupResponse,
  MsgPauseGroup,
  MsgPauseGroupResponse,
  MsgStartGroup,
  MsgStartGroupResponse,
} from './groupmsg';

export const protobufPackage = 'akash.deployment.v1beta4';

/** Msg defines the deployment Msg service. */
export type MsgService = typeof MsgService;
export const MsgService = {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment: {
    path: '/akash.deployment.v1beta4.Msg/CreateDeployment',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgCreateDeployment) =>
      Buffer.from(MsgCreateDeployment.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgCreateDeployment.decode(value),
    responseSerialize: (value: MsgCreateDeploymentResponse) =>
      Buffer.from(MsgCreateDeploymentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      MsgCreateDeploymentResponse.decode(value),
  },
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment: {
    path: '/akash.deployment.v1beta4.Msg/DepositDeployment',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgDepositDeployment) =>
      Buffer.from(MsgDepositDeployment.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgDepositDeployment.decode(value),
    responseSerialize: (value: MsgDepositDeploymentResponse) =>
      Buffer.from(MsgDepositDeploymentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      MsgDepositDeploymentResponse.decode(value),
  },
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment: {
    path: '/akash.deployment.v1beta4.Msg/UpdateDeployment',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgUpdateDeployment) =>
      Buffer.from(MsgUpdateDeployment.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgUpdateDeployment.decode(value),
    responseSerialize: (value: MsgUpdateDeploymentResponse) =>
      Buffer.from(MsgUpdateDeploymentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      MsgUpdateDeploymentResponse.decode(value),
  },
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment: {
    path: '/akash.deployment.v1beta4.Msg/CloseDeployment',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgCloseDeployment) =>
      Buffer.from(MsgCloseDeployment.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgCloseDeployment.decode(value),
    responseSerialize: (value: MsgCloseDeploymentResponse) =>
      Buffer.from(MsgCloseDeploymentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      MsgCloseDeploymentResponse.decode(value),
  },
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup: {
    path: '/akash.deployment.v1beta4.Msg/CloseGroup',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgCloseGroup) =>
      Buffer.from(MsgCloseGroup.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgCloseGroup.decode(value),
    responseSerialize: (value: MsgCloseGroupResponse) =>
      Buffer.from(MsgCloseGroupResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgCloseGroupResponse.decode(value),
  },
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup: {
    path: '/akash.deployment.v1beta4.Msg/PauseGroup',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgPauseGroup) =>
      Buffer.from(MsgPauseGroup.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgPauseGroup.decode(value),
    responseSerialize: (value: MsgPauseGroupResponse) =>
      Buffer.from(MsgPauseGroupResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgPauseGroupResponse.decode(value),
  },
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup: {
    path: '/akash.deployment.v1beta4.Msg/StartGroup',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgStartGroup) =>
      Buffer.from(MsgStartGroup.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgStartGroup.decode(value),
    responseSerialize: (value: MsgStartGroupResponse) =>
      Buffer.from(MsgStartGroupResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgStartGroupResponse.decode(value),
  },
} as const;

export interface MsgServer extends UntypedServiceImplementation {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment: handleUnaryCall<
    MsgCreateDeployment,
    MsgCreateDeploymentResponse
  >;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment: handleUnaryCall<
    MsgDepositDeployment,
    MsgDepositDeploymentResponse
  >;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment: handleUnaryCall<
    MsgUpdateDeployment,
    MsgUpdateDeploymentResponse
  >;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment: handleUnaryCall<
    MsgCloseDeployment,
    MsgCloseDeploymentResponse
  >;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup: handleUnaryCall<MsgCloseGroup, MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup: handleUnaryCall<MsgPauseGroup, MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup: handleUnaryCall<MsgStartGroup, MsgStartGroupResponse>;
}

export interface MsgClient extends Client {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(
    request: MsgCreateDeployment,
    callback: (
      error: ServiceError | null,
      response: MsgCreateDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  createDeployment(
    request: MsgCreateDeployment,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgCreateDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  createDeployment(
    request: MsgCreateDeployment,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgCreateDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(
    request: MsgDepositDeployment,
    callback: (
      error: ServiceError | null,
      response: MsgDepositDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  depositDeployment(
    request: MsgDepositDeployment,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgDepositDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  depositDeployment(
    request: MsgDepositDeployment,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgDepositDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(
    request: MsgUpdateDeployment,
    callback: (
      error: ServiceError | null,
      response: MsgUpdateDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  updateDeployment(
    request: MsgUpdateDeployment,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgUpdateDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  updateDeployment(
    request: MsgUpdateDeployment,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgUpdateDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(
    request: MsgCloseDeployment,
    callback: (
      error: ServiceError | null,
      response: MsgCloseDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  closeDeployment(
    request: MsgCloseDeployment,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgCloseDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  closeDeployment(
    request: MsgCloseDeployment,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgCloseDeploymentResponse,
    ) => void,
  ): ClientUnaryCall;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(
    request: MsgCloseGroup,
    callback: (
      error: ServiceError | null,
      response: MsgCloseGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  closeGroup(
    request: MsgCloseGroup,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgCloseGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  closeGroup(
    request: MsgCloseGroup,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgCloseGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(
    request: MsgPauseGroup,
    callback: (
      error: ServiceError | null,
      response: MsgPauseGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  pauseGroup(
    request: MsgPauseGroup,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgPauseGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  pauseGroup(
    request: MsgPauseGroup,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgPauseGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(
    request: MsgStartGroup,
    callback: (
      error: ServiceError | null,
      response: MsgStartGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  startGroup(
    request: MsgStartGroup,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MsgStartGroupResponse,
    ) => void,
  ): ClientUnaryCall;
  startGroup(
    request: MsgStartGroup,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MsgStartGroupResponse,
    ) => void,
  ): ClientUnaryCall;
}

export const MsgClient = makeGenericClientConstructor(
  MsgService,
  'akash.deployment.v1beta4.Msg',
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): MsgClient;
  service: typeof MsgService;
  serviceName: string;
};
