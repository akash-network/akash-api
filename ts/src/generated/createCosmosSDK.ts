import type * as cosmos_app_v1alpha1_query from "./protos/cosmos/app/v1alpha1/query_pb.ts";
import type * as cosmos_auth_v1beta1_query from "./protos/cosmos/auth/v1beta1/query_pb.ts";
import type * as cosmos_auth_v1beta1_tx from "./protos/cosmos/auth/v1beta1/tx_pb.ts";
import type * as cosmos_authz_v1beta1_query from "./protos/cosmos/authz/v1beta1/query_pb.ts";
import type * as cosmos_authz_v1beta1_tx from "./protos/cosmos/authz/v1beta1/tx_pb.ts";
import type * as cosmos_autocli_v1_query from "./protos/cosmos/autocli/v1/query_pb.ts";
import type * as cosmos_bank_v1beta1_query from "./protos/cosmos/bank/v1beta1/query_pb.ts";
import type * as cosmos_bank_v1beta1_tx from "./protos/cosmos/bank/v1beta1/tx_pb.ts";
import type * as tendermint_abci_types from "./protos/tendermint/abci/types_pb.ts";
import type * as cosmos_base_node_v1beta1_query from "./protos/cosmos/base/node/v1beta1/query_pb.ts";
import type * as cosmos_base_reflection_v1beta1_reflection from "./protos/cosmos/base/reflection/v1beta1/reflection_pb.ts";
import type * as cosmos_base_reflection_v2alpha1_reflection from "./protos/cosmos/base/reflection/v2alpha1/reflection_pb.ts";
import type * as cosmos_base_tendermint_v1beta1_query from "./protos/cosmos/base/tendermint/v1beta1/query_pb.ts";
import type * as cosmos_consensus_v1_query from "./protos/cosmos/consensus/v1/query_pb.ts";
import type * as cosmos_consensus_v1_tx from "./protos/cosmos/consensus/v1/tx_pb.ts";
import type * as cosmos_crisis_v1beta1_tx from "./protos/cosmos/crisis/v1beta1/tx_pb.ts";
import type * as cosmos_distribution_v1beta1_query from "./protos/cosmos/distribution/v1beta1/query_pb.ts";
import type * as cosmos_distribution_v1beta1_tx from "./protos/cosmos/distribution/v1beta1/tx_pb.ts";
import type * as cosmos_evidence_v1beta1_query from "./protos/cosmos/evidence/v1beta1/query_pb.ts";
import type * as cosmos_evidence_v1beta1_tx from "./protos/cosmos/evidence/v1beta1/tx_pb.ts";
import type * as cosmos_feegrant_v1beta1_query from "./protos/cosmos/feegrant/v1beta1/query_pb.ts";
import type * as cosmos_feegrant_v1beta1_tx from "./protos/cosmos/feegrant/v1beta1/tx_pb.ts";
import type * as cosmos_gov_v1_query from "./protos/cosmos/gov/v1/query_pb.ts";
import type * as cosmos_gov_v1_tx from "./protos/cosmos/gov/v1/tx_pb.ts";
import type * as cosmos_gov_v1beta1_query from "./protos/cosmos/gov/v1beta1/query_pb.ts";
import type * as cosmos_gov_v1beta1_tx from "./protos/cosmos/gov/v1beta1/tx_pb.ts";
import type * as cosmos_group_v1_query from "./protos/cosmos/group/v1/query_pb.ts";
import type * as cosmos_group_v1_tx from "./protos/cosmos/group/v1/tx_pb.ts";
import type * as cosmos_mint_v1beta1_query from "./protos/cosmos/mint/v1beta1/query_pb.ts";
import type * as cosmos_mint_v1beta1_tx from "./protos/cosmos/mint/v1beta1/tx_pb.ts";
import type * as cosmos_nft_v1beta1_query from "./protos/cosmos/nft/v1beta1/query_pb.ts";
import type * as cosmos_nft_v1beta1_tx from "./protos/cosmos/nft/v1beta1/tx_pb.ts";
import type * as cosmos_orm_query_v1alpha1_query from "./protos/cosmos/orm/query/v1alpha1/query_pb.ts";
import type * as cosmos_params_v1beta1_query from "./protos/cosmos/params/v1beta1/query_pb.ts";
import type * as cosmos_reflection_v1_reflection from "./protos/cosmos/reflection/v1/reflection_pb.ts";
import type * as cosmos_slashing_v1beta1_query from "./protos/cosmos/slashing/v1beta1/query_pb.ts";
import type * as cosmos_slashing_v1beta1_tx from "./protos/cosmos/slashing/v1beta1/tx_pb.ts";
import type * as cosmos_staking_v1beta1_query from "./protos/cosmos/staking/v1beta1/query_pb.ts";
import type * as cosmos_staking_v1beta1_tx from "./protos/cosmos/staking/v1beta1/tx_pb.ts";
import type * as cosmos_tx_v1beta1_service from "./protos/cosmos/tx/v1beta1/service_pb.ts";
import type * as cosmos_upgrade_v1beta1_query from "./protos/cosmos/upgrade/v1beta1/query_pb.ts";
import type * as cosmos_upgrade_v1beta1_tx from "./protos/cosmos/upgrade/v1beta1/tx_pb.ts";
import type * as cosmos_vesting_v1beta1_tx from "./protos/cosmos/vesting/v1beta1/tx_pb.ts";
import { createClientFactory } from "../client/createClientFactory.ts";
import type { Transport, CallOptions, TxCallOptions } from "../transport/types.ts";
import type { SDKOptions } from "../sdk/types.ts";
import { createServiceLoader } from "../utils/createServiceLoader.ts";
import { withMetadata } from "../utils/sdkMetadata.ts";


