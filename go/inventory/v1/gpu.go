package v1

func (s GPUs) Dup() GPUs {
	if len(s) == 0 {
		return nil
	}

	res := make(GPUs, 0, len(s))

	for _, g := range s {
		res = append(res, g.Dup())
	}

	return res
}

func (r *GPU) Dup() GPU {
	res := GPU{
		Quantity: r.Quantity.Dup(),
		Info:     r.Info.Dup(),
	}

	return res
}

func (s *GPUInfo) Dup() GPUInfo {
	res := GPUInfo{
		Vendor:     s.Vendor,
		Name:       s.Name,
		ModelID:    s.ModelID,
		Interface:  s.Interface,
		MemorySize: s.MemorySize,
	}

	return res
}

func (s GPUInfoS) Dup() GPUInfoS {
	if len(s) == 0 {
		return nil
	}

	res := make(GPUInfoS, 0, len(s))

	for _, n := range s {
		res = append(res, GPUInfo{
			Vendor:     n.Vendor,
			Name:       n.Name,
			ModelID:    n.ModelID,
			Interface:  n.Interface,
			MemorySize: n.MemorySize,
		})
	}

	return res
}
