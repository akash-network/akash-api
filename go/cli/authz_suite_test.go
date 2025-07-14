package cli_test

//
//import (
//	"context"
//	"fmt"
//	"io"
//	"time"
//
//	_ "cosmossdk.io/api/cosmos/authz/v1beta1"
//	"cosmossdk.io/core/address"
//	sdkmath "cosmossdk.io/math"
//	abci "github.com/cometbft/cometbft/abci/types"
//	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
//	"github.com/cosmos/gogoproto/proto"
//
//	"github.com/cosmos/cosmos-sdk/client"
//	"github.com/cosmos/cosmos-sdk/client/flags"
//	addresscodec "github.com/cosmos/cosmos-sdk/codec/address"
//	"github.com/cosmos/cosmos-sdk/crypto/hd"
//	"github.com/cosmos/cosmos-sdk/crypto/keyring"
//	sdktestutil "github.com/cosmos/cosmos-sdk/testutil"
//	sdk "github.com/cosmos/cosmos-sdk/types"
//	authzclitestutil "github.com/cosmos/cosmos-sdk/x/authz/client/testutil"
//	"github.com/cosmos/cosmos-sdk/x/bank"
//	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
//	"github.com/cosmos/cosmos-sdk/x/gov"
//	govcli "github.com/cosmos/cosmos-sdk/x/gov/client/cli"
//	govclitestutil "github.com/cosmos/cosmos-sdk/x/gov/client/testutil"
//	govv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
//	govv1beta1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"
//
//	"pkg.akt.dev/go/cli"
//	clitestutil "pkg.akt.dev/go/cli/testutil"
//	"pkg.akt.dev/go/testutil"
//)
//
//var (
//	typeMsgSend           = banktypes.SendAuthorization{}.MsgTypeURL()
//	typeMsgVote           = sdk.MsgTypeURL(&govv1.MsgVote{})
//	typeMsgSubmitProposal = sdk.MsgTypeURL(&govv1.MsgSubmitProposal{})
//)
//
//type AuthzCLITestSuite struct {
//	CLITestSuite
//
//	grantee []sdk.AccAddress
//	addrs   []sdk.AccAddress
//
//	ac address.Codec
//}
//
//func (s *AuthzCLITestSuite) SetupSuite() {
//	s.encCfg = sdkutil.MakeEncodingConfig(gov.AppModuleBasic{}, bank.AppModuleBasic{})
//	s.kr = keyring.NewInMemory(s.encCfg.Codec)
//	s.baseCtx = client.Context{}.
//		WithKeyring(s.kr).
//		WithTxConfig(s.encCfg.TxConfig).
//		WithCodec(s.encCfg.Codec).
//		WithClient(testutil.MockCometRPC{Client: rpcclientmock.Client{}}).
//		WithAccountRetriever(client.MockAccountRetriever{}).
//		WithOutput(io.Discard).
//		WithChainID("test-chain")
//
//	s.ac = addresscodec.NewBech32Codec("akash")
//
//	ctxGen := func() client.Context {
//		bz, _ := s.encCfg.Codec.Marshal(&sdk.TxResponse{})
//		c := testutil.NewMockCometRPC(abci.ResponseQuery{
//			Value: bz,
//		})
//		return s.baseCtx.WithClient(c)
//	}
//	s.cctx = ctxGen()
//
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//	s.grantee = make([]sdk.AccAddress, 6)
//
//	s.addrs = make([]sdk.AccAddress, 1)
//	s.addrs[0] = s.createAccount("validator address")
//
//	// Send some funds to the new account.
//	// Create new account in the keyring.
//	s.grantee[0] = s.createAccount("grantee1")
//	s.msgSendExec(s.grantee[0])
//
//	// create a proposal with deposit
//	_, err := govclitestutil.MsgSubmitLegacyProposal(s.cctx, val[0].Address.String(),
//		"Text Proposal 1", "Where is the title!?", govv1beta1.ProposalTypeText,
//		fmt.Sprintf("--%s=%s", govcli.FlagDeposit, sdk.NewCoin("uakt", govv1.DefaultMinDepositTokens).String()))
//	s.Require().NoError(err)
//
//	// Create new account in the keyring.
//	s.grantee[1] = s.createAccount("grantee2")
//	// Send some funds to the new account.
//	s.msgSendExec(s.grantee[1])
//
//	// grant send authorization to grantee2
//	out, err := clitestutil.ExecCreateGrant(
//		context.Background(),
//		s.cctx,
//		cli.TestFlags().With(
//			s.grantee[1].String(),
//			"send").
//			WithSpendLimit("100uakt").
//			WithFrom(val[0].Address.String()).
//			WithSkipConfirm().
//			WithBroadcastModeSync().
//			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))).
//			WithExpiration(fmt.Sprintf("%d", time.Now().Add(time.Minute*time.Duration(120)).Unix()))...,
//	)
//	s.Require().NoError(err)
//
//	var response sdk.TxResponse
//	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//
//	// Create new account in the keyring.
//	s.grantee[2] = s.createAccount("grantee3")
//
//	// grant send authorization to grantee3
//	_, err = clitestutil.ExecCreateGrant(
//		context.Background(),
//		s.cctx,
//		cli.TestFlags().With(
//			s.grantee[2].String(),
//			"send").
//			WithSpendLimit("100uakt").
//			WithFrom(val[0].Address.String()).
//			WithSkipConfirm().
//			WithBroadcastModeSync().
//			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))).
//			WithExpiration(fmt.Sprintf("%d", time.Now().Add(time.Minute*time.Duration(120)).Unix()))...,
//	)
//	s.Require().NoError(err)
//
//	// Create new accounts in the keyring.
//	s.grantee[3] = s.createAccount("grantee4")
//	s.msgSendExec(s.grantee[3])
//
//	s.grantee[4] = s.createAccount("grantee5")
//	s.grantee[5] = s.createAccount("grantee6")
//
//	// grant send authorization with allow list to grantee4
//	out, err = clitestutil.ExecCreateGrant(
//		context.Background(),
//		s.cctx,
//		cli.TestFlags().With(
//			s.grantee[2].String(),
//			"send").
//			WithSpendLimit("100uakt").
//			WithFrom(val[0].Address.String()).
//			WithSkipConfirm().
//			WithBroadcastModeSync().
//			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))).
//			WithAllowList(s.grantee[4].String()).
//			WithExpiration(fmt.Sprintf("%d", time.Now().Add(time.Minute*time.Duration(120)).Unix()))...,
//	)
//	s.Require().NoError(err)
//	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//}
//
//func (s *AuthzCLITestSuite) createAccount(uid string) sdk.AccAddress {
//	// Create new account in the keyring.
//	k, _, err := s.cctx.Keyring.NewMnemonic(uid, keyring.English, sdk.FullFundraiserPath, keyring.DefaultBIP39Passphrase, hd.Secp256k1)
//	s.Require().NoError(err)
//
//	addr, err := k.GetAddress()
//	s.Require().NoError(err)
//
//	return addr
//}
//
//func (s *AuthzCLITestSuite) msgSendExec(grantee sdk.AccAddress) {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//	// Send some funds to the new account.
//	out, err := clitestutil.ExecSend(
//		context.Background(),
//		s.cctx,
//		cli.TestFlags().
//			With(
//				grantee.String(),
//				val[0].Address.String(),
//				sdk.NewCoins(
//					sdk.NewCoin("uakt", sdkmath.NewInt(200)),
//				).String(),
//			).
//			WithSkipConfirm().
//			WithBroadcastModeSync().
//			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))))...,
//	)
//	s.Require().NoError(err)
//	s.Require().Contains(out.String(), `"code":0`)
//}
//
//func (s *AuthzCLITestSuite) TestCLITxGrantAuthorization() {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//
//	grantee := s.grantee[0]
//
//	twoHours := time.Now().Add(time.Minute * 120).Unix()
//	pastHour := time.Now().Add(-time.Minute * 60).Unix()
//
//	testCases := []struct {
//		name      string
//		args      []string
//		expectErr bool
//		expErrMsg string
//	}{
//		{
//			"Invalid granter Address",
//			[]string{
//				"grantee_addr",
//				"send",
//				fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, "granter"),
//				fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			},
//			true,
//			"key not found",
//		},
//		{
//			"Invalid grantee Address",
//			[]string{
//				"grantee_addr",
//				"send",
//				fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			},
//			true,
//			"invalid separator index",
//		},
//		{
//			"Invalid spend limit",
//			[]string{
//				grantee.String(),
//				"send",
//				fmt.Sprintf("--%s=0stake", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			},
//			true,
//			"spend-limit should be greater than zero",
//		},
//		{
//			"Invalid expiration time",
//			[]string{
//				grantee.String(),
//				"send",
//				fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=true", flags.FlagBroadcastMode),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, pastHour),
//			},
//			true,
//			"",
//		},
//		{
//			"fail with error invalid msg-type",
//			[]string{
//				grantee.String(),
//				"generic",
//				fmt.Sprintf("--%s=invalid-msg-type", cli.FlagMsgType),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			},
//			false,
//			"",
//		},
//		{
//			"invalid bond denom for tx delegate authorization allowed validators",
//			[]string{
//				grantee.String(),
//				"delegate",
//				fmt.Sprintf("--%s=100xyz", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=%s", cli.FlagAllowedValidators, sdk.ValAddress(s.addrs[0]).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			true,
//			"invalid denom",
//		},
//		{
//			"invalid bond denom for tx delegate authorization deny validators",
//			[]string{
//				grantee.String(),
//				"delegate",
//				fmt.Sprintf("--%s=100xyz", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=%s", cli.FlagDenyValidators, sdk.ValAddress(s.addrs[0]).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			true,
//			"invalid denom",
//		},
//		{
//			"invalid bond denom for tx undelegate authorization",
//			[]string{
//				grantee.String(),
//				"unbond",
//				fmt.Sprintf("--%s=100xyz", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=%s", cli.FlagAllowedValidators, sdk.ValAddress(s.addrs[0]).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			true,
//			"invalid denom",
//		},
//		{
//			"invalid bond denom for tx redelegate authorization",
//			[]string{
//				grantee.String(),
//				"redelegate",
//				fmt.Sprintf("--%s=100xyz", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=%s", cli.FlagAllowedValidators, sdk.ValAddress(s.addrs[0]).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			true,
//			"invalid denom",
//		},
//		{
//			"invalid decimal coin expression with more than single coin",
//			[]string{
//				grantee.String(),
//				"delegate",
//				fmt.Sprintf("--%s=100uakt,20xyz", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=%s", cli.FlagAllowedValidators, sdk.ValAddress(s.addrs[0]).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			true,
//			"invalid decimal coin expression",
//		},
//		{
//			"invalid authorization type",
//			[]string{
//				grantee.String(),
//				"invalid authz type",
//			},
//			true,
//			"invalid authorization type",
//		},
//		{
//			"Valid tx send authorization",
//			[]string{
//				grantee.String(),
//				"send",
//				fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			false,
//			"",
//		},
//		{
//			"Valid tx send authorization with allow list",
//			[]string{
//				grantee.String(),
//				"send",
//				fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=%s", cli.FlagAllowList, s.grantee[1]),
//			},
//			false,
//			"",
//		},
//		{
//			"Invalid tx send authorization with duplicate allow list",
//			[]string{
//				grantee.String(),
//				"send",
//				fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=%s", cli.FlagAllowList, fmt.Sprintf("%s,%s", s.grantee[1], s.grantee[1])),
//			},
//			true,
//			"duplicate address",
//		},
//		{
//			"Valid tx generic authorization",
//			[]string{
//				grantee.String(),
//				"generic",
//				fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgVote),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			false,
//			"",
//		},
//		{
//			"fail when granter = grantee",
//			[]string{
//				grantee.String(),
//				"generic",
//				fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgVote),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			true,
//			"grantee and granter should be different",
//		},
//		{
//			"Valid tx with amino",
//			[]string{
//				grantee.String(),
//				"generic",
//				fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgVote),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagSignMode, flags.SignModeLegacyAminoJSON),
//			},
//			false,
//			"",
//		},
//	}
//
//	for _, tc := range testCases {
//		s.Run(tc.name, func() {
//			out, err := authzclitestutil.CreateGrant(s.cctx,
//				tc.args,
//			)
//			if tc.expectErr {
//				s.Require().Error(err, out)
//				s.Require().Contains(err.Error(), tc.expErrMsg)
//			} else {
//				var txResp sdk.TxResponse
//				s.Require().NoError(err)
//				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &txResp), out.String())
//			}
//		})
//	}
//}
//
//func (s *AuthzCLITestSuite) TestCmdRevokeAuthorizations() {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//
//	grantee := s.grantee[0]
//	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()
//
//	// send-authorization
//	_, err := authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"send",
//			fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		},
//	)
//	s.Require().NoError(err)
//
//	// generic-authorization
//	_, err = authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"generic",
//			fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgVote),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		},
//	)
//	s.Require().NoError(err)
//
//	// generic-authorization used for amino testing
//	_, err = authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"generic",
//			fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgSubmitProposal),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			fmt.Sprintf("--%s=%s", flags.FlagSignMode, flags.SignModeLegacyAminoJSON),
//		},
//	)
//	s.Require().NoError(err)
//	testCases := []struct {
//		name      string
//		args      []string
//		respType  proto.Message
//		expectErr bool
//	}{
//		{
//			"invalid grantee address",
//			[]string{
//				"invalid grantee",
//				typeMsgSend,
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//			},
//			nil,
//			true,
//		},
//		{
//			"invalid granter address",
//			[]string{
//				grantee.String(),
//				typeMsgSend,
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, "granter"),
//				fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//			},
//			nil,
//			true,
//		},
//		{
//			"Valid tx send authorization",
//			[]string{
//				grantee.String(),
//				typeMsgSend,
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			&sdk.TxResponse{},
//			false,
//		},
//		{
//			"Valid tx generic authorization",
//			[]string{
//				grantee.String(),
//				typeMsgVote,
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			},
//			&sdk.TxResponse{},
//			false,
//		},
//		{
//			"Valid tx with amino",
//			[]string{
//				grantee.String(),
//				typeMsgSubmitProposal,
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=%s", flags.FlagSignMode, flags.SignModeLegacyAminoJSON),
//			},
//			&sdk.TxResponse{},
//			false,
//		},
//	}
//	for _, tc := range testCases {
//		s.Run(tc.name, func() {
//			cmd := cli.NewCmdRevokeAuthorization(addresscodec.NewBech32Codec("akash"))
//
//			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
//			if tc.expectErr {
//				s.Require().Error(err)
//			} else {
//				s.Require().NoError(err)
//				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())
//			}
//		})
//	}
//}
//
//func (s *AuthzCLITestSuite) TestExecAuthorizationWithExpiration() {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//
//	grantee := s.grantee[0]
//	tenSeconds := time.Now().Add(time.Second * time.Duration(10)).Unix()
//
//	_, err := authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"generic",
//			fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgVote),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, tenSeconds),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		},
//	)
//	s.Require().NoError(err)
//	// msg vote
//	voteTx := fmt.Sprintf(`{"body":{"messages":[{"@type":"/cosmos.gov.v1.MsgVote","proposal_id":"1","voter":"%s","option":"VOTE_OPTION_YES"}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}`, val[0].Address.String())
//	execMsg := sdktestutil.WriteToNewTempFile(s.T(), voteTx)
//	defer execMsg.Close()
//
//	// waiting for authorization to expire
//	time.Sleep(12 * time.Second)
//
//	cmd := cli.NewCmdExecAuthorization()
//
//	out, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, execMsg.Name(),
//		fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//	)
//	s.Require().NoError(err)
//	var response sdk.TxResponse
//	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//}
//
//func (s *AuthzCLITestSuite) TestNewExecGenericAuthorized() {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//	grantee := s.grantee[0]
//	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()
//
//	_, err := authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"generic",
//			fmt.Sprintf("--%s=%s", cli.FlagMsgType, typeMsgVote),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		},
//	)
//	s.Require().NoError(err)
//
//	// msg vote
//	voteTx := fmt.Sprintf(`{"body":{"messages":[{"@type":"/cosmos.gov.v1.MsgVote","proposal_id":"1","voter":"%s","option":"VOTE_OPTION_YES"}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}`, val[0].Address.String())
//	execMsg := sdktestutil.WriteToNewTempFile(s.T(), voteTx)
//	defer execMsg.Close()
//
//	testCases := []struct {
//		name      string
//		args      []string
//		respType  proto.Message
//		expectErr bool
//	}{
//		{
//			"fail invalid grantee",
//			[]string{
//				execMsg.Name(),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, "grantee"),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//			},
//			nil,
//			true,
//		},
//		{
//			"fail invalid json path",
//			[]string{
//				"/invalid/file.txt",
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			},
//			nil,
//			true,
//		},
//		{
//			"valid txn",
//			[]string{
//				execMsg.Name(),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			},
//			&sdk.TxResponse{},
//			false,
//		},
//		{
//			"valid tx with amino",
//			[]string{
//				execMsg.Name(),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//				fmt.Sprintf("--%s=%s", flags.FlagSignMode, flags.SignModeLegacyAminoJSON),
//			},
//			&sdk.TxResponse{},
//			false,
//		},
//	}
//
//	for _, tc := range testCases {
//		s.Run(tc.name, func() {
//			cmd := cli.NewCmdExecAuthorization()
//
//			out, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cmd, tc.args...)
//			if tc.expectErr {
//				s.Require().Error(err)
//			} else {
//				s.Require().NoError(err)
//				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())
//			}
//		})
//	}
//}
//
//func (s *AuthzCLITestSuite) TestNewExecGrantAuthorized() {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//	grantee := s.grantee[0]
//	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()
//
//	_, err := authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"send",
//			fmt.Sprintf("--%s=12testtoken", cli.FlagSpendLimit),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		},
//	)
//	s.Require().NoError(err)
//
//	tokens := sdk.NewCoins(
//		sdk.NewCoin("testtoken", sdkmath.NewInt(12)),
//	)
//	normalGeneratedTx, err := clitestutil.MsgSendExec(
//		s.cctx,
//		val[0].Address,
//		grantee,
//		tokens,
//		s.ac,
//		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//	)
//	s.Require().NoError(err)
//	execMsg := sdktestutil.WriteToNewTempFile(s.T(), normalGeneratedTx.String())
//	defer execMsg.Close()
//
//	testCases := []struct {
//		name         string
//		args         []string
//		expectErr    bool
//		expectErrMsg string
//	}{
//		{
//			"valid txn",
//			[]string{
//				execMsg.Name(),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			},
//			false,
//			"",
//		},
//		{
//			"error over spent",
//			[]string{
//				execMsg.Name(),
//				fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			},
//			false,
//			"",
//		},
//	}
//
//	for _, tc := range testCases {
//		s.Run(tc.name, func() {
//			cmd := cli.NewCmdExecAuthorization()
//			cctx := s.cctx
//
//			var response sdk.TxResponse
//			out, err := clitestutil.ExecTestCLICmd(cctx, cmd, tc.args)
//			switch {
//			case tc.expectErrMsg != "":
//				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//				s.Require().Contains(response.RawLog, tc.expectErrMsg)
//
//			case tc.expectErr:
//				s.Require().Error(err)
//
//			default:
//				s.Require().NoError(err)
//				s.Require().NoError(cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//			}
//		})
//	}
//}
//
//func (s *AuthzCLITestSuite) TestExecSendAuthzWithAllowList() {
//	val := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 1)
//	grantee := s.grantee[3]
//
//	allowedAddr := s.grantee[4]
//	notAllowedAddr := s.grantee[5]
//	twoHours := time.Now().Add(time.Minute * time.Duration(120)).Unix()
//
//	_, err := authzclitestutil.CreateGrant(s.cctx,
//		[]string{
//			grantee.String(),
//			"send",
//			fmt.Sprintf("--%s=100uakt", cli.FlagSpendLimit),
//			fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//			fmt.Sprintf("--%s=%s", flags.FlagFrom, val[0].Address.String()),
//			fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//			fmt.Sprintf("--%s=%d", cli.FlagExpiration, twoHours),
//			fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//			fmt.Sprintf("--%s=%s", cli.FlagAllowList, allowedAddr),
//		},
//	)
//	s.Require().NoError(err)
//
//	tokens := sdk.NewCoins(
//		sdk.NewCoin("uakt", sdkmath.NewInt(12)),
//	)
//
//	validGeneratedTx, err := clitestutil.MsgSendExec(
//		s.cctx,
//		val[0].Address,
//		allowedAddr,
//		tokens,
//		s.ac,
//		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//	)
//	s.Require().NoError(err)
//	execMsg := sdktestutil.WriteToNewTempFile(s.T(), validGeneratedTx.String())
//	defer execMsg.Close()
//
//	invalidGeneratedTx, err := clitestutil.MsgSendExec(
//		s.cctx,
//		val[0].Address,
//		notAllowedAddr,
//		tokens,
//		s.ac,
//		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		fmt.Sprintf("--%s=true", flags.FlagGenerateOnly),
//	)
//	s.Require().NoError(err)
//	execMsg1 := sdktestutil.WriteToNewTempFile(s.T(), invalidGeneratedTx.String())
//	defer execMsg1.Close()
//
//	// test sending to allowed address
//	args := []string{
//		execMsg.Name(),
//		fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//	}
//	var response sdk.TxResponse
//	cmd := cli.NewCmdExecAuthorization()
//	out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, args)
//	s.Require().NoError(err)
//	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//
//	// test sending to not allowed address
//	args = []string{
//		execMsg1.Name(),
//		fmt.Sprintf("--%s=%s", flags.FlagFrom, grantee.String()),
//		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
//		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(10))).String()),
//		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
//	}
//	out, err = clitestutil.ExecTestCLICmd(s.cctx, cmd, args)
//	s.Require().NoError(err)
//	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
//}
