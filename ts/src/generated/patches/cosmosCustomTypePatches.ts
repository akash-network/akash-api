import { Dec } from "../../encoding/customTypes/Dec.ts";
import type * as _protos_cosmos_base_v1beta1_coin from "../protos/cosmos/base/v1beta1/coin_pb.ts";
import type * as _protos_cosmos_distribution_v1beta1_distribution from "../protos/cosmos/distribution/v1beta1/distribution_pb.ts";
import type * as _protos_cosmos_distribution_v1beta1_genesis from "../protos/cosmos/distribution/v1beta1/genesis_pb.ts";
import type * as _protos_cosmos_distribution_v1beta1_query from "../protos/cosmos/distribution/v1beta1/query_pb.ts";
import type * as _protos_cosmos_distribution_v1beta1_tx from "../protos/cosmos/distribution/v1beta1/tx_pb.ts";
import type * as _protos_cosmos_gov_v1beta1_gov from "../protos/cosmos/gov/v1beta1/gov_pb.ts";
import { encodeBinary, decodeBinary } from "../../encoding/binaryEncoding.ts";
import type * as _protos_cosmos_gov_v1beta1_genesis from "../protos/cosmos/gov/v1beta1/genesis_pb.ts";
import type * as _protos_cosmos_gov_v1beta1_query from "../protos/cosmos/gov/v1beta1/query_pb.ts";
import type * as _protos_cosmos_gov_v1beta1_tx from "../protos/cosmos/gov/v1beta1/tx_pb.ts";
import type * as _protos_cosmos_mint_v1beta1_mint from "../protos/cosmos/mint/v1beta1/mint_pb.ts";
import type * as _protos_cosmos_mint_v1beta1_genesis from "../protos/cosmos/mint/v1beta1/genesis_pb.ts";
import type * as _protos_cosmos_mint_v1beta1_query from "../protos/cosmos/mint/v1beta1/query_pb.ts";
import type * as _protos_cosmos_mint_v1beta1_tx from "../protos/cosmos/mint/v1beta1/tx_pb.ts";
import type * as _protos_cosmos_slashing_v1beta1_slashing from "../protos/cosmos/slashing/v1beta1/slashing_pb.ts";
import type * as _protos_cosmos_slashing_v1beta1_genesis from "../protos/cosmos/slashing/v1beta1/genesis_pb.ts";
import type * as _protos_cosmos_slashing_v1beta1_query from "../protos/cosmos/slashing/v1beta1/query_pb.ts";
import type * as _protos_cosmos_slashing_v1beta1_tx from "../protos/cosmos/slashing/v1beta1/tx_pb.ts";
import type * as _protos_cosmos_staking_v1beta1_staking from "../protos/cosmos/staking/v1beta1/staking_pb.ts";
import type * as _protos_cosmos_staking_v1beta1_genesis from "../protos/cosmos/staking/v1beta1/genesis_pb.ts";
import type * as _protos_cosmos_staking_v1beta1_query from "../protos/cosmos/staking/v1beta1/query_pb.ts";
import type * as _protos_cosmos_staking_v1beta1_tx from "../protos/cosmos/staking/v1beta1/tx_pb.ts";

