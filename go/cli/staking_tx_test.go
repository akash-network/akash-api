package cli_test

import (
	"bytes"
	"fmt"
	"io"

	sdkmath "cosmossdk.io/math"
	abci "github.com/cometbft/cometbft/abci/types"
	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	simtestutil "github.com/cosmos/cosmos-sdk/testutil/sims"
	sdk "github.com/cosmos/cosmos-sdk/types"
	testutilmod "github.com/cosmos/cosmos-sdk/types/module/testutil"
	"github.com/cosmos/cosmos-sdk/x/staking"
	"github.com/cosmos/gogoproto/proto"
	"github.com/spf13/pflag"
	"github.com/stretchr/testify/require"

	"pkg.akt.dev/go/cli"
	cflags "pkg.akt.dev/go/cli/flags"
)

var PKs = simtestutil.CreateTestPubKeys(500)

type StakingCLITestSuite struct {
	CLITestSuite

	addrs []sdk.AccAddress
}

func (s *StakingCLITestSuite) SetupSuite() {
	s.encCfg = testutilmod.MakeTestEncodingConfig(staking.AppModuleBasic{})
	s.kr = keyring.NewInMemory(s.encCfg.Codec)
	s.baseCtx = client.Context{}.
		WithKeyring(s.kr).
		WithTxConfig(s.encCfg.TxConfig).
		WithCodec(s.encCfg.Codec).
		WithLegacyAmino(s.encCfg.Amino).
		WithClient(clitestutil.MockTendermintRPC{Client: rpcclientmock.Client{}}).
		WithAccountRetriever(client.MockAccountRetriever{}).
		WithOutput(io.Discard).
		WithChainID("test-chain").
		WithSignModeStr(cflags.SignModeDirect)

	var outBuf bytes.Buffer
	ctxGen := func() client.Context {
		bz, _ := s.encCfg.Codec.Marshal(&sdk.TxResponse{})
		c := clitestutil.NewMockTendermintRPC(abci.ResponseQuery{
			Value: bz,
		})
		return s.baseCtx.WithClient(c)
	}
	s.cctx = ctxGen().WithOutput(&outBuf)

	s.addrs = make([]sdk.AccAddress, 0)
	for i := 0; i < 3; i++ {
		k, _, err := s.cctx.Keyring.NewMnemonic("NewValidator", keyring.English, sdk.FullFundraiserPath, keyring.DefaultBIP39Passphrase, hd.Secp256k1)
		s.Require().NoError(err)

		pub, err := k.GetPubKey()
		s.Require().NoError(err)

		newAddr := sdk.AccAddress(pub.Address())
		s.addrs = append(s.addrs, newAddr)
	}
}

func (s *StakingCLITestSuite) TestPrepareConfigForTxCreateValidator() {
	chainID := "chainID"
	ip := "1.1.1.1"
	nodeID := "nodeID"
	privKey := ed25519.GenPrivKey()
	valPubKey := privKey.PubKey()
	moniker := "DefaultMoniker"
	mkTxValCfg := func(amount, commission, commissionMax, commissionMaxChange string) cli.TxCreateValidatorConfig {
		return cli.TxCreateValidatorConfig{
			IP:                      ip,
			ChainID:                 chainID,
			NodeID:                  nodeID,
			P2PPort:                 26656,
			PubKey:                  valPubKey,
			Moniker:                 moniker,
			Amount:                  amount,
			CommissionRate:          commission,
			CommissionMaxRate:       commissionMax,
			CommissionMaxChangeRate: commissionMaxChange,
		}
	}

	tests := []struct {
		name        string
		fsModify    func(fs *pflag.FlagSet)
		expectedCfg cli.TxCreateValidatorConfig
	}{
		{
			name:        "all defaults",
			fsModify:    func(fs *pflag.FlagSet) {},
			expectedCfg: mkTxValCfg(cli.DefaultTokens.String()+sdk.DefaultBondDenom, "0.1", "0.2", "0.01"),
		},
		{
			name: "Custom amount",
			fsModify: func(fs *pflag.FlagSet) {
				err := fs.Set(cflags.FlagAmount, "2000stake")
				if err != nil {
					panic(err)
				}
			},
			expectedCfg: mkTxValCfg("2000stake", "0.1", "0.2", "0.01"),
		},
		{
			name: "Custom commission rate",
			fsModify: func(fs *pflag.FlagSet) {
				err := fs.Set(cflags.FlagCommissionRate, "0.54")
				if err != nil {
					panic(err)
				}
			},
			expectedCfg: mkTxValCfg(cli.DefaultTokens.String()+sdk.DefaultBondDenom, "0.54", "0.2", "0.01"),
		},
		{
			name: "Custom commission max rate",
			fsModify: func(fs *pflag.FlagSet) {
				err := fs.Set(cflags.FlagCommissionMaxRate, "0.89")
				if err != nil {
					panic(err)
				}
			},
			expectedCfg: mkTxValCfg(cli.DefaultTokens.String()+sdk.DefaultBondDenom, "0.1", "0.89", "0.01"),
		},
		{
			name: "Custom commission max change rate",
			fsModify: func(fs *pflag.FlagSet) {
				err := fs.Set(cflags.FlagCommissionMaxChangeRate, "0.55")
				if err != nil {
					panic(err)
				}
			},
			expectedCfg: mkTxValCfg(cli.DefaultTokens.String()+sdk.DefaultBondDenom, "0.1", "0.2", "0.55"),
		},
	}

	for _, tc := range tests {
		tc := tc
		s.Run(tc.name, func() {
			fs, _ := cli.CreateValidatorMsgFlagSet(ip)
			fs.String(flags.FlagName, "", "name of private key with which to sign the gentx")

			tc.fsModify(fs)

			cvCfg, err := cli.PrepareConfigForTxCreateValidator(fs, moniker, nodeID, chainID, valPubKey)
			require.NoError(s.T(), err)

			require.Equal(s.T(), tc.expectedCfg, cvCfg)
		})
	}
}

