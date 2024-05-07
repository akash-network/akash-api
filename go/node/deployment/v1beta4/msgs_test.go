package v1beta4_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	v1 "pkg.akt.io/go/node/deployment/v1"
	types "pkg.akt.io/go/node/deployment/v1beta4"
	tutil "pkg.akt.io/go/testutil"
	testutil "pkg.akt.io/go/testutil/v1beta3"
)

type testMsg struct {
	msg sdk.Msg
	err error
}

func TestVersionValidation(t *testing.T) {
	tests := []testMsg{
		{
			msg: &types.MsgCreateDeployment{
				ID:   tutil.DeploymentID(t),
				Hash: tutil.DeploymentVersion(t),
				Groups: types.GroupSpecs{
					tutil.GroupSpec(t),
				},
				Depositor: tutil.AccAddress(t).String(),
				Deposit:   tutil.AkashCoin(t, 0),
			},
			err: nil,
		},
		{
			msg: &types.MsgCreateDeployment{
				ID:   testutil.DeploymentID(t),
				Hash: []byte(""),
				Groups: []types.GroupSpec{
					testutil.GroupSpec(t),
				},
				Depositor: tutil.AccAddress(t).String(),
				Deposit:   tutil.AkashCoin(t, 0),
			},
			err: v1.ErrEmptyHash,
		},
		{
			msg: &types.MsgCreateDeployment{
				ID:   testutil.DeploymentID(t),
				Hash: []byte("invalidversion"),
				Groups: []types.GroupSpec{
					testutil.GroupSpec(t),
				},
				Depositor: tutil.AccAddress(t).String(),
				Deposit:   tutil.AkashCoin(t, 0),
			},
			err: v1.ErrInvalidHash,
		},
		{
			msg: &types.MsgUpdateDeployment{
				ID:   testutil.DeploymentID(t),
				Hash: testutil.DeploymentVersion(t),
			},
			err: nil,
		},
		{
			msg: &types.MsgUpdateDeployment{
				ID:   testutil.DeploymentID(t),
				Hash: []byte(""),
			},
			err: v1.ErrEmptyHash,
		},
		{
			msg: &types.MsgUpdateDeployment{
				ID:   testutil.DeploymentID(t),
				Hash: []byte("invalidversion"),
			},
			err: v1.ErrInvalidHash,
		},
	}

	for _, test := range tests {
		require.Equal(t, test.err, test.msg.ValidateBasic())
	}
}
