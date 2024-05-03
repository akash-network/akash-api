package cli_test

import (
	"context"
	"fmt"
	"time"

	sdkmath "cosmossdk.io/math"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdktestutil "github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authzclitestutil "github.com/cosmos/cosmos-sdk/x/authz/client/testutil"
	"github.com/cosmos/gogoproto/proto"

	"pkg.akt.dev/go/cli"
	cflags "pkg.akt.dev/go/cli/flags"
	clitestutil "pkg.akt.dev/go/cli/testutil"
)

func (s *AuthzCLITestSuite) createAccount(uid string) sdk.AccAddress {
	// Create new account in the keyring.
	k, _, err := s.cctx.Keyring.NewMnemonic(uid, keyring.English, sdk.FullFundraiserPath, keyring.DefaultBIP39Passphrase, hd.Secp256k1)
	s.Require().NoError(err)

	addr, err := k.GetAddress()
	s.Require().NoError(err)

	return addr
}

func (s *AuthzCLITestSuite) msgSendExec(grantee sdk.AccAddress) {
	val := s.addrs[0]

	// Send some funds to the new account.
	out, err := clitestutil.ExecSend(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				val.String(),
				grantee.String(),
				sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(200))).String(),
			).
			WithSkipConfirm().
			WithBroadcastModeSync().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))...)
	s.Require().NoError(err)
	s.Require().Contains(out.String(), `"code":0`)
}

func (s *AuthzCLITestSuite) TestCLITxGrantAuthorization() {
	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	grantee := s.grantee[0]

	twoHours := time.Now().Add(time.Minute * 120).Unix()
	pastHour := time.Now().Add(-time.Minute * 60).Unix()

	testCases := []struct {
		name      string
		args      []string
		expectErr bool
		expErrMsg string
	}{
		{
			"Invalid granter Address",
			cli.TestFlags().
				With(
					"grantee_addr",
					"send",
				).
				WithSpendLimit("100uakt").
				WithFrom("granter").
				WithGenerateOnly().
				WithExpiration(fmt.Sprintf("%d", twoHours)),
			true,
			"key not found",
		},
		{
			"Invalid grantee Address",
			cli.TestFlags().
				With(
					"grantee_addr",
					"send",
				).
				WithSpendLimit("100uakt").
				WithFrom(val[0].Address.String()).
				WithGenerateOnly().
				WithExpiration(fmt.Sprintf("%d", twoHours)),
			true,
			"invalid separator index",
		},
		{
			"Invalid expiration time",
			cli.TestFlags().
				With(
					grantee.String(),
					"send",
				).
				WithSpendLimit("100uakt").
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", pastHour)),
			true,
			"",
		},
		{
			"fail with error invalid msg-type",
			cli.TestFlags().
				With(
					grantee.String(),
					"generic",
				).
				WithMsgType("invalid-msg-type").
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithSkipConfirm().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithExpiration(fmt.Sprintf("%d", twoHours)),
			false,
			"",
		},
		{
			"invalid bond denom for tx delegate authorization allowed validators",
			cli.TestFlags().
				With(
					grantee.String(),
					"delegate",
				).
				WithSpendLimit("100xyz").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithAllowedValidators(sdk.ValAddress(s.addrs[0]).String()),
			true,
			"invalid denom",
		},
		{
			"invalid bond denom for tx delegate authorization deny validators",
			cli.TestFlags().
				With(
					grantee.String(),
					"delegate",
				).
				WithSpendLimit("100xyz").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithDenyValidators(sdk.ValAddress(s.addrs[0]).String()),
			true,
			"invalid denom",
		},
		{
			"invalid bond denom for tx undelegate authorization",
			cli.TestFlags().
				With(
					grantee.String(),
					"unbond",
				).
				WithSpendLimit("100xyz").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithAllowedValidators(sdk.ValAddress(s.addrs[0]).String()),
			true,
			"invalid denom",
		},
		{
			"invalid bond denom for tx redelegate authorization",
			cli.TestFlags().
				With(
					grantee.String(),
					"redelegate",
				).
				WithSpendLimit("100xyz").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithAllowedValidators(sdk.ValAddress(s.addrs[0]).String()),
			true,
			"invalid denom",
		},
		{
			"invalid decimal coin expression with more than single coin",
			cli.TestFlags().
				With(
					grantee.String(),
					"delegate",
				).
				WithSpendLimit("100uakt,20xyz").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithAllowedValidators(sdk.ValAddress(s.addrs[0]).String()),
			true,
			"invalid decimal coin expression",
		},
		{
			"Valid tx send authorization",
			cli.TestFlags().
				With(
					grantee.String(),
					"send",
				).
				WithSpendLimit("100uakt").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			false,
			"",
		},
		{
			"Valid tx send authorization with allow list",
			cli.TestFlags().
				With(
					grantee.String(),
					"send",
				).
				WithSpendLimit("100uakt").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithAllowList(s.grantee[1].String()),
			false,
			"",
		},
		{
			"Invalid tx send authorization with duplicate allow list",
			cli.TestFlags().
				With(
					grantee.String(),
					"send",
				).
				WithSpendLimit("100uakt").
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithAllowList(fmt.Sprintf("%s,%s", s.grantee[1], s.grantee[1])),
			true,
			"duplicate entry",
		},
		{
			"Valid tx generic authorization",
			cli.TestFlags().
				With(
					grantee.String(),
					"generic",
				).
				WithMsgType(typeMsgVote).
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			false,
			"",
		},
		{
			"fail when granter = grantee",
			cli.TestFlags().
				With(
					grantee.String(),
					"generic",
				).
				WithMsgType(typeMsgVote).
				WithSkipConfirm().
				WithFrom(grantee.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			true,
			"grantee and granter should be different",
		},
		{
			"Valid tx with amino",
			cli.TestFlags().
				With(
					grantee.String(),
					"generic",
				).
				WithMsgType(typeMsgVote).
				WithSkipConfirm().
				WithFrom(val[0].Address.String()).
				WithBroadcastModeSync().
				WithExpiration(fmt.Sprintf("%d", twoHours)).
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithSignMode(cflags.SignModeLegacyAminoJSON),
			false,
			"",
		},
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			out, err := authzclitestutil.CreateGrant(s.cctx,
				tc.args,
			)
			if tc.expectErr {
				s.Require().Error(err, out)
				s.Require().Contains(err.Error(), tc.expErrMsg)
			} else {
				var txResp sdk.TxResponse
				s.Require().NoError(err)
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &txResp), out.String())
			}
		})
	}
}

