package jwt

import (
	"context"
	"testing"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"

	_ "github.com/akash-network/akash-api/go/sdkutil"
)

const testMnemonic = "addict worth drip violin note olive final pelican perfect feel goat game horror brass fence deposit dutch improve setup stuff frost spirit smart alien"

type IntegrationTestSuite struct {
	suite.Suite

	kr   keyring.Keyring
	info keyring.Info
}

func (s *IntegrationTestSuite) SetupSuite() {
	s.T().Log("setting up integration test suite")

	s.kr = keyring.NewInMemory()

	cfg, err := sdk.GetSealedConfig(context.Background())
	require.NoError(s.T(), err)

	hdPath := hd.CreateHDPath(cfg.GetCoinType(), 0, 0).String()

	keyringAlgos, _ := s.kr.SupportedAlgorithms()
	algo, err := keyring.NewSigningAlgoFromString(string(hd.Secp256k1Type), keyringAlgos)
	require.NoError(s.T(), err)

	s.info, err = s.kr.NewAccount("test", testMnemonic, "", hdPath, algo)
	require.NoError(s.T(), err)

	s.T().Log("setting up integration test suite done")
}

func (s *IntegrationTestSuite) TearDownSuite() {
	s.T().Log("tearing down integration test suite")
}

func TestJWTTestSuite(t *testing.T) {
	suite.Run(t, new(ES256kTest))
	suite.Run(t, new(JWTTestSuite))
}
