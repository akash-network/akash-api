package sign

import (
	"reflect"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	MsgTypeSignData = ""
)

var _ sdk.Msg = (*MsgSignData)(nil)

func init() {
	MsgTypeSignData = reflect.TypeOf(&MsgSignData{}).Elem().Name()
}

// Type implements the sdk.Msg interface
func (m *MsgSignData) Type() string {
	return MsgTypeSignData
}

// ValidateBasic does basic validation
func (m MsgSignData) ValidateBasic() error {
	if _, err := sdk.AccAddressFromBech32(m.Signer); err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "MsgSignData: Invalid Signer Address")
	}

	return nil
}

// GetSigners defines whose signature is required
func (m MsgSignData) GetSigners() []sdk.AccAddress {
	signer, err := sdk.AccAddressFromBech32(m.Signer)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{signer}
}
