package cli_test

import (
	"context"

	sdkmath "cosmossdk.io/math"
	"github.com/cosmos/cosmos-sdk/client"
	addresscodec "github.com/cosmos/cosmos-sdk/codec/address"
	sdktestutil "github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"pkg.akt.dev/go/cli"
	clitestutil "pkg.akt.dev/go/cli/testutil"
)

func (s *BankCLITestSuite) TestSendTxCmd() {
	accounts := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	commonArgs := cli.TestFlags().
		WithBroadcastModeSync().
		WithSkipConfirm().
		WithFees(sdk.NewCoins(sdk.NewCoin("photon", sdkmath.NewInt(10)))).
		WithChainID("test-chain")

	testCases := []struct {
		name      string
		ctxGen    func() client.Context
		args      []string
		expectErr bool
	}{
		{
			"valid transaction",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					accounts[0].Address.String(),
					accounts[0].Address.String(),
					sdk.NewCoins(
						sdk.NewCoin("uakt", sdkmath.NewInt(10)),
						sdk.NewCoin("photon", sdkmath.NewInt(40)),
					).String()).
				Append(commonArgs),
			false,
		},
		{
			"invalid to Address",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					accounts[0].Address.String(),
					sdk.AccAddress{}.String(),
					sdk.NewCoins(
						sdk.NewCoin("uakt", sdkmath.NewInt(10)),
						sdk.NewCoin("photon", sdkmath.NewInt(40)),
					).String()).
				Append(commonArgs),
			true,
		},
		{
			"invalid coins",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					accounts[0].Address.String(),
					accounts[0].Address.String(),
				).
				Append(commonArgs),
			true,
		},
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cctx := tc.ctxGen()

			cmd := cli.GetTxBankSendTxCmd(addresscodec.NewBech32Codec("akash"))
			out, err := clitestutil.ExecTestCLICmd(context.Background(), cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				var response sdk.TxResponse
				s.Require().NoError(err)
				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
			}
		})
	}
}

func (s *BankCLITestSuite) TestMultiSendTxCmd() {
	accounts := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 3)

	commonArgs := cli.TestFlags().
		WithBroadcastModeSync().
		WithSkipConfirm().
		WithFees(sdk.NewCoins(sdk.NewCoin("photon", sdkmath.NewInt(10)))).
		WithChainID("test-chain")

	testCases := []struct {
		name      string
		ctxGen    func() client.Context
		args      []string
		expectErr bool
	}{
		{
			"valid transaction",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					accounts[0].Address.String(),
					accounts[1].Address.String(),
					accounts[2].Address.String(),
					sdk.NewCoins(
						sdk.NewCoin("uakt", sdkmath.NewInt(10)),
						sdk.NewCoin("photon", sdkmath.NewInt(40))).String()).
				Append(commonArgs),
			false,
		},
		{
			"invalid from Address",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					"foo",
					accounts[1].Address.String(),
					accounts[2].Address.String(),
					sdk.NewCoins(
						sdk.NewCoin("uakt", sdkmath.NewInt(10)),
						sdk.NewCoin("photon", sdkmath.NewInt(40))).String()).
				Append(commonArgs),

			true,
		},
		{
			"invalid recipients",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					accounts[0].Address.String(),
					accounts[1].Address.String(),
					"bar",
					sdk.NewCoins(
						sdk.NewCoin("uakt", sdkmath.NewInt(10)),
						sdk.NewCoin("photon", sdkmath.NewInt(40))).String()).
				Append(commonArgs),
			true,
		},
		{
			"invalid amount",
			func() client.Context {
				return s.baseCtx
			},
			cli.TestFlags().
				With(
					accounts[0].Address.String(),
					accounts[1].Address.String(),
					accounts[2].Address.String()).
				Append(commonArgs),
			true,
		},
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cctx := tc.ctxGen()

			cmd := cli.GetTxBankMultiSendTxCmd(addresscodec.NewBech32Codec("akash"))
			out, err := clitestutil.ExecTestCLICmd(context.Background(), cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				var response sdk.TxResponse
				s.Require().NoError(err)
				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
			}
		})
	}
}
