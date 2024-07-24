package types

import (
	"fmt"
	"time"

	"github.com/spf13/pflag"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"

	cflags "pkg.akt.dev/go/cli/flags"
)

type ClientOptions struct {
	AccountNumber    uint64
	AccountSequence  uint64
	GasAdjustment    float64
	Gas              cflags.GasSetting
	GasPrices        string
	Fees             string
	Note             string
	TimeoutHeight    uint64
	BroadcastTimeout time.Duration
	SkipConfirm      bool
}

type ClientOption func(options *ClientOptions) error

// NewTxFactory creates a new Factory.
func NewTxFactory(cctx client.Context, opts ...ClientOption) (tx.Factory, error) {
	clOpts := &ClientOptions{}

	for _, opt := range opts {
		if err := opt(clOpts); err != nil {
			return tx.Factory{}, err
		}
	}

	signMode := signing.SignMode_SIGN_MODE_UNSPECIFIED
	switch cctx.SignModeStr {
	case cflags.SignModeDirect:
		signMode = signing.SignMode_SIGN_MODE_DIRECT
	case cflags.SignModeLegacyAminoJSON:
		signMode = signing.SignMode_SIGN_MODE_LEGACY_AMINO_JSON
	case cflags.SignModeEIP191:
		signMode = signing.SignMode_SIGN_MODE_EIP_191
	default:
		return tx.Factory{}, fmt.Errorf("invalid sign mode \"%s\". expected %s|%s|%s",
			cctx.SignModeStr,
			cflags.SignModeDirect,
			cflags.SignModeLegacyAminoJSON,
			cflags.SignModeEIP191)
	}

	txf := tx.Factory{}

	txf = txf.WithTxConfig(cctx.TxConfig).
		WithAccountRetriever(cctx.AccountRetriever).
		WithAccountNumber(clOpts.AccountNumber).
		WithSequence(clOpts.AccountSequence).
		WithKeybase(cctx.Keyring).
		WithChainID(cctx.ChainID).
		WithGas(clOpts.Gas.Gas).
		WithGasAdjustment(clOpts.GasAdjustment).
		WithGasPrices(clOpts.GasPrices).
		WithSimulateAndExecute(clOpts.Gas.Simulate).
		WithTimeoutHeight(clOpts.TimeoutHeight).
		WithMemo(clOpts.Note).
		WithSignMode(signMode).
		WithFees(clOpts.Fees)

	if !cctx.Offline {
		address := cctx.GetFromAddress()

		if err := txf.AccountRetriever().EnsureExists(cctx, address); err != nil {
			return txf, err
		}

		if txf.AccountNumber() == 0 || txf.Sequence() == 0 {
			num, seq, err := txf.AccountRetriever().GetAccountNumberSequence(cctx, address)
			if err != nil {
				return txf, err
			}

			txf = txf.WithAccountNumber(num).WithSequence(seq)
		}
	}

	return txf, nil
}

func WithAccountNumber(val uint64) ClientOption {
	return func(options *ClientOptions) error {
		options.AccountNumber = val
		return nil
	}
}

func WithAccountSequence(val uint64) ClientOption {
	return func(options *ClientOptions) error {
		options.AccountSequence = val
		return nil
	}
}

func WithGasAdjustment(val float64) ClientOption {
	return func(options *ClientOptions) error {
		options.GasAdjustment = val
		return nil
	}
}

func WithNote(val string) ClientOption {
	return func(options *ClientOptions) error {
		options.Note = val
		return nil
	}
}

func WithGas(val cflags.GasSetting) ClientOption {
	return func(options *ClientOptions) error {
		options.Gas = val
		return nil
	}
}

func WithGasPrices(val string) ClientOption {
	return func(options *ClientOptions) error {
		options.GasPrices = val
		return nil
	}
}

func WithFees(val string) ClientOption {
	return func(options *ClientOptions) error {
		options.Fees = val
		return nil
	}
}

func WithTimeoutHeight(val uint64) ClientOption {
	return func(options *ClientOptions) error {
		options.TimeoutHeight = val
		return nil
	}
}

func WithSkipConfirm(val bool) ClientOption {
	return func(options *ClientOptions) error {
		options.SkipConfirm = val
		return nil
	}
}

func ClientOptionsFromFlags(flagSet *pflag.FlagSet) ([]ClientOption, error) {
	opts := make([]ClientOption, 0)

	if flagSet.Changed(cflags.FlagAccountNumber) {
		accNum, _ := flagSet.GetUint64(cflags.FlagAccountNumber)
		opts = append(opts, WithAccountNumber(accNum))
	}

	if flagSet.Changed(cflags.FlagSequence) {
		accSeq, _ := flagSet.GetUint64(cflags.FlagSequence)
		opts = append(opts, WithAccountSequence(accSeq))
	}

	gasAdj, _ := flagSet.GetFloat64(cflags.FlagGasAdjustment)
	opts = append(opts, WithGasAdjustment(gasAdj))

	if flagSet.Changed(cflags.FlagNote) {
		memo, _ := flagSet.GetString(cflags.FlagNote)
		opts = append(opts, WithNote(memo))
	}

	if flagSet.Changed(cflags.FlagTimeoutHeight) {
		timeoutHeight, _ := flagSet.GetUint64(cflags.FlagTimeoutHeight)
		opts = append(opts, WithTimeoutHeight(timeoutHeight))
	}

	if flagSet.Changed(cflags.FlagSkipConfirmation) {
		skip, _ := flagSet.GetBool(cflags.FlagSkipConfirmation)
		opts = append(opts, WithSkipConfirm(skip))
	}

	if flagSet.Changed(cflags.FlagGas) {
		gasStr, _ := flagSet.GetString(cflags.FlagGas)
		gasSetting, _ := cflags.ParseGasSetting(gasStr)
		opts = append(opts, WithGas(gasSetting))
	}

	if flagSet.Changed(cflags.FlagFees) {
		feesStr, _ := flagSet.GetString(cflags.FlagFees)
		opts = append(opts, WithFees(feesStr))
	}

	if flagSet.Changed(cflags.FlagGasPrices) {
		gasPrices, _ := flagSet.GetString(cflags.FlagGasPrices)
		opts = append(opts, WithGasPrices(gasPrices))
	}

	return opts, nil
}
