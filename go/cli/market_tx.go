package cli

import (
	"fmt"

	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"

	types "pkg.akt.dev/go/node/market/v1beta5"

	mv1beta "pkg.akt.dev/go/node/market/v1beta5"
)

// GetMarketTxCmd returns the transaction commands for market module
func GetMarketTxCmd(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Transaction subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdMarketBid(key),
		cmdMarketLease(key),
	)
	return cmd
}

func cmdMarketBid(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "bid",
		Short:                      "Bid subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdMarketBidCreate(key),
		cmdMarketBidClose(key),
	)
	return cmd
}

func cmdMarketBidCreate(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create",
		Short: fmt.Sprintf("Create a %s bid", key),
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
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

			id, err := OrderIDFromFlags(cmd.Flags(), WithProvider(cctx.FromAddress))
			if err != nil {
				return err
			}

			deposit, err := DetectDeposit(ctx, cmd.Flags(), cl.Query(), "market", "BidMinDeposit")
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

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	AddOrderIDFlags(cmd.Flags())
	cmd.Flags().String("price", "", "Bid Price")
	AddDepositFlags(cmd.Flags())

	return cmd
}

func cmdMarketBidClose(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "close",
		Short: fmt.Sprintf("Close a %s bid", key),
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := BidIDFromFlags(cmd.Flags(), WithProvider(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCloseBid{
				ID: id,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	AddBidIDFlags(cmd.Flags())

	return cmd
}

func cmdMarketLease(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "lease",
		Short:                      "Lease subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdMarketLeaseCreate(key),
		cmdMarketLeaseWithdraw(key),
		cmdMarketLeaseClose(key),
	)
	return cmd
}

func cmdMarketLeaseCreate(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create",
		Short: fmt.Sprintf("Create a %s lease", key),
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := LeaseIDFromFlags(cmd.Flags(), WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCreateLease{
				BidID: id.BidID(),
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	AddLeaseIDFlags(cmd.Flags())
	MarkReqLeaseIDFlags(cmd, DeploymentIDOptionNoOwner(true))

	return cmd
}

func cmdMarketLeaseWithdraw(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "withdraw",
		Short: fmt.Sprintf("Settle and withdraw available funds from %s order escrow account", key),
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := LeaseIDFromFlags(cmd.Flags(), WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgWithdrawLease{
				ID: id,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	AddLeaseIDFlags(cmd.Flags())
	MarkReqLeaseIDFlags(cmd, DeploymentIDOptionNoOwner(true))

	return cmd
}

func cmdMarketLeaseClose(key string) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "close",
		Short: fmt.Sprintf("Close a %s order", key),
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := LeaseIDFromFlags(cmd.Flags(), WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &mv1beta.MsgCloseLease{
				ID: id,
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	AddLeaseIDFlags(cmd.Flags())
	MarkReqLeaseIDFlags(cmd, DeploymentIDOptionNoOwner(true))

	return cmd
}
