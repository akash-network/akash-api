package cli

import (
	"context"

	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/rpc"

	cflags "pkg.akt.dev/go/cli/flags"
)

func QueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "query",
		Aliases: []string{"q"},
		Short:   "Querying subcommands",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
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
		GetAccountCmd(),
		flags.LineBreak,
		rpc.ValidatorCommand(),
		rpc.BlockCommand(),
		QueryTxsByEventsCmd(),
		QueryTxCmd(),
		flags.LineBreak,
	)

	// app.ModuleBasics().AddQueryCommands(cmd)
	cmd.PersistentFlags().String(cflags.FlagChainID, "", "The network chain ID")
	return cmd
}
