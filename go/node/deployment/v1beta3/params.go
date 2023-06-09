package v1beta3

import (
	math "math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/pkg/errors"
)

var _ paramtypes.ParamSet = (*Params)(nil)

const (
	keyMinDeposits = "MinDeposits"
)

func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair([]byte(keyMinDeposits), &p.MinDeposits, validateMinDeposits),
	}
}

func DefaultParams() Params {
	return Params{
		MinDeposits: map[string]uint32{
			"uakt": 5000000,
		},
	}
}

func (p Params) Validate() error {
	if err := validateMinDeposits(p.MinDeposits); err != nil {
		return err
	}
	return nil
}

func (p Params) ValidateDeposit(amt sdk.Coin) error {
	min, err := p.MinDepositFor(amt.Denom)

	if err != nil {
		return err
	}

	if amt.IsGTE(min) {
		return nil
	}

	return errors.Wrapf(ErrInvalidDeposit, "Deposit too low - %v < %v", amt.Amount, min)
}

func (p Params) MinDepositFor(denom string) (sdk.Coin, error) {
	val, ok := p.MinDeposits[denom]
	if !ok {
		return sdk.NewInt64Coin(denom, math.MaxInt64), errors.Wrapf(ErrInvalidDeposit, "Invalid deposit denomination %v", denom)
	}
	return sdk.NewCoin(denom, sdk.NewInt(int64(val))), nil
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
