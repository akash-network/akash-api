package v2

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"gopkg.in/yaml.v3"
)

func (sdl *Coin) UnmarshalYAML(node *yaml.Node) error {
	parsedCoin := struct {
		Amount string `yaml:"amount"`
		Denom  string `yaml:"denom"`
	}{}

	if err := node.Decode(&parsedCoin); err != nil {
		return err
	}

	amount, err := sdk.NewDecFromStr(parsedCoin.Amount)
	if err != nil {
		return err
	}

	if amount.IsZero() {
		return fmt.Errorf("%w: amount is zero", errInvalidCoinAmount)
	}

	// Never pass negative amounts to cosmos SDK DecCoin
	if amount.IsNegative() {
		return fmt.Errorf("%w: amount %q is negative", errNegativeValue, amount.String())
	}

	coin := sdk.NewDecCoinFromDec(parsedCoin.Denom, amount)

	*sdl = Coin{
		Value: coin,
	}

	return nil
}
