package migrate

import (
	"github.com/akash-network/akash-api/go/node/market/v1beta2"
	"github.com/akash-network/akash-api/go/node/market/v1beta3"
)

func LeaseIDFromV1beta2(from v1beta2.LeaseID) v1beta3.LeaseID {
	return v1beta3.LeaseID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}
