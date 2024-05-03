package v1beta5

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	GatewayVersion = "v1beta5"
)

func (m QueryLeasesResponse) TotalPriceAmount() sdk.Dec {
	total := sdk.NewDec(0)

	for _, lease := range m.Leases {
		total = total.Add(lease.Lease.Price.Amount)
	}

	return total
}
