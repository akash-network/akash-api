package v1

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/authz"
)

const (
	MsgTypeDepositDeployment = "deposit-deployment"
)

var (
	_ authz.Authorization = &DepositAuthorization{}
)

// NewDepositAuthorization creates a new DepositAuthorization object.
func NewDepositAuthorization(spendLimit sdk.Coin) *DepositAuthorization {
	return &DepositAuthorization{
		SpendLimit: spendLimit,
	}
}

// MsgTypeURL implements Authorization.MsgTypeURL.
func (m DepositAuthorization) MsgTypeURL() string {
	return sdk.MsgTypeURL(&MsgDepositDeployment{})
}

// Accept implements Authorization.Accept.
func (m DepositAuthorization) Accept(_ sdk.Context, msg sdk.Msg) (authz.AcceptResponse, error) {
	mDepositDeployment, ok := msg.(*MsgDepositDeployment)
	if !ok {
		return authz.AcceptResponse{}, sdkerrors.ErrInvalidType.Wrap("type mismatch")
	}
	if m.SpendLimit.IsLT(mDepositDeployment.Amount) {
		return authz.AcceptResponse{}, sdkerrors.ErrInsufficientFunds.Wrapf("requested amount is more than spend limit")
	}
	limitLeft := m.SpendLimit.Sub(mDepositDeployment.Amount)

	return authz.AcceptResponse{Accept: true, Delete: false, Updated: &DepositAuthorization{SpendLimit: limitLeft}}, nil
}

// ValidateBasic implements Authorization.ValidateBasic.
func (m DepositAuthorization) ValidateBasic() error {
	if !m.SpendLimit.IsPositive() {
		return sdkerrors.ErrInvalidCoins.Wrapf("spend limit cannot be negative")
	}
	return nil
}

// NewMsgDepositDeployment creates a new MsgDepositDeployment instance
func NewMsgDepositDeployment(id DeploymentID, amount sdk.Coin, depositor string) *MsgDepositDeployment {
	return &MsgDepositDeployment{
		ID:        id,
		Amount:    amount,
		Depositor: depositor,
	}
}

// Route implements the sdk.Msg interface
func (msg MsgDepositDeployment) Route() string { return RouterKey }

// Type implements the sdk.Msg interface
func (msg MsgDepositDeployment) Type() string { return MsgTypeDepositDeployment }

// GetSignBytes encodes the message for signing
// func (msg MsgDepositDeployment) GetSignBytes() []byte {
// 	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
// }

// GetSigners defines whose signature is required
func (msg MsgDepositDeployment) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ID.Owner)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{owner}
}

// ValidateBasic does basic validation like check owner and groups length
func (msg MsgDepositDeployment) ValidateBasic() error {
	if err := msg.ID.Validate(); err != nil {
		return err
	}

	if msg.Amount.IsZero() {
		return ErrInvalidDeposit
	}

	_, err := sdk.AccAddressFromBech32(msg.Depositor)
	if err != nil {
		return sdkerrors.ErrInvalidAddress.Wrap("MsgDepositDeployment: Invalid Depositor Address")
	}

	return nil
}
