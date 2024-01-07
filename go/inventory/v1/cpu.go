package v1

func (r *CPU) Dup() CPU {
	res := CPU{
		Quantity: r.Quantity.Dup(),
		Info:     r.Info.Dup(),
	}

	return res
}

func (s CPUInfoS) Dup() CPUInfoS {
	if len(s) == 0 {
		return nil
	}

	res := make(CPUInfoS, 0, len(s))

	for _, n := range s {
		res = append(res, CPUInfo{
			ID:     n.ID,
			Vendor: n.Vendor,
			Model:  n.Model,
			Vcores: n.Vcores,
		})
	}

	return res
}
