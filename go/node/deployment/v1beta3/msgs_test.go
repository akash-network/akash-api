package v1beta3_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	types "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	"github.com/akash-network/akash-api/go/testutil/v1beta3"
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
