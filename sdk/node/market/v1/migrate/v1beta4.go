package migrate

import (
	"github.com/akash-network/akash-api/go/node/market/v1beta4"

	"go.akashd.io/sdk/node/market/v1"
)

func BidStateFromV1beta4(from v1beta4.Bid_State) v1.BidState {
	return v1.BidState(from)
}

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
		State:     v1.LeaseState(from.State),
		Price:     from.Price,
		CreatedAt: from.CreatedAt,
		ClosedOn:  from.ClosedOn,
	}
}
