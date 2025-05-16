package tls

import (
	"context"
	"crypto"
	"crypto/x509"
	"fmt"
	"math/big"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type InvalidReason int

const (
	EmptyPeerCertificate InvalidReason = iota
	TooManyPeerCertificates
	InvalidCN
	InvalidSN
	Expired
	Decode
	X509Parse
	Verify
)

type CertificateInvalidError struct {
	Cert   *x509.Certificate
	Reason InvalidReason
}

func (e CertificateInvalidError) Error() string {
	switch e.Reason {
	case EmptyPeerCertificate:
		return "tls: empty peer certificate(s)"
	case TooManyPeerCertificates:
		return "tls: too many peer certificates"
	case InvalidCN:
		return "tls: invalid certificate's subject common name"
	case InvalidSN:
		return "tls: invalid certificate serial number"
	case Expired:
		return "tls: attempt to use non-existing or revoked certificate"
	case Decode:
		return "tls: failed to decode onchain certificate"
	case X509Parse:
		return "tls: failed to parse certificate"
	case Verify:
		return "tls: unable to verify certificate"
	}

	return "tls: unknown error"
}

type CertificateQuerier interface {
	GetAccountCertificate(context.Context, sdk.Address, *big.Int) (*x509.Certificate, crypto.PublicKey, error)
}

func ValidatePeerCertificates(
	ctx context.Context,
	cquery CertificateQuerier,
	certs []*x509.Certificate,
	usage []x509.ExtKeyUsage,
) (sdk.Address, *x509.Certificate, error) {
	if len(certs) == 0 {
		return nil, nil, CertificateInvalidError{nil, EmptyPeerCertificate}
	}

	cert := certs[0]

	// validation
	var owner sdk.Address
	var err error

	if owner, err = sdk.AccAddressFromBech32(cert.Subject.CommonName); err != nil {
		return nil, nil, fmt.Errorf("%w: (%w)", CertificateInvalidError{cert, EmptyPeerCertificate}, err)
	}

	// 1. CommonName in issuer and Subject must match and be as Bech32 format
	if cert.Subject.CommonName != cert.Issuer.CommonName {
		return nil, nil, fmt.Errorf("%w: (%w)", CertificateInvalidError{cert, InvalidCN}, err)
	}

	// 2. serial number must be in
	if cert.SerialNumber == nil {
		return nil, nil, fmt.Errorf("%w: (%w)", CertificateInvalidError{cert, InvalidSN}, err)
	}

	// 3. look up the certificate on the chain
	onChainCert, _, err := cquery.GetAccountCertificate(ctx, owner, cert.SerialNumber)
	if err != nil {
		return nil, nil, fmt.Errorf("%w: (%w)", CertificateInvalidError{cert, Expired}, err)
	}

	clientCertPool := x509.NewCertPool()
	clientCertPool.AddCert(onChainCert)

	opts := x509.VerifyOptions{
		Roots:                     clientCertPool,
		CurrentTime:               time.Now(),
		KeyUsages:                 usage,
		MaxConstraintComparisions: 0,
	}

	if _, err = cert.Verify(opts); err != nil {
		return nil, nil, fmt.Errorf("%w: (%w)", CertificateInvalidError{cert, Verify}, err)
	}

	return owner, cert, nil
}
