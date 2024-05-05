<!-- This file is auto-generated. Please do not modify it yourself. -->
 # Protobuf Documentation
 <a name="top"></a>

 ## Table of Contents
 
 - [akash/manifest/v2beta1/group.proto](#akash/manifest/v2beta1/group.proto)
     - [Group](#akash.manifest.v2beta1.Group)
   
 - [akash/manifest/v2beta1/httpoptions.proto](#akash/manifest/v2beta1/httpoptions.proto)
     - [ServiceExposeHTTPOptions](#akash.manifest.v2beta1.ServiceExposeHTTPOptions)
   
 - [akash/manifest/v2beta1/serviceexpose.proto](#akash/manifest/v2beta1/serviceexpose.proto)
     - [ServiceExpose](#akash.manifest.v2beta1.ServiceExpose)
   
 - [akash/manifest/v2beta1/service.proto](#akash/manifest/v2beta1/service.proto)
     - [Service](#akash.manifest.v2beta1.Service)
     - [ServiceParams](#akash.manifest.v2beta1.ServiceParams)
     - [StorageParams](#akash.manifest.v2beta1.StorageParams)
   
 - [akash/manifest/v2beta2/group.proto](#akash/manifest/v2beta2/group.proto)
     - [Group](#akash.manifest.v2beta2.Group)
   
 - [akash/manifest/v2beta2/httpoptions.proto](#akash/manifest/v2beta2/httpoptions.proto)
     - [ServiceExposeHTTPOptions](#akash.manifest.v2beta2.ServiceExposeHTTPOptions)
   
 - [akash/manifest/v2beta2/serviceexpose.proto](#akash/manifest/v2beta2/serviceexpose.proto)
     - [ServiceExpose](#akash.manifest.v2beta2.ServiceExpose)
   
 - [akash/manifest/v2beta2/service.proto](#akash/manifest/v2beta2/service.proto)
     - [Service](#akash.manifest.v2beta2.Service)
     - [ServiceImageCredentials](#akash.manifest.v2beta2.ServiceImageCredentials)
     - [ServiceParams](#akash.manifest.v2beta2.ServiceParams)
     - [StorageParams](#akash.manifest.v2beta2.StorageParams)
   
 - [akash/provider/v1/status.proto](#akash/provider/v1/status.proto)
     - [BidEngineStatus](#akash.provider.v1.BidEngineStatus)
     - [ClusterStatus](#akash.provider.v1.ClusterStatus)
     - [Inventory](#akash.provider.v1.Inventory)
     - [Leases](#akash.provider.v1.Leases)
     - [ManifestStatus](#akash.provider.v1.ManifestStatus)
     - [Reservations](#akash.provider.v1.Reservations)
     - [ReservationsMetric](#akash.provider.v1.ReservationsMetric)
     - [ResourcesMetric](#akash.provider.v1.ResourcesMetric)
     - [ResourcesMetric.StorageEntry](#akash.provider.v1.ResourcesMetric.StorageEntry)
     - [Status](#akash.provider.v1.Status)
   
 - [akash/provider/v1/service.proto](#akash/provider/v1/service.proto)
     - [AkashInfo](#akash.provider.v1.AkashInfo)
     - [BuildDep](#akash.provider.v1.BuildDep)
     - [KubeInfo](#akash.provider.v1.KubeInfo)
     - [ValidateRequest](#akash.provider.v1.ValidateRequest)
     - [ValidateResponse](#akash.provider.v1.ValidateResponse)
     - [VersionResponse](#akash.provider.v1.VersionResponse)
   
     - [ProviderRPC](#akash.provider.v1.ProviderRPC)
   
 - [akash/inventory/v1/memory.proto](#akash/inventory/v1/memory.proto)
     - [Memory](#akash.inventory.v1.Memory)
     - [MemoryInfo](#akash.inventory.v1.MemoryInfo)
   
 - [akash/inventory/v1/cpu.proto](#akash/inventory/v1/cpu.proto)
     - [CPU](#akash.inventory.v1.CPU)
     - [CPUInfo](#akash.inventory.v1.CPUInfo)
   
 - [akash/inventory/v1/cluster.proto](#akash/inventory/v1/cluster.proto)
     - [Cluster](#akash.inventory.v1.Cluster)
   
 - [akash/inventory/v1/resources.proto](#akash/inventory/v1/resources.proto)
     - [NodeResources](#akash.inventory.v1.NodeResources)
   
 - [akash/inventory/v1/node.proto](#akash/inventory/v1/node.proto)
     - [Node](#akash.inventory.v1.Node)
     - [NodeCapabilities](#akash.inventory.v1.NodeCapabilities)
   
 - [akash/inventory/v1/resourcepair.proto](#akash/inventory/v1/resourcepair.proto)
     - [ResourcePair](#akash.inventory.v1.ResourcePair)
   
 - [akash/inventory/v1/gpu.proto](#akash/inventory/v1/gpu.proto)
     - [GPU](#akash.inventory.v1.GPU)
     - [GPUInfo](#akash.inventory.v1.GPUInfo)
   
 - [akash/inventory/v1/storage.proto](#akash/inventory/v1/storage.proto)
     - [Storage](#akash.inventory.v1.Storage)
     - [StorageInfo](#akash.inventory.v1.StorageInfo)
   
 - [akash/inventory/v1/service.proto](#akash/inventory/v1/service.proto)
     - [ClusterRPC](#akash.inventory.v1.ClusterRPC)
     - [NodeRPC](#akash.inventory.v1.NodeRPC)
   
 - [Scalar Value Types](#scalar-value-types)

 
 
 <a name="akash/manifest/v2beta1/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta1/group.proto
 

 
 <a name="akash.manifest.v2beta1.Group"></a>

 ### Group
 Group store name and list of services

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `services` | [Service](#akash.manifest.v2beta1.Service) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta1/httpoptions.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta1/httpoptions.proto
 

 
 <a name="akash.manifest.v2beta1.ServiceExposeHTTPOptions"></a>

 ### ServiceExposeHTTPOptions
 ServiceExposeHTTPOptions

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `max_body_size` | [uint32](#uint32) |  |  |
 | `read_timeout` | [uint32](#uint32) |  |  |
 | `send_timeout` | [uint32](#uint32) |  |  |
 | `next_tries` | [uint32](#uint32) |  |  |
 | `next_timeout` | [uint32](#uint32) |  |  |
 | `next_cases` | [string](#string) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta1/serviceexpose.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta1/serviceexpose.proto
 

 
 <a name="akash.manifest.v2beta1.ServiceExpose"></a>

 ### ServiceExpose
 ServiceExpose stores exposed ports and hosts details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `port` | [uint32](#uint32) |  | port on the container |
 | `external_port` | [uint32](#uint32) |  | port on the service definition |
 | `proto` | [string](#string) |  |  |
 | `service` | [string](#string) |  |  |
 | `global` | [bool](#bool) |  |  |
 | `hosts` | [string](#string) | repeated |  |
 | `http_options` | [ServiceExposeHTTPOptions](#akash.manifest.v2beta1.ServiceExposeHTTPOptions) |  |  |
 | `ip` | [string](#string) |  | The name of the IP address associated with this, if any |
 | `endpoint_sequence_number` | [uint32](#uint32) |  | The sequence number of the associated endpoint in the on-chain data |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta1/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta1/service.proto
 

 
 <a name="akash.manifest.v2beta1.Service"></a>

 ### Service
 Service stores name, image, args, env, unit, count and expose list of service

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `image` | [string](#string) |  |  |
 | `command` | [string](#string) | repeated |  |
 | `args` | [string](#string) | repeated |  |
 | `env` | [string](#string) | repeated |  |
 | `resources` | [akash.base.v1beta2.ResourceUnits](#akash.base.v1beta2.ResourceUnits) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 | `expose` | [ServiceExpose](#akash.manifest.v2beta1.ServiceExpose) | repeated |  |
 | `params` | [ServiceParams](#akash.manifest.v2beta1.ServiceParams) |  |  |
 
 

 

 
 <a name="akash.manifest.v2beta1.ServiceParams"></a>

 ### ServiceParams
 ServiceParams

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `storage` | [StorageParams](#akash.manifest.v2beta1.StorageParams) | repeated |  |
 
 

 

 
 <a name="akash.manifest.v2beta1.StorageParams"></a>

 ### StorageParams
 StorageParams

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `mount` | [string](#string) |  |  |
 | `read_only` | [bool](#bool) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta2/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta2/group.proto
 

 
 <a name="akash.manifest.v2beta2.Group"></a>

 ### Group
 Group store name and list of services

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `services` | [Service](#akash.manifest.v2beta2.Service) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta2/httpoptions.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta2/httpoptions.proto
 

 
 <a name="akash.manifest.v2beta2.ServiceExposeHTTPOptions"></a>

 ### ServiceExposeHTTPOptions
 ServiceExposeHTTPOptions

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `max_body_size` | [uint32](#uint32) |  |  |
 | `read_timeout` | [uint32](#uint32) |  |  |
 | `send_timeout` | [uint32](#uint32) |  |  |
 | `next_tries` | [uint32](#uint32) |  |  |
 | `next_timeout` | [uint32](#uint32) |  |  |
 | `next_cases` | [string](#string) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta2/serviceexpose.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta2/serviceexpose.proto
 

 
 <a name="akash.manifest.v2beta2.ServiceExpose"></a>

 ### ServiceExpose
 ServiceExpose stores exposed ports and hosts details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `port` | [uint32](#uint32) |  | port on the container |
 | `external_port` | [uint32](#uint32) |  | port on the service definition |
 | `proto` | [string](#string) |  |  |
 | `service` | [string](#string) |  |  |
 | `global` | [bool](#bool) |  |  |
 | `hosts` | [string](#string) | repeated |  |
 | `http_options` | [ServiceExposeHTTPOptions](#akash.manifest.v2beta2.ServiceExposeHTTPOptions) |  |  |
 | `ip` | [string](#string) |  | The name of the IP address associated with this, if any |
 | `endpoint_sequence_number` | [uint32](#uint32) |  | The sequence number of the associated endpoint in the on-chain data |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/manifest/v2beta2/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/manifest/v2beta2/service.proto
 

 
 <a name="akash.manifest.v2beta2.Service"></a>

 ### Service
 Service stores name, image, args, env, unit, count and expose list of service

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `image` | [string](#string) |  |  |
 | `command` | [string](#string) | repeated |  |
 | `args` | [string](#string) | repeated |  |
 | `env` | [string](#string) | repeated |  |
 | `resources` | [akash.base.v1beta3.Resources](#akash.base.v1beta3.Resources) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 | `expose` | [ServiceExpose](#akash.manifest.v2beta2.ServiceExpose) | repeated |  |
 | `params` | [ServiceParams](#akash.manifest.v2beta2.ServiceParams) |  |  |
 | `credentials` | [ServiceImageCredentials](#akash.manifest.v2beta2.ServiceImageCredentials) |  |  |
 
 

 

 
 <a name="akash.manifest.v2beta2.ServiceImageCredentials"></a>

 ### ServiceImageCredentials
 Credentials to fetch image from registry

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `host` | [string](#string) |  |  |
 | `email` | [string](#string) |  |  |
 | `username` | [string](#string) |  |  |
 | `password` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.manifest.v2beta2.ServiceParams"></a>

 ### ServiceParams
 ServiceParams

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `storage` | [StorageParams](#akash.manifest.v2beta2.StorageParams) | repeated |  |
 
 

 

 
 <a name="akash.manifest.v2beta2.StorageParams"></a>

 ### StorageParams
 StorageParams

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `mount` | [string](#string) |  |  |
 | `read_only` | [bool](#bool) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1/status.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1/status.proto
 

 
 <a name="akash.provider.v1.BidEngineStatus"></a>

 ### BidEngineStatus
 BidEngineStatus

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `orders` | [uint32](#uint32) |  |  |
 
 

 

 
 <a name="akash.provider.v1.ClusterStatus"></a>

 ### ClusterStatus
 ClusterStatus

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `leases` | [Leases](#akash.provider.v1.Leases) |  |  |
 | `inventory` | [Inventory](#akash.provider.v1.Inventory) |  |  |
 
 

 

 
 <a name="akash.provider.v1.Inventory"></a>

 ### Inventory
 Inventory

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `cluster` | [akash.inventory.v1.Cluster](#akash.inventory.v1.Cluster) |  |  |
 | `reservations` | [Reservations](#akash.provider.v1.Reservations) |  |  |
 
 

 

 
 <a name="akash.provider.v1.Leases"></a>

 ### Leases
 Leases

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `active` | [uint32](#uint32) |  |  |
 
 

 

 
 <a name="akash.provider.v1.ManifestStatus"></a>

 ### ManifestStatus
 ManifestStatus

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [uint32](#uint32) |  |  |
 
 

 

 
 <a name="akash.provider.v1.Reservations"></a>

 ### Reservations
 Reservations

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pending` | [ReservationsMetric](#akash.provider.v1.ReservationsMetric) |  |  |
 | `active` | [ReservationsMetric](#akash.provider.v1.ReservationsMetric) |  |  |
 
 

 

 
 <a name="akash.provider.v1.ReservationsMetric"></a>

 ### ReservationsMetric
 ReservationsMetric

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `count` | [uint32](#uint32) |  |  |
 | `resources` | [ResourcesMetric](#akash.provider.v1.ResourcesMetric) |  |  |
 
 

 

 
 <a name="akash.provider.v1.ResourcesMetric"></a>

 ### ResourcesMetric
 ResourceMetrics

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `cpu` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 | `memory` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 | `gpu` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 | `ephemeral_storage` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 | `storage` | [ResourcesMetric.StorageEntry](#akash.provider.v1.ResourcesMetric.StorageEntry) | repeated |  |
 
 

 

 
 <a name="akash.provider.v1.ResourcesMetric.StorageEntry"></a>

 ### ResourcesMetric.StorageEntry
 

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `key` | [string](#string) |  |  |
 | `value` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 
 

 

 
 <a name="akash.provider.v1.Status"></a>

 ### Status
 Status

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `errors` | [string](#string) | repeated |  |
 | `cluster` | [ClusterStatus](#akash.provider.v1.ClusterStatus) |  |  |
 | `bid_engine` | [BidEngineStatus](#akash.provider.v1.BidEngineStatus) |  |  |
 | `manifest` | [ManifestStatus](#akash.provider.v1.ManifestStatus) |  |  |
 | `public_hostnames` | [string](#string) | repeated |  |
 | `timestamp` | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1/service.proto
 

 
 <a name="akash.provider.v1.AkashInfo"></a>

 ### AkashInfo
 AkashInfo

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `app_name` | [string](#string) |  |  |
 | `version` | [string](#string) |  |  |
 | `git_commit` | [string](#string) |  |  |
 | `build_tags` | [string](#string) |  |  |
 | `go_version` | [string](#string) |  |  |
 | `build_deps` | [BuildDep](#akash.provider.v1.BuildDep) | repeated |  |
 | `cosmos_sdk_version` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1.BuildDep"></a>

 ### BuildDep
 BuildDep

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `path` | [string](#string) |  |  |
 | `version` | [string](#string) |  |  |
 | `sum` | [string](#string) |  |  |
 | `replace` | [BuildDep](#akash.provider.v1.BuildDep) |  |  |
 
 

 

 
 <a name="akash.provider.v1.KubeInfo"></a>

 ### KubeInfo
 KubeInfo

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `major` | [string](#string) |  |  |
 | `minor` | [string](#string) |  |  |
 | `git_version` | [string](#string) |  |  |
 | `git_commit` | [string](#string) |  |  |
 | `git_tree_state` | [string](#string) |  |  |
 | `build_date` | [string](#string) |  |  |
 | `go_version` | [string](#string) |  |  |
 | `compiler` | [string](#string) |  |  |
 | `platform` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1.ValidateRequest"></a>

 ### ValidateRequest
 ValidateRequest

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `groups` | [akash.deployment.v1beta3.GroupSpec](#akash.deployment.v1beta3.GroupSpec) |  |  |
 
 

 

 
 <a name="akash.provider.v1.ValidateResponse"></a>

 ### ValidateResponse
 ValidateResponse

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `min_bid_price` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

 
 <a name="akash.provider.v1.VersionResponse"></a>

 ### VersionResponse
 VersionResponse

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `akash` | [AkashInfo](#akash.provider.v1.AkashInfo) |  |  |
 | `kube` | [KubeInfo](#akash.provider.v1.KubeInfo) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1.ProviderRPC"></a>

 ### ProviderRPC
 ProviderRPC defines the RPC server for provider

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `GetStatus` | [.google.protobuf.Empty](#google.protobuf.Empty) | [Status](#akash.provider.v1.Status) | GetStatus defines a method to query provider state buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/v1/status|
 | `StreamStatus` | [.google.protobuf.Empty](#google.protobuf.Empty) | [Status](#akash.provider.v1.Status) stream | Status defines a method to stream provider state buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | |
 | `Version` | [.google.protobuf.Empty](#google.protobuf.Empty) | [VersionResponse](#akash.provider.v1.VersionResponse) | Version returns version information about the provider | |
 | `Validate` | [ValidateRequest](#akash.provider.v1.ValidateRequest) | [ValidateResponse](#akash.provider.v1.ValidateResponse) | Validate checks if provider will bid on given groupspec | |
 | `WIBOY` | [ValidateRequest](#akash.provider.v1.ValidateRequest) | [ValidateResponse](#akash.provider.v1.ValidateResponse) | WIBOY (will I bid on you) is an alias for Validate | |
 
  <!-- end services -->

 
 
 <a name="akash/inventory/v1/memory.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/memory.proto
 

 
 <a name="akash.inventory.v1.Memory"></a>

 ### Memory
 Memory reports Memory inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 | `info` | [MemoryInfo](#akash.inventory.v1.MemoryInfo) | repeated |  |
 
 

 

 
 <a name="akash.inventory.v1.MemoryInfo"></a>

 ### MemoryInfo
 MemoryInfo reports Memory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `vendor` | [string](#string) |  |  |
 | `type` | [string](#string) |  |  |
 | `total_size` | [string](#string) |  |  |
 | `speed` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/cpu.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/cpu.proto
 

 
 <a name="akash.inventory.v1.CPU"></a>

 ### CPU
 CPU reports CPU inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 | `info` | [CPUInfo](#akash.inventory.v1.CPUInfo) | repeated |  |
 
 

 

 
 <a name="akash.inventory.v1.CPUInfo"></a>

 ### CPUInfo
 CPUInfo reports CPU details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [string](#string) |  |  |
 | `vendor` | [string](#string) |  |  |
 | `model` | [string](#string) |  |  |
 | `vcores` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/cluster.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/cluster.proto
 

 
 <a name="akash.inventory.v1.Cluster"></a>

 ### Cluster
 Cluster reports inventory across entire cluster

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `nodes` | [Node](#akash.inventory.v1.Node) | repeated |  |
 | `storage` | [Storage](#akash.inventory.v1.Storage) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/resources.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/resources.proto
 

 
 <a name="akash.inventory.v1.NodeResources"></a>

 ### NodeResources
 NodeResources reports node inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `cpu` | [CPU](#akash.inventory.v1.CPU) |  |  |
 | `memory` | [Memory](#akash.inventory.v1.Memory) |  |  |
 | `gpu` | [GPU](#akash.inventory.v1.GPU) |  |  |
 | `ephemeral_storage` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 | `volumes_attached` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 | `volumes_mounted` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/node.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/node.proto
 

 
 <a name="akash.inventory.v1.Node"></a>

 ### Node
 Node reports node inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `resources` | [NodeResources](#akash.inventory.v1.NodeResources) |  |  |
 | `capabilities` | [NodeCapabilities](#akash.inventory.v1.NodeCapabilities) |  |  |
 
 

 

 
 <a name="akash.inventory.v1.NodeCapabilities"></a>

 ### NodeCapabilities
 NodeCapabilities extended list of node capabilities

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `storage_classes` | [string](#string) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/resourcepair.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/resourcepair.proto
 

 
 <a name="akash.inventory.v1.ResourcePair"></a>

 ### ResourcePair
 ResourcePair to extents resource.Quantity to provide total and available units of the resource

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `allocatable` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 | `allocated` | [k8s.io.apimachinery.pkg.api.resource.Quantity](#k8s.io.apimachinery.pkg.api.resource.Quantity) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/gpu.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/gpu.proto
 

 
 <a name="akash.inventory.v1.GPU"></a>

 ### GPU
 GPUInfo reports GPU inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 | `info` | [GPUInfo](#akash.inventory.v1.GPUInfo) | repeated |  |
 
 

 

 
 <a name="akash.inventory.v1.GPUInfo"></a>

 ### GPUInfo
 GPUInfo reports GPU details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `vendor` | [string](#string) |  |  |
 | `vendor_id` | [string](#string) |  |  |
 | `name` | [string](#string) |  |  |
 | `modelid` | [string](#string) |  |  |
 | `interface` | [string](#string) |  |  |
 | `memory_size` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/storage.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/storage.proto
 

 
 <a name="akash.inventory.v1.Storage"></a>

 ### Storage
 Storage reports Storage inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourcePair](#akash.inventory.v1.ResourcePair) |  |  |
 | `info` | [StorageInfo](#akash.inventory.v1.StorageInfo) |  |  |
 
 

 

 
 <a name="akash.inventory.v1.StorageInfo"></a>

 ### StorageInfo
 StorageInfo reports Storage details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `class` | [string](#string) |  |  |
 | `iops` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inventory/v1/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.inventory.v1.ClusterRPC"></a>

 ### ClusterRPC
 ClusterRPC defines the RPC server of cluster

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `QueryCluster` | [.google.protobuf.Empty](#google.protobuf.Empty) | [Cluster](#akash.inventory.v1.Cluster) | QueryCluster defines a method to query hardware state of the cluster buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/v1/inventory|
 | `StreamCluster` | [.google.protobuf.Empty](#google.protobuf.Empty) | [Cluster](#akash.inventory.v1.Cluster) stream | StreamCluster defines a method to stream hardware state of the cluster buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | |
 
 
 <a name="akash.inventory.v1.NodeRPC"></a>

 ### NodeRPC
 NodeRPC defines the RPC server of node

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `QueryNode` | [.google.protobuf.Empty](#google.protobuf.Empty) | [Node](#akash.inventory.v1.Node) | QueryNode defines a method to query hardware state of the node buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/v1/node|
 | `StreamNode` | [.google.protobuf.Empty](#google.protobuf.Empty) | [Node](#akash.inventory.v1.Node) stream | StreamNode defines a method to stream hardware state of the node buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | |
 
  <!-- end services -->

 

 ## Scalar Value Types

 | .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
 | ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
 | <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
 | <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
 | <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
 | <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
 | <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
 | <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
 | <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
 | <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
 | <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
 | <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
 | <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
 | <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
 | <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
 | <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
 | <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |
 
