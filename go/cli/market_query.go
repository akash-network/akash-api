package cli

import (
	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"

	cflags "pkg.akt.dev/go/cli/flags"
	v1 "pkg.akt.dev/go/node/market/v1"
	"pkg.akt.dev/go/node/market/v1beta5"
)

// GetQueryMarketCmds returns the transaction commands for the market module
func GetQueryMarketCmds() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        v1beta5.ModuleName,
		Short:                      "Market query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		GetQueryMarketOrderCmds(),
		GetQueryMarketBidCmds(),
		GetQueryMarketLeaseCmds(),
	)

	return cmd
}

func GetQueryMarketOrderCmds() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "order",
		Short:                      "Order query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		GetQueryMarketOrdersCmd(),
		GetQueryMarketOrderCmd(),
	)

	return cmd
}

func GetQueryMarketBidCmds() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "bid",
		Short:                      "Bid query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		GetQueryMarketBidsCmd(),
		GetQueryMarketBidCmd(),
	)

	return cmd
}

func GetQueryMarketLeaseCmds() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "lease",
		Short:                      "Lease query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		GetQueryMarketLeasesCmd(),
		GetQueryMarketLeaseCmd(),
	)

	return cmd
}

func GetQueryMarketOrdersCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "list",
		Short:             "Query for all orders",
		PersistentPreRunE: QueryPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			ofilters, err := cflags.OrderFiltersFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &v1beta5.QueryOrdersRequest{
				Filters:    ofilters,
				Pagination: pageReq,
			}

			res, err := cl.Query().Market().Orders(ctx, params)
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddPaginationFlagsToCmd(cmd, "orders")
	cflags.AddOrderFilterFlags(cmd.Flags())

	return cmd
}

func GetQueryMarketOrderCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "get",
		Short:             "Query order",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: QueryPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			id, err := cflags.OrderIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := cl.Query().Market().Order(ctx, &v1beta5.QueryOrderRequest{ID: id})

			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(&res.Order)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddOrderIDFlags(cmd.Flags())
	cflags.MarkReqOrderIDFlags(cmd)

	return cmd
}

func GetQueryMarketBidsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "list",
		Short:             "Query for all bids",
		PersistentPreRunE: QueryPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			bfilters, err := cflags.BidFiltersFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &v1beta5.QueryBidsRequest{
				Filters:    bfilters,
				Pagination: pageReq,
			}

			res, err := cl.Query().Market().Bids(ctx, params)
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddPaginationFlagsToCmd(cmd, "bids")
	cflags.AddBidFilterFlags(cmd.Flags())

	return cmd
}

func GetQueryMarketBidCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "get",
		Short:             "Query order",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: QueryPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			bidID, err := cflags.BidIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := cl.Query().Market().Bid(ctx, &v1beta5.QueryBidRequest{ID: bidID})
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddQueryBidIDFlags(cmd.Flags())
	cflags.MarkReqBidIDFlags(cmd)

	return cmd
}

func GetQueryMarketLeasesCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "list",
		PersistentPreRunE: QueryPersistentPreRunE,
		Short:             "Query for all leases",
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			lfilters, err := cflags.LeaseFiltersFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &v1beta5.QueryLeasesRequest{
				Filters:    lfilters,
				Pagination: pageReq,
			}

			res, err := cl.Query().Market().Leases(ctx, params)
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddPaginationFlagsToCmd(cmd, "leases")
	cflags.AddLeaseFilterFlags(cmd.Flags())

	return cmd
}

func GetQueryMarketLeaseCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "get",
		Short:             "Query order",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: QueryPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			bidID, err := cflags.BidIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := cl.Query().Market().Lease(cmd.Context(), &v1beta5.QueryLeaseRequest{ID: v1.MakeLeaseID(bidID)})
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddQueryBidIDFlags(cmd.Flags())
	cflags.MarkReqBidIDFlags(cmd)

	return cmd
}
