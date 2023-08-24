package v1beta3

import (
	"fmt"
	"sort"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type ResourceUnits []ResourceUnit

var _ sort.Interface = (*ResourceUnits)(nil)

func (s ResourceUnits) Len() int {
	return len(s)
}

func (s ResourceUnits) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s ResourceUnits) Less(i, j int) bool {
	return s[i].ID < s[j].ID
}

func (s ResourceUnits) Validate() error {
	if count := len(s); count > validationConfig.MaxGroupUnits {
		return fmt.Errorf("too many units (%v > %v)", count, validationConfig.MaxGroupUnits)
	}

	ids := make(map[uint32]bool)
	for _, res := range s {
		if err := res.validate(); err != nil {
			return err
		}
		if res.ID == 0 {
			return fmt.Errorf("resources ID must be > 0")
		}

		if _, exists := ids[res.ID]; exists {
			return fmt.Errorf("duplicate resources ID (%d) within group", res.ID)
		}

		ids[res.ID] = true
	}

	limits := newLimits()

	for idx := range s {
		limits.add(s[idx].totalResources())
	}

	if limits.cpu.GT(sdk.NewIntFromUint64(validationConfig.MaxGroupCPU)) || limits.cpu.LTE(sdk.ZeroInt()) {
		return fmt.Errorf("invalid total CPU (%v > %v > %v fails)", validationConfig.MaxGroupCPU, limits.cpu, 0)
	}

	if !limits.gpu.IsZero() && (limits.gpu.GT(sdk.NewIntFromUint64(validationConfig.MaxGroupGPU)) || limits.gpu.LTE(sdk.ZeroInt())) {
		return fmt.Errorf("invalid total GPU (%v > %v > %v fails)", validationConfig.MaxGroupGPU, limits.gpu, 0)
	}

	if limits.memory.GT(sdk.NewIntFromUint64(validationConfig.MaxGroupMemory)) || limits.memory.LTE(sdk.ZeroInt()) {
		return fmt.Errorf("invalid total memory (%v > %v > %v fails)", validationConfig.MaxGroupMemory, limits.memory, 0)
	}

	for i := range limits.storage {
		if limits.storage[i].GT(sdk.NewIntFromUint64(validationConfig.MaxGroupStorage)) || limits.storage[i].LTE(sdk.ZeroInt()) {
			return fmt.Errorf("invalid total storage (%v > %v > %v fails)", validationConfig.MaxGroupStorage, limits.storage, 0)
		}
	}

	return nil
}