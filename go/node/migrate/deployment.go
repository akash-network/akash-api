package migrate

import (
	"cosmossdk.io/math"
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/authz"

	v1 "pkg.akt.dev/go/node/deployment/v1"
	"pkg.akt.dev/go/node/deployment/v1beta3"
	"pkg.akt.dev/go/node/deployment/v1beta4"
)

//func init() {
//	proto.RegisterType((*v1beta3.MsgDepositDeployment)(nil), "akash.deployment.v1beta3.MsgDepositDeployment")
//	proto.RegisterType((*v1beta3.DepositDeploymentAuthorization)(nil), "akash.deployment.v1beta3.DepositDeploymentAuthorization")
//}

func RegisterDeploymentInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&v1beta3.MsgDepositDeployment{},
	)

	registry.RegisterImplementations(
		(*authz.Authorization)(nil),
		&v1beta3.DepositDeploymentAuthorization{},
	)
}

func DeploymentV1beta3Prefix() []byte {
	return v1beta3.DeploymentPrefix()
}

func GroupV1beta3Prefix() []byte {
	return v1beta3.GroupPrefix()
}

func DeploymentIDFromV1Beta3(from v1beta3.DeploymentID) v1.DeploymentID {
	return v1.DeploymentID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
	}
}

func GroupIDFromV1Beta3(from v1beta3.GroupID) v1.GroupID {
	return v1.GroupID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
		GSeq:  from.GSeq,
	}
}

func DeploymentFromV1beta3(cdc codec.BinaryCodec, fromBz []byte) v1.Deployment {
	var from v1beta3.Deployment
	cdc.MustUnmarshal(fromBz, &from)

	return v1.Deployment{
		ID:        DeploymentIDFromV1Beta3(from.DeploymentID),
		State:     v1.Deployment_State(from.State),
		Hash:      from.Version,
		CreatedAt: from.CreatedAt,
	}
}

func DepositAuthorizationFromV1beta3(from v1beta3.DepositDeploymentAuthorization) v1.DepositAuthorization {
	return v1.DepositAuthorization{
		SpendLimit: from.SpendLimit,
	}
}

func ResourceUnitFromV1Beta3(id uint32, from v1beta3.ResourceUnit) v1beta4.ResourceUnit {
	return v1beta4.ResourceUnit{
		Resources: ResourcesFromV1Beta3(id, from.Resources),
		Count:     from.Count,
		Price: sdk.DecCoin{
			Denom:  from.Price.Denom,
			Amount: math.LegacyNewDecFromInt(math.NewIntFromBigInt(from.Price.Amount.BigInt())),
		},
	}
}

func ResourcesUnitsFromV1Beta3(from []v1beta3.ResourceUnit) v1beta4.ResourceUnits {
	res := make(v1beta4.ResourceUnits, 0, len(from))

	for i, oval := range from {
		res = append(res, ResourceUnitFromV1Beta3(uint32(i+1), oval)) // nolint gosec
	}

	return res
}

func GroupSpecFromV1Beta3(from v1beta3.GroupSpec) v1beta4.GroupSpec {
	return v1beta4.GroupSpec{
		Name:         from.Name,
		Requirements: PlacementRequirementsFromV1Beta3(from.Requirements),
		Resources:    ResourcesUnitsFromV1Beta3(from.Resources),
	}
}

func GroupFromV1Beta3(cdc codec.BinaryCodec, fromBz []byte) v1beta4.Group {
	var from v1beta3.Group
	cdc.MustUnmarshal(fromBz, &from)

	return v1beta4.Group{
		ID:        GroupIDFromV1Beta3(from.GroupID),
		State:     v1beta4.Group_State(from.State),
		GroupSpec: GroupSpecFromV1Beta3(from.GroupSpec),
		CreatedAt: from.CreatedAt,
	}
}
