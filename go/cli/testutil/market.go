package testutil

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	sdktest "github.com/cosmos/cosmos-sdk/testutil"

	"pkg.akt.dev/go/cli"
)

// TxCreateBidExec is used for testing create bid tx
func TxCreateBidExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxMarketBidCreateCmd(), extraArgs...)
}

// TxCloseBidExec is used for testing close bid tx
func TxCloseBidExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxMarketBidCloseCmd(), extraArgs...)
}

// TxCreateLeaseExec is used for creating a lease
func TxCreateLeaseExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxMarketLeaseCreateCmd(), extraArgs...)
}

// TxCloseLeaseExec is used for testing close order tx
func TxCloseLeaseExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxMarketLeaseCloseCmd(), extraArgs...)
}

// QueryOrdersExec is used for testing orders query
func QueryOrdersExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryMarketOrdersCmd(), args...)
}

// QueryOrderExec is used for testing order query
func QueryOrderExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryMarketOrderCmd(), extraArgs...)
}

// QueryBidsExec is used for testing bids query
func QueryBidsExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryMarketBidsCmd(), args...)
}

// QueryBidExec is used for testing bid query
func QueryBidExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryMarketBidCmd(), extraArgs...)
}

// QueryLeasesExec is used for testing leases query
func QueryLeasesExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryMarketLeasesCmd(), args...)
}

// QueryLeaseExec is used for testing lease query
func QueryLeaseExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryMarketLeaseCmd(), extraArgs...)
}
