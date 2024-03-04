package v1beta2

import (
	"bufio"
	"context"
	"encoding/hex"
	"errors"
	"fmt"
	"os"
	"strings"
	"time"
	"unsafe"

	"github.com/boz/go-lifecycle"
	"github.com/cosmos/cosmos-sdk/client/input"
	"github.com/edwingeng/deque/v2"
	"github.com/gogo/protobuf/proto"
	"github.com/spf13/pflag"

	"github.com/tendermint/tendermint/libs/log"
	ttypes "github.com/tendermint/tendermint/types"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authtx "github.com/cosmos/cosmos-sdk/x/auth/tx"

	"github.com/akash-network/akash-api/go/util/ctxlog"
)

var (
	ErrNotRunning       = errors.New("tx client: not running")
	ErrSyncTimedOut     = errors.New("tx client: timed-out waiting for sequence sync")
	ErrNodeCatchingUp   = errors.New("tx client: cannot sync from catching up node")
	ErrAdjustGas        = errors.New("tx client: couldn't adjust gas")
	ErrSimulateOffline  = errors.New("tx client: cannot simulate tx in offline mode")
	ErrBroadcastOffline = errors.New("tx client: cannot broadcast tx in offline mode")
	ErrTxCanceledByUser = errors.New("tx client: transaction declined by user input")
)

const (
	BroadcastDefaultTimeout    = 30 * time.Second
	BroadcastBlockRetryTimeout = 300 * time.Second
	broadcastBlockRetryPeriod  = time.Second
	sequenceSyncTimeout        = 30 * time.Second

	// sadface.

	// Only way to detect the timeout error.
	// https://github.com/tendermint/tendermint/blob/46e06c97320bc61c4d98d3018f59d47ec69863c9/rpc/core/mempool.go#L124
	timeoutErrorMessage = "timed out waiting for tx to be included in a block"

	// Only way to check for tx not found error.
	// https://github.com/tendermint/tendermint/blob/46e06c97320bc61c4d98d3018f59d47ec69863c9/rpc/core/tx.go#L31-L33
	notFoundErrorMessageSuffix = ") not found"
)

type BroadcastOptions struct {
	resultAsError bool
}

type BroadcastOption func(*BroadcastOptions) *BroadcastOptions

func WithResultCodeAsError() BroadcastOption {
	return func(opts *BroadcastOptions) *BroadcastOptions {
		opts.resultAsError = true
		return opts
	}
}

type broadcastResp struct {
	resp interface{}
	err  error
}

type broadcastReq struct {
	id         uintptr
	responsech chan<- broadcastResp
	msgs       []sdk.Msg
}

type seqResp struct {
	seq uint64
	err error
}

type seqReq struct {
	curr uint64
	ch   chan<- seqResp
}

type broadcast struct {
	donech chan<- error
	respch chan<- broadcastResp
	msgs   []sdk.Msg
}

type serialBroadcaster struct {
	ctx              context.Context
	cctx             sdkclient.Context
	info             keyring.Info
	broadcastTimeout time.Duration
	reqch            chan broadcastReq
	broadcastch      chan broadcast
	seqreqch         chan seqReq
	lc               lifecycle.Lifecycle
	nd               *node
	log              log.Logger
}

func newSerialTx(ctx context.Context, cctx sdkclient.Context, flags *pflag.FlagSet, nd *node, timeout time.Duration) (*serialBroadcaster, error) {
	txf := tx.NewFactoryCLI(cctx, flags).WithTxConfig(cctx.TxConfig).WithAccountRetriever(cctx.AccountRetriever)

	keyname := cctx.GetFromName()
	info, err := txf.Keybase().Key(keyname)
	if err != nil {
		info, err = txf.Keybase().KeyByAddress(cctx.GetFromAddress())
	}

	if err != nil {
		return nil, err
	}

	// populate account number, current sequence number
	txf, err = PrepareFactory(cctx, txf)
	if err != nil {
		return nil, err
	}

	client := &serialBroadcaster{
		ctx:              ctx,
		cctx:             cctx,
		info:             info,
		broadcastTimeout: timeout,
		lc:               lifecycle.New(),
		reqch:            make(chan broadcastReq, 1),
		broadcastch:      make(chan broadcast, 1),
		seqreqch:         make(chan seqReq),
		nd:               nd,
		log:              ctxlog.Logger(ctx).With("cmp", "client/broadcaster"),
	}

	go client.lc.WatchContext(ctx)
	go client.run()
	go client.broadcaster(txf)

	if !client.cctx.Offline {
		go client.sequenceSync()
	}

	return client, nil
}

