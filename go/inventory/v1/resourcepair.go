package v1

func (m *ResourcePair) Equal(rhs ResourcePair) bool {
	if m == nil {
		return false
	}

	return (m.Allocated.Cmp(rhs.Allocated) == 0) && (m.Allocatable.Cmp(rhs.Allocatable) == 0)
}
