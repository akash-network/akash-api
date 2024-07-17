package migrate

import (
	"github.com/akash-network/akash-api/go/node/escrow/v1beta3"

	v1 "pkg.akt.dev/go/node/escrow/v1"
)

func AccountIDFromV1beta3(from v1beta3.AccountID) v1.AccountID {
	return v1.AccountID{
		Scope: from.Scope,
		XID:   from.XID,
	}
}

func AccountFromV1beta3(from v1beta3.Account) v1.Account {
	to := v1.Account{
		ID:          AccountIDFromV1beta3(from.ID),
		Owner:       from.Owner,
		State:       v1.AccountState(from.State),
		Balance:     from.Balance,
		Transferred: from.Transferred,
		SettledAt:   from.SettledAt,
		Depositor:   from.Depositor,
		Funds:       from.Funds,
	}

	return to
}

func FractionalPaymentFromV1beta3(from v1beta3.FractionalPayment) v1.FractionalPayment {
	to := v1.FractionalPayment{
		AccountID: AccountIDFromV1beta3(from.AccountID),
		PaymentID: from.PaymentID,
		Owner:     from.Owner,
		State:     v1.PaymentState(from.State),
		Rate:      from.Rate,
		Balance:   from.Balance,
		Withdrawn: from.Withdrawn,
	}

	return to
}
