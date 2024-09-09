package cli_test

import (
	"context"
	"testing"

	"github.com/cosmos/cosmos-sdk/testutil"
	"github.com/stretchr/testify/require"

	"pkg.akt.dev/go/cli"
	clitestutil "pkg.akt.dev/go/cli/testutil"
)

func TestGetMigrationCallback(t *testing.T) {
	for _, version := range cli.GetMigrationVersions() {
		require.NotNil(t, cli.GetMigrationCallback(version))
	}
}

func (s *GenesisCLITestSuite) TestMigrateGenesis() {
	testCases := []struct {
		name      string
		genesis   string
		target    string
		expErr    bool
		expErrMsg string
		check     func(jsonOut string)
	}{
		{
			"migrate 0.37 to 0.42",
			v037Exported,
			"v0.42",
			true, "Make sure that you have correctly migrated all Tendermint consensus params", func(_ string) {},
		},
		{
			"migrate 0.42 to 0.43",
			v040Valid,
			"v0.43",
			false, "",
			func(jsonOut string) {
				// Make sure the json output contains the ADR-037 gov weighted votes.
				s.Require().Contains(jsonOut, "\"weight\":\"1.000000000000000000\"")
			},
		},
	}

	for _, tc := range testCases {
		s.Run(tc.name, func() {
			genesisFile := testutil.WriteToNewTempFile(s.T(), tc.genesis)
			jsonOutput, err := clitestutil.ExecTestCLICmd(context.Background(), s.cctx, cli.MigrateGenesisCmd(), tc.target, genesisFile.Name())
			if tc.expErr {
				s.Require().Contains(err.Error(), tc.expErrMsg)
			} else {
				s.Require().NoError(err)
				tc.check(jsonOutput.String())
			}
		})
	}
}
