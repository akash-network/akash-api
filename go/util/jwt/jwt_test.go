package jwt

import (
	"bytes"
	"encoding/json"
	"text/template"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/golang-jwt/jwt/v5"
	"github.com/stretchr/testify/require"

	jwttests "github.com/akash-network/akash-api/testdata/jwt"
)

type JWTTestSuite struct {
	IntegrationTestSuite
}

type jwtTestCase struct {
	Description string `json:"description"`
	Claims      Claims `json:"claims"`
	TokenString string `json:"tokenString"`
	Expected    struct {
		SignFail   bool   `json:"signFail"`
		VerifyFail bool   `json:"verifyFail"`
		Err        string `json:"error"`
	} `json:"expected"`
}

type testTemplate struct {
	Issuer   string
	Provider string
	Iat24h   int64
	Exp48h   int64
}

func (s *JWTTestSuite) initClaims(tc jwtTestCase) jwtTestCase {
	if tc.TokenString != "" {
		return tc
	}

	ehdr := encodeSegment([]byte(`{"alg":"ES256K","typ":"JWT"}`))

	var err error
	tc.Claims.iss, err = sdk.AccAddressFromBech32(tc.Claims.Issuer)
	require.NoError(s.T(), err)

	claims, err := json.Marshal(tc.Claims)
	require.NoError(s.T(), err)

	eclaims := encodeSegment(claims)
	data := ehdr + "." + eclaims

	method := jwt.GetSigningMethod("ES256K")
	sig, err := method.Sign(data, Signer{
		Signer: s.kr,
		addr:   s.info.GetAddress(),
	})

	tc.TokenString = data + "." + encodeSegment(sig)

	return tc
}

func (s *JWTTestSuite) TestSigning() {
	var testCases []jwtTestCase

	data, err := jwttests.GetTestsFile("cases_jwt.json.tmpl")
	if err != nil {
		s.T().Fatalf("could not read test data file: %v", err)
	}

	testTemplate := testTemplate{
		Issuer:   s.info.GetAddress().String(),
		Provider: s.info.GetAddress().String(),
		Iat24h:   jwt.NewNumericDate(time.Now().Add(24 * time.Hour)).Unix(),
		Exp48h:   jwt.NewNumericDate(time.Now().Add(48 * time.Hour)).Unix(),
	}

	tmpl, err := template.New("tests").Parse(string(data))
	if err != nil {
		s.T().Fatalf("could not parse test data template: %v", err)
	}

	parsedTmpl := &bytes.Buffer{}
	err = tmpl.Execute(parsedTmpl, testTemplate)
	if err != nil {
		s.T().Fatalf("could not execute test data template: %v", err)
	}

	err = json.Unmarshal(parsedTmpl.Bytes(), &testCases)
	if err != nil {
		s.T().Fatalf("could not unmarshal test data: %v", err)
	}

	for i := range testCases {
		testCases[i] = s.initClaims(testCases[i])
	}

	for _, tc := range testCases {
		s.Run(tc.Description, func() {
			token := jwt.NewWithClaims(jwt.GetSigningMethod("ES256K"), tc.Claims)
			tokenString, err := token.SignedString(Signer{
				Signer: s.kr,
				addr:   s.info.GetAddress(),
			})

			if tc.Expected.SignFail {
				require.Error(s.T(), err)
				require.Empty(s.T(), tokenString)
			} else {
				require.NoError(s.T(), err)
				require.Equal(s.T(), tc.TokenString, tokenString)
			}

			if !tc.Expected.VerifyFail {
				claims := &Claims{}
				_, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
					return s.info.GetPubKey(), nil
				}, jwt.WithValidMethods([]string{"ES256K"}))

				require.Equal(s.T(), &tc.Claims, claims)

				require.NoError(s.T(), err)
			} else {
				claims := &Claims{}
				_, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
					if token.Header["alg"] != "ES256K" {
						return nil, jwt.ErrInvalidKeyType
					}
					return s.info.GetPubKey(), nil
				}, jwt.WithValidMethods([]string{"ES256K"}))

				require.ErrorContains(s.T(), err, tc.Expected.Err)
			}
		})
	}
}
