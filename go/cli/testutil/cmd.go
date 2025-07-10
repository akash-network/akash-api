package testutil

import (
	"context"
	"fmt"
	"strings"

	addresscodec "github.com/cosmos/cosmos-sdk/codec/address"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/server"
	"github.com/cosmos/cosmos-sdk/testutil"

	"pkg.akt.dev/go/cli"
)

func execSetContext(ctx context.Context, cctx client.Context, cmd *cobra.Command, extraArgs ...string) (testutil.BufferWriter, error) {
	cmd.SetArgs(extraArgs)
	err := cmd.ParseFlags(extraArgs)
	if err != nil {
		return nil, err
	}

	_, out := testutil.ApplyMockIO(cmd)
	cctx = cctx.WithOutput(out)

	ctx = context.WithValue(ctx, cli.ClientContextKey, &client.Context{})
	ctx = context.WithValue(ctx, server.ServerContextKey, server.NewDefaultContext())

	cmd.SetContext(ctx)

	if err := cli.SetCmdClientContextHandler(cctx, cmd); err != nil {
		return nil, err
	}

	return out, nil
}

// ExecTestCLICmd builds the client context, mocks the output and executes the command.
func ExecTestCLICmd(ctx context.Context, cctx client.Context, cmd *cobra.Command, extraArgs ...string) (testutil.BufferWriter, error) {
	{
		dupFlags := make(map[string]bool)
		for _, arg := range extraArgs {
			if !strings.HasPrefix(arg, "--") {
				continue
			}

			arg = strings.TrimPrefix(arg, "--")
			tokens := strings.Split(arg, "=")

			if _, exists := dupFlags[tokens[0]]; exists {
				return nil, fmt.Errorf("test: duplicated flag \"%s\"", tokens[0])
			}

			dupFlags[tokens[0]] = true
		}
	}

	out, err := execSetContext(ctx, cctx, cmd, extraArgs...)
	if err != nil {
		return nil, err
	}

	if err := cmd.Execute(); err != nil {
		return out, err
	}

	return out, nil
}

func ExecSend(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxBankSendTxCmd(addresscodec.NewBech32Codec("akash")), args...)
}

func QueryBalancesExec(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryBankBalancesCmd(), args...)
}
