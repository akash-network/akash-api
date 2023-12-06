package v2

import (
	"fmt"
	"sort"

	"gopkg.in/yaml.v3"

	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

type cpuAttributes types.Attributes

func (sdl *cpuAttributes) UnmarshalYAML(node *yaml.Node) error {
	var attr cpuAttributes

	for i := 0; i+1 < len(node.Content); i += 2 {
		var value string
		switch node.Content[i].Value {
		case "arch":
			if err := node.Content[i+1].Decode(&value); err != nil {
				return err
			}
		default:
			return fmt.Errorf("unsupported cpu attribute \"%s\"", node.Content[i].Value)
		}

		attr = append(attr, types.Attribute{
			Key:   node.Content[i].Value,
			Value: value,
		})
	}

	// keys are unique in attributes parsed from sdl so don't need to use sort.SliceStable
	sort.Slice(attr, func(i, j int) bool {
		return attr[i].Key < attr[j].Key
	})

	*sdl = attr

	return nil
}
