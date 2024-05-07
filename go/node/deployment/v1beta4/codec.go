package v1beta4

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	"github.com/cosmos/cosmos-sdk/x/authz"

	v1 "pkg.akt.io/go/node/deployment/v1"
)

// var (
// 	// ModuleCdc references the global x/deployment module codec. Note, the codec should
// 	// ONLY be used in certain instances of tests and for JSON encoding as Amino is
// 	// still used for that purpose.
// 	//
// 	// The actual codec used for serialization should be provided to x/deployment and
// 	// defined at the application level.
// 	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
// )

// RegisterLegacyAminoCodec register concrete types on codec
func RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateDeployment{}, v1.ModuleName+"/"+MsgTypeCreateDeployment, nil)
	cdc.RegisterConcrete(&MsgUpdateDeployment{}, v1.ModuleName+"/"+MsgTypeUpdateDeployment, nil)
	cdc.RegisterConcrete(&MsgCloseDeployment{}, v1.ModuleName+"/"+MsgTypeCloseDeployment, nil)
	cdc.RegisterConcrete(&MsgStartGroup{}, v1.ModuleName+"/"+MsgTypeStartGroup, nil)
	cdc.RegisterConcrete(&MsgPauseGroup{}, v1.ModuleName+"/"+MsgTypePauseGroup, nil)
	cdc.RegisterConcrete(&MsgCloseGroup{}, v1.ModuleName+"/"+MsgTypeCloseGroup, nil)

	cdc.RegisterConcrete(&v1.MsgDepositDeployment{}, v1.ModuleName+"/"+v1.MsgTypeDepositDeployment, nil)

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
	)
	registry.RegisterImplementations(
		(*authz.Authorization)(nil),
		&v1.DepositAuthorization{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
