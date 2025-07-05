package flags

import (
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"pkg.akt.dev/go/node/market/v1"
	"pkg.akt.dev/go/node/market/v1beta5"
)

// AddOrderIDFlags add flags for order
func AddOrderIDFlags(flags *pflag.FlagSet, opts ...DeploymentIDOption) {
	AddGroupIDFlags(flags, opts...)
	flags.Uint32(FlagOSeq, 1, "Order Sequence")
}

// MarkReqOrderIDFlags marks flags required for order
func MarkReqOrderIDFlags(cmd *cobra.Command, opts ...DeploymentIDOption) {
	MarkReqGroupIDFlags(cmd, opts...)
}

// AddProviderFlag add provider flag to command flags set
func AddProviderFlag(flags *pflag.FlagSet) {
	flags.String(FlagProvider, "", "Provider")
}

// MarkReqProviderFlag marks provider flag as required
func MarkReqProviderFlag(cmd *cobra.Command) {
	_ = cmd.MarkFlagRequired(FlagProvider)
}

// OrderIDFromFlags returns OrderID with given flags and error if occurred
func OrderIDFromFlags(flags *pflag.FlagSet, opts ...MarketOption) (v1.OrderID, error) {
	prev, err := GroupIDFromFlags(flags, opts...)
	if err != nil {
		return v1.OrderID{}, err
	}
	val, err := flags.GetUint32(FlagOSeq)
	if err != nil {
		return v1.OrderID{}, err
	}
	return v1.MakeOrderID(prev, val), nil
}

// AddBidIDFlags add flags for bid
func AddBidIDFlags(flags *pflag.FlagSet, opts ...DeploymentIDOption) {
	AddOrderIDFlags(flags, opts...)
	AddProviderFlag(flags)
}

// AddQueryBidIDFlags add flags for bid in query commands
func AddQueryBidIDFlags(flags *pflag.FlagSet) {
	AddBidIDFlags(flags)
}

// MarkReqBidIDFlags marks flags required for bid
// Used in get bid query command
func MarkReqBidIDFlags(cmd *cobra.Command, opts ...DeploymentIDOption) {
	MarkReqOrderIDFlags(cmd, opts...)
	MarkReqProviderFlag(cmd)
}

// BidIDFromFlags returns BidID with given flags and error if occurred
// Here provider value is taken from flags
func BidIDFromFlags(flags *pflag.FlagSet, opts ...MarketOption) (v1.BidID, error) {
	prev, err := OrderIDFromFlags(flags, opts...)
	if err != nil {
		return v1.BidID{}, err
	}

	opt := &MarketOptions{}

	for _, o := range opts {
		o(opt)
	}

	if opt.Provider.Empty() {
		provider, err := flags.GetString(FlagProvider)
		if err != nil {
			return v1.BidID{}, err
		}

		if opt.Provider, err = sdk.AccAddressFromBech32(provider); err != nil {
			return v1.BidID{}, err
		}
	}

	return v1.MakeBidID(prev, opt.Provider), nil
}

func AddLeaseIDFlags(flags *pflag.FlagSet, opts ...DeploymentIDOption) {
	AddBidIDFlags(flags, opts...)
}

// MarkReqLeaseIDFlags marks flags required for bid
// Used in get bid query command
func MarkReqLeaseIDFlags(cmd *cobra.Command, opts ...DeploymentIDOption) {
	MarkReqBidIDFlags(cmd, opts...)
}

// LeaseIDFromFlags returns LeaseID with given flags and error if occurred
// Here provider value is taken from flags
func LeaseIDFromFlags(flags *pflag.FlagSet, opts ...MarketOption) (v1.LeaseID, error) {
	bid, err := BidIDFromFlags(flags, opts...)
	if err != nil {
		return v1.LeaseID{}, err
	}

	return bid.LeaseID(), nil
}

// AddOrderFilterFlags add flags to filter for order list
func AddOrderFilterFlags(flags *pflag.FlagSet) {
	flags.String(FlagOwner, "", "order owner address to filter")
	flags.String(FlagState, "", "order state to filter (open,matched,closed)")
	flags.Uint64(FlagDSeq, 0, "deployment sequence to filter")
	flags.Uint32(FlagGSeq, 1, "group sequence to filter")
	flags.Uint32(FlagOSeq, 1, "order sequence to filter")
}

// OrderFiltersFromFlags returns OrderFilters with given flags and error if occurred
func OrderFiltersFromFlags(flags *pflag.FlagSet) (v1beta5.OrderFilters, error) {
	dfilters, err := DepFiltersFromFlags(flags)
	if err != nil {
		return v1beta5.OrderFilters{}, err
	}
	ofilters := v1beta5.OrderFilters{
		Owner: dfilters.Owner,
		DSeq:  dfilters.DSeq,
		State: dfilters.State,
	}

	if ofilters.GSeq, err = flags.GetUint32(FlagGSeq); err != nil {
		return ofilters, err
	}

	if ofilters.OSeq, err = flags.GetUint32(FlagOSeq); err != nil {
		return ofilters, err
	}

	return ofilters, nil
}

// AddBidFilterFlags add flags to filter for bid list
func AddBidFilterFlags(flags *pflag.FlagSet) {
	flags.String(FlagOwner, "", "bid owner address to filter")
	flags.String(FlagState, "", "bid state to filter (open,matched,lost,closed)")
	flags.Uint64(FlagDSeq, 0, "deployment sequence to filter")
	flags.Uint32(FlagGSeq, 1, "group sequence to filter")
	flags.Uint32(FlagOSeq, 1, "order sequence to filter")
	flags.String(FlagProvider, "", "bid provider address to filter")
}

// BidFiltersFromFlags returns BidFilters with given flags and error if occurred
func BidFiltersFromFlags(flags *pflag.FlagSet) (v1beta5.BidFilters, error) {
	ofilters, err := OrderFiltersFromFlags(flags)
	if err != nil {
		return v1beta5.BidFilters{}, err
	}
	bfilters := v1beta5.BidFilters{
		Owner: ofilters.Owner,
		DSeq:  ofilters.DSeq,
		GSeq:  ofilters.OSeq,
		OSeq:  ofilters.OSeq,
		State: ofilters.State,
	}

	provider, err := flags.GetString(FlagProvider)
	if err != nil {
		return bfilters, err
	}

	if provider != "" {
		_, err = sdk.AccAddressFromBech32(provider)
		if err != nil {
			return bfilters, err
		}
	}
	bfilters.Provider = provider

	return bfilters, nil
}

// AddLeaseFilterFlags add flags to filter for lease list
func AddLeaseFilterFlags(flags *pflag.FlagSet) {
	flags.String(FlagOwner, "", "lease owner address to filter")
	flags.String(FlagState, "", "lease state to filter (active,insufficient_funds,closed)")
	flags.Uint64(FlagDSeq, 0, "deployment sequence to filter")
	flags.Uint32(FlagGSeq, 1, "group sequence to filter")
	flags.Uint32(FlagOSeq, 1, "order sequence to filter")
	flags.String(FlagProvider, "", "bid provider address to filter")
}

// LeaseFiltersFromFlags returns LeaseFilters with given flags and error if occurred
func LeaseFiltersFromFlags(flags *pflag.FlagSet) (v1.LeaseFilters, error) {
	bfilters, err := BidFiltersFromFlags(flags)
	if err != nil {
		return v1.LeaseFilters{}, err
	}
	return v1.LeaseFilters(bfilters), nil
}
