package testutil

import (
	"fmt"

	"cosmossdk.io/x/tx/signing"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/codec/address"
	"github.com/cosmos/cosmos-sdk/codec/types"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/std"
	"github.com/cosmos/cosmos-sdk/types/module"
	"github.com/cosmos/cosmos-sdk/x/auth/tx"
	"github.com/cosmos/gogoproto/proto"
	pproto "google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/protoadapt"
	"google.golang.org/protobuf/reflect/protoreflect"

	certv1 "pkg.akt.dev/go/node/cert/v1"
	dv1 "pkg.akt.dev/go/node/deployment/v1"
	dv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
	mv1beta5 "pkg.akt.dev/go/node/market/v1beta5"
)

// CodecOptions are options for creating a test codec.
type CodecOptions struct {
	AccAddressPrefix string
	ValAddressPrefix string
	Options          signing.Options
}

func NewCodecOptions() *CodecOptions {
	return &CodecOptions{
		AccAddressPrefix: "akash",
		ValAddressPrefix: "akashvaloper",
		Options:          NewSigningOptions(),
	}
}

// NewInterfaceRegistry returns a new InterfaceRegistry with the given options.
func (o CodecOptions) NewInterfaceRegistry() codectypes.InterfaceRegistry {
	ir, err := codectypes.NewInterfaceRegistryWithOptions(codectypes.InterfaceRegistryOptions{
		ProtoFiles:     proto.HybridResolver,
		SigningOptions: o.Options,
	})
	if err != nil {
		panic(err)
	}

	return ir
}

// NewCodec returns a new codec with the given options.
func (o CodecOptions) NewCodec() *codec.ProtoCodec {
	return codec.NewProtoCodec(o.NewInterfaceRegistry())
}

// TestEncodingConfig defines an encoding configuration that is used for testing
// purposes. Note, MakeTestEncodingConfig takes a series of AppModuleBasic types
// which should only contain the relevant module being tested and any potential
// dependencies.
type TestEncodingConfig struct {
	InterfaceRegistry types.InterfaceRegistry
	Codec             codec.Codec
	TxConfig          client.TxConfig
	Amino             *codec.LegacyAmino
	SigningOptions    signing.Options
}

func MakeTestEncodingConfig(modules ...module.AppModuleBasic) TestEncodingConfig {
	aminoCodec := codec.NewLegacyAmino()
	co := NewCodecOptions()

	interfaceRegistry := co.NewInterfaceRegistry()
	codec := codec.NewProtoCodec(interfaceRegistry)

	encCfg := TestEncodingConfig{
		InterfaceRegistry: interfaceRegistry,
		Codec:             codec,
		TxConfig:          tx.NewTxConfig(codec, tx.DefaultSignModes),
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

func (enc *TestEncodingConfig) GetSigningOptions() signing.Options {
	return enc.SigningOptions
}

func MakeTestTxConfig() client.TxConfig {
	interfaceRegistry := CodecOptions{}.NewInterfaceRegistry()
	cdc := codec.NewProtoCodec(interfaceRegistry)
	return tx.NewTxConfig(cdc, tx.DefaultSignModes)
}

type TestBuilderTxConfig struct {
	client.TxConfig
	TxBuilder *TestTxBuilder
}

func MakeBuilderTestTxConfig() TestBuilderTxConfig {
	return TestBuilderTxConfig{
		TxConfig: MakeTestTxConfig(),
	}
}

func (cfg TestBuilderTxConfig) NewTxBuilder() client.TxBuilder {
	if cfg.TxBuilder == nil {
		cfg.TxBuilder = &TestTxBuilder{
			TxBuilder: cfg.TxConfig.NewTxBuilder(),
		}
	}
	return cfg.TxBuilder
}

type TestTxBuilder struct {
	client.TxBuilder
	ExtOptions []*types.Any
}

func (b *TestTxBuilder) SetExtensionOptions(extOpts ...*types.Any) {
	b.ExtOptions = extOpts
}

func NewSigningOptions() signing.Options {
	so := signing.Options{
		FileResolver:          nil,
		TypeResolver:          nil,
		AddressCodec:          address.NewBech32Codec("akash"),
		ValidatorAddressCodec: address.NewBech32Codec("akashvaloper"),
		CustomGetSigners:      nil,
		MaxRecursionDepth:     0,
	}

	buildCustomGetSigners(so)

	return so
}

func BuildCustomSigners() []signing.CustomGetSigner {
	return buildCustomGetSigners(NewSigningOptions())
}

func buildCustomGetSigners(options signing.Options) []signing.CustomGetSigner {
	return []signing.CustomGetSigner{
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1.MsgDepositDeployment{})),
			Fn: func(msgIn pproto.Message) ([][]byte, error) {
				msg := msgIn.ProtoReflect()
				idDesc := msg.Descriptor().Fields().ByName("id")
				if idDesc == nil {
					return nil, fmt.Errorf("no id field found in %s", pproto.MessageName(msgIn))
				}

				field := "owner"
				id := msg.Get(idDesc).Message()
				fieldDesc := id.Descriptor().Fields().ByName(protoreflect.Name(field))
				if fieldDesc == nil {
					return nil, fmt.Errorf("no id.%s field found in %s", field, pproto.MessageName(msgIn))
				}

				b32 := id.Get(fieldDesc).Interface().(string)
				addr, err := options.AddressCodec.StringToBytes(b32)
				if err != nil {
					return nil, fmt.Errorf("error decoding thing.%s address %q: %w", field, b32, err)
				}

				return [][]byte{addr}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgCreateDeployment{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgUpdateDeployment{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgCloseDeployment{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgStartGroup{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgPauseGroup{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgCloseGroup{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgCreateLease{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgCloseLease{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgCloseBid{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgWithdrawLease{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},

		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&certv1.MsgRevokeCertificate{})),
			Fn: func(msg pproto.Message) ([][]byte, error) {
				//testMsg := msg.(*dv1.MsgDepositDeployment)
				//// arbitrary logic
				//signer := testMsg.NullableDontOmitempty[1].Value
				return [][]byte{}, nil
			},
		},
	}
}