func (s *StakingCLITestSuite) TestNewCreateValidatorCmd() {
	args := cli.TestFlags().
		WithSkipConfirm().
		WithBroadcastModeSync().
		WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))))

	consPrivKey := ed25519.GenPrivKey()
	consPubKeyBz, err := s.encCfg.Codec.MarshalInterfaceJSON(consPrivKey.PubKey())
	require.NoError(s.T(), err)
	require.NotNil(s.T(), consPubKeyBz)

	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"invalid transaction (missing amount)",
			cli.TestFlags().
				WithIdentity("AFAF00C4").
				WithWebsite("https://newvalidator.io").
				WithSecurityContact("contact@newvalidator.io").
				WithDetails("'Hey, I am a new validator. Please delegate!'").
				WithCommissionRate("0.5").
				WithCommissionMaxRate("1.0").
				WithCommissionMaxChangeRate("0.1").
				WithFrom(s.addrs[0].String()).
				Append(args),
			true, 0, nil,
		},
		{
			"invalid transaction (missing pubkey)",
			cli.TestFlags().
				WithAmount("100uakt").
				WithIdentity("AFAF00C4").
				WithWebsite("https://newvalidator.io").
				WithSecurityContact("contact@newvalidator.io").
				WithDetails("'Hey, I am a new validator. Please delegate!'").
				WithCommissionRate("0.5").
				WithCommissionMaxRate("1.0").
				WithCommissionMaxChangeRate("0.1").
				WithFrom(s.addrs[0].String()).
				Append(args),
			true, 0, nil,
		},
		{
			"invalid transaction (missing moniker)",
			cli.TestFlags().
				WithPubkey(string(consPubKeyBz)).
				WithAmount("100uakt").
				WithIdentity("AFAF00C4").
				WithWebsite("https://newvalidator.io").
				WithSecurityContact("contact@newvalidator.io").
				WithDetails("'Hey, I am a new validator. Please delegate!'").
				WithCommissionRate("0.5").
				WithCommissionMaxRate("1.0").
				WithCommissionMaxChangeRate("0.1").
				WithFrom(s.addrs[0].String()).
				Append(args),
			true, 0, nil,
		},
		{
			"valid transaction",
			cli.TestFlags().
				WithPubkey(string(consPubKeyBz)).
				WithAmount("100uakt").
				WithMoniker("NewValidator").
				WithIdentity("AFAF00C4").
				WithWebsite("https://newvalidator.io").
				WithSecurityContact("contact@newvalidator.io").
				WithDetails("'Hey, I am a new validator. Please delegate!'").
				WithCommissionRate("0.5").
				WithCommissionMaxRate("1.0").
				WithCommissionMaxChangeRate("0.1").
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			cmd := cli.GetTxStakingCreateValidatorCmd()
			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
			if tc.expectErr {
				require.Error(s.T(), err)
			} else {
				require.NoError(s.T(), err, "test: %s\noutput: %s", tc.name, out.String())
				err = s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType)
				require.NoError(s.T(), err, out.String(), "test: %s, output\n:", tc.name, out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				require.Equal(s.T(), tc.expectedCode, txResp.Code,
					"test: %s, output\n:", tc.name, out.String())
			}
		})
	}
}