func (c *serialBroadcaster) Broadcast(ctx context.Context, msgs []sdk.Msg, opts ...BroadcastOption) (interface{}, error) {
	responsech := make(chan broadcastResp, 1)
	request := broadcastReq{
		responsech: responsech,
		msgs:       msgs,
	}

	request.id = uintptr(unsafe.Pointer(&request))

	ropts := &BroadcastOptions{}

	for _, opt := range opts {
		_ = opt(ropts)
	}

	select {
	case c.reqch <- request:
	case <-ctx.Done():
		return nil, ctx.Err()
	case <-c.lc.ShuttingDown():
		return nil, ErrNotRunning
	}

	select {
	case resp := <-responsech:
		// if returned error is sdk error, it is likely to be wrapped response so discard it
		// as clients supposed to check Tx code, unless resp is nil, which is error during Tx preparation
		if !errors.As(resp.err, &sdkerrors.Error{}) || resp.resp == nil || ropts.resultAsError {
			return resp.resp, resp.err
		}
		return resp.resp, nil
	case <-ctx.Done():
		return nil, ctx.Err()
	case <-c.lc.ShuttingDown():
		return nil, ErrNotRunning
	}
}

func (c *serialBroadcaster) run() {
	defer c.lc.ShutdownCompleted()

	pending := deque.NewDeque[broadcastReq]()
	broadcastCh := c.broadcastch
	broadcastDoneCh := make(chan error, 1)

	tryBroadcast := func() {
		if pending.Len() == 0 {
			return
		}

		req := pending.Peek(0)

		select {
		case broadcastCh <- broadcast{
			donech: broadcastDoneCh,
			respch: req.responsech,
			msgs:   req.msgs,
		}:
			broadcastCh = nil
			_ = pending.PopFront()
		default:
		}
	}

loop:
	for {
		select {
		case err := <-c.lc.ShutdownRequest():
			c.lc.ShutdownInitiated(err)
			break loop
		case req := <-c.reqch:
			pending.PushBack(req)

			tryBroadcast()
		case err := <-broadcastDoneCh:
			broadcastCh = c.broadcastch

			if err != nil {
				c.log.Error("unable to broadcast messages", "error", err)
			}
			tryBroadcast()
		}
	}
}

func (c *serialBroadcaster) broadcaster(ptxf tx.Factory) {
	syncSequence := func(f tx.Factory, rErr error) (uint64, bool) {
		if rErr != nil {
			if sdkerrors.ErrWrongSequence.Is(rErr) {
				// attempt to sync account sequence
				if rSeq, err := c.syncAccountSequence(f.Sequence()); err == nil {
					return rSeq + 1, true
				}

				return f.Sequence(), true
			}
		}

		return f.Sequence(), false
	}

	for {
		select {
		case <-c.lc.ShuttingDown():
			return
		case req := <-c.broadcastch:
			var err error
			var resp interface{}

			if c.cctx.GenerateOnly {
				resp, err = c.generateTxs(ptxf, req.msgs...)
			} else {
			done:
				for i := 0; i < 2; i++ {
					var rseq uint64
					resp, rseq, err = c.broadcastTxs(ptxf, req.msgs...)
					ptxf = ptxf.WithSequence(rseq)

					rSeq, synced := syncSequence(ptxf, err)
					ptxf = ptxf.WithSequence(rSeq)

					if !synced {
						break done
					}
				}
			}

			req.respch <- broadcastResp{
				resp: resp,
				err:  err,
			}

			terr := &sdkerrors.Error{}
			if !c.cctx.GenerateOnly && errors.Is(err, terr) {
				rSeq, _ := syncSequence(ptxf, err)
				ptxf = ptxf.WithSequence(rSeq)
			}

			select {
			case <-c.lc.ShuttingDown():
				return
			case req.donech <- err:
			}
		}
	}
}

func (c *serialBroadcaster) sequenceSync() {
	for {
		select {
		case <-c.lc.ShuttingDown():
			return
		case req := <-c.seqreqch:
			// reply back with current value if any error to occur
			seq := seqResp{
				seq: req.curr,
			}

			ndStatus, err := c.nd.SyncInfo(c.ctx)
			if err != nil {
				c.log.Error("cannot obtain node status to sync account sequence", "err", err)
				seq.err = err
			}

			if err == nil && ndStatus.CatchingUp {
				c.log.Error("cannot sync account sequence from node that is catching up")
				err = ErrNodeCatchingUp
			}

			if err == nil {
				// query sequence number
				if _, seq.seq, err = c.cctx.AccountRetriever.GetAccountNumberSequence(c.cctx, c.info.GetAddress()); err != nil {
					c.log.Error("error requesting account", "err", err)
					seq.err = err
				}
			}

			select {
			case req.ch <- seq:
			case <-c.lc.ShuttingDown():
			}
		}
	}
}

func (c *serialBroadcaster) generateTxs(txf tx.Factory, msgs ...sdk.Msg) ([]byte, error) {
	if txf.SimulateAndExecute() {
		if c.cctx.Offline {
			return nil, ErrSimulateOffline
		}

		_, adjusted, err := tx.CalculateGas(c.cctx, txf, msgs...)
		if err != nil {
			return nil, err
		}

		txf = txf.WithGas(adjusted)
	}

	utx, err := tx.BuildUnsignedTx(txf, msgs...)
	if err != nil {
		return nil, err
	}

	data, err := c.cctx.TxConfig.TxJSONEncoder()(utx.GetTx())
	if err != nil {
		return nil, err
	}

	return data, nil
}

