package cli_test

import (
	"context"
	"fmt"
	"time"

	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/authz"

	"pkg.akt.dev/go/cli"
	cflags "pkg.akt.dev/go/cli/flags"
	clitestutil "pkg.akt.dev/go/cli/testutil"
)

func (s *AuthzCLITestSuite) TestQueryAuthorizations() {
	val := testutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	grantee := s.grantee[0]
	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()

	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(grantee.String(), "send").
			WithSpendLimit("100uakt").
			WithSkipConfirm().
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithExpiration(twoHours).
			WithSignMode("direct").
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdk.NewInt(10))))...,
	)
	s.Require().NoError(err)

	testCases := []struct {
		name      string
		args      []string
		expectErr bool
		expErrMsg string
	}{
		{
			"Error: Invalid grantee",
			[]string{
				val[0].Address.String(),
				"invalid grantee",
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			true,
			"decoding bech32 failed: invalid character in string: ' '",
		},
		{
			"Error: Invalid granter",
			[]string{
				"invalid granter",
				grantee.String(),
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			true,
			"decoding bech32 failed: invalid character in string: ' '",
		},
		{
			"Valid txn (json)",
			[]string{
				val[0].Address.String(),
				grantee.String(),
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			false,
			``,
		},
	}
	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.GetQueryAuthzGrantsCmd()
			resp, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
				s.Require().Contains(string(resp.Bytes()), tc.expErrMsg)
			} else {
				s.Require().NoError(err)
				var grants authz.QueryGrantsResponse
				err = s.cctx.Codec.UnmarshalJSON(resp.Bytes(), &grants)
				s.Require().NoError(err)
			}
		})
	}
}

func (s *AuthzCLITestSuite) TestQueryAuthorization() {
	val := testutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	grantee := s.grantee[0]
	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()

	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		grantee.String(),
		"send",
		fmt.Sprintf("--%s=100stake", cflags.FlagSpendLimit),
		fmt.Sprintf("--%s=true", cflags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", cflags.FlagFrom, val[0].Address),
		fmt.Sprintf("--%s=%s", cflags.FlagBroadcastMode, cflags.BroadcastSync),
		fmt.Sprintf("--%s=%d", cflags.FlagExpiration, twoHours),
		fmt.Sprintf("--%s=%s", cflags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdk.NewInt(10))).String()),
	)
	s.Require().NoError(err)

	testCases := []struct {
		name      string
		args      []string
		expectErr bool
	}{
		{
			"Error: Invalid grantee",
			[]string{
				val[0].Address.String(),
				"invalid grantee",
				typeMsgSend,
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			true,
		},
		{
			"Error: Invalid granter",
			[]string{
				"invalid granter",
				grantee.String(),
				typeMsgSend,
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			true,
		},
		{
			"Valid txn (json)",
			[]string{
				val[0].Address.String(),
				grantee.String(),
				typeMsgSend,
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			false,
		},
		{
			"Valid txn with allowed list (json)",
			[]string{
				val[0].Address.String(),
				s.grantee[3].String(),
				typeMsgSend,
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			false,
		},
	}
	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.GetQueryAuthzGrantsCmd()
			_, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}

func (s *AuthzCLITestSuite) TestQueryGranterGrants() {
	val := testutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	grantee := s.grantee[0]
	require := s.Require()

	testCases := []struct {
		name        string
		args        []string
		expectErr   bool
		expectedErr string
	}{
		{
			"invalid address",
			[]string{
				"invalid-address",
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			true,
			"decoding bech32 failed",
		},
		{
			"no authorization found",
			[]string{
				grantee.String(),
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			false,
			"",
		},
		{
			"valid case",
			[]string{
				val[0].Address.String(),
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			false,
			"",
		},
		{
			"valid case with pagination",
			[]string{
				val[0].Address.String(),
				"--limit=2",
				fmt.Sprintf("--%s=json", cflags.FlagOutput),
			},
			false,
			"",
		},
	}
	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.GetQueryAuthzGranterGrantsCmd()
			out, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, tc.args...)
			if tc.expectErr {
				require.Error(err)
				require.Contains(out.String(), tc.expectedErr)
			} else {
				require.NoError(err)
				var grants authz.QueryGranterGrantsResponse
				require.NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &grants))
			}
		})
	}
}
