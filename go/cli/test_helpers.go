package cli

import (
	"context"
	"fmt"
	"strings"

	"github.com/cosmos/cosmos-sdk/server"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	sdktest "github.com/cosmos/cosmos-sdk/testutil"
	"github.com/cosmos/cosmos-sdk/x/bank/client/cli"

	cflags "pkg.akt.dev/go/cli/flags"
	cltypes "pkg.akt.dev/go/node/client/types"
	dv1 "pkg.akt.dev/go/node/deployment/v1"
	dv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
	mtypes "pkg.akt.dev/go/node/market/v1"
)

type FlagsSet []string

func TestFlags() FlagsSet {
	return FlagsSet{}
}

func (df FlagsSet) With(flags ...string) FlagsSet {
	res := make([]string, len(df)+len(flags))

	copy(res, df)
	copy(res, flags)

	return res
}

func (df FlagsSet) WithGasAutoFlags() FlagsSet {
	res := make([]string, len(df), len(df)+3)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagGas, cflags.GasFlagAuto))
	res = append(res, fmt.Sprintf("--%s=0.0025uakt", cflags.FlagGasPrices))
	res = append(res, fmt.Sprintf("--%s=1.5", cflags.FlagGasAdjustment))

	return res
}

func (df FlagsSet) WithSkipConfirm() FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=true", cflags.FlagSkipConfirmation))

	return res
}

func (df FlagsSet) WithBroadcastModeBlock() FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagBroadcastMode, cflags.BroadcastBlock))

	return res
}

func (df FlagsSet) WithDeposit(coin sdk.Coin) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagDeposit, coin))

	return res
}

func (df FlagsSet) WithPrice(coin sdk.DecCoin) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagPrice, coin))

	return res
}

func (df FlagsSet) WithFrom(acc sdk.Address) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagFrom, acc))

	return res
}

func (df FlagsSet) WithDepositor(acc sdk.Address) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagDepositorAccount, acc))

	return res
}

func (df FlagsSet) WithOutput(val string) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOutput, val))

	return res
}

func (df FlagsSet) WithSerial(val string) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagSerial, val))

	return res
}

func (df FlagsSet) WithOwner(val string) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOwner, val))

	return res
}

func (df FlagsSet) WithProvider(val string) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagProvider, val))

	return res
}

func (df FlagsSet) WithDseq(val uint64) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagDSeq, val))

	return res
}

func (df FlagsSet) WithGseq(val uint32) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagGSeq, val))

	return res
}

func (df FlagsSet) WithOseq(val uint32) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagOSeq, val))

	return res
}

func (df FlagsSet) WithDeploymentID(val dv1.DeploymentID) FlagsSet {
	res := make([]string, len(df), len(df)+2)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOwner, val.Owner))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagDSeq, val.DSeq))

	return res
}

func (df FlagsSet) WithGroupID(val dv1.GroupID) FlagsSet {
	res := make([]string, len(df), len(df)+3)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOwner, val.Owner))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagDSeq, val.DSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagGSeq, val.GSeq))

	return res
}

func (df FlagsSet) WithOrderID(val mtypes.OrderID) FlagsSet {
	res := make([]string, len(df), len(df)+4)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOwner, val.Owner))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagDSeq, val.DSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagGSeq, val.GSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagOSeq, val.OSeq))

	return res
}

func (df FlagsSet) WithBidID(val mtypes.BidID) FlagsSet {
	res := make([]string, len(df), len(df)+5)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOwner, val.Owner))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagDSeq, val.DSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagGSeq, val.GSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagOSeq, val.OSeq))
	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagProvider, val.Provider))

	return res
}

func (df FlagsSet) WithLeaseID(val mtypes.LeaseID) FlagsSet {
	res := make([]string, len(df), len(df)+5)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagOwner, val.Owner))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagDSeq, val.DSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagGSeq, val.GSeq))
	res = append(res, fmt.Sprintf("--%s=%d", cflags.FlagOSeq, val.OSeq))
	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagProvider, val.Provider))

	return res
}

func (df FlagsSet) WithState(val string) FlagsSet {
	res := make([]string, len(df), len(df)+1)

	copy(res, df)

	res = append(res, fmt.Sprintf("--%s=%s", cflags.FlagState, val))

	return res
}

func (df FlagsSet) WithOutputJSON() FlagsSet {
	return df.WithOutput("json")
}

