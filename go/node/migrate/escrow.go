package migrate

import (
	"github.com/akash-network/akash-api/go/node/escrow/v1beta3"
	"github.com/cosmos/cosmos-sdk/codec"

	v1 "pkg.akt.dev/go/node/escrow/v1"
)

func AccountV1beta3Prefix() []byte {
	return v1beta3.AccountKeyPrefix()
}

func PaymentV1beta3Prefix() []byte {
	return v1beta3.PaymentKeyPrefix()
}

func AccountIDFromV1beta3(from v1beta3.AccountID) v1.AccountID {
	return v1.AccountID{
		Scope: from.Scope,
		XID:   from.XID,
	}
}

func AccountFromV1beta3(cdc codec.BinaryCodec, fromBz []byte) v1.Account {
	var from v1beta3.Account
	cdc.MustUnmarshal(fromBz, &from)

	to := v1.Account{
		ID:          AccountIDFromV1beta3(from.ID),
		Owner:       from.Owner,
		State:       v1.Account_State(from.State),
		Balance:     from.Balance,
		Transferred: from.Transferred,
		SettledAt:   from.SettledAt,
		Depositor:   from.Depositor,
		Funds:       from.Funds,
	}

	return to
}

func FractionalPaymentFromV1beta3(cdc codec.BinaryCodec, fromBz []byte) v1.FractionalPayment {
	var from v1beta3.FractionalPayment
	cdc.MustUnmarshal(fromBz, &from)

	to := v1.FractionalPayment{
		AccountID: AccountIDFromV1beta3(from.AccountID),
		PaymentID: from.PaymentID,
		Owner:     from.Owner,
		State:     v1.FractionalPayment_State(from.State),
		Rate:      from.Rate,
		Balance:   from.Balance,
		Withdrawn: from.Withdrawn,
	}

	return to
}
