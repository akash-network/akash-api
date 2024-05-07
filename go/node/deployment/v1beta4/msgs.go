package v1beta4

import (
	cerrors "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	v1 "pkg.akt.io/go/node/deployment/v1"
)

const (
	MsgTypeCreateDeployment = "create-deployment"
	MsgTypeUpdateDeployment = "update-deployment"
	MsgTypeCloseDeployment  = "close-deployment"
	MsgTypeCloseGroup       = "close-group"
	MsgTypePauseGroup       = "pause-group"
	MsgTypeStartGroup       = "start-group"
)

var (
	_, _, _, _ sdk.Msg = &MsgCreateDeployment{}, &MsgUpdateDeployment{}, &MsgCloseDeployment{}, &MsgCloseGroup{}
)

// NewMsgCreateDeployment creates a new MsgCreateDeployment instance
func NewMsgCreateDeployment(id v1.DeploymentID, groups []GroupSpec, hash []byte,
	deposit sdk.Coin, depositor sdk.AccAddress) *MsgCreateDeployment {
	return &MsgCreateDeployment{
		ID:        id,
		Groups:    groups,
		Hash:      hash,
		Deposit:   deposit,
		Depositor: depositor.String(),
	}
}

// Route implements the sdk.Msg interface
func (msg *MsgCreateDeployment) Route() string { return v1.RouterKey }

// Type implements the sdk.Msg interface
func (msg *MsgCreateDeployment) Type() string { return MsgTypeCreateDeployment }

// // GetSignBytes encodes the message for signing
// func (msg MsgCreateDeployment) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg *MsgCreateDeployment) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}

// ValidateBasic does basic validation like check owner and groups length
func (msg *MsgCreateDeployment) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}
	if err := msg.Deposit.Validate(); err != nil {
		return err
	}
	if len(msg.Groups) == 0 {
		return v1.ErrInvalidGroups
	}

	if len(msg.Hash) == 0 {
		return v1.ErrEmptyHash
	}

	if len(msg.Hash) != v1.HashLength {
		return v1.ErrInvalidHash
	}

	for _, gs := range msg.Groups {
		err := gs.ValidateBasic()
		if err != nil {
			return err
		}

		// deposit must be same denom as price
		if !msg.Deposit.IsZero() {
			if gdenom := gs.Price().Denom; gdenom != msg.Deposit.Denom {
				return cerrors.Wrapf(v1.ErrInvalidDeposit, "Mismatched denominations (%v != %v)", msg.Deposit.Denom, gdenom)
			}
		}
	}

	_, err := sdk.AccAddressFromBech32(msg.Depositor)
	if err != nil {
		return cerrors.Wrap(sdkerrors.ErrInvalidAddress, "MsgCreateDeployment: Invalid Depositor Address")
	}

	return nil
}

// NewMsgUpdateDeployment creates a new MsgUpdateDeployment instance
func NewMsgUpdateDeployment(id v1.DeploymentID, version []byte) *MsgUpdateDeployment {
	return &MsgUpdateDeployment{
		ID:   id,
		Hash: version,
	}
}

// Route implements the sdk.Msg interface
func (msg *MsgUpdateDeployment) Route() string { return v1.RouterKey }

// Type implements the sdk.Msg interface
func (msg *MsgUpdateDeployment) Type() string { return MsgTypeUpdateDeployment }

// ValidateBasic does basic validation
func (msg *MsgUpdateDeployment) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}

	if len(msg.Hash) == 0 {
		return v1.ErrEmptyHash
	}

	if len(msg.Hash) != v1.HashLength {
		return v1.ErrInvalidHash
	}

	return nil
}

// // GetSignBytes encodes the message for signing
// func (msg MsgUpdateDeployment) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg *MsgUpdateDeployment) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}

// NewMsgCloseDeployment creates a new MsgCloseDeployment instance
func NewMsgCloseDeployment(id v1.DeploymentID) *MsgCloseDeployment {
	return &MsgCloseDeployment{
		ID: id,
	}
}

// Route implements the sdk.Msg interface
func (msg *MsgCloseDeployment) Route() string { return v1.RouterKey }

// Type implements the sdk.Msg interface
func (msg *MsgCloseDeployment) Type() string { return MsgTypeCloseDeployment }

// ValidateBasic does basic validation with deployment details
func (msg *MsgCloseDeployment) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}
	return nil
}

// // GetSignBytes encodes the message for signing
// func (msg MsgCloseDeployment) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg *MsgCloseDeployment) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}

// NewMsgCloseGroup creates a new MsgCloseGroup instance
func NewMsgCloseGroup(id v1.GroupID) *MsgCloseGroup {
	return &MsgCloseGroup{
		ID: id,
	}
}

// Route implements the sdk.Msg interface for routing
func (msg *MsgCloseGroup) Route() string { return v1.RouterKey }

// Type implements the sdk.Msg interface exposing message type
func (msg *MsgCloseGroup) Type() string { return MsgTypeCloseGroup }

// ValidateBasic calls underlying GroupID.Validate() check and returns result
func (msg *MsgCloseGroup) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}
	return nil
}

// // GetSignBytes encodes the message for signing
// func (msg MsgCloseGroup) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg *MsgCloseGroup) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}

// NewMsgPauseGroup creates a new MsgPauseGroup instance
func NewMsgPauseGroup(id v1.GroupID) *MsgPauseGroup {
	return &MsgPauseGroup{
		ID: id,
	}
}

// Route implements the sdk.Msg interface for routing
func (msg *MsgPauseGroup) Route() string { return v1.RouterKey }

// Type implements the sdk.Msg interface exposing message type
func (msg *MsgPauseGroup) Type() string { return MsgTypePauseGroup }

// ValidateBasic calls underlying GroupID.Validate() check and returns result
func (msg *MsgPauseGroup) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}
	return nil
}

// // GetSignBytes encodes the message for signing
// func (msg MsgPauseGroup) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg *MsgPauseGroup) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}

// NewMsgStartGroup creates a new MsgStartGroup instance
func NewMsgStartGroup(id v1.GroupID) *MsgStartGroup {
	return &MsgStartGroup{
		ID: id,
	}
}

// Route implements the sdk.Msg interface for routing
func (msg *MsgStartGroup) Route() string { return v1.RouterKey }

// Type implements the sdk.Msg interface exposing message type
func (msg *MsgStartGroup) Type() string { return MsgTypeStartGroup }

// ValidateBasic calls underlying GroupID.Validate() check and returns result
func (msg *MsgStartGroup) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}
	return nil
}

// // GetSignBytes encodes the message for signing
// func (msg MsgStartGroup) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg *MsgStartGroup) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}
