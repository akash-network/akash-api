// Package jwt provides JWT signing and verification methods for the Cosmos SDK.
// It includes functionality for creating and verifying JWT tokens using the ES256K
// signing method.
package jwt

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/golang-jwt/jwt/v5"
)

// SignerI wraps cosmos keyring and account info to provide a signer interface
type SignerI interface {
	keyring.Signer
	GetAddress() sdk.Address
}

// Signer implements SignerI interface
type Signer struct {
	keyring.Signer
	addr sdk.Address
}

type signer struct{}

var _ SignerI = &Signer{}
var _ jwt.SigningMethod = (*signer)(nil)

var (
	SigningMethodES256K *signer
)

func (s Signer) GetAddress() sdk.Address {
	return s.addr
}

func NewSigner(kr keyring.Keyring, addr sdk.Address) SignerI {
	return &Signer{
		Signer: kr,
		addr:   addr,
	}
}

func (s *signer) Sign(signingString string, key interface{}) ([]byte, error) {
	switch key := key.(type) {
	case SignerI:
		res, _, err := key.SignByAddress(key.GetAddress(), []byte(signingString))
		if err != nil {
			return nil, err
		}
		return res, nil
	default:
		return nil, fmt.Errorf("%w: ES256K sign expects cryptotypes.LedgerPrivKey", jwt.ErrInvalidKeyType)
	}
}

func (s *signer) Verify(signingString string, sig []byte, key interface{}) error {
	switch key := key.(type) {
	case cryptotypes.PubKey:
		if !key.VerifySignature([]byte(signingString), sig) {
			return jwt.ErrTokenSignatureInvalid
		}

		return nil
	default:
		return fmt.Errorf("%w: ES256K verify expects cryptotypes.PubKey", jwt.ErrInvalidKeyType)
	}
}

func (s *signer) Alg() string {
	return "ES256K"
}

func init() {
	SigningMethodES256K = &signer{}

	jwt.RegisterSigningMethod(SigningMethodES256K.Alg(), func() jwt.SigningMethod {
		return SigningMethodES256K
	})
}
