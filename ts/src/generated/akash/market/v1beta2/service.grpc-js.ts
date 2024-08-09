/* eslint-disable */
import {
    ChannelCredentials,
    Client,
    makeGenericClientConstructor,
    Metadata,
} from "@grpc/grpc-js";
import type {
    CallOptions,
    ClientOptions,
    ClientUnaryCall,
    handleUnaryCall,
    ServiceError,
    UntypedServiceImplementation,
} from "@grpc/grpc-js";
import {
    MsgCloseBid,
    MsgCloseBidResponse,
    MsgCreateBid,
    MsgCreateBidResponse,
} from "./bid";
import {
    MsgCloseLease,
    MsgCloseLeaseResponse,
    MsgCreateLease,
    MsgCreateLeaseResponse,
    MsgWithdrawLease,
    MsgWithdrawLeaseResponse,
} from "./lease";

export const protobufPackage = "akash.market.v1beta2";

/** Msg defines the market Msg service */
export type MsgService = typeof MsgService;
export const MsgService = {
    /** CreateBid defines a method to create a bid given proper inputs. */
    createBid: {
        path: "/akash.market.v1beta2.Msg/CreateBid",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MsgCreateBid) =>
            Buffer.from(MsgCreateBid.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MsgCreateBid.decode(value),
        responseSerialize: (value: MsgCreateBidResponse) =>
            Buffer.from(MsgCreateBidResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            MsgCreateBidResponse.decode(value),
    },
    /** CloseBid defines a method to close a bid given proper inputs. */
    closeBid: {
        path: "/akash.market.v1beta2.Msg/CloseBid",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MsgCloseBid) =>
            Buffer.from(MsgCloseBid.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MsgCloseBid.decode(value),
        responseSerialize: (value: MsgCloseBidResponse) =>
            Buffer.from(MsgCloseBidResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            MsgCloseBidResponse.decode(value),
    },
    /** WithdrawLease withdraws accrued funds from the lease payment */
    withdrawLease: {
        path: "/akash.market.v1beta2.Msg/WithdrawLease",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MsgWithdrawLease) =>
            Buffer.from(MsgWithdrawLease.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MsgWithdrawLease.decode(value),
        responseSerialize: (value: MsgWithdrawLeaseResponse) =>
            Buffer.from(MsgWithdrawLeaseResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            MsgWithdrawLeaseResponse.decode(value),
    },
    /** CreateLease creates a new lease */
    createLease: {
        path: "/akash.market.v1beta2.Msg/CreateLease",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MsgCreateLease) =>
            Buffer.from(MsgCreateLease.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MsgCreateLease.decode(value),
        responseSerialize: (value: MsgCreateLeaseResponse) =>
            Buffer.from(MsgCreateLeaseResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            MsgCreateLeaseResponse.decode(value),
    },
    /** CloseLease defines a method to close an order given proper inputs. */
    closeLease: {
        path: "/akash.market.v1beta2.Msg/CloseLease",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MsgCloseLease) =>
            Buffer.from(MsgCloseLease.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MsgCloseLease.decode(value),
        responseSerialize: (value: MsgCloseLeaseResponse) =>
            Buffer.from(MsgCloseLeaseResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            MsgCloseLeaseResponse.decode(value),
    },
} as const;

export interface MsgServer extends UntypedServiceImplementation {
    /** CreateBid defines a method to create a bid given proper inputs. */
    createBid: handleUnaryCall<MsgCreateBid, MsgCreateBidResponse>;
    /** CloseBid defines a method to close a bid given proper inputs. */
    closeBid: handleUnaryCall<MsgCloseBid, MsgCloseBidResponse>;
    /** WithdrawLease withdraws accrued funds from the lease payment */
    withdrawLease: handleUnaryCall<MsgWithdrawLease, MsgWithdrawLeaseResponse>;
    /** CreateLease creates a new lease */
    createLease: handleUnaryCall<MsgCreateLease, MsgCreateLeaseResponse>;
    /** CloseLease defines a method to close an order given proper inputs. */
    closeLease: handleUnaryCall<MsgCloseLease, MsgCloseLeaseResponse>;
}

export interface MsgClient extends Client {
    /** CreateBid defines a method to create a bid given proper inputs. */
    createBid(
        request: MsgCreateBid,
        callback: (
            error: ServiceError | null,
            response: MsgCreateBidResponse,
        ) => void,
    ): ClientUnaryCall;
    createBid(
        request: MsgCreateBid,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: MsgCreateBidResponse,
        ) => void,
    ): ClientUnaryCall;
    createBid(
        request: MsgCreateBid,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: MsgCreateBidResponse,
        ) => void,
    ): ClientUnaryCall;
    /** CloseBid defines a method to close a bid given proper inputs. */
    closeBid(
        request: MsgCloseBid,
        callback: (
            error: ServiceError | null,
            response: MsgCloseBidResponse,
        ) => void,
    ): ClientUnaryCall;
    closeBid(
        request: MsgCloseBid,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: MsgCloseBidResponse,
        ) => void,
    ): ClientUnaryCall;
    closeBid(
        request: MsgCloseBid,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: MsgCloseBidResponse,
        ) => void,
    ): ClientUnaryCall;
    /** WithdrawLease withdraws accrued funds from the lease payment */
    withdrawLease(
        request: MsgWithdrawLease,
        callback: (
            error: ServiceError | null,
            response: MsgWithdrawLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    withdrawLease(
        request: MsgWithdrawLease,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: MsgWithdrawLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    withdrawLease(
        request: MsgWithdrawLease,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: MsgWithdrawLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    /** CreateLease creates a new lease */
    createLease(
        request: MsgCreateLease,
        callback: (
            error: ServiceError | null,
            response: MsgCreateLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    createLease(
        request: MsgCreateLease,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: MsgCreateLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    createLease(
        request: MsgCreateLease,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: MsgCreateLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    /** CloseLease defines a method to close an order given proper inputs. */
    closeLease(
        request: MsgCloseLease,
        callback: (
            error: ServiceError | null,
            response: MsgCloseLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    closeLease(
        request: MsgCloseLease,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: MsgCloseLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
    closeLease(
        request: MsgCloseLease,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: MsgCloseLeaseResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const MsgClient = makeGenericClientConstructor(
    MsgService,
    "akash.market.v1beta2.Msg",
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ClientOptions>,
    ): MsgClient;
    service: typeof MsgService;
    serviceName: string;
};
