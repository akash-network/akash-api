package cli

import (
	"errors"
	"fmt"
	"os"
	"strconv"
	"strings"

	errorsmod "cosmossdk.io/errors"
	sdkmath "cosmossdk.io/math"
	"github.com/spf13/cobra"
	flag "github.com/spf13/pflag"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/version"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"

	cflags "pkg.akt.dev/go/cli/flags"
	cclient "pkg.akt.dev/go/node/client/v1beta3"
)

// default values
var (
	DefaultTokens                  = sdk.DefaultPowerReduction.Mul(sdk.NewInt(100))
	defaultAmount                  = DefaultTokens.String() + sdk.DefaultBondDenom
	defaultCommissionRate          = "0.1"
	defaultCommissionMaxRate       = "0.2"
	defaultCommissionMaxChangeRate = "0.01"
)

// GetTxStakingCmd returns a root CLI command handler for all x/staking transaction commands.
func GetTxStakingCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        stakingtypes.ModuleName,
		Short:                      "Staking transaction subcommands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		GetTxStakingCreateValidatorCmd(),
		GetTxStakingEditValidatorCmd(),
		GetTxStakingDelegateCmd(),
		GetTxStakingRedelegateCmd(),
		GetTxStakingUnbondCmd(),
		GetTxStakingUnbondValidatorCmd(),
		GetTxStakingCancelUnbondingDelegation(),
		GetTxStakingTokenizeSharesCmd(),
		GetTxStakingRedeemTokensCmd(),
		GetTxStakingTransferTokenizeShareRecordCmd(),
		GetTxStakingDisableTokenizeShares(),
		GetTxStakingEnableTokenizeShares(),
		GetTxStakingValidatorBondCmd(),
	)

	return cmd
}

// GetTxStakingCreateValidatorCmd returns a CLI command handler for creating a MsgCreateValidator transaction.
func GetTxStakingCreateValidatorCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "create-validator",
		Short:             "create new validator",
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			msg, err := newBuildCreateValidatorMsg(cctx, cmd.Flags())
			if err != nil {
				return err
			}

			var opts []cclient.BroadcastOption

			genOnly, _ := cmd.Flags().GetBool(cflags.FlagGenerateOnly)
			if genOnly {
				ip, _ := cmd.Flags().GetString(cflags.FlagIP)
				p2pPort, _ := cmd.Flags().GetUint(cflags.FlagP2PPort)
				nodeID, _ := cmd.Flags().GetString(cflags.FlagNodeID)

				if nodeID != "" && ip != "" && p2pPort > 0 {
					opts = append(opts, cclient.WithNote(fmt.Sprintf("%s@%s:%d", nodeID, ip, p2pPort)))
				}
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg}, opts...)
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cmd.Flags().AddFlagSet(cflags.FlagSetPublicKey())
	cmd.Flags().AddFlagSet(cflags.FlagSetAmount())
	cmd.Flags().AddFlagSet(cflags.FlagSetDescriptionCreate())
	cmd.Flags().AddFlagSet(cflags.FlagSetCommissionCreate())

	cmd.Flags().String(cflags.FlagIP, "", fmt.Sprintf("The node's public IP. It takes effect only when used in combination with --%s", cflags.FlagGenerateOnly))
	cmd.Flags().String(cflags.FlagNodeID, "", "The node's ID")
	cflags.AddTxFlagsToCmd(cmd)

	_ = cmd.MarkFlagRequired(cflags.FlagFrom)
	_ = cmd.MarkFlagRequired(cflags.FlagAmount)
	_ = cmd.MarkFlagRequired(cflags.FlagPubKey)
	_ = cmd.MarkFlagRequired(cflags.FlagMoniker)

	return cmd
}

