package cli_test

import (
	"fmt"
	"io"
	"strings"
	"testing"

	abci "github.com/cometbft/cometbft/abci/types"
	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
	"github.com/stretchr/testify/require"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	testutilmod "github.com/cosmos/cosmos-sdk/types/module/testutil"
	"github.com/cosmos/cosmos-sdk/x/evidence"

	"pkg.akt.dev/go/cli"
	cflags "pkg.akt.dev/go/cli/flags"
)

func TestGetQueryCmd(t *testing.T) {
	encCfg := testutilmod.MakeTestEncodingConfig(evidence.AppModuleBasic{})
	kr := keyring.NewInMemory(encCfg.Codec)
	baseCtx := client.Context{}.
		WithKeyring(kr).
		WithTxConfig(encCfg.TxConfig).
		WithCodec(encCfg.Codec).
		WithLegacyAmino(encCfg.Amino).
		WithClient(clitestutil.MockTendermintRPC{Client: rpcclientmock.Client{}}).
		WithAccountRetriever(client.MockAccountRetriever{}).
		WithOutput(io.Discard).
		WithChainID("test-chain").
		WithSignModeStr(cflags.SignModeDirect)

	testCases := map[string]struct {
		args           []string
		ctxGen         func() client.Context
		expCmdOutput   string
		expectedOutput string
		expectErr      bool
	}{
		"non-existent evidence": {
			cli.TestFlags().
				With("DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660"),
			func() client.Context {
				bz, _ := encCfg.Codec.Marshal(&sdk.TxResponse{})
				c := clitestutil.NewMockTendermintRPC(abci.ResponseQuery{
					Value: bz,
				})
				return baseCtx.WithClient(c)
			},
			"DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660",
			"",
			true,
		},
		"all evidence (default pagination)": {
			cli.TestFlags().
				WithOutputText(),
			func() client.Context {
				bz, _ := encCfg.Codec.Marshal(&sdk.TxResponse{})
				c := clitestutil.NewMockTendermintRPC(abci.ResponseQuery{
					Value: bz,
				})
				return baseCtx.WithClient(c)
			},
			"",
			"evidence: []\npagination: null",
			false,
		},
		"all evidence (json output)": {
			cli.TestFlags().
				WithOutputJSON(),
			func() client.Context {
				bz, _ := encCfg.Codec.Marshal(&sdk.TxResponse{})
				c := clitestutil.NewMockTendermintRPC(abci.ResponseQuery{
					Value: bz,
				})
				return baseCtx.WithClient(c)
			},
			"",
			`{"evidence":[],"pagination":null}`,
			false,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			cmd := cli.GetQueryEvidenceCmd()

			// var outBuf bytes.Buffer
			//
			// clientCtx := tc.ctxGen().WithOutput(&outBuf)
			// ctx := svrcmd.CreateExecuteContext(context.Background())
			//
			// cmd.SetContext(ctx)
			// cmd.SetArgs(tc.args)

			// require.NoError(t, client.SetCmdClientContextHandler(clientCtx, cmd))

			if len(tc.args) != 0 {
				require.Contains(t, fmt.Sprint(cmd), tc.expCmdOutput)
			}

			out, err := clitestutil.ExecTestCLICmd(tc.ctxGen(), cmd, tc.args)
			if tc.expectErr {
				require.Error(t, err)
			} else {
				require.NoError(t, err)
			}
			require.Contains(t, fmt.Sprint(cmd), "evidence [] [] Query for evidence by hash or for all (paginated) submitted evidence")
			require.Contains(t, strings.TrimSpace(out.String()), tc.expectedOutput)
		})
	}
}
