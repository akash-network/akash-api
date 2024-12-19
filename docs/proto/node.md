<!-- This file is auto-generated. Please do not modify it yourself. -->
 # Protobuf Documentation
 <a name="top"></a>

 ## Table of Contents
 
 - [akash/base/attributes/v1/attribute.proto](#akash/base/attributes/v1/attribute.proto)
     - [Attribute](#akash.base.attributes.v1.Attribute)
     - [PlacementRequirements](#akash.base.attributes.v1.PlacementRequirements)
     - [SignedBy](#akash.base.attributes.v1.SignedBy)
   
 - [akash/audit/v1/audit.proto](#akash/audit/v1/audit.proto)
     - [AttributesFilters](#akash.audit.v1.AttributesFilters)
     - [AuditedAttributesStore](#akash.audit.v1.AuditedAttributesStore)
     - [AuditedProvider](#akash.audit.v1.AuditedProvider)
   
 - [akash/audit/v1/event.proto](#akash/audit/v1/event.proto)
     - [EventTrustedAuditorCreated](#akash.audit.v1.EventTrustedAuditorCreated)
     - [EventTrustedAuditorDeleted](#akash.audit.v1.EventTrustedAuditorDeleted)
   
 - [akash/audit/v1/genesis.proto](#akash/audit/v1/genesis.proto)
     - [GenesisState](#akash.audit.v1.GenesisState)
   
 - [akash/audit/v1/msg.proto](#akash/audit/v1/msg.proto)
     - [MsgDeleteProviderAttributes](#akash.audit.v1.MsgDeleteProviderAttributes)
     - [MsgDeleteProviderAttributesResponse](#akash.audit.v1.MsgDeleteProviderAttributesResponse)
     - [MsgSignProviderAttributes](#akash.audit.v1.MsgSignProviderAttributes)
     - [MsgSignProviderAttributesResponse](#akash.audit.v1.MsgSignProviderAttributesResponse)
   
 - [akash/audit/v1/query.proto](#akash/audit/v1/query.proto)
     - [QueryAllProvidersAttributesRequest](#akash.audit.v1.QueryAllProvidersAttributesRequest)
     - [QueryAuditorAttributesRequest](#akash.audit.v1.QueryAuditorAttributesRequest)
     - [QueryProviderAttributesRequest](#akash.audit.v1.QueryProviderAttributesRequest)
     - [QueryProviderAuditorRequest](#akash.audit.v1.QueryProviderAuditorRequest)
     - [QueryProviderRequest](#akash.audit.v1.QueryProviderRequest)
     - [QueryProvidersResponse](#akash.audit.v1.QueryProvidersResponse)
   
     - [Query](#akash.audit.v1.Query)
   
 - [akash/audit/v1/service.proto](#akash/audit/v1/service.proto)
     - [Msg](#akash.audit.v1.Msg)
   
 - [akash/base/resources/v1beta4/resourcevalue.proto](#akash/base/resources/v1beta4/resourcevalue.proto)
     - [ResourceValue](#akash.base.resources.v1beta4.ResourceValue)
   
 - [akash/base/resources/v1beta4/cpu.proto](#akash/base/resources/v1beta4/cpu.proto)
     - [CPU](#akash.base.resources.v1beta4.CPU)
   
 - [akash/base/resources/v1beta4/endpoint.proto](#akash/base/resources/v1beta4/endpoint.proto)
     - [Endpoint](#akash.base.resources.v1beta4.Endpoint)
   
     - [Endpoint.Kind](#akash.base.resources.v1beta4.Endpoint.Kind)
   
 - [akash/base/resources/v1beta4/gpu.proto](#akash/base/resources/v1beta4/gpu.proto)
     - [GPU](#akash.base.resources.v1beta4.GPU)
   
 - [akash/base/resources/v1beta4/memory.proto](#akash/base/resources/v1beta4/memory.proto)
     - [Memory](#akash.base.resources.v1beta4.Memory)
   
 - [akash/base/resources/v1beta4/storage.proto](#akash/base/resources/v1beta4/storage.proto)
     - [Storage](#akash.base.resources.v1beta4.Storage)
   
 - [akash/base/resources/v1beta4/resources.proto](#akash/base/resources/v1beta4/resources.proto)
     - [Resources](#akash.base.resources.v1beta4.Resources)
   
 - [akash/cert/v1/cert.proto](#akash/cert/v1/cert.proto)
     - [Certificate](#akash.cert.v1.Certificate)
     - [ID](#akash.cert.v1.ID)
   
     - [State](#akash.cert.v1.State)
   
 - [akash/cert/v1/filters.proto](#akash/cert/v1/filters.proto)
     - [CertificateFilter](#akash.cert.v1.CertificateFilter)
   
 - [akash/cert/v1/genesis.proto](#akash/cert/v1/genesis.proto)
     - [GenesisCertificate](#akash.cert.v1.GenesisCertificate)
     - [GenesisState](#akash.cert.v1.GenesisState)
   
 - [akash/cert/v1/msg.proto](#akash/cert/v1/msg.proto)
     - [MsgCreateCertificate](#akash.cert.v1.MsgCreateCertificate)
     - [MsgCreateCertificateResponse](#akash.cert.v1.MsgCreateCertificateResponse)
     - [MsgRevokeCertificate](#akash.cert.v1.MsgRevokeCertificate)
     - [MsgRevokeCertificateResponse](#akash.cert.v1.MsgRevokeCertificateResponse)
   
 - [akash/cert/v1/query.proto](#akash/cert/v1/query.proto)
     - [CertificateResponse](#akash.cert.v1.CertificateResponse)
     - [QueryCertificatesRequest](#akash.cert.v1.QueryCertificatesRequest)
     - [QueryCertificatesResponse](#akash.cert.v1.QueryCertificatesResponse)
   
     - [Query](#akash.cert.v1.Query)
   
 - [akash/cert/v1/service.proto](#akash/cert/v1/service.proto)
     - [Msg](#akash.cert.v1.Msg)
   
 - [akash/deployment/v1/authz.proto](#akash/deployment/v1/authz.proto)
     - [DepositAuthorization](#akash.deployment.v1.DepositAuthorization)
   
 - [akash/deployment/v1/deployment.proto](#akash/deployment/v1/deployment.proto)
     - [Deployment](#akash.deployment.v1.Deployment)
     - [DeploymentID](#akash.deployment.v1.DeploymentID)
   
     - [Deployment.State](#akash.deployment.v1.Deployment.State)
   
 - [akash/deployment/v1/group.proto](#akash/deployment/v1/group.proto)
     - [GroupID](#akash.deployment.v1.GroupID)
   
 - [akash/deployment/v1/event.proto](#akash/deployment/v1/event.proto)
     - [EventDeploymentClosed](#akash.deployment.v1.EventDeploymentClosed)
     - [EventDeploymentCreated](#akash.deployment.v1.EventDeploymentCreated)
     - [EventDeploymentUpdated](#akash.deployment.v1.EventDeploymentUpdated)
     - [EventGroupClosed](#akash.deployment.v1.EventGroupClosed)
     - [EventGroupPaused](#akash.deployment.v1.EventGroupPaused)
     - [EventGroupStarted](#akash.deployment.v1.EventGroupStarted)
   
 - [akash/deployment/v1/msg.proto](#akash/deployment/v1/msg.proto)
     - [MsgDepositDeployment](#akash.deployment.v1.MsgDepositDeployment)
     - [MsgDepositDeploymentResponse](#akash.deployment.v1.MsgDepositDeploymentResponse)
   
 - [akash/deployment/v1beta4/resourceunit.proto](#akash/deployment/v1beta4/resourceunit.proto)
     - [ResourceUnit](#akash.deployment.v1beta4.ResourceUnit)
   
 - [akash/deployment/v1beta4/groupspec.proto](#akash/deployment/v1beta4/groupspec.proto)
     - [GroupSpec](#akash.deployment.v1beta4.GroupSpec)
   
 - [akash/deployment/v1beta4/deploymentmsg.proto](#akash/deployment/v1beta4/deploymentmsg.proto)
     - [MsgCloseDeployment](#akash.deployment.v1beta4.MsgCloseDeployment)
     - [MsgCloseDeploymentResponse](#akash.deployment.v1beta4.MsgCloseDeploymentResponse)
     - [MsgCreateDeployment](#akash.deployment.v1beta4.MsgCreateDeployment)
     - [MsgCreateDeploymentResponse](#akash.deployment.v1beta4.MsgCreateDeploymentResponse)
     - [MsgUpdateDeployment](#akash.deployment.v1beta4.MsgUpdateDeployment)
     - [MsgUpdateDeploymentResponse](#akash.deployment.v1beta4.MsgUpdateDeploymentResponse)
   
 - [akash/deployment/v1beta4/filters.proto](#akash/deployment/v1beta4/filters.proto)
     - [DeploymentFilters](#akash.deployment.v1beta4.DeploymentFilters)
     - [GroupFilters](#akash.deployment.v1beta4.GroupFilters)
   
 - [akash/deployment/v1beta4/group.proto](#akash/deployment/v1beta4/group.proto)
     - [Group](#akash.deployment.v1beta4.Group)
   
     - [Group.State](#akash.deployment.v1beta4.Group.State)
   
 - [akash/deployment/v1beta4/params.proto](#akash/deployment/v1beta4/params.proto)
     - [Params](#akash.deployment.v1beta4.Params)
   
 - [akash/deployment/v1beta4/genesis.proto](#akash/deployment/v1beta4/genesis.proto)
     - [GenesisDeployment](#akash.deployment.v1beta4.GenesisDeployment)
     - [GenesisState](#akash.deployment.v1beta4.GenesisState)
   
 - [akash/deployment/v1beta4/groupmsg.proto](#akash/deployment/v1beta4/groupmsg.proto)
     - [MsgCloseGroup](#akash.deployment.v1beta4.MsgCloseGroup)
     - [MsgCloseGroupResponse](#akash.deployment.v1beta4.MsgCloseGroupResponse)
     - [MsgPauseGroup](#akash.deployment.v1beta4.MsgPauseGroup)
     - [MsgPauseGroupResponse](#akash.deployment.v1beta4.MsgPauseGroupResponse)
     - [MsgStartGroup](#akash.deployment.v1beta4.MsgStartGroup)
     - [MsgStartGroupResponse](#akash.deployment.v1beta4.MsgStartGroupResponse)
   
 - [akash/deployment/v1beta4/paramsmsg.proto](#akash/deployment/v1beta4/paramsmsg.proto)
     - [MsgUpdateParams](#akash.deployment.v1beta4.MsgUpdateParams)
     - [MsgUpdateParamsResponse](#akash.deployment.v1beta4.MsgUpdateParamsResponse)
   
 - [akash/escrow/v1/accountid.proto](#akash/escrow/v1/accountid.proto)
     - [AccountID](#akash.escrow.v1.AccountID)
   
 - [akash/escrow/v1/account.proto](#akash/escrow/v1/account.proto)
     - [Account](#akash.escrow.v1.Account)
   
     - [Account.State](#akash.escrow.v1.Account.State)
   
 - [akash/deployment/v1beta4/query.proto](#akash/deployment/v1beta4/query.proto)
     - [QueryDeploymentRequest](#akash.deployment.v1beta4.QueryDeploymentRequest)
     - [QueryDeploymentResponse](#akash.deployment.v1beta4.QueryDeploymentResponse)
     - [QueryDeploymentsRequest](#akash.deployment.v1beta4.QueryDeploymentsRequest)
     - [QueryDeploymentsResponse](#akash.deployment.v1beta4.QueryDeploymentsResponse)
     - [QueryGroupRequest](#akash.deployment.v1beta4.QueryGroupRequest)
     - [QueryGroupResponse](#akash.deployment.v1beta4.QueryGroupResponse)
     - [QueryParamsRequest](#akash.deployment.v1beta4.QueryParamsRequest)
     - [QueryParamsResponse](#akash.deployment.v1beta4.QueryParamsResponse)
   
     - [Query](#akash.deployment.v1beta4.Query)
   
 - [akash/deployment/v1beta4/service.proto](#akash/deployment/v1beta4/service.proto)
     - [Msg](#akash.deployment.v1beta4.Msg)
   
 - [akash/discovery/v1/client_info.proto](#akash/discovery/v1/client_info.proto)
     - [ClientInfo](#akash.discovery.v1.ClientInfo)
   
 - [akash/discovery/v1/akash.proto](#akash/discovery/v1/akash.proto)
     - [Akash](#akash.discovery.v1.Akash)
   
 - [akash/escrow/v1/fractional_payment.proto](#akash/escrow/v1/fractional_payment.proto)
     - [FractionalPayment](#akash.escrow.v1.FractionalPayment)
   
     - [FractionalPayment.State](#akash.escrow.v1.FractionalPayment.State)
   
 - [akash/escrow/v1/genesis.proto](#akash/escrow/v1/genesis.proto)
     - [GenesisState](#akash.escrow.v1.GenesisState)
   
 - [akash/escrow/v1/query.proto](#akash/escrow/v1/query.proto)
     - [QueryAccountsRequest](#akash.escrow.v1.QueryAccountsRequest)
     - [QueryAccountsResponse](#akash.escrow.v1.QueryAccountsResponse)
     - [QueryPaymentsRequest](#akash.escrow.v1.QueryPaymentsRequest)
     - [QueryPaymentsResponse](#akash.escrow.v1.QueryPaymentsResponse)
   
     - [Query](#akash.escrow.v1.Query)
   
 - [akash/gov/v1beta3/params.proto](#akash/gov/v1beta3/params.proto)
     - [DepositParams](#akash.gov.v1beta3.DepositParams)
   
 - [akash/gov/v1beta3/genesis.proto](#akash/gov/v1beta3/genesis.proto)
     - [GenesisState](#akash.gov.v1beta3.GenesisState)
   
 - [akash/inflation/v1beta2/params.proto](#akash/inflation/v1beta2/params.proto)
     - [Params](#akash.inflation.v1beta2.Params)
   
 - [akash/inflation/v1beta2/genesis.proto](#akash/inflation/v1beta2/genesis.proto)
     - [GenesisState](#akash.inflation.v1beta2.GenesisState)
   
 - [akash/inflation/v1beta3/params.proto](#akash/inflation/v1beta3/params.proto)
     - [Params](#akash.inflation.v1beta3.Params)
   
 - [akash/inflation/v1beta3/genesis.proto](#akash/inflation/v1beta3/genesis.proto)
     - [GenesisState](#akash.inflation.v1beta3.GenesisState)
   
 - [akash/market/v1/bid.proto](#akash/market/v1/bid.proto)
     - [BidID](#akash.market.v1.BidID)
   
 - [akash/market/v1/order.proto](#akash/market/v1/order.proto)
     - [OrderID](#akash.market.v1.OrderID)
   
 - [akash/market/v1/lease.proto](#akash/market/v1/lease.proto)
     - [Lease](#akash.market.v1.Lease)
     - [LeaseID](#akash.market.v1.LeaseID)
   
     - [Lease.State](#akash.market.v1.Lease.State)
   
 - [akash/market/v1/event.proto](#akash/market/v1/event.proto)
     - [EventBidClosed](#akash.market.v1.EventBidClosed)
     - [EventBidCreated](#akash.market.v1.EventBidCreated)
     - [EventLeaseClosed](#akash.market.v1.EventLeaseClosed)
     - [EventLeaseCreated](#akash.market.v1.EventLeaseCreated)
     - [EventOrderClosed](#akash.market.v1.EventOrderClosed)
     - [EventOrderCreated](#akash.market.v1.EventOrderCreated)
   
 - [akash/market/v1/filters.proto](#akash/market/v1/filters.proto)
     - [LeaseFilters](#akash.market.v1.LeaseFilters)
   
 - [akash/market/v1beta5/resourcesoffer.proto](#akash/market/v1beta5/resourcesoffer.proto)
     - [ResourceOffer](#akash.market.v1beta5.ResourceOffer)
   
 - [akash/market/v1beta5/bid.proto](#akash/market/v1beta5/bid.proto)
     - [Bid](#akash.market.v1beta5.Bid)
   
     - [Bid.State](#akash.market.v1beta5.Bid.State)
   
 - [akash/market/v1beta5/bidmsg.proto](#akash/market/v1beta5/bidmsg.proto)
     - [MsgCloseBid](#akash.market.v1beta5.MsgCloseBid)
     - [MsgCloseBidResponse](#akash.market.v1beta5.MsgCloseBidResponse)
     - [MsgCreateBid](#akash.market.v1beta5.MsgCreateBid)
     - [MsgCreateBidResponse](#akash.market.v1beta5.MsgCreateBidResponse)
   
 - [akash/market/v1beta5/filters.proto](#akash/market/v1beta5/filters.proto)
     - [BidFilters](#akash.market.v1beta5.BidFilters)
     - [OrderFilters](#akash.market.v1beta5.OrderFilters)
   
 - [akash/market/v1beta5/params.proto](#akash/market/v1beta5/params.proto)
     - [Params](#akash.market.v1beta5.Params)
   
 - [akash/market/v1beta5/order.proto](#akash/market/v1beta5/order.proto)
     - [Order](#akash.market.v1beta5.Order)
   
     - [Order.State](#akash.market.v1beta5.Order.State)
   
 - [akash/market/v1beta5/genesis.proto](#akash/market/v1beta5/genesis.proto)
     - [GenesisState](#akash.market.v1beta5.GenesisState)
   
 - [akash/market/v1beta5/leasemsg.proto](#akash/market/v1beta5/leasemsg.proto)
     - [MsgCloseLease](#akash.market.v1beta5.MsgCloseLease)
     - [MsgCloseLeaseResponse](#akash.market.v1beta5.MsgCloseLeaseResponse)
     - [MsgCreateLease](#akash.market.v1beta5.MsgCreateLease)
     - [MsgCreateLeaseResponse](#akash.market.v1beta5.MsgCreateLeaseResponse)
     - [MsgWithdrawLease](#akash.market.v1beta5.MsgWithdrawLease)
     - [MsgWithdrawLeaseResponse](#akash.market.v1beta5.MsgWithdrawLeaseResponse)
   
 - [akash/market/v1beta5/paramsmsg.proto](#akash/market/v1beta5/paramsmsg.proto)
     - [MsgUpdateParams](#akash.market.v1beta5.MsgUpdateParams)
     - [MsgUpdateParamsResponse](#akash.market.v1beta5.MsgUpdateParamsResponse)
   
 - [akash/market/v1beta5/query.proto](#akash/market/v1beta5/query.proto)
     - [QueryBidRequest](#akash.market.v1beta5.QueryBidRequest)
     - [QueryBidResponse](#akash.market.v1beta5.QueryBidResponse)
     - [QueryBidsRequest](#akash.market.v1beta5.QueryBidsRequest)
     - [QueryBidsResponse](#akash.market.v1beta5.QueryBidsResponse)
     - [QueryLeaseRequest](#akash.market.v1beta5.QueryLeaseRequest)
     - [QueryLeaseResponse](#akash.market.v1beta5.QueryLeaseResponse)
     - [QueryLeasesRequest](#akash.market.v1beta5.QueryLeasesRequest)
     - [QueryLeasesResponse](#akash.market.v1beta5.QueryLeasesResponse)
     - [QueryOrderRequest](#akash.market.v1beta5.QueryOrderRequest)
     - [QueryOrderResponse](#akash.market.v1beta5.QueryOrderResponse)
     - [QueryOrdersRequest](#akash.market.v1beta5.QueryOrdersRequest)
     - [QueryOrdersResponse](#akash.market.v1beta5.QueryOrdersResponse)
     - [QueryParamsRequest](#akash.market.v1beta5.QueryParamsRequest)
     - [QueryParamsResponse](#akash.market.v1beta5.QueryParamsResponse)
   
     - [Query](#akash.market.v1beta5.Query)
   
 - [akash/market/v1beta5/service.proto](#akash/market/v1beta5/service.proto)
     - [Msg](#akash.market.v1beta5.Msg)
   
 - [akash/provider/v1beta4/event.proto](#akash/provider/v1beta4/event.proto)
     - [EventProviderCreated](#akash.provider.v1beta4.EventProviderCreated)
     - [EventProviderDeleted](#akash.provider.v1beta4.EventProviderDeleted)
     - [EventProviderUpdated](#akash.provider.v1beta4.EventProviderUpdated)
   
 - [akash/provider/v1beta4/provider.proto](#akash/provider/v1beta4/provider.proto)
     - [Info](#akash.provider.v1beta4.Info)
     - [Provider](#akash.provider.v1beta4.Provider)
   
 - [akash/provider/v1beta4/genesis.proto](#akash/provider/v1beta4/genesis.proto)
     - [GenesisState](#akash.provider.v1beta4.GenesisState)
   
 - [akash/provider/v1beta4/msg.proto](#akash/provider/v1beta4/msg.proto)
     - [MsgCreateProvider](#akash.provider.v1beta4.MsgCreateProvider)
     - [MsgCreateProviderResponse](#akash.provider.v1beta4.MsgCreateProviderResponse)
     - [MsgDeleteProvider](#akash.provider.v1beta4.MsgDeleteProvider)
     - [MsgDeleteProviderResponse](#akash.provider.v1beta4.MsgDeleteProviderResponse)
     - [MsgUpdateProvider](#akash.provider.v1beta4.MsgUpdateProvider)
     - [MsgUpdateProviderResponse](#akash.provider.v1beta4.MsgUpdateProviderResponse)
   
 - [akash/provider/v1beta4/query.proto](#akash/provider/v1beta4/query.proto)
     - [QueryProviderRequest](#akash.provider.v1beta4.QueryProviderRequest)
     - [QueryProviderResponse](#akash.provider.v1beta4.QueryProviderResponse)
     - [QueryProvidersRequest](#akash.provider.v1beta4.QueryProvidersRequest)
     - [QueryProvidersResponse](#akash.provider.v1beta4.QueryProvidersResponse)
   
     - [Query](#akash.provider.v1beta4.Query)
   
 - [akash/provider/v1beta4/service.proto](#akash/provider/v1beta4/service.proto)
     - [Msg](#akash.provider.v1beta4.Msg)
   
 - [akash/staking/v1beta3/params.proto](#akash/staking/v1beta3/params.proto)
     - [Params](#akash.staking.v1beta3.Params)
   
 - [akash/staking/v1beta3/genesis.proto](#akash/staking/v1beta3/genesis.proto)
     - [GenesisState](#akash.staking.v1beta3.GenesisState)
   
 - [akash/staking/v1beta3/paramsmsg.proto](#akash/staking/v1beta3/paramsmsg.proto)
     - [MsgUpdateParams](#akash.staking.v1beta3.MsgUpdateParams)
     - [MsgUpdateParamsResponse](#akash.staking.v1beta3.MsgUpdateParamsResponse)
   
 - [akash/staking/v1beta3/query.proto](#akash/staking/v1beta3/query.proto)
     - [QueryParamsRequest](#akash.staking.v1beta3.QueryParamsRequest)
     - [QueryParamsResponse](#akash.staking.v1beta3.QueryParamsResponse)
   
     - [Query](#akash.staking.v1beta3.Query)
   
 - [akash/staking/v1beta3/service.proto](#akash/staking/v1beta3/service.proto)
     - [Msg](#akash.staking.v1beta3.Msg)
   
 - [akash/take/v1/params.proto](#akash/take/v1/params.proto)
     - [DenomTakeRate](#akash.take.v1.DenomTakeRate)
     - [Params](#akash.take.v1.Params)
   
 - [akash/take/v1/genesis.proto](#akash/take/v1/genesis.proto)
     - [GenesisState](#akash.take.v1.GenesisState)
   
 - [akash/take/v1/paramsmsg.proto](#akash/take/v1/paramsmsg.proto)
     - [MsgUpdateParams](#akash.take.v1.MsgUpdateParams)
     - [MsgUpdateParamsResponse](#akash.take.v1.MsgUpdateParamsResponse)
   
 - [akash/take/v1/query.proto](#akash/take/v1/query.proto)
     - [QueryParamsRequest](#akash.take.v1.QueryParamsRequest)
     - [QueryParamsResponse](#akash.take.v1.QueryParamsResponse)
   
     - [Query](#akash.take.v1.Query)
   
 - [akash/take/v1/service.proto](#akash/take/v1/service.proto)
     - [Msg](#akash.take.v1.Msg)
   
 - [Scalar Value Types](#scalar-value-types)

 
 
 <a name="akash/base/attributes/v1/attribute.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/attributes/v1/attribute.proto
 

 
 <a name="akash.base.attributes.v1.Attribute"></a>

 ### Attribute
 Attribute represents key value pair

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `key` | [string](#string) |  |  |
 | `value` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.base.attributes.v1.PlacementRequirements"></a>

 ### PlacementRequirements
 PlacementRequirements

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `signed_by` | [SignedBy](#akash.base.attributes.v1.SignedBy) |  | SignedBy list of keys that tenants expect to have signatures from |
 | `attributes` | [Attribute](#akash.base.attributes.v1.Attribute) | repeated | Attribute list of attributes tenant expects from the provider |
 
 

 

 
 <a name="akash.base.attributes.v1.SignedBy"></a>

 ### SignedBy
 SignedBy represents validation accounts that tenant expects signatures for provider attributes
AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
entries there
this behaviour to be discussed

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `all_of` | [string](#string) | repeated | all_of all keys in this list must have signed attributes |
 | `any_of` | [string](#string) | repeated | any_of at least of of the keys from the list must have signed attributes |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1/audit.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1/audit.proto
 

 
 <a name="akash.audit.v1.AttributesFilters"></a>

 ### AttributesFilters
 AttributesFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditors` | [string](#string) | repeated |  |
 | `owners` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1.AuditedAttributesStore"></a>

 ### AuditedAttributesStore
 Attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1.AuditedProvider"></a>

 ### AuditedProvider
 Provider stores owner auditor and attributes details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1/event.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1/event.proto
 

 
 <a name="akash.audit.v1.EventTrustedAuditorCreated"></a>

 ### EventTrustedAuditorCreated
 EventTrustedAuditorCreated defines an SDK message for signing a provider attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1.EventTrustedAuditorDeleted"></a>

 ### EventTrustedAuditorDeleted
 EventTrustedAuditorCreated defines an SDK message for signing a provider attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1/genesis.proto
 

 
 <a name="akash.audit.v1.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by audit module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [AuditedProvider](#akash.audit.v1.AuditedProvider) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1/msg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1/msg.proto
 

 
 <a name="akash.audit.v1.MsgDeleteProviderAttributes"></a>

 ### MsgDeleteProviderAttributes
 MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `keys` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1.MsgDeleteProviderAttributesResponse"></a>

 ### MsgDeleteProviderAttributesResponse
 MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.

 

 

 
 <a name="akash.audit.v1.MsgSignProviderAttributes"></a>

 ### MsgSignProviderAttributes
 MsgSignProviderAttributes defines an SDK message for signing a provider attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1.MsgSignProviderAttributesResponse"></a>

 ### MsgSignProviderAttributesResponse
 MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1/query.proto
 

 
 <a name="akash.audit.v1.QueryAllProvidersAttributesRequest"></a>

 ### QueryAllProvidersAttributesRequest
 QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1.QueryAuditorAttributesRequest"></a>

 ### QueryAuditorAttributesRequest
 QueryAuditorAttributesRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1.QueryProviderAttributesRequest"></a>

 ### QueryProviderAttributesRequest
 QueryProviderAttributesRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1.QueryProviderAuditorRequest"></a>

 ### QueryProviderAuditorRequest
 QueryProviderAuditorRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1.QueryProviderRequest"></a>

 ### QueryProviderRequest
 QueryProviderRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1.QueryProvidersResponse"></a>

 ### QueryProvidersResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [AuditedProvider](#akash.audit.v1.AuditedProvider) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `AllProvidersAttributes` | [QueryAllProvidersAttributesRequest](#akash.audit.v1.QueryAllProvidersAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1.QueryProvidersResponse) | AllProvidersAttributes queries all providers buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1/audit/attributes/list|
 | `ProviderAttributes` | [QueryProviderAttributesRequest](#akash.audit.v1.QueryProviderAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1.QueryProvidersResponse) | ProviderAttributes queries all provider signed attributes buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1/audit/attributes/{owner}/list|
 | `ProviderAuditorAttributes` | [QueryProviderAuditorRequest](#akash.audit.v1.QueryProviderAuditorRequest) | [QueryProvidersResponse](#akash.audit.v1.QueryProvidersResponse) | ProviderAuditorAttributes queries provider signed attributes by specific auditor buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1/audit/attributes/{auditor}/{owner}|
 | `AuditorAttributes` | [QueryAuditorAttributesRequest](#akash.audit.v1.QueryAuditorAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1.QueryProvidersResponse) | AuditorAttributes queries all providers signed by this auditor buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/provider/v1/auditor/{auditor}/list|
 
  <!-- end services -->

 
 
 <a name="akash/audit/v1/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `SignProviderAttributes` | [MsgSignProviderAttributes](#akash.audit.v1.MsgSignProviderAttributes) | [MsgSignProviderAttributesResponse](#akash.audit.v1.MsgSignProviderAttributesResponse) | SignProviderAttributes defines a method that signs provider attributes | |
 | `DeleteProviderAttributes` | [MsgDeleteProviderAttributes](#akash.audit.v1.MsgDeleteProviderAttributes) | [MsgDeleteProviderAttributesResponse](#akash.audit.v1.MsgDeleteProviderAttributesResponse) | DeleteProviderAttributes defines a method that deletes provider attributes | |
 
  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/resourcevalue.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/resourcevalue.proto
 

 
 <a name="akash.base.resources.v1beta4.ResourceValue"></a>

 ### ResourceValue
 Unit stores cpu, memory and storage metrics

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `val` | [bytes](#bytes) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/cpu.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/cpu.proto
 

 
 <a name="akash.base.resources.v1beta4.CPU"></a>

 ### CPU
 CPU stores resource units and cpu config attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `units` | [ResourceValue](#akash.base.resources.v1beta4.ResourceValue) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/endpoint.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/endpoint.proto
 

 
 <a name="akash.base.resources.v1beta4.Endpoint"></a>

 ### Endpoint
 Endpoint describes a publicly accessible IP service

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `kind` | [Endpoint.Kind](#akash.base.resources.v1beta4.Endpoint.Kind) |  |  |
 | `sequence_number` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.base.resources.v1beta4.Endpoint.Kind"></a>

 ### Endpoint.Kind
 This describes how the endpoint is implemented when the lease is deployed

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | SHARED_HTTP | 0 | Describes an endpoint that becomes a Kubernetes Ingress |
 | RANDOM_PORT | 1 | Describes an endpoint that becomes a Kubernetes NodePort |
 | LEASED_IP | 2 | Describes an endpoint that becomes a leased IP |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/gpu.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/gpu.proto
 

 
 <a name="akash.base.resources.v1beta4.GPU"></a>

 ### GPU
 GPU stores resource units and cpu config attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `units` | [ResourceValue](#akash.base.resources.v1beta4.ResourceValue) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/memory.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/memory.proto
 

 
 <a name="akash.base.resources.v1beta4.Memory"></a>

 ### Memory
 Memory stores resource quantity and memory attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourceValue](#akash.base.resources.v1beta4.ResourceValue) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/storage.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/storage.proto
 

 
 <a name="akash.base.resources.v1beta4.Storage"></a>

 ### Storage
 Storage stores resource quantity and storage attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `quantity` | [ResourceValue](#akash.base.resources.v1beta4.ResourceValue) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/resources/v1beta4/resources.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/resources/v1beta4/resources.proto
 

 
 <a name="akash.base.resources.v1beta4.Resources"></a>

 ### Resources
 Resources describes all available resources types for deployment/node etc
if field is nil resource is not present in the given data-structure

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [uint32](#uint32) |  |  |
 | `cpu` | [CPU](#akash.base.resources.v1beta4.CPU) |  |  |
 | `memory` | [Memory](#akash.base.resources.v1beta4.Memory) |  |  |
 | `storage` | [Storage](#akash.base.resources.v1beta4.Storage) | repeated |  |
 | `gpu` | [GPU](#akash.base.resources.v1beta4.GPU) |  |  |
 | `endpoints` | [Endpoint](#akash.base.resources.v1beta4.Endpoint) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1/cert.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1/cert.proto
 

 
 <a name="akash.cert.v1.Certificate"></a>

 ### Certificate
 Certificate stores state, certificate and it's public key

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `state` | [State](#akash.cert.v1.State) |  |  |
 | `cert` | [bytes](#bytes) |  |  |
 | `pubkey` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.cert.v1.ID"></a>

 ### ID
 ID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `serial` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.cert.v1.State"></a>

 ### State
 State is an enum which refers to state of deployment

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | valid | 1 | CertificateValid denotes state for deployment active |
 | revoked | 2 | CertificateRevoked denotes state for deployment closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1/filters.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1/filters.proto
 

 
 <a name="akash.cert.v1.CertificateFilter"></a>

 ### CertificateFilter
 CertificateFilter defines filters used to filter certificates

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `serial` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1/genesis.proto
 

 
 <a name="akash.cert.v1.GenesisCertificate"></a>

 ### GenesisCertificate
 GenesisCertificate defines certificate entry at genesis

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `certificate` | [Certificate](#akash.cert.v1.Certificate) |  |  |
 
 

 

 
 <a name="akash.cert.v1.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by cert module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificates` | [GenesisCertificate](#akash.cert.v1.GenesisCertificate) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1/msg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1/msg.proto
 

 
 <a name="akash.cert.v1.MsgCreateCertificate"></a>

 ### MsgCreateCertificate
 MsgCreateCertificate defines an SDK message for creating certificate

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `cert` | [bytes](#bytes) |  |  |
 | `pubkey` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.cert.v1.MsgCreateCertificateResponse"></a>

 ### MsgCreateCertificateResponse
 MsgCreateCertificateResponse defines the Msg/CreateCertificate response type.

 

 

 
 <a name="akash.cert.v1.MsgRevokeCertificate"></a>

 ### MsgRevokeCertificate
 MsgRevokeCertificate defines an SDK message for revoking certificate

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [ID](#akash.cert.v1.ID) |  |  |
 
 

 

 
 <a name="akash.cert.v1.MsgRevokeCertificateResponse"></a>

 ### MsgRevokeCertificateResponse
 MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1/query.proto
 

 
 <a name="akash.cert.v1.CertificateResponse"></a>

 ### CertificateResponse
 CertificateResponse contains a single X509 certificate and its serial number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificate` | [Certificate](#akash.cert.v1.Certificate) |  |  |
 | `serial` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1.QueryCertificatesRequest"></a>

 ### QueryCertificatesRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filter` | [CertificateFilter](#akash.cert.v1.CertificateFilter) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.cert.v1.QueryCertificatesResponse"></a>

 ### QueryCertificatesResponse
 QueryCertificatesResponse is response type for the Query/Certificates RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificates` | [CertificateResponse](#akash.cert.v1.CertificateResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.cert.v1.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Certificates` | [QueryCertificatesRequest](#akash.cert.v1.QueryCertificatesRequest) | [QueryCertificatesResponse](#akash.cert.v1.QueryCertificatesResponse) | Certificates queries certificates | GET|/akash/cert/v1/certificates/list|
 
  <!-- end services -->

 
 
 <a name="akash/cert/v1/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.cert.v1.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateCertificate` | [MsgCreateCertificate](#akash.cert.v1.MsgCreateCertificate) | [MsgCreateCertificateResponse](#akash.cert.v1.MsgCreateCertificateResponse) | CreateCertificate defines a method to create new certificate given proper inputs. | |
 | `RevokeCertificate` | [MsgRevokeCertificate](#akash.cert.v1.MsgRevokeCertificate) | [MsgRevokeCertificateResponse](#akash.cert.v1.MsgRevokeCertificateResponse) | RevokeCertificate defines a method to revoke the certificate | |
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1/authz.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1/authz.proto
 

 
 <a name="akash.deployment.v1.DepositAuthorization"></a>

 ### DepositAuthorization
 DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
the granter's account for a deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `spend_limit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  | SpendLimit is the amount the grantee is authorized to spend from the granter's account for the purpose of deployment. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1/deployment.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1/deployment.proto
 

 
 <a name="akash.deployment.v1.Deployment"></a>

 ### Deployment
 Deployment stores deploymentID, state and checksum details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 | `state` | [Deployment.State](#akash.deployment.v1.Deployment.State) |  |  |
 | `hash` | [bytes](#bytes) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.deployment.v1.DeploymentID"></a>

 ### DeploymentID
 DeploymentID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1.Deployment.State"></a>

 ### Deployment.State
 State is an enum which refers to state of deployment

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | active | 1 | DeploymentActive denotes state for deployment active |
 | closed | 2 | DeploymentClosed denotes state for deployment closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1/group.proto
 

 
 <a name="akash.deployment.v1.GroupID"></a>

 ### GroupID
 GroupID stores owner, deployment sequence number and group sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1/event.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1/event.proto
 

 
 <a name="akash.deployment.v1.EventDeploymentClosed"></a>

 ### EventDeploymentClosed
 EventDeploymentClosed is triggered when deployment is closed on chain

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1.EventDeploymentCreated"></a>

 ### EventDeploymentCreated
 EventDeploymentCreated event is triggered when deployment is created on chain

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 | `hash` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.deployment.v1.EventDeploymentUpdated"></a>

 ### EventDeploymentUpdated
 EventDeploymentUpdated is triggered when deployment is updated on chain

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 | `hash` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.deployment.v1.EventGroupClosed"></a>

 ### EventGroupClosed
 EventGroupClosed is triggered when deployment group is closed

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1.EventGroupPaused"></a>

 ### EventGroupPaused
 EventGroupPaused is triggered when deployment group is paused

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1.EventGroupStarted"></a>

 ### EventGroupStarted
 EventGroupStarted is triggered when deployment group is started

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1/msg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1/msg.proto
 

 
 <a name="akash.deployment.v1.MsgDepositDeployment"></a>

 ### MsgDepositDeployment
 MsgDepositDeployment deposits more funds into the deposit account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 | `amount` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `depositor` | [string](#string) |  | Depositor pays for the deposit |
 
 

 

 
 <a name="akash.deployment.v1.MsgDepositDeploymentResponse"></a>

 ### MsgDepositDeploymentResponse
 MsgDepositDeploymentResponse defines response type for the MsgDepositDeployment.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/resourceunit.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/resourceunit.proto
 

 
 <a name="akash.deployment.v1beta4.ResourceUnit"></a>

 ### ResourceUnit
 ResourceUnit extends Resources and adds Count along with the Price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `resource` | [akash.base.resources.v1beta4.Resources](#akash.base.resources.v1beta4.Resources) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/groupspec.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/groupspec.proto
 

 
 <a name="akash.deployment.v1beta4.GroupSpec"></a>

 ### GroupSpec
 Spec stores group specifications

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `requirements` | [akash.base.attributes.v1.PlacementRequirements](#akash.base.attributes.v1.PlacementRequirements) |  |  |
 | `resources` | [ResourceUnit](#akash.deployment.v1beta4.ResourceUnit) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/deploymentmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/deploymentmsg.proto
 

 
 <a name="akash.deployment.v1beta4.MsgCloseDeployment"></a>

 ### MsgCloseDeployment
 MsgCloseDeployment defines an SDK message for closing deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgCloseDeploymentResponse"></a>

 ### MsgCloseDeploymentResponse
 MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta4.MsgCreateDeployment"></a>

 ### MsgCreateDeployment
 MsgCreateDeployment defines an SDK message for creating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 | `groups` | [GroupSpec](#akash.deployment.v1beta4.GroupSpec) | repeated |  |
 | `hash` | [bytes](#bytes) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `depositor` | [string](#string) |  | Depositor pays for the deposit |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgCreateDeploymentResponse"></a>

 ### MsgCreateDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta4.MsgUpdateDeployment"></a>

 ### MsgUpdateDeployment
 MsgUpdateDeployment defines an SDK message for updating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 | `hash` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgUpdateDeploymentResponse"></a>

 ### MsgUpdateDeploymentResponse
 MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/filters.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/filters.proto
 

 
 <a name="akash.deployment.v1beta4.DeploymentFilters"></a>

 ### DeploymentFilters
 DeploymentFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.GroupFilters"></a>

 ### GroupFilters
 GroupFilters defines filters used to filter groups

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint64](#uint64) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/group.proto
 

 
 <a name="akash.deployment.v1beta4.Group"></a>

 ### Group
 Group stores group id, state and specifications of group

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.GroupID](#akash.deployment.v1.GroupID) |  |  |
 | `state` | [Group.State](#akash.deployment.v1beta4.Group.State) |  |  |
 | `group_spec` | [GroupSpec](#akash.deployment.v1beta4.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta4.Group.State"></a>

 ### Group.State
 State is an enum which refers to state of group

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | open | 1 | GroupOpen denotes state for group open |
 | paused | 2 | GroupOrdered denotes state for group ordered |
 | insufficient_funds | 3 | GroupInsufficientFunds denotes state for group insufficient_funds |
 | closed | 4 | GroupClosed denotes state for group closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/params.proto
 

 
 <a name="akash.deployment.v1beta4.Params"></a>

 ### Params
 Params defines the parameters for the x/deployment module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `min_deposits` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/genesis.proto
 

 
 <a name="akash.deployment.v1beta4.GenesisDeployment"></a>

 ### GenesisDeployment
 GenesisDeployment defines the basic genesis state used by deployment module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [akash.deployment.v1.Deployment](#akash.deployment.v1.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta4.Group) | repeated |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [GenesisDeployment](#akash.deployment.v1beta4.GenesisDeployment) | repeated |  |
 | `params` | [Params](#akash.deployment.v1beta4.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/groupmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/groupmsg.proto
 

 
 <a name="akash.deployment.v1beta4.MsgCloseGroup"></a>

 ### MsgCloseGroup
 MsgCloseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgCloseGroupResponse"></a>

 ### MsgCloseGroupResponse
 MsgCloseGroupResponse defines the Msg/CloseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta4.MsgPauseGroup"></a>

 ### MsgPauseGroup
 MsgPauseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgPauseGroupResponse"></a>

 ### MsgPauseGroupResponse
 MsgPauseGroupResponse defines the Msg/PauseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta4.MsgStartGroup"></a>

 ### MsgStartGroup
 MsgStartGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgStartGroupResponse"></a>

 ### MsgStartGroupResponse
 MsgStartGroupResponse defines the Msg/StartGroup response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/paramsmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/paramsmsg.proto
 

 
 <a name="akash.deployment.v1beta4.MsgUpdateParams"></a>

 ### MsgUpdateParams
 MsgUpdateParams is the Msg/UpdateParams request type.

Since: akash v1.0.0

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `authority` | [string](#string) |  | authority is the address of the governance account. |
 | `params` | [Params](#akash.deployment.v1beta4.Params) |  | params defines the x/deployment parameters to update.

NOTE: All parameters must be supplied. |
 
 

 

 
 <a name="akash.deployment.v1beta4.MsgUpdateParamsResponse"></a>

 ### MsgUpdateParamsResponse
 MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: akash v1.0.0

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1/accountid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1/accountid.proto
 

 
 <a name="akash.escrow.v1.AccountID"></a>

 ### AccountID
 AccountID is the account identifier

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1/account.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1/account.proto
 

 
 <a name="akash.escrow.v1.Account"></a>

 ### Account
 Account stores state for an escrow account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [AccountID](#akash.escrow.v1.AccountID) |  | unique identifier for this escrow account |
 | `owner` | [string](#string) |  | bech32 encoded account address of the owner of this escrow account |
 | `state` | [Account.State](#akash.escrow.v1.Account.State) |  | current state of this escrow account |
 | `balance` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | unspent coins received from the owner's wallet |
 | `transferred` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | total coins spent by this account |
 | `settled_at` | [int64](#int64) |  | block height at which this account was last settled |
 | `depositor` | [string](#string) |  | bech32 encoded account address of the depositor. If depositor is same as the owner, then any incoming coins are added to the Balance. If depositor isn't same as the owner, then any incoming coins are added to the Funds. |
 | `funds` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | Funds are unspent coins received from the (non-Owner) Depositor's wallet. If there are any funds, they should be spent before spending the Balance. |
 
 

 

  <!-- end messages -->

 
 <a name="akash.escrow.v1.Account.State"></a>

 ### Account.State
 State stores state for an escrow account

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | AccountStateInvalid is an invalid state |
 | open | 1 | AccountOpen is the state when an account is open |
 | closed | 2 | AccountClosed is the state when an account is closed |
 | overdrawn | 3 | AccountOverdrawn is the state when an account is overdrawn |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/query.proto
 

 
 <a name="akash.deployment.v1beta4.QueryDeploymentRequest"></a>

 ### QueryDeploymentRequest
 QueryDeploymentRequest is request type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.DeploymentID](#akash.deployment.v1.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.QueryDeploymentResponse"></a>

 ### QueryDeploymentResponse
 QueryDeploymentResponse is response type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [akash.deployment.v1.Deployment](#akash.deployment.v1.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta4.Group) | repeated |  |
 | `escrow_account` | [akash.escrow.v1.Account](#akash.escrow.v1.Account) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.QueryDeploymentsRequest"></a>

 ### QueryDeploymentsRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [DeploymentFilters](#akash.deployment.v1beta4.DeploymentFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.QueryDeploymentsResponse"></a>

 ### QueryDeploymentsResponse
 QueryDeploymentsResponse is response type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [QueryDeploymentResponse](#akash.deployment.v1beta4.QueryDeploymentResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.QueryGroupRequest"></a>

 ### QueryGroupRequest
 QueryGroupRequest is request type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.deployment.v1.GroupID](#akash.deployment.v1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.QueryGroupResponse"></a>

 ### QueryGroupResponse
 QueryGroupResponse is response type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group` | [Group](#akash.deployment.v1beta4.Group) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta4.QueryParamsRequest"></a>

 ### QueryParamsRequest
 QueryParamsRequest is the request type for the Query/Params RPC method.

 

 

 
 <a name="akash.deployment.v1beta4.QueryParamsResponse"></a>

 ### QueryParamsResponse
 QueryParamsResponse is the response type for the Query/Params RPC method.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.deployment.v1beta4.Params) |  | params defines the parameters of the module. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta4.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Deployments` | [QueryDeploymentsRequest](#akash.deployment.v1beta4.QueryDeploymentsRequest) | [QueryDeploymentsResponse](#akash.deployment.v1beta4.QueryDeploymentsResponse) | Deployments queries deployments | GET|/akash/deployment/v1beta4/deployments/list|
 | `Deployment` | [QueryDeploymentRequest](#akash.deployment.v1beta4.QueryDeploymentRequest) | [QueryDeploymentResponse](#akash.deployment.v1beta4.QueryDeploymentResponse) | Deployment queries deployment details | GET|/akash/deployment/v1beta4/deployments/info|
 | `Group` | [QueryGroupRequest](#akash.deployment.v1beta4.QueryGroupRequest) | [QueryGroupResponse](#akash.deployment.v1beta4.QueryGroupResponse) | Group queries group details | GET|/akash/deployment/v1beta4/groups/info|
 | `Params` | [QueryParamsRequest](#akash.deployment.v1beta4.QueryParamsRequest) | [QueryParamsResponse](#akash.deployment.v1beta4.QueryParamsResponse) | Params returns the total set of minting parameters. | GET|/akash/deployment/v1beta4/params|
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta4/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta4/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta4.Msg"></a>

 ### Msg
 Msg defines the x/deployment Msg service.

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateDeployment` | [MsgCreateDeployment](#akash.deployment.v1beta4.MsgCreateDeployment) | [MsgCreateDeploymentResponse](#akash.deployment.v1beta4.MsgCreateDeploymentResponse) | CreateDeployment defines a method to create new deployment given proper inputs. | |
 | `DepositDeployment` | [.akash.deployment.v1.MsgDepositDeployment](#akash.deployment.v1.MsgDepositDeployment) | [.akash.deployment.v1.MsgDepositDeploymentResponse](#akash.deployment.v1.MsgDepositDeploymentResponse) | DepositDeployment deposits more funds into the deployment account | |
 | `UpdateDeployment` | [MsgUpdateDeployment](#akash.deployment.v1beta4.MsgUpdateDeployment) | [MsgUpdateDeploymentResponse](#akash.deployment.v1beta4.MsgUpdateDeploymentResponse) | UpdateDeployment defines a method to update a deployment given proper inputs. | |
 | `CloseDeployment` | [MsgCloseDeployment](#akash.deployment.v1beta4.MsgCloseDeployment) | [MsgCloseDeploymentResponse](#akash.deployment.v1beta4.MsgCloseDeploymentResponse) | CloseDeployment defines a method to close a deployment given proper inputs. | |
 | `CloseGroup` | [MsgCloseGroup](#akash.deployment.v1beta4.MsgCloseGroup) | [MsgCloseGroupResponse](#akash.deployment.v1beta4.MsgCloseGroupResponse) | CloseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `PauseGroup` | [MsgPauseGroup](#akash.deployment.v1beta4.MsgPauseGroup) | [MsgPauseGroupResponse](#akash.deployment.v1beta4.MsgPauseGroupResponse) | PauseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `StartGroup` | [MsgStartGroup](#akash.deployment.v1beta4.MsgStartGroup) | [MsgStartGroupResponse](#akash.deployment.v1beta4.MsgStartGroupResponse) | StartGroup defines a method to close a group of a deployment given proper inputs. | |
 | `UpdateParams` | [MsgUpdateParams](#akash.deployment.v1beta4.MsgUpdateParams) | [MsgUpdateParamsResponse](#akash.deployment.v1beta4.MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/deployment module parameters. The authority is hard-coded to the x/gov module account.

Since: akash v1.0.0 | |
 
  <!-- end services -->

 
 
 <a name="akash/discovery/v1/client_info.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/discovery/v1/client_info.proto
 

 
 <a name="akash.discovery.v1.ClientInfo"></a>

 ### ClientInfo
 ClientInfo akash specific client info

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `api_version` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/discovery/v1/akash.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/discovery/v1/akash.proto
 

 
 <a name="akash.discovery.v1.Akash"></a>

 ### Akash
 Akash akash specific RPC parameters

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `client_info` | [ClientInfo](#akash.discovery.v1.ClientInfo) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1/fractional_payment.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1/fractional_payment.proto
 

 
 <a name="akash.escrow.v1.FractionalPayment"></a>

 ### FractionalPayment
 Payment stores state for a payment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `account_id` | [AccountID](#akash.escrow.v1.AccountID) |  |  |
 | `payment_id` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [FractionalPayment.State](#akash.escrow.v1.FractionalPayment.State) |  |  |
 | `rate` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `balance` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `withdrawn` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.escrow.v1.FractionalPayment.State"></a>

 ### FractionalPayment.State
 State defines payment state

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | PaymentStateInvalid is the state when the payment is invalid |
 | open | 1 | PaymentStateOpen is the state when the payment is open |
 | closed | 2 | PaymentStateClosed is the state when the payment is closed |
 | overdrawn | 3 | PaymentStateOverdrawn is the state when the payment is overdrawn |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1/genesis.proto
 

 
 <a name="akash.escrow.v1.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by the escrow module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1.Account) | repeated |  |
 | `payments` | [FractionalPayment](#akash.escrow.v1.FractionalPayment) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1/query.proto
 

 
 <a name="akash.escrow.v1.QueryAccountsRequest"></a>

 ### QueryAccountsRequest
 QueryAccountRequest is request type for the Query/Account RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.escrow.v1.QueryAccountsResponse"></a>

 ### QueryAccountsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1.Account) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.escrow.v1.QueryPaymentsRequest"></a>

 ### QueryPaymentsRequest
 QueryPaymentRequest is request type for the Query/Payment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 | `id` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.escrow.v1.QueryPaymentsResponse"></a>

 ### QueryPaymentsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `payments` | [FractionalPayment](#akash.escrow.v1.FractionalPayment) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.escrow.v1.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Accounts` | [QueryAccountsRequest](#akash.escrow.v1.QueryAccountsRequest) | [QueryAccountsResponse](#akash.escrow.v1.QueryAccountsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Accounts queries all accounts | GET|/akash/escrow/v1/types/accounts/list|
 | `Payments` | [QueryPaymentsRequest](#akash.escrow.v1.QueryPaymentsRequest) | [QueryPaymentsResponse](#akash.escrow.v1.QueryPaymentsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Payments queries all payments | GET|/akash/escrow/v1/types/payments/list|
 
  <!-- end services -->

 
 
 <a name="akash/gov/v1beta3/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/gov/v1beta3/params.proto
 

 
 <a name="akash.gov.v1beta3.DepositParams"></a>

 ### DepositParams
 DepositParams defines the parameters for the x/gov module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `min_initial_deposit_rate` | [bytes](#bytes) |  | min_initial_deposit_rate minimum % of TotalDeposit author of the proposal must put in order for proposal tx to be committed |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/gov/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/gov/v1beta3/genesis.proto
 

 
 <a name="akash.gov.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deposit_params` | [DepositParams](#akash.gov.v1beta3.DepositParams) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inflation/v1beta2/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inflation/v1beta2/params.proto
 

 
 <a name="akash.inflation.v1beta2.Params"></a>

 ### Params
 Params defines the parameters for the x/deployment package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `inflation_decay_factor` | [string](#string) |  | InflationDecayFactor is the number of years it takes inflation to halve. |
 | `initial_inflation` | [string](#string) |  | InitialInflation is the rate at which inflation starts at genesis. It is a decimal value in the range [0.0, 100.0]. |
 | `variance` | [string](#string) |  | Variance defines the fraction by which inflation can vary from ideal inflation in a block. It is a decimal value in the range [0.0, 1.0]. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inflation/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inflation/v1beta2/genesis.proto
 

 
 <a name="akash.inflation.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.inflation.v1beta2.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inflation/v1beta3/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inflation/v1beta3/params.proto
 

 
 <a name="akash.inflation.v1beta3.Params"></a>

 ### Params
 Params defines the parameters for the x/deployment package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `inflation_decay_factor` | [string](#string) |  | InflationDecayFactor is the number of years it takes inflation to halve. |
 | `initial_inflation` | [string](#string) |  | InitialInflation is the rate at which inflation starts at genesis. It is a decimal value in the range [0.0, 100.0]. |
 | `variance` | [string](#string) |  | Variance defines the fraction by which inflation can vary from ideal inflation in a block. It is a decimal value in the range [0.0, 1.0]. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/inflation/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/inflation/v1beta3/genesis.proto
 

 
 <a name="akash.inflation.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.inflation.v1beta3.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1/bid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1/bid.proto
 

 
 <a name="akash.market.v1.BidID"></a>

 ### BidID
 BidID stores owner and all other seq numbers
A successful bid becomes a Lease(ID).

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1/order.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1/order.proto
 

 
 <a name="akash.market.v1.OrderID"></a>

 ### OrderID
 OrderID stores owner and all other seq numbers

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1/lease.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1/lease.proto
 

 
 <a name="akash.market.v1.Lease"></a>

 ### Lease
 Lease stores LeaseID, state of lease and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [LeaseID](#akash.market.v1.LeaseID) |  |  |
 | `state` | [Lease.State](#akash.market.v1.Lease.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 | `closed_on` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1.LeaseID"></a>

 ### LeaseID
 LeaseID stores bid details of lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1.Lease.State"></a>

 ### Lease.State
 State is an enum which refers to state of lease

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | active | 1 | LeaseActive denotes state for lease active |
 | insufficient_funds | 2 | LeaseInsufficientFunds denotes state for lease insufficient_funds |
 | closed | 3 | LeaseClosed denotes state for lease closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1/event.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1/event.proto
 

 
 <a name="akash.market.v1.EventBidClosed"></a>

 ### EventBidClosed
 EventBidClosed

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [BidID](#akash.market.v1.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1.EventBidCreated"></a>

 ### EventBidCreated
 EventBidCreated

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [BidID](#akash.market.v1.BidID) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 
 

 

 
 <a name="akash.market.v1.EventLeaseClosed"></a>

 ### EventLeaseClosed
 EventLeaseClosed

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [LeaseID](#akash.market.v1.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1.EventLeaseCreated"></a>

 ### EventLeaseCreated
 EventLeaseCreated

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [LeaseID](#akash.market.v1.LeaseID) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 
 

 

 
 <a name="akash.market.v1.EventOrderClosed"></a>

 ### EventOrderClosed
 EventOrderClosed

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [OrderID](#akash.market.v1.OrderID) |  |  |
 
 

 

 
 <a name="akash.market.v1.EventOrderCreated"></a>

 ### EventOrderCreated
 EventOrderCreated

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [OrderID](#akash.market.v1.OrderID) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1/filters.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1/filters.proto
 

 
 <a name="akash.market.v1.LeaseFilters"></a>

 ### LeaseFilters
 LeaseFilters defines flags for lease list filter

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/resourcesoffer.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/resourcesoffer.proto
 

 
 <a name="akash.market.v1beta5.ResourceOffer"></a>

 ### ResourceOffer
 ResourceOffer describes resources that provider is offering
for deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `resources` | [akash.base.resources.v1beta4.Resources](#akash.base.resources.v1beta4.Resources) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/bid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/bid.proto
 

 
 <a name="akash.market.v1beta5.Bid"></a>

 ### Bid
 Bid stores BidID, state of bid and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.market.v1.BidID](#akash.market.v1.BidID) |  |  |
 | `state` | [Bid.State](#akash.market.v1beta5.Bid.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 | `resources_offer` | [ResourceOffer](#akash.market.v1beta5.ResourceOffer) | repeated |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta5.Bid.State"></a>

 ### Bid.State
 BidState is an enum which refers to state of bid

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | open | 1 | BidOpen denotes state for bid open |
 | active | 2 | BidMatched denotes state for bid open |
 | lost | 3 | BidLost denotes state for bid lost |
 | closed | 4 | BidClosed denotes state for bid closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/bidmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/bidmsg.proto
 

 
 <a name="akash.market.v1beta5.MsgCloseBid"></a>

 ### MsgCloseBid
 MsgCloseBid defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.market.v1.BidID](#akash.market.v1.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.MsgCloseBidResponse"></a>

 ### MsgCloseBidResponse
 MsgCloseBidResponse defines the Msg/CloseBid response type.

 

 

 
 <a name="akash.market.v1beta5.MsgCreateBid"></a>

 ### MsgCreateBid
 MsgCreateBid defines an SDK message for creating Bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order_id` | [akash.market.v1.OrderID](#akash.market.v1.OrderID) |  |  |
 | `provider` | [string](#string) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `resources_offer` | [ResourceOffer](#akash.market.v1beta5.ResourceOffer) | repeated |  |
 
 

 

 
 <a name="akash.market.v1beta5.MsgCreateBidResponse"></a>

 ### MsgCreateBidResponse
 MsgCreateBidResponse defines the Msg/CreateBid response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/filters.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/filters.proto
 

 
 <a name="akash.market.v1beta5.BidFilters"></a>

 ### BidFilters
 BidFilters defines flags for bid list filter

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.OrderFilters"></a>

 ### OrderFilters
 OrderFilters defines flags for order list filter

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/params.proto
 

 
 <a name="akash.market.v1beta5.Params"></a>

 ### Params
 Params is the params for the x/market module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_min_deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `order_max_bids` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/order.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/order.proto
 

 
 <a name="akash.market.v1beta5.Order"></a>

 ### Order
 Order stores orderID, state of order and other details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.market.v1.OrderID](#akash.market.v1.OrderID) |  |  |
 | `state` | [Order.State](#akash.market.v1beta5.Order.State) |  |  |
 | `spec` | [akash.deployment.v1beta4.GroupSpec](#akash.deployment.v1beta4.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta5.Order.State"></a>

 ### Order.State
 State is an enum which refers to state of order

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | open | 1 | OrderOpen denotes state for order open |
 | active | 2 | OrderMatched denotes state for order matched |
 | closed | 3 | OrderClosed denotes state for order lost |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/genesis.proto
 

 
 <a name="akash.market.v1beta5.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by market module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.market.v1beta5.Params) |  |  |
 | `orders` | [Order](#akash.market.v1beta5.Order) | repeated |  |
 | `leases` | [akash.market.v1.Lease](#akash.market.v1.Lease) | repeated |  |
 | `bids` | [Bid](#akash.market.v1beta5.Bid) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/leasemsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/leasemsg.proto
 

 
 <a name="akash.market.v1beta5.MsgCloseLease"></a>

 ### MsgCloseLease
 MsgCloseLease defines an SDK message for closing order

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [akash.market.v1.LeaseID](#akash.market.v1.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.MsgCloseLeaseResponse"></a>

 ### MsgCloseLeaseResponse
 MsgCloseLeaseResponse defines the Msg/CloseLease response type.

 

 

 
 <a name="akash.market.v1beta5.MsgCreateLease"></a>

 ### MsgCreateLease
 MsgCreateLease is sent to create a lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [akash.market.v1.BidID](#akash.market.v1.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.MsgCreateLeaseResponse"></a>

 ### MsgCreateLeaseResponse
 MsgCreateLeaseResponse is the response from creating a lease

 

 

 
 <a name="akash.market.v1beta5.MsgWithdrawLease"></a>

 ### MsgWithdrawLease
 MsgWithdrawLease defines an SDK message for withdrawing lease funds

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [akash.market.v1.LeaseID](#akash.market.v1.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.MsgWithdrawLeaseResponse"></a>

 ### MsgWithdrawLeaseResponse
 MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/paramsmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/paramsmsg.proto
 

 
 <a name="akash.market.v1beta5.MsgUpdateParams"></a>

 ### MsgUpdateParams
 MsgUpdateParams is the Msg/UpdateParams request type.

Since: akash v1.0.0

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `authority` | [string](#string) |  | authority is the address of the governance account. |
 | `params` | [Params](#akash.market.v1beta5.Params) |  | params defines the x/deployment parameters to update.

NOTE: All parameters must be supplied. |
 
 

 

 
 <a name="akash.market.v1beta5.MsgUpdateParamsResponse"></a>

 ### MsgUpdateParamsResponse
 MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: akash v1.0.0

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/query.proto
 

 
 <a name="akash.market.v1beta5.QueryBidRequest"></a>

 ### QueryBidRequest
 QueryBidRequest is request type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.market.v1.BidID](#akash.market.v1.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryBidResponse"></a>

 ### QueryBidResponse
 QueryBidResponse is response type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid` | [Bid](#akash.market.v1beta5.Bid) |  |  |
 | `escrow_account` | [akash.escrow.v1.Account](#akash.escrow.v1.Account) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryBidsRequest"></a>

 ### QueryBidsRequest
 QueryBidsRequest is request type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [BidFilters](#akash.market.v1beta5.BidFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryBidsResponse"></a>

 ### QueryBidsResponse
 QueryBidsResponse is response type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bids` | [QueryBidResponse](#akash.market.v1beta5.QueryBidResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryLeaseRequest"></a>

 ### QueryLeaseRequest
 QueryLeaseRequest is request type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.market.v1.LeaseID](#akash.market.v1.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryLeaseResponse"></a>

 ### QueryLeaseResponse
 QueryLeaseResponse is response type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease` | [akash.market.v1.Lease](#akash.market.v1.Lease) |  |  |
 | `escrow_payment` | [akash.escrow.v1.FractionalPayment](#akash.escrow.v1.FractionalPayment) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryLeasesRequest"></a>

 ### QueryLeasesRequest
 QueryLeasesRequest is request type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [akash.market.v1.LeaseFilters](#akash.market.v1.LeaseFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryLeasesResponse"></a>

 ### QueryLeasesResponse
 QueryLeasesResponse is response type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `leases` | [QueryLeaseResponse](#akash.market.v1beta5.QueryLeaseResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryOrderRequest"></a>

 ### QueryOrderRequest
 QueryOrderRequest is request type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [akash.market.v1.OrderID](#akash.market.v1.OrderID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryOrderResponse"></a>

 ### QueryOrderResponse
 QueryOrderResponse is response type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [Order](#akash.market.v1beta5.Order) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryOrdersRequest"></a>

 ### QueryOrdersRequest
 QueryOrdersRequest is request type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [OrderFilters](#akash.market.v1beta5.OrderFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryOrdersResponse"></a>

 ### QueryOrdersResponse
 QueryOrdersResponse is response type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `orders` | [Order](#akash.market.v1beta5.Order) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta5.QueryParamsRequest"></a>

 ### QueryParamsRequest
 QueryParamsRequest is the request type for the Query/Params RPC method.

 

 

 
 <a name="akash.market.v1beta5.QueryParamsResponse"></a>

 ### QueryParamsResponse
 QueryParamsResponse is the response type for the Query/Params RPC method.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.market.v1beta5.Params) |  | params defines the parameters of the module. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta5.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Orders` | [QueryOrdersRequest](#akash.market.v1beta5.QueryOrdersRequest) | [QueryOrdersResponse](#akash.market.v1beta5.QueryOrdersResponse) | Orders queries orders with filters | GET|/akash/market/v1beta5/orders/list|
 | `Order` | [QueryOrderRequest](#akash.market.v1beta5.QueryOrderRequest) | [QueryOrderResponse](#akash.market.v1beta5.QueryOrderResponse) | Order queries order details | GET|/akash/market/v1beta5/orders/info|
 | `Bids` | [QueryBidsRequest](#akash.market.v1beta5.QueryBidsRequest) | [QueryBidsResponse](#akash.market.v1beta5.QueryBidsResponse) | Bids queries bids with filters | GET|/akash/market/v1beta5/bids/list|
 | `Bid` | [QueryBidRequest](#akash.market.v1beta5.QueryBidRequest) | [QueryBidResponse](#akash.market.v1beta5.QueryBidResponse) | Bid queries bid details | GET|/akash/market/v1beta5/bids/info|
 | `Leases` | [QueryLeasesRequest](#akash.market.v1beta5.QueryLeasesRequest) | [QueryLeasesResponse](#akash.market.v1beta5.QueryLeasesResponse) | Leases queries leases with filters | GET|/akash/market/v1beta5/leases/list|
 | `Lease` | [QueryLeaseRequest](#akash.market.v1beta5.QueryLeaseRequest) | [QueryLeaseResponse](#akash.market.v1beta5.QueryLeaseResponse) | Lease queries lease details | GET|/akash/market/v1beta5/leases/info|
 | `Params` | [QueryParamsRequest](#akash.market.v1beta5.QueryParamsRequest) | [QueryParamsResponse](#akash.market.v1beta5.QueryParamsResponse) | Params returns the total set of minting parameters. | GET|/akash/market/v1beta5/params|
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta5/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta5/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta5.Msg"></a>

 ### Msg
 Msg defines the market Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateBid` | [MsgCreateBid](#akash.market.v1beta5.MsgCreateBid) | [MsgCreateBidResponse](#akash.market.v1beta5.MsgCreateBidResponse) | CreateBid defines a method to create a bid given proper inputs. | |
 | `CloseBid` | [MsgCloseBid](#akash.market.v1beta5.MsgCloseBid) | [MsgCloseBidResponse](#akash.market.v1beta5.MsgCloseBidResponse) | CloseBid defines a method to close a bid given proper inputs. | |
 | `WithdrawLease` | [MsgWithdrawLease](#akash.market.v1beta5.MsgWithdrawLease) | [MsgWithdrawLeaseResponse](#akash.market.v1beta5.MsgWithdrawLeaseResponse) | WithdrawLease withdraws accrued funds from the lease payment | |
 | `CreateLease` | [MsgCreateLease](#akash.market.v1beta5.MsgCreateLease) | [MsgCreateLeaseResponse](#akash.market.v1beta5.MsgCreateLeaseResponse) | CreateLease creates a new lease | |
 | `CloseLease` | [MsgCloseLease](#akash.market.v1beta5.MsgCloseLease) | [MsgCloseLeaseResponse](#akash.market.v1beta5.MsgCloseLeaseResponse) | CloseLease defines a method to close an order given proper inputs. | |
 | `UpdateParams` | [MsgUpdateParams](#akash.market.v1beta5.MsgUpdateParams) | [MsgUpdateParamsResponse](#akash.market.v1beta5.MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/market module parameters. The authority is hard-coded to the x/gov module account.

Since: akash v1.0.0 | |
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta4/event.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta4/event.proto
 

 
 <a name="akash.provider.v1beta4.EventProviderCreated"></a>

 ### EventProviderCreated
 EventProviderCreated defines an SDK message for provider created event

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.EventProviderDeleted"></a>

 ### EventProviderDeleted
 EventProviderDeleted defines an SDK message for provider deleted event

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.EventProviderUpdated"></a>

 ### EventProviderUpdated
 EventProviderUpdated defines an SDK message for provider updated event

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1beta4/provider.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta4/provider.proto
 

 
 <a name="akash.provider.v1beta4.Info"></a>

 ### Info
 Info

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `email` | [string](#string) |  |  |
 | `website` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.Provider"></a>

 ### Provider
 Provider stores owner and host details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 | `info` | [Info](#akash.provider.v1beta4.Info) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1beta4/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta4/genesis.proto
 

 
 <a name="akash.provider.v1beta4.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by provider module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.provider.v1beta4.Provider) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1beta4/msg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta4/msg.proto
 

 
 <a name="akash.provider.v1beta4.MsgCreateProvider"></a>

 ### MsgCreateProvider
 MsgCreateProvider defines an SDK message for creating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 | `info` | [Info](#akash.provider.v1beta4.Info) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.MsgCreateProviderResponse"></a>

 ### MsgCreateProviderResponse
 MsgCreateProviderResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.provider.v1beta4.MsgDeleteProvider"></a>

 ### MsgDeleteProvider
 MsgDeleteProvider defines an SDK message for deleting a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.MsgDeleteProviderResponse"></a>

 ### MsgDeleteProviderResponse
 MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.

 

 

 
 <a name="akash.provider.v1beta4.MsgUpdateProvider"></a>

 ### MsgUpdateProvider
 MsgUpdateProvider defines an SDK message for updating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.attributes.v1.Attribute](#akash.base.attributes.v1.Attribute) | repeated |  |
 | `info` | [Info](#akash.provider.v1beta4.Info) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.MsgUpdateProviderResponse"></a>

 ### MsgUpdateProviderResponse
 MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1beta4/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta4/query.proto
 

 
 <a name="akash.provider.v1beta4.QueryProviderRequest"></a>

 ### QueryProviderRequest
 QueryProviderRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.QueryProviderResponse"></a>

 ### QueryProviderResponse
 QueryProviderResponse is response type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `provider` | [Provider](#akash.provider.v1beta4.Provider) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.QueryProvidersRequest"></a>

 ### QueryProvidersRequest
 QueryProvidersRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta4.QueryProvidersResponse"></a>

 ### QueryProvidersResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.provider.v1beta4.Provider) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta4.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Providers` | [QueryProvidersRequest](#akash.provider.v1beta4.QueryProvidersRequest) | [QueryProvidersResponse](#akash.provider.v1beta4.QueryProvidersResponse) | Providers queries providers | GET|/akash/provider/v1beta4/providers|
 | `Provider` | [QueryProviderRequest](#akash.provider.v1beta4.QueryProviderRequest) | [QueryProviderResponse](#akash.provider.v1beta4.QueryProviderResponse) | Provider queries provider details | GET|/akash/provider/v1beta4/providers/{owner}|
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta4/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta4/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta4.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateProvider` | [MsgCreateProvider](#akash.provider.v1beta4.MsgCreateProvider) | [MsgCreateProviderResponse](#akash.provider.v1beta4.MsgCreateProviderResponse) | CreateProvider defines a method that creates a provider given the proper inputs | |
 | `UpdateProvider` | [MsgUpdateProvider](#akash.provider.v1beta4.MsgUpdateProvider) | [MsgUpdateProviderResponse](#akash.provider.v1beta4.MsgUpdateProviderResponse) | UpdateProvider defines a method that updates a provider given the proper inputs | |
 | `DeleteProvider` | [MsgDeleteProvider](#akash.provider.v1beta4.MsgDeleteProvider) | [MsgDeleteProviderResponse](#akash.provider.v1beta4.MsgDeleteProviderResponse) | DeleteProvider defines a method that deletes a provider given the proper inputs | |
 
  <!-- end services -->

 
 
 <a name="akash/staking/v1beta3/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/staking/v1beta3/params.proto
 

 
 <a name="akash.staking.v1beta3.Params"></a>

 ### Params
 Params extends the parameters for the x/staking module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `min_commission_rate` | [string](#string) |  | min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/staking/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/staking/v1beta3/genesis.proto
 

 
 <a name="akash.staking.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.staking.v1beta3.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/staking/v1beta3/paramsmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/staking/v1beta3/paramsmsg.proto
 

 
 <a name="akash.staking.v1beta3.MsgUpdateParams"></a>

 ### MsgUpdateParams
 MsgUpdateParams is the Msg/UpdateParams request type.

Since: akash v1.0.0

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `authority` | [string](#string) |  | authority is the address of the governance account. |
 | `params` | [Params](#akash.staking.v1beta3.Params) |  | params defines the x/deployment parameters to update.

NOTE: All parameters must be supplied. |
 
 

 

 
 <a name="akash.staking.v1beta3.MsgUpdateParamsResponse"></a>

 ### MsgUpdateParamsResponse
 MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: akash v1.0.0

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/staking/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/staking/v1beta3/query.proto
 

 
 <a name="akash.staking.v1beta3.QueryParamsRequest"></a>

 ### QueryParamsRequest
 QueryParamsRequest is the request type for the Query/Params RPC method.

 

 

 
 <a name="akash.staking.v1beta3.QueryParamsResponse"></a>

 ### QueryParamsResponse
 QueryParamsResponse is the response type for the Query/Params RPC method.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.staking.v1beta3.Params) |  | params defines the parameters of the module. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.staking.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Params` | [QueryParamsRequest](#akash.staking.v1beta3.QueryParamsRequest) | [QueryParamsResponse](#akash.staking.v1beta3.QueryParamsResponse) | Params returns the total set of minting parameters. | GET|/akash/staking/v1beta3/params|
 
  <!-- end services -->

 
 
 <a name="akash/staking/v1beta3/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/staking/v1beta3/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.staking.v1beta3.Msg"></a>

 ### Msg
 Msg defines the market Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `UpdateParams` | [MsgUpdateParams](#akash.staking.v1beta3.MsgUpdateParams) | [MsgUpdateParamsResponse](#akash.staking.v1beta3.MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/market module parameters. The authority is hard-coded to the x/gov module account.

Since: akash v1.0.0 | |
 
  <!-- end services -->

 
 
 <a name="akash/take/v1/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1/params.proto
 

 
 <a name="akash.take.v1.DenomTakeRate"></a>

 ### DenomTakeRate
 DenomTakeRate describes take rate for specified denom

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `denom` | [string](#string) |  |  |
 | `rate` | [uint32](#uint32) |  |  |
 
 

 

 
 <a name="akash.take.v1.Params"></a>

 ### Params
 Params defines the parameters for the x/take package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `denom_take_rates` | [DenomTakeRate](#akash.take.v1.DenomTakeRate) | repeated | denom -> % take rate |
 | `default_take_rate` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/take/v1/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1/genesis.proto
 

 
 <a name="akash.take.v1.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.take.v1.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/take/v1/paramsmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1/paramsmsg.proto
 

 
 <a name="akash.take.v1.MsgUpdateParams"></a>

 ### MsgUpdateParams
 MsgUpdateParams is the Msg/UpdateParams request type.

Since: akash v1.0.0

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `authority` | [string](#string) |  | authority is the address of the governance account. |
 | `params` | [Params](#akash.take.v1.Params) |  | params defines the x/deployment parameters to update.

NOTE: All parameters must be supplied. |
 
 

 

 
 <a name="akash.take.v1.MsgUpdateParamsResponse"></a>

 ### MsgUpdateParamsResponse
 MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: akash v1.0.0

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/take/v1/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1/query.proto
 

 
 <a name="akash.take.v1.QueryParamsRequest"></a>

 ### QueryParamsRequest
 QueryParamsRequest is the request type for the Query/Params RPC method.

 

 

 
 <a name="akash.take.v1.QueryParamsResponse"></a>

 ### QueryParamsResponse
 QueryParamsResponse is the response type for the Query/Params RPC method.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.take.v1.Params) |  | params defines the parameters of the module. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.take.v1.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Params` | [QueryParamsRequest](#akash.take.v1.QueryParamsRequest) | [QueryParamsResponse](#akash.take.v1.QueryParamsResponse) | Params returns the total set of minting parameters. | GET|/akash/take/v1/params|
 
  <!-- end services -->

 
 
 <a name="akash/take/v1/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.take.v1.Msg"></a>

 ### Msg
 Msg defines the market Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `UpdateParams` | [MsgUpdateParams](#akash.take.v1.MsgUpdateParams) | [MsgUpdateParamsResponse](#akash.take.v1.MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/market module parameters. The authority is hard-coded to the x/gov module account.

Since: akash v1.0.0 | |
 
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
 
