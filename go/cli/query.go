package cli

import (
	"context"

	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/rpc"

	cflags "pkg.akt.dev/go/cli/flags"
)

func QueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "query",
		Aliases: []string{"q"},
		Short:   "Querying subcommands",
		PersistentPreRunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()

			cctx, err := sdkclient.GetClientTxContext(cmd)
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
		},
	}

	cmd.AddCommand(
		GetAuthQueryCmd(),
		cflags.LineBreak,
		rpc.ValidatorCommand(),
		rpc.BlockCommand(),
		QueryTxsByEventsCmd(),
		GetTxQueryCmd(),
		cflags.LineBreak,
		GetAuditQueryCmd(),
		GetCertQueryCmd(),
		GetDeploymentQueryCmd(),
		GetMarketQueryCmd(),
		GetProviderQueryCmd(),
	)

	cmd.PersistentFlags().String(cflags.FlagChainID, "", "The network chain ID")
	return cmd
}
