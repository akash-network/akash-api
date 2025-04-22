import { ResourceUnitSchema } from "../protos/akash/deployment/v1beta4/resourceunit_pb.ts";
import { DecCoinSchema } from "../protos/cosmos/base/v1beta1/coin_pb.ts";
import { GroupSpecSchema } from "../protos/akash/deployment/v1beta4/groupspec_pb.ts";
import { MsgCreateDeploymentSchema } from "../protos/akash/deployment/v1beta4/deploymentmsg_pb.ts";
import { GroupSchema } from "../protos/akash/deployment/v1beta4/group_pb.ts";
import { GenesisDeploymentSchema, GenesisStateSchema } from "../protos/akash/deployment/v1beta4/genesis_pb.ts";
import { AccountSchema } from "../protos/akash/escrow/v1/account_pb.ts";
import { QueryDeploymentResponseSchema, QueryDeploymentsResponseSchema, QueryGroupResponseSchema } from "../protos/akash/deployment/v1beta4/query_pb.ts";
import { FractionalPaymentSchema } from "../protos/akash/escrow/v1/fractional_payment_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$1 } from "../protos/akash/escrow/v1/genesis_pb.ts";
import { QueryAccountsResponseSchema, QueryPaymentsResponseSchema } from "../protos/akash/escrow/v1/query_pb.ts";
import { DepositParamsSchema } from "../protos/akash/gov/v1beta3/params_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$2 } from "../protos/akash/gov/v1beta3/genesis_pb.ts";
import { ParamsSchema } from "../protos/akash/inflation/v1beta2/params_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$3 } from "../protos/akash/inflation/v1beta2/genesis_pb.ts";
import { ParamsSchema as ParamsSchema$1 } from "../protos/akash/inflation/v1beta3/params_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$4 } from "../protos/akash/inflation/v1beta3/genesis_pb.ts";
import { LeaseSchema } from "../protos/akash/market/v1/lease_pb.ts";
import { EventBidCreatedSchema, EventLeaseCreatedSchema } from "../protos/akash/market/v1/event_pb.ts";
import { BidSchema } from "../protos/akash/market/v1beta5/bid_pb.ts";
import { MsgCreateBidSchema } from "../protos/akash/market/v1beta5/bidmsg_pb.ts";
import { OrderSchema } from "../protos/akash/market/v1beta5/order_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$5 } from "../protos/akash/market/v1beta5/genesis_pb.ts";
import { QueryBidResponseSchema, QueryBidsResponseSchema, QueryLeaseResponseSchema, QueryLeasesResponseSchema, QueryOrderResponseSchema, QueryOrdersResponseSchema } from "../protos/akash/market/v1beta5/query_pb.ts";
import { ParamsSchema as ParamsSchema$2 } from "../protos/akash/staking/v1beta3/params_pb.ts";
import { GenesisStateSchema as GenesisStateSchema$6 } from "../protos/akash/staking/v1beta3/genesis_pb.ts";
import { MsgUpdateParamsSchema } from "../protos/akash/staking/v1beta3/paramsmsg_pb.ts";
import { QueryParamsResponseSchema } from "../protos/akash/staking/v1beta3/query_pb.ts";

import { expect, describe, it } from "@jest/globals";
import type { DescMessage } from "@bufbuild/protobuf";
import { patches } from "./nodeCustomTypePatches.ts";
import { generateMessage } from "@test/helpers/generateMessage";
import type { TypePatches } from "../../utils/applyPatches";