func DefaultTxConfirm(txn string) (bool, error) {
	_, _ = fmt.Printf("%s\n\n", txn)

	buf := bufio.NewReader(os.Stdin)

	return input.GetConfirmation("confirm transaction before signing and broadcasting", buf, os.Stdin)
}

func (c *serialBroadcaster) broadcastTxs(txf tx.Factory, msgs ...sdk.Msg) (interface{}, uint64, error) {
	var err error
	var resp proto.Message

	if txf.SimulateAndExecute() || c.cctx.Simulate {
		var adjusted uint64
		resp, adjusted, err = tx.CalculateGas(c.cctx, txf, msgs...)
		if err != nil {
			return nil, txf.Sequence(), err
		}

		txf = txf.WithGas(adjusted)
	}

	if c.cctx.Simulate {
		return resp, txf.Sequence(), nil
	}

	txn, err := tx.BuildUnsignedTx(txf, msgs...)
	if err != nil {
		return nil, txf.Sequence(), err
	}

	if c.cctx.Offline {
		return nil, txf.Sequence(), ErrBroadcastOffline
	}

	if !c.cctx.SkipConfirm {
		out, err := c.cctx.TxConfig.TxJSONEncoder()(txn.GetTx())
		if err != nil {
			return nil, txf.Sequence(), err
		}

		isYes, err := DefaultTxConfirm(string(out))
		if err != nil {
			return nil, txf.Sequence(), err
		}

		if !isYes {
			return nil, txf.Sequence(), ErrTxCanceledByUser
		}
	}

	txn.SetFeeGranter(c.cctx.GetFeeGranterAddress())

	err = tx.Sign(txf, c.info.GetName(), txn, true)
	if err != nil {
		return nil, txf.Sequence(), err
	}

	bytes, err := c.cctx.TxConfig.TxEncoder()(txn.GetTx())
	if err != nil {
		return nil, txf.Sequence(), err
	}

	response, err := c.doBroadcast(c.cctx, bytes, c.broadcastTimeout)
	if err != nil {
		return response, txf.Sequence(), err
	}

	if response.Code != 0 {
		return response, txf.Sequence(), sdkerrors.ABCIError(response.Codespace, response.Code, response.RawLog)
	}

	txf = txf.WithSequence(txf.Sequence() + 1)

	return response, txf.Sequence(), nil
}

func (c *serialBroadcaster) syncAccountSequence(lSeq uint64) (uint64, error) {
	ch := make(chan seqResp, 1)

	c.seqreqch <- seqReq{
		curr: lSeq,
		ch:   ch,
	}

	ctx, cancel := context.WithTimeout(c.ctx, sequenceSyncTimeout)
	defer cancel()

	select {
	case rSeq := <-ch:
		return rSeq.seq, rSeq.err
	case <-ctx.Done():
		return lSeq, ErrSyncTimedOut
	case <-c.lc.ShuttingDown():
		return lSeq, ErrNotRunning
	}
}

func (c *serialBroadcaster) doBroadcast(cctx sdkclient.Context, data []byte, timeout time.Duration) (*sdk.TxResponse, error) {
	txb := ttypes.Tx(data)
	hash := hex.EncodeToString(txb.Hash())

	// broadcast-mode=block
	// submit with mode commit/block
	cres, err := cctx.BroadcastTxCommit(txb)
	if err == nil {
		// good job
		return cres, nil
	} else if !strings.HasSuffix(err.Error(), timeoutErrorMessage) {
		return cres, err
	}

	// timeout error, continue on to retry
	// loop
	lctx, cancel := context.WithTimeout(c.ctx, timeout)
	defer cancel()

	for lctx.Err() == nil {
		// wait up to one second
		select {
		case <-lctx.Done():
			return cres, err
		case <-time.After(broadcastBlockRetryPeriod):
		}

		// check transaction
		// https://github.com/cosmos/cosmos-sdk/pull/8734
		res, err := authtx.QueryTx(cctx, hash)
		if err == nil {
			return res, nil
		}

		// if it's not a "not found" error, return
		if !strings.HasSuffix(err.Error(), notFoundErrorMessageSuffix) {
			return res, err
		}
	}

	return cres, lctx.Err()
}

// PrepareFactory has been copied from cosmos-sdk to make it public.
// Source: https://github.com/cosmos/cosmos-sdk/blob/v0.43.0-rc2/client/tx/tx.go#L311
func PrepareFactory(cctx sdkclient.Context, txf tx.Factory) (tx.Factory, error) {
	if cctx.Offline {
		return txf, nil
	}

	from := cctx.GetFromAddress()

	if err := txf.AccountRetriever().EnsureExists(cctx, from); err != nil {
		return txf, err
	}

	if txf.AccountNumber() == 0 || txf.Sequence() == 0 {
		num, seq, err := txf.AccountRetriever().GetAccountNumberSequence(cctx, from)
		if err != nil {
			return txf, err
		}

		txf = txf.WithAccountNumber(num).WithSequence(seq)
	}

	return txf, nil
}
