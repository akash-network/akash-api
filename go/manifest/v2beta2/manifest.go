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

// func (g Group) isMatchingResourceList(rlists dtypes.ResourcesList) error {
// 	mlist := make([]types.Resources, len(g.Services))
//
// 	httpOnlyEndpointsCountForDeploymentGroup := 0
// 	otherEndpointsCountForDeploymentGroup := 0
//
// 	// for idx, svc := range mgroup.Services {
// 	// 	if !svc.Resources.InGroup(groupResources) {
// 	// 		jSvc, _ := json.Marshal(svc.Resources)
// 	// 		jGroup, _ := json.Marshal(dgroup.GetResources()[idx].Units)
// 	// 		return fmt.Errorf("invalid manifest: mismatch between service and group resources\n\tservice: %s\n\tgroup: %s",
// 	// 			string(jSvc), string(jGroup))
// 	// 	}
// 	// }
//
// 	// Iterate over all deployment groups
//
// deploymentGroupLoop:
// 	for _, rlist := range rlists {
// 		for _, endpoint := range rlist.Endpoints {
// 			switch endpoint.Kind {
// 			case types.Endpoint_SHARED_HTTP:
// 				httpOnlyEndpointsCountForDeploymentGroup++
// 			case types.Endpoint_RANDOM_PORT:
// 				otherEndpointsCountForDeploymentGroup++
// 			}
// 		}
// 		// Find a matching manifest group
// 		for idx := range mlist {
// 			mrec := mlist[idx]
//
// 			// Check that this manifest group is not yet exhausted
// 			if mrec.Count == 0 {
// 				continue
// 			}
//
// 			if !drec.Units.CPU.Equal(mrec.Units.CPU) ||
// 				!drec.Units.GPU.Equal(mrec.Units.GPU) ||
// 				!drec.Units.Memory.Equal(mrec.Units.Memory) ||
// 				!drec.Units.Storage.Equal(mrec.Units.Storage) {
// 				continue
// 			}
//
// 			// If the manifest group contains more resources than the deployment group, then
// 			// fulfill the deployment group entirely
// 			if mrec.Count >= drec.Count {
// 				mrec.Count -= drec.Count
// 				drec.Count = 0
// 			} else {
// 				// Partially fulfill the deployment group since the manifest group contains less
// 				drec.Count -= mrec.Count
// 				mrec.Count = 0
// 			}
//
// 			// Update the value stored in the list
// 			mlist[idx] = mrec
//
// 			// If the deployment group is fulfilled then break out and
// 			// move to the next deployment
// 			if drec.Count == 0 {
// 				continue deploymentGroupLoop
// 			}
// 		}
// 		// If this point is reached then the deployment group cannot be fully matched
// 		// against the given manifest groups
// 		return fmt.Errorf("%w: underutilized deployment group %q", ErrManifestCrossValidation, dgroup.GetName())
// 	}
//
// 	return nil
// }
//
// func validateManifestDeploymentGroup(mgroup Group, dgroup dtypes.ResourcesList) error {
// 	mlist := make(types.Resources, len(mgroup.GetResources()))
// 	copy(mlist, mgroup.GetResources())
//
// 	httpOnlyEndpointsCountForDeploymentGroup := 0
// 	otherEndpointsCountForDeploymentGroup := 0
//
// 	groupResources := dgroup.GetResources()
//
// 	for idx, svc := range mgroup.Services {
// 		if !svc.Resources.InGroup(groupResources) {
// 			jSvc, _ := json.Marshal(svc.Resources)
// 			jGroup, _ := json.Marshal(dgroup.GetResources()[idx].Units)
// 			return fmt.Errorf("invalid manifest: mismatch between service and group resources\n\tservice: %s\n\tgroup: %s",
// 				string(jSvc), string(jGroup))
// 		}
// 	}
//
// 	// Iterate over all deployment groups
// deploymentGroupLoop:
// 	for _, drec := range dgroup.GetResources() {
// 		for _, endpoint := range drec.Units.Endpoints {
// 			switch endpoint.Kind {
// 			case types.Endpoint_SHARED_HTTP:
// 				httpOnlyEndpointsCountForDeploymentGroup++
// 			case types.Endpoint_RANDOM_PORT:
// 				otherEndpointsCountForDeploymentGroup++
// 			}
// 		}
// 		// Find a matching manifest group
// 		for idx := range mlist {
// 			mrec := mlist[idx]
//
// 			// Check that this manifest group is not yet exhausted
// 			if mrec.Count == 0 {
// 				continue
// 			}
//
// 			if !drec.Units.CPU.Equal(mrec.Units.CPU) ||
// 				!drec.Units.GPU.Equal(mrec.Units.GPU) ||
// 				!drec.Units.Memory.Equal(mrec.Units.Memory) ||
// 				!drec.Units.Storage.Equal(mrec.Units.Storage) {
// 				continue
// 			}
//
// 			// If the manifest group contains more resources than the deployment group, then
// 			// fulfill the deployment group entirely
// 			if mrec.Count >= drec.Count {
// 				mrec.Count -= drec.Count
// 				drec.Count = 0
// 			} else {
// 				// Partially fulfill the deployment group since the manifest group contains less
// 				drec.Count -= mrec.Count
// 				mrec.Count = 0
// 			}
//
// 			// Update the value stored in the list
// 			mlist[idx] = mrec
//
// 			// If the deployment group is fulfilled then break out and
// 			// move to the next deployment
// 			if drec.Count == 0 {
// 				continue deploymentGroupLoop
// 			}
// 		}
// 		// If this point is reached then the deployment group cannot be fully matched
// 		// against the given manifest groups
// 		return fmt.Errorf("%w: underutilized deployment group %q", ErrManifestCrossValidation, dgroup.GetName())
// 	}
//
// 	// Search for any manifest groups which are not fully satisfied
// 	for _, mrec := range mlist {
// 		if mrec.Count > 0 {
// 			return fmt.Errorf("%w: manifest resources %q is not fully matched with deployment groups",
// 				ErrManifestCrossValidation, mgroup.GetName())
// 		}
// 	}
//
// 	httpOnlyEndpointCount := 0
// 	otherEndpointCount := 0
//
// 	for _, service := range mgroup.Services {
// 		for _, serviceExpose := range service.Expose {
// 			if serviceExpose.Global {
// 				if IsIngress(serviceExpose) {
// 					httpOnlyEndpointCount++
// 				} else {
// 					otherEndpointCount++
// 				}
// 			}
// 		}
// 	}
//
// 	if otherEndpointCount != otherEndpointsCountForDeploymentGroup {
// 		return fmt.Errorf("invalid manifest: mismatch on number of endpoints %d != %d",
// 			otherEndpointCount, otherEndpointsCountForDeploymentGroup)
// 	}
//
// 	if httpOnlyEndpointCount != httpOnlyEndpointsCountForDeploymentGroup {
// 		return fmt.Errorf("invalid manifest: mismatch on number of HTTP only endpoints %d != %d",
// 			httpOnlyEndpointCount, httpOnlyEndpointsCountForDeploymentGroup)
// 	}
//
// 	return nil
// }
