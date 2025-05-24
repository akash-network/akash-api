import type * as _protos_akash_deployment_v1beta4_resourceunit from "../protos/akash/deployment/v1beta4/resourceunit_pb.ts";
import { Dec } from "../../encoding/customTypes/Dec.ts";
import type * as _protos_cosmos_base_v1beta1_coin from "../protos/cosmos/base/v1beta1/coin_pb.ts";
import type * as _protos_akash_deployment_v1beta4_groupspec from "../protos/akash/deployment/v1beta4/groupspec_pb.ts";
import type * as _protos_akash_deployment_v1beta4_deploymentmsg from "../protos/akash/deployment/v1beta4/deploymentmsg_pb.ts";
import type * as _protos_akash_deployment_v1beta4_group from "../protos/akash/deployment/v1beta4/group_pb.ts";
import type * as _protos_akash_deployment_v1beta4_genesis from "../protos/akash/deployment/v1beta4/genesis_pb.ts";
import type * as _protos_akash_escrow_v1_account from "../protos/akash/escrow/v1/account_pb.ts";
import type * as _protos_akash_deployment_v1beta4_query from "../protos/akash/deployment/v1beta4/query_pb.ts";
import type * as _protos_akash_escrow_v1_fractional_payment from "../protos/akash/escrow/v1/fractional_payment_pb.ts";
import type * as _protos_akash_escrow_v1_genesis from "../protos/akash/escrow/v1/genesis_pb.ts";
import type * as _protos_akash_escrow_v1_query from "../protos/akash/escrow/v1/query_pb.ts";
import { encodeBinary, decodeBinary } from "../../encoding/binaryEncoding.ts";
import type * as _protos_akash_gov_v1beta3_params from "../protos/akash/gov/v1beta3/params_pb.ts";
import type * as _protos_akash_gov_v1beta3_genesis from "../protos/akash/gov/v1beta3/genesis_pb.ts";
import type * as _protos_akash_inflation_v1beta2_params from "../protos/akash/inflation/v1beta2/params_pb.ts";
import type * as _protos_akash_inflation_v1beta2_genesis from "../protos/akash/inflation/v1beta2/genesis_pb.ts";
import type * as _protos_akash_inflation_v1beta3_params from "../protos/akash/inflation/v1beta3/params_pb.ts";
import type * as _protos_akash_inflation_v1beta3_genesis from "../protos/akash/inflation/v1beta3/genesis_pb.ts";
import type * as _protos_akash_market_v1_lease from "../protos/akash/market/v1/lease_pb.ts";
import type * as _protos_akash_market_v1_event from "../protos/akash/market/v1/event_pb.ts";
import type * as _protos_akash_market_v1beta5_bid from "../protos/akash/market/v1beta5/bid_pb.ts";
import type * as _protos_akash_market_v1beta5_bidmsg from "../protos/akash/market/v1beta5/bidmsg_pb.ts";
import type * as _protos_akash_market_v1beta5_order from "../protos/akash/market/v1beta5/order_pb.ts";
import type * as _protos_akash_market_v1beta5_genesis from "../protos/akash/market/v1beta5/genesis_pb.ts";
import type * as _protos_akash_market_v1beta5_query from "../protos/akash/market/v1beta5/query_pb.ts";
import type * as _protos_akash_staking_v1beta3_params from "../protos/akash/staking/v1beta3/params_pb.ts";
import type * as _protos_akash_staking_v1beta3_genesis from "../protos/akash/staking/v1beta3/genesis_pb.ts";
import type * as _protos_akash_staking_v1beta3_paramsmsg from "../protos/akash/staking/v1beta3/paramsmsg_pb.ts";
import type * as _protos_akash_staking_v1beta3_query from "../protos/akash/staking/v1beta3/query_pb.ts";

