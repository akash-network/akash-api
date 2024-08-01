package v1beta4_test

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	sdk "github.com/cosmos/cosmos-sdk/types"

	v1 "pkg.akt.dev/go/node/deployment/v1"
	attr "pkg.akt.dev/go/node/types/attributes/v1"
	tutil "pkg.akt.dev/go/testutil"
	testutil "pkg.akt.dev/go/testutil/v1beta3"

	atypes "pkg.akt.dev/go/node/audit/v1"
	types "pkg.akt.dev/go/node/deployment/v1beta4"
)

type gStateTest struct {
	state               types.Group_State
	expValidateClosable error
}

func TestGroupState(t *testing.T) {
	tests := []gStateTest{
		{
			state: types.GroupOpen,
		},
		{
			state: types.GroupOpen,
		},
		{
			state: types.GroupInsufficientFunds,
		},
		{
			state:               types.GroupClosed,
			expValidateClosable: v1.ErrGroupClosed,
		},
		{
			state: types.Group_State(99),
		},
	}

	for _, test := range tests {
		group := types.Group{
			ID:    testutil.GroupID(t),
			State: test.state,
		}

		assert.Equal(t, group.ValidateClosable(), test.expValidateClosable, group.State)
	}
}

// func TestDeploymentVersionAttributeLifecycle(t *testing.T) {
// 	d := testutil.Deployment(t)
//
// 	t.Run("deployment created", func(t *testing.T) {
// 		edc := types.NewEventDeploymentCreated(d.GetID(), d.Hash)
// 		sdkEvent := edc.ToSDKEvent()
// 		strEvent := sdk.StringifyEvent(abci.Event(sdkEvent))
//
// 		ev, err := sdkutil.ParseEvent(strEvent)
// 		require.NoError(t, err)
//
// 		hashString, err := types.ParseEVDeploymentHash(ev.Attributes)
// 		require.NoError(t, err)
// 		assert.Equal(t, d.Hash, hashString)
// 	})
//
// 	t.Run("deployment updated", func(t *testing.T) {
// 		edu := types.NewEventDeploymentUpdated(d.GetID(), d.GetHash())
//
// 		sdkEvent := edu.ToSDKEvent()
// 		strEvent := sdk.StringifyEvent(abci.Event(sdkEvent))
//
// 		ev, err := sdkutil.ParseEvent(strEvent)
// 		require.NoError(t, err)
//
// 		hashString, err := types.ParseEVDeploymentHash(ev.Attributes)
// 		require.NoError(t, err)
// 		assert.Equal(t, d.Hash, hashString)
// 	})
//
// 	t.Run("deployment closed error", func(t *testing.T) {
// 		edc := types.NewEventDeploymentClosed(d.GetID())
//
// 		sdkEvent := edc.ToSDKEvent()
// 		strEvent := sdk.StringifyEvent(abci.Event(sdkEvent))
//
// 		ev, err := sdkutil.ParseEvent(strEvent)
// 		require.NoError(t, err)
//
// 		hashString, err := types.ParseEVDeploymentHash(ev.Attributes)
// 		require.Error(t, err)
// 		assert.NotEqual(t, d.Hash, hashString)
// 	})
// }

func TestGroupSpecValidation(t *testing.T) {
	tests := []struct {
		desc   string
		gspec  types.GroupSpec
		expErr error
	}{
		{
			desc: "groupspec requires name",
			gspec: types.GroupSpec{
				Name:         "",
				Requirements: testutil.PlacementRequirements(t),
				Resources:    testutil.ResourcesList(t, 1),
			},
			expErr: v1.ErrInvalidGroups,
		},
		{
			desc: "groupspec valid",
			gspec: types.GroupSpec{
				Name:         "hihi",
				Requirements: testutil.PlacementRequirements(t),
				Resources:    testutil.ResourcesList(t, 1),
			},
			expErr: nil,
		},
	}

	for _, test := range tests {
		err := test.gspec.ValidateBasic()
		if test.expErr != nil {
			assert.Error(t, err, test.desc)
			continue
		}
		assert.Equal(t, test.expErr, err, test.desc)
	}
}

