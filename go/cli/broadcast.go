package cli

import (
	"errors"
	"strings"

	"github.com/cosmos/cosmos-sdk/client/flags"
	authclient "github.com/cosmos/cosmos-sdk/x/auth/client"
	"github.com/spf13/cobra"

	cflags "pkg.akt.dev/go/cli/flags"
)

// GetBroadcastCommand returns the tx broadcast command.
func GetBroadcastCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "broadcast [file_path]",
		Short: "Broadcast transactions generated offline",
		Long: strings.TrimSpace(`Broadcast transactions created with the --generate-only
flag and signed with the sign command. Read a transaction from [file_path] and
broadcast it to a node. If you supply a dash (-) argument in place of an input
filename, the command reads from standard input.

$ <appd> tx broadcast ./mytxn.json
`),
		Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			if offline, _ := cmd.Flags().GetBool(cflags.FlagOffline); offline {
				return errors.New("cannot broadcast tx during offline mode")
			}

			ctx := cmd.Context()

			cl := MustClientFromContext(ctx)

			cctx := cl.ClientContext()

			stdTx, err := authclient.ReadTxFromFile(cctx, args[0])
			if err != nil {
				return err
			}

			res, err := cl.Tx().BroadcastTx(ctx, stdTx)
			if err != nil {
				return err
			}

			return cl.PrintMessage(res)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

