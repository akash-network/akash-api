package testutil

import (
	"bytes"
	"context"
	"encoding/hex"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gogoproto/jsonpb"

	nutils "pkg.akt.dev/go/node/utils"
)

// GetTxFees is a gentle response to inappropriate approach of cli test utils
// send transaction may fail and calling cli routine won't know about it
func GetTxFees(ctx context.Context, t testing.TB, cctx client.Context, data []byte) sdk.FeeTx {
	t.Helper()

	res := getTxResponse(ctx, t, cctx, data)
	require.Zero(t, res.Code, res)

	var fees sdk.FeeTx
	err := cctx.Codec.UnpackAny(res.Tx, &fees)
	require.NoError(t, err)

	return fees
}

// ValidateTxSuccessful is a gentle response to inappropriate approach of cli test utils
// send transaction may fail and calling cli routine won't know about it
func ValidateTxSuccessful(ctx context.Context, t testing.TB, cctx client.Context, data []byte) (*sdk.TxResponse, sdk.Tx) {
	t.Helper()

	res := getTxResponse(ctx, t, cctx, data)
	require.Zero(t, res.Code, res)

	var tx sdk.Tx
	err := cctx.Codec.UnpackAny(res.Tx, &tx)
	require.NoError(t, err)

	return res, tx
}

func getTxResponse(ctx context.Context, t testing.TB, cctx client.Context, data []byte) *sdk.TxResponse {
	var resp sdk.TxResponse

	err := jsonpb.Unmarshal(bytes.NewBuffer(data), &resp)
	require.NoError(t, err)

	hash, err := hex.DecodeString(resp.TxHash)
	require.NoError(t, err)

	res, err := nutils.QueryTx(ctx, cctx, hash)
	require.NoError(t, err)

	return res
}
