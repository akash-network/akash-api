package v1beta3

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type resourceLimits struct {
	cpu     sdk.Int
	gpu     sdk.Int
	memory  sdk.Int
	storage []sdk.Int
}

func newLimits() resourceLimits {
	return resourceLimits{
		cpu:    sdk.ZeroInt(),
		gpu:    sdk.ZeroInt(),
		memory: sdk.ZeroInt(),
	}
}

func (u *resourceLimits) add(rhs resourceLimits) {
	u.cpu = u.cpu.Add(rhs.cpu)
	u.gpu = u.gpu.Add(rhs.gpu)
	u.memory = u.memory.Add(rhs.memory)

	// u.storage = u.storage.Add(rhs.storage)
}

func (u *resourceLimits) mul(count uint32) {
	u.cpu = u.cpu.MulRaw(int64(count))
	u.gpu = u.gpu.MulRaw(int64(count))
	u.memory = u.memory.MulRaw(int64(count))

	for i := range u.storage {
		u.storage[i] = u.storage[i].MulRaw(int64(count))
	}
}
