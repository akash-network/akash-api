package testutil

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/testutil"

	"pkg.akt.dev/go/cli"
)

func ExecCreateGrant(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	cmd := cli.GetTxAuthzGrantAuthorizationCmd()
	return ExecTestCLICmd(ctx, cctx, cmd, args...)
}
