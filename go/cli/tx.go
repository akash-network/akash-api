package cli

import (
	"context"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/spf13/cobra"

	cflags "pkg.akt.dev/go/cli/flags"
	cltypes "pkg.akt.dev/go/node/client/types"
	"pkg.akt.dev/go/node/client/v1beta3"
)

type ContextType string

const (
	ContextTypeClient      = "context-client"
	ContextTypeQueryClient = "context-query-client"
)

func TxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "tx",
		Short: "Transactions subcommands",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()

			cctx, err := sdkclient.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			opts, err := cltypes.ClientOptionsFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			cl, err := DiscoverClient(ctx, cctx, opts...)
			if err != nil {
				return err
			}

			ctx = context.WithValue(ctx, ContextTypeClient, cl)

			cmd.SetContext(ctx)

			return nil
		},
	}

	cmd.AddCommand(
		NewBankTxCmd(),
		GetSignCommand(),
		GetSignBatchCommand(),
		GetMultiSignCommand(),
		GetValidateSignaturesCommand(),
		GetBroadcastCommand(),
		GetEncodeCommand(),
		GetDecodeCommand(),
		GetVestingTxCmd(),
		cflags.LineBreak,
		GetAuditTxCmd(),
		GetCertTxCmd(),
		GetDeploymentTxCmd(),
		GetMarketTxCmd(),
		GetProviderTxCmd(),
	)

	cmd.PersistentFlags().String(cflags.FlagChainID, "", "The network chain ID")

	return cmd
}

func MustClientFromContext(ctx context.Context) v1beta3.Client {
	val := ctx.Value(ContextTypeClient)
	if val == nil {
		panic("context does not have client set")
	}

	res, valid := val.(v1beta3.Client)
	if !valid {
		panic("invalid context value")
	}

	return res
}

func MustQueryClientFromContext(ctx context.Context) v1beta3.LightClient {
	val := ctx.Value(ContextTypeQueryClient)
	if val == nil {
		panic("context does not have client set")
	}

	res, valid := val.(v1beta3.LightClient)
	if !valid {
		panic("invalid context value")
	}

	return res
}
