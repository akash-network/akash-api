package events

import (
	"fmt"

	"github.com/cometbft/cometbft/libs/pubsub"
	cmquery "github.com/cometbft/cometbft/libs/pubsub/query"
	cmtypes "github.com/cometbft/cometbft/types"
)

func txQuery() pubsub.Query {
	return cmquery.MustCompile(
		fmt.Sprintf("%s='%s'", cmtypes.EventTypeKey, cmtypes.EventTx))
}

func blkQuery() pubsub.Query {
	return cmquery.MustCompile(
		fmt.Sprintf("%s='%s'", cmtypes.EventTypeKey, cmtypes.EventNewBlockHeader))
}
