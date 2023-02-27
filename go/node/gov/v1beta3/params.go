package v1beta3

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	DefaultMinDepositOnProposalCreate = sdk.NewDecWithPrec(40, 2)
)

const (
	keyMinDepositOnProposalCreate = "MinDepositOnProposalCreate"
)

func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair([]byte(keyMinDepositOnProposalCreate), &p.MinDepositOnProposalCreate, validateMinDepositOnProposalCreate),
	}
}

func DefaultParams() Params {
	return Params{
		MinDepositOnProposalCreate: DefaultMinDepositOnProposalCreate,
	}
}

func (p Params) Validate() error {
	if err := validateMinDepositOnProposalCreate(p.MinDepositOnProposalCreate); err != nil {
		return err
	}

	return nil
}

func validateMinDepositOnProposalCreate(i interface{}) error {
	v, ok := i.(sdk.Dec)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v.IsNegative() {
		return fmt.Errorf("min deposit on proposal create cannot be negative: %s", v)
	}

	if v.GT(sdk.OneDec()) {
		return fmt.Errorf("min deposit on proposal create is too large: %s", v)
	}

	return nil
}