export const serviceLoader = createServiceLoader([
  () => import("./protos/cosmos/app/v1alpha1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/auth/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/auth/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/authz/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/authz/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/autocli/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/bank/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/bank/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/tendermint/abci/types_pb.ts").then(m => m.ABCIApplication),
  () => import("./protos/cosmos/base/node/v1beta1/query_pb.ts").then(m => m.Service),
  () => import("./protos/cosmos/base/reflection/v1beta1/reflection_pb.ts").then(m => m.ReflectionService),
  () => import("./protos/cosmos/base/reflection/v2alpha1/reflection_pb.ts").then(m => m.ReflectionService),
  () => import("./protos/cosmos/base/tendermint/v1beta1/query_pb.ts").then(m => m.Service),
  () => import("./protos/cosmos/consensus/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/consensus/v1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/crisis/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/distribution/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/distribution/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/evidence/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/evidence/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/feegrant/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/feegrant/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/gov/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/gov/v1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/gov/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/gov/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/group/v1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/group/v1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/mint/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/mint/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/nft/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/nft/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/orm/query/v1alpha1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/params/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/reflection/v1/reflection_pb.ts").then(m => m.ReflectionService),
  () => import("./protos/cosmos/slashing/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/slashing/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/staking/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/staking/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/tx/v1beta1/service_pb.ts").then(m => m.Service),
  () => import("./protos/cosmos/upgrade/v1beta1/query_pb.ts").then(m => m.Query),
  () => import("./protos/cosmos/upgrade/v1beta1/tx_pb.ts").then(m => m.Msg),
  () => import("./protos/cosmos/vesting/v1beta1/tx_pb.ts").then(m => m.Msg)
] as const);
export function createSDK(queryTransport: Transport, txTransport: Transport, options?: SDKOptions) {
  const getClient = createClientFactory(queryTransport, options?.clientOptions);
  const getMsgClient = createClientFactory(txTransport, options?.clientOptions);
  return {
    cosmos: {
      app: {
        v1alpha1: {
          /**
           * getConfig returns the current app config.
           */
          getConfig: withMetadata(async function getConfig(input: cosmos_app_v1alpha1_query.QueryConfigRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(0);
            return getClient(service).config(input, options);
          }, { path: [0, 0] })
        }
      },
      auth: {
        v1beta1: {
          /**
           * getAccounts returns all the existing accounts.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           *
           * Since: cosmos-sdk 0.43
           */
          getAccounts: withMetadata(async function getAccounts(input: cosmos_auth_v1beta1_query.QueryAccountsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).accounts(input, options);
          }, { path: [1, 0] }),
          /**
           * getAccount returns account details based on address.
           */
          getAccount: withMetadata(async function getAccount(input: cosmos_auth_v1beta1_query.QueryAccountRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).account(input, options);
          }, { path: [1, 1] }),
          /**
           * getAccountAddressByID returns account address based on account number.
           *
           * Since: cosmos-sdk 0.46.2
           */
          getAccountAddressByID: withMetadata(async function getAccountAddressByID(input: cosmos_auth_v1beta1_query.QueryAccountAddressByIDRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).accountAddressByID(input, options);
          }, { path: [1, 2] }),
          /**
           * getParams queries all parameters.
           */
          getParams: withMetadata(async function getParams(input: cosmos_auth_v1beta1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).params(input, options);
          }, { path: [1, 3] }),
          /**
           * getModuleAccounts returns all the existing module accounts.
           *
           * Since: cosmos-sdk 0.46
           */
          getModuleAccounts: withMetadata(async function getModuleAccounts(input: cosmos_auth_v1beta1_query.QueryModuleAccountsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).moduleAccounts(input, options);
          }, { path: [1, 4] }),
          /**
           * getModuleAccountByName returns the module account info by module name
           */
          getModuleAccountByName: withMetadata(async function getModuleAccountByName(input: cosmos_auth_v1beta1_query.QueryModuleAccountByNameRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).moduleAccountByName(input, options);
          }, { path: [1, 5] }),
          /**
           * getBech32Prefix queries bech32Prefix
           *
           * Since: cosmos-sdk 0.46
           */
          getBech32Prefix: withMetadata(async function getBech32Prefix(input: cosmos_auth_v1beta1_query.Bech32PrefixRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).bech32Prefix(input, options);
          }, { path: [1, 6] }),
          /**
           * getAddressBytesToString converts Account Address bytes to string
           *
           * Since: cosmos-sdk 0.46
           */
          getAddressBytesToString: withMetadata(async function getAddressBytesToString(input: cosmos_auth_v1beta1_query.AddressBytesToStringRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).addressBytesToString(input, options);
          }, { path: [1, 7] }),
          /**
           * getAddressStringToBytes converts Address string to bytes
           *
           * Since: cosmos-sdk 0.46
           */
          getAddressStringToBytes: withMetadata(async function getAddressStringToBytes(input: cosmos_auth_v1beta1_query.AddressStringToBytesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).addressStringToBytes(input, options);
          }, { path: [1, 8] }),
          /**
           * getAccountInfo queries account info which is common to all account types.
           *
           * Since: cosmos-sdk 0.47
           */
          getAccountInfo: withMetadata(async function getAccountInfo(input: cosmos_auth_v1beta1_query.QueryAccountInfoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(1);
            return getClient(service).accountInfo(input, options);
          }, { path: [1, 9] }),
          /**
           * updateParams defines a (governance) operation for updating the x/auth module
           * parameters. The authority defaults to the x/gov module account.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_auth_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(2);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [2, 0] })
        }
      },
      authz: {
        v1beta1: {
          /**
           * Returns list of `Authorization`, granted to the grantee by the granter.
           */
          getGrants: withMetadata(async function getGrants(input: cosmos_authz_v1beta1_query.QueryGrantsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getClient(service).grants(input, options);
          }, { path: [3, 0] }),
          /**
           * getGranterGrants returns list of `GrantAuthorization`, granted by granter.
           *
           * Since: cosmos-sdk 0.46
           */
          getGranterGrants: withMetadata(async function getGranterGrants(input: cosmos_authz_v1beta1_query.QueryGranterGrantsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getClient(service).granterGrants(input, options);
          }, { path: [3, 1] }),
          /**
           * getGranteeGrants returns a list of `GrantAuthorization` by grantee.
           *
           * Since: cosmos-sdk 0.46
           */
          getGranteeGrants: withMetadata(async function getGranteeGrants(input: cosmos_authz_v1beta1_query.QueryGranteeGrantsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(3);
            return getClient(service).granteeGrants(input, options);
          }, { path: [3, 2] }),
          /**
           * grant grants the provided authorization to the grantee on the granter's
           * account with the provided expiration time. If there is already a grant
           * for the given (granter, grantee, Authorization) triple, then the grant
           * will be overwritten.
           */
          grant: withMetadata(async function grant(input: cosmos_authz_v1beta1_tx.MsgGrantJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getMsgClient(service).grant(input, options);
          }, { path: [4, 0] }),
          /**
           * exec attempts to execute the provided messages using
           * authorizations granted to the grantee. Each message should have only
           * one signer corresponding to the granter of the authorization.
           */
          exec: withMetadata(async function exec(input: cosmos_authz_v1beta1_tx.MsgExecJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getMsgClient(service).exec(input, options);
          }, { path: [4, 1] }),
          /**
           * revoke revokes any authorization corresponding to the provided method name on the
           * granter's account that has been granted to the grantee.
           */
          revoke: withMetadata(async function revoke(input: cosmos_authz_v1beta1_tx.MsgRevokeJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(4);
            return getMsgClient(service).revoke(input, options);
          }, { path: [4, 2] })
        }
      },
      autocli: {
        v1: {
          /**
           * getAppOptions returns the autocli options for all of the modules in an app.
           */
          getAppOptions: withMetadata(async function getAppOptions(input: cosmos_autocli_v1_query.AppOptionsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(5);
            return getClient(service).appOptions(input, options);
          }, { path: [5, 0] })
        }
      },
      bank: {
        v1beta1: {
          /**
           * getBalance queries the balance of a single coin for a single account.
           */
          getBalance: withMetadata(async function getBalance(input: cosmos_bank_v1beta1_query.QueryBalanceRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).balance(input, options);
          }, { path: [6, 0] }),
          /**
           * getAllBalances queries the balance of all coins for a single account.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getAllBalances: withMetadata(async function getAllBalances(input: cosmos_bank_v1beta1_query.QueryAllBalancesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).allBalances(input, options);
          }, { path: [6, 1] }),
          /**
           * getSpendableBalances queries the spendable balance of all coins for a single
           * account.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           *
           * Since: cosmos-sdk 0.46
           */
          getSpendableBalances: withMetadata(async function getSpendableBalances(input: cosmos_bank_v1beta1_query.QuerySpendableBalancesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).spendableBalances(input, options);
          }, { path: [6, 2] }),
          /**
           * getSpendableBalanceByDenom queries the spendable balance of a single denom for
           * a single account.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           *
           * Since: cosmos-sdk 0.47
           */
          getSpendableBalanceByDenom: withMetadata(async function getSpendableBalanceByDenom(input: cosmos_bank_v1beta1_query.QuerySpendableBalanceByDenomRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).spendableBalanceByDenom(input, options);
          }, { path: [6, 3] }),
          /**
           * getTotalSupply queries the total supply of all coins.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getTotalSupply: withMetadata(async function getTotalSupply(input: cosmos_bank_v1beta1_query.QueryTotalSupplyRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).totalSupply(input, options);
          }, { path: [6, 4] }),
          /**
           * getSupplyOf queries the supply of a single coin.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getSupplyOf: withMetadata(async function getSupplyOf(input: cosmos_bank_v1beta1_query.QuerySupplyOfRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).supplyOf(input, options);
          }, { path: [6, 5] }),
          /**
           * getParams queries the parameters of x/bank module.
           */
          getParams: withMetadata(async function getParams(input: cosmos_bank_v1beta1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).params(input, options);
          }, { path: [6, 6] }),
          /**
           * DenomsMetadata queries the client metadata of a given coin denomination.
           */
          getDenomMetadata: withMetadata(async function getDenomMetadata(input: cosmos_bank_v1beta1_query.QueryDenomMetadataRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).denomMetadata(input, options);
          }, { path: [6, 7] }),
          /**
           * getDenomsMetadata queries the client metadata for all registered coin
           * denominations.
           */
          getDenomsMetadata: withMetadata(async function getDenomsMetadata(input: cosmos_bank_v1beta1_query.QueryDenomsMetadataRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).denomsMetadata(input, options);
          }, { path: [6, 8] }),
          /**
           * getDenomOwners queries for all account addresses that own a particular token
           * denomination.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           *
           * Since: cosmos-sdk 0.46
           */
          getDenomOwners: withMetadata(async function getDenomOwners(input: cosmos_bank_v1beta1_query.QueryDenomOwnersRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).denomOwners(input, options);
          }, { path: [6, 9] }),
          /**
           * getSendEnabled queries for getSendEnabled entries.
           *
           * This query only returns denominations that have specific getSendEnabled settings.
           * Any denomination that does not have a specific setting will use the default
           * params.default_send_enabled, and will not be returned by this query.
           *
           * Since: cosmos-sdk 0.47
           */
          getSendEnabled: withMetadata(async function getSendEnabled(input: cosmos_bank_v1beta1_query.QuerySendEnabledRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(6);
            return getClient(service).sendEnabled(input, options);
          }, { path: [6, 10] }),
          /**
           * send defines a method for sending coins from one account to another account.
           */
          send: withMetadata(async function send(input: cosmos_bank_v1beta1_tx.MsgSendJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getMsgClient(service).send(input, options);
          }, { path: [7, 0] }),
          /**
           * multiSend defines a method for sending coins from some accounts to other accounts.
           */
          multiSend: withMetadata(async function multiSend(input: cosmos_bank_v1beta1_tx.MsgMultiSendJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getMsgClient(service).multiSend(input, options);
          }, { path: [7, 1] }),
          /**
           * updateParams defines a governance operation for updating the x/bank module parameters.
           * The authority is defined in the keeper.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_bank_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [7, 2] }),
          /**
           * setSendEnabled is a governance operation for setting the SendEnabled flag
           * on any number of Denoms. Only the entries to add or update should be
           * included. Entries that already exist in the store, but that aren't
           * included in this message, will be left unchanged.
           *
           * Since: cosmos-sdk 0.47
           */
          setSendEnabled: withMetadata(async function setSendEnabled(input: cosmos_bank_v1beta1_tx.MsgSetSendEnabledJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(7);
            return getMsgClient(service).setSendEnabled(input, options);
          }, { path: [7, 3] })
        }
      },
      base: {
        node: {
          v1beta1: {
            /**
             * getConfig queries for the operator configuration.
             */
            getConfig: withMetadata(async function getConfig(input: cosmos_base_node_v1beta1_query.ConfigRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(9);
              return getClient(service).config(input, options);
            }, { path: [9, 0] })
          }
        },
        reflection: {
          v1beta1: {
            /**
             * getListAllInterfaces lists all the interfaces registered in the interface
             * registry.
             */
            getListAllInterfaces: withMetadata(async function getListAllInterfaces(input: cosmos_base_reflection_v1beta1_reflection.ListAllInterfacesRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(10);
              return getClient(service).listAllInterfaces(input, options);
            }, { path: [10, 0] }),
            /**
             * getListImplementations list all the concrete types that implement a given
             * interface.
             */
            getListImplementations: withMetadata(async function getListImplementations(input: cosmos_base_reflection_v1beta1_reflection.ListImplementationsRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(10);
              return getClient(service).listImplementations(input, options);
            }, { path: [10, 1] })
          },
          v2alpha1: {
            /**
             * getAuthnDescriptor returns information on how to authenticate transactions in the application
             * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
             * future releases of the cosmos-sdk.
             */
            getAuthnDescriptor: withMetadata(async function getAuthnDescriptor(input: cosmos_base_reflection_v2alpha1_reflection.GetAuthnDescriptorRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(11);
              return getClient(service).getAuthnDescriptor(input, options);
            }, { path: [11, 0] }),
            /**
             * getChainDescriptor returns the description of the chain
             */
            getChainDescriptor: withMetadata(async function getChainDescriptor(input: cosmos_base_reflection_v2alpha1_reflection.GetChainDescriptorRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(11);
              return getClient(service).getChainDescriptor(input, options);
            }, { path: [11, 1] }),
            /**
             * getCodecDescriptor returns the descriptor of the codec of the application
             */
            getCodecDescriptor: withMetadata(async function getCodecDescriptor(input: cosmos_base_reflection_v2alpha1_reflection.GetCodecDescriptorRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(11);
              return getClient(service).getCodecDescriptor(input, options);
            }, { path: [11, 2] }),
            /**
             * getConfigurationDescriptor returns the descriptor for the sdk.Config of the application
             */
            getConfigurationDescriptor: withMetadata(async function getConfigurationDescriptor(input: cosmos_base_reflection_v2alpha1_reflection.GetConfigurationDescriptorRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(11);
              return getClient(service).getConfigurationDescriptor(input, options);
            }, { path: [11, 3] }),
            /**
             * getQueryServicesDescriptor returns the available gRPC queryable services of the application
             */
            getQueryServicesDescriptor: withMetadata(async function getQueryServicesDescriptor(input: cosmos_base_reflection_v2alpha1_reflection.GetQueryServicesDescriptorRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(11);
              return getClient(service).getQueryServicesDescriptor(input, options);
            }, { path: [11, 4] }),
            /**
             * getTxDescriptor returns information on the used transaction object and available msgs that can be used
             */
            getTxDescriptor: withMetadata(async function getTxDescriptor(input: cosmos_base_reflection_v2alpha1_reflection.GetTxDescriptorRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(11);
              return getClient(service).getTxDescriptor(input, options);
            }, { path: [11, 5] })
          }
        },
        tendermint: {
          v1beta1: {
            /**
             * getNodeInfo queries the current node info.
             */
            getNodeInfo: withMetadata(async function getNodeInfo(input: cosmos_base_tendermint_v1beta1_query.GetNodeInfoRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).getNodeInfo(input, options);
            }, { path: [12, 0] }),
            /**
             * getSyncing queries node syncing.
             */
            getSyncing: withMetadata(async function getSyncing(input: cosmos_base_tendermint_v1beta1_query.GetSyncingRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).getSyncing(input, options);
            }, { path: [12, 1] }),
            /**
             * getLatestBlock returns the latest block.
             */
            getLatestBlock: withMetadata(async function getLatestBlock(input: cosmos_base_tendermint_v1beta1_query.GetLatestBlockRequestJson = {}, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).getLatestBlock(input, options);
            }, { path: [12, 2] }),
            /**
             * getBlockByHeight queries block for given height.
             */
            getBlockByHeight: withMetadata(async function getBlockByHeight(input: cosmos_base_tendermint_v1beta1_query.GetBlockByHeightRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).getBlockByHeight(input, options);
            }, { path: [12, 3] }),
            /**
             * getLatestValidatorSet queries latest validator-set.
             */
            getLatestValidatorSet: withMetadata(async function getLatestValidatorSet(input: cosmos_base_tendermint_v1beta1_query.GetLatestValidatorSetRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).getLatestValidatorSet(input, options);
            }, { path: [12, 4] }),
            /**
             * getValidatorSetByHeight queries validator-set at a given height.
             */
            getValidatorSetByHeight: withMetadata(async function getValidatorSetByHeight(input: cosmos_base_tendermint_v1beta1_query.GetValidatorSetByHeightRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).getValidatorSetByHeight(input, options);
            }, { path: [12, 5] }),
            /**
             * getABCIQuery defines a query handler that supports ABCI queries directly to the
             * application, bypassing Tendermint completely. The ABCI query must contain
             * a valid and supported path, including app, custom, p2p, and store.
             *
             * Since: cosmos-sdk 0.46
             */
            getABCIQuery: withMetadata(async function getABCIQuery(input: cosmos_base_tendermint_v1beta1_query.ABCIQueryRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(12);
              return getClient(service).aBCIQuery(input, options);
            }, { path: [12, 6] })
          }
        }
      },
      consensus: {
        v1: {
          /**
           * getParams queries the parameters of x/consensus_param module.
           */
          getParams: withMetadata(async function getParams(input: cosmos_consensus_v1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(13);
            return getClient(service).params(input, options);
          }, { path: [13, 0] }),
          /**
           * updateParams defines a governance operation for updating the x/consensus_param module parameters.
           * The authority is defined in the keeper.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_consensus_v1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(14);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [14, 0] })
        }
      },
      crisis: {
        v1beta1: {
          /**
           * verifyInvariant defines a method to verify a particular invariant.
           */
          verifyInvariant: withMetadata(async function verifyInvariant(input: cosmos_crisis_v1beta1_tx.MsgVerifyInvariantJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(15);
            return getMsgClient(service).verifyInvariant(input, options);
          }, { path: [15, 0] }),
          /**
           * updateParams defines a governance operation for updating the x/crisis module
           * parameters. The authority is defined in the keeper.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_crisis_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(15);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [15, 1] })
        }
      },
      distribution: {
        v1beta1: {
          /**
           * getParams queries params of the distribution module.
           */
          getParams: withMetadata(async function getParams(input: cosmos_distribution_v1beta1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).params(input, options);
          }, { path: [16, 0] }),
          /**
           * getValidatorDistributionInfo queries validator commission and self-delegation rewards for validator
           */
          getValidatorDistributionInfo: withMetadata(async function getValidatorDistributionInfo(input: cosmos_distribution_v1beta1_query.QueryValidatorDistributionInfoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).validatorDistributionInfo(input, options);
          }, { path: [16, 1] }),
          /**
           * getValidatorOutstandingRewards queries rewards of a validator address.
           */
          getValidatorOutstandingRewards: withMetadata(async function getValidatorOutstandingRewards(input: cosmos_distribution_v1beta1_query.QueryValidatorOutstandingRewardsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).validatorOutstandingRewards(input, options);
          }, { path: [16, 2] }),
          /**
           * getValidatorCommission queries accumulated commission for a validator.
           */
          getValidatorCommission: withMetadata(async function getValidatorCommission(input: cosmos_distribution_v1beta1_query.QueryValidatorCommissionRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).validatorCommission(input, options);
          }, { path: [16, 3] }),
          /**
           * getValidatorSlashes queries slash events of a validator.
           */
          getValidatorSlashes: withMetadata(async function getValidatorSlashes(input: cosmos_distribution_v1beta1_query.QueryValidatorSlashesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).validatorSlashes(input, options);
          }, { path: [16, 4] }),
          /**
           * getDelegationRewards queries the total rewards accrued by a delegation.
           */
          getDelegationRewards: withMetadata(async function getDelegationRewards(input: cosmos_distribution_v1beta1_query.QueryDelegationRewardsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).delegationRewards(input, options);
          }, { path: [16, 5] }),
          /**
           * getDelegationTotalRewards queries the total rewards accrued by a each
           * validator.
           */
          getDelegationTotalRewards: withMetadata(async function getDelegationTotalRewards(input: cosmos_distribution_v1beta1_query.QueryDelegationTotalRewardsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).delegationTotalRewards(input, options);
          }, { path: [16, 6] }),
          /**
           * getDelegatorValidators queries the validators of a delegator.
           */
          getDelegatorValidators: withMetadata(async function getDelegatorValidators(input: cosmos_distribution_v1beta1_query.QueryDelegatorValidatorsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).delegatorValidators(input, options);
          }, { path: [16, 7] }),
          /**
           * getDelegatorWithdrawAddress queries withdraw address of a delegator.
           */
          getDelegatorWithdrawAddress: withMetadata(async function getDelegatorWithdrawAddress(input: cosmos_distribution_v1beta1_query.QueryDelegatorWithdrawAddressRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).delegatorWithdrawAddress(input, options);
          }, { path: [16, 8] }),
          /**
           * getCommunityPool queries the community pool coins.
           */
          getCommunityPool: withMetadata(async function getCommunityPool(input: cosmos_distribution_v1beta1_query.QueryCommunityPoolRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).communityPool(input, options);
          }, { path: [16, 9] }),
          /**
           * getTokenizeShareRecordReward queries the tokenize share record rewards
           */
          getTokenizeShareRecordReward: withMetadata(async function getTokenizeShareRecordReward(input: cosmos_distribution_v1beta1_query.QueryTokenizeShareRecordRewardRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(16);
            return getClient(service).tokenizeShareRecordReward(input, options);
          }, { path: [16, 10] }),
          /**
           * setWithdrawAddress defines a method to change the withdraw address
           * for a delegator (or validator self-delegation).
           */
          setWithdrawAddress: withMetadata(async function setWithdrawAddress(input: cosmos_distribution_v1beta1_tx.MsgSetWithdrawAddressJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).setWithdrawAddress(input, options);
          }, { path: [17, 0] }),
          /**
           * withdrawDelegatorReward defines a method to withdraw rewards of delegator
           * from a single validator.
           */
          withdrawDelegatorReward: withMetadata(async function withdrawDelegatorReward(input: cosmos_distribution_v1beta1_tx.MsgWithdrawDelegatorRewardJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).withdrawDelegatorReward(input, options);
          }, { path: [17, 1] }),
          /**
           * withdrawValidatorCommission defines a method to withdraw the
           * full commission to the validator address.
           */
          withdrawValidatorCommission: withMetadata(async function withdrawValidatorCommission(input: cosmos_distribution_v1beta1_tx.MsgWithdrawValidatorCommissionJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).withdrawValidatorCommission(input, options);
          }, { path: [17, 2] }),
          /**
           * fundCommunityPool defines a method to allow an account to directly
           * fund the community pool.
           */
          fundCommunityPool: withMetadata(async function fundCommunityPool(input: cosmos_distribution_v1beta1_tx.MsgFundCommunityPoolJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).fundCommunityPool(input, options);
          }, { path: [17, 3] }),
          /**
           * updateParams defines a governance operation for updating the x/distribution
           * module parameters. The authority is defined in the keeper.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_distribution_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [17, 4] }),
          /**
           * communityPoolSpend defines a governance operation for sending tokens from
           * the community pool in the x/distribution module to another account, which
           * could be the governance module itself. The authority is defined in the
           * keeper.
           *
           * Since: cosmos-sdk 0.47
           */
          communityPoolSpend: withMetadata(async function communityPoolSpend(input: cosmos_distribution_v1beta1_tx.MsgCommunityPoolSpendJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).communityPoolSpend(input, options);
          }, { path: [17, 5] }),
          /**
           * withdrawTokenizeShareRecordReward defines a method to withdraw reward for an owning TokenizeShareRecord
           */
          withdrawTokenizeShareRecordReward: withMetadata(async function withdrawTokenizeShareRecordReward(input: cosmos_distribution_v1beta1_tx.MsgWithdrawTokenizeShareRecordRewardJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).withdrawTokenizeShareRecordReward(input, options);
          }, { path: [17, 6] }),
          /**
           * withdrawAllTokenizeShareRecordReward defines a method to withdraw reward for all owning TokenizeShareRecord
           */
          withdrawAllTokenizeShareRecordReward: withMetadata(async function withdrawAllTokenizeShareRecordReward(input: cosmos_distribution_v1beta1_tx.MsgWithdrawAllTokenizeShareRecordRewardJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(17);
            return getMsgClient(service).withdrawAllTokenizeShareRecordReward(input, options);
          }, { path: [17, 7] })
        }
      },
      evidence: {
        v1beta1: {
          /**
           * getEvidence queries evidence based on evidence hash.
           */
          getEvidence: withMetadata(async function getEvidence(input: cosmos_evidence_v1beta1_query.QueryEvidenceRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(18);
            return getClient(service).evidence(input, options);
          }, { path: [18, 0] }),
          /**
           * getAllEvidence queries all evidence.
           */
          getAllEvidence: withMetadata(async function getAllEvidence(input: cosmos_evidence_v1beta1_query.QueryAllEvidenceRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(18);
            return getClient(service).allEvidence(input, options);
          }, { path: [18, 1] }),
          /**
           * submitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
           * counterfactual signing.
           */
          submitEvidence: withMetadata(async function submitEvidence(input: cosmos_evidence_v1beta1_tx.MsgSubmitEvidenceJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(19);
            return getMsgClient(service).submitEvidence(input, options);
          }, { path: [19, 0] })
        }
      },
      feegrant: {
        v1beta1: {
          /**
           * getAllowance returns fee granted to the grantee by the granter.
           */
          getAllowance: withMetadata(async function getAllowance(input: cosmos_feegrant_v1beta1_query.QueryAllowanceRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(20);
            return getClient(service).allowance(input, options);
          }, { path: [20, 0] }),
          /**
           * getAllowances returns all the grants for address.
           */
          getAllowances: withMetadata(async function getAllowances(input: cosmos_feegrant_v1beta1_query.QueryAllowancesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(20);
            return getClient(service).allowances(input, options);
          }, { path: [20, 1] }),
          /**
           * getAllowancesByGranter returns all the grants given by an address
           *
           * Since: cosmos-sdk 0.46
           */
          getAllowancesByGranter: withMetadata(async function getAllowancesByGranter(input: cosmos_feegrant_v1beta1_query.QueryAllowancesByGranterRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(20);
            return getClient(service).allowancesByGranter(input, options);
          }, { path: [20, 2] }),
          /**
           * grantAllowance grants fee allowance to the grantee on the granter's
           * account with the provided expiration time.
           */
          grantAllowance: withMetadata(async function grantAllowance(input: cosmos_feegrant_v1beta1_tx.MsgGrantAllowanceJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(21);
            return getMsgClient(service).grantAllowance(input, options);
          }, { path: [21, 0] }),
          /**
           * revokeAllowance revokes any fee allowance of granter's account that
           * has been granted to the grantee.
           */
          revokeAllowance: withMetadata(async function revokeAllowance(input: cosmos_feegrant_v1beta1_tx.MsgRevokeAllowanceJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(21);
            return getMsgClient(service).revokeAllowance(input, options);
          }, { path: [21, 1] })
        }
      },
      gov: {
        v1: {
          /**
           * getProposal queries proposal details based on ProposalID.
           */
          getProposal: withMetadata(async function getProposal(input: cosmos_gov_v1_query.QueryProposalRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).proposal(input, options);
          }, { path: [22, 0] }),
          /**
           * getProposals queries all proposals based on given status.
           */
          getProposals: withMetadata(async function getProposals(input: cosmos_gov_v1_query.QueryProposalsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).proposals(input, options);
          }, { path: [22, 1] }),
          /**
           * getVote queries voted information based on proposalID, voterAddr.
           */
          getVote: withMetadata(async function getVote(input: cosmos_gov_v1_query.QueryVoteRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).vote(input, options);
          }, { path: [22, 2] }),
          /**
           * getVotes queries votes of a given proposal.
           */
          getVotes: withMetadata(async function getVotes(input: cosmos_gov_v1_query.QueryVotesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).votes(input, options);
          }, { path: [22, 3] }),
          /**
           * getParams queries all parameters of the gov module.
           */
          getParams: withMetadata(async function getParams(input: cosmos_gov_v1_query.QueryParamsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).params(input, options);
          }, { path: [22, 4] }),
          /**
           * getDeposit queries single deposit information based proposalID, depositAddr.
           */
          getDeposit: withMetadata(async function getDeposit(input: cosmos_gov_v1_query.QueryDepositRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).deposit(input, options);
          }, { path: [22, 5] }),
          /**
           * getDeposits queries all deposits of a single proposal.
           */
          getDeposits: withMetadata(async function getDeposits(input: cosmos_gov_v1_query.QueryDepositsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).deposits(input, options);
          }, { path: [22, 6] }),
          /**
           * getTallyResult queries the tally of a proposal vote.
           */
          getTallyResult: withMetadata(async function getTallyResult(input: cosmos_gov_v1_query.QueryTallyResultRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(22);
            return getClient(service).tallyResult(input, options);
          }, { path: [22, 7] }),
          /**
           * submitProposal defines a method to create new proposal given the messages.
           */
          submitProposal: withMetadata(async function submitProposal(input: cosmos_gov_v1_tx.MsgSubmitProposalJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(23);
            return getMsgClient(service).submitProposal(input, options);
          }, { path: [23, 0] }),
          /**
           * execLegacyContent defines a Msg to be in included in a MsgSubmitProposal
           * to execute a legacy content-based proposal.
           */
          execLegacyContent: withMetadata(async function execLegacyContent(input: cosmos_gov_v1_tx.MsgExecLegacyContentJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(23);
            return getMsgClient(service).execLegacyContent(input, options);
          }, { path: [23, 1] }),
          /**
           * vote defines a method to add a vote on a specific proposal.
           */
          vote: withMetadata(async function vote(input: cosmos_gov_v1_tx.MsgVoteJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(23);
            return getMsgClient(service).vote(input, options);
          }, { path: [23, 2] }),
          /**
           * voteWeighted defines a method to add a weighted vote on a specific proposal.
           */
          voteWeighted: withMetadata(async function voteWeighted(input: cosmos_gov_v1_tx.MsgVoteWeightedJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(23);
            return getMsgClient(service).voteWeighted(input, options);
          }, { path: [23, 3] }),
          /**
           * deposit defines a method to add deposit on a specific proposal.
           */
          deposit: withMetadata(async function deposit(input: cosmos_gov_v1_tx.MsgDepositJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(23);
            return getMsgClient(service).deposit(input, options);
          }, { path: [23, 4] }),
          /**
           * updateParams defines a governance operation for updating the x/gov module
           * parameters. The authority is defined in the keeper.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_gov_v1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(23);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [23, 5] })
        },
        v1beta1: {
          /**
           * getProposal queries proposal details based on ProposalID.
           */
          getProposal: withMetadata(async function getProposal(input: cosmos_gov_v1beta1_query.QueryProposalRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).proposal(input, options);
          }, { path: [24, 0] }),
          /**
           * getProposals queries all proposals based on given status.
           */
          getProposals: withMetadata(async function getProposals(input: cosmos_gov_v1beta1_query.QueryProposalsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).proposals(input, options);
          }, { path: [24, 1] }),
          /**
           * getVote queries voted information based on proposalID, voterAddr.
           */
          getVote: withMetadata(async function getVote(input: cosmos_gov_v1beta1_query.QueryVoteRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).vote(input, options);
          }, { path: [24, 2] }),
          /**
           * getVotes queries votes of a given proposal.
           */
          getVotes: withMetadata(async function getVotes(input: cosmos_gov_v1beta1_query.QueryVotesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).votes(input, options);
          }, { path: [24, 3] }),
          /**
           * getParams queries all parameters of the gov module.
           */
          getParams: withMetadata(async function getParams(input: cosmos_gov_v1beta1_query.QueryParamsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).params(input, options);
          }, { path: [24, 4] }),
          /**
           * getDeposit queries single deposit information based proposalID, depositAddr.
           */
          getDeposit: withMetadata(async function getDeposit(input: cosmos_gov_v1beta1_query.QueryDepositRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).deposit(input, options);
          }, { path: [24, 5] }),
          /**
           * getDeposits queries all deposits of a single proposal.
           */
          getDeposits: withMetadata(async function getDeposits(input: cosmos_gov_v1beta1_query.QueryDepositsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).deposits(input, options);
          }, { path: [24, 6] }),
          /**
           * getTallyResult queries the tally of a proposal vote.
           */
          getTallyResult: withMetadata(async function getTallyResult(input: cosmos_gov_v1beta1_query.QueryTallyResultRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(24);
            return getClient(service).tallyResult(input, options);
          }, { path: [24, 7] }),
          /**
           * submitProposal defines a method to create new proposal given a content.
           */
          submitProposal: withMetadata(async function submitProposal(input: cosmos_gov_v1beta1_tx.MsgSubmitProposalJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(25);
            return getMsgClient(service).submitProposal(input, options);
          }, { path: [25, 0] }),
          /**
           * vote defines a method to add a vote on a specific proposal.
           */
          vote: withMetadata(async function vote(input: cosmos_gov_v1beta1_tx.MsgVoteJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(25);
            return getMsgClient(service).vote(input, options);
          }, { path: [25, 1] }),
          /**
           * voteWeighted defines a method to add a weighted vote on a specific proposal.
           *
           * Since: cosmos-sdk 0.43
           */
          voteWeighted: withMetadata(async function voteWeighted(input: cosmos_gov_v1beta1_tx.MsgVoteWeightedJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(25);
            return getMsgClient(service).voteWeighted(input, options);
          }, { path: [25, 2] }),
          /**
           * deposit defines a method to add deposit on a specific proposal.
           */
          deposit: withMetadata(async function deposit(input: cosmos_gov_v1beta1_tx.MsgDepositJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(25);
            return getMsgClient(service).deposit(input, options);
          }, { path: [25, 3] })
        }
      },
      group: {
        v1: {
          /**
           * getGroupInfo queries group info based on group id.
           */
          getGroupInfo: withMetadata(async function getGroupInfo(input: cosmos_group_v1_query.QueryGroupInfoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupInfo(input, options);
          }, { path: [26, 0] }),
          /**
           * getGroupPolicyInfo queries group policy info based on account address of group policy.
           */
          getGroupPolicyInfo: withMetadata(async function getGroupPolicyInfo(input: cosmos_group_v1_query.QueryGroupPolicyInfoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupPolicyInfo(input, options);
          }, { path: [26, 1] }),
          /**
           * getGroupMembers queries members of a group by group id.
           */
          getGroupMembers: withMetadata(async function getGroupMembers(input: cosmos_group_v1_query.QueryGroupMembersRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupMembers(input, options);
          }, { path: [26, 2] }),
          /**
           * getGroupsByAdmin queries groups by admin address.
           */
          getGroupsByAdmin: withMetadata(async function getGroupsByAdmin(input: cosmos_group_v1_query.QueryGroupsByAdminRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupsByAdmin(input, options);
          }, { path: [26, 3] }),
          /**
           * getGroupPoliciesByGroup queries group policies by group id.
           */
          getGroupPoliciesByGroup: withMetadata(async function getGroupPoliciesByGroup(input: cosmos_group_v1_query.QueryGroupPoliciesByGroupRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupPoliciesByGroup(input, options);
          }, { path: [26, 4] }),
          /**
           * getGroupPoliciesByAdmin queries group policies by admin address.
           */
          getGroupPoliciesByAdmin: withMetadata(async function getGroupPoliciesByAdmin(input: cosmos_group_v1_query.QueryGroupPoliciesByAdminRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupPoliciesByAdmin(input, options);
          }, { path: [26, 5] }),
          /**
           * getProposal queries a proposal based on proposal id.
           */
          getProposal: withMetadata(async function getProposal(input: cosmos_group_v1_query.QueryProposalRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).proposal(input, options);
          }, { path: [26, 6] }),
          /**
           * getProposalsByGroupPolicy queries proposals based on account address of group policy.
           */
          getProposalsByGroupPolicy: withMetadata(async function getProposalsByGroupPolicy(input: cosmos_group_v1_query.QueryProposalsByGroupPolicyRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).proposalsByGroupPolicy(input, options);
          }, { path: [26, 7] }),
          /**
           * getVoteByProposalVoter queries a vote by proposal id and voter.
           */
          getVoteByProposalVoter: withMetadata(async function getVoteByProposalVoter(input: cosmos_group_v1_query.QueryVoteByProposalVoterRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).voteByProposalVoter(input, options);
          }, { path: [26, 8] }),
          /**
           * getVotesByProposal queries a vote by proposal id.
           */
          getVotesByProposal: withMetadata(async function getVotesByProposal(input: cosmos_group_v1_query.QueryVotesByProposalRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).votesByProposal(input, options);
          }, { path: [26, 9] }),
          /**
           * getVotesByVoter queries a vote by voter.
           */
          getVotesByVoter: withMetadata(async function getVotesByVoter(input: cosmos_group_v1_query.QueryVotesByVoterRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).votesByVoter(input, options);
          }, { path: [26, 10] }),
          /**
           * getGroupsByMember queries groups by member address.
           */
          getGroupsByMember: withMetadata(async function getGroupsByMember(input: cosmos_group_v1_query.QueryGroupsByMemberRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groupsByMember(input, options);
          }, { path: [26, 11] }),
          /**
           * getTallyResult returns the tally result of a proposal. If the proposal is
           * still in voting period, then this query computes the current tally state,
           * which might not be final. On the other hand, if the proposal is final,
           * then it simply returns the `final_tally_result` state stored in the
           * proposal itself.
           */
          getTallyResult: withMetadata(async function getTallyResult(input: cosmos_group_v1_query.QueryTallyResultRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).tallyResult(input, options);
          }, { path: [26, 12] }),
          /**
           * getGroups queries all groups in state.
           *
           * Since: cosmos-sdk 0.47.1
           */
          getGroups: withMetadata(async function getGroups(input: cosmos_group_v1_query.QueryGroupsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(26);
            return getClient(service).groups(input, options);
          }, { path: [26, 13] }),
          /**
           * createGroup creates a new group with an admin account address, a list of members and some optional metadata.
           */
          createGroup: withMetadata(async function createGroup(input: cosmos_group_v1_tx.MsgCreateGroupJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).createGroup(input, options);
          }, { path: [27, 0] }),
          /**
           * updateGroupMembers updates the group members with given group id and admin address.
           */
          updateGroupMembers: withMetadata(async function updateGroupMembers(input: cosmos_group_v1_tx.MsgUpdateGroupMembersJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).updateGroupMembers(input, options);
          }, { path: [27, 1] }),
          /**
           * updateGroupAdmin updates the group admin with given group id and previous admin address.
           */
          updateGroupAdmin: withMetadata(async function updateGroupAdmin(input: cosmos_group_v1_tx.MsgUpdateGroupAdminJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).updateGroupAdmin(input, options);
          }, { path: [27, 2] }),
          /**
           * updateGroupMetadata updates the group metadata with given group id and admin address.
           */
          updateGroupMetadata: withMetadata(async function updateGroupMetadata(input: cosmos_group_v1_tx.MsgUpdateGroupMetadataJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).updateGroupMetadata(input, options);
          }, { path: [27, 3] }),
          /**
           * createGroupPolicy creates a new group policy using given DecisionPolicy.
           */
          createGroupPolicy: withMetadata(async function createGroupPolicy(input: cosmos_group_v1_tx.MsgCreateGroupPolicyJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).createGroupPolicy(input, options);
          }, { path: [27, 4] }),
          /**
           * createGroupWithPolicy creates a new group with policy.
           */
          createGroupWithPolicy: withMetadata(async function createGroupWithPolicy(input: cosmos_group_v1_tx.MsgCreateGroupWithPolicyJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).createGroupWithPolicy(input, options);
          }, { path: [27, 5] }),
          /**
           * updateGroupPolicyAdmin updates a group policy admin.
           */
          updateGroupPolicyAdmin: withMetadata(async function updateGroupPolicyAdmin(input: cosmos_group_v1_tx.MsgUpdateGroupPolicyAdminJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).updateGroupPolicyAdmin(input, options);
          }, { path: [27, 6] }),
          /**
           * updateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.
           */
          updateGroupPolicyDecisionPolicy: withMetadata(async function updateGroupPolicyDecisionPolicy(input: cosmos_group_v1_tx.MsgUpdateGroupPolicyDecisionPolicyJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).updateGroupPolicyDecisionPolicy(input, options);
          }, { path: [27, 7] }),
          /**
           * updateGroupPolicyMetadata updates a group policy metadata.
           */
          updateGroupPolicyMetadata: withMetadata(async function updateGroupPolicyMetadata(input: cosmos_group_v1_tx.MsgUpdateGroupPolicyMetadataJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).updateGroupPolicyMetadata(input, options);
          }, { path: [27, 8] }),
          /**
           * submitProposal submits a new proposal.
           */
          submitProposal: withMetadata(async function submitProposal(input: cosmos_group_v1_tx.MsgSubmitProposalJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).submitProposal(input, options);
          }, { path: [27, 9] }),
          /**
           * withdrawProposal withdraws a proposal.
           */
          withdrawProposal: withMetadata(async function withdrawProposal(input: cosmos_group_v1_tx.MsgWithdrawProposalJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).withdrawProposal(input, options);
          }, { path: [27, 10] }),
          /**
           * vote allows a voter to vote on a proposal.
           */
          vote: withMetadata(async function vote(input: cosmos_group_v1_tx.MsgVoteJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).vote(input, options);
          }, { path: [27, 11] }),
          /**
           * exec executes a proposal.
           */
          exec: withMetadata(async function exec(input: cosmos_group_v1_tx.MsgExecJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).exec(input, options);
          }, { path: [27, 12] }),
          /**
           * leaveGroup allows a group member to leave the group.
           */
          leaveGroup: withMetadata(async function leaveGroup(input: cosmos_group_v1_tx.MsgLeaveGroupJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(27);
            return getMsgClient(service).leaveGroup(input, options);
          }, { path: [27, 13] })
        }
      },
      mint: {
        v1beta1: {
          /**
           * getParams returns the total set of minting parameters.
           */
          getParams: withMetadata(async function getParams(input: cosmos_mint_v1beta1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(28);
            return getClient(service).params(input, options);
          }, { path: [28, 0] }),
          /**
           * getInflation returns the current minting inflation value.
           */
          getInflation: withMetadata(async function getInflation(input: cosmos_mint_v1beta1_query.QueryInflationRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(28);
            return getClient(service).inflation(input, options);
          }, { path: [28, 1] }),
          /**
           * getAnnualProvisions current minting annual provisions value.
           */
          getAnnualProvisions: withMetadata(async function getAnnualProvisions(input: cosmos_mint_v1beta1_query.QueryAnnualProvisionsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(28);
            return getClient(service).annualProvisions(input, options);
          }, { path: [28, 2] }),
          /**
           * updateParams defines a governance operation for updating the x/mint module
           * parameters. The authority is defaults to the x/gov module account.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_mint_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(29);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [29, 0] })
        }
      },
      nft: {
        v1beta1: {
          /**
           * getBalance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
           */
          getBalance: withMetadata(async function getBalance(input: cosmos_nft_v1beta1_query.QueryBalanceRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).balance(input, options);
          }, { path: [30, 0] }),
          /**
           * getOwner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
           */
          getOwner: withMetadata(async function getOwner(input: cosmos_nft_v1beta1_query.QueryOwnerRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).owner(input, options);
          }, { path: [30, 1] }),
          /**
           * getSupply queries the number of NFTs from the given class, same as totalSupply of ERC721.
           */
          getSupply: withMetadata(async function getSupply(input: cosmos_nft_v1beta1_query.QuerySupplyRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).supply(input, options);
          }, { path: [30, 2] }),
          /**
           * getNFTs queries all getNFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
           * ERC721Enumerable
           */
          getNFTs: withMetadata(async function getNFTs(input: cosmos_nft_v1beta1_query.QueryNFTsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).nFTs(input, options);
          }, { path: [30, 3] }),
          /**
           * getNFT queries an getNFT based on its class and id.
           */
          getNFT: withMetadata(async function getNFT(input: cosmos_nft_v1beta1_query.QueryNFTRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).nFT(input, options);
          }, { path: [30, 4] }),
          /**
           * getClass queries an NFT class based on its id
           */
          getClass: withMetadata(async function getClass(input: cosmos_nft_v1beta1_query.QueryClassRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).class(input, options);
          }, { path: [30, 5] }),
          /**
           * getClasses queries all NFT classes
           */
          getClasses: withMetadata(async function getClasses(input: cosmos_nft_v1beta1_query.QueryClassesRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(30);
            return getClient(service).classes(input, options);
          }, { path: [30, 6] }),
          /**
           * send defines a method to send a nft from one account to another account.
           */
          send: withMetadata(async function send(input: cosmos_nft_v1beta1_tx.MsgSendJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(31);
            return getMsgClient(service).send(input, options);
          }, { path: [31, 0] })
        }
      },
      orm: {
        query: {
          v1alpha1: {
            /**
             * get queries an ORM table against an unique index.
             */
            get: withMetadata(async function get(input: cosmos_orm_query_v1alpha1_query.GetRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(32);
              return getClient(service).get(input, options);
            }, { path: [32, 0] }),
            /**
             * getList queries an ORM table against an index.
             */
            getList: withMetadata(async function getList(input: cosmos_orm_query_v1alpha1_query.ListRequestJson, options?: CallOptions) {
              const service = await serviceLoader.loadAt(32);
              return getClient(service).list(input, options);
            }, { path: [32, 1] })
          }
        }
      },
      params: {
        v1beta1: {
          /**
           * getParams queries a specific parameter of a module, given its subspace and
           * key.
           */
          getParams: withMetadata(async function getParams(input: cosmos_params_v1beta1_query.QueryParamsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(33);
            return getClient(service).params(input, options);
          }, { path: [33, 0] }),
          /**
           * getSubspaces queries for all registered subspaces and all keys for a subspace.
           *
           * Since: cosmos-sdk 0.46
           */
          getSubspaces: withMetadata(async function getSubspaces(input: cosmos_params_v1beta1_query.QuerySubspacesRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(33);
            return getClient(service).subspaces(input, options);
          }, { path: [33, 1] })
        }
      },
      reflection: {
        v1: {
          /**
           * getFileDescriptors queries all the file descriptors in the app in order
           * to enable easier generation of dynamic clients.
           */
          getFileDescriptors: withMetadata(async function getFileDescriptors(input: cosmos_reflection_v1_reflection.FileDescriptorsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(34);
            return getClient(service).fileDescriptors(input, options);
          }, { path: [34, 0] })
        }
      },
      slashing: {
        v1beta1: {
          /**
           * getParams queries the parameters of slashing module
           */
          getParams: withMetadata(async function getParams(input: cosmos_slashing_v1beta1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(35);
            return getClient(service).params(input, options);
          }, { path: [35, 0] }),
          /**
           * getSigningInfo queries the signing info of given cons address
           */
          getSigningInfo: withMetadata(async function getSigningInfo(input: cosmos_slashing_v1beta1_query.QuerySigningInfoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(35);
            return getClient(service).signingInfo(input, options);
          }, { path: [35, 1] }),
          /**
           * getSigningInfos queries signing info of all validators
           */
          getSigningInfos: withMetadata(async function getSigningInfos(input: cosmos_slashing_v1beta1_query.QuerySigningInfosRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(35);
            return getClient(service).signingInfos(input, options);
          }, { path: [35, 2] }),
          /**
           * unjail defines a method for unjailing a jailed validator, thus returning
           * them into the bonded validator set, so they can begin receiving provisions
           * and rewards again.
           */
          unjail: withMetadata(async function unjail(input: cosmos_slashing_v1beta1_tx.MsgUnjailJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(36);
            return getMsgClient(service).unjail(input, options);
          }, { path: [36, 0] }),
          /**
           * updateParams defines a governance operation for updating the x/slashing module
           * parameters. The authority defaults to the x/gov module account.
           *
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_slashing_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(36);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [36, 1] })
        }
      },
      staking: {
        v1beta1: {
          /**
           * getValidators queries all validators that match the given status.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getValidators: withMetadata(async function getValidators(input: cosmos_staking_v1beta1_query.QueryValidatorsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).validators(input, options);
          }, { path: [37, 0] }),
          /**
           * getValidator queries validator info for given validator address.
           */
          getValidator: withMetadata(async function getValidator(input: cosmos_staking_v1beta1_query.QueryValidatorRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).validator(input, options);
          }, { path: [37, 1] }),
          /**
           * getValidatorDelegations queries delegate info for given validator.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getValidatorDelegations: withMetadata(async function getValidatorDelegations(input: cosmos_staking_v1beta1_query.QueryValidatorDelegationsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).validatorDelegations(input, options);
          }, { path: [37, 2] }),
          /**
           * getValidatorUnbondingDelegations queries unbonding delegations of a validator.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getValidatorUnbondingDelegations: withMetadata(async function getValidatorUnbondingDelegations(input: cosmos_staking_v1beta1_query.QueryValidatorUnbondingDelegationsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).validatorUnbondingDelegations(input, options);
          }, { path: [37, 3] }),
          /**
           * getDelegation queries delegate info for given validator delegator pair.
           */
          getDelegation: withMetadata(async function getDelegation(input: cosmos_staking_v1beta1_query.QueryDelegationRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).delegation(input, options);
          }, { path: [37, 4] }),
          /**
           * getUnbondingDelegation queries unbonding info for given validator delegator
           * pair.
           */
          getUnbondingDelegation: withMetadata(async function getUnbondingDelegation(input: cosmos_staking_v1beta1_query.QueryUnbondingDelegationRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).unbondingDelegation(input, options);
          }, { path: [37, 5] }),
          /**
           * getDelegatorDelegations queries all delegations of a given delegator address.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getDelegatorDelegations: withMetadata(async function getDelegatorDelegations(input: cosmos_staking_v1beta1_query.QueryDelegatorDelegationsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).delegatorDelegations(input, options);
          }, { path: [37, 6] }),
          /**
           * getDelegatorUnbondingDelegations queries all unbonding delegations of a given
           * delegator address.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getDelegatorUnbondingDelegations: withMetadata(async function getDelegatorUnbondingDelegations(input: cosmos_staking_v1beta1_query.QueryDelegatorUnbondingDelegationsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).delegatorUnbondingDelegations(input, options);
          }, { path: [37, 7] }),
          /**
           * getRedelegations queries redelegations of given address.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getRedelegations: withMetadata(async function getRedelegations(input: cosmos_staking_v1beta1_query.QueryRedelegationsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).redelegations(input, options);
          }, { path: [37, 8] }),
          /**
           * getDelegatorValidators queries all validators info for given delegator
           * address.
           *
           * When called from another module, this query might consume a high amount of
           * gas if the pagination field is incorrectly set.
           */
          getDelegatorValidators: withMetadata(async function getDelegatorValidators(input: cosmos_staking_v1beta1_query.QueryDelegatorValidatorsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).delegatorValidators(input, options);
          }, { path: [37, 9] }),
          /**
           * getDelegatorValidator queries validator info for given delegator validator
           * pair.
           */
          getDelegatorValidator: withMetadata(async function getDelegatorValidator(input: cosmos_staking_v1beta1_query.QueryDelegatorValidatorRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).delegatorValidator(input, options);
          }, { path: [37, 10] }),
          /**
           * Query for individual tokenize share record information by share by id
           */
          getTokenizeShareRecordById: withMetadata(async function getTokenizeShareRecordById(input: cosmos_staking_v1beta1_query.QueryTokenizeShareRecordByIdRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).tokenizeShareRecordById(input, options);
          }, { path: [37, 11] }),
          /**
           * Query for individual tokenize share record information by share denom
           */
          getTokenizeShareRecordByDenom: withMetadata(async function getTokenizeShareRecordByDenom(input: cosmos_staking_v1beta1_query.QueryTokenizeShareRecordByDenomRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).tokenizeShareRecordByDenom(input, options);
          }, { path: [37, 12] }),
          /**
           * Query tokenize share records by address
           */
          getTokenizeShareRecordsOwned: withMetadata(async function getTokenizeShareRecordsOwned(input: cosmos_staking_v1beta1_query.QueryTokenizeShareRecordsOwnedRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).tokenizeShareRecordsOwned(input, options);
          }, { path: [37, 13] }),
          /**
           * Query for all tokenize share records
           */
          getAllTokenizeShareRecords: withMetadata(async function getAllTokenizeShareRecords(input: cosmos_staking_v1beta1_query.QueryAllTokenizeShareRecordsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).allTokenizeShareRecords(input, options);
          }, { path: [37, 14] }),
          /**
           * Query for last tokenize share record id
           */
          getLastTokenizeShareRecordId: withMetadata(async function getLastTokenizeShareRecordId(input: cosmos_staking_v1beta1_query.QueryLastTokenizeShareRecordIdRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).lastTokenizeShareRecordId(input, options);
          }, { path: [37, 15] }),
          /**
           * Query for total tokenized staked assets
           */
          getTotalTokenizeSharedAssets: withMetadata(async function getTotalTokenizeSharedAssets(input: cosmos_staking_v1beta1_query.QueryTotalTokenizeSharedAssetsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).totalTokenizeSharedAssets(input, options);
          }, { path: [37, 16] }),
          /**
           * Query for total liquid staked (including tokenized shares or owned by an liquid staking provider)
           */
          getTotalLiquidStaked: withMetadata(async function getTotalLiquidStaked(input: cosmos_staking_v1beta1_query.QueryTotalLiquidStakedJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).totalLiquidStaked(input, options);
          }, { path: [37, 17] }),
          /**
           * Query tokenize share locks
           */
          getTokenizeShareLockInfo: withMetadata(async function getTokenizeShareLockInfo(input: cosmos_staking_v1beta1_query.QueryTokenizeShareLockInfoJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).tokenizeShareLockInfo(input, options);
          }, { path: [37, 18] }),
          /**
           * getHistoricalInfo queries the historical info for given height.
           */
          getHistoricalInfo: withMetadata(async function getHistoricalInfo(input: cosmos_staking_v1beta1_query.QueryHistoricalInfoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).historicalInfo(input, options);
          }, { path: [37, 19] }),
          /**
           * getPool queries the pool info.
           */
          getPool: withMetadata(async function getPool(input: cosmos_staking_v1beta1_query.QueryPoolRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).pool(input, options);
          }, { path: [37, 20] }),
          /**
           * Parameters queries the staking parameters.
           */
          getParams: withMetadata(async function getParams(input: cosmos_staking_v1beta1_query.QueryParamsRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(37);
            return getClient(service).params(input, options);
          }, { path: [37, 21] }),
          /**
           * createValidator defines a method for creating a new validator.
           */
          createValidator: withMetadata(async function createValidator(input: cosmos_staking_v1beta1_tx.MsgCreateValidatorJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).createValidator(input, options);
          }, { path: [38, 0] }),
          /**
           * editValidator defines a method for editing an existing validator.
           */
          editValidator: withMetadata(async function editValidator(input: cosmos_staking_v1beta1_tx.MsgEditValidatorJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).editValidator(input, options);
          }, { path: [38, 1] }),
          /**
           * delegate defines a method for performing a delegation of coins
           * from a delegator to a validator.
           */
          delegate: withMetadata(async function delegate(input: cosmos_staking_v1beta1_tx.MsgDelegateJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).delegate(input, options);
          }, { path: [38, 2] }),
          /**
           * beginRedelegate defines a method for performing a redelegation
           * of coins from a delegator and source validator to a destination validator.
           */
          beginRedelegate: withMetadata(async function beginRedelegate(input: cosmos_staking_v1beta1_tx.MsgBeginRedelegateJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).beginRedelegate(input, options);
          }, { path: [38, 3] }),
          /**
           * undelegate defines a method for performing an undelegation from a
           * delegate and a validator.
           */
          undelegate: withMetadata(async function undelegate(input: cosmos_staking_v1beta1_tx.MsgUndelegateJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).undelegate(input, options);
          }, { path: [38, 4] }),
          /**
           * cancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
           * and delegate back to previous validator.
           *
           * Since: cosmos-sdk 0.46
           */
          cancelUnbondingDelegation: withMetadata(async function cancelUnbondingDelegation(input: cosmos_staking_v1beta1_tx.MsgCancelUnbondingDelegationJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).cancelUnbondingDelegation(input, options);
          }, { path: [38, 5] }),
          /**
           * updateParams defines an operation for updating the x/staking module
           * parameters.
           * Since: cosmos-sdk 0.47
           */
          updateParams: withMetadata(async function updateParams(input: cosmos_staking_v1beta1_tx.MsgUpdateParamsJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).updateParams(input, options);
          }, { path: [38, 6] }),
          /**
           * unbondValidator defines a method for performing the status transition for a validator
           * from bonded to unbonding
           * This allows a validator to stop their services and jail themselves without
           * experiencing a slash
           */
          unbondValidator: withMetadata(async function unbondValidator(input: cosmos_staking_v1beta1_tx.MsgUnbondValidatorJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).unbondValidator(input, options);
          }, { path: [38, 7] }),
          /**
           * tokenizeShares defines a method for tokenizing shares from a validator.
           */
          tokenizeShares: withMetadata(async function tokenizeShares(input: cosmos_staking_v1beta1_tx.MsgTokenizeSharesJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).tokenizeShares(input, options);
          }, { path: [38, 8] }),
          /**
           * redeemTokensForShares defines a method for redeeming tokens from a validator for
           * shares.
           */
          redeemTokensForShares: withMetadata(async function redeemTokensForShares(input: cosmos_staking_v1beta1_tx.MsgRedeemTokensForSharesJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).redeemTokensForShares(input, options);
          }, { path: [38, 9] }),
          /**
           * transferTokenizeShareRecord defines a method to transfer ownership of
           * TokenizeShareRecord
           */
          transferTokenizeShareRecord: withMetadata(async function transferTokenizeShareRecord(input: cosmos_staking_v1beta1_tx.MsgTransferTokenizeShareRecordJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).transferTokenizeShareRecord(input, options);
          }, { path: [38, 10] }),
          /**
           * disableTokenizeShares defines a method to prevent the tokenization of an addresses stake
           */
          disableTokenizeShares: withMetadata(async function disableTokenizeShares(input: cosmos_staking_v1beta1_tx.MsgDisableTokenizeSharesJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).disableTokenizeShares(input, options);
          }, { path: [38, 11] }),
          /**
           * enableTokenizeShares defines a method to re-enable the tokenization of an addresseses stake
           * after it has been disabled
           */
          enableTokenizeShares: withMetadata(async function enableTokenizeShares(input: cosmos_staking_v1beta1_tx.MsgEnableTokenizeSharesJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).enableTokenizeShares(input, options);
          }, { path: [38, 12] }),
          /**
           * validatorBond defines a method for performing a validator self-bond
           */
          validatorBond: withMetadata(async function validatorBond(input: cosmos_staking_v1beta1_tx.MsgValidatorBondJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(38);
            return getMsgClient(service).validatorBond(input, options);
          }, { path: [38, 13] })
        }
      },
      tx: {
        v1beta1: {
          /**
           * getSimulate simulates executing a transaction for estimating gas usage.
           */
          getSimulate: withMetadata(async function getSimulate(input: cosmos_tx_v1beta1_service.SimulateRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).simulate(input, options);
          }, { path: [39, 0] }),
          /**
           * getTx fetches a tx by hash.
           */
          getTx: withMetadata(async function getTx(input: cosmos_tx_v1beta1_service.GetTxRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).getTx(input, options);
          }, { path: [39, 1] }),
          /**
           * getBroadcastTx broadcast transaction.
           */
          getBroadcastTx: withMetadata(async function getBroadcastTx(input: cosmos_tx_v1beta1_service.BroadcastTxRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).broadcastTx(input, options);
          }, { path: [39, 2] }),
          /**
           * getTxsEvent fetches txs by event.
           */
          getTxsEvent: withMetadata(async function getTxsEvent(input: cosmos_tx_v1beta1_service.GetTxsEventRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).getTxsEvent(input, options);
          }, { path: [39, 3] }),
          /**
           * getBlockWithTxs fetches a block with decoded txs.
           *
           * Since: cosmos-sdk 0.45.2
           */
          getBlockWithTxs: withMetadata(async function getBlockWithTxs(input: cosmos_tx_v1beta1_service.GetBlockWithTxsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).getBlockWithTxs(input, options);
          }, { path: [39, 4] }),
          /**
           * getTxDecode decodes the transaction.
           *
           * Since: cosmos-sdk 0.47
           */
          getTxDecode: withMetadata(async function getTxDecode(input: cosmos_tx_v1beta1_service.TxDecodeRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).txDecode(input, options);
          }, { path: [39, 5] }),
          /**
           * getTxEncode encodes the transaction.
           *
           * Since: cosmos-sdk 0.47
           */
          getTxEncode: withMetadata(async function getTxEncode(input: cosmos_tx_v1beta1_service.TxEncodeRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).txEncode(input, options);
          }, { path: [39, 6] }),
          /**
           * getTxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
           *
           * Since: cosmos-sdk 0.47
           */
          getTxEncodeAmino: withMetadata(async function getTxEncodeAmino(input: cosmos_tx_v1beta1_service.TxEncodeAminoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).txEncodeAmino(input, options);
          }, { path: [39, 7] }),
          /**
           * getTxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
           *
           * Since: cosmos-sdk 0.47
           */
          getTxDecodeAmino: withMetadata(async function getTxDecodeAmino(input: cosmos_tx_v1beta1_service.TxDecodeAminoRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(39);
            return getClient(service).txDecodeAmino(input, options);
          }, { path: [39, 8] })
        }
      },
      upgrade: {
        v1beta1: {
          /**
           * getCurrentPlan queries the current upgrade plan.
           */
          getCurrentPlan: withMetadata(async function getCurrentPlan(input: cosmos_upgrade_v1beta1_query.QueryCurrentPlanRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(40);
            return getClient(service).currentPlan(input, options);
          }, { path: [40, 0] }),
          /**
           * getAppliedPlan queries a previously applied upgrade plan by its name.
           */
          getAppliedPlan: withMetadata(async function getAppliedPlan(input: cosmos_upgrade_v1beta1_query.QueryAppliedPlanRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(40);
            return getClient(service).appliedPlan(input, options);
          }, { path: [40, 1] }),
          /**
           * getUpgradedConsensusState queries the consensus state that will serve
           * as a trusted kernel for the next version of this chain. It will only be
           * stored at the last height of this chain.
           * getUpgradedConsensusState RPC not supported with legacy querier
           * This rpc is deprecated now that IBC has its own replacement
           * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
           * @deprecated
           */
          getUpgradedConsensusState: withMetadata(async function getUpgradedConsensusState(input: cosmos_upgrade_v1beta1_query.QueryUpgradedConsensusStateRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(40);
            return getClient(service).upgradedConsensusState(input, options);
          }, { path: [40, 2] }),
          /**
           * getModuleVersions queries the list of module versions from state.
           *
           * Since: cosmos-sdk 0.43
           */
          getModuleVersions: withMetadata(async function getModuleVersions(input: cosmos_upgrade_v1beta1_query.QueryModuleVersionsRequestJson, options?: CallOptions) {
            const service = await serviceLoader.loadAt(40);
            return getClient(service).moduleVersions(input, options);
          }, { path: [40, 3] }),
          /**
           * Returns the account with authority to conduct upgrades
           *
           * Since: cosmos-sdk 0.46
           */
          getAuthority: withMetadata(async function getAuthority(input: cosmos_upgrade_v1beta1_query.QueryAuthorityRequestJson = {}, options?: CallOptions) {
            const service = await serviceLoader.loadAt(40);
            return getClient(service).authority(input, options);
          }, { path: [40, 4] }),
          /**
           * softwareUpgrade is a governance operation for initiating a software upgrade.
           *
           * Since: cosmos-sdk 0.46
           */
          softwareUpgrade: withMetadata(async function softwareUpgrade(input: cosmos_upgrade_v1beta1_tx.MsgSoftwareUpgradeJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(41);
            return getMsgClient(service).softwareUpgrade(input, options);
          }, { path: [41, 0] }),
          /**
           * cancelUpgrade is a governance operation for cancelling a previously
           * approved software upgrade.
           *
           * Since: cosmos-sdk 0.46
           */
          cancelUpgrade: withMetadata(async function cancelUpgrade(input: cosmos_upgrade_v1beta1_tx.MsgCancelUpgradeJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(41);
            return getMsgClient(service).cancelUpgrade(input, options);
          }, { path: [41, 1] })
        }
      },
      vesting: {
        v1beta1: {
          /**
           * createVestingAccount defines a method that enables creating a vesting
           * account.
           */
          createVestingAccount: withMetadata(async function createVestingAccount(input: cosmos_vesting_v1beta1_tx.MsgCreateVestingAccountJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(42);
            return getMsgClient(service).createVestingAccount(input, options);
          }, { path: [42, 0] }),
          /**
           * createPermanentLockedAccount defines a method that enables creating a permanent
           * locked account.
           *
           * Since: cosmos-sdk 0.46
           */
          createPermanentLockedAccount: withMetadata(async function createPermanentLockedAccount(input: cosmos_vesting_v1beta1_tx.MsgCreatePermanentLockedAccountJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(42);
            return getMsgClient(service).createPermanentLockedAccount(input, options);
          }, { path: [42, 1] }),
          /**
           * createPeriodicVestingAccount defines a method that enables creating a
           * periodic vesting account.
           *
           * Since: cosmos-sdk 0.46
           */
          createPeriodicVestingAccount: withMetadata(async function createPeriodicVestingAccount(input: cosmos_vesting_v1beta1_tx.MsgCreatePeriodicVestingAccountJson, options?: TxCallOptions) {
            const service = await serviceLoader.loadAt(42);
            return getMsgClient(service).createPeriodicVestingAccount(input, options);
          }, { path: [42, 2] })
        }
      }
    },
    tendermint: {
      abci: {
        getEcho: withMetadata(async function getEcho(input: tendermint_abci_types.RequestEchoJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).echo(input, options);
        }, { path: [8, 0] }),
        getFlush: withMetadata(async function getFlush(input: tendermint_abci_types.RequestFlushJson = {}, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).flush(input, options);
        }, { path: [8, 1] }),
        getInfo: withMetadata(async function getInfo(input: tendermint_abci_types.RequestInfoJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).info(input, options);
        }, { path: [8, 2] }),
        getDeliverTx: withMetadata(async function getDeliverTx(input: tendermint_abci_types.RequestDeliverTxJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).deliverTx(input, options);
        }, { path: [8, 3] }),
        getCheckTx: withMetadata(async function getCheckTx(input: tendermint_abci_types.RequestCheckTxJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).checkTx(input, options);
        }, { path: [8, 4] }),
        getQuery: withMetadata(async function getQuery(input: tendermint_abci_types.RequestQueryJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).query(input, options);
        }, { path: [8, 5] }),
        getCommit: withMetadata(async function getCommit(input: tendermint_abci_types.RequestCommitJson = {}, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).commit(input, options);
        }, { path: [8, 6] }),
        getInitChain: withMetadata(async function getInitChain(input: tendermint_abci_types.RequestInitChainJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).initChain(input, options);
        }, { path: [8, 7] }),
        getBeginBlock: withMetadata(async function getBeginBlock(input: tendermint_abci_types.RequestBeginBlockJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).beginBlock(input, options);
        }, { path: [8, 8] }),
        getEndBlock: withMetadata(async function getEndBlock(input: tendermint_abci_types.RequestEndBlockJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).endBlock(input, options);
        }, { path: [8, 9] }),
        getListSnapshots: withMetadata(async function getListSnapshots(input: tendermint_abci_types.RequestListSnapshotsJson = {}, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).listSnapshots(input, options);
        }, { path: [8, 10] }),
        getOfferSnapshot: withMetadata(async function getOfferSnapshot(input: tendermint_abci_types.RequestOfferSnapshotJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).offerSnapshot(input, options);
        }, { path: [8, 11] }),
        getLoadSnapshotChunk: withMetadata(async function getLoadSnapshotChunk(input: tendermint_abci_types.RequestLoadSnapshotChunkJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).loadSnapshotChunk(input, options);
        }, { path: [8, 12] }),
        getApplySnapshotChunk: withMetadata(async function getApplySnapshotChunk(input: tendermint_abci_types.RequestApplySnapshotChunkJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).applySnapshotChunk(input, options);
        }, { path: [8, 13] }),
        getPrepareProposal: withMetadata(async function getPrepareProposal(input: tendermint_abci_types.RequestPrepareProposalJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).prepareProposal(input, options);
        }, { path: [8, 14] }),
        getProcessProposal: withMetadata(async function getProcessProposal(input: tendermint_abci_types.RequestProcessProposalJson, options?: CallOptions) {
          const service = await serviceLoader.loadAt(8);
          return getClient(service).processProposal(input, options);
        }, { path: [8, 15] })
      }
    }
  };
}
