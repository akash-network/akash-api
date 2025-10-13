package jwt

import (
	"encoding/json"
	"strings"

	"github.com/golang-jwt/jwt/v5"
	"github.com/stretchr/testify/require"

	jwttests "github.com/akash-network/akash-api/testdata/jwt"
)

type ES256KADR36Test struct {
	IntegrationTestSuite
}

func (s *ES256KADR36Test) TestSignVerify() {
	var testCases []es256kTestCase

	data, err := jwttests.GetTestsFile("cases_es256kadr36.json")
	if err != nil {
		s.T().Fatalf("could not read test data file: %v", err)
	}

	err = json.Unmarshal(data, &testCases)
	if err != nil {
		s.T().Fatalf("could not unmarshal test data: %v", err)
	}

	for _, tc := range testCases {
		parts := strings.Split(tc.TokenString, ".")
		require.Len(s.T(), parts, 3, "Invalid token string: %v", tc.TokenString)

		expectedClaims := &jwt.RegisteredClaims{Issuer: "bar"}

		key := Signer{
			Signer: s.kr,
			addr:   s.addr,
		}

		expectedTok := jwt.NewWithClaims(SigningMethodES256KADR36, expectedClaims)
		sigString, err := expectedTok.SignedString(key)
		require.NoError(s.T(), err)

		toSign := strings.Join(parts[0:2], ".")
		method := jwt.GetSigningMethod(tc.Expected.Alg)
		sig, err := method.Sign(toSign, key)
		require.NoError(s.T(), err, "Error signing token: %v", err)

		ssig := encodeSegment(sig)
		dsig := decodeSegment(s.T(), parts[2])

		err = method.Verify(toSign, dsig, NewVerifier(s.pubKey, s.addr))

		if !tc.MustFail {
			require.Equal(s.T(), parts[2], ssig, "Identical signatures\nbefore:\n%v\nafter:\n%v", parts[2], ssig)
			require.NoError(s.T(), err, "Sign produced an invalid signature: %v", err)
			require.Equal(s.T(), tc.TokenString, sigString)
			require.NotEqual(s.T(), sig, parts[2])
		} else {
			require.NotEqual(s.T(), parts[2], ssig, "Identical signatures\nbefore:\n%v\nafter:\n%v", parts[2], ssig)
			require.NotEqual(s.T(), tc.TokenString, sigString)
			require.Error(s.T(), err)
		}
	}
}
