package migrate

import (
	"github.com/cosmos/cosmos-sdk/codec"

	v1 "pkg.akt.dev/go/node/market/v1"
	"pkg.akt.dev/go/node/market/v1beta5"

	"github.com/akash-network/akash-api/go/node/market/v1beta4"
)

func NewLeaseV1beta4() v1beta4.Lease {
	return v1beta4.Lease{}
}

func NewBidV1beta4() v1beta4.Bid {
	return v1beta4.Bid{}
}

func NewOrderV1beta4() v1beta4.Order {
	return v1beta4.Order{}
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

func BidV1beta4Prefix() []byte {
	return v1beta4.BidPrefix()
}

func OrderV1beta4Prefix() []byte {
	return v1beta4.OrderPrefix()
}

func LeaseV1beta4Prefix() []byte {
	return v1beta4.LeasePrefix()
}

func LeaseFromV1beta4(cdc codec.BinaryCodec, fromBz []byte) v1.Lease {
	var from v1beta4.Lease
	cdc.MustUnmarshal(fromBz, &from)

	return v1.Lease{
		ID:        LeaseIDFromV1beta4(from.LeaseID),
		State:     v1.Lease_State(from.State),
		Price:     from.Price,
		CreatedAt: from.CreatedAt,
		ClosedOn:  from.ClosedOn,
	}
}

func ResourcesOfferFromV1beta4(from v1beta4.ResourcesOffer) v1beta5.ResourcesOffer {
	res := make(v1beta5.ResourcesOffer, 0, len(from))

	return res
}

func BidStateFromV1beta4(from v1beta4.Bid_State) v1beta5.Bid_State {
	return v1beta5.Bid_State(from)
}

func BidFromV1beta4(cdc codec.BinaryCodec, fromBz []byte) v1beta5.Bid {
	var from v1beta4.Bid
	cdc.MustUnmarshal(fromBz, &from)

	return v1beta5.Bid{
		ID:             BidIDFromV1beta4(from.BidID),
		State:          BidStateFromV1beta4(from.State),
		Price:          from.Price,
		CreatedAt:      from.CreatedAt,
		ResourcesOffer: ResourcesOfferFromV1beta4(from.ResourcesOffer),
	}
}

func OrderFromV1beta4(cdc codec.BinaryCodec, fromBz []byte) v1beta5.Order {
	var from v1beta4.Order
	cdc.MustUnmarshal(fromBz, &from)

	return v1beta5.Order{
		ID:        OrderIDFromV1beta4(from.OrderID),
		State:     v1beta5.Order_State(from.State),
		Spec:      GroupSpecFromV1Beta3(from.Spec),
		CreatedAt: from.CreatedAt,
	}
}
