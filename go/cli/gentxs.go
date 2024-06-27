package cli

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	tmtypes "github.com/cometbft/cometbft/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/server"
	"github.com/cosmos/cosmos-sdk/x/genutil"
	"github.com/cosmos/cosmos-sdk/x/genutil/types"
)

const flagGenTxDir = "gentx-dir"

// CollectGenTxsCmd - return the cobra command to collect genesis transactions
func CollectGenTxsCmd(genBalIterator types.GenesisBalancesIterator, defaultNodeHome string, validator types.MessageValidator) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "collect-gentxs",
		Short: "Collect genesis txs and output a genesis.json file",
		RunE: func(cmd *cobra.Command, _ []string) error {
			serverCtx := server.GetServerContextFromCmd(cmd)
			config := serverCtx.Config

			clientCtx := client.GetClientContextFromCmd(cmd)
			cdc := clientCtx.Codec

			config.SetRoot(clientCtx.HomeDir)

			nodeID, valPubKey, err := genutil.InitializeNodeValidatorFiles(config)
			if err != nil {
				return fmt.Errorf("%w: failed to initialize node validator files", err)
			}

			genDoc, err := tmtypes.GenesisDocFromFile(config.GenesisFile())
			if err != nil {
				return fmt.Errorf("%w: failed to read genesis doc from file", err)
			}

			genTxDir, _ := cmd.Flags().GetString(flagGenTxDir)
			genTxsDir := genTxDir
			if genTxsDir == "" {
				genTxsDir = filepath.Join(config.RootDir, "config", "gentx")
			}

			toPrint := newPrintInfo(config.Moniker, genDoc.ChainID, nodeID, genTxsDir, json.RawMessage(""))
			initCfg := types.NewInitConfig(genDoc.ChainID, genTxsDir, nodeID, valPubKey)

			appMessage, err := genutil.GenAppStateFromConfig(cdc,
				clientCtx.TxConfig,
				config, initCfg, *genDoc, genBalIterator, validator)
			if err != nil {
				return fmt.Errorf("%w: failed to get genesis app state from config", err)
			}

			toPrint.AppMessage = appMessage

			return displayInfo(toPrint)
		},
	}

	cmd.Flags().String(FlagHome, defaultNodeHome, "The application home directory")
	cmd.Flags().String(flagGenTxDir, "", "override default \"gentx\" directory from which collect and execute genesis transactions; default [--home]/config/gentx/")

	return cmd
}

type printInfo struct {
	Moniker    string          `json:"moniker" yaml:"moniker"`
	ChainID    string          `json:"chain_id" yaml:"chain_id"`
	NodeID     string          `json:"node_id" yaml:"node_id"`
	GenTxsDir  string          `json:"gentxs_dir" yaml:"gentxs_dir"`
	AppMessage json.RawMessage `json:"app_message" yaml:"app_message"`
}

func newPrintInfo(moniker, chainID, nodeID, genTxsDir string, appMessage json.RawMessage) printInfo {
	return printInfo{
		Moniker:    moniker,
		ChainID:    chainID,
		NodeID:     nodeID,
		GenTxsDir:  genTxsDir,
		AppMessage: appMessage,
	}
}

func displayInfo(info printInfo) error {
	out, err := json.MarshalIndent(info, "", " ")
	if err != nil {
		return err
	}

	_, err = fmt.Fprintf(os.Stderr, "%s\n", sdk.MustSortJSON(out))

	return err
}