func TestGroupPlacementRequirementsNoSigners(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	providerAttr := []atypes.Provider{
		{
			Owner:      "test",
			Attributes: group.Requirements.Attributes,
		},
	}

	require.True(t, group.MatchRequirements(providerAttr))
}

func TestGroupPlacementRequirementsSignerAllOf(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	group.Requirements.SignedBy.AllOf = append(group.Requirements.SignedBy.AllOf, "auditor1")
	group.Requirements.SignedBy.AllOf = append(group.Requirements.SignedBy.AllOf, "auditor2")

	providerAttr := []atypes.Provider{
		{
			Owner:      "test",
			Attributes: group.Requirements.Attributes,
		},
	}

	require.False(t, group.MatchRequirements(providerAttr))

	providerAttr = append(providerAttr, atypes.Provider{
		Owner:      "test",
		Auditor:    "auditor2",
		Attributes: group.Requirements.Attributes,
	})

	require.False(t, group.MatchRequirements(providerAttr))

	providerAttr = append(providerAttr, atypes.Provider{
		Owner:      "test",
		Auditor:    "auditor1",
		Attributes: group.Requirements.Attributes,
	})

	require.True(t, group.MatchRequirements(providerAttr))
}

func TestGroupPlacementRequirementsSignerAnyOf(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	group.Requirements.SignedBy.AnyOf = append(group.Requirements.SignedBy.AnyOf, "auditor1")

	providerAttr := []atypes.Provider{
		{
			Owner:      "test",
			Attributes: group.Requirements.Attributes,
		},
	}

	require.False(t, group.MatchRequirements(providerAttr))

	providerAttr = append(providerAttr, atypes.Provider{
		Owner:      "test",
		Auditor:    "auditor2",
		Attributes: group.Requirements.Attributes,
	})

	require.False(t, group.MatchRequirements(providerAttr))

	providerAttr = append(providerAttr, atypes.Provider{
		Owner:      "test",
		Auditor:    "auditor1",
		Attributes: group.Requirements.Attributes,
	})

	require.True(t, group.MatchRequirements(providerAttr))
}

func TestGroupPlacementRequirementsSignerAllOfAnyOf(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	group.Requirements.SignedBy.AllOf = append(group.Requirements.SignedBy.AllOf, "auditor1")
	group.Requirements.SignedBy.AllOf = append(group.Requirements.SignedBy.AllOf, "auditor2")

	group.Requirements.SignedBy.AnyOf = append(group.Requirements.SignedBy.AnyOf, "auditor3")
	group.Requirements.SignedBy.AnyOf = append(group.Requirements.SignedBy.AnyOf, "auditor4")

	providerAttr := []atypes.Provider{
		{
			Owner:      "test",
			Attributes: group.Requirements.Attributes,
		},
		{
			Owner:      "test",
			Auditor:    "auditor3",
			Attributes: group.Requirements.Attributes,
		},
		{
			Owner:      "test",
			Auditor:    "auditor4",
			Attributes: group.Requirements.Attributes,
		},
	}

	require.False(t, group.MatchRequirements(providerAttr))

	providerAttr = append(providerAttr, atypes.Provider{
		Owner:      "test",
		Auditor:    "auditor2",
		Attributes: group.Requirements.Attributes,
	})

	require.False(t, group.MatchRequirements(providerAttr))

	providerAttr = append(providerAttr, atypes.Provider{
		Owner:      "test",
		Auditor:    "auditor1",
		Attributes: group.Requirements.Attributes,
	})

	require.True(t, group.MatchRequirements(providerAttr))
}

func TestGroupSpec_MatchResourcesAttributes(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	group.Resources[0].Storage[0].Attributes = attr.Attributes{
		attr.Attribute{
			Key:   "persistent",
			Value: "true",
		},
		attr.Attribute{
			Key:   "class",
			Value: "default",
		},
	}

	provAttributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "default",
		},
		attr.Attribute{
			Key:   "capabilities/storage/1/persistent",
			Value: "true",
		},
	}

	prov2Attributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "default",
		},
	}

	prov3Attributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "beta2",
		},
	}

	match := group.MatchResourcesRequirements(provAttributes)
	require.True(t, match)
	match = group.MatchResourcesRequirements(prov2Attributes)
	require.False(t, match)
	match = group.MatchResourcesRequirements(prov3Attributes)
	require.False(t, match)
}

