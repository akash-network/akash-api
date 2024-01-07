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
     - [ServiceParams](#akash.manifest.v2beta2.ServiceParams)
     - [StorageParams](#akash.manifest.v2beta2.StorageParams)
   
 - [akash/inventory/v1/memory.proto](#akash/inventory/v1/memory.proto)
     - [Memory](#akash.inventory.v1.Memory)
     - [MemoryInfo](#akash.inventory.v1.MemoryInfo)
   
 - [akash/inventory/v1/cpu.proto](#akash/inventory/v1/cpu.proto)
     - [CPU](#akash.inventory.v1.CPU)
     - [CPUInfo](#akash.inventory.v1.CPUInfo)
   
 - [akash/inventory/v1/cluster.proto](#akash/inventory/v1/cluster.proto)
     - [Cluster](#akash.inventory.v1.Cluster)
   
 - [akash/inventory/v1/node.proto](#akash/inventory/v1/node.proto)
     - [Node](#akash.inventory.v1.Node)
   
 - [akash/inventory/v1/resourcepair.proto](#akash/inventory/v1/resourcepair.proto)
     - [ResourcePair](#akash.inventory.v1.ResourcePair)
   
 - [akash/inventory/v1/gpu.proto](#akash/inventory/v1/gpu.proto)
     - [GPU](#akash.inventory.v1.GPU)
     - [GPUInfo](#akash.inventory.v1.GPUInfo)
   
 - [akash/inventory/v1/storage.proto](#akash/inventory/v1/storage.proto)
     - [Storage](#akash.inventory.v1.Storage)
     - [StorageInfo](#akash.inventory.v1.StorageInfo)
   
 - [akash/inventory/v1/service.proto](#akash/inventory/v1/service.proto)
     - [VoidNoParam](#akash.inventory.v1.VoidNoParam)
   
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

 
 
 <a name="akash/inventory/v1/node.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inventory/v1/node.proto
 

 
 <a name="akash.inventory.v1.Node"></a>

 ### Node
 Node reports node inventory details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `cpu` | [CPU](#akash.inventory.v1.CPU) |  |  |
 | `memory` | [Memory](#akash.inventory.v1.Memory) |  |  |
 | `gpu` | [GPU](#akash.inventory.v1.GPU) |  |  |
 | `storage` | [Storage](#akash.inventory.v1.Storage) |  |  |
 
 

 

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
 

 
 <a name="akash.inventory.v1.VoidNoParam"></a>

 ### VoidNoParam
 voidNoParam dummy param for RPC services

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.inventory.v1.ClusterRPC"></a>

 ### ClusterRPC
 ClusterRPC defines the RPC server of cluster

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `QueryCluster` | [VoidNoParam](#akash.inventory.v1.VoidNoParam) | [Cluster](#akash.inventory.v1.Cluster) stream | QueryNode defines a method to query and stream hardware state of the cluster buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | |
 
 
 <a name="akash.inventory.v1.NodeRPC"></a>

 ### NodeRPC
 NodeRPC defines the RPC server of node

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `QueryNode` | [VoidNoParam](#akash.inventory.v1.VoidNoParam) | [Node](#akash.inventory.v1.Node) stream | QueryNode defines a method to query and stream hardware state of the node buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | |
 
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
 
