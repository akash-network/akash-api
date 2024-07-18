package cli

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/version"
	"github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/spf13/cobra"
)

var FlagSplit = "split"

// NewBankTxCmd returns a root CLI command handler for all x/bank transaction commands.
func NewBankTxCmd() *cobra.Command {
	txCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Bank transaction subcommands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	txCmd.AddCommand(
		NewBankSendTxCmd(),
		NewBankMultiSendTxCmd(),
	)

	return txCmd
}

// NewBankSendTxCmd returns a CLI command handler for creating a MsgSend transaction.
func NewBankSendTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send [from_key_or_address] [to_address] [amount]",
		Short: "Send funds from one account to another.",
		Long: `Send funds from one account to another.
Note, the '--from' flag is ignored as it is implied from [from_key_or_address].
When using '--dry-run' a key name cannot be used, only a bech32 address.
`,
		Args: cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()

			err := cmd.Flags().Set(flags.FlagFrom, args[0])
			if err != nil {
				return err
			}

			cl := MustClientFromContext(ctx)

			toAddr, err := sdk.AccAddressFromBech32(args[1])
			if err != nil {
				return err
			}

			coins, err := sdk.ParseCoinsNormalized(args[2])
			if err != nil {
				return err
			}

			msg := types.NewMsgSend(cl.ClientContext().GetFromAddress(), toAddr, coins)

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

// NewBankMultiSendTxCmd returns a CLI command handler for creating a MsgMultiSend transaction.
// For a better UX this command is limited to send funds from one account to two or more accounts.
func NewBankMultiSendTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "multi-send [from_key_or_address] [to_address_1 to_address_2 ...] [amount]",
		Short: "Send funds from one account to two or more accounts.",
		Long: `Send funds from one account to two or more accounts.
By default, sends the [amount] to each address of the list.
Using the '--split' flag, the [amount] is split equally between the addresses.
Note, the '--from' flag is ignored as it is implied from [from_key_or_address] and 
separate addresses with space.
When using '--dry-run' a key name cannot be used, only a bech32 address.`,
		Example: fmt.Sprintf("%s tx bank multi-send cosmos1... cosmos1... cosmos1... cosmos1... 10stake", version.AppName),
		Args:    cobra.MinimumNArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()

			err := cmd.Flags().Set(flags.FlagFrom, args[0])
			if err != nil {
				return err
			}

			cl := MustClientFromContext(ctx)

			coins, err := sdk.ParseCoinsNormalized(args[len(args)-1])
			if err != nil {
				return err
			}

			if coins.IsZero() {
				return fmt.Errorf("must send positive amount")
			}

			split, err := cmd.Flags().GetBool(FlagSplit)
			if err != nil {
				return err
			}

			totalAddrs := sdk.NewInt(int64(len(args) - 2))
			// coins to be received by the addresses
			sendCoins := coins
			if split {
				sendCoins = coins.QuoInt(totalAddrs)
			}

			var output []types.Output
			for _, arg := range args[1 : len(args)-1] {
				toAddr, err := sdk.AccAddressFromBech32(arg)
				if err != nil {
					return err
				}

				output = append(output, types.NewOutput(toAddr, sendCoins))
			}

			// amount to be sent from the from address
			var amount sdk.Coins
			if split {
				// user input: 1000stake to send to 3 addresses
				// actual: 333stake to each address (=> 999stake actually sent)
				amount = sendCoins.MulInt(totalAddrs)
			} else {
				amount = coins.MulInt(totalAddrs)
			}

			msg := types.NewMsgMultiSend([]types.Input{types.NewInput(cl.ClientContext().FromAddress, amount)}, output)

			resp, err := cl.Tx().Broadcast(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cmd.Flags().Bool(FlagSplit, false, "Send the equally split token amount to each address")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
