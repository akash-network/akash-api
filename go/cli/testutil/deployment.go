package testutil

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	sdktest "github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"pkg.akt.dev/go/cli"
	dv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
)

// TxCreateDeploymentExec is used for testing create deployment tx
func TxCreateDeploymentExec(ctx context.Context, cctx client.Context, filePath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filePath,
	}

	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentCreateCmd(), args...)
}

// TxUpdateDeploymentExec is used for testing update deployment tx
func TxUpdateDeploymentExec(ctx context.Context, cctx client.Context, filePath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filePath,
	}

	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentUpdateCmd(), args...)
}

// TxCloseDeploymentExec is used for testing close deployment tx
// requires --dseq, --fees
func TxCloseDeploymentExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentCloseCmd(), extraArgs...)
}

// TxDepositDeploymentExec is used for testing deposit deployment tx
func TxDepositDeploymentExec(ctx context.Context, cctx client.Context, deposit sdk.Coin, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		deposit.String(),
	}

	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentDepositCmd(), args...)
}

// TxCloseGroupExec is used for testing close group tx
func TxCloseGroupExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentGroupCloseCmd(), extraArgs...)
}

func TxGrantAuthorizationExec(ctx context.Context, cctx client.Context, grantee sdk.AccAddress, extraArgs ...string) (sdktest.BufferWriter, error) {
	dmin, _ := dv1beta4.DefaultParams().MinDepositFor("uakt")

	spendLimit := sdk.NewCoin(dmin.Denom, dmin.Amount.MulRaw(3))
	args := []string{
		grantee.String(),
		spendLimit.String(),
	}
	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentGrantAuthorizationCmd(), args...)
}

func TxRevokeAuthorizationExec(ctx context.Context, cctx client.Context, grantee sdk.AccAddress, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		grantee.String(),
	}
	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetTxDeploymentRevokeAuthorizationCmd(), args...)
}

// QueryDeploymentsExec is used for testing deployments query
func QueryDeploymentsExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryDeploymentsCmd(), extraArgs...)
}

// QueryDeploymentExec is used for testing deployment query
func QueryDeploymentExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryDeploymentCmd(), extraArgs...)
}

// QueryGroupExec is used for testing group query
func QueryGroupExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetQueryDeploymentGroupCmd(), extraArgs...)
}
