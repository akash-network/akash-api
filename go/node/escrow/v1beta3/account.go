package v1beta3

func (m *Account) HasDepositor() bool {
	return m.Owner != m.Depositor
}
