package cli

import (
	"fmt"
	"math/big"

	"github.com/spf13/cobra"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"

	cflags "pkg.akt.dev/go/cli/flags"
	types "pkg.akt.dev/go/node/cert/v1"
	utiltls "pkg.akt.dev/go/util/tls"
)

func GetCertQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Certificate query commands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}

	cmd.AddCommand(
		cmdGetCertificates(),
	)

	return cmd
}

func cmdGetCertificates() *cobra.Command {
	cmd := &cobra.Command{
		Use:          "list",
		Short:        "Query for all certificates",
		SilenceUsage: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustQueryClientFromContext(ctx)

			pageReq, err := sdkclient.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &types.QueryCertificatesRequest{
				Pagination: pageReq,
			}

			if value := cmd.Flag("owner").Value.String(); value != "" {
				var owner sdk.Address
				if owner, err = sdk.AccAddressFromBech32(value); err != nil {
					return err
				}

				params.Filter.Owner = owner.String()
			}

			if value := cmd.Flag("serial").Value.String(); value != "" {
				if params.Filter.Owner == "" {
					return fmt.Errorf("--serial flag requires --owner to be set")
				}
				val, valid := new(big.Int).SetString(value, 10)
				if !valid {
					return utiltls.ErrInvalidSerialFlag
				}

				params.Filter.Serial = val.String()
			}

			if value := cmd.Flag("state").Value.String(); value != "" {
				if val, exists := types.State_value[value]; !exists || types.State(val) == types.CertificateStateInvalid {
					return fmt.Errorf("invalid value of --state flag. expected valid|revoked")
				}

				params.Filter.State = value
			}

			res, err := cl.Query().Certs().Certificates(cmd.Context(), params)
			if err != nil {
				return err
			}

			return cl.ClientContext().PrintProto(res)
		},
	}

	cflags.AddQueryFlagsToCmd(cmd)
	cflags.AddPaginationFlagsToCmd(cmd, "certificates")

	cmd.Flags().String("serial", "", "filter certificates by serial number")
	cmd.Flags().String("owner", "", "filter certificates by owner")
	cmd.Flags().String("state", "", "filter certificates by valid|revoked")

	return cmd
}
