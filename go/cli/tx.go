package cli

import (
	"context"
	"errors"

	"github.com/spf13/cobra"

	"pkg.akt.dev/go/node/client/v1beta3"

	cflags "pkg.akt.dev/go/cli/flags"
)

type ContextType string

const (
	ContextTypeClient      = ContextType("context-client")
	ContextTypeQueryClient = ContextType("context-query-client")
)

func TxPersistentPreRunE(cmd *cobra.Command, _ []string) error {
	ctx := cmd.Context()

	cctx, err := GetClientTxContext(cmd)
	if err != nil {
		return err
	}

	if cctx.Codec == nil {
		return errors.New("codec is not initialized")
	}

	if cctx.LegacyAmino == nil {
		return errors.New("legacy amino codec is not initialized")
	}

	opts, err := cflags.ClientOptionsFromFlags(cmd.Flags())
	if err != nil {
		return err
	}

	cl, err := DiscoverClient(ctx, cctx, opts...)
	if err != nil {
		return err
	}

	ctx = context.WithValue(ctx, ContextTypeClient, cl)

	cmd.SetContext(ctx)

	return nil
}

func TxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "tx",
		Short: "Transactions subcommands",
	}

	cmd.AddCommand(
		GetTxAuthzCmd(),
		GetTxBankCmd(),
		GetTxCrisisCmd(),
		getTxDistributionCmd(),
		GetTxFeegrantCmd(),
		GetTxEvidenceCmd([]*cobra.Command{}),
		GetSignCommand(),
		GetSignBatchCommand(),
		GetAuthMultiSignCmd(),
		GetValidateSignaturesCommand(),
		GetBroadcastCommand(),
		GetEncodeCommand(),
		GetDecodeCommand(),
		GetTxVestingCmd(),
		cflags.LineBreak,
		GetTxAuditCmd(),
		GetTxCertCmd(),
		GetTxDeploymentCmds(),
		GetTxMarketCmds(),
		GetTxProviderCmd(),
		GetTxGovCmd(
			[]*cobra.Command{
				GetTxParamsSubmitParamChangeProposalCmd(),
				GetTxUpgradeSubmitLegacyUpgradeProposal(),
				GetTxUpgradeSubmitLegacyCancelUpgradeProposal(),
			},
		),
		GetTxSlashingCmd(),
		GetTxStakingCmd(),
	)

	cmd.PersistentFlags().String(cflags.FlagChainID, "", "The network chain ID")

	return cmd
}

func MustClientFromContext(ctx context.Context) v1beta3.Client {
	val := ctx.Value(ContextTypeClient)
	if val == nil {
		panic("context does not have client set")
	}

	res, valid := val.(v1beta3.Client)
	if !valid {
		panic("invalid context value")
	}

	return res
}

func MustQueryClientFromContext(ctx context.Context) v1beta3.LightClient {
	val := ctx.Value(ContextTypeQueryClient)
	if val == nil {
		panic("context does not have client set")
	}

	res, valid := val.(v1beta3.LightClient)
	if !valid {
		panic("invalid context value")
	}

	return res
}
