package v1beta3

import (
	"fmt"

	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/pkg/errors"
)

var _ paramtypes.ParamSet = (*Params)(nil)

const (
	keyDefaultTakeRate = "DefaultTakeRate"
	keyDenomTakeRates  = "DenomTakeRates"
)

func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair([]byte(keyDefaultTakeRate), &p.DefaultTakeRate, validateTakeRate),
		paramtypes.NewParamSetPair([]byte(keyDenomTakeRates), &p.DenomTakeRates, validateDenomTakeRates),
	}
}

func DefaultParams() Params {
	return Params{
		DefaultTakeRate: 20,
		DenomTakeRates: DenomTakeRates{
			{
				Denom: "uakt",
				Rate:  0,
			},
		},
	}
}

func (p Params) Validate() error {
	if err := validateTakeRate(p.DefaultTakeRate); err != nil {
		return err
	}
	if err := validateDenomTakeRates(p.DenomTakeRates); err != nil {
		return err
	}

	return nil
}

func validateTakeRate(i interface{}) error {
	val, ok := i.(uint32)
	if !ok {
		return errors.Wrapf(ErrInvalidParam, "%T", i)
	}
	if val > 100 {
		return fmt.Errorf("invalid Take Rate (%#v)", val)
	}
	return nil
}

func validateDenomTakeRates(i interface{}) error {
	takeRates, ok := i.(DenomTakeRates)
	if !ok {
		return errors.Wrapf(ErrInvalidParam, "%T", i)
	}

	check := make(map[string]uint32)

	for k, v := range takeRates {
		if _, exists := check[v.Denom]; exists {
			return fmt.Errorf("duplicate Denom Take Rate (%#v)", v)
		}

		check[v.Denom] = v.Rate

		if v.Rate > 100 {
			return fmt.Errorf("invalid Denom Take Rate (%v=%#v)", k, v)
		}
	}

	// uakt must always be present
	if _, exists := check["uakt"]; !exists {
		return fmt.Errorf("invalid Denom Take Rate - uakt must be present")
	}

	return nil
}