// GetTxStakingEditValidatorCmd returns a CLI command handler for creating a MsgEditValidator transaction.
func GetTxStakingEditValidatorCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "edit-validator",
		Short:             "edit an existing validator account",
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			valAddr := cctx.GetFromAddress()
			moniker, _ := cmd.Flags().GetString(cflags.FlagEditMoniker)
			identity, _ := cmd.Flags().GetString(cflags.FlagIdentity)
			website, _ := cmd.Flags().GetString(cflags.FlagWebsite)
			security, _ := cmd.Flags().GetString(cflags.FlagSecurityContact)
			details, _ := cmd.Flags().GetString(cflags.FlagDetails)
			description := stakingtypes.NewDescription(moniker, identity, website, security, details)

			var newRate *sdk.Dec

			commissionRate, _ := cmd.Flags().GetString(cflags.FlagCommissionRate)
			if commissionRate != "" {
				rate, err := sdkmath.LegacyNewDecFromStr(commissionRate)
				if err != nil {
					return fmt.Errorf("invalid new commission rate: %v", err)
				}

				newRate = &rate
			}

			msg := stakingtypes.NewMsgEditValidator(sdk.ValAddress(valAddr), description, newRate)

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cmd.Flags().AddFlagSet(cflags.FlagSetDescriptionEdit())
	cmd.Flags().AddFlagSet(cflags.FlagSetCommissionUpdate())
	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingDelegateCmd returns a CLI command handler for creating a MsgDelegate transaction.
