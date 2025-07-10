package cli

import (
	"context"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client/rpc"

	cflags "pkg.akt.dev/go/cli/flags"
)

func QueryPersistentPreRunE(cmd *cobra.Command, _ []string) error {
	ctx := cmd.Context()

	cctx, err := GetClientTxContext(cmd)
	if err != nil {
		return err
	}

	cl, err := DiscoverQueryClient(ctx, cctx)
	if err != nil {
		return err
	}

	ctx = context.WithValue(ctx, ContextTypeQueryClient, cl)

	cmd.SetContext(ctx)

	return nil
}

func QueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "query",
		Aliases: []string{"q"},
		Short:   "Querying subcommands",
	}

	cmd.AddCommand(
		GetQueryAuthCmd(),
		GetQueryAuthzCmd(),
		GetQueryBankCmd(),
		GetQueryDistributionCmd(),
		GetQueryEvidenceCmd(),
		GetQueryFeegrantCmd(),
		GetQueryMintCmd(),
		GetQueryParamsCmd(),
		cflags.LineBreak,
		rpc.ValidatorCommand(),
		//rpc.BlockCommand(),
		GetQueryAuthTxsByEventsCmd(),
		GetQueryAuthTxCmd(),
		GetQueryGovCmd(),
		GetQuerySlashingCmd(),
		GetQueryStakingCmd(),
		cflags.LineBreak,
		GetQueryAuditCmd(),
		GetQueryCertCmd(),
		GetQueryDeploymentCmds(),
		GetQueryMarketCmds(),
		GetQueryEscrowCmd(),
		GetQueryProviderCmds(),
	)

	cmd.PersistentFlags().String(cflags.FlagChainID, "", "The network chain ID")

	return cmd
}