// ExecTxTestCLICmd builds the client context, mocks the output and executes the command.
func ExecTxTestCLICmd(ctx context.Context, cctx client.Context, cmd *cobra.Command, extraArgs ...string) (sdktest.BufferWriter, error) {
	_, out := sdktest.ApplyMockIO(cmd)

	{
		dupFlags := make(map[string]bool)
		for _, arg := range extraArgs {
			if !strings.HasPrefix(arg, "--") {
				continue
			}

			arg = strings.TrimPrefix(arg, "--")
			tokens := strings.Split(arg, "=")

			if _, exists := dupFlags[tokens[0]]; exists {
				return out, fmt.Errorf("test: duplicated flag \"%s\"", tokens[0])
			}

			dupFlags[tokens[0]] = true
		}
	}

	cmd.SetArgs(extraArgs)
	err := cmd.ParseFlags(extraArgs)

	if err != nil {
		return out, err
	}

	cctx = cctx.WithOutput(out)

	if ctx == nil {
		ctx = context.Background()
	}

	opts, err := cltypes.ClientOptionsFromFlags(cmd.Flags())
	if err != nil {
		return out, err
	}

	ctx = context.WithValue(ctx, client.ClientContextKey, &client.Context{})
	ctx = context.WithValue(ctx, server.ServerContextKey, server.NewDefaultContext())
	cmd.SetContext(ctx)

	if err = client.SetCmdClientContextHandler(cctx, cmd); err != nil {
		return out, err
	}

	tctx, err := client.GetClientTxContext(cmd)
	if err != nil {
		return out, err
	}

	cl, err := DiscoverClient(ctx, tctx, opts...)
	if err != nil {
		return out, err
	}

	ctx = context.WithValue(ctx, ContextTypeClient, cl)

	cmd.SetContext(ctx)

	if err := cmd.Execute(); err != nil {
		return out, err
	}

	return out, nil
}

// ExecQueryTestCLICmd builds the client context, mocks the output and executes the command.
func ExecQueryTestCLICmd(ctx context.Context, cctx client.Context, cmd *cobra.Command, extraArgs ...string) (sdktest.BufferWriter, error) {
	_, out := sdktest.ApplyMockIO(cmd)

	{
		dupFlags := make(map[string]bool)
		for _, arg := range extraArgs {
			if !strings.HasPrefix(arg, "--") {
				continue
			}

			arg = strings.TrimPrefix(arg, "--")
			tokens := strings.Split(arg, "=")

			if _, exists := dupFlags[tokens[0]]; exists {
				return out, fmt.Errorf("test: duplicated flag \"%s\"", tokens[0])
			}

			dupFlags[tokens[0]] = true
		}
	}

	cmd.SetArgs(extraArgs)
	err := cmd.ParseFlags(extraArgs)

	if err != nil {
		return out, err
	}

	cctx = cctx.WithOutput(out)

	if ctx == nil {
		ctx = context.Background()
	}

	ctx = context.WithValue(ctx, client.ClientContextKey, &client.Context{})
	ctx = context.WithValue(ctx, server.ServerContextKey, server.NewDefaultContext())
	cmd.SetContext(ctx)

	if err = client.SetCmdClientContextHandler(cctx, cmd); err != nil {
		return out, err
	}

	qctx, err := client.GetClientQueryContext(cmd)
	if err != nil {
		return out, err
	}

	qcl, err := DiscoverQueryClient(ctx, qctx)
	if err != nil {
		return out, err
	}

	ctx = context.WithValue(ctx, ContextTypeQueryClient, qcl)
	cmd.SetContext(ctx)

	if err := cmd.Execute(); err != nil {
		return out, err
	}

	return out, nil
}

func MsgSendExec(ctx context.Context, cctx client.Context, from, to, amount fmt.Stringer, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{from.String(), to.String(), amount.String()}
	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, NewBankSendTxCmd(), args...)
}

func QueryBalancesExec(ctx context.Context, cctx client.Context, address fmt.Stringer, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{address.String(), fmt.Sprintf("--%s=json", cflags.FlagOutput)}
	args = append(args, extraArgs...)

	return ExecQueryTestCLICmd(ctx, cctx, cli.GetBalancesCmd(), args...)
}

// ======= Certificate commands =========

// TxGenerateServerExec is used for testing create server certificate tx
func TxGenerateServerExec(ctx context.Context, cctx client.Context, host string, extraArgs ...string) (sdktest.BufferWriter, error) {
	var args []string

	if len(host) != 0 { // for testing purposes, of passing no arguments
		args = []string{host}
	}

	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdGenerateServer(), args...)
}

// TxGenerateClientExec is used for testing create client certificate tx
func TxGenerateClientExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdGenerateClient(), extraArgs...)
}

// TxPublishServerExec is used for testing create server certificate tx
func TxPublishServerExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdPublishServer(), extraArgs...)
}

// TxPublishClientExec is used for testing create client certificate tx
func TxPublishClientExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdPublishClient(), extraArgs...)
}

// TxRevokeServerExec is used for testing create server certificate tx
func TxRevokeServerExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdRevokeServer(), extraArgs...)
}

