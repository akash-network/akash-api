package cli_test

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"time"

	sdkmath "cosmossdk.io/math"
	abci "github.com/cometbft/cometbft/abci/types"
	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	testutilmod "github.com/cosmos/cosmos-sdk/types/module/testutil"
	"github.com/cosmos/cosmos-sdk/x/bank"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/cosmos/cosmos-sdk/x/gov"
	govv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	govv1beta1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"

	"pkg.akt.dev/go/cli"
	clitestutil "pkg.akt.dev/go/cli/testutil"
)

var (
	typeMsgSend           = banktypes.SendAuthorization{}.MsgTypeURL()
	typeMsgVote           = sdk.MsgTypeURL(&govv1.MsgVote{})
	typeMsgSubmitProposal = sdk.MsgTypeURL(&govv1.MsgSubmitProposal{})
)

type AuthzCLITestSuite struct {
	CLITestSuite
	grantee []sdk.AccAddress
	addrs   []sdk.AccAddress
}

func (s *AuthzCLITestSuite) SetupSuite() {
	s.encCfg = testutilmod.MakeTestEncodingConfig(gov.AppModuleBasic{}, bank.AppModuleBasic{})
	s.kr = keyring.NewInMemory(s.encCfg.Codec)
	s.baseCtx = client.Context{}.
		WithKeyring(s.kr).
		WithTxConfig(s.encCfg.TxConfig).
		WithCodec(s.encCfg.Codec).
		WithLegacyAmino(s.encCfg.Amino).
		WithClient(clitestutil.MockTendermintRPC{Client: rpcclientmock.Client{}}).
		WithAccountRetriever(client.MockAccountRetriever{}).
		WithOutput(io.Discard).
		WithChainID("test-chain")

	ctxGen := func() client.Context {
		bz, _ := s.encCfg.Codec.Marshal(&sdk.TxResponse{})
		c := clitestutil.NewMockTendermintRPC(abci.ResponseQuery{
			Value: bz,
		})
		return s.baseCtx.WithClient(c)
	}
	var outBuf bytes.Buffer

	s.cctx = ctxGen().
		WithOutput(&outBuf).
		WithSignModeStr("direct")

	val := testutil.CreateKeyringAccounts(s.T(), s.kr, 1)
	s.grantee = make([]sdk.AccAddress, 6)

	s.addrs = make([]sdk.AccAddress, 1)
	s.addrs[0] = s.createAccount("validator address")

	// Send some funds to the new account.
	// Create new account in the keyring.
	s.grantee[0] = s.createAccount("grantee1")
	s.msgSendExec(s.grantee[0])

	// create a proposal with deposit
	_, err := clitestutil.ExecGovSubmitLegacyProposal(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			WithFrom(val[0].Address.String()).
			WithTitle("Text Proposal 1").
			WithSkipConfirm().
			WithDescription("Where is the title!?").
			WithProposalType(govv1beta1.ProposalTypeText).
			WithDeposit(sdk.NewCoin("uakt", sdkmath.NewInt(10000000)))...)
	s.Require().NoError(err)

	// Create new account in the keyring.
	s.grantee[1] = s.createAccount("grantee2")
	// Send some funds to the new account.
	s.msgSendExec(s.grantee[1])

	// grant send authorization to grantee2
	out, err := clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(s.grantee[1].String(), "send").
			WithSpendLimit("100uakt").
			WithFrom(val[0].Address.String()).
			WithSkipConfirm().
			WithBroadcastModeSync().
			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))).
			WithExpiration(fmt.Sprintf("%d", time.Now().Add(time.Minute*time.Duration(120)).Unix()))...)
	s.Require().NoError(err)

	var response sdk.TxResponse
	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())

	// Create new account in the keyring.
	s.grantee[2] = s.createAccount("grantee3")

	// grant send authorization to grantee3
	_, err = clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(s.grantee[2].String(), "send").
			WithSpendLimit("100uakt").
			WithFrom(val[0].Address.String()).
			WithSkipConfirm().
			WithBroadcastModeSync().
			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))).
			WithExpiration(fmt.Sprintf("%d", time.Now().Add(time.Minute*time.Duration(120)).Unix()))...)
	s.Require().NoError(err)

	// Create new accounts in the keyring.
	s.grantee[3] = s.createAccount("grantee4")
	s.msgSendExec(s.grantee[3])

	s.grantee[4] = s.createAccount("grantee5")
	s.grantee[5] = s.createAccount("grantee6")

	// grant send authorization with allow list to grantee4
	out, err = clitestutil.ExecCreateGrant(
		context.Background(),
		s.cctx,
		cli.TestFlags().
			With(s.grantee[3].String(), "send").
			WithSpendLimit("100uakt").
			WithFrom(val[0].Address.String()).
			WithSkipConfirm().
			WithBroadcastModeSync().
			WithFees(sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(10)))).
			WithExpiration(fmt.Sprintf("%d", time.Now().Add(time.Minute*time.Duration(120)).Unix())).
			WithAllowList(s.grantee[4].String())...)
	s.Require().NoError(err)

	s.Require().NoError(s.cctx.Codec.UnmarshalJSON(out.Bytes(), &response), out.String())
}
