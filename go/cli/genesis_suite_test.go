package cli_test

import (
	"bytes"
	"io"

	abci "github.com/cometbft/cometbft/abci/types"
	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
	testutilmod "github.com/cosmos/cosmos-sdk/types/module/testutil"
	"github.com/cosmos/cosmos-sdk/x/genutil"

	"pkg.akt.dev/go/testutil"
)

type GenesisCLITestSuite struct {
	CLITestSuite
}

func (s *GenesisCLITestSuite) SetupSuite() {
	s.encCfg = testutilmod.MakeTestEncodingConfig(genutil.AppModuleBasic{})
	s.kr = keyring.NewInMemory(s.encCfg.Codec)
	s.baseCtx = client.Context{}.
		WithKeyring(s.kr).
		WithTxConfig(s.encCfg.TxConfig).
		WithCodec(s.encCfg.Codec).
		WithLegacyAmino(s.encCfg.Amino).
		WithClient(testutil.MockTendermintRPC{Client: rpcclientmock.Client{}}).
		WithAccountRetriever(client.MockAccountRetriever{}).
		WithOutput(io.Discard).
		WithChainID("test-chain")

	var outBuf bytes.Buffer
	ctxGen := func() client.Context {
		bz, _ := s.encCfg.Codec.Marshal(&sdk.TxResponse{})
		c := testutil.NewMockTendermintRPC(abci.ResponseQuery{
			Value: bz,
		})
		return s.baseCtx.WithClient(c)
	}
	s.cctx = ctxGen().WithOutput(&outBuf)
}