const p = {
  "akash.deployment.v1beta4.ResourceUnit"(value: _protos_akash_deployment_v1beta4_resourceunit.ResourceUnit | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.price != null) newValue.price = p["cosmos.base.v1beta1.DecCoin"](value.price, transformType);
    return newValue;
  },
  "cosmos.base.v1beta1.DecCoin"(value: _protos_cosmos_base_v1beta1_coin.DecCoin | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.amount != null) newValue.amount = Dec[transformType](value.amount);
    return newValue;
  },
  "akash.deployment.v1beta4.GroupSpec"(value: _protos_akash_deployment_v1beta4_groupspec.GroupSpec | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.resources) newValue.resources = value.resources.map((item) => p["akash.deployment.v1beta4.ResourceUnit"](item, transformType)!);
    return newValue;
  },
  "akash.deployment.v1beta4.MsgCreateDeployment"(value: _protos_akash_deployment_v1beta4_deploymentmsg.MsgCreateDeployment | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.groups) newValue.groups = value.groups.map((item) => p["akash.deployment.v1beta4.GroupSpec"](item, transformType)!);
    return newValue;
  },
  "akash.deployment.v1beta4.Group"(value: _protos_akash_deployment_v1beta4_group.Group | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.groupSpec != null) newValue.groupSpec = p["akash.deployment.v1beta4.GroupSpec"](value.groupSpec, transformType);
    return newValue;
  },
  "akash.deployment.v1beta4.GenesisDeployment"(value: _protos_akash_deployment_v1beta4_genesis.GenesisDeployment | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.groups) newValue.groups = value.groups.map((item) => p["akash.deployment.v1beta4.Group"](item, transformType)!);
    return newValue;
  },
  "akash.deployment.v1beta4.GenesisState"(value: _protos_akash_deployment_v1beta4_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.deployments) newValue.deployments = value.deployments.map((item) => p["akash.deployment.v1beta4.GenesisDeployment"](item, transformType)!);
    return newValue;
  },
  "akash.escrow.v1.Account"(value: _protos_akash_escrow_v1_account.Account | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.balance != null) newValue.balance = p["cosmos.base.v1beta1.DecCoin"](value.balance, transformType);
    if (value.transferred != null) newValue.transferred = p["cosmos.base.v1beta1.DecCoin"](value.transferred, transformType);
    if (value.funds != null) newValue.funds = p["cosmos.base.v1beta1.DecCoin"](value.funds, transformType);
    return newValue;
  },
  "akash.deployment.v1beta4.QueryDeploymentsResponse"(value: _protos_akash_deployment_v1beta4_query.QueryDeploymentsResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.deployments) newValue.deployments = value.deployments.map((item) => p["akash.deployment.v1beta4.QueryDeploymentResponse"](item, transformType)!);
    return newValue;
  },
  "akash.deployment.v1beta4.QueryDeploymentResponse"(value: _protos_akash_deployment_v1beta4_query.QueryDeploymentResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.groups) newValue.groups = value.groups.map((item) => p["akash.deployment.v1beta4.Group"](item, transformType)!);
    if (value.escrowAccount != null) newValue.escrowAccount = p["akash.escrow.v1.Account"](value.escrowAccount, transformType);
    return newValue;
  },
  "akash.deployment.v1beta4.QueryGroupResponse"(value: _protos_akash_deployment_v1beta4_query.QueryGroupResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.group != null) newValue.group = p["akash.deployment.v1beta4.Group"](value.group, transformType);
    return newValue;
  },
  "akash.escrow.v1.FractionalPayment"(value: _protos_akash_escrow_v1_fractional_payment.FractionalPayment | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.rate != null) newValue.rate = p["cosmos.base.v1beta1.DecCoin"](value.rate, transformType);
    if (value.balance != null) newValue.balance = p["cosmos.base.v1beta1.DecCoin"](value.balance, transformType);
    return newValue;
  },
  "akash.escrow.v1.GenesisState"(value: _protos_akash_escrow_v1_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.accounts) newValue.accounts = value.accounts.map((item) => p["akash.escrow.v1.Account"](item, transformType)!);
    if (value.payments) newValue.payments = value.payments.map((item) => p["akash.escrow.v1.FractionalPayment"](item, transformType)!);
    return newValue;
  },
  "akash.escrow.v1.QueryAccountsResponse"(value: _protos_akash_escrow_v1_query.QueryAccountsResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.accounts) newValue.accounts = value.accounts.map((item) => p["akash.escrow.v1.Account"](item, transformType)!);
    return newValue;
  },
  "akash.escrow.v1.QueryPaymentsResponse"(value: _protos_akash_escrow_v1_query.QueryPaymentsResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.payments) newValue.payments = value.payments.map((item) => p["akash.escrow.v1.FractionalPayment"](item, transformType)!);
    return newValue;
  },
  "akash.gov.v1beta3.DepositParams"(value: _protos_akash_gov_v1beta3_params.DepositParams | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.minInitialDepositRate != null) newValue.minInitialDepositRate = encodeBinary(Dec[transformType](decodeBinary(value.minInitialDepositRate)));
    return newValue;
  },
  "akash.gov.v1beta3.GenesisState"(value: _protos_akash_gov_v1beta3_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.depositParams != null) newValue.depositParams = p["akash.gov.v1beta3.DepositParams"](value.depositParams, transformType);
    return newValue;
  },
  "akash.inflation.v1beta2.Params"(value: _protos_akash_inflation_v1beta2_params.Params | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.inflationDecayFactor != null) newValue.inflationDecayFactor = Dec[transformType](value.inflationDecayFactor);
    if (value.initialInflation != null) newValue.initialInflation = Dec[transformType](value.initialInflation);
    if (value.variance != null) newValue.variance = Dec[transformType](value.variance);
    return newValue;
  },
  "akash.inflation.v1beta2.GenesisState"(value: _protos_akash_inflation_v1beta2_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.params != null) newValue.params = p["akash.inflation.v1beta2.Params"](value.params, transformType);
    return newValue;
  },
  "akash.inflation.v1beta3.Params"(value: _protos_akash_inflation_v1beta3_params.Params | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.inflationDecayFactor != null) newValue.inflationDecayFactor = Dec[transformType](value.inflationDecayFactor);
    if (value.initialInflation != null) newValue.initialInflation = Dec[transformType](value.initialInflation);
    if (value.variance != null) newValue.variance = Dec[transformType](value.variance);
    return newValue;
  },
  "akash.inflation.v1beta3.GenesisState"(value: _protos_akash_inflation_v1beta3_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.params != null) newValue.params = p["akash.inflation.v1beta3.Params"](value.params, transformType);
    return newValue;
  },
  "akash.market.v1.Lease"(value: _protos_akash_market_v1_lease.Lease | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.price != null) newValue.price = p["cosmos.base.v1beta1.DecCoin"](value.price, transformType);
    return newValue;
  },
  "akash.market.v1.EventBidCreated"(value: _protos_akash_market_v1_event.EventBidCreated | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.price != null) newValue.price = p["cosmos.base.v1beta1.DecCoin"](value.price, transformType);
    return newValue;
  },
  "akash.market.v1.EventLeaseCreated"(value: _protos_akash_market_v1_event.EventLeaseCreated | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.price != null) newValue.price = p["cosmos.base.v1beta1.DecCoin"](value.price, transformType);
    return newValue;
  },
  "akash.market.v1beta5.Bid"(value: _protos_akash_market_v1beta5_bid.Bid | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.price != null) newValue.price = p["cosmos.base.v1beta1.DecCoin"](value.price, transformType);
    return newValue;
  },
  "akash.market.v1beta5.MsgCreateBid"(value: _protos_akash_market_v1beta5_bidmsg.MsgCreateBid | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.price != null) newValue.price = p["cosmos.base.v1beta1.DecCoin"](value.price, transformType);
    return newValue;
  },
  "akash.market.v1beta5.Order"(value: _protos_akash_market_v1beta5_order.Order | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.spec != null) newValue.spec = p["akash.deployment.v1beta4.GroupSpec"](value.spec, transformType);
    return newValue;
  },
  "akash.market.v1beta5.GenesisState"(value: _protos_akash_market_v1beta5_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.orders) newValue.orders = value.orders.map((item) => p["akash.market.v1beta5.Order"](item, transformType)!);
    if (value.leases) newValue.leases = value.leases.map((item) => p["akash.market.v1.Lease"](item, transformType)!);
    if (value.bids) newValue.bids = value.bids.map((item) => p["akash.market.v1beta5.Bid"](item, transformType)!);
    return newValue;
  },
  "akash.market.v1beta5.QueryOrdersResponse"(value: _protos_akash_market_v1beta5_query.QueryOrdersResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.orders) newValue.orders = value.orders.map((item) => p["akash.market.v1beta5.Order"](item, transformType)!);
    return newValue;
  },
  "akash.market.v1beta5.QueryOrderResponse"(value: _protos_akash_market_v1beta5_query.QueryOrderResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.order != null) newValue.order = p["akash.market.v1beta5.Order"](value.order, transformType);
    return newValue;
  },
  "akash.market.v1beta5.QueryBidsResponse"(value: _protos_akash_market_v1beta5_query.QueryBidsResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.bids) newValue.bids = value.bids.map((item) => p["akash.market.v1beta5.QueryBidResponse"](item, transformType)!);
    return newValue;
  },
  "akash.market.v1beta5.QueryBidResponse"(value: _protos_akash_market_v1beta5_query.QueryBidResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.bid != null) newValue.bid = p["akash.market.v1beta5.Bid"](value.bid, transformType);
    if (value.escrowAccount != null) newValue.escrowAccount = p["akash.escrow.v1.Account"](value.escrowAccount, transformType);
    return newValue;
  },
  "akash.market.v1beta5.QueryLeasesResponse"(value: _protos_akash_market_v1beta5_query.QueryLeasesResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.leases) newValue.leases = value.leases.map((item) => p["akash.market.v1beta5.QueryLeaseResponse"](item, transformType)!);
    return newValue;
  },
  "akash.market.v1beta5.QueryLeaseResponse"(value: _protos_akash_market_v1beta5_query.QueryLeaseResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.lease != null) newValue.lease = p["akash.market.v1.Lease"](value.lease, transformType);
    if (value.escrowPayment != null) newValue.escrowPayment = p["akash.escrow.v1.FractionalPayment"](value.escrowPayment, transformType);
    return newValue;
  },
  "akash.staking.v1beta3.Params"(value: _protos_akash_staking_v1beta3_params.Params | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.minCommissionRate != null) newValue.minCommissionRate = Dec[transformType](value.minCommissionRate);
    return newValue;
  },
  "akash.staking.v1beta3.GenesisState"(value: _protos_akash_staking_v1beta3_genesis.GenesisState | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.params != null) newValue.params = p["akash.staking.v1beta3.Params"](value.params, transformType);
    return newValue;
  },
  "akash.staking.v1beta3.MsgUpdateParams"(value: _protos_akash_staking_v1beta3_paramsmsg.MsgUpdateParams | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.params != null) newValue.params = p["akash.staking.v1beta3.Params"](value.params, transformType);
    return newValue;
  },
  "akash.staking.v1beta3.QueryParamsResponse"(value: _protos_akash_staking_v1beta3_query.QueryParamsResponse | undefined | null, transformType: 'encode' | 'decode') {
    if (value == null) return;
    const newValue = { ...value };
    if (value.params != null) newValue.params = p["akash.staking.v1beta3.Params"](value.params, transformType);
    return newValue;
  }
};

export const patches = p;
