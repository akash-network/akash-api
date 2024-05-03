package migrate

import (
	"github.com/akash-network/akash-api/go/node/market/v1beta4"
	"github.com/akash-network/akash-api/go/node/market/v1beta5"
)

func BidStateFromV1beta4(from v1beta4.Bid_State) v1beta5.Bid_State {
	return v1beta5.Bid_State(from)
}

func LeaseIDFromV1beta4(from v1beta4.LeaseID) v1beta5.LeaseID {
	return v1beta5.LeaseID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}

func BidIDFromV1beta4(from v1beta4.BidID) v1beta5.BidID {
	return v1beta5.BidID{
		Owner:    from.Owner,
		DSeq:     from.DSeq,
		GSeq:     from.GSeq,
		OSeq:     from.OSeq,
		Provider: from.Provider,
	}
}

func BidFromV1beta3(from v1beta4.Bid) v1beta5.Bid {
	return v1beta5.Bid{
		BidID:          BidIDFromV1beta4(from.BidID),
		State:          BidStateFromV1beta4(from.State),
		Price:          from.Price,
		CreatedAt:      from.CreatedAt,
		ResourcesOffer: v1beta5.ResourcesOffer{},
	}
}
