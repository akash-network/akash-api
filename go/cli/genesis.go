package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/cosmos/cosmos-sdk/x/genutil"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/types/module"
	gentypes "github.com/cosmos/cosmos-sdk/x/genutil/types"
)

func GetGenesisCmd(
	mbm module.BasicManager,
	txCfg client.TxEncodingConfig,
	defaultNodeHome string,
) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "genesis",
		Short:                      "Genesis control commands",
		DisableFlagParsing:         false,
		SuggestionsMinimumDistance: 2,
		RunE:                       ValidateCmd,
	}

	gentxModule := mbm[gentypes.ModuleName].(genutil.AppModuleBasic)

	cmd.AddCommand(
		getGenesisValidateCmd(mbm),
		GetGenesisGenTxCmd(mbm, txCfg, banktypes.GenesisBalancesIterator{}, defaultNodeHome),
		GetGenesisAddAccountCmd(defaultNodeHome),
		GetGenesisInitCmd(mbm, defaultNodeHome),
		GetGenesisCollectCmd(banktypes.GenesisBalancesIterator{}, defaultNodeHome, gentxModule.GenTxValidator),
	)

	return cmd
}
