package flags

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/spf13/pflag"

	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"

	cmcli "github.com/cometbft/cometbft/libs/cli"
)

const (
	// DefaultGasAdjustment is applied to gas estimates to avoid tx execution
	// failures due to state changes that might occur between the tx simulation
	// and the actual run.
	DefaultGasAdjustment = 1.5
	DefaultGasLimit      = 200000
	GasFlagAuto          = "auto"

	DefaultKeyringBackend = keyring.BackendOS

	// BroadcastSync defines a tx broadcasting mode where the client waits for
	// a CheckTx execution response only.
	BroadcastSync = "sync"
	// BroadcastAsync defines a tx broadcasting mode where the client returns
	// immediately.
	BroadcastAsync = "async"

	BroadcastBlock = "block"

	// SignModeDirect is the value of the --sign-mode flag for SIGN_MODE_DIRECT
	SignModeDirect = "direct"
	// SignModeLegacyAminoJSON is the value of the --sign-mode flag for SIGN_MODE_LEGACY_AMINO_JSON
	SignModeLegacyAminoJSON = "amino-json"
	// SignModeDirectAux is the value of the --sign-mode flag for SIGN_MODE_DIRECT_AUX
	SignModeDirectAux = "direct-aux"
	// SignModeEIP191 is the value of the --sign-mode flag for SIGN_MODE_EIP_191
	SignModeEIP191 = "eip-191"
)

