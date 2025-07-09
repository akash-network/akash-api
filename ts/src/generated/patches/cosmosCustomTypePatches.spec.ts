import { DecCoinSchema, DecProtoSchema } from "../protos/cosmos/base/v1beta1/coin_pb.ts";
import { DelegationDelegatorRewardSchema, DelegatorStartingInfoSchema, FeePoolSchema, ParamsSchema, TokenizeShareRecordRewardSchema, ValidatorAccumulatedCommissionSchema, ValidatorCurrentRewardsSchema, ValidatorHistoricalRewardsSchema, ValidatorOutstandingRewardsSchema, ValidatorSlashEventSchema, ValidatorSlashEventsSchema } from "../protos/cosmos/distribution/v1beta1/distribution_pb.ts";
import { DelegatorStartingInfoRecordSchema, GenesisStateSchema, ValidatorAccumulatedCommissionRecordSchema, ValidatorCurrentRewardsRecordSchema, ValidatorHistoricalRewardsRecordSchema, ValidatorOutstandingRewardsRecordSchema, ValidatorSlashEventRecordSchema } from "../protos/cosmos/distribution/v1beta1/genesis_pb.ts";
import { QueryCommunityPoolResponseSchema, QueryDelegationRewardsResponseSchema, QueryDelegationTotalRewardsResponseSchema, QueryParamsResponseSchema, QueryTokenizeShareRecordRewardResponseSchema, QueryValidatorCommissionResponseSchema, QueryValidatorDistributionInfoResponseSchema, QueryValidatorOutstandingRewardsResponseSchema, QueryValidatorSlashesResponseSchema } from "../protos/cosmos/distribution/v1beta1/query_pb.ts";
import { MsgUpdateParamsSchema } from "../protos/cosmos/distribution/v1beta1/tx_pb.ts";
import { TallyParamsSchema, VoteSchema, WeightedVoteOptionSchema } from "../protos/cosmos/gov/v1beta1/gov_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$1 } from "../protos/cosmos/gov/v1beta1/genesis_pb.ts";
import { QueryParamsResponseSchema as QueryParamsResponseSchema$1, QueryVoteResponseSchema, QueryVotesResponseSchema } from "../protos/cosmos/gov/v1beta1/query_pb.ts";
import { MsgVoteWeightedSchema } from "../protos/cosmos/gov/v1beta1/tx_pb.ts";
import { MinterSchema, ParamsSchema as ParamsSchema$1 } from "../protos/cosmos/mint/v1beta1/mint_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$2 } from "../protos/cosmos/mint/v1beta1/genesis_pb.ts";
import { QueryAnnualProvisionsResponseSchema, QueryInflationResponseSchema, QueryParamsResponseSchema as QueryParamsResponseSchema$2 } from "../protos/cosmos/mint/v1beta1/query_pb.ts";
import { MsgUpdateParamsSchema as MsgUpdateParamsSchema$1 } from "../protos/cosmos/mint/v1beta1/tx_pb.ts";
import { ParamsSchema as ParamsSchema$2 } from "../protos/cosmos/slashing/v1beta1/slashing_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$3 } from "../protos/cosmos/slashing/v1beta1/genesis_pb.ts";
import { QueryParamsResponseSchema as QueryParamsResponseSchema$3 } from "../protos/cosmos/slashing/v1beta1/query_pb.ts";
import { MsgUpdateParamsSchema as MsgUpdateParamsSchema$2 } from "../protos/cosmos/slashing/v1beta1/tx_pb.ts";
import { CommissionRatesSchema, CommissionSchema, DelegationResponseSchema, DelegationSchema, HistoricalInfoSchema, ParamsSchema as ParamsSchema$3, RedelegationEntryResponseSchema, RedelegationEntrySchema, RedelegationResponseSchema, RedelegationSchema, ValidatorSchema } from "../protos/cosmos/staking/v1beta1/staking_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$4 } from "../protos/cosmos/staking/v1beta1/genesis_pb.ts";
import { QueryDelegationResponseSchema, QueryDelegatorDelegationsResponseSchema, QueryDelegatorValidatorResponseSchema, QueryDelegatorValidatorsResponseSchema, QueryHistoricalInfoResponseSchema, QueryParamsResponseSchema as QueryParamsResponseSchema$4, QueryRedelegationsResponseSchema, QueryValidatorDelegationsResponseSchema, QueryValidatorResponseSchema, QueryValidatorsResponseSchema } from "../protos/cosmos/staking/v1beta1/query_pb.ts";
import { MsgCreateValidatorSchema, MsgEditValidatorSchema, MsgUpdateParamsSchema as MsgUpdateParamsSchema$3 } from "../protos/cosmos/staking/v1beta1/tx_pb.ts";

