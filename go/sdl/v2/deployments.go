package v2

import (
	"sort"

	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/types/known/structpb"
)

type Placements map[string]ServicePlacement
type Deployments map[string]Placements

func (t *Deployments) Marshal() ([]byte, error) {
	return t.MarshalJSON()
}

func (t *Deployments) MarshalTo(data []byte) (n int, err error) {
	val, err := structpb.NewValue(t)
	if err != nil {
		return 0, err
	}

	res, err := protojson.Marshal(val)
	if err != nil {
		return 0, err
	}

	return copy(data, res), nil
}

func (t *Deployments) Unmarshal(data []byte) error {
	return t.UnmarshalJSON(data)
}

func (t *Deployments) Size() int {
	data, _ := t.MarshalJSON()

	return len(data)
}

func (t *Deployments) MarshalJSON() ([]byte, error) {
	val, err := structpb.NewValue(t)
	if err != nil {
		return nil, err
	}

	return protojson.Marshal(val)
}

func (t *Deployments) UnmarshalJSON(data []byte) error {
	val, err := structpb.NewValue(t)
	if err != nil {
		return err
	}

	return protojson.Unmarshal(data, val)
}

// var _ sort.Interface = (*Placements)(nil)
//
//	func (pl Placements) Len() int {
//		return len(pl)
//	}
//
//	func (pl Placements) Swap(i, j int) {
//		pl[i], pl[j] = pl[j], pl[i]
//	}
//
//	func (pl Placements) Less(i, j int) bool {
//		return pl[i].Placement < pl[j].Placement
//	}
//
// type deploymentServices map[string]DeploymentPlacements
func (t Deployments) svcNames() []string {
	names := make([]string, 0, len(t))
	for name := range t {
		names = append(names, name)
	}

	sort.Strings(names)

	return names
}

func (t Placements) placements() []string {
	names := make([]string, 0, len(t))
	for placement := range t {
		names = append(names, placement)
	}
	sort.Strings(names)

	return names
}

// // placementNames stable ordered placement names
// func (sdl deploymentServices) placementNames() []string {
// 	names := make([]string, 0, len(sdl))
// 	for name := range sdl {
// 		names = append(names, name)
// 	}
// 	sort.Strings(names)
//
// 	return names
// }
//
// func v2DeploymentPlacementNames(m DeploymentPlacements) []string {
// 	names := make([]string, 0, len(m.Placements))
// 	for _, placement := range m.Placements {
// 		names = append(names, placement.Placement)
// 	}
// 	sort.Strings(names)
//
// 	return names
// }

// func (sdl *DeploymentPlacements) UnmarshalYAML(node *yaml.Node) error {
// 	var placements DeploymentPlacements
//
// 	for i := 0; i+1 < len(node.Content); i += 2 {
// 		var value string
// 		switch node.Content[i].Value {
// 		case "arch":
// 			if err := node.Content[i+1].Decode(&value); err != nil {
// 				return err
// 			}
// 		default:
// 			return fmt.Errorf("unsupported cpu attribute \"%s\"", node.Content[i].Value)
// 		}
//
// 		placements = append(placements, types.Attribute{
// 			Key:   node.Content[i].Value,
// 			Value: value,
// 		})
// 	}
//
// 	// keys are unique in attributes parsed from sdl so don't need to use sort.SliceStable
// 	sort.Slice(placements, func(i, j int) bool {
// 		return placements[i].Key < placements[j].Key
// 	})
//
// 	*sdl = placements
//
// 	return nil
// }
