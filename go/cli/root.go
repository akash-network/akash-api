package cli

import (
	"context"
	"os"

	"github.com/rs/zerolog"
	"github.com/spf13/cobra"

	cmtcfg "github.com/cometbft/cometbft/config"
	cmtcli "github.com/cometbft/cometbft/libs/cli"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdkserver "github.com/cosmos/cosmos-sdk/server"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"

	cflags "pkg.akt.dev/go/cli/flags"
	"pkg.akt.dev/go/sdkutil"
)

var (
	DefaultHome = os.ExpandEnv("$HOME/.akash")
)

// GetPersistentPreRunE persistent prerun hook for root command
func GetPersistentPreRunE(encodingConfig sdkutil.EncodingConfig, envPrefixes []string, defaultHome string) func(*cobra.Command, []string) error {
	return func(cmd *cobra.Command, _ []string) error {
		if err := InterceptConfigsPreRunHandler(cmd, envPrefixes, false, "", nil); err != nil {
			return err
		}

		initClientCtx := sdkclient.Context{}.
			WithCodec(encodingConfig.Codec).
			WithInterfaceRegistry(encodingConfig.InterfaceRegistry).
			WithTxConfig(encodingConfig.TxConfig).
			WithLegacyAmino(encodingConfig.Amino).
			WithInput(os.Stdin).
			WithAccountRetriever(authtypes.AccountRetriever{}).
			WithBroadcastMode(cflags.BroadcastBlock).
			WithHomeDir(defaultHome)

		if err := sdkclient.SetCmdClientContextHandler(initClientCtx, cmd); err != nil {
			return err
		}

		return nil
	}
}

// Execute executes the root command.
func Execute(rootCmd *cobra.Command, envPrefix string) error {
	// Create and set a client.Context on the command's Context. During the pre-run
	// of the root command, a default initialized client.Context is provided to
	// seed child command execution with values such as AccountRetriever, Keyring,
	// and a Tendermint RPC. This requires the use of a pointer reference when
	// getting and setting the client.Context. Ideally, we utilize
	// https://github.com/spf13/cobra/pull/1118.

	return ExecuteWithCtx(context.Background(), rootCmd, envPrefix)
}

// ExecuteWithCtx executes the root command.
func ExecuteWithCtx(ctx context.Context, rootCmd *cobra.Command, envPrefix string) error {
	// Create and set a client.Context on the command's Context. During the pre-run
	// of the root command, a default initialized client.Context is provided to
	// seed child command execution with values such as AccountRetriver, Keyring,
	// and a Tendermint RPC. This requires the use of a pointer reference when
	// getting and setting the client.Context. Ideally, we utilize
	// https://github.com/spf13/cobra/pull/1118.
	srvCtx := sdkserver.NewDefaultContext()

	ctx = context.WithValue(ctx, sdkclient.ClientContextKey, &sdkclient.Context{})
	ctx = context.WithValue(ctx, sdkserver.ServerContextKey, srvCtx)

	rootCmd.PersistentFlags().String(cflags.FlagLogLevel, zerolog.InfoLevel.String(), "The logging level (trace|debug|info|warn|error|fatal|panic)")
	rootCmd.PersistentFlags().String(cflags.FlagLogFormat, cmtcfg.LogFormatPlain, "The logging format (json|plain)")
	rootCmd.PersistentFlags().Bool(cflags.FlagLogColor, false, "Pretty logging output. Applied only when log_format=plain")
	rootCmd.PersistentFlags().String(cflags.FlagLogTimestamp, "", "Add timestamp prefix to the logs (rfc3339|rfc3339nano|kitchen)")

	executor := cmtcli.PrepareBaseCmd(rootCmd, envPrefix, DefaultHome)
	return executor.ExecuteContext(ctx)
}
