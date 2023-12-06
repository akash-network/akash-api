package v2_1

import (
	"sort"

	"gopkg.in/yaml.v3"

	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

type memoryAttributes types.Attributes

func (sdl *memoryAttributes) UnmarshalYAML(node *yaml.Node) error {
	var attr memoryAttributes

	var res map[string]string

	if err := node.Decode(&res); err != nil {
		return err
	}

	for k, v := range res {
		attr = append(attr, types.Attribute{
			Key:   k,
			Value: v,
		})
	}

	// keys are unique in attributes parsed from sdl so don't need to use sort.SliceStable
	sort.Sort(types.Attributes(attr))

	*sdl = attr

	return nil
}
