package v1beta3

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	errInvalidParam uint32 = iota + 1
)

var (
	// ErrInvalidParam indicates an invalid chain parameter
	ErrInvalidParam = sdkerrors.Register(ModuleName, errInvalidParam, "parameter invalid")
)
