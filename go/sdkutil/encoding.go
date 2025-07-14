package sdkutil

import (
	"cosmossdk.io/x/tx/signing"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/std"
	"github.com/cosmos/cosmos-sdk/types/module"
	"github.com/cosmos/cosmos-sdk/x/auth/tx"
)

// EncodingConfig specifies the concrete encoding types to use for a given app.
// This is provided for compatibility between protobuf and amino implementations.
type EncodingConfig struct {
	InterfaceRegistry types.InterfaceRegistry
	Codec             codec.Codec
	TxConfig          client.TxConfig
	SigningOptions    signing.Options
	Amino             *codec.LegacyAmino
}

// MakeEncodingConfig creates an EncodingConfig for a proto based test configuration.
func MakeEncodingConfig(modules ...module.AppModuleBasic) EncodingConfig {
	aminoCodec := codec.NewLegacyAmino()
	co := NewCodecOptions()

	interfaceRegistry := co.NewInterfaceRegistry()
	codec := codec.NewProtoCodec(interfaceRegistry)

	signingCtx, err := signing.NewContext(co.Options)
	if err != nil {
		panic(err)
	}

	txConfig, err := tx.NewTxConfigWithOptions(codec, tx.ConfigOptions{
		EnabledSignModes: tx.DefaultSignModes,
		SigningOptions:   &co.Options,
		SigningContext:   signingCtx,
	})
	if err != nil {
		panic(err)
	}

	encCfg := EncodingConfig{
		InterfaceRegistry: interfaceRegistry,
		Codec:             codec,
		TxConfig:          txConfig,
		Amino:             aminoCodec,
		SigningOptions:    co.Options,
	}

	mb := module.NewBasicManager(modules...)

	std.RegisterLegacyAminoCodec(encCfg.Amino)
	std.RegisterInterfaces(encCfg.InterfaceRegistry)
	mb.RegisterLegacyAminoCodec(encCfg.Amino)
	mb.RegisterInterfaces(encCfg.InterfaceRegistry)

	return encCfg
}
