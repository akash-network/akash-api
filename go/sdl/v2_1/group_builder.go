package v2_1

import (
	"sort"

	manifest "github.com/akash-network/akash-api/go/manifest/v2beta2"
	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

type groupsBuilder struct {
	dgroup        *dtypes.GroupSpec
	mgroup        *manifest.Group
	boundComputes map[string]map[string]int
}

// buildGroups
func (sdl *SDL) buildGroups() error {
	endpointsNames := sdl.computeEndpointSequenceNumbers()

	groups := make(map[string]*groupsBuilder)

	for _, svcName := range sdl.Deployments.svcNames() {
		depl := sdl.Deployments[svcName]

		for _, pname := range depl.placements() {
			// objects below have been ensured to exist
			svcdepl := depl[pname]
			compute := sdl.Profiles.Compute[svcdepl.Profile]
			svc := sdl.Services[svcName]
			infra := sdl.Profiles.Placement[pname]
			price := infra.Pricing[svcdepl.Profile]

			group := groups[pname]

			if group == nil {
				group = &groupsBuilder{
					dgroup: &dtypes.GroupSpec{
						Name: pname,
					},
					mgroup: &manifest.Group{
						Name: pname,
					},
					boundComputes: make(map[string]map[string]int),
				}

				group.dgroup.Requirements.Attributes = types.Attributes(infra.Attributes)
				group.dgroup.Requirements.SignedBy = infra.SignedBy

				// keep ordering stable
				sort.Sort(group.dgroup.Requirements.Attributes)

				groups[pname] = group
			}

			if _, exists := group.boundComputes[pname]; !exists {
				group.boundComputes[pname] = make(map[string]int)
			}

			expose, err := sdl.Services[svcName].Expose.toManifestExpose(endpointsNames)
			if err != nil {
				return err
			}

			resources := compute.Resources.toResources()
			resources.Endpoints = expose.GetEndpoints()

			if location, bound := group.boundComputes[pname][svcdepl.Profile]; !bound {
				res := compute.Resources.toResources()
				res.Endpoints = expose.GetEndpoints()

				var resID int
				if ln := len(group.dgroup.Resources); ln > 0 {
					resID = ln + 1
				} else {
					resID = 1
				}

				res.ID = uint32(resID)
				resources.ID = res.ID

				group.dgroup.Resources = append(group.dgroup.Resources, dtypes.ResourceUnit{
					Resources: res,
					Price:     price.Value,
					Count:     svcdepl.Count,
				})

				group.boundComputes[pname][svcdepl.Profile] = len(group.dgroup.Resources) - 1
			} else {
				resources.ID = group.dgroup.Resources[location].ID

				group.dgroup.Resources[location].Count += svcdepl.Count
				group.dgroup.Resources[location].Endpoints = append(group.dgroup.Resources[location].Endpoints, expose.GetEndpoints()...)

				sort.Sort(group.dgroup.Resources[location].Endpoints)
			}

			msvc := manifest.Service{
				Name:      svcName,
				Image:     svc.Image,
				Args:      svc.Args,
				Env:       svc.Env,
				Resources: resources,
				Count:     svcdepl.Count,
				Command:   svc.Command,
				Expose:    expose,
			}

			if svc.Params != nil {
				params := &manifest.ServiceParams{}

				if len(svc.Params.Storage) > 0 {
					params.Storage = make([]manifest.StorageParams, 0, len(svc.Params.Storage))
					for volName, volParams := range svc.Params.Storage {
						params.Storage = append(params.Storage, manifest.StorageParams{
							Name:     volName,
							Mount:    volParams.Mount,
							ReadOnly: volParams.ReadOnly,
						})
					}
				}

				msvc.Params = params
			}

			group.mgroup.Services = append(group.mgroup.Services, msvc)
		}
	}

	// keep ordering stable
	names := make([]string, 0, len(groups))
	for name := range groups {
		names = append(names, name)
	}
	sort.Strings(names)

	sdl.result.dgroups = make(dtypes.GroupSpecs, 0, len(names))
	sdl.result.mgroups = make(manifest.Groups, 0, len(names))

	for _, name := range names {
		mgroup := *groups[name].mgroup
		// stable ordering services by name
		sort.Sort(mgroup.Services)

		sdl.result.dgroups = append(sdl.result.dgroups, groups[name].dgroup)
		sdl.result.mgroups = append(sdl.result.mgroups, mgroup)
	}

	return nil
}