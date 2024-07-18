package migrate

import (
	"github.com/akash-network/akash-api/go/node/market/v1beta4"

	"pkg.akt.dev/go/node/market/v1"
)

func LeaseIDFromV1beta4(from v1beta4.LeaseID) v1.LeaseID {
	return v1.LeaseID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}

func BidIDFromV1beta4(from v1beta4.BidID) v1.BidID {
	return v1.BidID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}

func OrderIDFromV1beta4(from v1beta4.OrderID) v1.OrderID {
	return v1.OrderID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
		GSeq:  from.GSeq,
		OSeq:  from.OSeq,
	}
}

func LeaseFromV1beta4(from v1beta4.Lease) v1.Lease {
	return v1.Lease{
		ID:        LeaseIDFromV1beta4(from.LeaseID),
		State:     v1.Lease_State(from.State),
		Price:     from.Price,
		CreatedAt: from.CreatedAt,
		ClosedOn:  from.ClosedOn,
	}
}