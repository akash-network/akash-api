package v1beta3

import (
	math "math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/pkg/errors"
)

var _ paramtypes.ParamSet = (*Params)(nil)

const (
	keyMinDeposits       = "MinDeposits"
	keyDefaultMinDeposit = "DefaultMinDeposit"
)

func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair([]byte(keyMinDeposits), &p.MinDeposits, validateMinDeposits),
		paramtypes.NewParamSetPair([]byte(keyDefaultMinDeposit), &p.DefaultMinDeposit, validateDefaultMinDeposit),
	}
}

func DefaultParams() Params {
	return Params{
		MinDeposits: map[string]uint32{
			"uakt": 5000000,
		},
		DefaultMinDeposit: 5000000,
	}
}

func (p Params) Validate() error {

	if err := validateMinDeposits(p.MinDeposits); err != nil {
		return err
	}

	if err := validateDefaultMinDeposit(p.DefaultMinDeposit); err != nil {
		return err
	}

	return nil
}

func (p Params) ValidateDeposit(amt sdk.Coin) error {
	min := p.MinDepositFor(amt.Denom)

	if amt.IsGTE(min) {
		return nil
	}

	return errors.Wrapf(ErrInvalidDeposit, "Deposit too low - %v < %v", amt.Amount, min)
}

func (p Params) MinDepositFor(denom string) sdk.Coin {
	val, ok := p.MinDeposits[denom]
	if !ok {
		val = p.DefaultMinDeposit
	}
	return sdk.NewCoin(denom, sdk.NewInt(int64(val)))
}

func validateMinDeposits(i interface{}) error {
	vals, ok := i.(map[string]uint32)
	if !ok {
		return errors.Wrapf(ErrInvalidParam, "Min Deposits - invalid type: %T", i)
	}

	if _, ok := vals["uakt"]; !ok {
		return errors.Wrapf(ErrInvalidParam, "Min Deposits - uakt not given: %#v", vals)
	}

	for denom, val := range vals {
		if val >= math.MaxInt32 {
			return errors.Wrapf(ErrInvalidParam, "Min Deposit (%v) - too large: %v", denom, val)
		}
	}

	return nil
}

func validateDefaultMinDeposit(i interface{}) error {
	val, ok := i.(uint32)
	if !ok {
		return errors.Wrapf(ErrInvalidParam, "Default Min Deposit - invalid type: %T", i)
	}

	if val >= math.MaxInt32 {
		return errors.Wrapf(ErrInvalidParam, "Default Min Deposit - too large: %v", val)
	}

	return nil
}
