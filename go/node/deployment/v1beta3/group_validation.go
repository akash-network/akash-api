package v1beta3

import (
	"fmt"
)

// ValidateDeploymentGroups does validation for all deployment groups
func ValidateDeploymentGroups(gspecs []GroupSpec) error {
	if len(gspecs) == 0 {
		return ErrInvalidGroups
	}

	names := make(map[string]int, len(gspecs)) // Used as set
	denom := ""
	for idx, group := range gspecs {
		// all must be same denomination
		if idx == 0 {
			denom = group.Price().Denom
		} else if group.Price().Denom != denom {
			return fmt.Errorf("inconsistent denomination: %v != %v", denom, group.Price().Denom)
		}

		if err := group.ValidateBasic(); err != nil {
			return err
		}

		if _, exists := names[group.GetName()]; exists {
			return fmt.Errorf("duplicate deployment group name %q", group.GetName())
		}

		names[group.GetName()] = 0 // Value stored does not matter
	}

	return nil
}
