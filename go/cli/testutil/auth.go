package testutil

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/testutil"

	"pkg.akt.dev/go/cli"
)

func TxSignExec(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	cmd := cli.GetSignCommand()

	return ExecTestCLICmd(ctx, cctx, cmd,
		cli.TestFlags().
			WithChainID(cctx.ChainID).
			Append(args)...)
}

func TxBroadcastExec(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetBroadcastCommand(), args...)
}

func TxEncodeExec(ctx context.Context, cctx client.Context, filename string, extraArgs ...string) (testutil.BufferWriter, error) {
	args := []string{
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
		filename,
	}

	return ExecTestCLICmd(ctx, cctx, cli.GetEncodeCommand(), append(args, extraArgs...)...)
}

func TxValidateSignaturesExec(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetValidateSignaturesCommand(),
		cli.TestFlags().
			WithChainID(cctx.ChainID).
			Append(args)...)
}

func TxMultiSignExec(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetAuthMultiSignCmd(), cli.TestFlags().Append(args).WithChainID(cctx.ChainID)...)
}

func TxSignBatchExec(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, cli.GetSignBatchCommand(), args...)
}

func TxDecodeExec(ctx context.Context, cctx client.Context, encodedTx string, extraArgs ...string) (testutil.BufferWriter, error) {
	args := []string{
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
		encodedTx,
	}

	return ExecTestCLICmd(ctx, cctx, cli.GetDecodeCommand(), append(args, extraArgs...)...)
}

// TxAuxToFeeExec executes `GetAuxToFeeCommand` cli command with given args.
func TxAuxToFeeExec(ctx context.Context, cctx client.Context, filename string, extraArgs ...string) (testutil.BufferWriter, error) {
	args := []string{
		filename,
	}

	return ExecTestCLICmd(ctx, cctx, cli.GetAuxToFeeCommand(), append(args, extraArgs...)...)
}

// func QueryAccountExec(ctx context.Context, cctx client.Context, address fmt.Stringer, extraArgs ...string) (testutil.BufferWriter, error) {
// 	args := []string{address.String(), fmt.Sprintf("--%s=json", tmcli.OutputFlag)}
//
// 	return ExecTestCLICmd(ctx, cctx, cli.GetAuthAccountCmd(), append(args, extraArgs...)...)
// }

func TxMultiSignBatchExec(ctx context.Context, cctx client.Context, filename string, from string, sigFile1 string, sigFile2 string, extraArgs ...string) (testutil.BufferWriter, error) {
	args := []string{
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
		filename,
		from,
		sigFile1,
		sigFile2,
	}

	args = append(args, extraArgs...)

	return ExecTestCLICmd(ctx, cctx, cli.GetMultiSignBatchCmd(), args...)
}

// DONTCOVER
