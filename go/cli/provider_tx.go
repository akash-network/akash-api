package cli

import (
	"errors"
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"gopkg.in/yaml.v3"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"

	cflags "pkg.akt.dev/go/cli/flags"
	types "pkg.akt.dev/go/node/provider/v1beta4"
	tattr "pkg.akt.dev/go/node/types/attributes/v1"
)

var (
	ErrDuplicatedAttribute = errors.New("provider: duplicated attribute")
)

// ProviderConfig is the struct that stores provider config
type ProviderConfig struct {
	Host       string           `json:"host" yaml:"host"`
	Info       types.Info      `json:"info" yaml:"info"`
	Attributes tattr.Attributes `json:"attributes" yaml:"attributes"`
}

// GetAttributes returns config attributes into key value pairs
func (c ProviderConfig) GetAttributes() tattr.Attributes {
	return c.Attributes
}

// ReadProviderConfigPath reads and parses file
func ReadProviderConfigPath(path string) (ProviderConfig, error) {
	buf, err := os.ReadFile(path)
	if err != nil {
		return ProviderConfig{}, err
	}
	var val ProviderConfig
	if err := yaml.Unmarshal(buf, &val); err != nil {
		return ProviderConfig{}, err
	}

	dups := make(map[string]string)
	for _, attr := range val.Attributes {
		if _, exists := dups[attr.Key]; exists {
			return ProviderConfig{}, fmt.Errorf("%w: %s", ErrDuplicatedAttribute, attr.Key)
		}

		dups[attr.Key] = attr.Value
	}

	return val, err
}


// GetProviderTxCmd returns the transaction commands for provider module
func GetProviderTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Provider transaction subcommands",
		SuggestionsMinimumDistance: 2,
		RunE:                       sdkclient.ValidateCmd,
	}
	cmd.AddCommand(
		cmdProviderCreate(),
		cmdProviderUpdate(),
	)
	return cmd
}

func cmdProviderCreate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create [config-file]",
		Short: "Create a provider",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			// TODO: enable reading files with non-local URIs
			cfg, err := ReadProviderConfigPath(args[0])
			if err != nil {
				err = fmt.Errorf("%w: ReadConfigPath err: %q", err, args[0])
				return err
			}

			msg := &types.MsgCreateProvider{
				Owner:      cctx.GetFromAddress().String(),
				HostURI:    cfg.Host,
				Info:       cfg.Info,
				Attributes: cfg.GetAttributes(),
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}

func cmdProviderUpdate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update [config-file]",
		Short: "Update provider",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := cmd.Context()
			cl := MustClientFromContext(ctx)
			cctx := cl.ClientContext()

			cfg, err := ReadProviderConfigPath(args[0])
			if err != nil {
				return err
			}

			msg := &types.MsgUpdateProvider{
				Owner:      cctx.GetFromAddress().String(),
				HostURI:    cfg.Host,
				Info:       cfg.Info,
				Attributes: cfg.GetAttributes(),
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			resp, err := cl.Tx().BroadcastMsgs(ctx, []sdk.Msg{msg})
			if err != nil {
				return err
			}

			return cl.PrintMessage(resp)
		},
	}

	cflags.AddTxFlagsToCmd(cmd)

	return cmd
}
