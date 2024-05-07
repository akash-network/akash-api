package v1beta4

import (
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	"github.com/cosmos/cosmos-sdk/x/authz"

	v1 "go.akashd.io/sdk/node/deployment/v1"
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

// RegisterInterfaces registers the x/deployment interfaces types with the interface registry
func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDeployment{},
		&MsgUpdateDeployment{},
		&v1.MsgDepositDeployment{},
		&MsgCloseDeployment{},
		&MsgCloseGroup{},
		&MsgPauseGroup{},
		&MsgStartGroup{},
	)
	registry.RegisterImplementations(
		(*authz.Authorization)(nil),
		&v1.DepositAuthorization{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
