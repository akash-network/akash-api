package cli

import (
	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"

	cflags "pkg.akt.dev/go/cli/flags"
	types "pkg.akt.dev/go/node/market/v1beta5"

	mv1beta "pkg.akt.dev/go/node/market/v1beta5"
)

// GetMarketTxCmd returns the transaction commands for market module
func GetMarketTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Transaction subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdMarketBid(),
		cmdMarketLease(),
	)
	return cmd
}

func cmdMarketBid() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "bid",
		Short:                      "Bid subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdMarketBidCreate(),
		cmdMarketBidClose(),
	)
	return cmd
}

func cmdMarketBidCreate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create",
		Short: "Create a market bid",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			price, err := cmd.Flags().GetString("price")
			if err != nil {
				return err
			}

			coin, err := sdk.ParseDecCoin(price)
			if err != nil {
				return err
			}

			id, err := cflags.OrderIDFromFlags(cmd.Flags(), cflags.WithProvider(cctx.FromAddress))
			if err != nil {
				return err
			}

			deposit, err := DetectBidDeposit(ctx, cmd.Flags(), cl.Query())
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCreateBid{
				OrderID:  id,
				Provider: cctx.GetFromAddress().String(),
				Price:    coin,
				Deposit:  deposit,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddOrderIDFlags(cmd.Flags())

	cmd.Flags().String("price", "", "Bid Price")
	cflags.AddDepositFlags(cmd.Flags())

	return cmd
}

func cmdMarketBidClose() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "close",
		Short: "Close a market bid",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := cflags.BidIDFromFlags(cmd.Flags(), cflags.WithProvider(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCloseBid{
				ID: id,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddBidIDFlags(cmd.Flags())

	return cmd
}

func cmdMarketLease() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "lease",
		Short:                      "Lease subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdMarketLeaseCreate(),
		cmdMarketLeaseWithdraw(),
		cmdMarketLeaseClose(),
	)
	return cmd
}

func cmdMarketLeaseCreate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create",
		Short: "Create a market lease",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := cflags.LeaseIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCreateLease{
				BidID: id.BidID(),
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddLeaseIDFlags(cmd.Flags())
	cflags.MarkReqLeaseIDFlags(cmd, cflags.DeploymentIDOptionNoOwner(true))

	return cmd
}

func cmdMarketLeaseWithdraw() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "withdraw",
		Short: "Settle and withdraw available funds from market order escrow account",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)

			cctx := cl.ClientContext()

			id, err := cflags.LeaseIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgWithdrawLease{
				ID: id,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddLeaseIDFlags(cmd.Flags())
	cflags.MarkReqLeaseIDFlags(cmd, cflags.DeploymentIDOptionNoOwner(true))

	return cmd
}

func cmdMarketLeaseClose() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "close",
		Short: "Close a market order",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := cflags.LeaseIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCloseLease{
				ID: id,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddLeaseIDFlags(cmd.Flags())
	cflags.MarkReqLeaseIDFlags(cmd, cflags.DeploymentIDOptionNoOwner(true))

	return cmd
}
