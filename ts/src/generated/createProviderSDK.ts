import type * as bufbuild_protobuf_wkt from "@bufbuild/protobuf/wkt";
import type * as akash_provider_lease_v1_service_pb from "./protos/akash/provider/lease/v1/service_pb.ts";
import { createClientFactory } from "../sdk/createClientFactory.ts";
import type { Transport,CallOptions } from "../transport/index.ts";
import { createServiceLoader } from "../utils/createServiceLoader.ts";
import { withMetadata } from "../utils/sdkMetadata.ts";


export const serviceLoader = createServiceLoader([
  () => import("./protos/akash/inventory/v1/service_pb.ts").then(m => m.NodeRPC),
  () => import("./protos/akash/inventory/v1/service_pb.ts").then(m => m.ClusterRPC),
  () => import("./protos/akash/provider/lease/v1/service_pb.ts").then(m => m.LeaseRPC),
  () => import("./protos/akash/provider/v1/service_pb.ts").then(m => m.ProviderRPC)
] as const);
export function createSDK(transport: Transport) {
  const getClient = createClientFactory(transport);
  return {
    akash: {
      inventory: {
        v1: {
          /**
           * getQueryNode defines a method to query hardware state of the node
           */
          getQueryNode: withMetadata(async function getQueryNode(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).queryNode(input, options);
          }, { path: [0, 0] }),
          /**
           * getStreamNode defines a method to stream hardware state of the node
           */
          getStreamNode: withMetadata(async function getStreamNode(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).streamNode(input, options);
          }, { path: [0, 1] }),
          /**
           * getQueryCluster defines a method to query hardware state of the cluster
           */
          getQueryCluster: withMetadata(async function getQueryCluster(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).queryCluster(input, options);
          }, { path: [1, 0] }),
          /**
           * getStreamCluster defines a method to stream hardware state of the cluster
           */
          getStreamCluster: withMetadata(async function getStreamCluster(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).streamCluster(input, options);
          }, { path: [1, 1] })
        }
      },
      provider: {
        lease: {
          v1: {
            /**
             * getSendManifest sends manifest to the provider
             */
            getSendManifest: withMetadata(async function getSendManifest(input: akash_provider_lease_v1_service_pb.SendManifestRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return getClient(service).sendManifest(input, options);
            }, { path: [2, 0] }),
            /**
             * getServiceStatus
             */
            getServiceStatus: withMetadata(async function getServiceStatus(input: akash_provider_lease_v1_service_pb.ServiceStatusRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return getClient(service).serviceStatus(input, options);
            }, { path: [2, 1] }),
            /**
             * getStreamServiceStatus
             */
            getStreamServiceStatus: withMetadata(async function getStreamServiceStatus(input: akash_provider_lease_v1_service_pb.ServiceStatusRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return getClient(service).streamServiceStatus(input, options);
            }, { path: [2, 2] }),
            /**
             * getServiceLogs
             */
            getServiceLogs: withMetadata(async function getServiceLogs(input: akash_provider_lease_v1_service_pb.ServiceLogsRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return getClient(service).serviceLogs(input, options);
            }, { path: [2, 3] }),
            /**
             * getStreamServiceLogs
             */
            getStreamServiceLogs: withMetadata(async function getStreamServiceLogs(input: akash_provider_lease_v1_service_pb.ServiceLogsRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(2);
              return getClient(service).streamServiceLogs(input, options);
            }, { path: [2, 4] })
          }
        },
        v1: {
          /**
           * getStatus defines a method to query provider state
           */
          getStatus: withMetadata(async function getStatus(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getClient(service).getStatus(input, options);
          }, { path: [3, 0] }),
          /**
           * Status defines a method to stream provider state
           */
          getStreamStatus: withMetadata(async function getStreamStatus(input: bufbuild_protobuf_wkt.EmptyJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getClient(service).streamStatus(input, options);
          }, { path: [3, 1] })
        }
      }
    }
  };
}
