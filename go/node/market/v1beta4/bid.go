package v1beta4

import (
	"sort"
)

type ResourcesOffer []ResourceOffer

var _ sort.Interface = (*ResourcesOffer)(nil)

func (r *ResourceOffer) Dup() ResourceOffer {
	return ResourceOffer{
		Resources: r.Resources.Dup(),
		Count:     r.Count,
	}
}

func (s ResourcesOffer) Len() int {
	return len(s)
}

func (s ResourcesOffer) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s ResourcesOffer) Less(i, j int) bool {
	return s[i].Resources.ID < s[j].Resources.ID
}

func (s ResourcesOffer) Dup() ResourcesOffer {
	res := make(ResourcesOffer, 0, len(s))

	for _, ru := range s {
		res = append(res, ru.Dup())
	}

	return s
}
