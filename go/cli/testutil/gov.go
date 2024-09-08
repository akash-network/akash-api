package testutil

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/testutil"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	govcli "github.com/cosmos/cosmos-sdk/x/gov/client/cli"
)

// var commonArgs = []string{
// 	fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
// 	fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
// 	fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(10))).String()),
// }

// ExecGovSubmitLegacyProposal creates a tx for submit legacy proposal
//
//nolint:staticcheck // we are intentionally using a deprecated flag here.
func ExecGovSubmitLegacyProposal(ctx context.Context, cctx client.Context, args ...string) (testutil.BufferWriter, error) {
	return ExecTestCLICmd(ctx, cctx, govcli.NewCmdSubmitLegacyProposal(), args...)
}

// MsgVote votes for a proposal
func MsgVote(clientCtx client.Context, from, id, vote string, args ...string) (testutil.BufferWriter, error) {
	// args := append([]string{
	// 	id,
	// 	vote,
	// 	fmt.Sprintf("--%s=%s", flags.FlagFrom, from),
	// }, commonArgs...)
	//
	// args = append(args, extraArgs...)

	return clitestutil.ExecTestCLICmd(clientCtx, govcli.NewCmdWeightedVote(), args)
}

// MsgDeposit deposits on a proposal
func MsgDeposit(clientCtx client.Context, from, id, deposit string, args ...string) (testutil.BufferWriter, error) {
	// args := append([]string{
	// 	id,
	// 	deposit,
	// 	fmt.Sprintf("--%s=%s", flags.FlagFrom, from),
	// }, commonArgs...)
	//
	// args = append(args, extraArgs...)

	return clitestutil.ExecTestCLICmd(clientCtx, govcli.NewCmdDeposit(), args)
}
