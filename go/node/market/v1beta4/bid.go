package v1beta4

import (
	"sort"

	"github.com/akash-network/akash-api/go/node/deployment/v1beta3"
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

func ResourceOfferFromRU(ru v1beta3.ResourceUnits) ResourcesOffer {
	res := make(ResourcesOffer, 0, len(ru))

	for _, r := range ru {
		res = append(res, ResourceOffer{
			Resources: r.Resources,
			Count:     r.Count,
		})
	}

	return res
}
