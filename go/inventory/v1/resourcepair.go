package v1

import (
	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"k8s.io/apimachinery/pkg/api/resource"

	types "pkg.akt.dev/go/node/types/resources/v1beta4"
)

func NewResourcePair(allocatable, allocated int64, format resource.Format) ResourcePair {
	res := ResourcePair{
		Allocatable: resource.NewQuantity(allocatable, format),
		Allocated:   resource.NewQuantity(allocated, format),
		Attributes:  nil,
	}

	return res
}

func NewResourcePairMilli(allocatable, allocated int64, format resource.Format) ResourcePair {
	res := ResourcePair{
		Allocatable: resource.NewMilliQuantity(allocatable, format),
		Allocated:   resource.NewMilliQuantity(allocated, format),
		Attributes:  nil,
	}

	return res
}

func (m *ResourcePair) Equal(rhs ResourcePair) bool {
	if m == nil {
		return false
	}

	return (m.Allocatable.Cmp(*rhs.Allocatable) == 0) && (m.Allocated.Cmp(*rhs.Allocated) == 0)
}

func (m *ResourcePair) LT(rhs ResourcePair) bool {
	if m == nil {
		return false
	}

	return m.Allocatable.Cmp(*rhs.Allocatable) == -1
}

func (m *ResourcePair) Dup() ResourcePair {
	allocatable := m.Allocatable.DeepCopy()
	allocated := m.Allocated.DeepCopy()

	res := ResourcePair{
		Allocatable: &allocatable,
		Allocated:   &allocated,
		Attributes:  m.Attributes.Dup(),
	}

	return res
}

func (m *ResourcePair) SubMilliNLZ(val types.ResourceValue) bool {
	avail := m.Available()

	res := sdk.NewInt(avail.MilliValue())
	res = res.Sub(val.Val)
	if res.IsNegative() {
		return false
	}

	allocated := m.Allocated.DeepCopy()
	allocated.Add(*resource.NewMilliQuantity(int64(val.Value()), resource.DecimalSI))

	allocatable := m.Allocatable.DeepCopy()

	*m = ResourcePair{
		Allocatable: &allocatable,
		Allocated:   &allocated,
	}

	return true
}

func (m *ResourcePair) SubNLZ(val types.ResourceValue) bool {
	avail := m.Available()

	res := sdk.NewInt(avail.Value())
	res = res.Sub(val.Val)

	if res.IsNegative() {
		return false
	}

	allocated := m.Allocated.DeepCopy()
	allocated.Add(*resource.NewQuantity(int64(val.Value()), resource.DecimalSI))

	allocatable := m.Allocatable.DeepCopy()

	*m = ResourcePair{
		Allocatable: &allocatable,
		Allocated:   &allocated,
	}

	return true
}

func (m *ResourcePair) Available() *resource.Quantity {
	result := m.Allocatable.DeepCopy()

	if result.Value() == -1 {
		result = *resource.NewQuantity(math.MaxInt64, resource.DecimalSI)
	}

	// Modifies the value in place
	(&result).Sub(*m.Allocated)

	return &result
}