type MessageTypes = Record<string, { fields: string[], schema: DescMessage }>;
const messageTypes: MessageTypes = {
  "akash.deployment.v1beta4.ResourceUnit": {
    fields: ["price"],
    schema: ResourceUnitSchema
  },
  "cosmos.base.v1beta1.DecCoin": {
    fields: ["amount"],
    schema: DecCoinSchema
  },
  "akash.deployment.v1beta4.GroupSpec": {
    fields: ["resources"],
    schema: GroupSpecSchema
  },
  "akash.deployment.v1beta4.MsgCreateDeployment": {
    fields: ["groups"],
    schema: MsgCreateDeploymentSchema
  },
  "akash.deployment.v1beta4.Group": {
    fields: ["groupSpec"],
    schema: GroupSchema
  },
  "akash.deployment.v1beta4.GenesisDeployment": {
    fields: ["groups"],
    schema: GenesisDeploymentSchema
  },
  "akash.deployment.v1beta4.GenesisState": {
    fields: ["deployments"],
    schema: GenesisStateSchema
  },
  "akash.escrow.v1.Account": {
    fields: ["balance","transferred","funds"],
    schema: AccountSchema
  },
  "akash.deployment.v1beta4.QueryDeploymentsResponse": {
    fields: ["deployments"],
    schema: QueryDeploymentsResponseSchema
  },
  "akash.deployment.v1beta4.QueryDeploymentResponse": {
    fields: ["groups","escrowAccount"],
    schema: QueryDeploymentResponseSchema
  },
  "akash.deployment.v1beta4.QueryGroupResponse": {
    fields: ["group"],
    schema: QueryGroupResponseSchema
  },
  "akash.escrow.v1.FractionalPayment": {
    fields: ["rate","balance"],
    schema: FractionalPaymentSchema
  },
  "akash.escrow.v1.GenesisState": {
    fields: ["accounts","payments"],
    schema: GenesisStateSchema$1
  },
  "akash.escrow.v1.QueryAccountsResponse": {
    fields: ["accounts"],
    schema: QueryAccountsResponseSchema
  },
  "akash.escrow.v1.QueryPaymentsResponse": {
    fields: ["payments"],
    schema: QueryPaymentsResponseSchema
  },
  "akash.gov.v1beta3.DepositParams": {
    fields: ["minInitialDepositRate"],
    schema: DepositParamsSchema
  },
  "akash.gov.v1beta3.GenesisState": {
    fields: ["depositParams"],
    schema: GenesisStateSchema$2
  },
  "akash.inflation.v1beta2.Params": {
    fields: ["inflationDecayFactor","initialInflation","variance"],
    schema: ParamsSchema
  },
  "akash.inflation.v1beta2.GenesisState": {
    fields: ["params"],
    schema: GenesisStateSchema$3
  },
  "akash.inflation.v1beta3.Params": {
    fields: ["inflationDecayFactor","initialInflation","variance"],
    schema: ParamsSchema$1
  },
  "akash.inflation.v1beta3.GenesisState": {
    fields: ["params"],
    schema: GenesisStateSchema$4
  },
  "akash.market.v1.Lease": {
    fields: ["price"],
    schema: LeaseSchema
  },
  "akash.market.v1.EventBidCreated": {
    fields: ["price"],
    schema: EventBidCreatedSchema
  },
  "akash.market.v1.EventLeaseCreated": {
    fields: ["price"],
    schema: EventLeaseCreatedSchema
  },
  "akash.market.v1beta5.Bid": {
    fields: ["price"],
    schema: BidSchema
  },
  "akash.market.v1beta5.MsgCreateBid": {
    fields: ["price"],
    schema: MsgCreateBidSchema
  },
  "akash.market.v1beta5.Order": {
    fields: ["spec"],
    schema: OrderSchema
  },
  "akash.market.v1beta5.GenesisState": {
    fields: ["orders","leases","bids"],
    schema: GenesisStateSchema$5
  },
  "akash.market.v1beta5.QueryOrdersResponse": {
    fields: ["orders"],
    schema: QueryOrdersResponseSchema
  },
  "akash.market.v1beta5.QueryOrderResponse": {
    fields: ["order"],
    schema: QueryOrderResponseSchema
  },
  "akash.market.v1beta5.QueryBidsResponse": {
    fields: ["bids"],
    schema: QueryBidsResponseSchema
  },
  "akash.market.v1beta5.QueryBidResponse": {
    fields: ["bid","escrowAccount"],
    schema: QueryBidResponseSchema
  },
  "akash.market.v1beta5.QueryLeasesResponse": {
    fields: ["leases"],
    schema: QueryLeasesResponseSchema
  },
  "akash.market.v1beta5.QueryLeaseResponse": {
    fields: ["lease","escrowPayment"],
    schema: QueryLeaseResponseSchema
  },
  "akash.staking.v1beta3.Params": {
    fields: ["minCommissionRate"],
    schema: ParamsSchema$2
  },
  "akash.staking.v1beta3.GenesisState": {
    fields: ["params"],
    schema: GenesisStateSchema$6
  },
  "akash.staking.v1beta3.MsgUpdateParams": {
    fields: ["params"],
    schema: MsgUpdateParamsSchema
  },
  "akash.staking.v1beta3.QueryParamsResponse": {
    fields: ["params"],
    schema: QueryParamsResponseSchema
  },
};
describe("nodeCustomTypePatches.ts", () => {
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
