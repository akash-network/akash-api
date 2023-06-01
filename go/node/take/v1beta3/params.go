package v1beta3

import (
	"github.com/pkg/errors"
	"fmt"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
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
		DenomTakeRates: map[string]uint32{
			"uakt": 0,
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
		return fmt.Errorf("Invalid Take Rate (%#v)", val)
	}
	return nil
}

func validateDenomTakeRates(i interface{}) error {
	val, ok := i.(map[string]uint32)
	if !ok {
		return errors.Wrapf(ErrInvalidParam, "%T", i)
	}

	for k, v := range(val) {
		if v > 100 {
			return fmt.Errorf("Invalid Denom Take Rate (%v=%#v)", k,v)
		}
	}

	// must have uakt=0
	if v, ok := val["uakt"]; !ok || v != 0 {
		return fmt.Errorf("Invalid Denom Take Rate - uakt must be 0 (%#v)", v)
	}

	return nil
}