const (
	FlagGenesisTime = "genesis-time"
	FlagGenTxDir    = "gentx-dir"
	FlagRecover     = "recover"
	// FlagDefaultBondDenom defines the default denom to use in the genesis file.
	FlagDefaultBondDenom = "default-denom"
	FlagDenom            = "denom"
	FlagVestingStart     = "vesting-start-time"
	FlagVestingEnd       = "vesting-end-time"
	FlagVestingAmt       = "vesting-amount"
	FlagAppendMode       = "append"
	FlagEvents           = "events"
	FlagType             = "type"
	FlagMultisig         = "multisig"
	FlagOverwrite        = "overwrite"
	FlagSigOnly          = "signature-only"
	FlagAmino            = "amino"
	FlagNoAutoIncrement  = "no-auto-increment"
	FlagAppend           = "append"
	FlagTitle            = "title"
	// Deprecated: only used for v1beta1 legacy proposals.
	FlagDescription = "description"
	// Deprecated: only used for v1beta1 legacy proposals.
	FlagProposalType = "type"
	// Deprecated: only used for v1beta1 legacy proposals.
	FlagUpgradeHeight = "upgrade-height"
	// Deprecated: only used for v1beta1 legacy proposals.
	FlagUpgradeInfo = "upgrade-info"
	FlagMetadata    = "metadata"
	FlagSummary     = "summary"
	// Deprecated: only used for v1beta1 legacy proposals.
	FlagProposal          = "proposal"
	FlagNoValidate        = "no-validate"
	FlagDaemonName        = "daemon-name"
	FlagPeriod            = "period"
	FlagPeriodLimit       = "period-limit"
	FlagAllowedMsgs       = "allowed-messages"
	FlagMsgType           = "msg-type"
	FlagAllowedValidators = "allowed-validators"
	FlagDenyValidators    = "deny-validators"
	FlagAllowList         = "allow-list"
	FlagDeposit           = "deposit"
	FlagStatus            = "status"
	FlagState             = "state"
	FlagOwner             = "owner"
	FlagDSeq              = "dseq"
	FlagGSeq              = "gseq"
	FlagOSeq              = "oseq"
	FlagProvider          = "provider"
	FlagSerial            = "serial"
	FlagPrice             = "price"
	FlagDepositorAccount  = "depositor-account"
	FlagExpiration        = "expiration"
	FlagSpendLimit        = "spend-limit"
	FlagHome              = cmcli.HomeFlag
	FlagKeyringDir        = "keyring-dir"
	FlagUseLedger         = "ledger"
	FlagChainID           = "chain-id"
	FlagNode              = "node"
	FlagGRPC              = "grpc-addr"
	FlagGRPCInsecure      = "grpc-insecure"
	FlagHeight            = "height"
	FlagGasAdjustment     = "gas-adjustment"
	FlagFrom              = "from"
	FlagName              = "name"
	FlagAccountNumber     = "account-number"
	FlagSequence          = "sequence"
	FlagNote              = "note"
	FlagFees              = "fees"
	FlagGas               = "gas"
	FlagGasPrices         = "gas-prices"
	FlagBroadcastMode     = "broadcast-mode"
	FlagDryRun            = "dry-run"
	FlagGenerateOnly      = "generate-only"
	FlagOffline           = "offline"
	FlagOutputDocument    = "output-document" // inspired by wget -O
	FlagSkipConfirmation  = "yes"
	FlagProve             = "prove"
	FlagKeyringBackend    = "keyring-backend"
	FlagPage              = "page"
	FlagLimit             = "limit"
	FlagSignMode          = "sign-mode"
	FlagPageKey           = "page-key"
	FlagOffset            = "offset"
	FlagCountTotal        = "count-total"
	FlagTimeoutHeight     = "timeout-height"
	FlagKeyType           = "key-type"
	FlagFeePayer          = "fee-payer"
	FlagFeeGranter        = "fee-granter"
	FlagReverse           = "reverse"
	FlagTip               = "tip"
	FlagAux               = "aux"
	FlagInitHeight        = "initial-height"
	FlagDelayed           = "delayed"
	// FlagOutput is the flag to set the output format.
	// This differs from FlagOutputDocument that is used to set the output file.
	FlagOutput = cmcli.OutputFlag
	FlagSplit  = "split"

	// CometBFT logging flags
	FlagLogLevel     = "log_level"
	FlagLogFormat    = "log_format"
	FlagLogNoColor   = "log_no_color"
	FlagLogColor     = "log_color"
	FlagLogTimestamp = "log_timestamp"
	FlagTrace        = "trace"

	FlagAddressValidator    = "validator"
	FlagAddressValidatorSrc = "addr-validator-source"
	FlagAddressValidatorDst = "addr-validator-dest"
	FlagPubKey              = "pubkey"
	FlagAmount              = "amount"
	FlagSharesAmount        = "shares-amount"
	FlagSharesFraction      = "shares-fraction"

	FlagMoniker         = "moniker"
	FlagEditMoniker     = "new-moniker"
	FlagIdentity        = "identity"
	FlagWebsite         = "website"
	FlagSecurityContact = "security-contact"
	FlagDetails         = "details"

	FlagCommission              = "commission"
	FlagCommissionRate          = "commission-rate"
	FlagCommissionMaxRate       = "commission-max-rate"
	FlagCommissionMaxChangeRate = "commission-max-change-rate"

	FlagGenesisFormat = "genesis-format"
	FlagNodeID        = "node-id"
	FlagIP            = "ip"
	FlagP2PPort       = "p2p-port"
)

// common flagsets to add to various functions
var (
	fsShares       = pflag.NewFlagSet("", pflag.ContinueOnError)
	fsValidator    = pflag.NewFlagSet("", pflag.ContinueOnError)
	fsRedelegation = pflag.NewFlagSet("", pflag.ContinueOnError)
)

func init() {
	fsShares.String(FlagSharesAmount, "", "Amount of source-shares to either unbond or redelegate as a positive integer or decimal")
	fsShares.String(FlagSharesFraction, "", "Fraction of source-shares to either unbond or redelegate as a positive integer or decimal >0 and <=1")
	fsValidator.String(FlagAddressValidator, "", "The Bech32 address of the validator")
	fsRedelegation.String(FlagAddressValidatorSrc, "", "The Bech32 address of the source validator")
	fsRedelegation.String(FlagAddressValidatorDst, "", "The Bech32 address of the destination validator")
}