func TestGroupSpec_MatchGPUAttributes(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	group.Resources[0].GPU.Attributes = attr.Attributes{
		attr.Attribute{
			Key:   "vendor/nvidia/model/a100",
			Value: "true",
		},
	}

	provAttributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "default",
		},
		attr.Attribute{
			Key:   "capabilities/storage/1/persistent",
			Value: "true",
		},
		attr.Attribute{
			Key:   "capabilities/gpu/vendor/nvidia/model/a100",
			Value: "true",
		},
	}

	prov2Attributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "default",
		},
	}

	prov3Attributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "beta2",
		},
	}

	match := group.MatchResourcesRequirements(provAttributes)
	require.True(t, match)
	match = group.MatchResourcesRequirements(prov2Attributes)
	require.False(t, match)
	match = group.MatchResourcesRequirements(prov3Attributes)
	require.False(t, match)
}

func TestGroupSpec_MatchGPUAttributesWildcard(t *testing.T) {
	group := types.GroupSpec{
		Name:         "spec",
		Requirements: testutil.PlacementRequirements(t),
		Resources:    testutil.ResourcesList(t, 1),
	}

	group.Resources[0].GPU.Attributes = attr.Attributes{
		attr.Attribute{
			Key:   "vendor/nvidia/model/*",
			Value: "true",
		},
	}

	provAttributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "default",
		},
		attr.Attribute{
			Key:   "capabilities/storage/1/persistent",
			Value: "true",
		},
		attr.Attribute{
			Key:   "capabilities/gpu/vendor/nvidia/model/a100",
			Value: "true",
		},
	}

	prov2Attributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "default",
		},
	}

	prov3Attributes := attr.Attributes{
		attr.Attribute{
			Key:   "capabilities/storage/1/class",
			Value: "beta2",
		},
	}

	match := group.MatchResourcesRequirements(provAttributes)
	require.True(t, match)
	match = group.MatchResourcesRequirements(prov2Attributes)
	require.False(t, match)
	match = group.MatchResourcesRequirements(prov3Attributes)
	require.False(t, match)
}

func TestDepositDeploymentAuthorization_Accept(t *testing.T) {
	limit := sdk.NewInt64Coin(tutil.CoinDenom, 333)
	dda := v1.NewDepositAuthorization(limit)

	// Send the wrong type of message, expect an error
	var msg sdk.Msg
	response, err := dda.Accept(sdk.Context{}, msg)
	require.Error(t, err)
	require.Contains(t, err.Error(), "invalid type")
	require.Zero(t, response)

	// Try to deposit too much coin, expect an error
	msg = v1.NewMsgDepositDeployment(testutil.DeploymentID(t), limit.Add(sdk.NewInt64Coin(tutil.CoinDenom, 1)), testutil.AccAddress(t).String())
	response, err = dda.Accept(sdk.Context{}, msg)
	require.Error(t, err)
	require.Contains(t, err.Error(), "requested amount is more than spend limit")
	require.Zero(t, response)

	// Deposit 1 less than the limit, expect  an updated deposit
	msg = v1.NewMsgDepositDeployment(testutil.DeploymentID(t), limit.Sub(sdk.NewInt64Coin(tutil.CoinDenom, 1)), testutil.AccAddress(t).String())
	response, err = dda.Accept(sdk.Context{}, msg)
	require.NoError(t, err)
	require.True(t, response.Accept)
	require.False(t, response.Delete)

	ok := false
	dda, ok = response.Updated.(*v1.DepositAuthorization)
	require.True(t, ok)

	// Deposit the limit (now 1), expect that it is not to be deleted
	msg = v1.NewMsgDepositDeployment(testutil.DeploymentID(t), sdk.NewInt64Coin(tutil.CoinDenom, 1), testutil.AccAddress(t).String())
	response, err = dda.Accept(sdk.Context{}, msg)
	require.NoError(t, err)
	require.True(t, response.Accept)
	require.False(t, response.Delete)
}
