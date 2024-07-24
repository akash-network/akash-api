package cli

import (
	"context"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"

	types "pkg.akt.dev/go/node/audit/v1"
)

func GetAuditQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Audit query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		cmdAuditGetProviders(),
		cmdAuditGetProvider(),
	)

	return cmd
}

func cmdAuditGetProviders() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "Query for all providers",
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &types.QueryAllProvidersAttributesRequest{
				Pagination: pageReq,
			}

			res, err := cl.Query().Audit().AllProvidersAttributes(ctx, params)
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

func cmdAuditGetProvider() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get [owner address] [auditor address]",
		Short: "Query provider",
		Args:  cobra.RangeArgs(1, 2),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			owner, err := sdk.AccAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			var res *types.QueryProvidersResponse
			if len(args) == 1 {
				res, err = cl.Query().Audit().ProviderAttributes(context.Background(),
					&types.QueryProviderAttributesRequest{
						Owner: owner.String(),
					},
				)
			} else {
				var auditor sdk.AccAddress
				if auditor, err = sdk.AccAddressFromBech32(args[1]); err != nil {
					return err
				}

				res, err = cl.Query().Audit().ProviderAuditorAttributes(context.Background(),
					&types.QueryProviderAuditorRequest{
						Auditor: auditor.String(),
						Owner:   owner.String(),
					},
				)
			}

			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