func AddDepositFlags(flags *pflag.FlagSet) {
	flags.String(FlagDeposit, "", "Deposit amount")
}

func MarkReqDepositFlags(cmd *cobra.Command) {
	_ = cmd.MarkFlagRequired(FlagDeposit)
}

// LineBreak can be included in a command list to provide a blank line
// to help with readability
var LineBreak = &cobra.Command{Run: func(*cobra.Command, []string) {}}

// AddQueryFlagsToCmd adds common flags to a module query command.
func AddQueryFlagsToCmd(cmd *cobra.Command) {
	cmd.Flags().String(FlagNode, "tcp://localhost:26657", "<host>:<port> to Tendermint RPC interface for this chain")
	cmd.Flags().String(FlagGRPC, "", "the gRPC endpoint to use for this chain")
	cmd.Flags().Bool(FlagGRPCInsecure, false, "allow gRPC over insecure channels, if not TLS the server must use TLS")
	cmd.Flags().Int64(FlagHeight, 0, "Use a specific height to query state at (this can error if the node is pruning state)")
	cmd.Flags().StringP(FlagOutput, "o", "text", "Output format (text|json)")

	// some base commands does not require chainID e.g `simd testnet` while subcommands do
	// hence the flag should not be required for those commands
	_ = cmd.MarkFlagRequired(FlagChainID)
}

// AddTxFlagsToCmd adds common flags to a module tx command.
func AddTxFlagsToCmd(cmd *cobra.Command) {
	f := cmd.Flags()
	f.StringP(FlagOutput, "o", "json", "Output format (text|json)")
	f.String(FlagFrom, "", "Name or address of private key with which to sign")
	f.Uint64P(FlagAccountNumber, "a", 0, "The account number of the signing account (offline mode only)")
	f.Uint64P(FlagSequence, "s", 0, "The sequence number of the signing account (offline mode only)")
	f.String(FlagNote, "", "Note to add a description to the transaction (previously --memo)")
	f.String(FlagFees, "", "Fees to pay along with transaction; eg: 10uatom")
	f.String(FlagGasPrices, "", "Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)")
	f.String(FlagNode, "tcp://localhost:26657", "<host>:<port> to tendermint rpc interface for this chain")
	f.Bool(FlagUseLedger, false, "Use a connected Ledger device")
	f.Float64(FlagGasAdjustment, DefaultGasAdjustment, "adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored ")
	f.StringP(FlagBroadcastMode, "b", BroadcastSync, "Transaction broadcasting mode (sync|async)")
	f.Bool(FlagDryRun, false, "ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it (when enabled, the local Keybase is not accessible)")
	f.Bool(FlagGenerateOnly, false, "Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)")
	f.Bool(FlagOffline, false, "Offline mode (does not allow any online functionality)")
	f.BoolP(FlagSkipConfirmation, "y", false, "Skip tx broadcasting prompt confirmation")
	f.String(FlagSignMode, "", "Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature")
	f.Uint64(FlagTimeoutHeight, 0, "Set a block timeout height to prevent the tx from being committed past a certain height")
	f.String(FlagFeePayer, "", "Fee payer pays fees for the transaction instead of deducting from the signer")
	f.String(FlagFeeGranter, "", "Fee granter grants fees for the transaction")
	f.String(FlagTip, "", "Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn't enable the TipDecorator")
	f.Bool(FlagAux, false, "Generate aux signer data instead of sending a tx")
	f.String(FlagChainID, "", "The network chain ID")
	// --gas can accept integers and "auto"
	f.String(FlagGas, "auto", fmt.Sprintf("gas limit to set per-transaction; set to %q to calculate sufficient gas automatically. Note: %q option doesn't always report accurate results. Set a valid coin value to adjust the result. Can be used instead of %q. (default %d)",
		GasFlagAuto, GasFlagAuto, FlagFees, DefaultGasLimit))

	AddKeyringFlags(f)
}