// TxRevokeClientExec is used for testing create client certificate tx
func TxRevokeClientExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdRevokeClient(), extraArgs...)
}

// QueryCertificatesExec is used for testing certificates query
func QueryCertificatesExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetCertificates(), extraArgs...)
}

// QueryCertificateExec is used for testing certificate query
func QueryCertificateExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetCertificates(), extraArgs...)
}

// ======= Deployment commands =========

// TxCreateDeploymentExec is used for testing create deployment tx
func TxCreateDeploymentExec(ctx context.Context, cctx client.Context, filePath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filePath,
	}

	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentCreate(), args...)
}

// TxUpdateDeploymentExec is used for testing update deployment tx
func TxUpdateDeploymentExec(ctx context.Context, cctx client.Context, filePath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filePath,
	}

	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentUpdate(), args...)
}

// TxCloseDeploymentExec is used for testing close deployment tx
// requires --dseq, --fees
func TxCloseDeploymentExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentClose(), extraArgs...)
}

// TxDepositDeploymentExec is used for testing deposit deployment tx
func TxDepositDeploymentExec(ctx context.Context, cctx client.Context, deposit sdk.Coin, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		deposit.String(),
	}

	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentDeposit(), args...)
}

// TxCloseGroupExec is used for testing close group tx
func TxCloseGroupExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentGroupClose(), extraArgs...)
}

// QueryDeploymentsExec is used for testing deployments query
func QueryDeploymentsExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdDeployments(), extraArgs...)
}

// QueryDeploymentExec is used for testing deployment query
func QueryDeploymentExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdDeployment(), extraArgs...)
}

// QueryGroupExec is used for testing group query
func QueryGroupExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetGroup(), extraArgs...)
}

func TxGrantAuthorizationExec(ctx context.Context, cctx client.Context, grantee sdk.AccAddress, extraArgs ...string) (sdktest.BufferWriter, error) {
	dmin, _ := dv1beta4.DefaultParams().MinDepositFor("uakt")

	spendLimit := sdk.NewCoin(dmin.Denom, dmin.Amount.MulRaw(3))
	args := []string{
		grantee.String(),
		spendLimit.String(),
	}
	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentGrantAuthorization(), args...)
}

func TxRevokeAuthorizationExec(ctx context.Context, cctx client.Context, grantee sdk.AccAddress, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		grantee.String(),
	}
	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdDeploymentRevokeAuthorization(), args...)
}

// ======= Market commands =============

// TxCreateBidExec is used for testing create bid tx
func TxCreateBidExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdMarketBidCreate(), extraArgs...)
}

// TxCloseBidExec is used for testing close bid tx
func TxCloseBidExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdMarketBidClose(), extraArgs...)
}

// TxCreateLeaseExec is used for creating a lease
func TxCreateLeaseExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdMarketLeaseCreate(), extraArgs...)
}

// TxCloseLeaseExec is used for testing close order tx
func TxCloseLeaseExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecTxTestCLICmd(ctx, cctx, cmdMarketLeaseClose(), extraArgs...)
}

// QueryOrdersExec is used for testing orders query
func QueryOrdersExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetOrders(), args...)
}

// QueryOrderExec is used for testing order query
func QueryOrderExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetOrder(), extraArgs...)
}

// QueryBidsExec is used for testing bids query
func QueryBidsExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetBids(), args...)
}

// QueryBidExec is used for testing bid query
func QueryBidExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetBid(), extraArgs...)
}

// QueryLeasesExec is used for testing leases query
func QueryLeasesExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetLeases(), args...)
}

// QueryLeaseExec is used for testing lease query
func QueryLeaseExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetLease(), extraArgs...)
}

// ======= Provider commands ===========

// TxCreateProviderExec is used for testing create provider tx
func TxCreateProviderExec(ctx context.Context, cctx client.Context, filepath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filepath,
	}

	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdProviderCreate(), args...)
}

// TxUpdateProviderExec is used for testing update provider tx
func TxUpdateProviderExec(ctx context.Context, cctx client.Context, filepath string, extraArgs ...string) (sdktest.BufferWriter, error) {
	args := []string{
		filepath,
	}

	args = append(args, extraArgs...)

	return ExecTxTestCLICmd(ctx, cctx, cmdProviderUpdate(), args...)
}

// QueryProvidersExec is used for testing providers query
func QueryProvidersExec(ctx context.Context, cctx client.Context, args ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetProviders(), args...)
}

// QueryProviderExec is used for testing provider query
func QueryProviderExec(ctx context.Context, cctx client.Context, extraArgs ...string) (sdktest.BufferWriter, error) {
	return ExecQueryTestCLICmd(ctx, cctx, cmdGetProvider(), extraArgs...)
}
