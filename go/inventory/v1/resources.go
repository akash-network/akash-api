package v1

func (s *NodeResources) Dup() NodeResources {
	res := NodeResources{
		CPU:              s.CPU.Dup(),
		GPU:              s.GPU.Dup(),
		Memory:           s.Memory.Dup(),
		EphemeralStorage: s.EphemeralStorage.Dup(),
		VolumesAttached:  s.VolumesAttached.Dup(),
		VolumesMounted:   s.VolumesMounted.Dup(),
	}

	return res
}
