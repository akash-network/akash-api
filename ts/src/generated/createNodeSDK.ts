import type * as akash_audit_v1_query_pb from "./protos/akash/audit/v1/query_pb.ts";
import type * as akash_audit_v1_msg_pb from "./protos/akash/audit/v1/msg_pb.ts";
import type * as akash_cert_v1_query_pb from "./protos/akash/cert/v1/query_pb.ts";
import type * as akash_cert_v1_msg_pb from "./protos/akash/cert/v1/msg_pb.ts";
import type * as akash_deployment_v1beta4_query_pb from "./protos/akash/deployment/v1beta4/query_pb.ts";
import type * as akash_deployment_v1beta4_deploymentmsg_pb from "./protos/akash/deployment/v1beta4/deploymentmsg_pb.ts";
import type * as akash_deployment_v1_msg_pb from "./protos/akash/deployment/v1/msg_pb.ts";
import type * as akash_deployment_v1beta4_groupmsg_pb from "./protos/akash/deployment/v1beta4/groupmsg_pb.ts";
import type * as akash_deployment_v1beta4_paramsmsg_pb from "./protos/akash/deployment/v1beta4/paramsmsg_pb.ts";
import type * as akash_escrow_v1_query_pb from "./protos/akash/escrow/v1/query_pb.ts";
import type * as akash_market_v1beta5_query_pb from "./protos/akash/market/v1beta5/query_pb.ts";
import type * as akash_market_v1beta5_bidmsg_pb from "./protos/akash/market/v1beta5/bidmsg_pb.ts";
import type * as akash_market_v1beta5_leasemsg_pb from "./protos/akash/market/v1beta5/leasemsg_pb.ts";
import type * as akash_market_v1beta5_paramsmsg_pb from "./protos/akash/market/v1beta5/paramsmsg_pb.ts";
import type * as akash_provider_v1beta4_query_pb from "./protos/akash/provider/v1beta4/query_pb.ts";
import type * as akash_provider_v1beta4_msg_pb from "./protos/akash/provider/v1beta4/msg_pb.ts";
import type * as akash_staking_v1beta3_query_pb from "./protos/akash/staking/v1beta3/query_pb.ts";
import type * as akash_staking_v1beta3_paramsmsg_pb from "./protos/akash/staking/v1beta3/paramsmsg_pb.ts";
import type * as akash_take_v1_query_pb from "./protos/akash/take/v1/query_pb.ts";
import type * as akash_take_v1_paramsmsg_pb from "./protos/akash/take/v1/paramsmsg_pb.ts";
import { createClientFactory } from "../sdk/createClientFactory.ts";
import type { Transport,CallOptions, TxCallOptions } from "../transport/index.ts";
import { createServiceLoader } from "../utils/createServiceLoader.ts";
import { withMetadata } from "../utils/sdkMetadata.ts";


