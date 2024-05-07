package v1

func (r *Memory) Dup() Memory {
	res := Memory{
		Quantity: r.Quantity.Dup(),
		Info:     r.Info.Dup(),
	}

	return res
}

func (s MemoryInfoS) Dup() MemoryInfoS {
	if len(s) == 0 {
		return nil
	}

	res := make(MemoryInfoS, 0, len(s))

	for _, n := range s {
		res = append(res, MemoryInfo{
			Vendor:    n.Vendor,
			Type:      n.Type,
			TotalSize: n.TotalSize,
			Speed:     n.Speed,
		})
	}

	return res
}
