package sign

import (
	"encoding/json"
	"fmt"
	"reflect"

	"github.com/cosmos/cosmos-sdk/codec/legacy"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/auth/legacy/legacytx"
)

var (
	MsgTypeSignData = ""
)

var (
	_ sdk.Msg            = (*MsgSignData)(nil)
	_ legacytx.LegacyMsg = (*MsgSignData)(nil)
)

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

// GetSignBytes encodes the message for signing
func (m *MsgSignData) GetSignBytes() []byte {
	return sdk.MustSortJSON(legacy.Cdc.MustMarshalJSON(m))
}

func (m *MsgSignData) Route() string {
	return "signData"
}

// StdSignBytes returns the bytes to sign for a transaction.
func StdSignBytes(chainID string, accnum, sequence, timeout uint64, fee legacytx.StdFee, msgs []sdk.Msg, memo string) []byte {
	msgsBytes := make([]json.RawMessage, 0, len(msgs))
	for _, msg := range msgs {
		legacyMsg, ok := msg.(legacytx.LegacyMsg)
		if !ok {
			panic(fmt.Errorf("expected %T when using amino JSON", (*legacytx.LegacyMsg)(nil)))
		}

		msgsBytes = append(msgsBytes, legacyMsg.GetSignBytes())
	}

	bz, err := legacy.Cdc.MarshalJSON(legacytx.StdSignDoc{
		AccountNumber: accnum,
		ChainID:       chainID,
		Fee:           fee.Bytes(),
		Memo:          memo,
		Msgs:          msgsBytes,
		Sequence:      sequence,
		TimeoutHeight: timeout,
	})
	if err != nil {
		panic(err)
	}

	return sdk.MustSortJSON(bz)
}
