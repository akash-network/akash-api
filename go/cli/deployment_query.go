package cli

import (
	"context"

	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"

	cflags "pkg.akt.dev/go/cli/flags"
	"pkg.akt.dev/go/node/deployment/v1"
	"pkg.akt.dev/go/node/deployment/v1beta4"
)

// GetDeploymentQueryCmd returns the query commands for the deployment module
func GetDeploymentQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        v1.ModuleName,
		Short:                      "Deployment query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		cmdDeployments(),
		cmdDeployment(),
		getGroupCmd(),
	)

	return cmd
}

func cmdDeployments() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "Query for all deployments",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			dfilters, err := cflags.DepFiltersFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &v1beta4.QueryDeploymentsRequest{
				Filters:    dfilters,
				Pagination: pageReq,
			}

			res, err := cl.Query().Deployment().Deployments(context.Background(), params)
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddPaginationFlagsToCmd(cmd, "deployments")
	cflags.AddDeploymentFilterFlags(cmd.Flags())

	return cmd
}

func cmdDeployment() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get",
		Short: "Query deployment",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			id, err := cflags.DeploymentIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := cl.Query().Deployment().Deployment(context.Background(), &v1beta4.QueryDeploymentRequest{ID: id})
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddDeploymentIDFlags(cmd.Flags())
	cflags.MarkReqDeploymentIDFlags(cmd)

	return cmd
}

func getGroupCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "group",
		Short:                      "Deployment group query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		cmdGetGroup(),
	)

	return cmd
}

func cmdGetGroup() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get",
		Short: "Query group of deployment",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			id, err := cflags.GroupIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := cl.Query().Deployment().Group(cmd.Context(), &v1beta4.QueryGroupRequest{ID: id})
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(&res.Group)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddGroupIDFlags(cmd.Flags())
	cflags.MarkReqGroupIDFlags(cmd)

	return cmd
}
