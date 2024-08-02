package v1

import (
	"crypto/x509"
	"encoding/pem"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func ParseAndValidateCertificate(owner sdk.Address, crt, pub []byte) (*x509.Certificate, error) {
	blk, rest := pem.Decode(pub)
	if blk == nil || len(rest) > 0 {
		return nil, ErrInvalidPubkeyValue
	}

	if blk.Type != PemBlkTypeECPublicKey {
		return nil, fmt.Errorf("%w: invalid pem block type", ErrInvalidPubkeyValue)
	}

	blk, rest = pem.Decode(crt)
	if blk == nil || len(rest) > 0 {
		return nil, ErrInvalidCertificateValue
	}

	if blk.Type != PemBlkTypeCertificate {
		return nil, fmt.Errorf("%w: invalid pem block type", ErrInvalidCertificateValue)
	}

	cert, err := x509.ParseCertificate(blk.Bytes)
	if err != nil {
		return nil, err
	}

	cowner, err := sdk.AccAddressFromBech32(cert.Subject.CommonName)
	if err != nil {
		return nil, fmt.Errorf("%w: %s", ErrInvalidCertificateValue, err.Error())
	}

	if !owner.Equals(cowner) {
		return nil, fmt.Errorf("%w: CommonName does not match owner", ErrInvalidCertificateValue)
	}

	return cert, nil
}

func (m *ID) String() string {
	return fmt.Sprintf("%s/%s", m.Owner, m.Serial)
}

func (m *ID) Equals(val ID) bool {
	return (m.Owner == val.Owner) && (m.Serial == val.Serial)
}

func (m Certificate) Validate(owner sdk.Address) error {
	if m.State != CertificateValid {
		return ErrInvalidState
	}

	_, err := ParseAndValidateCertificate(owner, m.Cert, m.Pubkey)
	if err != nil {
		return err
	}

	return nil
}

func (m Certificate) IsState(state State) bool {
	return m.State == state
}
