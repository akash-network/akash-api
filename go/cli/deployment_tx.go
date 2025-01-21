package cli

import (
	"errors"
	"fmt"
	"os"
	"reflect"
	"strings"
	"time"

	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/authz"

	"pkg.akt.dev/go/sdl"

	dv1 "pkg.akt.dev/go/node/deployment/v1"
	dv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
	"pkg.akt.dev/go/node/types/constants"
	cutils "pkg.akt.dev/go/util/tls"

	cflags "pkg.akt.dev/go/cli/flags"
)

var (
	errDeploymentUpdate              = errors.New("deployment update failed")
	errDeploymentUpdateGroupsChanged = fmt.Errorf("%w: groups are different than existing deployment, you cannot update groups", errDeploymentUpdate)
)

// GetTxDeploymentCmds returns the transaction commands for this module
func GetTxDeploymentCmds() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        dv1.ModuleName,
		Short:                      "Deployment transaction subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		GetTxDeploymentCreateCmd(),
		GetTxDeploymentUpdateCmd(),
		GetTxDeploymentDepositCmd(),
		GetTxDeploymentCloseCmd(),
		GetTxDeploymentGroupCmds(),
		GetTxDeploymentAuthzCmd(),
	)
	return cmd
}

func GetTxDeploymentCreateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "create [sdl-file]",
		Short:             "Create deployment",
		Args:              cobra.ExactArgs(1),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			// first lets validate certificate exists for given account
			if _, err := cutils.LoadAndQueryCertificateForAccount(ctx, cctx, nil); err != nil {
				if os.IsNotExist(err) {
					err = fmt.Errorf("no certificate file found for account %q.\n"+
						"consider creating it as certificate required to submit manifest", cctx.FromAddress.String())
				}

				return err
			}

			sdlManifest, err := sdl.ReadFile(args[0])
			if err != nil {
				return err
			}

			groups, err := sdlManifest.DeploymentGroups()
			if err != nil {
				return err
			}

			warnIfGroupVolumesExceeds(cctx, groups)

			id, err := cflags.DeploymentIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			// Default DSeq to the current block height
			if id.DSeq == 0 {
				syncInfo, err := cl.Node().SyncInfo(ctx)
				if err != nil {
					return err
				}

				if syncInfo.CatchingUp {
					return fmt.Errorf("cannot generate DSEQ from last block height. node is catching up")
				}

				id.DSeq = uint64(syncInfo.LatestBlockHeight) // nolint: gosec
			}

			version, err := sdlManifest.Version()
			if err != nil {
				return err
			}

			deposit, err := DetectDeploymentDeposit(ctx, cmd.Flags(), cl.Query())
			if err != nil {
				return err
			}

			depositorAcc, err := cflags.DepositorFromFlags(cmd.Flags(), id.Owner)
			if err != nil {
				return err
			}

			msg := &dv1beta4.MsgCreateDeployment{
				ID:        id,
				Hash:      version,
				Groups:    make(dv1beta4.GroupSpecs, 0, len(groups)),
				Deposit:   deposit,
				Depositor: depositorAcc,
			}

			for _, group := range groups {
				msg.Groups = append(msg.Groups, group)
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
	cflags.AddDeploymentIDFlags(cmd.Flags())
	cflags.AddDepositorFlag(cmd.Flags())
	cflags.AddDepositFlags(cmd.Flags())

	return cmd
}

func GetTxDeploymentDepositCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "deposit <amount>",
		Short:             "Deposit funds to deployment",
		Args:              cobra.ExactArgs(1),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := cflags.DeploymentIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			deposit, err := sdk.ParseCoinNormalized(args[0])
			if err != nil {
				return err
			}

			depositorAcc, err := cflags.DepositorFromFlags(cmd.Flags(), id.Owner)
			if err != nil {
				return err
			}

			msg := &dv1.MsgDepositDeployment{
				ID:        id,
				Amount:    deposit,
				Depositor: depositorAcc,
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddDeploymentIDFlags(cmd.Flags())
	cflags.AddDepositorFlag(cmd.Flags())

	return cmd
}

func GetTxDeploymentCloseCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "close",
		Short:             "Close deployment",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := cflags.DeploymentIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			msg := &dv1beta4.MsgCloseDeployment{ID: id}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddDeploymentIDFlags(cmd.Flags())
	return cmd
}

func GetTxDeploymentUpdateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "update [sdl-file]",
		Short:             "update deployment",
		Args:              cobra.ExactArgs(1),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			id, err := cflags.DeploymentIDFromFlags(cmd.Flags(), cflags.WithOwner(cctx.FromAddress))
			if err != nil {
				return err
			}

			sdlManifest, err := sdl.ReadFile(args[0])
			if err != nil {
				return err
			}

			hash, err := sdlManifest.Version()
			if err != nil {
				return err
			}

			groups, err := sdlManifest.DeploymentGroups()
			if err != nil {
				return err
			}

			// Query the RPC node to make sure the existing groups are identical
			existingDeployment, err := cl.Query().Deployment().Deployment(cmd.Context(), &dv1beta4.QueryDeploymentRequest{
				ID: id,
			})
			if err != nil {
				return err
			}

			// do not send the transaction if the groups have changed
			existingGroups := existingDeployment.GetGroups()
			if len(existingGroups) != len(groups) {
				return errDeploymentUpdateGroupsChanged
			}

			for i, existingGroup := range existingGroups {
				if reflect.DeepEqual(groups[i], existingGroup.GroupSpec) {
					return errDeploymentUpdateGroupsChanged
				}
			}

			warnIfGroupVolumesExceeds(cctx, groups)

			msg := &dv1beta4.MsgUpdateDeployment{
				ID:   id,
				Hash: hash,
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	cflags.AddDeploymentIDFlags(cmd.Flags())

	return cmd
}

