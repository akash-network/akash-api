package types

import (
	"time"

	"github.com/spf13/pflag"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
)

type ClientOptions struct {
	AccountNumber    uint64
	AccountSequence  uint64
	GasAdjustment    float64
	Gas              flags.GasSetting
	GasPrices        string
	Fees             string
	Note             string
	TimeoutHeight    uint64
	BroadcastTimeout time.Duration
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
	case flags.SignModeDirect:
		signMode = signing.SignMode_SIGN_MODE_DIRECT
	case flags.SignModeLegacyAminoJSON:
		signMode = signing.SignMode_SIGN_MODE_LEGACY_AMINO_JSON
	case flags.SignModeEIP191:
		signMode = signing.SignMode_SIGN_MODE_EIP_191
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

func WithGas(val flags.GasSetting) ClientOption {
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

func ClientOptionsFromFlags(flagSet *pflag.FlagSet) ([]ClientOption, error) {
	opts := make([]ClientOption, 0)

	if flagSet.Changed(flags.FlagAccountNumber) {
		accNum, _ := flagSet.GetUint64(flags.FlagAccountNumber)
		opts = append(opts, WithAccountNumber(accNum))
	}

	if flagSet.Changed(flags.FlagSequence) {
		accSeq, _ := flagSet.GetUint64(flags.FlagSequence)
		opts = append(opts, WithAccountSequence(accSeq))
	}

	gasAdj, _ := flagSet.GetFloat64(flags.FlagGasAdjustment)
	opts = append(opts, WithGasAdjustment(gasAdj))

	if flagSet.Changed(flags.FlagNote) {
		memo, _ := flagSet.GetString(flags.FlagNote)
		opts = append(opts, WithNote(memo))
	}

	if flagSet.Changed(flags.FlagTimeoutHeight) {
		timeoutHeight, _ := flagSet.GetUint64(flags.FlagTimeoutHeight)
		opts = append(opts, WithTimeoutHeight(timeoutHeight))
	}

	gasStr, _ := flagSet.GetString(flags.FlagGas)
	gasSetting, _ := flags.ParseGasSetting(gasStr)
	opts = append(opts, WithGas(gasSetting))

	feesStr, _ := flagSet.GetString(flags.FlagFees)
	opts = append(opts, WithFees(feesStr))

	gasPrices, _ := flagSet.GetString(flags.FlagGasPrices)
	opts = append(opts, WithGasPrices(gasPrices))

	return opts, nil
}
