package migrate

import (
	"github.com/akash-network/akash-api/go/node/market/v1beta3"
	"github.com/akash-network/akash-api/go/node/market/v1beta4"
)

func BidStateFromV1beta3(from v1beta3.Bid_State) v1beta4.Bid_State {
	return v1beta4.Bid_State(from)
}

func LeaseIDFromV1beta3(from v1beta3.LeaseID) v1beta4.LeaseID {
	return v1beta4.LeaseID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}

func BidIDFromV1beta3(from v1beta3.BidID) v1beta4.BidID {
	return v1beta4.BidID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}

func BidFromV1beta3(from v1beta3.Bid) v1beta4.Bid {
	return v1beta4.Bid{
		BidID:          BidIDFromV1beta3(from.BidID),
		State:          BidStateFromV1beta3(from.State),
		Price:          from.Price,
		CreatedAt:      from.CreatedAt,
		ResourcesOffer: v1beta4.ResourcesOffer{},
	}
}
