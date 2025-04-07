package jwt

import (
	"strings"

	"github.com/golang-jwt/jwt/v5"
	"github.com/stretchr/testify/require"
)

type ES256kTest struct {
	IntegrationTestSuite
}

func (s *ES256kTest) TestSignVerify() {
	testCases := []struct {
		name        string
		tokenString string
		alg         string
		claims      map[string]interface{}
		valid       bool
	}{
		{
			name:        "Valid ES256K",
			tokenString: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJmb28iOiJiYXIifQ.oN4T_XM-RlqC56wSoz9avJxZbWtern-2wUwIcytBo_gUQdqmudiOSUs4DfM6yzEcFth9OsZCXyXH0iQHvJzI6A",
			alg:         "ES256K",
			claims:      map[string]interface{}{"foo": "bar"},
			valid:       true,
		},
		{
			name:        "Invalid ES256K",
			tokenString: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJmb28iOiJiYXIifQ.MEQCIHoSJnmGlPaVQDqacx_2XlXEhhqtWceVopjomc2PJLtdAiAUTeGPoNYxZw0z8mgOnnIcjoxRuNDVZvybRZF3wR1l8W",
			alg:         "ES256K",
			claims:      map[string]interface{}{"foo": "bar"},
			valid:       false,
		},
	}

	for _, tc := range testCases {
		parts := strings.Split(tc.tokenString, ".")
		require.Len(s.T(), parts, 3, "Invalid token string: %v", tc.tokenString)

		toSign := strings.Join(parts[0:2], ".")
		method := jwt.GetSigningMethod(tc.alg)
		sig, err := method.Sign(toSign, Signer{
			Signer: s.kr,
			addr:   s.info.GetAddress(),
		})
		require.NoError(s.T(), err, "Error signing token: %v", err)

		ssig := encodeSegment(sig)
		dsig := decodeSegment(s.T(), parts[2])

		err = method.Verify(toSign, dsig, s.info.GetPubKey())

		if tc.valid {
			require.Equal(s.T(), parts[2], ssig, "Identical signatures\nbefore:\n%v\nafter:\n%v", parts[2], ssig)
			require.NoError(s.T(), err, "Sign produced an invalid signature: %v", err)
		} else {
			require.NotEqual(s.T(), parts[2], ssig, "Identical signatures\nbefore:\n%v\nafter:\n%v", parts[2], ssig)
			require.Error(s.T(), err)
		}
	}
}

func decodeSegment(t interface{ Fatalf(string, ...any) }, signature string) (sig []byte) {
	var err error
	sig, err = jwt.NewParser().DecodeSegment(signature)
	if err != nil {
		t.Fatalf("could not decode segment: %v", err)
	}

	return
}

func encodeSegment(sig []byte) string {
	return (&jwt.Token{}).EncodeSegment(sig)
}
