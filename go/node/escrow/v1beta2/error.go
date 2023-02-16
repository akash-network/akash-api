package v1beta2

import (
	"errors"
)

var (
	ErrAccountExists       = errors.New("account exists")
	ErrAccountClosed       = errors.New("account closed")
	ErrAccountNotFound     = errors.New("account not found")
	ErrAccountOverdrawn    = errors.New("account overdrawn")
	ErrInvalidDenomination = errors.New("invalid denomination")
	ErrPaymentExists       = errors.New("payment exists")
	ErrPaymentClosed       = errors.New("payment closed")
	ErrPaymentNotFound     = errors.New("payment not found")
	ErrPaymentRateZero     = errors.New("payment rate zero")
	ErrInvalidPayment      = errors.New("invalid payment")
	ErrInvalidSettlement   = errors.New("invalid settlement")
	ErrInvalidAccountID    = errors.New("invalid account ID")
	ErrInvalidAccount      = errors.New("invalid account")
)