func (s *AuthzCLITestSuite) TestCmdRevokeAuthorizations() {
	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	grantee := s.grantee[0]
	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()

	// send-authorization
	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"send",
			).
			WithSpendLimit("100uakt").
			WithSkipConfirm().
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithExpiration(fmt.Sprintf("%d", twoHours)).
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))...)
	s.Require().NoError(err)

	// generic-authorization
	_, err = clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"generic",
			).
			WithMsgType(typeMsgVote).
			WithSkipConfirm().
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithExpiration(fmt.Sprintf("%d", twoHours)).
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))...)
	s.Require().NoError(err)

	// generic-authorization used for amino testing
	_, err = clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"generic",
			).
			WithMsgType(typeMsgSubmitProposal).
			WithSkipConfirm().
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithExpiration(fmt.Sprintf("%d", twoHours)).
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
			WithSignMode(cflags.SignModeLegacyAminoJSON)...)
	s.Require().NoError(err)
	testCases := []struct {
		name      string
		args      []string
		respType  proto.Message
		expectErr bool
	}{
		{
			"invalid grantee address",
			cli.TestFlags().
				With(
					"invalid grantee",
					typeMsgSend,
				).
				WithFrom(val[0].Address.String()).
				WithGenerateOnly(),
			nil,
			true,
		},
		{
			"invalid granter address",
			cli.TestFlags().
				With(
					grantee.String(),
					typeMsgSend,
				).
				WithFrom("granter").
				WithGenerateOnly(),
			nil,
			true,
		},
		{
			"Valid tx send authorization",
			cli.TestFlags().
				With(
					grantee.String(),
					typeMsgSend,
				).
				WithFrom(val[0].Address.String()).
				WithSkipConfirm().
				WithBroadcastModeSync().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			&sdk.TxResponse{},
			false,
		},
		{
			"Valid tx generic authorization",
			cli.TestFlags().
				With(
					grantee.String(),
					typeMsgVote,
				).
				WithFrom(val[0].Address.String()).
				WithSkipConfirm().
				WithBroadcastModeSync().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			&sdk.TxResponse{},
			false,
		},
		{
			"Valid tx with amino",
			cli.TestFlags().
				With(
					grantee.String(),
					typeMsgSubmitProposal,
				).
				WithFrom(val[0].Address.String()).
				WithSkipConfirm().
				WithBroadcastModeSync().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithSignMode(cflags.SignModeLegacyAminoJSON),
			&sdk.TxResponse{},
			false,
		},
	}
	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.GetTxAuthzRevokeAuthorizationCmd()

			out, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())
			}
		})
	}
}

