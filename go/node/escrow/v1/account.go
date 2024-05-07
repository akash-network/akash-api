package v1

type Accounts []Account
type FractionalPayments []FractionalPayment

func (m *Account) HasDepositor() bool {
	return m.Owner != m.Depositor
}
