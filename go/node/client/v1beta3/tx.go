package v1beta3

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
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/input"
	"github.com/edwingeng/deque/v2"
	"github.com/gogo/protobuf/proto"

	"github.com/tendermint/tendermint/libs/log"
	ttypes "github.com/tendermint/tendermint/types"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authtx "github.com/cosmos/cosmos-sdk/x/auth/tx"

	cltypes "github.com/akash-network/akash-api/go/node/client/types"
	"github.com/akash-network/akash-api/go/util/ctxlog"
)

var (
	ErrNotRunning       = errors.New("tx client: not running")
	ErrSyncTimedOut     = errors.New("tx client: timed-out waiting for sequence sync")
	ErrNodeCatchingUp   = errors.New("tx client: cannot sync from catching up node")
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

var _ TxClient = (*serialBroadcaster)(nil)

type ConfirmFn func(string) (bool, error)

// BroadcastOptions defines the options allowed to configure a transaction broadcast.
type BroadcastOptions struct {
	timeoutHeight    *uint64
	gasAdjustment    *float64
	gas              *flags.GasSetting
	gasPrices        *string
	fees             *string
	note             *string
	broadcastTimeout *time.Duration
	resultAsError    bool
	skipConfirm      *bool
	confirmFn        ConfirmFn
}

// BroadcastOption is a function that takes as first argument a pointer to BroadcastOptions and returns an error
// if the option cannot be configured. A number of BroadcastOption functions are available in this package.
type BroadcastOption func(*BroadcastOptions) error

// WithGasAdjustment returns a BroadcastOption that sets the gas adjustment configuration for the transaction.
func WithGasAdjustment(val float64) BroadcastOption {
	return func(options *BroadcastOptions) error {
		options.gasAdjustment = new(float64)
		*options.gasAdjustment = val
		return nil
	}
}

// WithNote returns a BroadcastOption that sets the note configuration for the transaction.
func WithNote(val string) BroadcastOption {
	return func(options *BroadcastOptions) error {
		options.note = new(string)
		*options.note = val
		return nil
	}
}

// WithGas returns a BroadcastOption that sets the gas setting configuration for the transaction.
func WithGas(val flags.GasSetting) BroadcastOption {
	return func(options *BroadcastOptions) error {
		options.gas = new(flags.GasSetting)
		*options.gas = val
		return nil
	}
}

// WithGasPrices returns a BroadcastOption that sets the gas price configuration for the transaction.
// Gas price is a string of the amount. E.g. "0.25uakt".
func WithGasPrices(val string) BroadcastOption {
	return func(options *BroadcastOptions) error {
		options.gasPrices = new(string)
		*options.gasPrices = val
		return nil
	}
}

// WithFees returns a BroadcastOption that sets the fees configuration for the transaction.
func WithFees(val string) BroadcastOption {
	return func(options *BroadcastOptions) error {
		options.fees = new(string)
		*options.fees = val
		return nil
	}
}

// WithTimeoutHeight returns a BroadcastOption that sets the timeout height configuration for the transaction.
func WithTimeoutHeight(val uint64) BroadcastOption {
	return func(options *BroadcastOptions) error {
		options.timeoutHeight = new(uint64)
		*options.timeoutHeight = val
		return nil
	}
}

// WithResultCodeAsError returns a BroadcastOption that enables the result code as error configuration for the transaction.
func WithResultCodeAsError() BroadcastOption {
	return func(opts *BroadcastOptions) error {
		opts.resultAsError = true
		return nil
	}
}

// WithSkipConfirm returns a BroadcastOption that sets whether to skip or not the confirmation for the transaction.
func WithSkipConfirm(val bool) BroadcastOption {
	return func(opts *BroadcastOptions) error {
		opts.skipConfirm = new(bool)
		*opts.skipConfirm = val
		return nil
	}
}

// WithConfirmFn returns a BroadcastOption that sets the ConfirmFn function configuration for the transaction.
func WithConfirmFn(val ConfirmFn) BroadcastOption {
	return func(opts *BroadcastOptions) error {
		opts.confirmFn = val
		return nil
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
	opts       *BroadcastOptions
}
type broadcastTxs struct {
	msgs []sdk.Msg
	opts *BroadcastOptions
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
	opts   *BroadcastOptions
}

type serialBroadcaster struct {
	ctx         context.Context
	cctx        sdkclient.Context
	info        keyring.Info
	reqch       chan broadcastReq
	broadcastch chan broadcast
	seqreqch    chan seqReq
	lc          lifecycle.Lifecycle
	nd          *node
	log         log.Logger
}

func newSerialTx(ctx context.Context, cctx sdkclient.Context, nd *node, opts ...cltypes.ClientOption) (*serialBroadcaster, error) {
	txf, err := cltypes.NewTxFactory(cctx, opts...)
	if err != nil {
		return nil, err
	}

	keyname := cctx.GetFromName()
	info, err := txf.Keybase().Key(keyname)
	if err != nil {
		info, err = txf.Keybase().KeyByAddress(cctx.GetFromAddress())
	}

	if err != nil {
		return nil, err
	}

	client := &serialBroadcaster{
		ctx:         ctx,
		cctx:        cctx,
		info:        info,
		lc:          lifecycle.New(),
		reqch:       make(chan broadcastReq, 1),
		broadcastch: make(chan broadcast, 1),
		seqreqch:    make(chan seqReq),
		nd:          nd,
		log:         ctxlog.Logger(ctx).With("cmp", "client/broadcaster"),
	}

	go client.lc.WatchContext(ctx)
	go client.run()
	go client.broadcaster(txf)

	if !client.cctx.Offline {
		go client.sequenceSync()
	}

	return client, nil
}

// Broadcast broadcasts a transaction. A transaction is composed of 1 or many messages. This allows several
// operations to be performed in a single transaction.
// A transaction broadcast can be configured with an arbitrary number of BroadcastOption.
// This method returns the response as an interface{} instance. If an error occurs when preparing the transaction
// an error is returned.
// A transaction can fail with a given "transaction code" which will not be passed to the error value.
// This needs to be checked by the caller and handled accordingly.
func (c *serialBroadcaster) Broadcast(ctx context.Context, msgs []sdk.Msg, opts ...BroadcastOption) (interface{}, error) {
	bOpts := &BroadcastOptions{
		confirmFn: defaultTxConfirm,
	}

	for _, opt := range opts {
		if err := opt(bOpts); err != nil {
			return nil, err
		}
	}

	if bOpts.broadcastTimeout == nil {
		bOpts.broadcastTimeout = new(time.Duration)
		*bOpts.broadcastTimeout = BroadcastDefaultTimeout
	}

	responsech := make(chan broadcastResp, 1)
	request := broadcastReq{
		responsech: responsech,
		msgs:       msgs,
		opts:       bOpts,
	}

	request.id = uintptr(unsafe.Pointer(&request))

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
		if !errors.As(resp.err, &sdkerrors.Error{}) || resp.resp == nil || bOpts.resultAsError {
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
			opts:   req.opts,
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

func deriveTxfFromOptions(txf tx.Factory, opts *BroadcastOptions) tx.Factory {
	if opt := opts.note; opt != nil {
		txf = txf.WithMemo(*opt)
	}

	if opt := opts.gas; opt != nil {
		txf = txf.WithGas(opt.Gas).WithSimulateAndExecute(opt.Simulate)
	}

	if opt := opts.fees; opt != nil {
		txf = txf.WithFees(*opt)
	}

	if opt := opts.gasPrices; opt != nil {
		txf = txf.WithGasPrices(*opt)
	}

	if opt := opts.timeoutHeight; opt != nil {
		txf = txf.WithTimeoutHeight(*opt)
	}

	if opt := opts.gasAdjustment; opt != nil {
		txf = txf.WithGasAdjustment(*opt)
	}

	return txf
}

func (c *serialBroadcaster) broadcaster(ptxf tx.Factory) {
	syncSequence := func(f tx.Factory, rErr error) (uint64, bool) {
		if rErr != nil {
			if sdkerrors.ErrWrongSequence.Is(rErr) {
				// attempt to sync account sequence
				if rSeq, err := c.syncAccountSequence(f.Sequence()); err == nil {
					return rSeq, true
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

		done:
			for i := 0; i < 2; i++ {
				txf := deriveTxfFromOptions(ptxf, req.opts)
				if c.cctx.GenerateOnly {
					resp, err = c.generateTxs(txf, req.msgs...)
					break done
				}

				var rseq uint64
				txs := broadcastTxs{
					msgs: req.msgs,
					opts: req.opts,
				}

				resp, rseq, err = c.broadcastTxs(txf, txs)
				ptxf = ptxf.WithSequence(rseq)

				rSeq, synced := syncSequence(ptxf, err)
				ptxf = ptxf.WithSequence(rSeq)

				if !synced {
					break done
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

func defaultTxConfirm(txn string) (bool, error) {
	_, _ = fmt.Printf("%s\n\n", txn)

	buf := bufio.NewReader(os.Stdin)

	return input.GetConfirmation("confirm transaction before signing and broadcasting", buf, os.Stdin)
}

func (c *serialBroadcaster) broadcastTxs(txf tx.Factory, txs broadcastTxs) (interface{}, uint64, error) {
	var err error
	var resp proto.Message

	if txf.SimulateAndExecute() || c.cctx.Simulate {
		var adjusted uint64
		resp, adjusted, err = tx.CalculateGas(c.cctx, txf, txs.msgs...)
		if err != nil {
			return nil, txf.Sequence(), err
		}

		txf = txf.WithGas(adjusted)
	}

	if c.cctx.Simulate {
		return resp, txf.Sequence(), nil
	}

	txn, err := tx.BuildUnsignedTx(txf, txs.msgs...)
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

		isYes, err := txs.opts.confirmFn(string(out))
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

	response, err := c.doBroadcast(c.cctx, bytes, *txs.opts.broadcastTimeout)
	if err != nil {
		return response, txf.Sequence(), err
	}

	txf = txf.WithSequence(txf.Sequence() + 1)

	if response.Code != 0 {
		return response, txf.Sequence(), sdkerrors.ABCIError(response.Codespace, response.Code, response.RawLog)
	}

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
