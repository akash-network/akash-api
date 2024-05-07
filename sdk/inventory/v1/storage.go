package v1

func (s ClusterStorage) Dup() ClusterStorage {
	res := make(ClusterStorage, 0, len(s))

	for _, storage := range s {
		res = append(res, Storage{
			Quantity: storage.Quantity.Dup(),
			Info:     storage.Info.Dup(),
		})
	}
	return res
}

func (r *Storage) Dup() Storage {
	res := Storage{
		Quantity: r.Quantity.Dup(),
		Info:     r.Info.Dup(),
	}

	return res
}

func (s *StorageInfo) Dup() StorageInfo {
	return StorageInfo{
		Class: s.Class,
		IOPS:  s.IOPS,
	}
}
