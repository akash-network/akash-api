package testutil

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	sdktest "github.com/cosmos/cosmos-sdk/testutil"

	"pkg.akt.dev/go/cli"
)

// TxCreateProviderExec is used for testing create provider tx
func TxCreateProviderExec(ctx context.Context, cctx client.Context, filepath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filepath,
	}

	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxProviderCreateCmd(), args...)
}

// TxUpdateProviderExec is used for testing update provider tx
func TxUpdateProviderExec(ctx context.Context, cctx client.Context, filepath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filepath,
	}

	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxProviderUpdateCmd(), args...)
}

// QueryProvidersExec is used for testing providers query
func QueryProvidersExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryProvidersCmd(), args...)
}

// QueryProviderExec is used for testing provider query
func QueryProviderExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryProviderCmd(), extraArgs...)
}