export const serviceLoader = createServiceLoader([
  () => import("./protos/akash/audit/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/audit/v1/service_pb.ts").then(m => m.Msg),
  () => import("./protos/akash/cert/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/cert/v1/service_pb.ts").then(m => m.Msg),
  () => import("./protos/akash/deployment/v1beta4/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/deployment/v1beta4/service_pb.ts").then(m => m.Msg),
  () => import("./protos/akash/escrow/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/market/v1beta5/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/market/v1beta5/service_pb.ts").then(m => m.Msg),
  () => import("./protos/akash/provider/v1beta4/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/provider/v1beta4/service_pb.ts").then(m => m.Msg),
  () => import("./protos/akash/staking/v1beta3/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/staking/v1beta3/service_pb.ts").then(m => m.Msg),
  () => import("./protos/akash/take/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/akash/take/v1/service_pb.ts").then(m => m.Msg)
] as const);
export function createSDK(queryTransport: Transport, txTransport: Transport) {
  const getClient = createClientFactory(queryTransport);
  const getMsgClient = createClientFactory(txTransport);
  return {
    akash: {
      audit: {
        v1: {
          /**
           * getAllProvidersAttributes queries all providers.
           */
          getAllProvidersAttributes: withMetadata(async function getAllProvidersAttributes(input: akash_audit_v1_query_pb.QueryAllProvidersAttributesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).allProvidersAttributes(input, options);
          }, { path: [0, 0] }),
          /**
           * getProviderAttributes queries all provider signed attributes.
           */
          getProviderAttributes: withMetadata(async function getProviderAttributes(input: akash_audit_v1_query_pb.QueryProviderAttributesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).providerAttributes(input, options);
          }, { path: [0, 1] }),
          /**
           * getProviderAuditorAttributes queries provider signed attributes by specific auditor.
           */
          getProviderAuditorAttributes: withMetadata(async function getProviderAuditorAttributes(input: akash_audit_v1_query_pb.QueryProviderAuditorRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).providerAuditorAttributes(input, options);
          }, { path: [0, 2] }),
          /**
           * getAuditorAttributes queries all providers signed by this auditor.
           */
          getAuditorAttributes: withMetadata(async function getAuditorAttributes(input: akash_audit_v1_query_pb.QueryAuditorAttributesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).auditorAttributes(input, options);
          }, { path: [0, 3] }),
          /**
           * signProviderAttributes defines a method that signs provider attributes.
           */
          signProviderAttributes: withMetadata(async function signProviderAttributes(input: akash_audit_v1_msg_pb.MsgSignProviderAttributesJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getMsgClient(service).signProviderAttributes(input, options);
          }, { path: [1, 0] }),
          /**
           * deleteProviderAttributes defines a method that deletes provider attributes.
           */
          deleteProviderAttributes: withMetadata(async function deleteProviderAttributes(input: akash_audit_v1_msg_pb.MsgDeleteProviderAttributesJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getMsgClient(service).deleteProviderAttributes(input, options);
          }, { path: [1, 1] })
        }
      },
      cert: {
        v1: {
          /**
           * getCertificates queries certificates on-chain.
           */
          getCertificates: withMetadata(async function getCertificates(input: akash_cert_v1_query_pb.QueryCertificatesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(2);
            return getClient(service).certificates(input, options);
          }, { path: [2, 0] }),
          /**
           * createCertificate defines a method to create new certificate given proper inputs.
           */
          createCertificate: withMetadata(async function createCertificate(input: akash_cert_v1_msg_pb.MsgCreateCertificateJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getMsgClient(service).createCertificate(input, options);
          }, { path: [3, 0] }),
          /**
           * revokeCertificate defines a method to revoke the certificate.
           */
          revokeCertificate: withMetadata(async function revokeCertificate(input: akash_cert_v1_msg_pb.MsgRevokeCertificateJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getMsgClient(service).revokeCertificate(input, options);
          }, { path: [3, 1] })
        }
      },
      deployment: {
        v1beta4: {
          /**
           * getDeployments queries deployments.
           */
          getDeployments: withMetadata(async function getDeployments(input: akash_deployment_v1beta4_query_pb.QueryDeploymentsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getClient(service).deployments(input, options);
          }, { path: [4, 0] }),
          /**
           * getDeployment queries deployment details.
           */
          getDeployment: withMetadata(async function getDeployment(input: akash_deployment_v1beta4_query_pb.QueryDeploymentRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getClient(service).deployment(input, options);
          }, { path: [4, 1] }),
          /**
           * getGroup queries group details.
           */
          getGroup: withMetadata(async function getGroup(input: akash_deployment_v1beta4_query_pb.QueryGroupRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getClient(service).group(input, options);
          }, { path: [4, 2] }),
          /**
           * getParams returns the total set of minting parameters.
           */
          getParams: withMetadata(async function getParams(input: akash_deployment_v1beta4_query_pb.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getClient(service).params(input, options);
          }, { path: [4, 3] }),
          /**
           * createDeployment defines a method to create new deployment given proper inputs.
           */
          createDeployment: withMetadata(async function createDeployment(input: akash_deployment_v1beta4_deploymentmsg_pb.MsgCreateDeploymentJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).createDeployment(input, options);
          }, { path: [5, 0] }),
          /**
           * depositDeployment deposits more funds into the deployment account.
           */
          depositDeployment: withMetadata(async function depositDeployment(input: akash_deployment_v1_msg_pb.MsgDepositDeploymentJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).depositDeployment(input, options);
          }, { path: [5, 1] }),
          /**
           * updateDeployment defines a method to update a deployment given proper inputs.
           */
          updateDeployment: withMetadata(async function updateDeployment(input: akash_deployment_v1beta4_deploymentmsg_pb.MsgUpdateDeploymentJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).updateDeployment(input, options);
          }, { path: [5, 2] }),
          /**
           * closeDeployment defines a method to close a deployment given proper inputs.
           */
          closeDeployment: withMetadata(async function closeDeployment(input: akash_deployment_v1beta4_deploymentmsg_pb.MsgCloseDeploymentJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).closeDeployment(input, options);
          }, { path: [5, 3] }),
          /**
           * closeGroup defines a method to close a group of a deployment given proper inputs.
           */
          closeGroup: withMetadata(async function closeGroup(input: akash_deployment_v1beta4_groupmsg_pb.MsgCloseGroupJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).closeGroup(input, options);
          }, { path: [5, 4] }),
          /**
           * pauseGroup defines a method to close a group of a deployment given proper inputs.
           */
          pauseGroup: withMetadata(async function pauseGroup(input: akash_deployment_v1beta4_groupmsg_pb.MsgPauseGroupJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).pauseGroup(input, options);
          }, { path: [5, 5] }),
          /**
           * startGroup defines a method to close a group of a deployment given proper inputs.
           */
          startGroup: withMetadata(async function startGroup(input: akash_deployment_v1beta4_groupmsg_pb.MsgStartGroupJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).startGroup(input, options);
          }, { path: [5, 6] }),
          /**
           * updateParams defines a governance operation for updating the x/deployment module
           * parameters. The authority is hard-coded to the x/gov module account.
           *
           * Since: akash v1.0.0
           */
          updateParams: withMetadata(async function updateParams(input: akash_deployment_v1beta4_paramsmsg_pb.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [5, 7] })
        }
      },
      escrow: {
        v1: {
          /**
           * getAccounts queries all accounts.
           */
          getAccounts: withMetadata(async function getAccounts(input: akash_escrow_v1_query_pb.QueryAccountsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).accounts(input, options);
          }, { path: [6, 0] }),
          /**
           * getPayments queries all payments.
           */
          getPayments: withMetadata(async function getPayments(input: akash_escrow_v1_query_pb.QueryPaymentsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).payments(input, options);
          }, { path: [6, 1] })
        }
      },
      market: {
        v1beta5: {
          /**
           * getOrders queries orders with filters.
           */
          getOrders: withMetadata(async function getOrders(input: akash_market_v1beta5_query_pb.QueryOrdersRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).orders(input, options);
          }, { path: [7, 0] }),
          /**
           * getOrder queries order details.
           */
          getOrder: withMetadata(async function getOrder(input: akash_market_v1beta5_query_pb.QueryOrderRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).order(input, options);
          }, { path: [7, 1] }),
          /**
           * getBids queries bids with filters.
           */
          getBids: withMetadata(async function getBids(input: akash_market_v1beta5_query_pb.QueryBidsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).bids(input, options);
          }, { path: [7, 2] }),
          /**
           * getBid queries bid details.
           */
          getBid: withMetadata(async function getBid(input: akash_market_v1beta5_query_pb.QueryBidRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).bid(input, options);
          }, { path: [7, 3] }),
          /**
           * getLeases queries leases with filters.
           */
          getLeases: withMetadata(async function getLeases(input: akash_market_v1beta5_query_pb.QueryLeasesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).leases(input, options);
          }, { path: [7, 4] }),
          /**
           * getLease queries lease details.
           */
          getLease: withMetadata(async function getLease(input: akash_market_v1beta5_query_pb.QueryLeaseRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).lease(input, options);
          }, { path: [7, 5] }),
          /**
           * getParams returns the total set of minting parameters.
           */
          getParams: withMetadata(async function getParams(input: akash_market_v1beta5_query_pb.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getClient(service).params(input, options);
          }, { path: [7, 6] }),
          /**
           * createBid defines a method to create a bid given proper inputs.
           */
          createBid: withMetadata(async function createBid(input: akash_market_v1beta5_bidmsg_pb.MsgCreateBidJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(8);
            return getMsgClient(service).createBid(input, options);
          }, { path: [8, 0] }),
          /**
           * closeBid defines a method to close a bid given proper inputs.
           */
          closeBid: withMetadata(async function closeBid(input: akash_market_v1beta5_bidmsg_pb.MsgCloseBidJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(8);
            return getMsgClient(service).closeBid(input, options);
          }, { path: [8, 1] }),
          /**
           * withdrawLease withdraws accrued funds from the lease payment
           */
          withdrawLease: withMetadata(async function withdrawLease(input: akash_market_v1beta5_leasemsg_pb.MsgWithdrawLeaseJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(8);
            return getMsgClient(service).withdrawLease(input, options);
          }, { path: [8, 2] }),
          /**
           * createLease creates a new lease
           */
          createLease: withMetadata(async function createLease(input: akash_market_v1beta5_leasemsg_pb.MsgCreateLeaseJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(8);
            return getMsgClient(service).createLease(input, options);
          }, { path: [8, 3] }),
          /**
           * closeLease defines a method to close an order given proper inputs.
           */
          closeLease: withMetadata(async function closeLease(input: akash_market_v1beta5_leasemsg_pb.MsgCloseLeaseJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(8);
            return getMsgClient(service).closeLease(input, options);
          }, { path: [8, 4] }),
          /**
           * updateParams defines a governance operation for updating the x/market module
           * parameters. The authority is hard-coded to the x/gov module account.
           *
           * Since: akash v1.0.0
           */
          updateParams: withMetadata(async function updateParams(input: akash_market_v1beta5_paramsmsg_pb.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(8);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [8, 5] })
        }
      },
      provider: {
        v1beta4: {
          /**
           * getProviders queries providers
           */
          getProviders: withMetadata(async function getProviders(input: akash_provider_v1beta4_query_pb.QueryProvidersRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(9);
            return getClient(service).providers(input, options);
          }, { path: [9, 0] }),
          /**
           * getProvider queries provider details
           */
          getProvider: withMetadata(async function getProvider(input: akash_provider_v1beta4_query_pb.QueryProviderRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(9);
            return getClient(service).provider(input, options);
          }, { path: [9, 1] }),
          /**
           * createProvider defines a method that creates a provider given the proper inputs.
           */
          createProvider: withMetadata(async function createProvider(input: akash_provider_v1beta4_msg_pb.MsgCreateProviderJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(10);
            return getMsgClient(service).createProvider(input, options);
          }, { path: [10, 0] }),
          /**
           * updateProvider defines a method that updates a provider given the proper inputs.
           */
          updateProvider: withMetadata(async function updateProvider(input: akash_provider_v1beta4_msg_pb.MsgUpdateProviderJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(10);
            return getMsgClient(service).updateProvider(input, options);
          }, { path: [10, 1] }),
          /**
           * deleteProvider defines a method that deletes a provider given the proper inputs.
           */
          deleteProvider: withMetadata(async function deleteProvider(input: akash_provider_v1beta4_msg_pb.MsgDeleteProviderJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(10);
            return getMsgClient(service).deleteProvider(input, options);
          }, { path: [10, 2] })
        }
      },
      staking: {
        v1beta3: {
          /**
           * getParams returns the total set of minting parameters.
           */
          getParams: withMetadata(async function getParams(input: akash_staking_v1beta3_query_pb.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(11);
            return getClient(service).params(input, options);
          }, { path: [11, 0] }),
          /**
           * updateParams defines a governance operation for updating the x/market module
           * parameters. The authority is hard-coded to the x/gov module account.
           *
           * Since: akash v1.0.0
           */
          updateParams: withMetadata(async function updateParams(input: akash_staking_v1beta3_paramsmsg_pb.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(12);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [12, 0] })
        }
      },
      take: {
        v1: {
          /**
           * getParams returns the total set of minting parameters.
           */
          getParams: withMetadata(async function getParams(input: akash_take_v1_query_pb.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(13);
            return getClient(service).params(input, options);
          }, { path: [13, 0] }),
          /**
           * updateParams defines a governance operation for updating the x/market module
           * parameters. The authority is hard-coded to the x/gov module account.
           *
           * Since: akash v1.0.0
           */
          updateParams: withMetadata(async function updateParams(input: akash_take_v1_paramsmsg_pb.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(14);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [14, 0] })
        }
      }
    }
  };
}