import { expect, describe, it } from "@jest/globals";
import type { DescMessage } from "@bufbuild/protobuf";
import { patches } from "./cosmosCustomTypePatches.ts";
import { generateMessage } from "@test/helpers/generateMessage";
import type { TypePatches } from "../../utils/applyPatches";

type MessageTypes = Record<string, { fields: string[], schema: DescMessage }>;
const messageTypes: MessageTypes = {
  "cosmos.base.v1beta1.DecCoin": {
    fields: ["amount"],
    schema: DecCoinSchema
  },
  "cosmos.base.v1beta1.DecProto": {
    fields: ["dec"],
    schema: DecProtoSchema
  },
  "cosmos.distribution.v1beta1.Params": {
    fields: ["communityTax","baseProposerReward","bonusProposerReward"],
    schema: ParamsSchema
  },
  "cosmos.distribution.v1beta1.ValidatorHistoricalRewards": {
    fields: ["cumulativeRewardRatio"],
    schema: ValidatorHistoricalRewardsSchema
  },
  "cosmos.distribution.v1beta1.ValidatorCurrentRewards": {
    fields: ["rewards"],
    schema: ValidatorCurrentRewardsSchema
  },
  "cosmos.distribution.v1beta1.ValidatorAccumulatedCommission": {
    fields: ["commission"],
    schema: ValidatorAccumulatedCommissionSchema
  },
  "cosmos.distribution.v1beta1.ValidatorOutstandingRewards": {
    fields: ["rewards"],
    schema: ValidatorOutstandingRewardsSchema
  },
  "cosmos.distribution.v1beta1.ValidatorSlashEvent": {
    fields: ["fraction"],
    schema: ValidatorSlashEventSchema
  },
  "cosmos.distribution.v1beta1.ValidatorSlashEvents": {
    fields: ["validatorSlashEvents"],
    schema: ValidatorSlashEventsSchema
  },
  "cosmos.distribution.v1beta1.FeePool": {
    fields: ["communityPool"],
    schema: FeePoolSchema
  },
  "cosmos.distribution.v1beta1.TokenizeShareRecordReward": {
    fields: ["reward"],
    schema: TokenizeShareRecordRewardSchema
  },
  "cosmos.distribution.v1beta1.DelegatorStartingInfo": {
    fields: ["stake"],
    schema: DelegatorStartingInfoSchema
  },
  "cosmos.distribution.v1beta1.DelegationDelegatorReward": {
    fields: ["reward"],
    schema: DelegationDelegatorRewardSchema
  },
  "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord": {
    fields: ["outstandingRewards"],
    schema: ValidatorOutstandingRewardsRecordSchema
  },
  "cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord": {
    fields: ["accumulated"],
    schema: ValidatorAccumulatedCommissionRecordSchema
  },
  "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord": {
    fields: ["rewards"],
    schema: ValidatorHistoricalRewardsRecordSchema
  },
  "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord": {
    fields: ["rewards"],
    schema: ValidatorCurrentRewardsRecordSchema
  },
  "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord": {
    fields: ["startingInfo"],
    schema: DelegatorStartingInfoRecordSchema
  },
  "cosmos.distribution.v1beta1.ValidatorSlashEventRecord": {
    fields: ["validatorSlashEvent"],
    schema: ValidatorSlashEventRecordSchema
  },
  "cosmos.distribution.v1beta1.GenesisState": {
    fields: ["params","feePool","outstandingRewards","validatorAccumulatedCommissions","validatorHistoricalRewards","validatorCurrentRewards","delegatorStartingInfos","validatorSlashEvents"],
    schema: GenesisStateSchema
  },
  "cosmos.distribution.v1beta1.QueryParamsResponse": {
    fields: ["params"],
    schema: QueryParamsResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse": {
    fields: ["selfBondRewards","commission"],
    schema: QueryValidatorDistributionInfoResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse": {
    fields: ["rewards"],
    schema: QueryValidatorOutstandingRewardsResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse": {
    fields: ["commission"],
    schema: QueryValidatorCommissionResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse": {
    fields: ["slashes"],
    schema: QueryValidatorSlashesResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse": {
    fields: ["rewards"],
    schema: QueryDelegationRewardsResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse": {
    fields: ["rewards","total"],
    schema: QueryDelegationTotalRewardsResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryCommunityPoolResponse": {
    fields: ["pool"],
    schema: QueryCommunityPoolResponseSchema
  },
  "cosmos.distribution.v1beta1.QueryTokenizeShareRecordRewardResponse": {
    fields: ["rewards","total"],
    schema: QueryTokenizeShareRecordRewardResponseSchema
  },
  "cosmos.distribution.v1beta1.MsgUpdateParams": {
    fields: ["params"],
    schema: MsgUpdateParamsSchema
  },
  "cosmos.gov.v1beta1.WeightedVoteOption": {
    fields: ["weight"],
    schema: WeightedVoteOptionSchema
  },
  "cosmos.gov.v1beta1.Vote": {
    fields: ["options"],
    schema: VoteSchema
  },
  "cosmos.gov.v1beta1.TallyParams": {
    fields: ["quorum","threshold","vetoThreshold"],
    schema: TallyParamsSchema
  },
  "cosmos.gov.v1beta1.GenesisState": {
    fields: ["votes","tallyParams"],
    schema: GenesisStateSchema$1
  },
  "cosmos.gov.v1beta1.QueryVoteResponse": {
    fields: ["vote"],
    schema: QueryVoteResponseSchema
  },
  "cosmos.gov.v1beta1.QueryVotesResponse": {
    fields: ["votes"],
    schema: QueryVotesResponseSchema
  },
  "cosmos.gov.v1beta1.QueryParamsResponse": {
    fields: ["tallyParams"],
    schema: QueryParamsResponseSchema$1
  },
  "cosmos.gov.v1beta1.MsgVoteWeighted": {
    fields: ["options"],
    schema: MsgVoteWeightedSchema
  },
  "cosmos.mint.v1beta1.Minter": {
    fields: ["inflation","annualProvisions"],
    schema: MinterSchema
  },
  "cosmos.mint.v1beta1.Params": {
    fields: ["inflationRateChange","inflationMax","inflationMin","goalBonded"],
    schema: ParamsSchema$1
  },
  "cosmos.mint.v1beta1.GenesisState": {
    fields: ["minter","params"],
    schema: GenesisStateSchema$2
  },
  "cosmos.mint.v1beta1.QueryParamsResponse": {
    fields: ["params"],
    schema: QueryParamsResponseSchema$2
  },
  "cosmos.mint.v1beta1.QueryInflationResponse": {
    fields: ["inflation"],
    schema: QueryInflationResponseSchema
  },
  "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse": {
    fields: ["annualProvisions"],
    schema: QueryAnnualProvisionsResponseSchema
  },
  "cosmos.mint.v1beta1.MsgUpdateParams": {
    fields: ["params"],
    schema: MsgUpdateParamsSchema$1
  },
  "cosmos.slashing.v1beta1.Params": {
    fields: ["minSignedPerWindow","slashFractionDoubleSign","slashFractionDowntime"],
    schema: ParamsSchema$2
  },
  "cosmos.slashing.v1beta1.GenesisState": {
    fields: ["params"],
    schema: GenesisStateSchema$3
  },
  "cosmos.slashing.v1beta1.QueryParamsResponse": {
    fields: ["params"],
    schema: QueryParamsResponseSchema$3
  },
  "cosmos.slashing.v1beta1.MsgUpdateParams": {
    fields: ["params"],
    schema: MsgUpdateParamsSchema$2
  },
  "cosmos.staking.v1beta1.HistoricalInfo": {
    fields: ["valset"],
    schema: HistoricalInfoSchema
  },
  "cosmos.staking.v1beta1.Validator": {
    fields: ["delegatorShares","commission","validatorBondShares","liquidShares"],
    schema: ValidatorSchema
  },
  "cosmos.staking.v1beta1.Commission": {
    fields: ["commissionRates"],
    schema: CommissionSchema
  },
  "cosmos.staking.v1beta1.CommissionRates": {
    fields: ["rate","maxRate","maxChangeRate"],
    schema: CommissionRatesSchema
  },
  "cosmos.staking.v1beta1.Delegation": {
    fields: ["shares"],
    schema: DelegationSchema
  },
  "cosmos.staking.v1beta1.RedelegationEntry": {
    fields: ["sharesDst"],
    schema: RedelegationEntrySchema
  },
  "cosmos.staking.v1beta1.Redelegation": {
    fields: ["entries"],
    schema: RedelegationSchema
  },
  "cosmos.staking.v1beta1.Params": {
    fields: ["minCommissionRate","validatorBondFactor","globalLiquidStakingCap","validatorLiquidStakingCap"],
    schema: ParamsSchema$3
  },
  "cosmos.staking.v1beta1.DelegationResponse": {
    fields: ["delegation"],
    schema: DelegationResponseSchema
  },
  "cosmos.staking.v1beta1.RedelegationEntryResponse": {
    fields: ["redelegationEntry"],
    schema: RedelegationEntryResponseSchema
  },
  "cosmos.staking.v1beta1.RedelegationResponse": {
    fields: ["redelegation","entries"],
    schema: RedelegationResponseSchema
  },
  "cosmos.staking.v1beta1.GenesisState": {
    fields: ["params","validators","delegations","redelegations"],
    schema: GenesisStateSchema$4
  },
  "cosmos.staking.v1beta1.QueryValidatorsResponse": {
    fields: ["validators"],
    schema: QueryValidatorsResponseSchema
  },
  "cosmos.staking.v1beta1.QueryValidatorResponse": {
    fields: ["validator"],
    schema: QueryValidatorResponseSchema
  },
  "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse": {
    fields: ["delegationResponses"],
    schema: QueryValidatorDelegationsResponseSchema
  },
  "cosmos.staking.v1beta1.QueryDelegationResponse": {
    fields: ["delegationResponse"],
    schema: QueryDelegationResponseSchema
  },
  "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse": {
    fields: ["delegationResponses"],
    schema: QueryDelegatorDelegationsResponseSchema
  },
  "cosmos.staking.v1beta1.QueryRedelegationsResponse": {
    fields: ["redelegationResponses"],
    schema: QueryRedelegationsResponseSchema
  },
  "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse": {
    fields: ["validators"],
    schema: QueryDelegatorValidatorsResponseSchema
  },
  "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse": {
    fields: ["validator"],
    schema: QueryDelegatorValidatorResponseSchema
  },
  "cosmos.staking.v1beta1.QueryHistoricalInfoResponse": {
    fields: ["hist"],
    schema: QueryHistoricalInfoResponseSchema
  },
  "cosmos.staking.v1beta1.QueryParamsResponse": {
    fields: ["params"],
    schema: QueryParamsResponseSchema$4
  },
  "cosmos.staking.v1beta1.MsgCreateValidator": {
    fields: ["commission"],
    schema: MsgCreateValidatorSchema
  },
  "cosmos.staking.v1beta1.MsgEditValidator": {
    fields: ["commissionRate"],
    schema: MsgEditValidatorSchema
  },
  "cosmos.staking.v1beta1.MsgUpdateParams": {
    fields: ["params"],
    schema: MsgUpdateParamsSchema$3
  },
};
describe("cosmosCustomTypePatches.ts", () => {
  describe.each(Object.entries(patches))('patch %s', (typeName, patch: TypePatches[keyof TypePatches]) => {
    it('returns undefined if receives null or undefined', () => {
      expect(patch(null, 'encode')).toBe(undefined);
      expect(patch(null, 'decode')).toBe(undefined);
      expect(patch(undefined, 'encode')).toBe(undefined);
      expect(patch(undefined, 'decode')).toBe(undefined);
    });

    it.each(generateTestCases(typeName, messageTypes))('patches and returns cloned value: %s', (name, value) => {
      const transformedValue = patch(patch(value, 'encode'), 'decode');
      expect(value).toEqual(transformedValue);
      expect(value).not.toBe(transformedValue);
    });
  });

  function generateTestCases(typeName: string, messageTypes: MessageTypes) {
    const type = messageTypes[typeName];
    const cases = type.fields.map((name) => ["single " + name + " field", generateMessage(type.schema, {
      ...messageTypes,
      [typeName]: {
        ...type,
        fields: [name],
      }
    })]);
    cases.push(["all fields", generateMessage(type.schema, messageTypes)]);
    return cases;
  }
});
