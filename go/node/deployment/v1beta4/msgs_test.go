package v1beta4_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	testutil "github.com/akash-network/akash-api/go/node/client/testutil/v1beta3"
	types "github.com/akash-network/akash-api/go/node/deployment/v1beta4"
	sdktestutil "github.com/akash-network/akash-api/go/testutil"
)

type testMsg struct {
	msg sdk.Msg
	err error
}

func TestVersionValidation(t *testing.T) {
	tests := []testMsg{
		{
			msg: &types.MsgCreateDeployment{
				ID:      testutil.DeploymentID(t),
				Version: testutil.DeploymentVersion(t),
				Groups: []types.GroupSpec{
					testutil.GroupSpec(t),
				},
				Depositor: testutil.AccAddress(t).String(),
				Deposit:   sdktestutil.AkashCoin(t, 0),
			},
			err: nil,
		},
		{
			msg: &types.MsgCreateDeployment{
				ID:      testutil.DeploymentID(t),
				Version: []byte(""),
				Groups: []types.GroupSpec{
					testutil.GroupSpec(t),
				},
				Depositor: testutil.AccAddress(t).String(),
				Deposit:   sdktestutil.AkashCoin(t, 0),
			},
			err: types.ErrEmptyVersion,
		},
		{
			msg: &types.MsgCreateDeployment{
				ID:      testutil.DeploymentID(t),
				Version: []byte("invalidversion"),
				Groups: []types.GroupSpec{
					testutil.GroupSpec(t),
				},
				Depositor: testutil.AccAddress(t).String(),
				Deposit:   sdktestutil.AkashCoin(t, 0),
			},
			err: types.ErrInvalidVersion,
		},
		{
			msg: &types.MsgUpdateDeployment{
				ID:      testutil.DeploymentID(t),
				Version: testutil.DeploymentVersion(t),
			},
			err: nil,
		},
		{
			msg: &types.MsgUpdateDeployment{
				ID:      testutil.DeploymentID(t),
				Version: []byte(""),
			},
			err: types.ErrEmptyVersion,
		},
		{
			msg: &types.MsgUpdateDeployment{
				ID:      testutil.DeploymentID(t),
				Version: []byte("invalidversion"),
			},
			err: types.ErrInvalidVersion,
		},
	}

	for _, test := range tests {
		require.Equal(t, test.err, test.msg.ValidateBasic())
	}
}
