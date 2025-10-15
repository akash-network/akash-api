package jwt

import (
	"context"
	"strings"
	"testing"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"

	_ "github.com/akash-network/akash-api/go/sdkutil"
	jwttests "github.com/akash-network/akash-api/testdata/jwt"
)

type IntegrationTestSuite struct {
	suite.Suite

	kr   keyring.Keyring
	info keyring.Info
	addr   sdk.Address
	pubKey cryptotypes.PubKey
}

func (s *IntegrationTestSuite) SetupSuite() {
	s.T().Log("setting up integration test suite")

	mnemonic, err := jwttests.GetTestsFile("mnemonic")
	if err != nil {
		s.T().Fatalf("could not read test data file: %v", err)
	}

	s.kr = keyring.NewInMemory()

	cfg, err := sdk.GetSealedConfig(context.Background())
	require.NoError(s.T(), err)

	hdPath := hd.CreateHDPath(cfg.GetCoinType(), 0, 0).String()

	keyringAlgos, _ := s.kr.SupportedAlgorithms()
	algo, err := keyring.NewSigningAlgoFromString(string(hd.Secp256k1Type), keyringAlgos)
	require.NoError(s.T(), err)

	s.info, err = s.kr.NewAccount("test", strings.TrimSuffix(string(mnemonic), "\n"), "", hdPath, algo)
	require.NoError(s.T(), err)

	s.addr = s.info.GetAddress()

	s.pubKey = s.info.GetPubKey()

	s.T().Log("setting up integration test suite done")
}

func (s *IntegrationTestSuite) TearDownSuite() {
	s.T().Log("tearing down integration test suite")
}

func TestJWTTestSuite(t *testing.T) {
	suite.Run(t, new(ES256kTest))
	suite.Run(t, new(JWTTestSuite))
}
