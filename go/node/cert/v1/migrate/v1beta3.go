package migrate

import (
	"github.com/akash-network/akash-api/go/node/cert/v1beta3"

	v1 "pkg.akt.dev/go/node/cert/v1"
)

func CertFromV1beta3(from v1beta3.Certificate) v1.Certificate {
	to := v1.Certificate{
		State:  v1.State(from.State),
		Cert: make([]byte, len(from.Cert)),
		Pubkey: make([]byte, len(from.Pubkey)),
	}

	copy(to.Cert, from.Cert)
	copy(to.Pubkey, from.Pubkey)

	return to
}