// AddKeyringFlags sets common keyring flags
func AddKeyringFlags(flags *pflag.FlagSet) {
	flags.String(FlagKeyringDir, "", "The client Keyring directory; if omitted, the default 'home' directory will be used")
	flags.String(FlagKeyringBackend, DefaultKeyringBackend, "Select keyring's backend (os|file|kwallet|pass|test|memory)")
}

// AddPaginationFlagsToCmd adds common pagination flags to cmd
func AddPaginationFlagsToCmd(cmd *cobra.Command, query string) {
	cmd.Flags().Uint64(FlagPage, 1, fmt.Sprintf("pagination page of %s to query for. This sets offset to a multiple of limit", query))
	cmd.Flags().String(FlagPageKey, "", fmt.Sprintf("pagination page-key of %s to query for", query))
	cmd.Flags().Uint64(FlagOffset, 0, fmt.Sprintf("pagination offset of %s to query for", query))
	cmd.Flags().Uint64(FlagLimit, 100, fmt.Sprintf("pagination limit of %s to query for", query))
	cmd.Flags().Bool(FlagCountTotal, false, fmt.Sprintf("count total number of records in %s to query for", query))
	cmd.Flags().Bool(FlagReverse, false, "results are sorted in descending order")
}

// FlagSetCommissionCreate Returns the FlagSet used for commission create.
func FlagSetCommissionCreate() *pflag.FlagSet {
	fs := pflag.NewFlagSet("", pflag.ContinueOnError)

	fs.String(FlagCommissionRate, "", "The initial commission rate percentage")
	fs.String(FlagCommissionMaxRate, "", "The maximum commission rate percentage")
	fs.String(FlagCommissionMaxChangeRate, "", "The maximum commission change rate percentage (per day)")

	return fs
}

// FlagSetAmount Returns the FlagSet for amount related operations.
func FlagSetAmount() *pflag.FlagSet {
	fs := pflag.NewFlagSet("", pflag.ContinueOnError)
	fs.String(FlagAmount, "", "Amount of coins to bond")
	return fs
}

// FlagSetPublicKey Returns the flagset for Public Key related operations.
func FlagSetPublicKey() *pflag.FlagSet {
	fs := pflag.NewFlagSet("", pflag.ContinueOnError)
	fs.String(FlagPubKey, "", "The validator's Protobuf JSON encoded public key")
	return fs
}

func FlagSetDescriptionEdit() *pflag.FlagSet {
	fs := pflag.NewFlagSet("", pflag.ContinueOnError)

	fs.String(FlagEditMoniker, stakingtypes.DoNotModifyDesc, "The validator's name")
	fs.String(FlagIdentity, stakingtypes.DoNotModifyDesc, "The (optional) identity signature (ex. UPort or Keybase)")
	fs.String(FlagWebsite, stakingtypes.DoNotModifyDesc, "The validator's (optional) website")
	fs.String(FlagSecurityContact, stakingtypes.DoNotModifyDesc, "The validator's (optional) security contact email")
	fs.String(FlagDetails, stakingtypes.DoNotModifyDesc, "The validator's (optional) details")

	return fs
}

func FlagSetCommissionUpdate() *pflag.FlagSet {
	fs := pflag.NewFlagSet("", pflag.ContinueOnError)

	fs.String(FlagCommissionRate, "", "The new commission rate percentage")

	return fs
}

func FlagSetDescriptionCreate() *pflag.FlagSet {
	fs := pflag.NewFlagSet("", pflag.ContinueOnError)

	fs.String(FlagMoniker, "", "The validator's name")
	fs.String(FlagIdentity, "", "The optional identity signature (ex. UPort or Keybase)")
	fs.String(FlagWebsite, "", "The validator's (optional) website")
	fs.String(FlagSecurityContact, "", "The validator's (optional) security contact email")
	fs.String(FlagDetails, "", "The validator's (optional) details")

	return fs
}
