package jwt

import (
	"encoding/json"
	"strings"

	"github.com/golang-jwt/jwt/v5"
	"github.com/stretchr/testify/require"

	jwttests "github.com/akash-network/akash-api/testdata/jwt"
)

type ES256kTest struct {
	IntegrationTestSuite
}

type es256kTestCase struct {
	Description string `json:"description"`
	TokenString string `json:"tokenString"`
	Expected    struct {
		Alg    string `json:"alg"`
		Claims Claims `json:"claims"`
	} `json:"expected"`
	MustFail bool `json:"mustFail"`
}

func (s *ES256kTest) TestSignVerify() {
	var testCases []es256kTestCase

	data, err := jwttests.GetTestsFile("cases_es256k.json")
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

		toSign := strings.Join(parts[0:2], ".")
		method := jwt.GetSigningMethod(tc.Expected.Alg)
		sig, err := method.Sign(toSign, Signer{
			Signer: s.kr,
			addr:   s.info.GetAddress(),
		})
		require.NoError(s.T(), err, "Error signing token: %v", err)

		ssig := encodeSegment(sig)
		dsig := decodeSegment(s.T(), parts[2])

		err = method.Verify(toSign, dsig, s.info.GetPubKey())

		if !tc.MustFail {
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
