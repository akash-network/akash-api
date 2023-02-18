package v1beta3_test

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pkg/errors"
	"github.com/stretchr/testify/require"

	types "github.com/akash-network/akash-api/go/node/provider/v1beta3"
	"github.com/akash-network/akash-api/go/sdkutil"
	_ "github.com/akash-network/akash-api/go/testutil"
)

var (
	errWildcard = errors.New("wildcard string error can't be matched")
)

type testEventParsing struct {
	msg    sdkutil.Event
	expErr error
}

func (tep testEventParsing) testMessageType() func(t *testing.T) {
	_, err := types.ParseEvent(tep.msg)
	return func(t *testing.T) {
		// if the error expected is errWildcard to catch untyped errors, don't fail the test, the error was expected.
		if errors.Is(tep.expErr, errWildcard) {
			require.Error(t, err)
		} else {
			require.Equal(t, tep.expErr, err)
		}
	}
}

var TEPS = []testEventParsing{
	{
		msg: sdkutil.Event{
			Type: "nil",
		},
		expErr: sdkutil.ErrUnknownType,
	},
	{
		msg: sdkutil.Event{
			Type: sdkutil.EventTypeMessage,
		},
		expErr: sdkutil.ErrUnknownModule,
	},

	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
		},
		expErr: sdkutil.ErrUnknownAction,
	},
	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: "nil",
		},
		expErr: sdkutil.ErrUnknownModule,
	},

	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: "nil",
		},
		expErr: sdkutil.ErrUnknownAction,
	},

	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: types.EvActionProviderCreated,
			Attributes: []sdk.Attribute{
				{
					Key:   types.EvOwnerKey,
					Value: "akash1qtqpdszzakz7ugkey7ka2cmss95z26ygar2mgr",
				},
			},
		},
		expErr: nil,
	},
	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: types.EvActionProviderCreated,
			Attributes: []sdk.Attribute{
				{
					Key:   types.EvOwnerKey,
					Value: "hello",
				},
			},
		},
		expErr: errWildcard,
	},
	{
		msg: sdkutil.Event{
			Type:       sdkutil.EventTypeMessage,
			Module:     types.ModuleName,
			Action:     types.EvActionProviderCreated,
			Attributes: []sdk.Attribute{},
		},
		expErr: errWildcard,
	},

	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: types.EvActionProviderUpdated,
			Attributes: []sdk.Attribute{
				{
					Key:   types.EvOwnerKey,
					Value: "akash1qtqpdszzakz7ugkey7ka2cmss95z26ygar2mgr",
				},
			},
		},
		expErr: nil,
	},
	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: types.EvActionProviderUpdated,
			Attributes: []sdk.Attribute{
				{
					Key:   types.EvOwnerKey,
					Value: "hello",
				},
			},
		},
		expErr: errWildcard,
	},
	{
		msg: sdkutil.Event{
			Type:       sdkutil.EventTypeMessage,
			Module:     types.ModuleName,
			Action:     types.EvActionProviderUpdated,
			Attributes: []sdk.Attribute{},
		},
		expErr: errWildcard,
	},

	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: types.EvActionProviderDeleted,
			Attributes: []sdk.Attribute{
				{
					Key:   types.EvOwnerKey,
					Value: "akash1qtqpdszzakz7ugkey7ka2cmss95z26ygar2mgr",
				},
			},
		},
		expErr: nil,
	},
	{
		msg: sdkutil.Event{
			Type:   sdkutil.EventTypeMessage,
			Module: types.ModuleName,
			Action: types.EvActionProviderDeleted,
			Attributes: []sdk.Attribute{
				{
					Key:   types.EvOwnerKey,
					Value: "hello",
				},
			},
		},
		expErr: errWildcard,
	},
	{
		msg: sdkutil.Event{
			Type:       sdkutil.EventTypeMessage,
			Module:     types.ModuleName,
			Action:     types.EvActionProviderDeleted,
			Attributes: []sdk.Attribute{},
		},
		expErr: errWildcard,
	},
}

func TestEventParsing(t *testing.T) {
	for i, test := range TEPS {
		t.Run(fmt.Sprintf("%d", i),
			test.testMessageType())
	}
}
