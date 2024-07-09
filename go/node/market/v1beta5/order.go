package v1beta5

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"gopkg.in/yaml.v3"

	atypes "pkg.akt.dev/go/node/audit/v1"

	v1 "pkg.akt.dev/go/node/market/v1"
	attr "pkg.akt.dev/go/node/types/attributes/v1"
)

// String implements the Stringer interface for a Order object.
func (o *Order) String() string {
	out, _ := yaml.Marshal(o)
	return string(out)
}

// Orders is a collection of Order
type Orders []Order

// String implements the Stringer interface for a Orders object.
func (o Orders) String() string {
	var out string
	for _, order := range o {
		out += order.String() + "\n"
	}

	return strings.TrimSpace(out)
}

// ValidateCanBid method validates whether order is open or not and
// returns error if not
func (o *Order) ValidateCanBid() error {
	switch o.State {
	case v1.OrderOpen:
		return nil
	case v1.OrderActive:
		return ErrOrderActive
	default:
		return ErrOrderClosed
	}
}

// ValidateInactive method validates whether order is open or not and
// returns error if not
func (o *Order) ValidateInactive() error {
	switch o.State {
	case v1.OrderClosed:
		return nil
	case v1.OrderActive:
		return ErrOrderActive
	default:
		return ErrOrderClosed
	}
}

// Price method returns price of specific order
func (o *Order) Price() sdk.DecCoin {
	return o.Spec.Price()
}

// MatchAttributes method compares provided attributes with specific order attributes
func (o *Order) MatchAttributes(attrs attr.Attributes) bool {
	return o.Spec.MatchAttributes(attrs)
}

// MatchRequirements method compares provided attributes with specific order attributes
func (o *Order) MatchRequirements(prov []atypes.Provider) bool {
	return o.Spec.MatchRequirements(prov)
}

// MatchResourcesRequirements method compares provider capabilities with specific order resources attributes
func (o *Order) MatchResourcesRequirements(attr attr.Attributes) bool {
	return o.Spec.MatchResourcesRequirements(attr)
}

// Filters returns whether order filters valid or not
func (o *Order) Filters(filters OrderFilters, stateVal v1.OrderState) bool {
	// Checking owner filter
	if filters.Owner != "" && filters.Owner != o.ID.Owner {
		return false
	}

	// Checking dseq filter
	if filters.DSeq != 0 && filters.DSeq != o.ID.DSeq {
		return false
	}

	// Checking gseq filter
	if filters.GSeq != 0 && filters.GSeq != o.ID.GSeq {
		return false
	}

	// Checking oseq filter
	if filters.OSeq != 0 && filters.OSeq != o.ID.OSeq {
		return false
	}

	// Checking state filter
	if stateVal != 0 && stateVal != o.State {
		return false
	}

	return true
}
