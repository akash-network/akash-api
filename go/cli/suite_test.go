package cli_test

import (
	"testing"

	"github.com/stretchr/testify/suite"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	testutilmod "github.com/cosmos/cosmos-sdk/types/module/testutil"
)

type CLITestSuite struct {
	suite.Suite

	kr      keyring.Keyring
	encCfg  testutilmod.TestEncodingConfig
	baseCtx client.Context
	cctx    client.Context
}

func TestCLITestSuite(t *testing.T) {
	suite.Run(t, new(AuthCLITestSuite))
	suite.Run(t, new(AuthzCLITestSuite))
	suite.Run(t, new(BankCLITestSuite))
	suite.Run(t, new(GovCLITestSuite))
	suite.Run(t, new(GenesisCLITestSuite))
}
