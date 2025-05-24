package v1

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetSignBytes encodes the message for signing
//
// Deprecated: GetSignBytes is deprecated
func (msg *MsgDepositDeployment) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

