package v2beta2

import (
	"fmt"
	"math"
	"sort"

	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

func (s *ServiceExpose) GetEndpoints() types.Endpoints {
	if !s.Global {
		return types.Endpoints{}
	}

	endpoints := make(types.Endpoints, 0, 1)

	if len(s.IP) != 0 {
		endpoints = make(types.Endpoints, 0, 2)

		endpoints = append(
			endpoints,
			types.Endpoint{
				Kind:           types.Endpoint_LEASED_IP,
				SequenceNumber: s.EndpointSequenceNumber,
			},
		)
	}

	kind := types.Endpoint_RANDOM_PORT
	if s.IsIngress() {
		kind = types.Endpoint_SHARED_HTTP
	}

	endpoints = append(endpoints, types.Endpoint{Kind: kind})

	sort.Sort(endpoints)

	return endpoints
}

func (s *ServiceExpose) validate(helper *validateManifestGroupsHelper) error {
	if s.Port == 0 || s.Port > math.MaxUint16 {
		return fmt.Errorf("port value must be 0 < value <= 65535 ")
	}

	switch s.Proto {
	case TCP, UDP:
		break
	default:
		return fmt.Errorf("protocol %q unknown", s.Proto)
	}

	if s.Global {
		helper.globalServiceCount++
	}

	for _, host := range s.Hosts {
		if !isValidHostname(host) {
			return fmt.Errorf("has invalid hostname %q", host)
		}

		_, exists := helper.hostnames[host]
		if exists {
			return fmt.Errorf("hostname %q is duplicated, this is not allowed", host)
		}
		helper.hostnames[host] = 0 // Value stored does not matter
	}

	return nil
}

func (s *ServiceExpose) checkAgainstResources(res *dtypes.ResourceUnit, eps validateEndpointsHelper) error {
	if s.Global {
		eph := eps[res.ID]

		if s.IsIngress() {
			if !eph.tryDecHTTP() {
				return fmt.Errorf("over-utilized HTTP endpoints")
			}
		} else {
			if !eph.tryDecPort() {
				return fmt.Errorf("over-utilized PORT endpoints")
			}
		}

		if len(s.IP) > 0 {
			if !eph.tryDecIP() {
				return fmt.Errorf("over-utilized IP endpoints")
			}
		}
	}

	return nil
}

func (s *ServiceExpose) IsIngress() bool {
	return s.Proto == TCP && s.Global && 80 == s.GetExternalPort()
}

func (s *ServiceExpose) GetExternalPort() int32 {
	if s.ExternalPort == 0 {
		return int32(s.Port) // nolint: gosec
	}

	return int32(s.ExternalPort) // nolint: gosec
}
