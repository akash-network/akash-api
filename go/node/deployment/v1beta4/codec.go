package v1beta4

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	"github.com/cosmos/cosmos-sdk/x/authz"

	v1 "pkg.akt.dev/go/node/deployment/v1"
)

var (
	// ModuleCdc references the global x/deployment module codec. Note, the codec should
	// ONLY be used in certain instances of tests and for JSON encoding as Amino is
	// still used for that purpose.
	//
	// The actual codec used for serialization should be provided to x/deployment and
	// defined at the application level.
	//
	// Deprecated: ModuleCdc use is deprecated
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

// RegisterLegacyAminoCodec register concrete types on codec
//
// Deprecated: RegisterLegacyAminoCodec is deprecated
func RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateDeployment{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgCreateDeployment{}).Type(), nil)
	cdc.RegisterConcrete(&MsgUpdateDeployment{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgUpdateDeployment{}).Type(), nil)
	cdc.RegisterConcrete(&MsgCloseDeployment{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgCloseDeployment{}).Type(), nil)
	cdc.RegisterConcrete(&MsgStartGroup{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgStartGroup{}).Type(), nil)
	cdc.RegisterConcrete(&MsgPauseGroup{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgPauseGroup{}).Type(), nil)
	cdc.RegisterConcrete(&MsgCloseGroup{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgCloseGroup{}).Type(), nil)
	cdc.RegisterConcrete(&MsgUpdateParams{}, "akash-sdk/x"+v1.ModuleName+"/"+(&MsgUpdateParams{}).Authority, nil)
	cdc.RegisterConcrete(&v1.MsgDepositDeployment{}, "akash-sdk/x"+v1.ModuleName+"/"+(&v1.MsgDepositDeployment{}).Type(), nil)
}

// RegisterInterfaces registers the x/deployment interfaces types with the interface registry
func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&v1.MsgDepositDeployment{},
		&MsgCreateDeployment{},
		&MsgUpdateDeployment{},
		&MsgCloseDeployment{},
		&MsgStartGroup{},
		&MsgPauseGroup{},
		&MsgCloseGroup{},
		&MsgUpdateParams{},
	)

	registry.RegisterImplementations(
		(*authz.Authorization)(nil),
		&v1.DepositAuthorization{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