func (s *StakingCLITestSuite) TestNewEditValidatorCmd() {
	details := "bio"
	identity := "test identity"
	securityContact := "test contact"
	website := "https://test.com"

	args := cli.TestFlags().
		WithSkipConfirm().
		WithBroadcastModeSync().
		WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))))

	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"with no edit flag (since all are optional)",
			cli.TestFlags().
				WithFrom("with wrong from address").
				Append(args),
			true, 0, nil,
		},
		{
			"with no edit flag (since all are optional)",
			cli.TestFlags().
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
		{
			"edit validator details",
			cli.TestFlags().
				WithDetails(details).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
		{
			"edit validator identity",
			cli.TestFlags().
				WithIdentity(identity).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
		{
			"edit validator security-contact",
			cli.TestFlags().
				WithSecurityContact(securityContact).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
		{
			"edit validator website",
			cli.TestFlags().
				WithWebsite(website).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
		{
			"with all edit flags",
			cli.TestFlags().
				WithDetails(details).
				WithIdentity(identity).
				WithSecurityContact(securityContact).
				WithWebsite(website).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			cmd := cli.GetTxStakingEditValidatorCmd()

			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err, out.String())
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				s.Require().Equal(tc.expectedCode, txResp.Code, out.String())
			}
		})
	}
}

func (s *StakingCLITestSuite) TestNewDelegateCmd() {
	args := cli.TestFlags().
		WithSkipConfirm().
		WithBroadcastModeSync().
		WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))))

	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"without delegate amount",
			cli.TestFlags().
				With(sdk.ValAddress(s.addrs[0]).String()).
				WithFrom(s.addrs[0].String()).
				Append(args),
			true, 0, nil,
		},
		{
			"without validator address",
			cli.TestFlags().
				With(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(150)).String()).
				WithFrom(s.addrs[0].String()).
				Append(args),
			true, 0, nil,
		},
		{
			"valid transaction of delegate",
			cli.TestFlags().
				With(
					sdk.ValAddress(s.addrs[0]).String(),
					sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(150)).String(),
				).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			cmd := cli.GetTxStakingDelegateCmd()

			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err, out.String())
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				s.Require().Equal(tc.expectedCode, txResp.Code, out.String())
			}
		})
	}
}

func (s *StakingCLITestSuite) TestNewRedelegateCmd() {
	args := cli.TestFlags().
		WithSkipConfirm().
		WithBroadcastModeSync().
		WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))))

	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"without amount",
			cli.TestFlags().
				With(
					sdk.ValAddress(s.addrs[0]).String(), // src-validator-addr
					sdk.ValAddress(s.addrs[1]).String(), // dst-validator-addr
				).
				WithFrom(s.addrs[0].String()).
				Append(args),
			true, 0, nil,
		},
		{
			"valid transaction of delegate",
			cli.TestFlags().
				With(
					sdk.ValAddress(s.addrs[0]).String(),                             // src-validator-addr
					sdk.ValAddress(s.addrs[1]).String(),                             // dst-validator-addr
					sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(150)).String(), // amount
				).
				WithFrom(s.addrs[0].String()).
				Append(args),
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			cmd := cli.GetTxStakingRedelegateCmd()

			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err, out.String())
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				s.Require().Equal(tc.expectedCode, txResp.Code, out.String())
			}
		})
	}
}

func (s *StakingCLITestSuite) TestNewUnbondCmd() {
	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"Without unbond amount",
			[]string{
				sdk.ValAddress(s.addrs[0]).String(),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			true, 0, nil,
		},
		{
			"Without validator address",
			[]string{
				sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(150)).String(),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			true, 0, nil,
		},
		{
			"valid transaction of unbond",
			[]string{
				sdk.ValAddress(s.addrs[0]).String(),
				sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(150)).String(),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			cmd := cli.GetTxStakingUnbondCmd()

			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err, out.String())
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				s.Require().Equal(tc.expectedCode, txResp.Code, out.String())
			}
		})
	}
}

func (s *StakingCLITestSuite) TestNewCancelUnbondingDelegationCmd() {
	testCases := []struct {
		name         string
		args         []string
		expectErr    bool
		expectedCode uint32
		respType     proto.Message
	}{
		{
			"Without validator address",
			[]string{
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			true, 0, nil,
		},
		{
			"Without canceling unbond delegation amount",
			[]string{
				sdk.ValAddress(s.addrs[0]).String(),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			true, 0, nil,
		},
		{
			"Without unbond creation height",
			[]string{
				sdk.ValAddress(s.addrs[0]).String(),
				sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(150)).String(),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			true, 0, nil,
		},
		{
			"valid transaction of canceling unbonding delegation",
			[]string{
				sdk.ValAddress(s.addrs[0]).String(),
				sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(5)).String(),
				sdkmath.NewInt(10000).String(),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, s.addrs[0]),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10))).String()),
			},
			false, 0, &sdk.TxResponse{},
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			cmd := cli.GetTxStakingCancelUnbondingDelegationCmd()
			out, err := clitestutil.ExecTestCLICmd(s.cctx, cmd, tc.args)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err, out.String())
				s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), tc.respType), out.String())

				txResp := tc.respType.(*sdk.TxResponse)
				s.Require().Equal(tc.expectedCode, txResp.Code, out.String())
			}
		})
	}
}
