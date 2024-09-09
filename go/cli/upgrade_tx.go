package cli

import (
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
	"github.com/spf13/pflag"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/gov/client/cli"
	gov "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"
	"github.com/cosmos/cosmos-sdk/x/upgrade/plan"
	"github.com/cosmos/cosmos-sdk/x/upgrade/types"

	cflags "pkg.akt.dev/go/cli/flags"
)

// GetTxUpgradeCmd returns the transaction commands for this module
func GetTxUpgradeCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   types.ModuleName,
		Short: "Upgrade transaction subcommands",
	}

	return cmd
}

// GetTxUpgradeSubmitLegacyUpgradeProposal implements a command handler for submitting a software upgrade proposal transaction.
func GetTxUpgradeSubmitLegacyUpgradeProposal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "software-upgrade [name] (--upgrade-height [height]) (--upgrade-info [info]) [flags]",
		Args:  cobra.ExactArgs(1),
		Short: "Submit a software upgrade proposal",
		Long: "Submit a software upgrade along with an initial deposit.\n" +
			"Please specify a unique name and height for the upgrade to take effect.\n" +
			"You may include info to reference a binary download link, in a format compatible with: https://github.com/cosmos/cosmos-sdk/tree/main/cosmovisor",
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			name := args[0]
			content, err := upgradeParseArgsToContent(cmd.Flags(), name)
			if err != nil {
				return err
			}
			noValidate, err := cmd.Flags().GetBool(cflags.FlagNoValidate)
			if err != nil {
				return err
			}
			if !noValidate {
				prop := content.(*types.SoftwareUpgradeProposal) //nolint:staticcheck // we are intentionally using a deprecated proposal type.
				var daemonName string
				if daemonName, err = cmd.Flags().GetString(cflags.FlagDaemonName); err != nil {
					return err
				}
				var planInfo *plan.Info
				if planInfo, err = plan.ParseInfo(prop.Plan.Info); err != nil {
					return err
				}
				if err = planInfo.ValidateFull(daemonName); err != nil {
					return err
				}
			}

			from := cctx.GetFromAddress()

			depositStr, err := cmd.Flags().GetString(cli.FlagDeposit)
			if err != nil {
				return err
			}
			deposit, err := sdk.ParseCoinsNormalized(depositStr)
			if err != nil {
				return err
			}

			msg, err := gov.NewMsgSubmitProposal(content, deposit, from)
			if err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cmd.Flags().String(cflags.FlagTitle, "", "title of proposal")
	cmd.Flags().String(cflags.FlagDescription, "", "description of proposal") // nolint:staticcheck // we are intentionally using a deprecated flag here.
	cmd.Flags().String(cflags.FlagDeposit, "", "deposit of proposal")
	cmd.Flags().Int64(cflags.FlagUpgradeHeight, 0, "The height at which the upgrade must happen")                       // nolint:staticcheck
	cmd.Flags().String(cflags.FlagUpgradeInfo, "", "Info for the upgrade plan such as new version download urls, etc.") // nolint:staticcheck
	cmd.Flags().Bool(cflags.FlagNoValidate, false, "Skip validation of the upgrade info")
	cmd.Flags().String(cflags.FlagDaemonName, getDefaultDaemonName(), "The name of the executable being upgraded (for upgrade-info validation). Default is the DAEMON_NAME env var if set, or else this executable")

	return cmd
}

// GetTxUpgradeSubmitLegacyCancelUpgradeProposal implements a command handler for submitting a software upgrade cancel proposal transaction.
// Deprecated: please use NewCmdSubmitCancelUpgradeProposal instead.
func GetTxUpgradeSubmitLegacyCancelUpgradeProposal() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "cancel-software-upgrade [flags]",
		Args:              cobra.ExactArgs(0),
		Short:             "Cancel the current software upgrade proposal",
		Long:              "Cancel a software upgrade along with an initial deposit.",
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			from := cctx.GetFromAddress()

			depositStr, err := cmd.Flags().GetString(cli.FlagDeposit)
			if err != nil {
				return err
			}

			deposit, err := sdk.ParseCoinsNormalized(depositStr)
			if err != nil {
				return err
			}

			title, err := cmd.Flags().GetString(cli.FlagTitle)
			if err != nil {
				return err
			}

			description, err := cmd.Flags().GetString(cli.FlagDescription) // nolint:staticcheck // we are intentionally using a deprecated flag here.
			if err != nil {
				return err
			}

			content := types.NewCancelSoftwareUpgradeProposal(title, description)

			msg, err := gov.NewMsgSubmitProposal(content, deposit, from)
			if err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cmd.Flags().String(cflags.FlagTitle, "", "title of proposal")
	cmd.Flags().String(cflags.FlagDescription, "", "description of proposal") // nolint:staticcheck // we are intentionally using a deprecated flag here.
	cmd.Flags().String(cflags.FlagDeposit, "", "deposit of proposal")
	_ = cmd.MarkFlagRequired(cflags.FlagTitle)
	_ = cmd.MarkFlagRequired(cflags.FlagDescription) // nolint:staticcheck // we are intentionally using a deprecated flag here.

	return cmd
}

// getDefaultDaemonName gets the default name to use for the daemon.
// If a DAEMON_NAME env var is set, that is used.
// Otherwise, the last part of the currently running executable is used.
func getDefaultDaemonName() string {
	// DAEMON_NAME is specifically used here to correspond with the Cosmovisor setup env vars.
	name := os.Getenv("DAEMON_NAME")
	if len(name) == 0 {
		_, name = filepath.Split(os.Args[0])
	}
	return name
}

func upgradeParseArgsToContent(fs *pflag.FlagSet, name string) (gov.Content, error) {
	title, err := fs.GetString(cli.FlagTitle)
	if err != nil {
		return nil, err
	}

	description, err := fs.GetString(cli.FlagDescription) //nolint:staticcheck // we are intentionally using a deprecated flag here.
	if err != nil {
		return nil, err
	}

	height, err := fs.GetInt64(cflags.FlagUpgradeHeight) //nolint:staticcheck
	if err != nil {
		return nil, err
	}

	info, err := fs.GetString(cflags.FlagUpgradeInfo) //nolint:staticcheck
	if err != nil {
		return nil, err
	}

	plan := types.Plan{Name: name, Height: height, Info: info}
	content := types.NewSoftwareUpgradeProposal(title, description, plan)

	return content, nil
}
