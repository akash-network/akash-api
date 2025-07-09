package cli

import (
	"encoding/json"
	"fmt"
	"path/filepath"

	"github.com/spf13/cobra"

	tmtypes "github.com/cometbft/cometbft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/server"
	"github.com/cosmos/cosmos-sdk/x/genutil"
	"github.com/cosmos/cosmos-sdk/x/genutil/types"

	cflags "pkg.akt.dev/go/cli/flags"
)

// GetGenesisCollectCmd - return the cobra command to collect genesis transactions
func GetGenesisCollectCmd(genBalIterator types.GenesisBalancesIterator, defaultNodeHome string, validator types.MessageValidator) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "collect",
		Short: "Collect genesis txs and output a genesis.json file",
		RunE: func(cmd *cobra.Command, _ []string) error {
			sctx := server.GetServerContextFromCmd(cmd)
			cctx := client.GetClientContextFromCmd(cmd)

			config := sctx.Config
			cdc := cctx.Codec

			config.SetRoot(cctx.HomeDir)

			nodeID, valPubKey, err := genutil.InitializeNodeValidatorFiles(config)
			if err != nil {
				return fmt.Errorf("%w: failed to initialize node validator files", err)
			}

			genDoc, err := tmtypes.GenesisDocFromFile(config.GenesisFile())
			if err != nil {
				return fmt.Errorf("%w: failed to read genesis doc from file", err)
			}

			genTxDir, _ := cmd.Flags().GetString(cflags.FlagGenTxDir)
			genTxsDir := genTxDir
			if genTxsDir == "" {
				genTxsDir = filepath.Join(config.RootDir, "config", "gentx")
			}

			toPrint := newPrintInfo(config.Moniker, genDoc.ChainID, nodeID, genTxsDir, json.RawMessage(""))
			initCfg := types.NewInitConfig(genDoc.ChainID, genTxsDir, nodeID, valPubKey)

			appMessage, err := genutil.GenAppStateFromConfig(cdc,
				cctx.TxConfig,
				config, initCfg, *genDoc, genBalIterator, validator)
			if err != nil {
				return fmt.Errorf("%w: failed to get genesis app state from config", err)
			}

			toPrint.AppMessage = appMessage

			return displayInfo(toPrint)
		},
	}

	cmd.Flags().String(cflags.FlagHome, defaultNodeHome, "The application home directory")
	cmd.Flags().String(cflags.FlagGenTxDir, "", "override default \"gentx\" directory from which collect and execute genesis transactions; default [--home]/config/gentx/")

	return cmd
}
