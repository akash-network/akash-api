package cli

import (
	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"

	types "pkg.akt.dev/go/node/provider/v1beta4"
)

// GetProviderQueryCmd returns the transaction commands for the provider module
func GetProviderQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Provider query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		cmdGetProviders(),
		cmdGetProvider(),
	)

	return cmd
}

func cmdGetProviders() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "Query for all providers",
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &types.QueryProvidersRequest{
				Pagination: pageReq,
			}

			res, err := cl.Query().Provider().Providers(ctx, params)
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)
	flags.AddPaginationFlagsToCmd(cmd, "providers")

	return cmd
}

func cmdGetProvider() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get [address]",
		Short: "Query provider",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			owner, err := sdk.AccAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			res, err := cl.Query().Provider().Provider(cmd.Context(), &types.QueryProviderRequest{Owner: owner.String()})
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(&res.Provider)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
