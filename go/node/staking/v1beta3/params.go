package v1beta3

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	DefaultMinCommissionRate = sdk.NewDecWithPrec(5, 1)
)

const (
	keyMinCommissionRate = "MinCommissionRate"
)

func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair([]byte(keyMinCommissionRate), &p.MinCommissionRate, validateMinCommissionRate),
	}
}

func DefaultParams() Params {
	return Params{
		MinCommissionRate: DefaultMinCommissionRate,
	}
}

func (p Params) Validate() error {
	if err := validateMinCommissionRate(p.MinCommissionRate); err != nil {
		return err
	}

	return nil
}

func validateMinCommissionRate(i interface{}) error {
	v, ok := i.(sdk.Dec)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v.IsNegative() {
		return fmt.Errorf("min commission rate cannot be negative: %s", v)
	}
	if v.GT(sdk.OneDec()) {
		return fmt.Errorf("min commission rate is too large: %s", v)
	}

	return nil
}
