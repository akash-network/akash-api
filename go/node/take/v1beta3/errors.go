package v1beta3

import (
	sdkerrors "cosmossdk.io/errors"
)

const (
	errInvalidParam uint32 = iota + 1
)

var (
	// ErrInvalidParam indicates an invalid chain parameter
	ErrInvalidParam = sdkerrors.Register(ModuleName, errInvalidParam, "parameter invalid")
)
