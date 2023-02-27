package sdkutil

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitSDKConfig configures address prefixes for validator, accounts and consensus nodes
func InitSDKConfig() {
	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(Bech32PrefixAccAddr, Bech32PrefixAccPub)
	config.SetBech32PrefixForValidator(Bech32PrefixValAddr, Bech32PrefixValPub)
	config.SetBech32PrefixForConsensusNode(Bech32PrefixConsAddr, Bech32PrefixConsPub)

	config.Seal()
}
