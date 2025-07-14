package sdkutil

import (
	"fmt"

	"cosmossdk.io/x/tx/signing"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/codec/address"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/gogoproto/proto"
	pproto "google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/protoadapt"
	"google.golang.org/protobuf/reflect/protoreflect"

	certv1 "pkg.akt.dev/go/node/cert/v1"
	dv1 "pkg.akt.dev/go/node/deployment/v1"
	dv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
	mv1beta5 "pkg.akt.dev/go/node/market/v1beta5"
)

type CodecOptions struct {
	AccAddressPrefix string
	ValAddressPrefix string
	Options          signing.Options
}

func NewCodecOptions() *CodecOptions {
	return &CodecOptions{
		AccAddressPrefix: Bech32PrefixAccAddr,
		ValAddressPrefix: Bech32PrefixValAddr,
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

func NewSigningOptions() signing.Options {
	so := signing.Options{
		FileResolver:          nil,
		TypeResolver:          nil,
		AddressCodec:          address.NewBech32Codec(Bech32PrefixAccAddr),
		ValidatorAddressCodec: address.NewBech32Codec(Bech32PrefixValAddr),
		CustomGetSigners:      nil,
		MaxRecursionDepth:     0,
	}

	buildCustomGetSigners(&so)

	return so
}

func BuildCustomSigners() []signing.CustomGetSigner {
	so := NewSigningOptions()
	return buildCustomGetSigners(&so)
}

func getSignerFromID(options *signing.Options, field string) func(msgIn pproto.Message) ([][]byte, error) {
	return func(msgIn pproto.Message) ([][]byte, error) {
		msg := msgIn.ProtoReflect()
		idDesc := msg.Descriptor().Fields().ByName(protoreflect.Name(field))
		if idDesc == nil {
			return nil, fmt.Errorf("no \"%s\" field found in %s", field, pproto.MessageName(msgIn))
		}

		signerField := "owner"
		id := msg.Get(idDesc).Message()
		fieldDesc := id.Descriptor().Fields().ByName(protoreflect.Name(signerField))
		if fieldDesc == nil {
			return nil, fmt.Errorf("no %s.%s field found in %s", field, signerField, pproto.MessageName(msgIn))
		}

		b32 := id.Get(fieldDesc).Interface().(string)
		addr, err := options.AddressCodec.StringToBytes(b32)
		if err != nil {
			return nil, fmt.Errorf("error decoding %s.%s address %q: %w", field, signerField, b32, err)
		}

		return [][]byte{addr}, nil
	}
}

func buildCustomGetSigners(options *signing.Options) []signing.CustomGetSigner {
	signers := []signing.CustomGetSigner{
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1.MsgDepositDeployment{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgCreateDeployment{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgUpdateDeployment{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgCloseDeployment{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgStartGroup{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgPauseGroup{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&dv1beta4.MsgCloseGroup{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgCreateLease{})),
			Fn:      getSignerFromID(options, "bid_id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgCloseLease{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgCloseBid{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&mv1beta5.MsgWithdrawLease{})),
			Fn:      getSignerFromID(options, "id"),
		},
		{
			MsgType: pproto.MessageName(protoadapt.MessageV2Of(&certv1.MsgRevokeCertificate{})),
			Fn:      getSignerFromID(options, "id"),
		},
	}

	for _, signer := range signers {
		options.DefineCustomGetSigners(signer.MsgType, signer.Fn)
	}

	return signers
}