func (s *AuthzCLITestSuite) TestExecAuthorizationWithExpiration() {
	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)

	grantee := s.grantee[0]
	tenSeconds := time.Now().Add(time.Second * time.Duration(10)).Unix()

	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"generic",
			).
			WithMsgType(typeMsgVote).
			WithSkipConfirm().
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithExpiration(fmt.Sprintf("%d", tenSeconds)).
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))...)
	s.Require().NoError(err)
	// msg vote
	voteTx := fmt.Sprintf(`{"body":{"messages":[{"@type":"/cosmos.gov.v1.MsgVote","proposal_id":"1","voter":"%s","option":"VOTE_OPTION_YES"}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}`, val[0].Address.String())
	execMsg := sdktestutil.WriteToNewTempFile(s.T(), voteTx)
	defer func() {
		_ = execMsg.Close()
	}()

	// waiting for authorization to expire
	time.Sleep(12 * time.Second)

	cmd := cli.GetTxAuthzExecAuthorizationCmd()

	out, err := clitestutil.ExecTestCLICmd(
		context.Background(),
		s.cctx,
		cmd,
		cli.TestFlags().
			With(
				execMsg.Name(),
			).
			WithFrom(grantee.String()).
			WithSkipConfirm().
			WithBroadcastModeSync().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))...)
	s.Require().NoError(err)
	var response sdk.TxResponse
	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
}

func (s *AuthzCLITestSuite) TestNewExecGenericAuthorized() {
	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
	grantee := s.grantee[0]
	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()

	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"generic",
			).
			WithMsgType(typeMsgVote).
			WithSkipConfirm().
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithExpiration(fmt.Sprintf("%d", twoHours)).
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))...)
	s.Require().NoError(err)

	// msg vote
	voteTx := fmt.Sprintf(`{"body":{"messages":[{"@type":"/cosmos.gov.v1.MsgVote","proposal_id":"1","voter":"%s","option":"VOTE_OPTION_YES"}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}`, val[0].Address.String())
	execMsg := sdktestutil.WriteToNewTempFile(s.T(), voteTx)
	defer func() {
		_ = execMsg.Close()
	}()

	testCases := []struct {
		name      string
		args      []string
		respType  proto.Message
		expectErr bool
	}{
		{
			"fail invalid grantee",
			cli.TestFlags().
				With(
					execMsg.Name(),
				).
				WithFrom("grantee").
				WithBroadcastModeSync().
				WithGenerateOnly(),
			nil,
			true,
		},
		{
			"fail invalid json path",
			cli.TestFlags().
				With(
					"/invalid/file.txt",
				).
				WithFrom(grantee.String()).
				WithBroadcastModeSync(),
			nil,
			true,
		},
		{
			"valid txn",
			cli.TestFlags().
				With(
					execMsg.Name(),
				).
				WithFrom(grantee.String()).
				WithBroadcastModeSync().
				WithSkipConfirm().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			&sdk.TxResponse{},
			false,
		},
		{
			"valid tx with amino",
			cli.TestFlags().
				With(
					execMsg.Name(),
				).
				WithFrom(grantee.String()).
				WithBroadcastModeSync().
				WithSkipConfirm().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
				WithSignMode(cflags.SignModeLegacyAminoJSON),
			&sdk.TxResponse{},
			false,
		},
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.GetTxAuthzExecAuthorizationCmd()

			out, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, tc.args...)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())
			}
		})
	}
}

