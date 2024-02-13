package v1beta2

type ClientOptions struct {
	tclient TxClient // nolint: unused
}

type ClientOption func(*ClientOptions) *ClientOptions
