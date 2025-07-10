package cli_test

import (
	"context"
	"fmt"
	"io"
	"testing"

	rpcclientmock "github.com/cometbft/cometbft/rpc/client/mock"
	"github.com/stretchr/testify/require"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	testutilmod "github.com/cosmos/cosmos-sdk/types/module/testutil"
	"cosmossdk.io/x/upgrade"

	"pkg.akt.dev/go/cli"
	cflags "pkg.akt.dev/go/cli/flags"
)

func TestModuleVersionsCLI(t *testing.T) {
	encCfg := testutilmod.MakeTestEncodingConfig(upgrade.AppModuleBasic{})
	kr := keyring.NewInMemory(encCfg.Codec)
	baseCtx := client.Context{}.
		WithKeyring(kr).
		WithTxConfig(encCfg.TxConfig).
		WithCodec(encCfg.Codec).
		WithLegacyAmino(encCfg.Amino).
		WithClient(clitestutil.MockCometRPC{Client: rpcclientmock.Client{}}).
		WithAccountRetriever(client.MockAccountRetriever{}).
		WithOutput(io.Discard).
		WithChainID("test-chain").
		WithSignModeStr(cflags.SignModeDirect)

	testCases := []struct {
		msg          string
		args         []string
		expCmdOutput string
	}{
		{
			msg:          "test full query with json output",
			args:         cli.TestFlags().WithHeight(1).WithOutputJSON(),
			expCmdOutput: `--height=1 --output=json`,
		},
		{
			msg:          "test full query with text output",
			args:         cli.TestFlags().WithHeight(1).WithOutputText(),
			expCmdOutput: `--height=1 --output=text`,
		},
		{
			msg:          "test single module",
			args:         cli.TestFlags().With("bank").WithHeight(1),
			expCmdOutput: `bank --height=1`,
		},
		{
			msg:          "test non-existent module",
			args:         cli.TestFlags().With("abcdefg").WithHeight(1),
			expCmdOutput: `abcdefg --height=1`,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.msg, func(t *testing.T) {
			cmd := cli.GetQueryUpgradeModuleVersionsCmd()

			ctx := svrcmd.CreateExecuteContext(context.Background())

			cmd.SetOut(io.Discard)
			require.NotNil(t, cmd)

			cmd.SetContext(ctx)
			cmd.SetArgs(tc.args)

			require.NoError(t, client.SetCmdClientContextHandler(baseCtx, cmd))

			if len(tc.args) != 0 {
				require.Contains(t, fmt.Sprint(cmd), tc.expCmdOutput)
			}
		})
	}
}
