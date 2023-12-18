package v1

func (m *ResourcePair) Equal(rhs ResourcePair) bool {
	if m == nil {
		return false
	}

	return (m.Allocatable.Cmp(rhs.Allocatable) == 0) && (m.Allocated.Cmp(rhs.Allocated) == 0)
}

func (m *ResourcePair) LT(rhs ResourcePair) bool {
	if m == nil {
		return false
	}

	return m.Allocatable.Cmp(rhs.Allocatable) == -1
}
