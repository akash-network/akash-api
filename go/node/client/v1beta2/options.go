package v1beta2

type ClientOptions struct {
	tclient TxClient
}

type ClientOption func(*ClientOptions) *ClientOptions
