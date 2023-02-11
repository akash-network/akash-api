package v1beta2

import (
	"errors"
)

var (
	// ErrProviderNotFound provider not found
	ErrProviderNotFound = errors.New("invalid provider: address not found")

	// ErrInvalidAddress invalid trusted auditor address
	ErrInvalidAddress = errors.New("invalid address")

	// ErrAttributeNotFound invalid trusted auditor address
	ErrAttributeNotFound = errors.New("attribute not found")
)
