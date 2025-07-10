package cli_test

import (
	"bytes"
	"io"
	"testing"

	sdkmath "cosmossdk.io/math"
	"cosmossdk.io/x/feegrant"
	"cosmossdk.io/x/feegrant/module"
	abci "github.com/cometbft/cometbft/abci/types"
	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdktestutil "github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"

	cflags "pkg.akt.dev/go/cli/flags"
	"pkg.akt.dev/go/testutil"
)

type FeegrantCLITestSuite struct {
	CLITestSuite

	addedGranter sdk.AccAddress
	addedGrantee sdk.AccAddress
	addedGrant   feegrant.Grant
	accounts     []sdk.AccAddress
}

func (s *FeegrantCLITestSuite) SetupSuite() {
	s.encCfg = testutil.MakeTestEncodingConfig(module.AppModuleBasic{})
	s.kr = keyring.NewInMemory(s.encCfg.Codec)
	s.baseCtx = client.Context{}.
		WithKeyring(s.kr).
		WithTxConfig(s.encCfg.TxConfig).
		WithCodec(s.encCfg.Codec).
		WithLegacyAmino(s.encCfg.Amino).
		WithClient(testutil.MockCometRPC{Client: rpcclientmock.Client{}}).
		WithAccountRetriever(client.MockAccountRetriever{}).
		WithOutput(io.Discard).
		WithChainID("test-chain").
		WithSignModeStr(cflags.SignModeDirect)

	var outBuf bytes.Buffer
	ctxGen := func() client.Context {
		bz, _ := s.encCfg.Codec.Marshal(&sdk.TxResponse{})
		c := testutil.NewMockCometRPC(abci.ResponseQuery{
			Value: bz,
		})

		return s.baseCtx.WithClient(c)
	}
	s.cctx = ctxGen().WithOutput(&outBuf)

	if testing.Short() {
		s.T().Skip("skipping test in unit-tests mode.")
	}

	accounts := sdktestutil.CreateKeyringAccounts(s.T(), s.kr, 2)

	granter := accounts[0].Address
	grantee := accounts[1].Address

	s.createGrant(granter, grantee)

	grant, err := feegrant.NewGrant(granter, grantee, &feegrant.BasicAllowance{
		SpendLimit: sdk.NewCoins(sdk.NewCoin("uakt", sdkmath.NewInt(100))),
	})
	s.Require().NoError(err)

	s.addedGrant = grant
	s.addedGranter = granter
	s.addedGrantee = grantee
	for _, v := range accounts {
		s.accounts = append(s.accounts, v.Address)
	}
	s.accounts[1] = accounts[1].Address
}
