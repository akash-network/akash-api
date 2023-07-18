package v2beta2

import (
	"fmt"
	"regexp"

	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
)

var (
	serviceNameValidationRegex = regexp.MustCompile(`^[a-z]([-a-z0-9]*[a-z0-9])?$`)
	hostnameMaxLen             = 255
)

// Manifest store list of groups
type Manifest Groups

// GetGroups returns a manifest with groups list
func (m Manifest) GetGroups() Groups {
	return Groups(m)
}

// Validate does validation for manifest
func (m Manifest) Validate() error {
	if len(m) == 0 {
		return fmt.Errorf("%w: manifest is empty", ErrInvalidManifest)
	}

	return m.GetGroups().Validate()
}

func (m Manifest) CheckAgainstDeployment(dgroups []dtypes.Group) error {
	gspecs := make([]*dtypes.GroupSpec, 0, len(dgroups))

	for _, dgroup := range dgroups {
		gspec := dgroup.GroupSpec
		gspecs = append(gspecs, &gspec)
	}

	return m.CheckAgainstGSpecs(gspecs)
}

func (m Manifest) CheckAgainstGSpecs(gspecs dtypes.GroupSpecs) error {
	return m.GetGroups().CheckAgainstGSpecs(gspecs)
}
