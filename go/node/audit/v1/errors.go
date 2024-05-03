package v1

import (
	sdkerrors "cosmossdk.io/errors"
)

const (
	errProviderNotFound uint32 = iota + 1
	errInvalidAddress
	errAttributeNotFound
)

var (
	// ErrProviderNotFound provider not found
	ErrProviderNotFound = sdkerrors.Register(ModuleName, errProviderNotFound, "invalid provider: address not found")

	// ErrInvalidAddress invalid trusted auditor address
	ErrInvalidAddress = sdkerrors.Register(ModuleName, errInvalidAddress, "invalid address")

	// ErrAttributeNotFound invalid trusted auditor address
	ErrAttributeNotFound = sdkerrors.Register(ModuleName, errAttributeNotFound, "attribute not found")
)