func (s *AuthzCLITestSuite) TestNewExecGrantAuthorized() {
	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
	grantee := s.grantee[0]
	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()

	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"send",
			).
			WithSpendLimit("12uakt").
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithSkipConfirm().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
			WithExpiration(fmt.Sprintf("%d", twoHours))...)
	s.Require().NoError(err)

	tokens := sdk.NewCoins(
		sdk.NewCoin("testtoken", sdkmath.NewInt(12)),
	)

	normalGeneratedTx, err := clitestutil.ExecSend(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				val[0].Address.String(),
				grantee.String(),
				tokens.String(),
			).
			WithBroadcastModeSync().
			WithSkipConfirm().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
			WithGenerateOnly()...)
	s.Require().NoError(err)
	execMsg := sdktestutil.WriteToNewTempFile(s.T(), normalGeneratedTx.String())
	defer func() {
		_ = execMsg.Close()
	}()

	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectErrMsg string
	}{
		{
			"valid txn",
			cli.TestFlags().
				With(
					execMsg.Name(),
				).
				WithFrom(grantee.String()).
				WithBroadcastModeSync().
				WithSkipConfirm().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			false,
			"",
		},
		{
			"error over spent",
			cli.TestFlags().
				With(
					execMsg.Name(),
				).
				WithFrom(grantee.String()).
				WithBroadcastModeSync().
				WithSkipConfirm().
				WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))),
			false,
			"",
		},
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.GetTxAuthzExecAuthorizationCmd()
			cctx := s.cctx

			var response sdk.TxResponse
			out, err := clitestutil.ExecTestCLICmd(context.Background(), cctx, cmd, tc.args...)

			switch {
			case tc.expectErrMsg != "":
				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
				s.Require().Contains(response.RawLog, tc.expectErrMsg)

			case tc.expectErr:
				s.Require().Error(err)

			default:
				s.Require().NoError(err)
				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
			}
		})
	}
}

func (s *AuthzCLITestSuite) TestExecSendAuthzWithAllowList() {
	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
	grantee := s.grantee[3]

	allowedAddr := s.grantee[4]
	notAllowedAddr := s.grantee[5]
	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()

	_, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				grantee.String(),
				"send",
			).
			WithSpendLimit("100uakt").
			WithFrom(val[0].Address.String()).
			WithBroadcastModeSync().
			WithSkipConfirm().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
			WithExpiration(fmt.Sprintf("%d", twoHours)).
			WithAllowList(allowedAddr.String())...)
	s.Require().NoError(err)

	tokens := sdk.NewCoins(
		sdk.NewCoin("stake", sdkmath.NewInt(12)),
	)

	validGeneratedTx, err := clitestutil.ExecSend(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				val[0].Address.String(),
				allowedAddr.String(),
				tokens.String(),
			).
			WithBroadcastModeSync().
			WithSkipConfirm().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
			WithGenerateOnly()...)

	s.Require().NoError(err)
	execMsg := sdktestutil.WriteToNewTempFile(s.T(), validGeneratedTx.String())
	defer func() {
		_ = execMsg.Close()
	}()

	invalidGeneratedTx, err := clitestutil.ExecSend(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(
				val[0].Address.String(),
				notAllowedAddr.String(),
				tokens.String(),
			).
			WithBroadcastModeSync().
			WithSkipConfirm().
			WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10)))).
			WithGenerateOnly()...)
	s.Require().NoError(err)
	execMsg1 := sdktestutil.WriteToNewTempFile(s.T(), invalidGeneratedTx.String())
	defer func() {
		_ = execMsg1.Close()
	}()

	// test sending to allowed address
	args := cli.TestFlags().
		With(
			execMsg.Name(),
		).
		WithFrom(grantee.String()).
		WithBroadcastModeSync().
		WithSkipConfirm().
		WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))

	var response sdk.TxResponse

	cmd := cli.GetTxAuthzExecAuthorizationCmd()

	out, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, args...)
	s.Require().NoError(err)
	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())

	// test sending to not allowed address
	args = cli.TestFlags().
		With(
			execMsg1.Name(),
		).
		WithFrom(grantee.String()).
		WithBroadcastModeSync().
		WithSkipConfirm().
		WithFees(sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))))

	out, err = clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, args...)
	s.Require().NoError(err)
	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
}
