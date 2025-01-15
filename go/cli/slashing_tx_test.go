package cli_test

import (
	"context"

	sdkmath "cosmossdk.io/math"
	"github.com/cosmos/gogoproto/proto"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"pkg.akt.dev/go/cli"
	clitestutil "pkg.akt.dev/go/cli/testutil"
)

func (s *SlashingCLITestSuite) TestNewUnjailTxCmd() {
	val := s.addr
	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"valid transaction",
			cli.TestFlags().
				WithFrom(val.String()).
				WithSkipConfirm().
				WithBroadcastModeSync().
				WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))),
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			cmd := cli.GetTxSlashingUnjailCmd()
			cctx := s.cctx

			out, err := clitestutil.ExecTestCLICmd(context.Background(), cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				s.Require().Equal(tc.expectedCode, txResp.Code, out.String())
			}
		})
	}
}