const t = {
  "cosmos.base.v1beta1.DecCoin"(value: _protos_cosmos_base_v1beta1_coin.DecCoin, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.amount != null) newValue.amount = Dec[transformType](value.amount);
    return newValue;
  },
  "cosmos.base.v1beta1.DecProto"(value: _protos_cosmos_base_v1beta1_coin.DecProto, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.dec != null) newValue.dec = Dec[transformType](value.dec);
    return newValue;
  },
  "cosmos.distribution.v1beta1.Params"(value: _protos_cosmos_distribution_v1beta1_distribution.Params, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.communityTax != null) newValue.communityTax = Dec[transformType](value.communityTax);;
    if (value.baseProposerReward != null) newValue.baseProposerReward = Dec[transformType](value.baseProposerReward);;
    if (value.bonusProposerReward != null) newValue.bonusProposerReward = Dec[transformType](value.bonusProposerReward);
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorHistoricalRewards"(value: _protos_cosmos_distribution_v1beta1_distribution.ValidatorHistoricalRewards, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.cumulativeRewardRatio) newValue.cumulativeRewardRatio = value.cumulativeRewardRatio.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorCurrentRewards"(value: _protos_cosmos_distribution_v1beta1_distribution.ValidatorCurrentRewards, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards) newValue.rewards = value.rewards.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorAccumulatedCommission"(value: _protos_cosmos_distribution_v1beta1_distribution.ValidatorAccumulatedCommission, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.commission) newValue.commission = value.commission.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorOutstandingRewards"(value: _protos_cosmos_distribution_v1beta1_distribution.ValidatorOutstandingRewards, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards) newValue.rewards = value.rewards.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorSlashEvent"(value: _protos_cosmos_distribution_v1beta1_distribution.ValidatorSlashEvent, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.fraction != null) newValue.fraction = Dec[transformType](value.fraction);
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorSlashEvents"(value: _protos_cosmos_distribution_v1beta1_distribution.ValidatorSlashEvents, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.validatorSlashEvents) newValue.validatorSlashEvents = value.validatorSlashEvents.map((item) => t["cosmos.distribution.v1beta1.ValidatorSlashEvent"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.FeePool"(value: _protos_cosmos_distribution_v1beta1_distribution.FeePool, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.communityPool) newValue.communityPool = value.communityPool.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.TokenizeShareRecordReward"(value: _protos_cosmos_distribution_v1beta1_distribution.TokenizeShareRecordReward, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.reward) newValue.reward = value.reward.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.DelegatorStartingInfo"(value: _protos_cosmos_distribution_v1beta1_distribution.DelegatorStartingInfo, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.stake != null) newValue.stake = Dec[transformType](value.stake);
    return newValue;
  },
  "cosmos.distribution.v1beta1.DelegationDelegatorReward"(value: _protos_cosmos_distribution_v1beta1_distribution.DelegationDelegatorReward, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.reward) newValue.reward = value.reward.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord"(value: _protos_cosmos_distribution_v1beta1_genesis.ValidatorOutstandingRewardsRecord, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.outstandingRewards) newValue.outstandingRewards = value.outstandingRewards.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord"(value: _protos_cosmos_distribution_v1beta1_genesis.ValidatorAccumulatedCommissionRecord, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.accumulated != null) newValue.accumulated = t["cosmos.distribution.v1beta1.ValidatorAccumulatedCommission"](value.accumulated, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord"(value: _protos_cosmos_distribution_v1beta1_genesis.ValidatorHistoricalRewardsRecord, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards != null) newValue.rewards = t["cosmos.distribution.v1beta1.ValidatorHistoricalRewards"](value.rewards, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord"(value: _protos_cosmos_distribution_v1beta1_genesis.ValidatorCurrentRewardsRecord, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards != null) newValue.rewards = t["cosmos.distribution.v1beta1.ValidatorCurrentRewards"](value.rewards, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord"(value: _protos_cosmos_distribution_v1beta1_genesis.DelegatorStartingInfoRecord, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.startingInfo != null) newValue.startingInfo = t["cosmos.distribution.v1beta1.DelegatorStartingInfo"](value.startingInfo, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.ValidatorSlashEventRecord"(value: _protos_cosmos_distribution_v1beta1_genesis.ValidatorSlashEventRecord, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.validatorSlashEvent != null) newValue.validatorSlashEvent = t["cosmos.distribution.v1beta1.ValidatorSlashEvent"](value.validatorSlashEvent, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.GenesisState"(value: _protos_cosmos_distribution_v1beta1_genesis.GenesisState, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.distribution.v1beta1.Params"](value.params, transformType);;
    if (value.feePool != null) newValue.feePool = t["cosmos.distribution.v1beta1.FeePool"](value.feePool, transformType);;
    if (value.outstandingRewards) newValue.outstandingRewards = value.outstandingRewards.map((item) => t["cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord"](item, transformType));;
    if (value.validatorAccumulatedCommissions) newValue.validatorAccumulatedCommissions = value.validatorAccumulatedCommissions.map((item) => t["cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord"](item, transformType));;
    if (value.validatorHistoricalRewards) newValue.validatorHistoricalRewards = value.validatorHistoricalRewards.map((item) => t["cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord"](item, transformType));;
    if (value.validatorCurrentRewards) newValue.validatorCurrentRewards = value.validatorCurrentRewards.map((item) => t["cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord"](item, transformType));;
    if (value.delegatorStartingInfos) newValue.delegatorStartingInfos = value.delegatorStartingInfos.map((item) => t["cosmos.distribution.v1beta1.DelegatorStartingInfoRecord"](item, transformType));;
    if (value.validatorSlashEvents) newValue.validatorSlashEvents = value.validatorSlashEvents.map((item) => t["cosmos.distribution.v1beta1.ValidatorSlashEventRecord"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryParamsResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryParamsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.distribution.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryValidatorDistributionInfoResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.selfBondRewards) newValue.selfBondRewards = value.selfBondRewards.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));;
    if (value.commission) newValue.commission = value.commission.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryValidatorOutstandingRewardsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards != null) newValue.rewards = t["cosmos.distribution.v1beta1.ValidatorOutstandingRewards"](value.rewards, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryValidatorCommissionResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.commission != null) newValue.commission = t["cosmos.distribution.v1beta1.ValidatorAccumulatedCommission"](value.commission, transformType);
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryValidatorSlashesResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.slashes) newValue.slashes = value.slashes.map((item) => t["cosmos.distribution.v1beta1.ValidatorSlashEvent"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryDelegationRewardsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards) newValue.rewards = value.rewards.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryDelegationTotalRewardsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards) newValue.rewards = value.rewards.map((item) => t["cosmos.distribution.v1beta1.DelegationDelegatorReward"](item, transformType));;
    if (value.total) newValue.total = value.total.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryCommunityPoolResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryCommunityPoolResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.pool) newValue.pool = value.pool.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.QueryTokenizeShareRecordRewardResponse"(value: _protos_cosmos_distribution_v1beta1_query.QueryTokenizeShareRecordRewardResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rewards) newValue.rewards = value.rewards.map((item) => t["cosmos.distribution.v1beta1.TokenizeShareRecordReward"](item, transformType));;
    if (value.total) newValue.total = value.total.map((item) => t["cosmos.base.v1beta1.DecCoin"](item, transformType));
    return newValue;
  },
  "cosmos.distribution.v1beta1.MsgUpdateParams"(value: _protos_cosmos_distribution_v1beta1_tx.MsgUpdateParams, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.distribution.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.gov.v1beta1.WeightedVoteOption"(value: _protos_cosmos_gov_v1beta1_gov.WeightedVoteOption, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.weight != null) newValue.weight = Dec[transformType](value.weight);
    return newValue;
  },
  "cosmos.gov.v1beta1.Vote"(value: _protos_cosmos_gov_v1beta1_gov.Vote, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.options) newValue.options = value.options.map((item) => t["cosmos.gov.v1beta1.WeightedVoteOption"](item, transformType));
    return newValue;
  },
  "cosmos.gov.v1beta1.TallyParams"(value: _protos_cosmos_gov_v1beta1_gov.TallyParams, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.quorum != null) newValue.quorum = encodeBinary(Dec[transformType](decodeBinary(value.quorum)));;
    if (value.threshold != null) newValue.threshold = encodeBinary(Dec[transformType](decodeBinary(value.threshold)));;
    if (value.vetoThreshold != null) newValue.vetoThreshold = encodeBinary(Dec[transformType](decodeBinary(value.vetoThreshold)));
    return newValue;
  },
  "cosmos.gov.v1beta1.GenesisState"(value: _protos_cosmos_gov_v1beta1_genesis.GenesisState, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.votes) newValue.votes = value.votes.map((item) => t["cosmos.gov.v1beta1.Vote"](item, transformType));;
    if (value.tallyParams != null) newValue.tallyParams = t["cosmos.gov.v1beta1.TallyParams"](value.tallyParams, transformType);
    return newValue;
  },
  "cosmos.gov.v1beta1.QueryVoteResponse"(value: _protos_cosmos_gov_v1beta1_query.QueryVoteResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.vote != null) newValue.vote = t["cosmos.gov.v1beta1.Vote"](value.vote, transformType);
    return newValue;
  },
  "cosmos.gov.v1beta1.QueryVotesResponse"(value: _protos_cosmos_gov_v1beta1_query.QueryVotesResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.votes) newValue.votes = value.votes.map((item) => t["cosmos.gov.v1beta1.Vote"](item, transformType));
    return newValue;
  },
  "cosmos.gov.v1beta1.QueryParamsResponse"(value: _protos_cosmos_gov_v1beta1_query.QueryParamsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.tallyParams != null) newValue.tallyParams = t["cosmos.gov.v1beta1.TallyParams"](value.tallyParams, transformType);
    return newValue;
  },
  "cosmos.gov.v1beta1.MsgVoteWeighted"(value: _protos_cosmos_gov_v1beta1_tx.MsgVoteWeighted, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.options) newValue.options = value.options.map((item) => t["cosmos.gov.v1beta1.WeightedVoteOption"](item, transformType));
    return newValue;
  },
  "cosmos.mint.v1beta1.Minter"(value: _protos_cosmos_mint_v1beta1_mint.Minter, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.inflation != null) newValue.inflation = Dec[transformType](value.inflation);;
    if (value.annualProvisions != null) newValue.annualProvisions = Dec[transformType](value.annualProvisions);
    return newValue;
  },
  "cosmos.mint.v1beta1.Params"(value: _protos_cosmos_mint_v1beta1_mint.Params, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.inflationRateChange != null) newValue.inflationRateChange = Dec[transformType](value.inflationRateChange);;
    if (value.inflationMax != null) newValue.inflationMax = Dec[transformType](value.inflationMax);;
    if (value.inflationMin != null) newValue.inflationMin = Dec[transformType](value.inflationMin);;
    if (value.goalBonded != null) newValue.goalBonded = Dec[transformType](value.goalBonded);
    return newValue;
  },
  "cosmos.mint.v1beta1.GenesisState"(value: _protos_cosmos_mint_v1beta1_genesis.GenesisState, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.minter != null) newValue.minter = t["cosmos.mint.v1beta1.Minter"](value.minter, transformType);;
    if (value.params != null) newValue.params = t["cosmos.mint.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.mint.v1beta1.QueryParamsResponse"(value: _protos_cosmos_mint_v1beta1_query.QueryParamsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.mint.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.mint.v1beta1.QueryInflationResponse"(value: _protos_cosmos_mint_v1beta1_query.QueryInflationResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.inflation != null) newValue.inflation = encodeBinary(Dec[transformType](decodeBinary(value.inflation)));
    return newValue;
  },
  "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse"(value: _protos_cosmos_mint_v1beta1_query.QueryAnnualProvisionsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.annualProvisions != null) newValue.annualProvisions = encodeBinary(Dec[transformType](decodeBinary(value.annualProvisions)));
    return newValue;
  },
  "cosmos.mint.v1beta1.MsgUpdateParams"(value: _protos_cosmos_mint_v1beta1_tx.MsgUpdateParams, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.mint.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.slashing.v1beta1.Params"(value: _protos_cosmos_slashing_v1beta1_slashing.Params, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.minSignedPerWindow != null) newValue.minSignedPerWindow = encodeBinary(Dec[transformType](decodeBinary(value.minSignedPerWindow)));;
    if (value.slashFractionDoubleSign != null) newValue.slashFractionDoubleSign = encodeBinary(Dec[transformType](decodeBinary(value.slashFractionDoubleSign)));;
    if (value.slashFractionDowntime != null) newValue.slashFractionDowntime = encodeBinary(Dec[transformType](decodeBinary(value.slashFractionDowntime)));
    return newValue;
  },
  "cosmos.slashing.v1beta1.GenesisState"(value: _protos_cosmos_slashing_v1beta1_genesis.GenesisState, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.slashing.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.slashing.v1beta1.QueryParamsResponse"(value: _protos_cosmos_slashing_v1beta1_query.QueryParamsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.slashing.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.slashing.v1beta1.MsgUpdateParams"(value: _protos_cosmos_slashing_v1beta1_tx.MsgUpdateParams, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.slashing.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.HistoricalInfo"(value: _protos_cosmos_staking_v1beta1_staking.HistoricalInfo, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.valset) newValue.valset = value.valset.map((item) => t["cosmos.staking.v1beta1.Validator"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.Validator"(value: _protos_cosmos_staking_v1beta1_staking.Validator, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.delegatorShares != null) newValue.delegatorShares = Dec[transformType](value.delegatorShares);;
    if (value.commission != null) newValue.commission = t["cosmos.staking.v1beta1.Commission"](value.commission, transformType);;
    if (value.validatorBondShares != null) newValue.validatorBondShares = Dec[transformType](value.validatorBondShares);;
    if (value.liquidShares != null) newValue.liquidShares = Dec[transformType](value.liquidShares);
    return newValue;
  },
  "cosmos.staking.v1beta1.Commission"(value: _protos_cosmos_staking_v1beta1_staking.Commission, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.commissionRates != null) newValue.commissionRates = t["cosmos.staking.v1beta1.CommissionRates"](value.commissionRates, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.CommissionRates"(value: _protos_cosmos_staking_v1beta1_staking.CommissionRates, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.rate != null) newValue.rate = Dec[transformType](value.rate);;
    if (value.maxRate != null) newValue.maxRate = Dec[transformType](value.maxRate);;
    if (value.maxChangeRate != null) newValue.maxChangeRate = Dec[transformType](value.maxChangeRate);
    return newValue;
  },
  "cosmos.staking.v1beta1.Delegation"(value: _protos_cosmos_staking_v1beta1_staking.Delegation, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.shares != null) newValue.shares = Dec[transformType](value.shares);
    return newValue;
  },
  "cosmos.staking.v1beta1.RedelegationEntry"(value: _protos_cosmos_staking_v1beta1_staking.RedelegationEntry, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.sharesDst != null) newValue.sharesDst = Dec[transformType](value.sharesDst);
    return newValue;
  },
  "cosmos.staking.v1beta1.Redelegation"(value: _protos_cosmos_staking_v1beta1_staking.Redelegation, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.entries) newValue.entries = value.entries.map((item) => t["cosmos.staking.v1beta1.RedelegationEntry"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.Params"(value: _protos_cosmos_staking_v1beta1_staking.Params, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.minCommissionRate != null) newValue.minCommissionRate = Dec[transformType](value.minCommissionRate);;
    if (value.validatorBondFactor != null) newValue.validatorBondFactor = Dec[transformType](value.validatorBondFactor);;
    if (value.globalLiquidStakingCap != null) newValue.globalLiquidStakingCap = Dec[transformType](value.globalLiquidStakingCap);;
    if (value.validatorLiquidStakingCap != null) newValue.validatorLiquidStakingCap = Dec[transformType](value.validatorLiquidStakingCap);
    return newValue;
  },
  "cosmos.staking.v1beta1.DelegationResponse"(value: _protos_cosmos_staking_v1beta1_staking.DelegationResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.delegation != null) newValue.delegation = t["cosmos.staking.v1beta1.Delegation"](value.delegation, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.RedelegationEntryResponse"(value: _protos_cosmos_staking_v1beta1_staking.RedelegationEntryResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.redelegationEntry != null) newValue.redelegationEntry = t["cosmos.staking.v1beta1.RedelegationEntry"](value.redelegationEntry, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.RedelegationResponse"(value: _protos_cosmos_staking_v1beta1_staking.RedelegationResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.redelegation != null) newValue.redelegation = t["cosmos.staking.v1beta1.Redelegation"](value.redelegation, transformType);;
    if (value.entries) newValue.entries = value.entries.map((item) => t["cosmos.staking.v1beta1.RedelegationEntryResponse"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.GenesisState"(value: _protos_cosmos_staking_v1beta1_genesis.GenesisState, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.staking.v1beta1.Params"](value.params, transformType);;
    if (value.validators) newValue.validators = value.validators.map((item) => t["cosmos.staking.v1beta1.Validator"](item, transformType));;
    if (value.delegations) newValue.delegations = value.delegations.map((item) => t["cosmos.staking.v1beta1.Delegation"](item, transformType));;
    if (value.redelegations) newValue.redelegations = value.redelegations.map((item) => t["cosmos.staking.v1beta1.Redelegation"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryValidatorsResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryValidatorsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.validators) newValue.validators = value.validators.map((item) => t["cosmos.staking.v1beta1.Validator"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryValidatorResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryValidatorResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.validator != null) newValue.validator = t["cosmos.staking.v1beta1.Validator"](value.validator, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryValidatorDelegationsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.delegationResponses) newValue.delegationResponses = value.delegationResponses.map((item) => t["cosmos.staking.v1beta1.DelegationResponse"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryDelegationResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryDelegationResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.delegationResponse != null) newValue.delegationResponse = t["cosmos.staking.v1beta1.DelegationResponse"](value.delegationResponse, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryDelegatorDelegationsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.delegationResponses) newValue.delegationResponses = value.delegationResponses.map((item) => t["cosmos.staking.v1beta1.DelegationResponse"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryRedelegationsResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryRedelegationsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.redelegationResponses) newValue.redelegationResponses = value.redelegationResponses.map((item) => t["cosmos.staking.v1beta1.RedelegationResponse"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryDelegatorValidatorsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.validators) newValue.validators = value.validators.map((item) => t["cosmos.staking.v1beta1.Validator"](item, transformType));
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryDelegatorValidatorResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.validator != null) newValue.validator = t["cosmos.staking.v1beta1.Validator"](value.validator, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryHistoricalInfoResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryHistoricalInfoResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.hist != null) newValue.hist = t["cosmos.staking.v1beta1.HistoricalInfo"](value.hist, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.QueryParamsResponse"(value: _protos_cosmos_staking_v1beta1_query.QueryParamsResponse, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.staking.v1beta1.Params"](value.params, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.MsgCreateValidator"(value: _protos_cosmos_staking_v1beta1_tx.MsgCreateValidator, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.commission != null) newValue.commission = t["cosmos.staking.v1beta1.CommissionRates"](value.commission, transformType);
    return newValue;
  },
  "cosmos.staking.v1beta1.MsgEditValidator"(value: _protos_cosmos_staking_v1beta1_tx.MsgEditValidator, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.commissionRate != null) newValue.commissionRate = Dec[transformType](value.commissionRate);
    return newValue;
  },
  "cosmos.staking.v1beta1.MsgUpdateParams"(value: _protos_cosmos_staking_v1beta1_tx.MsgUpdateParams, transformType: 'encode' | 'decode') {
    if (value == null) return value;
    const newValue = { ...value };
    if (value.params != null) newValue.params = t["cosmos.staking.v1beta1.Params"](value.params, transformType);
    return newValue;
  }
};

export const transformations = t;
