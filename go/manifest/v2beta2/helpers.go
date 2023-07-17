package v2beta2

import (
	k8svalidation "k8s.io/apimachinery/pkg/util/validation"

	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

type validateManifestGroupsHelper struct {
	hostnames          map[string]int // used as a set
	globalServiceCount uint
}

type validateEndpoints struct {
	httpEndpoints uint
	portEndpoints uint
	ipEndpoints   uint
}

type validateEndpointsHelper map[uint32]*validateEndpoints

type groupSpec struct {
	gs        dtypes.GroupSpec
	endpoints validateEndpointsHelper
}

type groupSpecHelper map[string]*groupSpec

func newGroupSpecsHelper(gspecs dtypes.GroupSpecs) groupSpecHelper {
	res := make(groupSpecHelper)

	for _, gspec := range gspecs {
		res[gspec.GetName()] = newGroupSpecHelper(*gspec)
	}

	return res
}

func newGroupSpecHelper(gs dtypes.GroupSpec) *groupSpec {
	res := &groupSpec{
		gs:        gs,
		endpoints: make(validateEndpointsHelper),
	}

	for _, gRes := range gs.Resources {
		vep := &validateEndpoints{}

		for _, ep := range gRes.Endpoints {
			switch ep.Kind {
			case types.Endpoint_SHARED_HTTP:
				vep.httpEndpoints++
			case types.Endpoint_RANDOM_PORT:
				vep.portEndpoints++
			case types.Endpoint_LEASED_IP:
				vep.ipEndpoints++
			}
		}

		res.endpoints[gRes.ID] = vep
	}

	return res
}

func isValidHostname(hostname string) bool {
	return len(hostname) <= hostnameMaxLen && 0 == len(k8svalidation.IsDNS1123Subdomain(hostname))
}

func (ve *validateEndpoints) tryDecHTTP() bool {
	if ve.httpEndpoints == 0 {
		return false
	}

	ve.httpEndpoints--

	return true
}

func (ve *validateEndpoints) tryDecPort() bool {
	if ve.portEndpoints == 0 {
		return false
	}

	ve.portEndpoints--

	return true
}

func (ve *validateEndpoints) tryDecIP() bool {
	if ve.ipEndpoints == 0 {
		return false
	}

	ve.ipEndpoints--

	return true
}