func GetTxDeploymentGroupCmds() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "group",
		Short: "Modify a Deployment's specific Group",
	}

	cmd.AddCommand(
		GetTxDeploymentGroupCloseCmd(),
		GetDeploymentGroupPauseCmd(),
		GetDeploymentGroupStartCmd(),
	)

	return cmd
}

func GetTxDeploymentGroupCloseCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "close",
		Short:             "close a Deployment's specific Group",
		Example:           "akash tx deployment group-close --owner=[Account Address] --dseq=[uint64] --gseq=[uint32]",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)

			id, err := cflags.GroupIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			msg := &dv1beta4.MsgCloseGroup{
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
	cflags.AddGroupIDFlags(cmd.Flags())
	cflags.MarkReqGroupIDFlags(cmd)

	return cmd
}

func GetDeploymentGroupPauseCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "pause",
		Short:             "pause a Deployment's specific Group",
		Example:           "akash tx deployment group pause --owner=[Account Address] --dseq=[uint64] --gseq=[uint32]",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)

			id, err := cflags.GroupIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			msg := &dv1beta4.MsgPauseGroup{
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
	cflags.AddGroupIDFlags(cmd.Flags())
	cflags.MarkReqGroupIDFlags(cmd)

	return cmd
}

func GetDeploymentGroupStartCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "start",
		Short:             "start a Deployment's specific Group",
		Example:           "akash tx deployment group pause --owner=[Account Address] --dseq=[uint64] --gseq=[uint32]",
		Args:              cobra.ExactArgs(0),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)

			id, err := cflags.GroupIDFromFlags(cmd.Flags())
			if err != nil {
				return err
			}

			msg := &dv1beta4.MsgStartGroup{
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
	cflags.AddGroupIDFlags(cmd.Flags())
	cflags.MarkReqGroupIDFlags(cmd)

	return cmd
}

func GetTxDeploymentAuthzCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "authz",
		Short: "Deployment authorization transaction subcommands",
		Long:  "Authorize and revoke access to pay for deployments on behalf of your address",
	}

	cmd.AddCommand(
		GetTxDeploymentGrantAuthorizationCmd(),
		GetTxDeploymentRevokeAuthorizationCmd(),
	)

	return cmd
}

func GetTxDeploymentGrantAuthorizationCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "grant <grantee> <spend_limit> --from <granter>",
		Short: "Grant deposit deployment authorization to an address",
		Long: strings.TrimSpace(
			fmt.Sprintf(`grant authorization to an address to pay for a deployment on your behalf:

Examples:
 $ akash tx %s authz grant akash1skjw.. 50akt --from=akash1skl..
 $ akash tx %s authz grant akash1skjw.. 50akt --from=akash1skl.. --expiration=1661020200
	`, dv1.ModuleName, dv1.ModuleName),
		),
		Args:              cobra.ExactArgs(2),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			grantee, err := sdk.AccAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			spendLimit, err := sdk.ParseCoinNormalized(args[1])
			if err != nil {
				return err
			}
			if spendLimit.IsZero() || spendLimit.IsNegative() {
				return fmt.Errorf("spend-limit should be greater than zero, got: %s", spendLimit)
			}

			exp, err := cmd.Flags().GetInt64(cflags.FlagExpiration)
			if err != nil {
				return err
			}

			granter := cctx.GetFromAddress()
			authorization := dv1.NewDepositAuthorization(spendLimit)

			expiry := time.Unix(exp, 0)
			msg, err := authz.NewMsgGrant(granter, grantee, authorization, &expiry)
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

	cflags.AddTxFlagsToCmd(cmd)
	cmd.Flags().Int64(cflags.FlagExpiration, time.Now().AddDate(1, 0, 0).Unix(), "The Unix timestamp. Default is one year.")
	_ = cmd.MarkFlagRequired(cflags.FlagFrom)

	return cmd
}

func GetTxDeploymentRevokeAuthorizationCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "revoke [grantee] --from=[granter]",
		Short: "Revoke deposit deployment authorization given to an address",
		Long: strings.TrimSpace(
			fmt.Sprintf(`revoke deposit deployment authorization from a granter to a grantee:
Example:
 $ akash tx %s authz revoke akash1skj.. --from=akash1skj..
			`, dv1.ModuleName),
		),
		Args:              cobra.ExactArgs(1),
		PersistentPreRunE: TxPersistentPreRunE,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			grantee, err := sdk.AccAddressFromBech32(args[0])
			if err != nil {
				return err
			}

			granter := cctx.GetFromAddress()
			msgTypeURL := (&dv1.DepositAuthorization{}).MsgTypeURL()
			msg := authz.NewMsgRevoke(granter, grantee, msgTypeURL)

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{&msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)
	_ = cmd.MarkFlagRequired(cflags.FlagFrom)

	return cmd
}

func warnIfGroupVolumesExceeds(cctx sdkclient.Context, dgroups []dv1beta4.GroupSpec) {
	for _, group := range dgroups {
		for _, resources := range group.GetResourceUnits() {
			if len(resources.Resources.Storage) > constants.DefaultMaxGroupVolumes {
				_ = cctx.PrintString(fmt.Sprintf("amount of volumes for service exceeds recommended value (%v > %v)\n"+
					"there may no providers on network to bid", len(resources.Resources.Storage), constants.DefaultMaxGroupVolumes))
			}
		}
	}
}
