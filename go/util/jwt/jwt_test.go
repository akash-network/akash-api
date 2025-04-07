package jwt

import (
	"encoding/json"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/stretchr/testify/require"
)

type JWTTestSuite struct {
	IntegrationTestSuite
}

type jwtTestCase struct {
	name        string
	claims      Claims
	tokenString string
	signFail    bool
	verifyFail  bool
	verifyErr   error
}

func (s *JWTTestSuite) initClaims(tc jwtTestCase) jwtTestCase {
	ehdr := encodeSegment([]byte(`{"alg":"ES256K","typ":"JWT"}`))
	claims, err := json.Marshal(tc.claims)
	require.NoError(s.T(), err)

	eclaims := encodeSegment(claims)
	data := ehdr + "." + eclaims

	method := jwt.GetSigningMethod("ES256K")
	sig, err := method.Sign(data, Signer{
		Signer: s.kr,
		addr:   s.info.GetAddress(),
	})

	tc.tokenString = data + "." + encodeSegment(sig)

	return tc
}

func (s *JWTTestSuite) TestSigning() {
	testCases := []jwtTestCase{
		{
			name:        "sign valid/verify fail with invalid issuer",
			claims:      Claims{},
			tokenString: "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2ZXJzaW9uIjoiIiwibGVhc2VzIjp7ImFjY2VzcyI6IiJ9fQ.fQFwGyhJDyF9i_zCX6IwJ43_arjs_1qJmxNSph6t8INMMZ7hBvrzwg0Ym8N06G7O_ZDw0mujQCfmOmR1jegnmA",
			signFail:    false,
			verifyFail:  true,
			verifyErr:   jwt.ErrTokenInvalidClaims,
		},
		{
			name: "sign valid/verify fail with empty iat",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer: s.info.GetAddress().String(),
				},
			},
			tokenString: "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJha2FzaDFxdWZhM3h6cmYzNHF2d3llamtodm5jNHBzZjQ5ZmZ0YXcwYXNtaCIsInZlcnNpb24iOiIiLCJsZWFzZXMiOnsiYWNjZXNzIjoiIn19.xJmyqk4-2LXPa_l3wQdZhDSsTUatYO8SxBSr_D7_uust0LOFLUqdwIAAX8jpFoWTbbgWN0cQhPNOcBrI3-P9XQ",
			signFail:    false,
			verifyFail:  true,
			verifyErr:   jwt.ErrTokenInvalidClaims,
		},
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail with invalid exp",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:   s.info.GetAddress().String(),
					IssuedAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail with invalid version",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail with invalid access type",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail with invalid access type/2",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: "unknown",
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify valid full access",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeFull,
				},
			},
			signFail:   false,
			verifyFail: false,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/specific provider/missing scope",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify pass granular access/specific provider/scope",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
						},
					},
				},
			},
			signFail:   false,
			verifyFail: false,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/duplicate provider",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
						},
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/specific provider/duplicate scope",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
								PermissionScopeSendManifest,
							},
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/specific provider/unknown scope",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								"unknown",
							},
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify pass granular access/specific provider/service",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							Services: []string{"web"},
						},
					},
				},
			},
			signFail:   false,
			verifyFail: false,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/specific provider/service",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							Services: []string{"web", "web"},
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify pass granular access/dseq",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							DSeq: 1,
						},
					},
				},
			},
			signFail:   false,
			verifyFail: false,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/gseq",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							GSeq: 1,
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/oseq",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							OSeq: 1,
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify fail granular access/dseq/oseq",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							DSeq: 1,
							OSeq: 1,
						},
					},
				},
			},
			signFail:   false,
			verifyFail: true,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
		s.initClaims(jwtTestCase{
			name: "sign valid/verify pass granular access/dseq/gseq/oseq",
			claims: Claims{
				RegisteredClaims: jwt.RegisteredClaims{
					Issuer:    s.info.GetAddress().String(),
					IssuedAt:  jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
					ExpiresAt: jwt.NewNumericDate(time.Now().Add(48 * time.Hour)),
				},
				Version: "v1",
				Leases: Leases{
					Access: AccessTypeGranular,
					Permissions: Permissions{
						Permission{
							Provider: s.info.GetAddress(),
							Scope: []PermissionScope{
								PermissionScopeSendManifest,
							},
							DSeq: 1,
							GSeq: 1,
							OSeq: 1,
						},
					},
				},
			},
			signFail:   false,
			verifyFail: false,
			verifyErr:  jwt.ErrTokenInvalidClaims,
		}),
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			token := jwt.NewWithClaims(jwt.GetSigningMethod("ES256K"), tc.claims)
			tokenString, err := token.SignedString(Signer{
				Signer: s.kr,
				addr:   s.info.GetAddress(),
			})

			if tc.signFail {
				require.Error(s.T(), err)
				require.Empty(s.T(), tokenString)
			} else {
				require.NoError(s.T(), err)
				require.Equal(s.T(), tc.tokenString, tokenString)
			}

			if !tc.verifyFail {
				claims := &Claims{}
				_, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
					return s.info.GetPubKey(), nil
				}, jwt.WithValidMethods([]string{"ES256K"}))

				require.Equal(s.T(), &tc.claims, claims)

				require.NoError(s.T(), err)
			} else {
				claims := &Claims{}
				_, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
					if token.Header["alg"] != "ES256K" {
						return nil, jwt.ErrInvalidKeyType
					}
					return s.info.GetPubKey(), nil
				}, jwt.WithValidMethods([]string{"ES256K"}))

				require.ErrorIs(s.T(), err, tc.verifyErr)
			}
		})
	}
}
