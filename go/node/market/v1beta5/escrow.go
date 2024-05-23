package v1beta5

import (
	"fmt"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"

	dtypesv1 "pkg.akt.dev/go/node/deployment/v1"
	dtypes "pkg.akt.dev/go/node/deployment/v1beta4"
	etypes "pkg.akt.dev/go/node/escrow/v1"
	v1 "pkg.akt.dev/go/node/market/v1"
)

const (
	bidEscrowScope = "bid"
)

func EscrowAccountForBid(id v1.BidID) etypes.AccountID {
	return etypes.AccountID{
		Scope: bidEscrowScope,
		XID:   id.String(),
	}
}

func EscrowPaymentForLease(id v1.LeaseID) string {
	return fmt.Sprintf("%v/%v/%s", id.GSeq, id.OSeq, id.Provider)
}

func LeaseIDFromEscrowAccount(id etypes.AccountID, pid string) (v1.LeaseID, bool) {
	did, ok := dtypes.DeploymentIDFromEscrowAccount(id)
	if !ok {
		return v1.LeaseID{}, false
	}

	parts := strings.Split(pid, "/")
	if len(parts) != 3 {
		return v1.LeaseID{}, false
	}

	gseq, err := strconv.ParseUint(parts[0], 10, 32)
	if err != nil {
		return v1.LeaseID{}, false
	}

	oseq, err := strconv.ParseUint(parts[1], 10, 32)
	if err != nil {
		return v1.LeaseID{}, false
	}

	owner, err := sdk.AccAddressFromBech32(parts[2])
	if err != nil {
		return v1.LeaseID{}, false
	}

	return v1.MakeLeaseID(
		v1.MakeBidID(
			v1.MakeOrderID(
				dtypesv1.MakeGroupID(
					did, uint32(gseq)), uint32(oseq)), owner)), true
}
