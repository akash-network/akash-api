import type * as bufbuild_protobuf_wkt from "@bufbuild/protobuf/wkt";
import type * as akash_provider_lease_v1_service_pb from "protos/akash/provider/lease/v1/service_pb";

import type { ClientFactory } from "../sdk/ClientFactory";
import type { CallOptions } from "../transport";
import { createServiceLoader } from "../utils/createServiceLoader";
import { withMetadata } from "../utils/sdkMetadata";

export const serviceLoader = createServiceLoader([
  () => import("./protos/akash/inventory/v1/service_pb").then((m) => m.NodeRPC),
  () => import("./protos/akash/inventory/v1/service_pb").then((m) => m.ClusterRPC),
  () => import("./protos/akash/provider/lease/v1/service_pb").then((m) => m.LeaseRPC),
  () => import("./protos/akash/provider/v1/service_pb").then((m) => m.ProviderRPC),
] as const);
export function createSDK<T extends ClientFactory>(clientFactory: T) {
  return {
    akash: {
      inventory: {
        v1: {
          /**
           * getQueryNode defines a method to query hardware state of the node
           * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
           * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
           */
          getQueryNode: withMetadata(async function getQueryNode(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return clientFactory.getClient(service).queryNode(input, options);
          }, { path: [0, 0] }),
          /**
           * getStreamNode defines a method to stream hardware state of the node
           * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
           * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
           */
          getStreamNode: withMetadata(async function getStreamNode(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return clientFactory.getClient(service).streamNode(input, options);
          }, { path: [0, 1] }),
          /**
           * getQueryCluster defines a method to query hardware state of the cluster
           * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
           * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
           */
          getQueryCluster: withMetadata(async function getQueryCluster(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return clientFactory.getClient(service).queryCluster(input, options);
          }, { path: [1, 0] }),
          /**
           * getStreamCluster defines a method to stream hardware state of the cluster
           * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
           * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
           */
          getStreamCluster: withMetadata(async function getStreamCluster(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return clientFactory.getClient(service).streamCluster(input, options);
          }, { path: [1, 1] }),
        },
      },
      provider: {
        lease: {
          v1: {
            /**
             * getSendManifest sends manifest to the provider
             */
            getSendManifest: withMetadata(async function getSendManifest(input: akash_provider_lease_v1_service_pb.SendManifestRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return clientFactory.getClient(service).sendManifest(input, options);
            }, { path: [2, 0] }),
            /**
             * getServiceStatus
             * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
             * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
             */
            getServiceStatus: withMetadata(async function getServiceStatus(input: akash_provider_lease_v1_service_pb.ServiceStatusRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return clientFactory.getClient(service).serviceStatus(input, options);
            }, { path: [2, 1] }),
            /**
             * getStreamServiceStatus
             * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
             * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
             */
            getStreamServiceStatus: withMetadata(async function getStreamServiceStatus(input: akash_provider_lease_v1_service_pb.ServiceStatusRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return clientFactory.getClient(service).streamServiceStatus(input, options);
            }, { path: [2, 2] }),
            /**
             * getServiceLogs
             * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
             * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
             */
            getServiceLogs: withMetadata(async function getServiceLogs(input: akash_provider_lease_v1_service_pb.ServiceLogsRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return clientFactory.getClient(service).serviceLogs(input, options);
            }, { path: [2, 3] }),
            /**
             * getStreamServiceLogs
             * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
             * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
             */
            getStreamServiceLogs: withMetadata(async function getStreamServiceLogs(input: akash_provider_lease_v1_service_pb.ServiceLogsRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return clientFactory.getClient(service).streamServiceLogs(input, options);
            }, { path: [2, 4] }),
          },
        },
        v1: {
          /**
           * getStatus defines a method to query provider state
           * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
           * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
           */
          getStatus: withMetadata(async function getStatus(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return clientFactory.getClient(service).getStatus(input, options);
          }, { path: [3, 0] }),
          /**
           * Status defines a method to stream provider state
           * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
           * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
           */
          getStreamStatus: withMetadata(async function getStreamStatus(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return clientFactory.getClient(service).streamStatus(input, options);
          }, { path: [3, 1] }),
        },
      },
    },
  };
}
