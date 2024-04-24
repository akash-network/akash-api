package v2_1

import (
	"errors"
	"fmt"
	"sort"

	"gopkg.in/yaml.v3"

	sdk "github.com/cosmos/cosmos-sdk/types"

	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

var errInvalidCoinAmount = errors.New("invalid coin amount")

type placementPricing map[string]sdk.DecCoin

type placementAttributes types.Attributes

type coinNode struct {
	Amount string `yaml:"amount"`
	Denom  string `yaml:"denom"`
}

func (sdl *placementAttributes) UnmarshalYAML(node *yaml.Node) error {
	var attr placementAttributes

	var res map[string]string

	if err := node.Decode(&res); err != nil {
		return err
	}

	for k, v := range res {
		attr = append(attr, types.Attribute{
			Key:   k,
			Value: v,
		})
	}

	// keys are unique in attributes parsed from sdl so don't need to use sort.SliceStable
	sort.Sort(types.Attributes(attr))

	*sdl = attr

	return nil
}

func (sdl *placementPricing) UnmarshalYAML(node *yaml.Node) error {
	result := make(placementPricing)

	for i := 0; i < len(node.Content); i += 2 {
		var coin sdk.DecCoin

		switch node.Content[i+1].Kind {
		case yaml.MappingNode:
			pcoin := coinNode{}
			if err := node.Content[i+1].Decode(&pcoin); err != nil {
				return err
			}

			amount, err := sdk.NewDecFromStr(pcoin.Amount)
			if err != nil {
				return err
			}

			coin = sdk.NewDecCoinFromDec(pcoin.Denom, amount)
		case yaml.ScalarNode:
			var err error
			if coin, err = sdk.ParseDecCoin(node.Content[i+1].Value); err != nil {
				return err
			}
		default:
			return fmt.Errorf("sdl: unexpected content type")
		}

		if coin.IsZero() {
			return fmt.Errorf("%w: amount is zero", errInvalidCoinAmount)
		}

		if coin.IsNegative() {
			return fmt.Errorf("%w: amount %q is negative", errNegativeValue, coin.Amount.String())
		}

		result[node.Content[i].Value] = coin
	}

	return nil
}

func (sdl *ProfilePlacement) UnmarshalYAML(node *yaml.Node) error {
	result := ProfilePlacement{}

	for i := 0; i < len(node.Content); i += 2 {
		var val interface{}
		switch node.Content[i].Value {
		case "attributes":
			val = &result.Attributes
		case "signedBy":
			val = &result.SignedBy
		case "pricing":
			val = &result.Pricing
		default:
			return fmt.Errorf("sdl: unexpected field %s", node.Content[i].Value)
		}

		if err := node.Content[i+1].Decode(val); err != nil {
			return err
		}
	}

	*sdl = result

	return nil
}