func GetTxStakingDelegateCmd() *cobra.Command {
	bech32PrefixValAddr := sdk.GetConfig().GetBech32ValidatorAddrPrefix()

	cmd := &cobra.Command{
		Use:   "delegate [validator-addr] [amount]",
		Args:  cobra.ExactArgs(2),
		Short: "Delegate liquid tokens to a validator",
		Long: strings.TrimSpace(
			fmt.Sprintf(`Delegate an amount of liquid coins to a validator from your wallet.

Example:
$ %s tx staking delegate %s1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm 1000stake --from mykey
`,
				version.AppName, bech32PrefixValAddr,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			amount, err := sdk.ParseCoinNormalized(args[1])
			if err != nil {
				return err
			}

			delAddr := cctx.GetFromAddress()
			valAddr, err := sdk.ValAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			msg := stakingtypes.NewMsgDelegate(delAddr, valAddr, amount)

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingRedelegateCmd returns a CLI command handler for creating a MsgBeginRedelegate transaction.
func GetTxStakingRedelegateCmd() *cobra.Command {
	bech32PrefixValAddr := sdk.GetConfig().GetBech32ValidatorAddrPrefix()

	cmd := &cobra.Command{
		Use:   "redelegate [src-validator-addr] [dst-validator-addr] [amount]",
		Short: "Redelegate illiquid tokens from one validator to another",
		Args:  cobra.ExactArgs(3),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Redelegate an amount of illiquid staking tokens from one validator to another.

Example:
$ %s tx staking redelegate %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj %s1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm 100stake --from mykey
`,
				version.AppName, bech32PrefixValAddr, bech32PrefixValAddr,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			delAddr := cctx.GetFromAddress()
			valSrcAddr, err := sdk.ValAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			valDstAddr, err := sdk.ValAddressFromBech32(args[1])
			if err != nil {
				return err
			}

			amount, err := sdk.ParseCoinNormalized(args[2])
			if err != nil {
				return err
			}

			msg := stakingtypes.NewMsgBeginRedelegate(delAddr, valSrcAddr, valDstAddr, amount)

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingUnbondCmd returns a CLI command handler for creating a MsgUndelegate transaction.
func GetTxStakingUnbondCmd() *cobra.Command {
	bech32PrefixValAddr := sdk.GetConfig().GetBech32ValidatorAddrPrefix()

	cmd := &cobra.Command{
		Use:   "unbond [validator-addr] [amount]",
		Short: "Unbond shares from a validator",
		Args:  cobra.ExactArgs(2),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Unbond an amount of bonded shares from a validator.

Example:
$ %s tx staking unbond %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake --from mykey
`,
				version.AppName, bech32PrefixValAddr,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			delAddr := cctx.GetFromAddress()
			valAddr, err := sdk.ValAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			amount, err := sdk.ParseCoinNormalized(args[1])
			if err != nil {
				return err
			}

			msg := stakingtypes.NewMsgUndelegate(delAddr, valAddr, amount)

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

func GetTxStakingUnbondValidatorCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "unbond-validator",
		Short: "Unbond a validator",
		Args:  cobra.ExactArgs(0),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Unbond a validator.

Example:
$ %s tx staking unbond-validator --from mykey
`,
				version.AppName,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			msg := stakingtypes.NewMsgUnbondValidator(sdk.ValAddress(cctx.GetFromAddress()))

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingCancelUnbondingDelegation returns a CLI command handler for creating a MsgCancelUnbondingDelegation transaction.
func GetTxStakingCancelUnbondingDelegation() *cobra.Command {
	bech32PrefixValAddr := sdk.GetConfig().GetBech32ValidatorAddrPrefix()

	cmd := &cobra.Command{
		Use:   "cancel-unbond [validator-addr] [amount] [creation-height]",
		Short: "Cancel unbonding delegation and delegate back to the validator",
		Args:  cobra.ExactArgs(3),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Cancel Unbonding Delegation and delegate back to the validator.

Example:
$ %s tx staking cancel-unbond %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake 2 --from mykey
`,
				version.AppName, bech32PrefixValAddr,
			),
		),
		Example: fmt.Sprintf(`$ %s tx staking cancel-unbond %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake 2 --from mykey`,
			version.AppName, bech32PrefixValAddr),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			delAddr := cctx.GetFromAddress()
			valAddr, err := sdk.ValAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			amount, err := sdk.ParseCoinNormalized(args[1])
			if err != nil {
				return err
			}

			creationHeight, err := strconv.ParseInt(args[2], 10, 64)
			if err != nil {
				return errorsmod.Wrap(fmt.Errorf("invalid height: %d", creationHeight), "invalid height")
			}

			msg := stakingtypes.NewMsgCancelUnbondingDelegation(delAddr, valAddr, creationHeight, amount)

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

func newBuildCreateValidatorMsg(clientCtx client.Context, fs *flag.FlagSet) (*stakingtypes.MsgCreateValidator, error) {
	fAmount, _ := fs.GetString(cflags.FlagAmount)
	amount, err := sdk.ParseCoinNormalized(fAmount)
	if err != nil {
		return nil, err
	}

	valAddr := clientCtx.GetFromAddress()
	pkStr, err := fs.GetString(cflags.FlagPubKey)
	if err != nil {
		return nil, err
	}

	var pk cryptotypes.PubKey
	if err := clientCtx.Codec.UnmarshalInterfaceJSON([]byte(pkStr), &pk); err != nil {
		return nil, err
	}

	moniker, _ := fs.GetString(cflags.FlagMoniker)
	identity, _ := fs.GetString(cflags.FlagIdentity)
	website, _ := fs.GetString(cflags.FlagWebsite)
	security, _ := fs.GetString(cflags.FlagSecurityContact)
	details, _ := fs.GetString(cflags.FlagDetails)
	description := stakingtypes.NewDescription(
		moniker,
		identity,
		website,
		security,
		details,
	)

	// get the initial validator commission parameters
	rateStr, _ := fs.GetString(cflags.FlagCommissionRate)
	maxRateStr, _ := fs.GetString(cflags.FlagCommissionMaxRate)
	maxChangeRateStr, _ := fs.GetString(cflags.FlagCommissionMaxChangeRate)

	commissionRates, err := buildCommissionRates(rateStr, maxRateStr, maxChangeRateStr)
	if err != nil {
		return nil, err
	}

	msg, err := stakingtypes.NewMsgCreateValidator(
		sdk.ValAddress(valAddr), pk, amount, description, commissionRates,
	)
	if err != nil {
		return nil, err
	}
	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	return msg, nil
}

// CreateValidatorMsgFlagSet returns the flagset, particular flags, and a description of defaults
// this is anticipated to be used with the gen-tx
func CreateValidatorMsgFlagSet(ipDefault string) (fs *flag.FlagSet, defaultsDesc string) {
	fsCreateValidator := flag.NewFlagSet("", flag.ContinueOnError)
	fsCreateValidator.String(cflags.FlagIP, ipDefault, "The node's public P2P IP")
	fsCreateValidator.Uint(cflags.FlagP2PPort, 26656, "The node's public P2P port")
	fsCreateValidator.String(cflags.FlagNodeID, "", "The node's NodeID")
	fsCreateValidator.String(cflags.FlagMoniker, "", "The validator's (optional) moniker")
	fsCreateValidator.String(cflags.FlagWebsite, "", "The validator's (optional) website")
	fsCreateValidator.String(cflags.FlagSecurityContact, "", "The validator's (optional) security contact email")
	fsCreateValidator.String(cflags.FlagDetails, "", "The validator's (optional) details")
	fsCreateValidator.String(cflags.FlagIdentity, "", "The (optional) identity signature (ex. UPort or Keybase)")
	fsCreateValidator.AddFlagSet(cflags.FlagSetCommissionCreate())
	fsCreateValidator.AddFlagSet(cflags.FlagSetAmount())
	fsCreateValidator.AddFlagSet(cflags.FlagSetPublicKey())

	defaultsDesc = fmt.Sprintf(`
	delegation amount:           %s
	commission rate:             %s
	commission max rate:         %s
	commission max change rate:  %s
`, defaultAmount, defaultCommissionRate,
		defaultCommissionMaxRate, defaultCommissionMaxChangeRate)

	return fsCreateValidator, defaultsDesc
}

type TxCreateValidatorConfig struct {
	ChainID string
	NodeID  string
	Moniker string

	Amount string

	CommissionRate          string
	CommissionMaxRate       string
	CommissionMaxChangeRate string

	PubKey cryptotypes.PubKey

	IP              string
	P2PPort         uint
	Website         string
	SecurityContact string
	Details         string
	Identity        string
}

func PrepareConfigForTxCreateValidator(flagSet *flag.FlagSet, moniker, nodeID, chainID string, valPubKey cryptotypes.PubKey) (TxCreateValidatorConfig, error) {
	c := TxCreateValidatorConfig{}

	ip, err := flagSet.GetString(cflags.FlagIP)
	if err != nil {
		return c, err
	}

	if ip == "" {
		_, _ = fmt.Fprintf(os.Stderr, "failed to retrieve an external IP; the tx's memo field will be unset")
	}

	p2pPort, err := flagSet.GetUint(cflags.FlagP2PPort)
	if err != nil {
		return c, err
	}

	website, err := flagSet.GetString(cflags.FlagWebsite)
	if err != nil {
		return c, err
	}

	securityContact, err := flagSet.GetString(cflags.FlagSecurityContact)
	if err != nil {
		return c, err
	}

	details, err := flagSet.GetString(cflags.FlagDetails)
	if err != nil {
		return c, err
	}

	identity, err := flagSet.GetString(cflags.FlagIdentity)
	if err != nil {
		return c, err
	}

	c.Amount, err = flagSet.GetString(cflags.FlagAmount)
	if err != nil {
		return c, err
	}

	c.CommissionRate, err = flagSet.GetString(cflags.FlagCommissionRate)
	if err != nil {
		return c, err
	}

	c.CommissionMaxRate, err = flagSet.GetString(cflags.FlagCommissionMaxRate)
	if err != nil {
		return c, err
	}

	c.CommissionMaxChangeRate, err = flagSet.GetString(cflags.FlagCommissionMaxChangeRate)
	if err != nil {
		return c, err
	}

	c.IP = ip
	c.P2PPort = p2pPort
	c.Website = website
	c.SecurityContact = securityContact
	c.Identity = identity
	c.NodeID = nodeID
	c.PubKey = valPubKey
	c.Website = website
	c.SecurityContact = securityContact
	c.Details = details
	c.Identity = identity
	c.ChainID = chainID
	c.Moniker = moniker

	if c.Amount == "" {
		c.Amount = defaultAmount
	}

	if c.CommissionRate == "" {
		c.CommissionRate = defaultCommissionRate
	}

	if c.CommissionMaxRate == "" {
		c.CommissionMaxRate = defaultCommissionMaxRate
	}

	if c.CommissionMaxChangeRate == "" {
		c.CommissionMaxChangeRate = defaultCommissionMaxChangeRate
	}

	return c, nil
}

// BuildCreateValidatorMsg makes a new MsgCreateValidator.
func BuildCreateValidatorMsg(clientCtx client.Context, config TxCreateValidatorConfig, txBldr tx.Factory, generateOnly bool) (tx.Factory, sdk.Msg, error) {
	amounstStr := config.Amount
	amount, err := sdk.ParseCoinNormalized(amounstStr)
	if err != nil {
		return txBldr, nil, err
	}

	valAddr := clientCtx.GetFromAddress()
	description := stakingtypes.NewDescription(
		config.Moniker,
		config.Identity,
		config.Website,
		config.SecurityContact,
		config.Details,
	)

	// get the initial validator commission parameters
	rateStr := config.CommissionRate
	maxRateStr := config.CommissionMaxRate
	maxChangeRateStr := config.CommissionMaxChangeRate
	commissionRates, err := buildCommissionRates(rateStr, maxRateStr, maxChangeRateStr)
	if err != nil {
		return txBldr, nil, err
	}

	msg, err := stakingtypes.NewMsgCreateValidator(
		sdk.ValAddress(valAddr),
		config.PubKey,
		amount,
		description,
		commissionRates,
	)
	if err != nil {
		return txBldr, msg, err
	}

	if generateOnly {
		ip := config.IP
		p2pPort := config.P2PPort
		nodeID := config.NodeID

		if nodeID != "" && ip != "" && p2pPort > 0 {
			txBldr = txBldr.WithMemo(fmt.Sprintf("%s@%s:%d", nodeID, ip, p2pPort))
		}
	}

	return txBldr, msg, nil
}

// GetTxStakingTokenizeSharesCmd defines a command for tokenizing shares from a validator.
func GetTxStakingTokenizeSharesCmd() *cobra.Command {
	bech32PrefixValAddr := sdk.GetConfig().GetBech32ValidatorAddrPrefix()
	bech32PrefixAccAddr := sdk.GetConfig().GetBech32AccountAddrPrefix()

	cmd := &cobra.Command{
		Use:   "tokenize-share [validator-addr] [amount] [rewardOwner]",
		Short: "Tokenize delegation to share tokens",
		Args:  cobra.ExactArgs(3),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Tokenize delegation to share tokens.

Example:
$ %s tx staking tokenize-share %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj --from mykey
`,
				version.AppName, bech32PrefixValAddr, bech32PrefixAccAddr,
			),
		),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			delAddr := cctx.GetFromAddress()
			valAddr, err := sdk.ValAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			amount, err := sdk.ParseCoinNormalized(args[1])
			if err != nil {
				return err
			}

			rewardOwner, err := sdk.AccAddressFromBech32(args[2])
			if err != nil {
				return err
			}

			msg := &stakingtypes.MsgTokenizeShares{
				DelegatorAddress:    delAddr.String(),
				ValidatorAddress:    valAddr.String(),
				Amount:              amount,
				TokenizedShareOwner: rewardOwner.String(),
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingRedeemTokensCmd defines a command for redeeming tokens from a validator for shares.
func GetTxStakingRedeemTokensCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "redeem-tokens [amount]",
		Short: "Redeem specified amount of share tokens to delegation",
		Args:  cobra.ExactArgs(1),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Redeem specified amount of share tokens to delegation.

Example:
$ %s tx staking redeem-tokens 100sharetoken --from mykey
`,
				version.AppName,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			delAddr := cctx.GetFromAddress()

			amount, err := sdk.ParseCoinNormalized(args[0])
			if err != nil {
				return err
			}

			msg := &stakingtypes.MsgRedeemTokensForShares{
				DelegatorAddress: delAddr.String(),
				Amount:           amount,
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingTransferTokenizeShareRecordCmd defines a command to transfer ownership of TokenizeShareRecord
func GetTxStakingTransferTokenizeShareRecordCmd() *cobra.Command {
	bech32PrefixAccAddr := sdk.GetConfig().GetBech32AccountAddrPrefix()

	cmd := &cobra.Command{
		Use:   "transfer-tokenize-share-record [record-id] [new-owner]",
		Short: "Transfer ownership of TokenizeShareRecord",
		Args:  cobra.ExactArgs(2),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Transfer ownership of TokenizeShareRecord.

Example:
$ %s tx staking transfer-tokenize-share-record 1 %s1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj --from mykey
`,
				version.AppName, bech32PrefixAccAddr,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			recordID, err := strconv.Atoi(args[0])
			if err != nil {
				return err
			}

			ownerAddr, err := sdk.AccAddressFromBech32(args[1])
			if err != nil {
				return err
			}

			msg := &stakingtypes.MsgTransferTokenizeShareRecord{
				Sender:                cctx.GetFromAddress().String(),
				TokenizeShareRecordId: uint64(recordID),
				NewOwner:              ownerAddr.String(),
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingDisableTokenizeShares defines a command to disable tokenization for an address
func GetTxStakingDisableTokenizeShares() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "disable-tokenize-shares",
		Short: "Disable tokenization of shares",
		Args:  cobra.ExactArgs(0),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Disables the tokenization of shares for an address. The account
must explicitly re-enable if they wish to tokenize again, at which point they must wait
the chain's unbonding period.

Example:
$ %s tx staking disable-tokenize-shares --from mykey
`, version.AppName),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			msg := &stakingtypes.MsgDisableTokenizeShares{
				DelegatorAddress: cctx.GetFromAddress().String(),
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingEnableTokenizeShares defines a command to re-enable tokenization for an address
func GetTxStakingEnableTokenizeShares() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "enable-tokenize-shares",
		Short: "Enable tokenization of shares",
		Args:  cobra.ExactArgs(0),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Enables the tokenization of shares for an address after
it had been disable. This transaction queues the enablement of tokenization, but
the address must wait 1 unbonding period from the time of this transaction before
tokenization is permitted.

Example:
$ %s tx staking enable-tokenize-shares --from mykey
`, version.AppName),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			msg := &stakingtypes.MsgEnableTokenizeShares{
				DelegatorAddress: cctx.GetFromAddress().String(),
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

// GetTxStakingValidatorBondCmd defines a command to mark a delegation as a validator self bond
func GetTxStakingValidatorBondCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "validator-bond [validator]",
		Short: "Mark a delegation as a validator self-bond",
		Args:  cobra.ExactArgs(1),
		Long: strings.TrimSpace(
			fmt.Sprintf(`Mark a delegation as a validator self-bond.

Example:
$ %s tx staking validator-bond cosmosvaloper13h5xdxhsdaugwdrkusf8lkgu406h8t62jkqv3h --from mykey
`,
				version.AppName,
			),
		),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			msg := &stakingtypes.MsgValidatorBond{
				DelegatorAddress: cctx.GetFromAddress().String(),
				ValidatorAddress: args[0],
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

func buildCommissionRates(rateStr, maxRateStr, maxChangeRateStr string) (commission stakingtypes.CommissionRates, err error) {
	if rateStr == "" || maxRateStr == "" || maxChangeRateStr == "" {
		return commission, errors.New("must specify all validator commission parameters")
	}

	rate, err := sdkmath.LegacyNewDecFromStr(rateStr)
	if err != nil {
		return commission, err
	}

	maxRate, err := sdkmath.LegacyNewDecFromStr(maxRateStr)
	if err != nil {
		return commission, err
	}

	maxChangeRate, err := sdkmath.LegacyNewDecFromStr(maxChangeRateStr)
	if err != nil {
		return commission, err
	}

	commission = stakingtypes.NewCommissionRates(rate, maxRate, maxChangeRate)

	return commission, nil
}
