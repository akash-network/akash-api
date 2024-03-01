<!-- This file is auto-generated. Please do not modify it yourself. -->
 # Protobuf Documentation
 <a name="top"></a>

 ## Table of Contents
 
 - [akash/provider/v1beta3/query.proto](#akash/provider/v1beta3/query.proto)
     - [QueryProviderRequest](#akash.provider.v1beta3.QueryProviderRequest)
     - [QueryProviderResponse](#akash.provider.v1beta3.QueryProviderResponse)
     - [QueryProvidersRequest](#akash.provider.v1beta3.QueryProvidersRequest)
     - [QueryProvidersResponse](#akash.provider.v1beta3.QueryProvidersResponse)
   
     - [Query](#akash.provider.v1beta3.Query)
   
 - [akash/provider/v1beta3/provider.proto](#akash/provider/v1beta3/provider.proto)
     - [MsgCreateProvider](#akash.provider.v1beta3.MsgCreateProvider)
     - [MsgCreateProviderResponse](#akash.provider.v1beta3.MsgCreateProviderResponse)
     - [MsgDeleteProvider](#akash.provider.v1beta3.MsgDeleteProvider)
     - [MsgDeleteProviderResponse](#akash.provider.v1beta3.MsgDeleteProviderResponse)
     - [MsgUpdateProvider](#akash.provider.v1beta3.MsgUpdateProvider)
     - [MsgUpdateProviderResponse](#akash.provider.v1beta3.MsgUpdateProviderResponse)
     - [Provider](#akash.provider.v1beta3.Provider)
     - [ProviderInfo](#akash.provider.v1beta3.ProviderInfo)
   
     - [Msg](#akash.provider.v1beta3.Msg)
   
 - [akash/provider/v1beta3/genesis.proto](#akash/provider/v1beta3/genesis.proto)
     - [GenesisState](#akash.provider.v1beta3.GenesisState)
   
 - [akash/provider/v1beta1/provider.proto](#akash/provider/v1beta1/provider.proto)
     - [MsgCreateProvider](#akash.provider.v1beta1.MsgCreateProvider)
     - [MsgCreateProviderResponse](#akash.provider.v1beta1.MsgCreateProviderResponse)
     - [MsgDeleteProvider](#akash.provider.v1beta1.MsgDeleteProvider)
     - [MsgDeleteProviderResponse](#akash.provider.v1beta1.MsgDeleteProviderResponse)
     - [MsgUpdateProvider](#akash.provider.v1beta1.MsgUpdateProvider)
     - [MsgUpdateProviderResponse](#akash.provider.v1beta1.MsgUpdateProviderResponse)
     - [Provider](#akash.provider.v1beta1.Provider)
     - [ProviderInfo](#akash.provider.v1beta1.ProviderInfo)
   
     - [Msg](#akash.provider.v1beta1.Msg)
   
 - [akash/provider/v1beta2/query.proto](#akash/provider/v1beta2/query.proto)
     - [QueryProviderRequest](#akash.provider.v1beta2.QueryProviderRequest)
     - [QueryProviderResponse](#akash.provider.v1beta2.QueryProviderResponse)
     - [QueryProvidersRequest](#akash.provider.v1beta2.QueryProvidersRequest)
     - [QueryProvidersResponse](#akash.provider.v1beta2.QueryProvidersResponse)
   
     - [Query](#akash.provider.v1beta2.Query)
   
 - [akash/provider/v1beta2/provider.proto](#akash/provider/v1beta2/provider.proto)
     - [MsgCreateProvider](#akash.provider.v1beta2.MsgCreateProvider)
     - [MsgCreateProviderResponse](#akash.provider.v1beta2.MsgCreateProviderResponse)
     - [MsgDeleteProvider](#akash.provider.v1beta2.MsgDeleteProvider)
     - [MsgDeleteProviderResponse](#akash.provider.v1beta2.MsgDeleteProviderResponse)
     - [MsgUpdateProvider](#akash.provider.v1beta2.MsgUpdateProvider)
     - [MsgUpdateProviderResponse](#akash.provider.v1beta2.MsgUpdateProviderResponse)
     - [Provider](#akash.provider.v1beta2.Provider)
     - [ProviderInfo](#akash.provider.v1beta2.ProviderInfo)
   
     - [Msg](#akash.provider.v1beta2.Msg)
   
 - [akash/provider/v1beta2/genesis.proto](#akash/provider/v1beta2/genesis.proto)
     - [GenesisState](#akash.provider.v1beta2.GenesisState)
   
 - [akash/gov/v1beta3/params.proto](#akash/gov/v1beta3/params.proto)
     - [DepositParams](#akash.gov.v1beta3.DepositParams)
   
 - [akash/gov/v1beta3/genesis.proto](#akash/gov/v1beta3/genesis.proto)
     - [GenesisState](#akash.gov.v1beta3.GenesisState)
   
 - [akash/escrow/v1beta3/query.proto](#akash/escrow/v1beta3/query.proto)
     - [QueryAccountsRequest](#akash.escrow.v1beta3.QueryAccountsRequest)
     - [QueryAccountsResponse](#akash.escrow.v1beta3.QueryAccountsResponse)
     - [QueryPaymentsRequest](#akash.escrow.v1beta3.QueryPaymentsRequest)
     - [QueryPaymentsResponse](#akash.escrow.v1beta3.QueryPaymentsResponse)
   
     - [Query](#akash.escrow.v1beta3.Query)
   
 - [akash/escrow/v1beta3/types.proto](#akash/escrow/v1beta3/types.proto)
     - [Account](#akash.escrow.v1beta3.Account)
     - [AccountID](#akash.escrow.v1beta3.AccountID)
     - [FractionalPayment](#akash.escrow.v1beta3.FractionalPayment)
   
     - [Account.State](#akash.escrow.v1beta3.Account.State)
     - [FractionalPayment.State](#akash.escrow.v1beta3.FractionalPayment.State)
   
 - [akash/escrow/v1beta3/genesis.proto](#akash/escrow/v1beta3/genesis.proto)
     - [GenesisState](#akash.escrow.v1beta3.GenesisState)
   
 - [akash/escrow/v1beta1/query.proto](#akash/escrow/v1beta1/query.proto)
     - [QueryAccountsRequest](#akash.escrow.v1beta1.QueryAccountsRequest)
     - [QueryAccountsResponse](#akash.escrow.v1beta1.QueryAccountsResponse)
     - [QueryPaymentsRequest](#akash.escrow.v1beta1.QueryPaymentsRequest)
     - [QueryPaymentsResponse](#akash.escrow.v1beta1.QueryPaymentsResponse)
   
     - [Query](#akash.escrow.v1beta1.Query)
   
 - [akash/escrow/v1beta1/types.proto](#akash/escrow/v1beta1/types.proto)
     - [Account](#akash.escrow.v1beta1.Account)
     - [AccountID](#akash.escrow.v1beta1.AccountID)
     - [Payment](#akash.escrow.v1beta1.Payment)
   
     - [Account.State](#akash.escrow.v1beta1.Account.State)
     - [Payment.State](#akash.escrow.v1beta1.Payment.State)
   
 - [akash/escrow/v1beta1/genesis.proto](#akash/escrow/v1beta1/genesis.proto)
     - [GenesisState](#akash.escrow.v1beta1.GenesisState)
   
 - [akash/escrow/v1beta2/query.proto](#akash/escrow/v1beta2/query.proto)
     - [QueryAccountsRequest](#akash.escrow.v1beta2.QueryAccountsRequest)
     - [QueryAccountsResponse](#akash.escrow.v1beta2.QueryAccountsResponse)
     - [QueryPaymentsRequest](#akash.escrow.v1beta2.QueryPaymentsRequest)
     - [QueryPaymentsResponse](#akash.escrow.v1beta2.QueryPaymentsResponse)
   
     - [Query](#akash.escrow.v1beta2.Query)
   
 - [akash/escrow/v1beta2/types.proto](#akash/escrow/v1beta2/types.proto)
     - [Account](#akash.escrow.v1beta2.Account)
     - [AccountID](#akash.escrow.v1beta2.AccountID)
     - [FractionalPayment](#akash.escrow.v1beta2.FractionalPayment)
   
     - [Account.State](#akash.escrow.v1beta2.Account.State)
     - [FractionalPayment.State](#akash.escrow.v1beta2.FractionalPayment.State)
   
 - [akash/escrow/v1beta2/genesis.proto](#akash/escrow/v1beta2/genesis.proto)
     - [GenesisState](#akash.escrow.v1beta2.GenesisState)
   
 - [akash/audit/v1beta3/audit.proto](#akash/audit/v1beta3/audit.proto)
     - [AttributesFilters](#akash.audit.v1beta3.AttributesFilters)
     - [AttributesResponse](#akash.audit.v1beta3.AttributesResponse)
     - [AuditedAttributes](#akash.audit.v1beta3.AuditedAttributes)
     - [MsgDeleteProviderAttributes](#akash.audit.v1beta3.MsgDeleteProviderAttributes)
     - [MsgDeleteProviderAttributesResponse](#akash.audit.v1beta3.MsgDeleteProviderAttributesResponse)
     - [MsgSignProviderAttributes](#akash.audit.v1beta3.MsgSignProviderAttributes)
     - [MsgSignProviderAttributesResponse](#akash.audit.v1beta3.MsgSignProviderAttributesResponse)
     - [Provider](#akash.audit.v1beta3.Provider)
   
     - [Msg](#akash.audit.v1beta3.Msg)
   
 - [akash/audit/v1beta3/query.proto](#akash/audit/v1beta3/query.proto)
     - [QueryAllProvidersAttributesRequest](#akash.audit.v1beta3.QueryAllProvidersAttributesRequest)
     - [QueryAuditorAttributesRequest](#akash.audit.v1beta3.QueryAuditorAttributesRequest)
     - [QueryProviderAttributesRequest](#akash.audit.v1beta3.QueryProviderAttributesRequest)
     - [QueryProviderAuditorRequest](#akash.audit.v1beta3.QueryProviderAuditorRequest)
     - [QueryProviderRequest](#akash.audit.v1beta3.QueryProviderRequest)
     - [QueryProvidersResponse](#akash.audit.v1beta3.QueryProvidersResponse)
   
     - [Query](#akash.audit.v1beta3.Query)
   
 - [akash/audit/v1beta3/genesis.proto](#akash/audit/v1beta3/genesis.proto)
     - [GenesisState](#akash.audit.v1beta3.GenesisState)
   
 - [akash/audit/v1beta1/audit.proto](#akash/audit/v1beta1/audit.proto)
     - [AttributesFilters](#akash.audit.v1beta1.AttributesFilters)
     - [AttributesResponse](#akash.audit.v1beta1.AttributesResponse)
     - [AuditedAttributes](#akash.audit.v1beta1.AuditedAttributes)
     - [MsgDeleteProviderAttributes](#akash.audit.v1beta1.MsgDeleteProviderAttributes)
     - [MsgDeleteProviderAttributesResponse](#akash.audit.v1beta1.MsgDeleteProviderAttributesResponse)
     - [MsgSignProviderAttributes](#akash.audit.v1beta1.MsgSignProviderAttributes)
     - [MsgSignProviderAttributesResponse](#akash.audit.v1beta1.MsgSignProviderAttributesResponse)
     - [Provider](#akash.audit.v1beta1.Provider)
   
     - [Msg](#akash.audit.v1beta1.Msg)
   
 - [akash/audit/v1beta2/audit.proto](#akash/audit/v1beta2/audit.proto)
     - [AttributesFilters](#akash.audit.v1beta2.AttributesFilters)
     - [AttributesResponse](#akash.audit.v1beta2.AttributesResponse)
     - [AuditedAttributes](#akash.audit.v1beta2.AuditedAttributes)
     - [MsgDeleteProviderAttributes](#akash.audit.v1beta2.MsgDeleteProviderAttributes)
     - [MsgDeleteProviderAttributesResponse](#akash.audit.v1beta2.MsgDeleteProviderAttributesResponse)
     - [MsgSignProviderAttributes](#akash.audit.v1beta2.MsgSignProviderAttributes)
     - [MsgSignProviderAttributesResponse](#akash.audit.v1beta2.MsgSignProviderAttributesResponse)
     - [Provider](#akash.audit.v1beta2.Provider)
   
     - [Msg](#akash.audit.v1beta2.Msg)
   
 - [akash/audit/v1beta2/query.proto](#akash/audit/v1beta2/query.proto)
     - [QueryAllProvidersAttributesRequest](#akash.audit.v1beta2.QueryAllProvidersAttributesRequest)
     - [QueryAuditorAttributesRequest](#akash.audit.v1beta2.QueryAuditorAttributesRequest)
     - [QueryProviderAttributesRequest](#akash.audit.v1beta2.QueryProviderAttributesRequest)
     - [QueryProviderAuditorRequest](#akash.audit.v1beta2.QueryProviderAuditorRequest)
     - [QueryProviderRequest](#akash.audit.v1beta2.QueryProviderRequest)
     - [QueryProvidersResponse](#akash.audit.v1beta2.QueryProvidersResponse)
   
     - [Query](#akash.audit.v1beta2.Query)
   
 - [akash/audit/v1beta2/genesis.proto](#akash/audit/v1beta2/genesis.proto)
     - [GenesisState](#akash.audit.v1beta2.GenesisState)
   
 - [akash/market/v1beta3/bid.proto](#akash/market/v1beta3/bid.proto)
     - [Bid](#akash.market.v1beta3.Bid)
     - [BidFilters](#akash.market.v1beta3.BidFilters)
     - [BidID](#akash.market.v1beta3.BidID)
     - [MsgCloseBid](#akash.market.v1beta3.MsgCloseBid)
     - [MsgCloseBidResponse](#akash.market.v1beta3.MsgCloseBidResponse)
     - [MsgCreateBid](#akash.market.v1beta3.MsgCreateBid)
     - [MsgCreateBidResponse](#akash.market.v1beta3.MsgCreateBidResponse)
   
     - [Bid.State](#akash.market.v1beta3.Bid.State)
   
 - [akash/market/v1beta3/lease.proto](#akash/market/v1beta3/lease.proto)
     - [Lease](#akash.market.v1beta3.Lease)
     - [LeaseFilters](#akash.market.v1beta3.LeaseFilters)
     - [LeaseID](#akash.market.v1beta3.LeaseID)
     - [MsgCloseLease](#akash.market.v1beta3.MsgCloseLease)
     - [MsgCloseLeaseResponse](#akash.market.v1beta3.MsgCloseLeaseResponse)
     - [MsgCreateLease](#akash.market.v1beta3.MsgCreateLease)
     - [MsgCreateLeaseResponse](#akash.market.v1beta3.MsgCreateLeaseResponse)
     - [MsgWithdrawLease](#akash.market.v1beta3.MsgWithdrawLease)
     - [MsgWithdrawLeaseResponse](#akash.market.v1beta3.MsgWithdrawLeaseResponse)
   
     - [Lease.State](#akash.market.v1beta3.Lease.State)
   
 - [akash/market/v1beta3/order.proto](#akash/market/v1beta3/order.proto)
     - [Order](#akash.market.v1beta3.Order)
     - [OrderFilters](#akash.market.v1beta3.OrderFilters)
     - [OrderID](#akash.market.v1beta3.OrderID)
   
     - [Order.State](#akash.market.v1beta3.Order.State)
   
 - [akash/market/v1beta3/service.proto](#akash/market/v1beta3/service.proto)
     - [Msg](#akash.market.v1beta3.Msg)
   
 - [akash/market/v1beta3/params.proto](#akash/market/v1beta3/params.proto)
     - [Params](#akash.market.v1beta3.Params)
   
 - [akash/market/v1beta3/query.proto](#akash/market/v1beta3/query.proto)
     - [QueryBidRequest](#akash.market.v1beta3.QueryBidRequest)
     - [QueryBidResponse](#akash.market.v1beta3.QueryBidResponse)
     - [QueryBidsRequest](#akash.market.v1beta3.QueryBidsRequest)
     - [QueryBidsResponse](#akash.market.v1beta3.QueryBidsResponse)
     - [QueryLeaseRequest](#akash.market.v1beta3.QueryLeaseRequest)
     - [QueryLeaseResponse](#akash.market.v1beta3.QueryLeaseResponse)
     - [QueryLeasesRequest](#akash.market.v1beta3.QueryLeasesRequest)
     - [QueryLeasesResponse](#akash.market.v1beta3.QueryLeasesResponse)
     - [QueryOrderRequest](#akash.market.v1beta3.QueryOrderRequest)
     - [QueryOrderResponse](#akash.market.v1beta3.QueryOrderResponse)
     - [QueryOrdersRequest](#akash.market.v1beta3.QueryOrdersRequest)
     - [QueryOrdersResponse](#akash.market.v1beta3.QueryOrdersResponse)
   
     - [Query](#akash.market.v1beta3.Query)
   
 - [akash/market/v1beta3/genesis.proto](#akash/market/v1beta3/genesis.proto)
     - [GenesisState](#akash.market.v1beta3.GenesisState)
   
 - [akash/market/v1beta4/bid.proto](#akash/market/v1beta4/bid.proto)
     - [Bid](#akash.market.v1beta4.Bid)
     - [BidFilters](#akash.market.v1beta4.BidFilters)
     - [BidID](#akash.market.v1beta4.BidID)
     - [MsgCloseBid](#akash.market.v1beta4.MsgCloseBid)
     - [MsgCloseBidResponse](#akash.market.v1beta4.MsgCloseBidResponse)
     - [MsgCreateBid](#akash.market.v1beta4.MsgCreateBid)
     - [MsgCreateBidResponse](#akash.market.v1beta4.MsgCreateBidResponse)
     - [ResourceOffer](#akash.market.v1beta4.ResourceOffer)
   
     - [Bid.State](#akash.market.v1beta4.Bid.State)
   
 - [akash/market/v1beta4/lease.proto](#akash/market/v1beta4/lease.proto)
     - [Lease](#akash.market.v1beta4.Lease)
     - [LeaseFilters](#akash.market.v1beta4.LeaseFilters)
     - [LeaseID](#akash.market.v1beta4.LeaseID)
     - [MsgCloseLease](#akash.market.v1beta4.MsgCloseLease)
     - [MsgCloseLeaseResponse](#akash.market.v1beta4.MsgCloseLeaseResponse)
     - [MsgCreateLease](#akash.market.v1beta4.MsgCreateLease)
     - [MsgCreateLeaseResponse](#akash.market.v1beta4.MsgCreateLeaseResponse)
     - [MsgWithdrawLease](#akash.market.v1beta4.MsgWithdrawLease)
     - [MsgWithdrawLeaseResponse](#akash.market.v1beta4.MsgWithdrawLeaseResponse)
   
     - [Lease.State](#akash.market.v1beta4.Lease.State)
   
 - [akash/market/v1beta4/order.proto](#akash/market/v1beta4/order.proto)
     - [Order](#akash.market.v1beta4.Order)
     - [OrderFilters](#akash.market.v1beta4.OrderFilters)
     - [OrderID](#akash.market.v1beta4.OrderID)
   
     - [Order.State](#akash.market.v1beta4.Order.State)
   
 - [akash/market/v1beta4/service.proto](#akash/market/v1beta4/service.proto)
     - [Msg](#akash.market.v1beta4.Msg)
   
 - [akash/market/v1beta4/params.proto](#akash/market/v1beta4/params.proto)
     - [Params](#akash.market.v1beta4.Params)
   
 - [akash/market/v1beta4/query.proto](#akash/market/v1beta4/query.proto)
     - [QueryBidRequest](#akash.market.v1beta4.QueryBidRequest)
     - [QueryBidResponse](#akash.market.v1beta4.QueryBidResponse)
     - [QueryBidsRequest](#akash.market.v1beta4.QueryBidsRequest)
     - [QueryBidsResponse](#akash.market.v1beta4.QueryBidsResponse)
     - [QueryLeaseRequest](#akash.market.v1beta4.QueryLeaseRequest)
     - [QueryLeaseResponse](#akash.market.v1beta4.QueryLeaseResponse)
     - [QueryLeasesRequest](#akash.market.v1beta4.QueryLeasesRequest)
     - [QueryLeasesResponse](#akash.market.v1beta4.QueryLeasesResponse)
     - [QueryOrderRequest](#akash.market.v1beta4.QueryOrderRequest)
     - [QueryOrderResponse](#akash.market.v1beta4.QueryOrderResponse)
     - [QueryOrdersRequest](#akash.market.v1beta4.QueryOrdersRequest)
     - [QueryOrdersResponse](#akash.market.v1beta4.QueryOrdersResponse)
   
     - [Query](#akash.market.v1beta4.Query)
   
 - [akash/market/v1beta4/genesis.proto](#akash/market/v1beta4/genesis.proto)
     - [GenesisState](#akash.market.v1beta4.GenesisState)
   
 - [akash/market/v1beta2/bid.proto](#akash/market/v1beta2/bid.proto)
     - [Bid](#akash.market.v1beta2.Bid)
     - [BidFilters](#akash.market.v1beta2.BidFilters)
     - [BidID](#akash.market.v1beta2.BidID)
     - [MsgCloseBid](#akash.market.v1beta2.MsgCloseBid)
     - [MsgCloseBidResponse](#akash.market.v1beta2.MsgCloseBidResponse)
     - [MsgCreateBid](#akash.market.v1beta2.MsgCreateBid)
     - [MsgCreateBidResponse](#akash.market.v1beta2.MsgCreateBidResponse)
   
     - [Bid.State](#akash.market.v1beta2.Bid.State)
   
 - [akash/market/v1beta2/lease.proto](#akash/market/v1beta2/lease.proto)
     - [Lease](#akash.market.v1beta2.Lease)
     - [LeaseFilters](#akash.market.v1beta2.LeaseFilters)
     - [LeaseID](#akash.market.v1beta2.LeaseID)
     - [MsgCloseLease](#akash.market.v1beta2.MsgCloseLease)
     - [MsgCloseLeaseResponse](#akash.market.v1beta2.MsgCloseLeaseResponse)
     - [MsgCreateLease](#akash.market.v1beta2.MsgCreateLease)
     - [MsgCreateLeaseResponse](#akash.market.v1beta2.MsgCreateLeaseResponse)
     - [MsgWithdrawLease](#akash.market.v1beta2.MsgWithdrawLease)
     - [MsgWithdrawLeaseResponse](#akash.market.v1beta2.MsgWithdrawLeaseResponse)
   
     - [Lease.State](#akash.market.v1beta2.Lease.State)
   
 - [akash/market/v1beta2/order.proto](#akash/market/v1beta2/order.proto)
     - [Order](#akash.market.v1beta2.Order)
     - [OrderFilters](#akash.market.v1beta2.OrderFilters)
     - [OrderID](#akash.market.v1beta2.OrderID)
   
     - [Order.State](#akash.market.v1beta2.Order.State)
   
 - [akash/market/v1beta2/service.proto](#akash/market/v1beta2/service.proto)
     - [Msg](#akash.market.v1beta2.Msg)
   
 - [akash/market/v1beta2/params.proto](#akash/market/v1beta2/params.proto)
     - [Params](#akash.market.v1beta2.Params)
   
 - [akash/market/v1beta2/query.proto](#akash/market/v1beta2/query.proto)
     - [QueryBidRequest](#akash.market.v1beta2.QueryBidRequest)
     - [QueryBidResponse](#akash.market.v1beta2.QueryBidResponse)
     - [QueryBidsRequest](#akash.market.v1beta2.QueryBidsRequest)
     - [QueryBidsResponse](#akash.market.v1beta2.QueryBidsResponse)
     - [QueryLeaseRequest](#akash.market.v1beta2.QueryLeaseRequest)
     - [QueryLeaseResponse](#akash.market.v1beta2.QueryLeaseResponse)
     - [QueryLeasesRequest](#akash.market.v1beta2.QueryLeasesRequest)
     - [QueryLeasesResponse](#akash.market.v1beta2.QueryLeasesResponse)
     - [QueryOrderRequest](#akash.market.v1beta2.QueryOrderRequest)
     - [QueryOrderResponse](#akash.market.v1beta2.QueryOrderResponse)
     - [QueryOrdersRequest](#akash.market.v1beta2.QueryOrdersRequest)
     - [QueryOrdersResponse](#akash.market.v1beta2.QueryOrdersResponse)
   
     - [Query](#akash.market.v1beta2.Query)
   
 - [akash/market/v1beta2/genesis.proto](#akash/market/v1beta2/genesis.proto)
     - [GenesisState](#akash.market.v1beta2.GenesisState)
   
 - [akash/cert/v1beta3/cert.proto](#akash/cert/v1beta3/cert.proto)
     - [Certificate](#akash.cert.v1beta3.Certificate)
     - [CertificateFilter](#akash.cert.v1beta3.CertificateFilter)
     - [CertificateID](#akash.cert.v1beta3.CertificateID)
     - [MsgCreateCertificate](#akash.cert.v1beta3.MsgCreateCertificate)
     - [MsgCreateCertificateResponse](#akash.cert.v1beta3.MsgCreateCertificateResponse)
     - [MsgRevokeCertificate](#akash.cert.v1beta3.MsgRevokeCertificate)
     - [MsgRevokeCertificateResponse](#akash.cert.v1beta3.MsgRevokeCertificateResponse)
   
     - [Certificate.State](#akash.cert.v1beta3.Certificate.State)
   
     - [Msg](#akash.cert.v1beta3.Msg)
   
 - [akash/cert/v1beta3/query.proto](#akash/cert/v1beta3/query.proto)
     - [CertificateResponse](#akash.cert.v1beta3.CertificateResponse)
     - [QueryCertificatesRequest](#akash.cert.v1beta3.QueryCertificatesRequest)
     - [QueryCertificatesResponse](#akash.cert.v1beta3.QueryCertificatesResponse)
   
     - [Query](#akash.cert.v1beta3.Query)
   
 - [akash/cert/v1beta3/genesis.proto](#akash/cert/v1beta3/genesis.proto)
     - [GenesisCertificate](#akash.cert.v1beta3.GenesisCertificate)
     - [GenesisState](#akash.cert.v1beta3.GenesisState)
   
 - [akash/cert/v1beta2/cert.proto](#akash/cert/v1beta2/cert.proto)
     - [Certificate](#akash.cert.v1beta2.Certificate)
     - [CertificateFilter](#akash.cert.v1beta2.CertificateFilter)
     - [CertificateID](#akash.cert.v1beta2.CertificateID)
     - [MsgCreateCertificate](#akash.cert.v1beta2.MsgCreateCertificate)
     - [MsgCreateCertificateResponse](#akash.cert.v1beta2.MsgCreateCertificateResponse)
     - [MsgRevokeCertificate](#akash.cert.v1beta2.MsgRevokeCertificate)
     - [MsgRevokeCertificateResponse](#akash.cert.v1beta2.MsgRevokeCertificateResponse)
   
     - [Certificate.State](#akash.cert.v1beta2.Certificate.State)
   
     - [Msg](#akash.cert.v1beta2.Msg)
   
 - [akash/cert/v1beta2/query.proto](#akash/cert/v1beta2/query.proto)
     - [CertificateResponse](#akash.cert.v1beta2.CertificateResponse)
     - [QueryCertificatesRequest](#akash.cert.v1beta2.QueryCertificatesRequest)
     - [QueryCertificatesResponse](#akash.cert.v1beta2.QueryCertificatesResponse)
   
     - [Query](#akash.cert.v1beta2.Query)
   
 - [akash/cert/v1beta2/genesis.proto](#akash/cert/v1beta2/genesis.proto)
     - [GenesisCertificate](#akash.cert.v1beta2.GenesisCertificate)
     - [GenesisState](#akash.cert.v1beta2.GenesisState)
   
 - [akash/discovery/v1/akash.proto](#akash/discovery/v1/akash.proto)
     - [Akash](#akash.discovery.v1.Akash)
   
 - [akash/discovery/v1/client_info.proto](#akash/discovery/v1/client_info.proto)
     - [ClientInfo](#akash.discovery.v1.ClientInfo)
   
 - [akash/take/v1beta3/params.proto](#akash/take/v1beta3/params.proto)
     - [DenomTakeRate](#akash.take.v1beta3.DenomTakeRate)
     - [Params](#akash.take.v1beta3.Params)
   
 - [akash/take/v1beta3/query.proto](#akash/take/v1beta3/query.proto)
     - [Query](#akash.take.v1beta3.Query)
   
 - [akash/take/v1beta3/genesis.proto](#akash/take/v1beta3/genesis.proto)
     - [GenesisState](#akash.take.v1beta3.GenesisState)
   
 - [akash/staking/v1beta3/params.proto](#akash/staking/v1beta3/params.proto)
     - [Params](#akash.staking.v1beta3.Params)
   
 - [akash/staking/v1beta3/genesis.proto](#akash/staking/v1beta3/genesis.proto)
     - [GenesisState](#akash.staking.v1beta3.GenesisState)
   
 - [akash/base/v1beta3/gpu.proto](#akash/base/v1beta3/gpu.proto)
     - [GPU](#akash.base.v1beta3.GPU)
   
 - [akash/base/v1beta3/attribute.proto](#akash/base/v1beta3/attribute.proto)
     - [Attribute](#akash.base.v1beta3.Attribute)
     - [PlacementRequirements](#akash.base.v1beta3.PlacementRequirements)
     - [SignedBy](#akash.base.v1beta3.SignedBy)
   
 - [akash/base/v1beta3/storage.proto](#akash/base/v1beta3/storage.proto)
     - [Storage](#akash.base.v1beta3.Storage)
   
 - [akash/base/v1beta3/resourcevalue.proto](#akash/base/v1beta3/resourcevalue.proto)
     - [ResourceValue](#akash.base.v1beta3.ResourceValue)
   
 - [akash/base/v1beta3/memory.proto](#akash/base/v1beta3/memory.proto)
     - [Memory](#akash.base.v1beta3.Memory)
   
 - [akash/base/v1beta3/resources.proto](#akash/base/v1beta3/resources.proto)
     - [Resources](#akash.base.v1beta3.Resources)
   
 - [akash/base/v1beta3/cpu.proto](#akash/base/v1beta3/cpu.proto)
     - [CPU](#akash.base.v1beta3.CPU)
   
 - [akash/base/v1beta3/endpoint.proto](#akash/base/v1beta3/endpoint.proto)
     - [Endpoint](#akash.base.v1beta3.Endpoint)
   
     - [Endpoint.Kind](#akash.base.v1beta3.Endpoint.Kind)
   
 - [akash/base/v1beta1/attribute.proto](#akash/base/v1beta1/attribute.proto)
     - [Attribute](#akash.base.v1beta1.Attribute)
     - [PlacementRequirements](#akash.base.v1beta1.PlacementRequirements)
     - [SignedBy](#akash.base.v1beta1.SignedBy)
   
 - [akash/base/v1beta1/resourcevalue.proto](#akash/base/v1beta1/resourcevalue.proto)
     - [ResourceValue](#akash.base.v1beta1.ResourceValue)
   
 - [akash/base/v1beta1/resource.proto](#akash/base/v1beta1/resource.proto)
     - [CPU](#akash.base.v1beta1.CPU)
     - [Memory](#akash.base.v1beta1.Memory)
     - [ResourceUnits](#akash.base.v1beta1.ResourceUnits)
     - [Storage](#akash.base.v1beta1.Storage)
   
 - [akash/base/v1beta1/endpoint.proto](#akash/base/v1beta1/endpoint.proto)
     - [Endpoint](#akash.base.v1beta1.Endpoint)
   
     - [Endpoint.Kind](#akash.base.v1beta1.Endpoint.Kind)
   
 - [akash/base/v1beta2/attribute.proto](#akash/base/v1beta2/attribute.proto)
     - [Attribute](#akash.base.v1beta2.Attribute)
     - [PlacementRequirements](#akash.base.v1beta2.PlacementRequirements)
     - [SignedBy](#akash.base.v1beta2.SignedBy)
   
 - [akash/base/v1beta2/resourcevalue.proto](#akash/base/v1beta2/resourcevalue.proto)
     - [ResourceValue](#akash.base.v1beta2.ResourceValue)
   
 - [akash/base/v1beta2/resource.proto](#akash/base/v1beta2/resource.proto)
     - [CPU](#akash.base.v1beta2.CPU)
     - [Memory](#akash.base.v1beta2.Memory)
     - [Storage](#akash.base.v1beta2.Storage)
   
 - [akash/base/v1beta2/resourceunits.proto](#akash/base/v1beta2/resourceunits.proto)
     - [ResourceUnits](#akash.base.v1beta2.ResourceUnits)
   
 - [akash/base/v1beta2/endpoint.proto](#akash/base/v1beta2/endpoint.proto)
     - [Endpoint](#akash.base.v1beta2.Endpoint)
   
     - [Endpoint.Kind](#akash.base.v1beta2.Endpoint.Kind)
   
 - [akash/deployment/v1beta3/group.proto](#akash/deployment/v1beta3/group.proto)
     - [Group](#akash.deployment.v1beta3.Group)
   
     - [Group.State](#akash.deployment.v1beta3.Group.State)
   
 - [akash/deployment/v1beta3/deployment.proto](#akash/deployment/v1beta3/deployment.proto)
     - [Deployment](#akash.deployment.v1beta3.Deployment)
     - [DeploymentFilters](#akash.deployment.v1beta3.DeploymentFilters)
     - [DeploymentID](#akash.deployment.v1beta3.DeploymentID)
   
     - [Deployment.State](#akash.deployment.v1beta3.Deployment.State)
   
 - [akash/deployment/v1beta3/deploymentmsg.proto](#akash/deployment/v1beta3/deploymentmsg.proto)
     - [MsgCloseDeployment](#akash.deployment.v1beta3.MsgCloseDeployment)
     - [MsgCloseDeploymentResponse](#akash.deployment.v1beta3.MsgCloseDeploymentResponse)
     - [MsgCreateDeployment](#akash.deployment.v1beta3.MsgCreateDeployment)
     - [MsgCreateDeploymentResponse](#akash.deployment.v1beta3.MsgCreateDeploymentResponse)
     - [MsgDepositDeployment](#akash.deployment.v1beta3.MsgDepositDeployment)
     - [MsgDepositDeploymentResponse](#akash.deployment.v1beta3.MsgDepositDeploymentResponse)
     - [MsgUpdateDeployment](#akash.deployment.v1beta3.MsgUpdateDeployment)
     - [MsgUpdateDeploymentResponse](#akash.deployment.v1beta3.MsgUpdateDeploymentResponse)
   
 - [akash/deployment/v1beta3/groupmsg.proto](#akash/deployment/v1beta3/groupmsg.proto)
     - [MsgCloseGroup](#akash.deployment.v1beta3.MsgCloseGroup)
     - [MsgCloseGroupResponse](#akash.deployment.v1beta3.MsgCloseGroupResponse)
     - [MsgPauseGroup](#akash.deployment.v1beta3.MsgPauseGroup)
     - [MsgPauseGroupResponse](#akash.deployment.v1beta3.MsgPauseGroupResponse)
     - [MsgStartGroup](#akash.deployment.v1beta3.MsgStartGroup)
     - [MsgStartGroupResponse](#akash.deployment.v1beta3.MsgStartGroupResponse)
   
 - [akash/deployment/v1beta3/service.proto](#akash/deployment/v1beta3/service.proto)
     - [Msg](#akash.deployment.v1beta3.Msg)
   
 - [akash/deployment/v1beta3/groupspec.proto](#akash/deployment/v1beta3/groupspec.proto)
     - [GroupSpec](#akash.deployment.v1beta3.GroupSpec)
   
 - [akash/deployment/v1beta3/groupid.proto](#akash/deployment/v1beta3/groupid.proto)
     - [GroupID](#akash.deployment.v1beta3.GroupID)
   
 - [akash/deployment/v1beta3/params.proto](#akash/deployment/v1beta3/params.proto)
     - [Params](#akash.deployment.v1beta3.Params)
   
 - [akash/deployment/v1beta3/query.proto](#akash/deployment/v1beta3/query.proto)
     - [QueryDeploymentRequest](#akash.deployment.v1beta3.QueryDeploymentRequest)
     - [QueryDeploymentResponse](#akash.deployment.v1beta3.QueryDeploymentResponse)
     - [QueryDeploymentsRequest](#akash.deployment.v1beta3.QueryDeploymentsRequest)
     - [QueryDeploymentsResponse](#akash.deployment.v1beta3.QueryDeploymentsResponse)
     - [QueryGroupRequest](#akash.deployment.v1beta3.QueryGroupRequest)
     - [QueryGroupResponse](#akash.deployment.v1beta3.QueryGroupResponse)
   
     - [Query](#akash.deployment.v1beta3.Query)
   
 - [akash/deployment/v1beta3/resourceunit.proto](#akash/deployment/v1beta3/resourceunit.proto)
     - [ResourceUnit](#akash.deployment.v1beta3.ResourceUnit)
   
 - [akash/deployment/v1beta3/authz.proto](#akash/deployment/v1beta3/authz.proto)
     - [DepositDeploymentAuthorization](#akash.deployment.v1beta3.DepositDeploymentAuthorization)
   
 - [akash/deployment/v1beta3/genesis.proto](#akash/deployment/v1beta3/genesis.proto)
     - [GenesisDeployment](#akash.deployment.v1beta3.GenesisDeployment)
     - [GenesisState](#akash.deployment.v1beta3.GenesisState)
   
 - [akash/deployment/v1beta1/group.proto](#akash/deployment/v1beta1/group.proto)
     - [Group](#akash.deployment.v1beta1.Group)
     - [GroupID](#akash.deployment.v1beta1.GroupID)
     - [GroupSpec](#akash.deployment.v1beta1.GroupSpec)
     - [MsgCloseGroup](#akash.deployment.v1beta1.MsgCloseGroup)
     - [MsgCloseGroupResponse](#akash.deployment.v1beta1.MsgCloseGroupResponse)
     - [MsgPauseGroup](#akash.deployment.v1beta1.MsgPauseGroup)
     - [MsgPauseGroupResponse](#akash.deployment.v1beta1.MsgPauseGroupResponse)
     - [MsgStartGroup](#akash.deployment.v1beta1.MsgStartGroup)
     - [MsgStartGroupResponse](#akash.deployment.v1beta1.MsgStartGroupResponse)
     - [Resource](#akash.deployment.v1beta1.Resource)
   
     - [Group.State](#akash.deployment.v1beta1.Group.State)
   
 - [akash/deployment/v1beta1/deployment.proto](#akash/deployment/v1beta1/deployment.proto)
     - [Deployment](#akash.deployment.v1beta1.Deployment)
     - [DeploymentFilters](#akash.deployment.v1beta1.DeploymentFilters)
     - [DeploymentID](#akash.deployment.v1beta1.DeploymentID)
     - [MsgCloseDeployment](#akash.deployment.v1beta1.MsgCloseDeployment)
     - [MsgCloseDeploymentResponse](#akash.deployment.v1beta1.MsgCloseDeploymentResponse)
     - [MsgCreateDeployment](#akash.deployment.v1beta1.MsgCreateDeployment)
     - [MsgCreateDeploymentResponse](#akash.deployment.v1beta1.MsgCreateDeploymentResponse)
     - [MsgDepositDeployment](#akash.deployment.v1beta1.MsgDepositDeployment)
     - [MsgDepositDeploymentResponse](#akash.deployment.v1beta1.MsgDepositDeploymentResponse)
     - [MsgUpdateDeployment](#akash.deployment.v1beta1.MsgUpdateDeployment)
     - [MsgUpdateDeploymentResponse](#akash.deployment.v1beta1.MsgUpdateDeploymentResponse)
   
     - [Deployment.State](#akash.deployment.v1beta1.Deployment.State)
   
     - [Msg](#akash.deployment.v1beta1.Msg)
   
 - [akash/deployment/v1beta1/params.proto](#akash/deployment/v1beta1/params.proto)
     - [Params](#akash.deployment.v1beta1.Params)
   
 - [akash/deployment/v1beta1/query.proto](#akash/deployment/v1beta1/query.proto)
     - [QueryDeploymentRequest](#akash.deployment.v1beta1.QueryDeploymentRequest)
     - [QueryDeploymentResponse](#akash.deployment.v1beta1.QueryDeploymentResponse)
     - [QueryDeploymentsRequest](#akash.deployment.v1beta1.QueryDeploymentsRequest)
     - [QueryDeploymentsResponse](#akash.deployment.v1beta1.QueryDeploymentsResponse)
     - [QueryGroupRequest](#akash.deployment.v1beta1.QueryGroupRequest)
     - [QueryGroupResponse](#akash.deployment.v1beta1.QueryGroupResponse)
   
     - [Query](#akash.deployment.v1beta1.Query)
   
 - [akash/deployment/v1beta1/authz.proto](#akash/deployment/v1beta1/authz.proto)
     - [DepositDeploymentAuthorization](#akash.deployment.v1beta1.DepositDeploymentAuthorization)
   
 - [akash/deployment/v1beta1/genesis.proto](#akash/deployment/v1beta1/genesis.proto)
     - [GenesisDeployment](#akash.deployment.v1beta1.GenesisDeployment)
     - [GenesisState](#akash.deployment.v1beta1.GenesisState)
   
 - [akash/deployment/v1beta2/group.proto](#akash/deployment/v1beta2/group.proto)
     - [Group](#akash.deployment.v1beta2.Group)
   
     - [Group.State](#akash.deployment.v1beta2.Group.State)
   
 - [akash/deployment/v1beta2/deployment.proto](#akash/deployment/v1beta2/deployment.proto)
     - [Deployment](#akash.deployment.v1beta2.Deployment)
     - [DeploymentFilters](#akash.deployment.v1beta2.DeploymentFilters)
     - [DeploymentID](#akash.deployment.v1beta2.DeploymentID)
   
     - [Deployment.State](#akash.deployment.v1beta2.Deployment.State)
   
 - [akash/deployment/v1beta2/deploymentmsg.proto](#akash/deployment/v1beta2/deploymentmsg.proto)
     - [MsgCloseDeployment](#akash.deployment.v1beta2.MsgCloseDeployment)
     - [MsgCloseDeploymentResponse](#akash.deployment.v1beta2.MsgCloseDeploymentResponse)
     - [MsgCreateDeployment](#akash.deployment.v1beta2.MsgCreateDeployment)
     - [MsgCreateDeploymentResponse](#akash.deployment.v1beta2.MsgCreateDeploymentResponse)
     - [MsgDepositDeployment](#akash.deployment.v1beta2.MsgDepositDeployment)
     - [MsgDepositDeploymentResponse](#akash.deployment.v1beta2.MsgDepositDeploymentResponse)
     - [MsgUpdateDeployment](#akash.deployment.v1beta2.MsgUpdateDeployment)
     - [MsgUpdateDeploymentResponse](#akash.deployment.v1beta2.MsgUpdateDeploymentResponse)
   
 - [akash/deployment/v1beta2/groupmsg.proto](#akash/deployment/v1beta2/groupmsg.proto)
     - [MsgCloseGroup](#akash.deployment.v1beta2.MsgCloseGroup)
     - [MsgCloseGroupResponse](#akash.deployment.v1beta2.MsgCloseGroupResponse)
     - [MsgPauseGroup](#akash.deployment.v1beta2.MsgPauseGroup)
     - [MsgPauseGroupResponse](#akash.deployment.v1beta2.MsgPauseGroupResponse)
     - [MsgStartGroup](#akash.deployment.v1beta2.MsgStartGroup)
     - [MsgStartGroupResponse](#akash.deployment.v1beta2.MsgStartGroupResponse)
   
 - [akash/deployment/v1beta2/service.proto](#akash/deployment/v1beta2/service.proto)
     - [Msg](#akash.deployment.v1beta2.Msg)
   
 - [akash/deployment/v1beta2/groupspec.proto](#akash/deployment/v1beta2/groupspec.proto)
     - [GroupSpec](#akash.deployment.v1beta2.GroupSpec)
   
 - [akash/deployment/v1beta2/groupid.proto](#akash/deployment/v1beta2/groupid.proto)
     - [GroupID](#akash.deployment.v1beta2.GroupID)
   
 - [akash/deployment/v1beta2/resource.proto](#akash/deployment/v1beta2/resource.proto)
     - [Resource](#akash.deployment.v1beta2.Resource)
   
 - [akash/deployment/v1beta2/params.proto](#akash/deployment/v1beta2/params.proto)
     - [Params](#akash.deployment.v1beta2.Params)
   
 - [akash/deployment/v1beta2/query.proto](#akash/deployment/v1beta2/query.proto)
     - [QueryDeploymentRequest](#akash.deployment.v1beta2.QueryDeploymentRequest)
     - [QueryDeploymentResponse](#akash.deployment.v1beta2.QueryDeploymentResponse)
     - [QueryDeploymentsRequest](#akash.deployment.v1beta2.QueryDeploymentsRequest)
     - [QueryDeploymentsResponse](#akash.deployment.v1beta2.QueryDeploymentsResponse)
     - [QueryGroupRequest](#akash.deployment.v1beta2.QueryGroupRequest)
     - [QueryGroupResponse](#akash.deployment.v1beta2.QueryGroupResponse)
   
     - [Query](#akash.deployment.v1beta2.Query)
   
 - [akash/deployment/v1beta2/authz.proto](#akash/deployment/v1beta2/authz.proto)
     - [DepositDeploymentAuthorization](#akash.deployment.v1beta2.DepositDeploymentAuthorization)
   
 - [akash/deployment/v1beta2/genesis.proto](#akash/deployment/v1beta2/genesis.proto)
     - [GenesisDeployment](#akash.deployment.v1beta2.GenesisDeployment)
     - [GenesisState](#akash.deployment.v1beta2.GenesisState)
   
 - [akash/inflation/v1beta3/params.proto](#akash/inflation/v1beta3/params.proto)
     - [Params](#akash.inflation.v1beta3.Params)
   
 - [akash/inflation/v1beta3/genesis.proto](#akash/inflation/v1beta3/genesis.proto)
     - [GenesisState](#akash.inflation.v1beta3.GenesisState)
   
 - [akash/inflation/v1beta2/params.proto](#akash/inflation/v1beta2/params.proto)
     - [Params](#akash.inflation.v1beta2.Params)
   
 - [akash/inflation/v1beta2/genesis.proto](#akash/inflation/v1beta2/genesis.proto)
     - [GenesisState](#akash.inflation.v1beta2.GenesisState)
   
 - [Scalar Value Types](#scalar-value-types)

 
 
 <a name="akash/provider/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta3/query.proto
 

 
 <a name="akash.provider.v1beta3.QueryProviderRequest"></a>

 ### QueryProviderRequest
 QueryProviderRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.QueryProviderResponse"></a>

 ### QueryProviderResponse
 QueryProviderResponse is response type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `provider` | [Provider](#akash.provider.v1beta3.Provider) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.QueryProvidersRequest"></a>

 ### QueryProvidersRequest
 QueryProvidersRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.QueryProvidersResponse"></a>

 ### QueryProvidersResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.provider.v1beta3.Provider) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Providers` | [QueryProvidersRequest](#akash.provider.v1beta3.QueryProvidersRequest) | [QueryProvidersResponse](#akash.provider.v1beta3.QueryProvidersResponse) | Providers queries providers | GET|/akash/provider/v1beta3/providers|
 | `Provider` | [QueryProviderRequest](#akash.provider.v1beta3.QueryProviderRequest) | [QueryProviderResponse](#akash.provider.v1beta3.QueryProviderResponse) | Provider queries provider details | GET|/akash/provider/v1beta3/providers/{owner}|
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta3/provider.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta3/provider.proto
 

 
 <a name="akash.provider.v1beta3.MsgCreateProvider"></a>

 ### MsgCreateProvider
 MsgCreateProvider defines an SDK message for creating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta3.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.MsgCreateProviderResponse"></a>

 ### MsgCreateProviderResponse
 MsgCreateProviderResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.provider.v1beta3.MsgDeleteProvider"></a>

 ### MsgDeleteProvider
 MsgDeleteProvider defines an SDK message for deleting a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.MsgDeleteProviderResponse"></a>

 ### MsgDeleteProviderResponse
 MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.

 

 

 
 <a name="akash.provider.v1beta3.MsgUpdateProvider"></a>

 ### MsgUpdateProvider
 MsgUpdateProvider defines an SDK message for updating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta3.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.MsgUpdateProviderResponse"></a>

 ### MsgUpdateProviderResponse
 MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.

 

 

 
 <a name="akash.provider.v1beta3.Provider"></a>

 ### Provider
 Provider stores owner and host details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta3.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta3.ProviderInfo"></a>

 ### ProviderInfo
 ProviderInfo

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `email` | [string](#string) |  |  |
 | `website` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta3.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateProvider` | [MsgCreateProvider](#akash.provider.v1beta3.MsgCreateProvider) | [MsgCreateProviderResponse](#akash.provider.v1beta3.MsgCreateProviderResponse) | CreateProvider defines a method that creates a provider given the proper inputs | |
 | `UpdateProvider` | [MsgUpdateProvider](#akash.provider.v1beta3.MsgUpdateProvider) | [MsgUpdateProviderResponse](#akash.provider.v1beta3.MsgUpdateProviderResponse) | UpdateProvider defines a method that updates a provider given the proper inputs | |
 | `DeleteProvider` | [MsgDeleteProvider](#akash.provider.v1beta3.MsgDeleteProvider) | [MsgDeleteProviderResponse](#akash.provider.v1beta3.MsgDeleteProviderResponse) | DeleteProvider defines a method that deletes a provider given the proper inputs | |
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta3/genesis.proto
 

 
 <a name="akash.provider.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by provider module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.provider.v1beta3.Provider) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/provider/v1beta1/provider.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta1/provider.proto
 

 
 <a name="akash.provider.v1beta1.MsgCreateProvider"></a>

 ### MsgCreateProvider
 MsgCreateProvider defines an SDK message for creating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta1.Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta1.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta1.MsgCreateProviderResponse"></a>

 ### MsgCreateProviderResponse
 MsgCreateProviderResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.provider.v1beta1.MsgDeleteProvider"></a>

 ### MsgDeleteProvider
 MsgDeleteProvider defines an SDK message for deleting a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta1.MsgDeleteProviderResponse"></a>

 ### MsgDeleteProviderResponse
 MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.

 

 

 
 <a name="akash.provider.v1beta1.MsgUpdateProvider"></a>

 ### MsgUpdateProvider
 MsgUpdateProvider defines an SDK message for updating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta1.Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta1.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta1.MsgUpdateProviderResponse"></a>

 ### MsgUpdateProviderResponse
 MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.

 

 

 
 <a name="akash.provider.v1beta1.Provider"></a>

 ### Provider
 Provider stores owner and host details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta1.Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta1.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta1.ProviderInfo"></a>

 ### ProviderInfo
 ProviderInfo

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `email` | [string](#string) |  |  |
 | `website` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta1.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateProvider` | [MsgCreateProvider](#akash.provider.v1beta1.MsgCreateProvider) | [MsgCreateProviderResponse](#akash.provider.v1beta1.MsgCreateProviderResponse) | CreateProvider defines a method that creates a provider given the proper inputs | |
 | `UpdateProvider` | [MsgUpdateProvider](#akash.provider.v1beta1.MsgUpdateProvider) | [MsgUpdateProviderResponse](#akash.provider.v1beta1.MsgUpdateProviderResponse) | UpdateProvider defines a method that updates a provider given the proper inputs | |
 | `DeleteProvider` | [MsgDeleteProvider](#akash.provider.v1beta1.MsgDeleteProvider) | [MsgDeleteProviderResponse](#akash.provider.v1beta1.MsgDeleteProviderResponse) | DeleteProvider defines a method that deletes a provider given the proper inputs | |
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta2/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta2/query.proto
 

 
 <a name="akash.provider.v1beta2.QueryProviderRequest"></a>

 ### QueryProviderRequest
 QueryProviderRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.QueryProviderResponse"></a>

 ### QueryProviderResponse
 QueryProviderResponse is response type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `provider` | [Provider](#akash.provider.v1beta2.Provider) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.QueryProvidersRequest"></a>

 ### QueryProvidersRequest
 QueryProvidersRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.QueryProvidersResponse"></a>

 ### QueryProvidersResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.provider.v1beta2.Provider) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta2.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Providers` | [QueryProvidersRequest](#akash.provider.v1beta2.QueryProvidersRequest) | [QueryProvidersResponse](#akash.provider.v1beta2.QueryProvidersResponse) | Providers queries providers | GET|/akash/provider/v1beta2/providers|
 | `Provider` | [QueryProviderRequest](#akash.provider.v1beta2.QueryProviderRequest) | [QueryProviderResponse](#akash.provider.v1beta2.QueryProviderResponse) | Provider queries provider details | GET|/akash/provider/v1beta2/providers/{owner}|
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta2/provider.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta2/provider.proto
 

 
 <a name="akash.provider.v1beta2.MsgCreateProvider"></a>

 ### MsgCreateProvider
 MsgCreateProvider defines an SDK message for creating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta2.Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta2.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.MsgCreateProviderResponse"></a>

 ### MsgCreateProviderResponse
 MsgCreateProviderResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.provider.v1beta2.MsgDeleteProvider"></a>

 ### MsgDeleteProvider
 MsgDeleteProvider defines an SDK message for deleting a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.MsgDeleteProviderResponse"></a>

 ### MsgDeleteProviderResponse
 MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.

 

 

 
 <a name="akash.provider.v1beta2.MsgUpdateProvider"></a>

 ### MsgUpdateProvider
 MsgUpdateProvider defines an SDK message for updating a provider

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta2.Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta2.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.MsgUpdateProviderResponse"></a>

 ### MsgUpdateProviderResponse
 MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.

 

 

 
 <a name="akash.provider.v1beta2.Provider"></a>

 ### Provider
 Provider stores owner and host details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `host_uri` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta2.Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 | `info` | [ProviderInfo](#akash.provider.v1beta2.ProviderInfo) |  |  |
 
 

 

 
 <a name="akash.provider.v1beta2.ProviderInfo"></a>

 ### ProviderInfo
 ProviderInfo

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `email` | [string](#string) |  |  |
 | `website` | [string](#string) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.provider.v1beta2.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateProvider` | [MsgCreateProvider](#akash.provider.v1beta2.MsgCreateProvider) | [MsgCreateProviderResponse](#akash.provider.v1beta2.MsgCreateProviderResponse) | CreateProvider defines a method that creates a provider given the proper inputs | |
 | `UpdateProvider` | [MsgUpdateProvider](#akash.provider.v1beta2.MsgUpdateProvider) | [MsgUpdateProviderResponse](#akash.provider.v1beta2.MsgUpdateProviderResponse) | UpdateProvider defines a method that updates a provider given the proper inputs | |
 | `DeleteProvider` | [MsgDeleteProvider](#akash.provider.v1beta2.MsgDeleteProvider) | [MsgDeleteProviderResponse](#akash.provider.v1beta2.MsgDeleteProviderResponse) | DeleteProvider defines a method that deletes a provider given the proper inputs | |
 
  <!-- end services -->

 
 
 <a name="akash/provider/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/provider/v1beta2/genesis.proto
 

 
 <a name="akash.provider.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by provider module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.provider.v1beta2.Provider) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

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

 
 
 <a name="akash/escrow/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta3/query.proto
 

 
 <a name="akash.escrow.v1beta3.QueryAccountsRequest"></a>

 ### QueryAccountsRequest
 QueryAccountRequest is request type for the Query/Account RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta3.QueryAccountsResponse"></a>

 ### QueryAccountsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1beta3.Account) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta3.QueryPaymentsRequest"></a>

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
 
 

 

 
 <a name="akash.escrow.v1beta3.QueryPaymentsResponse"></a>

 ### QueryPaymentsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `payments` | [FractionalPayment](#akash.escrow.v1beta3.FractionalPayment) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.escrow.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Accounts` | [QueryAccountsRequest](#akash.escrow.v1beta3.QueryAccountsRequest) | [QueryAccountsResponse](#akash.escrow.v1beta3.QueryAccountsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Accounts queries all accounts | GET|/akash/escrow/v1beta3/types/accounts/list|
 | `Payments` | [QueryPaymentsRequest](#akash.escrow.v1beta3.QueryPaymentsRequest) | [QueryPaymentsResponse](#akash.escrow.v1beta3.QueryPaymentsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Payments queries all payments | GET|/akash/escrow/v1beta3/types/payments/list|
 
  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta3/types.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta3/types.proto
 

 
 <a name="akash.escrow.v1beta3.Account"></a>

 ### Account
 Account stores state for an escrow account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [AccountID](#akash.escrow.v1beta3.AccountID) |  | unique identifier for this escrow account |
 | `owner` | [string](#string) |  | bech32 encoded account address of the owner of this escrow account |
 | `state` | [Account.State](#akash.escrow.v1beta3.Account.State) |  | current state of this escrow account |
 | `balance` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | unspent coins received from the owner's wallet |
 | `transferred` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | total coins spent by this account |
 | `settled_at` | [int64](#int64) |  | block height at which this account was last settled |
 | `depositor` | [string](#string) |  | bech32 encoded account address of the depositor. If depositor is same as the owner, then any incoming coins are added to the Balance. If depositor isn't same as the owner, then any incoming coins are added to the Funds. |
 | `funds` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | Funds are unspent coins received from the (non-Owner) Depositor's wallet. If there are any funds, they should be spent before spending the Balance. |
 
 

 

 
 <a name="akash.escrow.v1beta3.AccountID"></a>

 ### AccountID
 AccountID is the account identifier

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta3.FractionalPayment"></a>

 ### FractionalPayment
 Payment stores state for a payment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `account_id` | [AccountID](#akash.escrow.v1beta3.AccountID) |  |  |
 | `payment_id` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [FractionalPayment.State](#akash.escrow.v1beta3.FractionalPayment.State) |  |  |
 | `rate` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `balance` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `withdrawn` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.escrow.v1beta3.Account.State"></a>

 ### Account.State
 State stores state for an escrow account

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | AccountStateInvalid is an invalid state |
 | open | 1 | AccountOpen is the state when an account is open |
 | closed | 2 | AccountClosed is the state when an account is closed |
 | overdrawn | 3 | AccountOverdrawn is the state when an account is overdrawn |
 

 
 <a name="akash.escrow.v1beta3.FractionalPayment.State"></a>

 ### FractionalPayment.State
 Payment State

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | PaymentStateInvalid is the state when the payment is invalid |
 | open | 1 | PaymentStateOpen is the state when the payment is open |
 | closed | 2 | PaymentStateClosed is the state when the payment is closed |
 | overdrawn | 3 | PaymentStateOverdrawn is the state when the payment is overdrawn |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta3/genesis.proto
 

 
 <a name="akash.escrow.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by escrow module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1beta3.Account) | repeated |  |
 | `payments` | [FractionalPayment](#akash.escrow.v1beta3.FractionalPayment) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta1/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta1/query.proto
 

 
 <a name="akash.escrow.v1beta1.QueryAccountsRequest"></a>

 ### QueryAccountsRequest
 QueryAccountRequest is request type for the Query/Account RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta1.QueryAccountsResponse"></a>

 ### QueryAccountsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1beta1.Account) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta1.QueryPaymentsRequest"></a>

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
 
 

 

 
 <a name="akash.escrow.v1beta1.QueryPaymentsResponse"></a>

 ### QueryPaymentsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `payments` | [Payment](#akash.escrow.v1beta1.Payment) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.escrow.v1beta1.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Accounts` | [QueryAccountsRequest](#akash.escrow.v1beta1.QueryAccountsRequest) | [QueryAccountsResponse](#akash.escrow.v1beta1.QueryAccountsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Accounts queries all accounts | GET|/akash/escrow/v1beta1/types/accounts/list|
 | `Payments` | [QueryPaymentsRequest](#akash.escrow.v1beta1.QueryPaymentsRequest) | [QueryPaymentsResponse](#akash.escrow.v1beta1.QueryPaymentsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Payments queries all payments | GET|/akash/escrow/v1beta1/types/payments/list|
 
  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta1/types.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta1/types.proto
 

 
 <a name="akash.escrow.v1beta1.Account"></a>

 ### Account
 Account stores state for an escrow account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [AccountID](#akash.escrow.v1beta1.AccountID) |  | unique identifier for this escrow account |
 | `owner` | [string](#string) |  | bech32 encoded account address of the owner of this escrow account |
 | `state` | [Account.State](#akash.escrow.v1beta1.Account.State) |  | current state of this escrow account |
 | `balance` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  | unspent coins received from the owner's wallet |
 | `transferred` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  | total coins spent by this account |
 | `settled_at` | [int64](#int64) |  | block height at which this account was last settled |
 
 

 

 
 <a name="akash.escrow.v1beta1.AccountID"></a>

 ### AccountID
 AccountID is the account identifier

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta1.Payment"></a>

 ### Payment
 Payment stores state for a payment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `account_id` | [AccountID](#akash.escrow.v1beta1.AccountID) |  |  |
 | `payment_id` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [Payment.State](#akash.escrow.v1beta1.Payment.State) |  |  |
 | `rate` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `balance` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `withdrawn` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.escrow.v1beta1.Account.State"></a>

 ### Account.State
 State stores state for an escrow account

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | AccountStateInvalid is an invalid state |
 | open | 1 | AccountOpen is the state when an account is open |
 | closed | 2 | AccountClosed is the state when an account is closed |
 | overdrawn | 3 | AccountOverdrawn is the state when an account is overdrawn |
 

 
 <a name="akash.escrow.v1beta1.Payment.State"></a>

 ### Payment.State
 Payment State

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | PaymentStateInvalid is the state when the payment is invalid |
 | open | 1 | PaymentStateOpen is the state when the payment is open |
 | closed | 2 | PaymentStateClosed is the state when the payment is closed |
 | overdrawn | 3 | PaymentStateOverdrawn is the state when the payment is overdrawn |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta1/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta1/genesis.proto
 

 
 <a name="akash.escrow.v1beta1.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by escrow module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1beta1.Account) | repeated |  |
 | `payments` | [Payment](#akash.escrow.v1beta1.Payment) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta2/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta2/query.proto
 

 
 <a name="akash.escrow.v1beta2.QueryAccountsRequest"></a>

 ### QueryAccountsRequest
 QueryAccountRequest is request type for the Query/Account RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta2.QueryAccountsResponse"></a>

 ### QueryAccountsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1beta2.Account) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta2.QueryPaymentsRequest"></a>

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
 
 

 

 
 <a name="akash.escrow.v1beta2.QueryPaymentsResponse"></a>

 ### QueryPaymentsResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `payments` | [FractionalPayment](#akash.escrow.v1beta2.FractionalPayment) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.escrow.v1beta2.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Accounts` | [QueryAccountsRequest](#akash.escrow.v1beta2.QueryAccountsRequest) | [QueryAccountsResponse](#akash.escrow.v1beta2.QueryAccountsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Accounts queries all accounts | GET|/akash/escrow/v1beta2/types/accounts/list|
 | `Payments` | [QueryPaymentsRequest](#akash.escrow.v1beta2.QueryPaymentsRequest) | [QueryPaymentsResponse](#akash.escrow.v1beta2.QueryPaymentsResponse) | buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME Payments queries all payments | GET|/akash/escrow/v1beta2/types/payments/list|
 
  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta2/types.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta2/types.proto
 

 
 <a name="akash.escrow.v1beta2.Account"></a>

 ### Account
 Account stores state for an escrow account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [AccountID](#akash.escrow.v1beta2.AccountID) |  | unique identifier for this escrow account |
 | `owner` | [string](#string) |  | bech32 encoded account address of the owner of this escrow account |
 | `state` | [Account.State](#akash.escrow.v1beta2.Account.State) |  | current state of this escrow account |
 | `balance` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | unspent coins received from the owner's wallet |
 | `transferred` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | total coins spent by this account |
 | `settled_at` | [int64](#int64) |  | block height at which this account was last settled |
 | `depositor` | [string](#string) |  | bech32 encoded account address of the depositor. If depositor is same as the owner, then any incoming coins are added to the Balance. If depositor isn't same as the owner, then any incoming coins are added to the Funds. |
 | `funds` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  | Funds are unspent coins received from the (non-Owner) Depositor's wallet. If there are any funds, they should be spent before spending the Balance. |
 
 

 

 
 <a name="akash.escrow.v1beta2.AccountID"></a>

 ### AccountID
 AccountID is the account identifier

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `scope` | [string](#string) |  |  |
 | `xid` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.escrow.v1beta2.FractionalPayment"></a>

 ### FractionalPayment
 Payment stores state for a payment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `account_id` | [AccountID](#akash.escrow.v1beta2.AccountID) |  |  |
 | `payment_id` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 | `state` | [FractionalPayment.State](#akash.escrow.v1beta2.FractionalPayment.State) |  |  |
 | `rate` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `balance` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `withdrawn` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.escrow.v1beta2.Account.State"></a>

 ### Account.State
 State stores state for an escrow account

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | AccountStateInvalid is an invalid state |
 | open | 1 | AccountOpen is the state when an account is open |
 | closed | 2 | AccountClosed is the state when an account is closed |
 | overdrawn | 3 | AccountOverdrawn is the state when an account is overdrawn |
 

 
 <a name="akash.escrow.v1beta2.FractionalPayment.State"></a>

 ### FractionalPayment.State
 Payment State

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | PaymentStateInvalid is the state when the payment is invalid |
 | open | 1 | PaymentStateOpen is the state when the payment is open |
 | closed | 2 | PaymentStateClosed is the state when the payment is closed |
 | overdrawn | 3 | PaymentStateOverdrawn is the state when the payment is overdrawn |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/escrow/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/escrow/v1beta2/genesis.proto
 

 
 <a name="akash.escrow.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by escrow module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `accounts` | [Account](#akash.escrow.v1beta2.Account) | repeated |  |
 | `payments` | [FractionalPayment](#akash.escrow.v1beta2.FractionalPayment) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1beta3/audit.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta3/audit.proto
 

 
 <a name="akash.audit.v1beta3.AttributesFilters"></a>

 ### AttributesFilters
 AttributesFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditors` | [string](#string) | repeated |  |
 | `owners` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta3.AttributesResponse"></a>

 ### AttributesResponse
 AttributesResponse represents details of deployment along with group details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `attributes` | [AuditedAttributes](#akash.audit.v1beta3.AuditedAttributes) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta3.AuditedAttributes"></a>

 ### AuditedAttributes
 Attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta3.MsgDeleteProviderAttributes"></a>

 ### MsgDeleteProviderAttributes
 MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `keys` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta3.MsgDeleteProviderAttributesResponse"></a>

 ### MsgDeleteProviderAttributesResponse
 MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.

 

 

 
 <a name="akash.audit.v1beta3.MsgSignProviderAttributes"></a>

 ### MsgSignProviderAttributes
 MsgSignProviderAttributes defines an SDK message for signing a provider attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta3.MsgSignProviderAttributesResponse"></a>

 ### MsgSignProviderAttributesResponse
 MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.audit.v1beta3.Provider"></a>

 ### Provider
 Provider stores owner auditor and attributes details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta3.Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1beta3.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `SignProviderAttributes` | [MsgSignProviderAttributes](#akash.audit.v1beta3.MsgSignProviderAttributes) | [MsgSignProviderAttributesResponse](#akash.audit.v1beta3.MsgSignProviderAttributesResponse) | SignProviderAttributes defines a method that signs provider attributes | |
 | `DeleteProviderAttributes` | [MsgDeleteProviderAttributes](#akash.audit.v1beta3.MsgDeleteProviderAttributes) | [MsgDeleteProviderAttributesResponse](#akash.audit.v1beta3.MsgDeleteProviderAttributesResponse) | DeleteProviderAttributes defines a method that deletes provider attributes | |
 
  <!-- end services -->

 
 
 <a name="akash/audit/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta3/query.proto
 

 
 <a name="akash.audit.v1beta3.QueryAllProvidersAttributesRequest"></a>

 ### QueryAllProvidersAttributesRequest
 QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta3.QueryAuditorAttributesRequest"></a>

 ### QueryAuditorAttributesRequest
 QueryAuditorAttributesRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta3.QueryProviderAttributesRequest"></a>

 ### QueryProviderAttributesRequest
 QueryProviderAttributesRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta3.QueryProviderAuditorRequest"></a>

 ### QueryProviderAuditorRequest
 QueryProviderAuditorRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta3.QueryProviderRequest"></a>

 ### QueryProviderRequest
 QueryProviderRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta3.QueryProvidersResponse"></a>

 ### QueryProvidersResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.audit.v1beta3.Provider) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `AllProvidersAttributes` | [QueryAllProvidersAttributesRequest](#akash.audit.v1beta3.QueryAllProvidersAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1beta3.QueryProvidersResponse) | AllProvidersAttributes queries all providers buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1beta3/audit/attributes/list|
 | `ProviderAttributes` | [QueryProviderAttributesRequest](#akash.audit.v1beta3.QueryProviderAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1beta3.QueryProvidersResponse) | ProviderAttributes queries all provider signed attributes buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1beta3/audit/attributes/{owner}/list|
 | `ProviderAuditorAttributes` | [QueryProviderAuditorRequest](#akash.audit.v1beta3.QueryProviderAuditorRequest) | [QueryProvidersResponse](#akash.audit.v1beta3.QueryProvidersResponse) | ProviderAuditorAttributes queries provider signed attributes by specific auditor buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1beta3/audit/attributes/{auditor}/{owner}|
 | `AuditorAttributes` | [QueryAuditorAttributesRequest](#akash.audit.v1beta3.QueryAuditorAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1beta3.QueryProvidersResponse) | AuditorAttributes queries all providers signed by this auditor buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/provider/v1beta3/auditor/{auditor}/list|
 
  <!-- end services -->

 
 
 <a name="akash/audit/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta3/genesis.proto
 

 
 <a name="akash.audit.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by audit module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `attributes` | [AuditedAttributes](#akash.audit.v1beta3.AuditedAttributes) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/audit/v1beta1/audit.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta1/audit.proto
 

 
 <a name="akash.audit.v1beta1.AttributesFilters"></a>

 ### AttributesFilters
 AttributesFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditors` | [string](#string) | repeated |  |
 | `owners` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta1.AttributesResponse"></a>

 ### AttributesResponse
 AttributesResponse represents details of deployment along with group details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `attributes` | [AuditedAttributes](#akash.audit.v1beta1.AuditedAttributes) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta1.AuditedAttributes"></a>

 ### AuditedAttributes
 Attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta1.Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta1.MsgDeleteProviderAttributes"></a>

 ### MsgDeleteProviderAttributes
 MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `keys` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta1.MsgDeleteProviderAttributesResponse"></a>

 ### MsgDeleteProviderAttributesResponse
 MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.

 

 

 
 <a name="akash.audit.v1beta1.MsgSignProviderAttributes"></a>

 ### MsgSignProviderAttributes
 MsgSignProviderAttributes defines an SDK message for signing a provider attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta1.Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta1.MsgSignProviderAttributesResponse"></a>

 ### MsgSignProviderAttributesResponse
 MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.audit.v1beta1.Provider"></a>

 ### Provider
 Provider stores owner auditor and attributes details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta1.Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1beta1.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `SignProviderAttributes` | [MsgSignProviderAttributes](#akash.audit.v1beta1.MsgSignProviderAttributes) | [MsgSignProviderAttributesResponse](#akash.audit.v1beta1.MsgSignProviderAttributesResponse) | SignProviderAttributes defines a method that signs provider attributes | |
 | `DeleteProviderAttributes` | [MsgDeleteProviderAttributes](#akash.audit.v1beta1.MsgDeleteProviderAttributes) | [MsgDeleteProviderAttributesResponse](#akash.audit.v1beta1.MsgDeleteProviderAttributesResponse) | DeleteProviderAttributes defines a method that deletes provider attributes | |
 
  <!-- end services -->

 
 
 <a name="akash/audit/v1beta2/audit.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta2/audit.proto
 

 
 <a name="akash.audit.v1beta2.AttributesFilters"></a>

 ### AttributesFilters
 AttributesFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditors` | [string](#string) | repeated |  |
 | `owners` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta2.AttributesResponse"></a>

 ### AttributesResponse
 AttributesResponse represents details of deployment along with group details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `attributes` | [AuditedAttributes](#akash.audit.v1beta2.AuditedAttributes) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta2.AuditedAttributes"></a>

 ### AuditedAttributes
 Attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta2.Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta2.MsgDeleteProviderAttributes"></a>

 ### MsgDeleteProviderAttributes
 MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `keys` | [string](#string) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta2.MsgDeleteProviderAttributesResponse"></a>

 ### MsgDeleteProviderAttributesResponse
 MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.

 

 

 
 <a name="akash.audit.v1beta2.MsgSignProviderAttributes"></a>

 ### MsgSignProviderAttributes
 MsgSignProviderAttributes defines an SDK message for signing a provider attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta2.Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.audit.v1beta2.MsgSignProviderAttributesResponse"></a>

 ### MsgSignProviderAttributesResponse
 MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.

 

 

 
 <a name="akash.audit.v1beta2.Provider"></a>

 ### Provider
 Provider stores owner auditor and attributes details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `auditor` | [string](#string) |  |  |
 | `attributes` | [akash.base.v1beta2.Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1beta2.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `SignProviderAttributes` | [MsgSignProviderAttributes](#akash.audit.v1beta2.MsgSignProviderAttributes) | [MsgSignProviderAttributesResponse](#akash.audit.v1beta2.MsgSignProviderAttributesResponse) | SignProviderAttributes defines a method that signs provider attributes | |
 | `DeleteProviderAttributes` | [MsgDeleteProviderAttributes](#akash.audit.v1beta2.MsgDeleteProviderAttributes) | [MsgDeleteProviderAttributesResponse](#akash.audit.v1beta2.MsgDeleteProviderAttributesResponse) | DeleteProviderAttributes defines a method that deletes provider attributes | |
 
  <!-- end services -->

 
 
 <a name="akash/audit/v1beta2/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta2/query.proto
 

 
 <a name="akash.audit.v1beta2.QueryAllProvidersAttributesRequest"></a>

 ### QueryAllProvidersAttributesRequest
 QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta2.QueryAuditorAttributesRequest"></a>

 ### QueryAuditorAttributesRequest
 QueryAuditorAttributesRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta2.QueryProviderAttributesRequest"></a>

 ### QueryProviderAttributesRequest
 QueryProviderAttributesRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta2.QueryProviderAuditorRequest"></a>

 ### QueryProviderAuditorRequest
 QueryProviderAuditorRequest is request type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta2.QueryProviderRequest"></a>

 ### QueryProviderRequest
 QueryProviderRequest is request type for the Query/Provider RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `auditor` | [string](#string) |  |  |
 | `owner` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.audit.v1beta2.QueryProvidersResponse"></a>

 ### QueryProvidersResponse
 QueryProvidersResponse is response type for the Query/Providers RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `providers` | [Provider](#akash.audit.v1beta2.Provider) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.audit.v1beta2.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `AllProvidersAttributes` | [QueryAllProvidersAttributesRequest](#akash.audit.v1beta2.QueryAllProvidersAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1beta2.QueryProvidersResponse) | AllProvidersAttributes queries all providers buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1beta2/audit/attributes/list|
 | `ProviderAttributes` | [QueryProviderAttributesRequest](#akash.audit.v1beta2.QueryProviderAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1beta2.QueryProvidersResponse) | ProviderAttributes queries all provider signed attributes buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1beta2/audit/attributes/{owner}/list|
 | `ProviderAuditorAttributes` | [QueryProviderAuditorRequest](#akash.audit.v1beta2.QueryProviderAuditorRequest) | [QueryProvidersResponse](#akash.audit.v1beta2.QueryProvidersResponse) | ProviderAuditorAttributes queries provider signed attributes by specific auditor buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/audit/v1beta2/audit/attributes/{auditor}/{owner}|
 | `AuditorAttributes` | [QueryAuditorAttributesRequest](#akash.audit.v1beta2.QueryAuditorAttributesRequest) | [QueryProvidersResponse](#akash.audit.v1beta2.QueryProvidersResponse) | AuditorAttributes queries all providers signed by this auditor buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE buf:lint:ignore RPC_RESPONSE_STANDARD_NAME | GET|/akash/provider/v1beta2/auditor/{auditor}/list|
 
  <!-- end services -->

 
 
 <a name="akash/audit/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/audit/v1beta2/genesis.proto
 

 
 <a name="akash.audit.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by audit module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `attributes` | [AuditedAttributes](#akash.audit.v1beta2.AuditedAttributes) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta3/bid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/bid.proto
 

 
 <a name="akash.market.v1beta3.Bid"></a>

 ### Bid
 Bid stores BidID, state of bid and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta3.BidID) |  |  |
 | `state` | [Bid.State](#akash.market.v1beta3.Bid.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.BidFilters"></a>

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
 
 

 

 
 <a name="akash.market.v1beta3.BidID"></a>

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
 
 

 

 
 <a name="akash.market.v1beta3.MsgCloseBid"></a>

 ### MsgCloseBid
 MsgCloseBid defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta3.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.MsgCloseBidResponse"></a>

 ### MsgCloseBidResponse
 MsgCloseBidResponse defines the Msg/CloseBid response type.

 

 

 
 <a name="akash.market.v1beta3.MsgCreateBid"></a>

 ### MsgCreateBid
 MsgCreateBid defines an SDK message for creating Bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [OrderID](#akash.market.v1beta3.OrderID) |  |  |
 | `provider` | [string](#string) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.MsgCreateBidResponse"></a>

 ### MsgCreateBidResponse
 MsgCreateBidResponse defines the Msg/CreateBid response type.

 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta3.Bid.State"></a>

 ### Bid.State
 State is an enum which refers to state of bid

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

 
 
 <a name="akash/market/v1beta3/lease.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/lease.proto
 

 
 <a name="akash.market.v1beta3.Lease"></a>

 ### Lease
 Lease stores LeaseID, state of lease and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [LeaseID](#akash.market.v1beta3.LeaseID) |  |  |
 | `state` | [Lease.State](#akash.market.v1beta3.Lease.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 | `closed_on` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.LeaseFilters"></a>

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
 
 

 

 
 <a name="akash.market.v1beta3.LeaseID"></a>

 ### LeaseID
 LeaseID stores bid details of lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.MsgCloseLease"></a>

 ### MsgCloseLease
 MsgCloseLease defines an SDK message for closing order

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [LeaseID](#akash.market.v1beta3.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.MsgCloseLeaseResponse"></a>

 ### MsgCloseLeaseResponse
 MsgCloseLeaseResponse defines the Msg/CloseLease response type.

 

 

 
 <a name="akash.market.v1beta3.MsgCreateLease"></a>

 ### MsgCreateLease
 MsgCreateLease is sent to create a lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta3.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.MsgCreateLeaseResponse"></a>

 ### MsgCreateLeaseResponse
 MsgCreateLeaseResponse is the response from creating a lease

 

 

 
 <a name="akash.market.v1beta3.MsgWithdrawLease"></a>

 ### MsgWithdrawLease
 MsgWithdrawLease defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [LeaseID](#akash.market.v1beta3.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.MsgWithdrawLeaseResponse"></a>

 ### MsgWithdrawLeaseResponse
 MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.

 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta3.Lease.State"></a>

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

 
 
 <a name="akash/market/v1beta3/order.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/order.proto
 

 
 <a name="akash.market.v1beta3.Order"></a>

 ### Order
 Order stores orderID, state of order and other details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order_id` | [OrderID](#akash.market.v1beta3.OrderID) |  |  |
 | `state` | [Order.State](#akash.market.v1beta3.Order.State) |  |  |
 | `spec` | [akash.deployment.v1beta3.GroupSpec](#akash.deployment.v1beta3.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.OrderFilters"></a>

 ### OrderFilters
 OrderFilters defines flags for order list filter

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.OrderID"></a>

 ### OrderID
 OrderID stores owner and all other seq numbers

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta3.Order.State"></a>

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

 
 
 <a name="akash/market/v1beta3/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta3.Msg"></a>

 ### Msg
 Msg defines the market Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateBid` | [MsgCreateBid](#akash.market.v1beta3.MsgCreateBid) | [MsgCreateBidResponse](#akash.market.v1beta3.MsgCreateBidResponse) | CreateBid defines a method to create a bid given proper inputs. | |
 | `CloseBid` | [MsgCloseBid](#akash.market.v1beta3.MsgCloseBid) | [MsgCloseBidResponse](#akash.market.v1beta3.MsgCloseBidResponse) | CloseBid defines a method to close a bid given proper inputs. | |
 | `WithdrawLease` | [MsgWithdrawLease](#akash.market.v1beta3.MsgWithdrawLease) | [MsgWithdrawLeaseResponse](#akash.market.v1beta3.MsgWithdrawLeaseResponse) | WithdrawLease withdraws accrued funds from the lease payment | |
 | `CreateLease` | [MsgCreateLease](#akash.market.v1beta3.MsgCreateLease) | [MsgCreateLeaseResponse](#akash.market.v1beta3.MsgCreateLeaseResponse) | CreateLease creates a new lease | |
 | `CloseLease` | [MsgCloseLease](#akash.market.v1beta3.MsgCloseLease) | [MsgCloseLeaseResponse](#akash.market.v1beta3.MsgCloseLeaseResponse) | CloseLease defines a method to close an order given proper inputs. | |
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta3/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/params.proto
 

 
 <a name="akash.market.v1beta3.Params"></a>

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

 
 
 <a name="akash/market/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/query.proto
 

 
 <a name="akash.market.v1beta3.QueryBidRequest"></a>

 ### QueryBidRequest
 QueryBidRequest is request type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [BidID](#akash.market.v1beta3.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryBidResponse"></a>

 ### QueryBidResponse
 QueryBidResponse is response type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid` | [Bid](#akash.market.v1beta3.Bid) |  |  |
 | `escrow_account` | [akash.escrow.v1beta3.Account](#akash.escrow.v1beta3.Account) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryBidsRequest"></a>

 ### QueryBidsRequest
 QueryBidsRequest is request type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [BidFilters](#akash.market.v1beta3.BidFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryBidsResponse"></a>

 ### QueryBidsResponse
 QueryBidsResponse is response type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bids` | [QueryBidResponse](#akash.market.v1beta3.QueryBidResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryLeaseRequest"></a>

 ### QueryLeaseRequest
 QueryLeaseRequest is request type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [LeaseID](#akash.market.v1beta3.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryLeaseResponse"></a>

 ### QueryLeaseResponse
 QueryLeaseResponse is response type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease` | [Lease](#akash.market.v1beta3.Lease) |  |  |
 | `escrow_payment` | [akash.escrow.v1beta3.FractionalPayment](#akash.escrow.v1beta3.FractionalPayment) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryLeasesRequest"></a>

 ### QueryLeasesRequest
 QueryLeasesRequest is request type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [LeaseFilters](#akash.market.v1beta3.LeaseFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryLeasesResponse"></a>

 ### QueryLeasesResponse
 QueryLeasesResponse is response type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `leases` | [QueryLeaseResponse](#akash.market.v1beta3.QueryLeaseResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryOrderRequest"></a>

 ### QueryOrderRequest
 QueryOrderRequest is request type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [OrderID](#akash.market.v1beta3.OrderID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryOrderResponse"></a>

 ### QueryOrderResponse
 QueryOrderResponse is response type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [Order](#akash.market.v1beta3.Order) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryOrdersRequest"></a>

 ### QueryOrdersRequest
 QueryOrdersRequest is request type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [OrderFilters](#akash.market.v1beta3.OrderFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta3.QueryOrdersResponse"></a>

 ### QueryOrdersResponse
 QueryOrdersResponse is response type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `orders` | [Order](#akash.market.v1beta3.Order) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Orders` | [QueryOrdersRequest](#akash.market.v1beta3.QueryOrdersRequest) | [QueryOrdersResponse](#akash.market.v1beta3.QueryOrdersResponse) | Orders queries orders with filters | GET|/akash/market/v1beta3/orders/list|
 | `Order` | [QueryOrderRequest](#akash.market.v1beta3.QueryOrderRequest) | [QueryOrderResponse](#akash.market.v1beta3.QueryOrderResponse) | Order queries order details | GET|/akash/market/v1beta3/orders/info|
 | `Bids` | [QueryBidsRequest](#akash.market.v1beta3.QueryBidsRequest) | [QueryBidsResponse](#akash.market.v1beta3.QueryBidsResponse) | Bids queries bids with filters | GET|/akash/market/v1beta3/bids/list|
 | `Bid` | [QueryBidRequest](#akash.market.v1beta3.QueryBidRequest) | [QueryBidResponse](#akash.market.v1beta3.QueryBidResponse) | Bid queries bid details | GET|/akash/market/v1beta3/bids/info|
 | `Leases` | [QueryLeasesRequest](#akash.market.v1beta3.QueryLeasesRequest) | [QueryLeasesResponse](#akash.market.v1beta3.QueryLeasesResponse) | Leases queries leases with filters | GET|/akash/market/v1beta3/leases/list|
 | `Lease` | [QueryLeaseRequest](#akash.market.v1beta3.QueryLeaseRequest) | [QueryLeaseResponse](#akash.market.v1beta3.QueryLeaseResponse) | Lease queries lease details | GET|/akash/market/v1beta3/leases/info|
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta3/genesis.proto
 

 
 <a name="akash.market.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by market module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.market.v1beta3.Params) |  |  |
 | `orders` | [Order](#akash.market.v1beta3.Order) | repeated |  |
 | `leases` | [Lease](#akash.market.v1beta3.Lease) | repeated |  |
 | `bids` | [Bid](#akash.market.v1beta3.Bid) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta4/bid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/bid.proto
 

 
 <a name="akash.market.v1beta4.Bid"></a>

 ### Bid
 Bid stores BidID, state of bid and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta4.BidID) |  |  |
 | `state` | [Bid.State](#akash.market.v1beta4.Bid.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 | `resources_offer` | [ResourceOffer](#akash.market.v1beta4.ResourceOffer) | repeated |  |
 
 

 

 
 <a name="akash.market.v1beta4.BidFilters"></a>

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
 
 

 

 
 <a name="akash.market.v1beta4.BidID"></a>

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
 
 

 

 
 <a name="akash.market.v1beta4.MsgCloseBid"></a>

 ### MsgCloseBid
 MsgCloseBid defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta4.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.MsgCloseBidResponse"></a>

 ### MsgCloseBidResponse
 MsgCloseBidResponse defines the Msg/CloseBid response type.

 

 

 
 <a name="akash.market.v1beta4.MsgCreateBid"></a>

 ### MsgCreateBid
 MsgCreateBid defines an SDK message for creating Bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [OrderID](#akash.market.v1beta4.OrderID) |  |  |
 | `provider` | [string](#string) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `resources_offer` | [ResourceOffer](#akash.market.v1beta4.ResourceOffer) | repeated |  |
 
 

 

 
 <a name="akash.market.v1beta4.MsgCreateBidResponse"></a>

 ### MsgCreateBidResponse
 MsgCreateBidResponse defines the Msg/CreateBid response type.

 

 

 
 <a name="akash.market.v1beta4.ResourceOffer"></a>

 ### ResourceOffer
 ResourceOffer describes resources that provider is offering
for deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `resources` | [akash.base.v1beta3.Resources](#akash.base.v1beta3.Resources) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta4.Bid.State"></a>

 ### Bid.State
 State is an enum which refers to state of bid

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

 
 
 <a name="akash/market/v1beta4/lease.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/lease.proto
 

 
 <a name="akash.market.v1beta4.Lease"></a>

 ### Lease
 Lease stores LeaseID, state of lease and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [LeaseID](#akash.market.v1beta4.LeaseID) |  |  |
 | `state` | [Lease.State](#akash.market.v1beta4.Lease.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 | `closed_on` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.LeaseFilters"></a>

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
 
 

 

 
 <a name="akash.market.v1beta4.LeaseID"></a>

 ### LeaseID
 LeaseID stores bid details of lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.MsgCloseLease"></a>

 ### MsgCloseLease
 MsgCloseLease defines an SDK message for closing order

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [LeaseID](#akash.market.v1beta4.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.MsgCloseLeaseResponse"></a>

 ### MsgCloseLeaseResponse
 MsgCloseLeaseResponse defines the Msg/CloseLease response type.

 

 

 
 <a name="akash.market.v1beta4.MsgCreateLease"></a>

 ### MsgCreateLease
 MsgCreateLease is sent to create a lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta4.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.MsgCreateLeaseResponse"></a>

 ### MsgCreateLeaseResponse
 MsgCreateLeaseResponse is the response from creating a lease

 

 

 
 <a name="akash.market.v1beta4.MsgWithdrawLease"></a>

 ### MsgWithdrawLease
 MsgWithdrawLease defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [LeaseID](#akash.market.v1beta4.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.MsgWithdrawLeaseResponse"></a>

 ### MsgWithdrawLeaseResponse
 MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.

 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta4.Lease.State"></a>

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

 
 
 <a name="akash/market/v1beta4/order.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/order.proto
 

 
 <a name="akash.market.v1beta4.Order"></a>

 ### Order
 Order stores orderID, state of order and other details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order_id` | [OrderID](#akash.market.v1beta4.OrderID) |  |  |
 | `state` | [Order.State](#akash.market.v1beta4.Order.State) |  |  |
 | `spec` | [akash.deployment.v1beta3.GroupSpec](#akash.deployment.v1beta3.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.OrderFilters"></a>

 ### OrderFilters
 OrderFilters defines flags for order list filter

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.OrderID"></a>

 ### OrderID
 OrderID stores owner and all other seq numbers

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta4.Order.State"></a>

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

 
 
 <a name="akash/market/v1beta4/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta4.Msg"></a>

 ### Msg
 Msg defines the market Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateBid` | [MsgCreateBid](#akash.market.v1beta4.MsgCreateBid) | [MsgCreateBidResponse](#akash.market.v1beta4.MsgCreateBidResponse) | CreateBid defines a method to create a bid given proper inputs. | |
 | `CloseBid` | [MsgCloseBid](#akash.market.v1beta4.MsgCloseBid) | [MsgCloseBidResponse](#akash.market.v1beta4.MsgCloseBidResponse) | CloseBid defines a method to close a bid given proper inputs. | |
 | `WithdrawLease` | [MsgWithdrawLease](#akash.market.v1beta4.MsgWithdrawLease) | [MsgWithdrawLeaseResponse](#akash.market.v1beta4.MsgWithdrawLeaseResponse) | WithdrawLease withdraws accrued funds from the lease payment | |
 | `CreateLease` | [MsgCreateLease](#akash.market.v1beta4.MsgCreateLease) | [MsgCreateLeaseResponse](#akash.market.v1beta4.MsgCreateLeaseResponse) | CreateLease creates a new lease | |
 | `CloseLease` | [MsgCloseLease](#akash.market.v1beta4.MsgCloseLease) | [MsgCloseLeaseResponse](#akash.market.v1beta4.MsgCloseLeaseResponse) | CloseLease defines a method to close an order given proper inputs. | |
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta4/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/params.proto
 

 
 <a name="akash.market.v1beta4.Params"></a>

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

 
 
 <a name="akash/market/v1beta4/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/query.proto
 

 
 <a name="akash.market.v1beta4.QueryBidRequest"></a>

 ### QueryBidRequest
 QueryBidRequest is request type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [BidID](#akash.market.v1beta4.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryBidResponse"></a>

 ### QueryBidResponse
 QueryBidResponse is response type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid` | [Bid](#akash.market.v1beta4.Bid) |  |  |
 | `escrow_account` | [akash.escrow.v1beta3.Account](#akash.escrow.v1beta3.Account) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryBidsRequest"></a>

 ### QueryBidsRequest
 QueryBidsRequest is request type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [BidFilters](#akash.market.v1beta4.BidFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryBidsResponse"></a>

 ### QueryBidsResponse
 QueryBidsResponse is response type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bids` | [QueryBidResponse](#akash.market.v1beta4.QueryBidResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryLeaseRequest"></a>

 ### QueryLeaseRequest
 QueryLeaseRequest is request type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [LeaseID](#akash.market.v1beta4.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryLeaseResponse"></a>

 ### QueryLeaseResponse
 QueryLeaseResponse is response type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease` | [Lease](#akash.market.v1beta4.Lease) |  |  |
 | `escrow_payment` | [akash.escrow.v1beta3.FractionalPayment](#akash.escrow.v1beta3.FractionalPayment) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryLeasesRequest"></a>

 ### QueryLeasesRequest
 QueryLeasesRequest is request type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [LeaseFilters](#akash.market.v1beta4.LeaseFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryLeasesResponse"></a>

 ### QueryLeasesResponse
 QueryLeasesResponse is response type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `leases` | [QueryLeaseResponse](#akash.market.v1beta4.QueryLeaseResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryOrderRequest"></a>

 ### QueryOrderRequest
 QueryOrderRequest is request type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [OrderID](#akash.market.v1beta4.OrderID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryOrderResponse"></a>

 ### QueryOrderResponse
 QueryOrderResponse is response type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [Order](#akash.market.v1beta4.Order) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryOrdersRequest"></a>

 ### QueryOrdersRequest
 QueryOrdersRequest is request type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [OrderFilters](#akash.market.v1beta4.OrderFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta4.QueryOrdersResponse"></a>

 ### QueryOrdersResponse
 QueryOrdersResponse is response type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `orders` | [Order](#akash.market.v1beta4.Order) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta4.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Orders` | [QueryOrdersRequest](#akash.market.v1beta4.QueryOrdersRequest) | [QueryOrdersResponse](#akash.market.v1beta4.QueryOrdersResponse) | Orders queries orders with filters | GET|/akash/market/v1beta4/orders/list|
 | `Order` | [QueryOrderRequest](#akash.market.v1beta4.QueryOrderRequest) | [QueryOrderResponse](#akash.market.v1beta4.QueryOrderResponse) | Order queries order details | GET|/akash/market/v1beta4/orders/info|
 | `Bids` | [QueryBidsRequest](#akash.market.v1beta4.QueryBidsRequest) | [QueryBidsResponse](#akash.market.v1beta4.QueryBidsResponse) | Bids queries bids with filters | GET|/akash/market/v1beta4/bids/list|
 | `Bid` | [QueryBidRequest](#akash.market.v1beta4.QueryBidRequest) | [QueryBidResponse](#akash.market.v1beta4.QueryBidResponse) | Bid queries bid details | GET|/akash/market/v1beta4/bids/info|
 | `Leases` | [QueryLeasesRequest](#akash.market.v1beta4.QueryLeasesRequest) | [QueryLeasesResponse](#akash.market.v1beta4.QueryLeasesResponse) | Leases queries leases with filters | GET|/akash/market/v1beta4/leases/list|
 | `Lease` | [QueryLeaseRequest](#akash.market.v1beta4.QueryLeaseRequest) | [QueryLeaseResponse](#akash.market.v1beta4.QueryLeaseResponse) | Lease queries lease details | GET|/akash/market/v1beta4/leases/info|
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta4/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta4/genesis.proto
 

 
 <a name="akash.market.v1beta4.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by market module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.market.v1beta4.Params) |  |  |
 | `orders` | [Order](#akash.market.v1beta4.Order) | repeated |  |
 | `leases` | [Lease](#akash.market.v1beta4.Lease) | repeated |  |
 | `bids` | [Bid](#akash.market.v1beta4.Bid) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/market/v1beta2/bid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/bid.proto
 

 
 <a name="akash.market.v1beta2.Bid"></a>

 ### Bid
 Bid stores BidID, state of bid and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta2.BidID) |  |  |
 | `state` | [Bid.State](#akash.market.v1beta2.Bid.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.BidFilters"></a>

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
 
 

 

 
 <a name="akash.market.v1beta2.BidID"></a>

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
 
 

 

 
 <a name="akash.market.v1beta2.MsgCloseBid"></a>

 ### MsgCloseBid
 MsgCloseBid defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta2.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.MsgCloseBidResponse"></a>

 ### MsgCloseBidResponse
 MsgCloseBidResponse defines the Msg/CloseBid response type.

 

 

 
 <a name="akash.market.v1beta2.MsgCreateBid"></a>

 ### MsgCreateBid
 MsgCreateBid defines an SDK message for creating Bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [OrderID](#akash.market.v1beta2.OrderID) |  |  |
 | `provider` | [string](#string) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.MsgCreateBidResponse"></a>

 ### MsgCreateBidResponse
 MsgCreateBidResponse defines the Msg/CreateBid response type.

 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta2.Bid.State"></a>

 ### Bid.State
 State is an enum which refers to state of bid

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

 
 
 <a name="akash/market/v1beta2/lease.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/lease.proto
 

 
 <a name="akash.market.v1beta2.Lease"></a>

 ### Lease
 Lease stores LeaseID, state of lease and price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [LeaseID](#akash.market.v1beta2.LeaseID) |  |  |
 | `state` | [Lease.State](#akash.market.v1beta2.Lease.State) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 | `closed_on` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.LeaseFilters"></a>

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
 
 

 

 
 <a name="akash.market.v1beta2.LeaseID"></a>

 ### LeaseID
 LeaseID stores bid details of lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `provider` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.MsgCloseLease"></a>

 ### MsgCloseLease
 MsgCloseLease defines an SDK message for closing order

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease_id` | [LeaseID](#akash.market.v1beta2.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.MsgCloseLeaseResponse"></a>

 ### MsgCloseLeaseResponse
 MsgCloseLeaseResponse defines the Msg/CloseLease response type.

 

 

 
 <a name="akash.market.v1beta2.MsgCreateLease"></a>

 ### MsgCreateLease
 MsgCreateLease is sent to create a lease

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [BidID](#akash.market.v1beta2.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.MsgCreateLeaseResponse"></a>

 ### MsgCreateLeaseResponse
 MsgCreateLeaseResponse is the response from creating a lease

 

 

 
 <a name="akash.market.v1beta2.MsgWithdrawLease"></a>

 ### MsgWithdrawLease
 MsgWithdrawLease defines an SDK message for closing bid

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid_id` | [LeaseID](#akash.market.v1beta2.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.MsgWithdrawLeaseResponse"></a>

 ### MsgWithdrawLeaseResponse
 MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.

 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta2.Lease.State"></a>

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

 
 
 <a name="akash/market/v1beta2/order.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/order.proto
 

 
 <a name="akash.market.v1beta2.Order"></a>

 ### Order
 Order stores orderID, state of order and other details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order_id` | [OrderID](#akash.market.v1beta2.OrderID) |  |  |
 | `state` | [Order.State](#akash.market.v1beta2.Order.State) |  |  |
 | `spec` | [akash.deployment.v1beta2.GroupSpec](#akash.deployment.v1beta2.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.OrderFilters"></a>

 ### OrderFilters
 OrderFilters defines flags for order list filter

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.OrderID"></a>

 ### OrderID
 OrderID stores owner and all other seq numbers

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 | `oseq` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.market.v1beta2.Order.State"></a>

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

 
 
 <a name="akash/market/v1beta2/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta2.Msg"></a>

 ### Msg
 Msg defines the market Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateBid` | [MsgCreateBid](#akash.market.v1beta2.MsgCreateBid) | [MsgCreateBidResponse](#akash.market.v1beta2.MsgCreateBidResponse) | CreateBid defines a method to create a bid given proper inputs. | |
 | `CloseBid` | [MsgCloseBid](#akash.market.v1beta2.MsgCloseBid) | [MsgCloseBidResponse](#akash.market.v1beta2.MsgCloseBidResponse) | CloseBid defines a method to close a bid given proper inputs. | |
 | `WithdrawLease` | [MsgWithdrawLease](#akash.market.v1beta2.MsgWithdrawLease) | [MsgWithdrawLeaseResponse](#akash.market.v1beta2.MsgWithdrawLeaseResponse) | WithdrawLease withdraws accrued funds from the lease payment | |
 | `CreateLease` | [MsgCreateLease](#akash.market.v1beta2.MsgCreateLease) | [MsgCreateLeaseResponse](#akash.market.v1beta2.MsgCreateLeaseResponse) | CreateLease creates a new lease | |
 | `CloseLease` | [MsgCloseLease](#akash.market.v1beta2.MsgCloseLease) | [MsgCloseLeaseResponse](#akash.market.v1beta2.MsgCloseLeaseResponse) | CloseLease defines a method to close an order given proper inputs. | |
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta2/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/params.proto
 

 
 <a name="akash.market.v1beta2.Params"></a>

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

 
 
 <a name="akash/market/v1beta2/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/query.proto
 

 
 <a name="akash.market.v1beta2.QueryBidRequest"></a>

 ### QueryBidRequest
 QueryBidRequest is request type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [BidID](#akash.market.v1beta2.BidID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryBidResponse"></a>

 ### QueryBidResponse
 QueryBidResponse is response type for the Query/Bid RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bid` | [Bid](#akash.market.v1beta2.Bid) |  |  |
 | `escrow_account` | [akash.escrow.v1beta2.Account](#akash.escrow.v1beta2.Account) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryBidsRequest"></a>

 ### QueryBidsRequest
 QueryBidsRequest is request type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [BidFilters](#akash.market.v1beta2.BidFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryBidsResponse"></a>

 ### QueryBidsResponse
 QueryBidsResponse is response type for the Query/Bids RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `bids` | [QueryBidResponse](#akash.market.v1beta2.QueryBidResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryLeaseRequest"></a>

 ### QueryLeaseRequest
 QueryLeaseRequest is request type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [LeaseID](#akash.market.v1beta2.LeaseID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryLeaseResponse"></a>

 ### QueryLeaseResponse
 QueryLeaseResponse is response type for the Query/Lease RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `lease` | [Lease](#akash.market.v1beta2.Lease) |  |  |
 | `escrow_payment` | [akash.escrow.v1beta2.FractionalPayment](#akash.escrow.v1beta2.FractionalPayment) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryLeasesRequest"></a>

 ### QueryLeasesRequest
 QueryLeasesRequest is request type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [LeaseFilters](#akash.market.v1beta2.LeaseFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryLeasesResponse"></a>

 ### QueryLeasesResponse
 QueryLeasesResponse is response type for the Query/Leases RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `leases` | [QueryLeaseResponse](#akash.market.v1beta2.QueryLeaseResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryOrderRequest"></a>

 ### QueryOrderRequest
 QueryOrderRequest is request type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [OrderID](#akash.market.v1beta2.OrderID) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryOrderResponse"></a>

 ### QueryOrderResponse
 QueryOrderResponse is response type for the Query/Order RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `order` | [Order](#akash.market.v1beta2.Order) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryOrdersRequest"></a>

 ### QueryOrdersRequest
 QueryOrdersRequest is request type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [OrderFilters](#akash.market.v1beta2.OrderFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.market.v1beta2.QueryOrdersResponse"></a>

 ### QueryOrdersResponse
 QueryOrdersResponse is response type for the Query/Orders RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `orders` | [Order](#akash.market.v1beta2.Order) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.market.v1beta2.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Orders` | [QueryOrdersRequest](#akash.market.v1beta2.QueryOrdersRequest) | [QueryOrdersResponse](#akash.market.v1beta2.QueryOrdersResponse) | Orders queries orders with filters | GET|/akash/market/v1beta2/orders/list|
 | `Order` | [QueryOrderRequest](#akash.market.v1beta2.QueryOrderRequest) | [QueryOrderResponse](#akash.market.v1beta2.QueryOrderResponse) | Order queries order details | GET|/akash/market/v1beta2/orders/info|
 | `Bids` | [QueryBidsRequest](#akash.market.v1beta2.QueryBidsRequest) | [QueryBidsResponse](#akash.market.v1beta2.QueryBidsResponse) | Bids queries bids with filters | GET|/akash/market/v1beta2/bids/list|
 | `Bid` | [QueryBidRequest](#akash.market.v1beta2.QueryBidRequest) | [QueryBidResponse](#akash.market.v1beta2.QueryBidResponse) | Bid queries bid details | GET|/akash/market/v1beta2/bids/info|
 | `Leases` | [QueryLeasesRequest](#akash.market.v1beta2.QueryLeasesRequest) | [QueryLeasesResponse](#akash.market.v1beta2.QueryLeasesResponse) | Leases queries leases with filters | GET|/akash/market/v1beta2/leases/list|
 | `Lease` | [QueryLeaseRequest](#akash.market.v1beta2.QueryLeaseRequest) | [QueryLeaseResponse](#akash.market.v1beta2.QueryLeaseResponse) | Lease queries lease details | GET|/akash/market/v1beta2/leases/info|
 
  <!-- end services -->

 
 
 <a name="akash/market/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/market/v1beta2/genesis.proto
 

 
 <a name="akash.market.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by market module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `orders` | [Order](#akash.market.v1beta2.Order) | repeated |  |
 | `leases` | [Lease](#akash.market.v1beta2.Lease) | repeated |  |
 | `params` | [Params](#akash.market.v1beta2.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1beta3/cert.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1beta3/cert.proto
 

 
 <a name="akash.cert.v1beta3.Certificate"></a>

 ### Certificate
 Certificate stores state, certificate and it's public key

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `state` | [Certificate.State](#akash.cert.v1beta3.Certificate.State) |  |  |
 | `cert` | [bytes](#bytes) |  |  |
 | `pubkey` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.CertificateFilter"></a>

 ### CertificateFilter
 CertificateFilter defines filters used to filter certificates

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `serial` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.CertificateID"></a>

 ### CertificateID
 CertificateID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `serial` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.MsgCreateCertificate"></a>

 ### MsgCreateCertificate
 MsgCreateCertificate defines an SDK message for creating certificate

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `cert` | [bytes](#bytes) |  |  |
 | `pubkey` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.MsgCreateCertificateResponse"></a>

 ### MsgCreateCertificateResponse
 MsgCreateCertificateResponse defines the Msg/CreateCertificate response type.

 

 

 
 <a name="akash.cert.v1beta3.MsgRevokeCertificate"></a>

 ### MsgRevokeCertificate
 MsgRevokeCertificate defines an SDK message for revoking certificate

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [CertificateID](#akash.cert.v1beta3.CertificateID) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.MsgRevokeCertificateResponse"></a>

 ### MsgRevokeCertificateResponse
 MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type.

 

 

  <!-- end messages -->

 
 <a name="akash.cert.v1beta3.Certificate.State"></a>

 ### Certificate.State
 State is an enum which refers to state of deployment

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | valid | 1 | CertificateValid denotes state for deployment active |
 | revoked | 2 | CertificateRevoked denotes state for deployment closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.cert.v1beta3.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateCertificate` | [MsgCreateCertificate](#akash.cert.v1beta3.MsgCreateCertificate) | [MsgCreateCertificateResponse](#akash.cert.v1beta3.MsgCreateCertificateResponse) | CreateCertificate defines a method to create new certificate given proper inputs. | |
 | `RevokeCertificate` | [MsgRevokeCertificate](#akash.cert.v1beta3.MsgRevokeCertificate) | [MsgRevokeCertificateResponse](#akash.cert.v1beta3.MsgRevokeCertificateResponse) | RevokeCertificate defines a method to revoke the certificate | |
 
  <!-- end services -->

 
 
 <a name="akash/cert/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1beta3/query.proto
 

 
 <a name="akash.cert.v1beta3.CertificateResponse"></a>

 ### CertificateResponse
 CertificateResponse contains a single X509 certificate and its serial number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificate` | [Certificate](#akash.cert.v1beta3.Certificate) |  |  |
 | `serial` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.QueryCertificatesRequest"></a>

 ### QueryCertificatesRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filter` | [CertificateFilter](#akash.cert.v1beta3.CertificateFilter) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.QueryCertificatesResponse"></a>

 ### QueryCertificatesResponse
 QueryCertificatesResponse is response type for the Query/Certificates RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificates` | [CertificateResponse](#akash.cert.v1beta3.CertificateResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.cert.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Certificates` | [QueryCertificatesRequest](#akash.cert.v1beta3.QueryCertificatesRequest) | [QueryCertificatesResponse](#akash.cert.v1beta3.QueryCertificatesResponse) | Certificates queries certificates | GET|/akash/cert/v1beta3/certificates/list|
 
  <!-- end services -->

 
 
 <a name="akash/cert/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1beta3/genesis.proto
 

 
 <a name="akash.cert.v1beta3.GenesisCertificate"></a>

 ### GenesisCertificate
 GenesisCertificate defines certificate entry at genesis

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `certificate` | [Certificate](#akash.cert.v1beta3.Certificate) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by cert module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificates` | [GenesisCertificate](#akash.cert.v1beta3.GenesisCertificate) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/cert/v1beta2/cert.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1beta2/cert.proto
 

 
 <a name="akash.cert.v1beta2.Certificate"></a>

 ### Certificate
 Certificate stores state, certificate and it's public key

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `state` | [Certificate.State](#akash.cert.v1beta2.Certificate.State) |  |  |
 | `cert` | [bytes](#bytes) |  |  |
 | `pubkey` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.CertificateFilter"></a>

 ### CertificateFilter
 CertificateFilter defines filters used to filter certificates

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `serial` | [string](#string) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.CertificateID"></a>

 ### CertificateID
 CertificateID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `serial` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.MsgCreateCertificate"></a>

 ### MsgCreateCertificate
 MsgCreateCertificate defines an SDK message for creating certificate

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `cert` | [bytes](#bytes) |  |  |
 | `pubkey` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.MsgCreateCertificateResponse"></a>

 ### MsgCreateCertificateResponse
 MsgCreateCertificateResponse defines the Msg/CreateCertificate response type.

 

 

 
 <a name="akash.cert.v1beta2.MsgRevokeCertificate"></a>

 ### MsgRevokeCertificate
 MsgRevokeCertificate defines an SDK message for revoking certificate

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [CertificateID](#akash.cert.v1beta2.CertificateID) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.MsgRevokeCertificateResponse"></a>

 ### MsgRevokeCertificateResponse
 MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type.

 

 

  <!-- end messages -->

 
 <a name="akash.cert.v1beta2.Certificate.State"></a>

 ### Certificate.State
 State is an enum which refers to state of deployment

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | valid | 1 | CertificateValid denotes state for deployment active |
 | revoked | 2 | CertificateRevoked denotes state for deployment closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.cert.v1beta2.Msg"></a>

 ### Msg
 Msg defines the provider Msg service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateCertificate` | [MsgCreateCertificate](#akash.cert.v1beta2.MsgCreateCertificate) | [MsgCreateCertificateResponse](#akash.cert.v1beta2.MsgCreateCertificateResponse) | CreateCertificate defines a method to create new certificate given proper inputs. | |
 | `RevokeCertificate` | [MsgRevokeCertificate](#akash.cert.v1beta2.MsgRevokeCertificate) | [MsgRevokeCertificateResponse](#akash.cert.v1beta2.MsgRevokeCertificateResponse) | RevokeCertificate defines a method to revoke the certificate | |
 
  <!-- end services -->

 
 
 <a name="akash/cert/v1beta2/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1beta2/query.proto
 

 
 <a name="akash.cert.v1beta2.CertificateResponse"></a>

 ### CertificateResponse
 CertificateResponse contains a single X509 certificate and its serial number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificate` | [Certificate](#akash.cert.v1beta2.Certificate) |  |  |
 | `serial` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.QueryCertificatesRequest"></a>

 ### QueryCertificatesRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filter` | [CertificateFilter](#akash.cert.v1beta2.CertificateFilter) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.QueryCertificatesResponse"></a>

 ### QueryCertificatesResponse
 QueryCertificatesResponse is response type for the Query/Certificates RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificates` | [CertificateResponse](#akash.cert.v1beta2.CertificateResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.cert.v1beta2.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Certificates` | [QueryCertificatesRequest](#akash.cert.v1beta2.QueryCertificatesRequest) | [QueryCertificatesResponse](#akash.cert.v1beta2.QueryCertificatesResponse) | Certificates queries certificates | GET|/akash/cert/v1beta3/certificates/list|
 
  <!-- end services -->

 
 
 <a name="akash/cert/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/cert/v1beta2/genesis.proto
 

 
 <a name="akash.cert.v1beta2.GenesisCertificate"></a>

 ### GenesisCertificate
 GenesisCertificate defines certificate entry at genesis

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `certificate` | [Certificate](#akash.cert.v1beta2.Certificate) |  |  |
 
 

 

 
 <a name="akash.cert.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState defines the basic genesis state used by cert module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `certificates` | [GenesisCertificate](#akash.cert.v1beta2.GenesisCertificate) | repeated |  |
 
 

 

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

 
 
 <a name="akash/take/v1beta3/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1beta3/params.proto
 

 
 <a name="akash.take.v1beta3.DenomTakeRate"></a>

 ### DenomTakeRate
 DenomTakeRate describes take rate for specified denom

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `denom` | [string](#string) |  |  |
 | `rate` | [uint32](#uint32) |  |  |
 
 

 

 
 <a name="akash.take.v1beta3.Params"></a>

 ### Params
 Params defines the parameters for the x/take package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `denom_take_rates` | [DenomTakeRate](#akash.take.v1beta3.DenomTakeRate) | repeated | denom -> % take rate |
 | `default_take_rate` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/take/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1beta3/query.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.take.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 
  <!-- end services -->

 
 
 <a name="akash/take/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/take/v1beta3/genesis.proto
 

 
 <a name="akash.take.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `params` | [Params](#akash.take.v1beta3.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

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

 
 
 <a name="akash/base/v1beta3/gpu.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/gpu.proto
 

 
 <a name="akash.base.v1beta3.GPU"></a>

 ### GPU
 GPU stores resource units and cpu config attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `units` | [ResourceValue](#akash.base.v1beta3.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta3/attribute.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/attribute.proto
 

 
 <a name="akash.base.v1beta3.Attribute"></a>

 ### Attribute
 Attribute represents key value pair

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `key` | [string](#string) |  |  |
 | `value` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.base.v1beta3.PlacementRequirements"></a>

 ### PlacementRequirements
 PlacementRequirements

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `signed_by` | [SignedBy](#akash.base.v1beta3.SignedBy) |  | SignedBy list of keys that tenants expect to have signatures from |
 | `attributes` | [Attribute](#akash.base.v1beta3.Attribute) | repeated | Attribute list of attributes tenant expects from the provider |
 
 

 

 
 <a name="akash.base.v1beta3.SignedBy"></a>

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

 
 
 <a name="akash/base/v1beta3/storage.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/storage.proto
 

 
 <a name="akash.base.v1beta3.Storage"></a>

 ### Storage
 Storage stores resource quantity and storage attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `quantity` | [ResourceValue](#akash.base.v1beta3.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta3/resourcevalue.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/resourcevalue.proto
 

 
 <a name="akash.base.v1beta3.ResourceValue"></a>

 ### ResourceValue
 Unit stores cpu, memory and storage metrics

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `val` | [bytes](#bytes) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta3/memory.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/memory.proto
 

 
 <a name="akash.base.v1beta3.Memory"></a>

 ### Memory
 Memory stores resource quantity and memory attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourceValue](#akash.base.v1beta3.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta3/resources.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/resources.proto
 

 
 <a name="akash.base.v1beta3.Resources"></a>

 ### Resources
 Resources describes all available resources types for deployment/node etc
if field is nil resource is not present in the given data-structure

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [uint32](#uint32) |  |  |
 | `cpu` | [CPU](#akash.base.v1beta3.CPU) |  |  |
 | `memory` | [Memory](#akash.base.v1beta3.Memory) |  |  |
 | `storage` | [Storage](#akash.base.v1beta3.Storage) | repeated |  |
 | `gpu` | [GPU](#akash.base.v1beta3.GPU) |  |  |
 | `endpoints` | [Endpoint](#akash.base.v1beta3.Endpoint) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta3/cpu.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/cpu.proto
 

 
 <a name="akash.base.v1beta3.CPU"></a>

 ### CPU
 CPU stores resource units and cpu config attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `units` | [ResourceValue](#akash.base.v1beta3.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta3.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta3/endpoint.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta3/endpoint.proto
 

 
 <a name="akash.base.v1beta3.Endpoint"></a>

 ### Endpoint
 Endpoint describes a publicly accessible IP service

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `kind` | [Endpoint.Kind](#akash.base.v1beta3.Endpoint.Kind) |  |  |
 | `sequence_number` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.base.v1beta3.Endpoint.Kind"></a>

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

 
 
 <a name="akash/base/v1beta1/attribute.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta1/attribute.proto
 

 
 <a name="akash.base.v1beta1.Attribute"></a>

 ### Attribute
 Attribute represents key value pair

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `key` | [string](#string) |  |  |
 | `value` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.base.v1beta1.PlacementRequirements"></a>

 ### PlacementRequirements
 PlacementRequirements

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `signed_by` | [SignedBy](#akash.base.v1beta1.SignedBy) |  | SignedBy list of keys that tenants expect to have signatures from |
 | `attributes` | [Attribute](#akash.base.v1beta1.Attribute) | repeated | Attribute list of attributes tenant expects from the provider |
 
 

 

 
 <a name="akash.base.v1beta1.SignedBy"></a>

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

 
 
 <a name="akash/base/v1beta1/resourcevalue.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta1/resourcevalue.proto
 

 
 <a name="akash.base.v1beta1.ResourceValue"></a>

 ### ResourceValue
 Unit stores cpu, memory and storage metrics

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `val` | [bytes](#bytes) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta1/resource.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta1/resource.proto
 

 
 <a name="akash.base.v1beta1.CPU"></a>

 ### CPU
 CPU stores resource units and cpu config attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `units` | [ResourceValue](#akash.base.v1beta1.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.base.v1beta1.Memory"></a>

 ### Memory
 Memory stores resource quantity and memory attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourceValue](#akash.base.v1beta1.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.base.v1beta1.ResourceUnits"></a>

 ### ResourceUnits
 ResourceUnits describes all available resources types for deployment/node etc
if field is nil resource is not present in the given data-structure

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `cpu` | [CPU](#akash.base.v1beta1.CPU) |  |  |
 | `memory` | [Memory](#akash.base.v1beta1.Memory) |  |  |
 | `storage` | [Storage](#akash.base.v1beta1.Storage) |  |  |
 | `endpoints` | [Endpoint](#akash.base.v1beta1.Endpoint) | repeated |  |
 
 

 

 
 <a name="akash.base.v1beta1.Storage"></a>

 ### Storage
 Storage stores resource quantity and storage attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourceValue](#akash.base.v1beta1.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta1.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta1/endpoint.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta1/endpoint.proto
 

 
 <a name="akash.base.v1beta1.Endpoint"></a>

 ### Endpoint
 Endpoint describes a publicly accessible IP service

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `kind` | [Endpoint.Kind](#akash.base.v1beta1.Endpoint.Kind) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.base.v1beta1.Endpoint.Kind"></a>

 ### Endpoint.Kind
 This describes how the endpoint is implemented when the lease is deployed

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | SHARED_HTTP | 0 | Describes an endpoint that becomes a Kubernetes Ingress |
 | RANDOM_PORT | 1 | Describes an endpoint that becomes a Kubernetes NodePort |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta2/attribute.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta2/attribute.proto
 

 
 <a name="akash.base.v1beta2.Attribute"></a>

 ### Attribute
 Attribute represents key value pair

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `key` | [string](#string) |  |  |
 | `value` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.base.v1beta2.PlacementRequirements"></a>

 ### PlacementRequirements
 PlacementRequirements

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `signed_by` | [SignedBy](#akash.base.v1beta2.SignedBy) |  | SignedBy list of keys that tenants expect to have signatures from |
 | `attributes` | [Attribute](#akash.base.v1beta2.Attribute) | repeated | Attribute list of attributes tenant expects from the provider |
 
 

 

 
 <a name="akash.base.v1beta2.SignedBy"></a>

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

 
 
 <a name="akash/base/v1beta2/resourcevalue.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta2/resourcevalue.proto
 

 
 <a name="akash.base.v1beta2.ResourceValue"></a>

 ### ResourceValue
 Unit stores cpu, memory and storage metrics

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `val` | [bytes](#bytes) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta2/resource.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta2/resource.proto
 

 
 <a name="akash.base.v1beta2.CPU"></a>

 ### CPU
 CPU stores resource units and cpu config attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `units` | [ResourceValue](#akash.base.v1beta2.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.base.v1beta2.Memory"></a>

 ### Memory
 Memory stores resource quantity and memory attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `quantity` | [ResourceValue](#akash.base.v1beta2.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 
 

 

 
 <a name="akash.base.v1beta2.Storage"></a>

 ### Storage
 Storage stores resource quantity and storage attributes

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `quantity` | [ResourceValue](#akash.base.v1beta2.ResourceValue) |  |  |
 | `attributes` | [Attribute](#akash.base.v1beta2.Attribute) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta2/resourceunits.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta2/resourceunits.proto
 

 
 <a name="akash.base.v1beta2.ResourceUnits"></a>

 ### ResourceUnits
 ResourceUnits describes all available resources types for deployment/node etc
if field is nil resource is not present in the given data-structure

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `cpu` | [CPU](#akash.base.v1beta2.CPU) |  |  |
 | `memory` | [Memory](#akash.base.v1beta2.Memory) |  |  |
 | `storage` | [Storage](#akash.base.v1beta2.Storage) | repeated |  |
 | `endpoints` | [Endpoint](#akash.base.v1beta2.Endpoint) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/base/v1beta2/endpoint.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/base/v1beta2/endpoint.proto
 

 
 <a name="akash.base.v1beta2.Endpoint"></a>

 ### Endpoint
 Endpoint describes a publicly accessible IP service

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `kind` | [Endpoint.Kind](#akash.base.v1beta2.Endpoint.Kind) |  |  |
 | `sequence_number` | [uint32](#uint32) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.base.v1beta2.Endpoint.Kind"></a>

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

 
 
 <a name="akash/deployment/v1beta3/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/group.proto
 

 
 <a name="akash.deployment.v1beta3.Group"></a>

 ### Group
 Group stores group id, state and specifications of group

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group_id` | [GroupID](#akash.deployment.v1beta3.GroupID) |  |  |
 | `state` | [Group.State](#akash.deployment.v1beta3.Group.State) |  |  |
 | `group_spec` | [GroupSpec](#akash.deployment.v1beta3.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta3.Group.State"></a>

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

 
 
 <a name="akash/deployment/v1beta3/deployment.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/deployment.proto
 

 
 <a name="akash.deployment.v1beta3.Deployment"></a>

 ### Deployment
 Deployment stores deploymentID, state and version details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment_id` | [DeploymentID](#akash.deployment.v1beta3.DeploymentID) |  |  |
 | `state` | [Deployment.State](#akash.deployment.v1beta3.Deployment.State) |  |  |
 | `version` | [bytes](#bytes) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.DeploymentFilters"></a>

 ### DeploymentFilters
 DeploymentFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.DeploymentID"></a>

 ### DeploymentID
 DeploymentID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta3.Deployment.State"></a>

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

 
 
 <a name="akash/deployment/v1beta3/deploymentmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/deploymentmsg.proto
 

 
 <a name="akash.deployment.v1beta3.MsgCloseDeployment"></a>

 ### MsgCloseDeployment
 MsgCloseDeployment defines an SDK message for closing deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta3.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgCloseDeploymentResponse"></a>

 ### MsgCloseDeploymentResponse
 MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta3.MsgCreateDeployment"></a>

 ### MsgCreateDeployment
 MsgCreateDeployment defines an SDK message for creating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta3.DeploymentID) |  |  |
 | `groups` | [GroupSpec](#akash.deployment.v1beta3.GroupSpec) | repeated |  |
 | `version` | [bytes](#bytes) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `depositor` | [string](#string) |  | Depositor pays for the deposit |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgCreateDeploymentResponse"></a>

 ### MsgCreateDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta3.MsgDepositDeployment"></a>

 ### MsgDepositDeployment
 MsgDepositDeployment deposits more funds into the deposit account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta3.DeploymentID) |  |  |
 | `amount` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `depositor` | [string](#string) |  | Depositor pays for the deposit |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgDepositDeploymentResponse"></a>

 ### MsgDepositDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta3.MsgUpdateDeployment"></a>

 ### MsgUpdateDeployment
 MsgUpdateDeployment defines an SDK message for updating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta3.DeploymentID) |  |  |
 | `version` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgUpdateDeploymentResponse"></a>

 ### MsgUpdateDeploymentResponse
 MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/groupmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/groupmsg.proto
 

 
 <a name="akash.deployment.v1beta3.MsgCloseGroup"></a>

 ### MsgCloseGroup
 MsgCloseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta3.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgCloseGroupResponse"></a>

 ### MsgCloseGroupResponse
 MsgCloseGroupResponse defines the Msg/CloseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta3.MsgPauseGroup"></a>

 ### MsgPauseGroup
 MsgPauseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta3.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgPauseGroupResponse"></a>

 ### MsgPauseGroupResponse
 MsgPauseGroupResponse defines the Msg/PauseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta3.MsgStartGroup"></a>

 ### MsgStartGroup
 MsgStartGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta3.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.MsgStartGroupResponse"></a>

 ### MsgStartGroupResponse
 MsgStartGroupResponse defines the Msg/StartGroup response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta3.Msg"></a>

 ### Msg
 Msg defines the deployment Msg service.

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateDeployment` | [MsgCreateDeployment](#akash.deployment.v1beta3.MsgCreateDeployment) | [MsgCreateDeploymentResponse](#akash.deployment.v1beta3.MsgCreateDeploymentResponse) | CreateDeployment defines a method to create new deployment given proper inputs. | |
 | `DepositDeployment` | [MsgDepositDeployment](#akash.deployment.v1beta3.MsgDepositDeployment) | [MsgDepositDeploymentResponse](#akash.deployment.v1beta3.MsgDepositDeploymentResponse) | DepositDeployment deposits more funds into the deployment account | |
 | `UpdateDeployment` | [MsgUpdateDeployment](#akash.deployment.v1beta3.MsgUpdateDeployment) | [MsgUpdateDeploymentResponse](#akash.deployment.v1beta3.MsgUpdateDeploymentResponse) | UpdateDeployment defines a method to update a deployment given proper inputs. | |
 | `CloseDeployment` | [MsgCloseDeployment](#akash.deployment.v1beta3.MsgCloseDeployment) | [MsgCloseDeploymentResponse](#akash.deployment.v1beta3.MsgCloseDeploymentResponse) | CloseDeployment defines a method to close a deployment given proper inputs. | |
 | `CloseGroup` | [MsgCloseGroup](#akash.deployment.v1beta3.MsgCloseGroup) | [MsgCloseGroupResponse](#akash.deployment.v1beta3.MsgCloseGroupResponse) | CloseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `PauseGroup` | [MsgPauseGroup](#akash.deployment.v1beta3.MsgPauseGroup) | [MsgPauseGroupResponse](#akash.deployment.v1beta3.MsgPauseGroupResponse) | PauseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `StartGroup` | [MsgStartGroup](#akash.deployment.v1beta3.MsgStartGroup) | [MsgStartGroupResponse](#akash.deployment.v1beta3.MsgStartGroupResponse) | StartGroup defines a method to close a group of a deployment given proper inputs. | |
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/groupspec.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/groupspec.proto
 

 
 <a name="akash.deployment.v1beta3.GroupSpec"></a>

 ### GroupSpec
 GroupSpec stores group specifications

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `requirements` | [akash.base.v1beta3.PlacementRequirements](#akash.base.v1beta3.PlacementRequirements) |  |  |
 | `resources` | [ResourceUnit](#akash.deployment.v1beta3.ResourceUnit) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/groupid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/groupid.proto
 

 
 <a name="akash.deployment.v1beta3.GroupID"></a>

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

 
 
 <a name="akash/deployment/v1beta3/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/params.proto
 

 
 <a name="akash.deployment.v1beta3.Params"></a>

 ### Params
 Params defines the parameters for the x/deployment package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `min_deposits` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/query.proto
 

 
 <a name="akash.deployment.v1beta3.QueryDeploymentRequest"></a>

 ### QueryDeploymentRequest
 QueryDeploymentRequest is request type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta3.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.QueryDeploymentResponse"></a>

 ### QueryDeploymentResponse
 QueryDeploymentResponse is response type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [Deployment](#akash.deployment.v1beta3.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta3.Group) | repeated |  |
 | `escrow_account` | [akash.escrow.v1beta3.Account](#akash.escrow.v1beta3.Account) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.QueryDeploymentsRequest"></a>

 ### QueryDeploymentsRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [DeploymentFilters](#akash.deployment.v1beta3.DeploymentFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.QueryDeploymentsResponse"></a>

 ### QueryDeploymentsResponse
 QueryDeploymentsResponse is response type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [QueryDeploymentResponse](#akash.deployment.v1beta3.QueryDeploymentResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.QueryGroupRequest"></a>

 ### QueryGroupRequest
 QueryGroupRequest is request type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta3.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.QueryGroupResponse"></a>

 ### QueryGroupResponse
 QueryGroupResponse is response type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group` | [Group](#akash.deployment.v1beta3.Group) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta3.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Deployments` | [QueryDeploymentsRequest](#akash.deployment.v1beta3.QueryDeploymentsRequest) | [QueryDeploymentsResponse](#akash.deployment.v1beta3.QueryDeploymentsResponse) | Deployments queries deployments | GET|/akash/deployment/v1beta3/deployments/list|
 | `Deployment` | [QueryDeploymentRequest](#akash.deployment.v1beta3.QueryDeploymentRequest) | [QueryDeploymentResponse](#akash.deployment.v1beta3.QueryDeploymentResponse) | Deployment queries deployment details | GET|/akash/deployment/v1beta3/deployments/info|
 | `Group` | [QueryGroupRequest](#akash.deployment.v1beta3.QueryGroupRequest) | [QueryGroupResponse](#akash.deployment.v1beta3.QueryGroupResponse) | Group queries group details | GET|/akash/deployment/v1beta3/groups/info|
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/resourceunit.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/resourceunit.proto
 

 
 <a name="akash.deployment.v1beta3.ResourceUnit"></a>

 ### ResourceUnit
 ResourceUnit extends Resources and adds Count along with the Price

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `resource` | [akash.base.v1beta3.Resources](#akash.base.v1beta3.Resources) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/authz.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/authz.proto
 

 
 <a name="akash.deployment.v1beta3.DepositDeploymentAuthorization"></a>

 ### DepositDeploymentAuthorization
 DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
the granter's account for a deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `spend_limit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  | SpendLimit is the amount the grantee is authorized to spend from the granter's account for the purpose of deployment. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta3/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta3/genesis.proto
 

 
 <a name="akash.deployment.v1beta3.GenesisDeployment"></a>

 ### GenesisDeployment
 GenesisDeployment defines the basic genesis state used by deployment module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [Deployment](#akash.deployment.v1beta3.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta3.Group) | repeated |  |
 
 

 

 
 <a name="akash.deployment.v1beta3.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [GenesisDeployment](#akash.deployment.v1beta3.GenesisDeployment) | repeated |  |
 | `params` | [Params](#akash.deployment.v1beta3.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta1/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta1/group.proto
 

 
 <a name="akash.deployment.v1beta1.Group"></a>

 ### Group
 Group stores group id, state and specifications of group

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group_id` | [GroupID](#akash.deployment.v1beta1.GroupID) |  |  |
 | `state` | [Group.State](#akash.deployment.v1beta1.Group.State) |  |  |
 | `group_spec` | [GroupSpec](#akash.deployment.v1beta1.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.GroupID"></a>

 ### GroupID
 GroupID stores owner, deployment sequence number and group sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `gseq` | [uint32](#uint32) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.GroupSpec"></a>

 ### GroupSpec
 GroupSpec stores group specifications

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `requirements` | [akash.base.v1beta1.PlacementRequirements](#akash.base.v1beta1.PlacementRequirements) |  |  |
 | `resources` | [Resource](#akash.deployment.v1beta1.Resource) | repeated |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgCloseGroup"></a>

 ### MsgCloseGroup
 MsgCloseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgCloseGroupResponse"></a>

 ### MsgCloseGroupResponse
 MsgCloseGroupResponse defines the Msg/CloseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta1.MsgPauseGroup"></a>

 ### MsgPauseGroup
 MsgPauseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgPauseGroupResponse"></a>

 ### MsgPauseGroupResponse
 MsgPauseGroupResponse defines the Msg/PauseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta1.MsgStartGroup"></a>

 ### MsgStartGroup
 MsgStartGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgStartGroupResponse"></a>

 ### MsgStartGroupResponse
 MsgStartGroupResponse defines the Msg/StartGroup response type.

 

 

 
 <a name="akash.deployment.v1beta1.Resource"></a>

 ### Resource
 Resource stores unit, total count and price of resource

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `resources` | [akash.base.v1beta1.ResourceUnits](#akash.base.v1beta1.ResourceUnits) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 | `price` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta1.Group.State"></a>

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

 
 
 <a name="akash/deployment/v1beta1/deployment.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta1/deployment.proto
 

 
 <a name="akash.deployment.v1beta1.Deployment"></a>

 ### Deployment
 Deployment stores deploymentID, state and version details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment_id` | [DeploymentID](#akash.deployment.v1beta1.DeploymentID) |  |  |
 | `state` | [Deployment.State](#akash.deployment.v1beta1.Deployment.State) |  |  |
 | `version` | [bytes](#bytes) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.DeploymentFilters"></a>

 ### DeploymentFilters
 DeploymentFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.DeploymentID"></a>

 ### DeploymentID
 DeploymentID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgCloseDeployment"></a>

 ### MsgCloseDeployment
 MsgCloseDeployment defines an SDK message for closing deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta1.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgCloseDeploymentResponse"></a>

 ### MsgCloseDeploymentResponse
 MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta1.MsgCreateDeployment"></a>

 ### MsgCreateDeployment
 MsgCreateDeployment defines an SDK message for creating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta1.DeploymentID) |  |  |
 | `groups` | [GroupSpec](#akash.deployment.v1beta1.GroupSpec) | repeated |  |
 | `version` | [bytes](#bytes) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgCreateDeploymentResponse"></a>

 ### MsgCreateDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta1.MsgDepositDeployment"></a>

 ### MsgDepositDeployment
 MsgDepositDeployment deposits more funds into the deposit account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta1.DeploymentID) |  |  |
 | `amount` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgDepositDeploymentResponse"></a>

 ### MsgDepositDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta1.MsgUpdateDeployment"></a>

 ### MsgUpdateDeployment
 MsgUpdateDeployment defines an SDK message for updating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta1.DeploymentID) |  |  |
 | `groups` | [GroupSpec](#akash.deployment.v1beta1.GroupSpec) | repeated |  |
 | `version` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.MsgUpdateDeploymentResponse"></a>

 ### MsgUpdateDeploymentResponse
 MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.

 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta1.Deployment.State"></a>

 ### Deployment.State
 State is an enum which refers to state of deployment

 | Name | Number | Description |
 | ---- | ------ | ----------- |
 | invalid | 0 | Prefix should start with 0 in enum. So declaring dummy state |
 | active | 1 | DeploymentActive denotes state for deployment active |
 | closed | 2 | DeploymentClosed denotes state for deployment closed |
 

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta1.Msg"></a>

 ### Msg
 Msg defines the deployment Msg service.

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateDeployment` | [MsgCreateDeployment](#akash.deployment.v1beta1.MsgCreateDeployment) | [MsgCreateDeploymentResponse](#akash.deployment.v1beta1.MsgCreateDeploymentResponse) | CreateDeployment defines a method to create new deployment given proper inputs. | |
 | `DepositDeployment` | [MsgDepositDeployment](#akash.deployment.v1beta1.MsgDepositDeployment) | [MsgDepositDeploymentResponse](#akash.deployment.v1beta1.MsgDepositDeploymentResponse) | DepositDeployment deposits more funds into the deployment account | |
 | `UpdateDeployment` | [MsgUpdateDeployment](#akash.deployment.v1beta1.MsgUpdateDeployment) | [MsgUpdateDeploymentResponse](#akash.deployment.v1beta1.MsgUpdateDeploymentResponse) | UpdateDeployment defines a method to update a deployment given proper inputs. | |
 | `CloseDeployment` | [MsgCloseDeployment](#akash.deployment.v1beta1.MsgCloseDeployment) | [MsgCloseDeploymentResponse](#akash.deployment.v1beta1.MsgCloseDeploymentResponse) | CloseDeployment defines a method to close a deployment given proper inputs. | |
 | `CloseGroup` | [MsgCloseGroup](#akash.deployment.v1beta1.MsgCloseGroup) | [MsgCloseGroupResponse](#akash.deployment.v1beta1.MsgCloseGroupResponse) | CloseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `PauseGroup` | [MsgPauseGroup](#akash.deployment.v1beta1.MsgPauseGroup) | [MsgPauseGroupResponse](#akash.deployment.v1beta1.MsgPauseGroupResponse) | PauseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `StartGroup` | [MsgStartGroup](#akash.deployment.v1beta1.MsgStartGroup) | [MsgStartGroupResponse](#akash.deployment.v1beta1.MsgStartGroupResponse) | StartGroup defines a method to close a group of a deployment given proper inputs. | |
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta1/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta1/params.proto
 

 
 <a name="akash.deployment.v1beta1.Params"></a>

 ### Params
 Params defines the parameters for the x/deployment package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment_min_deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta1/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta1/query.proto
 

 
 <a name="akash.deployment.v1beta1.QueryDeploymentRequest"></a>

 ### QueryDeploymentRequest
 QueryDeploymentRequest is request type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta1.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.QueryDeploymentResponse"></a>

 ### QueryDeploymentResponse
 QueryDeploymentResponse is response type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [Deployment](#akash.deployment.v1beta1.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta1.Group) | repeated |  |
 | `escrow_account` | [akash.escrow.v1beta1.Account](#akash.escrow.v1beta1.Account) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.QueryDeploymentsRequest"></a>

 ### QueryDeploymentsRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [DeploymentFilters](#akash.deployment.v1beta1.DeploymentFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.QueryDeploymentsResponse"></a>

 ### QueryDeploymentsResponse
 QueryDeploymentsResponse is response type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [QueryDeploymentResponse](#akash.deployment.v1beta1.QueryDeploymentResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.QueryGroupRequest"></a>

 ### QueryGroupRequest
 QueryGroupRequest is request type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta1.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.QueryGroupResponse"></a>

 ### QueryGroupResponse
 QueryGroupResponse is response type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group` | [Group](#akash.deployment.v1beta1.Group) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta1.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Deployments` | [QueryDeploymentsRequest](#akash.deployment.v1beta1.QueryDeploymentsRequest) | [QueryDeploymentsResponse](#akash.deployment.v1beta1.QueryDeploymentsResponse) | Deployments queries deployments | GET|/akash/deployment/v1beta1/deployments/list|
 | `Deployment` | [QueryDeploymentRequest](#akash.deployment.v1beta1.QueryDeploymentRequest) | [QueryDeploymentResponse](#akash.deployment.v1beta1.QueryDeploymentResponse) | Deployment queries deployment details | GET|/akash/deployment/v1beta1/deployments/info|
 | `Group` | [QueryGroupRequest](#akash.deployment.v1beta1.QueryGroupRequest) | [QueryGroupResponse](#akash.deployment.v1beta1.QueryGroupResponse) | Group queries group details | GET|/akash/deployment/v1beta1/groups/info|
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta1/authz.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta1/authz.proto
 

 
 <a name="akash.deployment.v1beta1.DepositDeploymentAuthorization"></a>

 ### DepositDeploymentAuthorization
 DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
the granter's account for a deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `spend_limit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  | SpendLimit is the amount the grantee is authorized to spend from the granter's account for the purpose of deployment. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta1/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta1/genesis.proto
 

 
 <a name="akash.deployment.v1beta1.GenesisDeployment"></a>

 ### GenesisDeployment
 GenesisDeployment defines the basic genesis state used by deployment module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [Deployment](#akash.deployment.v1beta1.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta1.Group) | repeated |  |
 
 

 

 
 <a name="akash.deployment.v1beta1.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [GenesisDeployment](#akash.deployment.v1beta1.GenesisDeployment) | repeated |  |
 | `params` | [Params](#akash.deployment.v1beta1.Params) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/group.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/group.proto
 

 
 <a name="akash.deployment.v1beta2.Group"></a>

 ### Group
 Group stores group id, state and specifications of group

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group_id` | [GroupID](#akash.deployment.v1beta2.GroupID) |  |  |
 | `state` | [Group.State](#akash.deployment.v1beta2.Group.State) |  |  |
 | `group_spec` | [GroupSpec](#akash.deployment.v1beta2.GroupSpec) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta2.Group.State"></a>

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

 
 
 <a name="akash/deployment/v1beta2/deployment.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/deployment.proto
 

 
 <a name="akash.deployment.v1beta2.Deployment"></a>

 ### Deployment
 Deployment stores deploymentID, state and version details

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment_id` | [DeploymentID](#akash.deployment.v1beta2.DeploymentID) |  |  |
 | `state` | [Deployment.State](#akash.deployment.v1beta2.Deployment.State) |  |  |
 | `version` | [bytes](#bytes) |  |  |
 | `created_at` | [int64](#int64) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.DeploymentFilters"></a>

 ### DeploymentFilters
 DeploymentFilters defines filters used to filter deployments

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 | `state` | [string](#string) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.DeploymentID"></a>

 ### DeploymentID
 DeploymentID stores owner and sequence number

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `owner` | [string](#string) |  |  |
 | `dseq` | [uint64](#uint64) |  |  |
 
 

 

  <!-- end messages -->

 
 <a name="akash.deployment.v1beta2.Deployment.State"></a>

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

 
 
 <a name="akash/deployment/v1beta2/deploymentmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/deploymentmsg.proto
 

 
 <a name="akash.deployment.v1beta2.MsgCloseDeployment"></a>

 ### MsgCloseDeployment
 MsgCloseDeployment defines an SDK message for closing deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta2.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgCloseDeploymentResponse"></a>

 ### MsgCloseDeploymentResponse
 MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta2.MsgCreateDeployment"></a>

 ### MsgCreateDeployment
 MsgCreateDeployment defines an SDK message for creating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta2.DeploymentID) |  |  |
 | `groups` | [GroupSpec](#akash.deployment.v1beta2.GroupSpec) | repeated |  |
 | `version` | [bytes](#bytes) |  |  |
 | `deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `depositor` | [string](#string) |  | Depositor pays for the deposit |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgCreateDeploymentResponse"></a>

 ### MsgCreateDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta2.MsgDepositDeployment"></a>

 ### MsgDepositDeployment
 MsgDepositDeployment deposits more funds into the deposit account

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta2.DeploymentID) |  |  |
 | `amount` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 | `depositor` | [string](#string) |  | Depositor pays for the deposit |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgDepositDeploymentResponse"></a>

 ### MsgDepositDeploymentResponse
 MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.

 

 

 
 <a name="akash.deployment.v1beta2.MsgUpdateDeployment"></a>

 ### MsgUpdateDeployment
 MsgUpdateDeployment defines an SDK message for updating deployment

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta2.DeploymentID) |  |  |
 | `version` | [bytes](#bytes) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgUpdateDeploymentResponse"></a>

 ### MsgUpdateDeploymentResponse
 MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/groupmsg.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/groupmsg.proto
 

 
 <a name="akash.deployment.v1beta2.MsgCloseGroup"></a>

 ### MsgCloseGroup
 MsgCloseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta2.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgCloseGroupResponse"></a>

 ### MsgCloseGroupResponse
 MsgCloseGroupResponse defines the Msg/CloseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta2.MsgPauseGroup"></a>

 ### MsgPauseGroup
 MsgPauseGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta2.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgPauseGroupResponse"></a>

 ### MsgPauseGroupResponse
 MsgPauseGroupResponse defines the Msg/PauseGroup response type.

 

 

 
 <a name="akash.deployment.v1beta2.MsgStartGroup"></a>

 ### MsgStartGroup
 MsgStartGroup defines SDK message to close a single Group within a Deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta2.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.MsgStartGroupResponse"></a>

 ### MsgStartGroupResponse
 MsgStartGroupResponse defines the Msg/StartGroup response type.

 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/service.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/service.proto
 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta2.Msg"></a>

 ### Msg
 Msg defines the deployment Msg service.

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `CreateDeployment` | [MsgCreateDeployment](#akash.deployment.v1beta2.MsgCreateDeployment) | [MsgCreateDeploymentResponse](#akash.deployment.v1beta2.MsgCreateDeploymentResponse) | CreateDeployment defines a method to create new deployment given proper inputs. | |
 | `DepositDeployment` | [MsgDepositDeployment](#akash.deployment.v1beta2.MsgDepositDeployment) | [MsgDepositDeploymentResponse](#akash.deployment.v1beta2.MsgDepositDeploymentResponse) | DepositDeployment deposits more funds into the deployment account | |
 | `UpdateDeployment` | [MsgUpdateDeployment](#akash.deployment.v1beta2.MsgUpdateDeployment) | [MsgUpdateDeploymentResponse](#akash.deployment.v1beta2.MsgUpdateDeploymentResponse) | UpdateDeployment defines a method to update a deployment given proper inputs. | |
 | `CloseDeployment` | [MsgCloseDeployment](#akash.deployment.v1beta2.MsgCloseDeployment) | [MsgCloseDeploymentResponse](#akash.deployment.v1beta2.MsgCloseDeploymentResponse) | CloseDeployment defines a method to close a deployment given proper inputs. | |
 | `CloseGroup` | [MsgCloseGroup](#akash.deployment.v1beta2.MsgCloseGroup) | [MsgCloseGroupResponse](#akash.deployment.v1beta2.MsgCloseGroupResponse) | CloseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `PauseGroup` | [MsgPauseGroup](#akash.deployment.v1beta2.MsgPauseGroup) | [MsgPauseGroupResponse](#akash.deployment.v1beta2.MsgPauseGroupResponse) | PauseGroup defines a method to close a group of a deployment given proper inputs. | |
 | `StartGroup` | [MsgStartGroup](#akash.deployment.v1beta2.MsgStartGroup) | [MsgStartGroupResponse](#akash.deployment.v1beta2.MsgStartGroupResponse) | StartGroup defines a method to close a group of a deployment given proper inputs. | |
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/groupspec.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/groupspec.proto
 

 
 <a name="akash.deployment.v1beta2.GroupSpec"></a>

 ### GroupSpec
 GroupSpec stores group specifications

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `name` | [string](#string) |  |  |
 | `requirements` | [akash.base.v1beta2.PlacementRequirements](#akash.base.v1beta2.PlacementRequirements) |  |  |
 | `resources` | [Resource](#akash.deployment.v1beta2.Resource) | repeated |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/groupid.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/groupid.proto
 

 
 <a name="akash.deployment.v1beta2.GroupID"></a>

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

 
 
 <a name="akash/deployment/v1beta2/resource.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/resource.proto
 

 
 <a name="akash.deployment.v1beta2.Resource"></a>

 ### Resource
 Resource stores unit, total count and price of resource

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `resources` | [akash.base.v1beta2.ResourceUnits](#akash.base.v1beta2.ResourceUnits) |  |  |
 | `count` | [uint32](#uint32) |  |  |
 | `price` | [cosmos.base.v1beta1.DecCoin](#cosmos.base.v1beta1.DecCoin) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/params.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/params.proto
 

 
 <a name="akash.deployment.v1beta2.Params"></a>

 ### Params
 Params defines the parameters for the x/deployment package

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment_min_deposit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/query.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/query.proto
 

 
 <a name="akash.deployment.v1beta2.QueryDeploymentRequest"></a>

 ### QueryDeploymentRequest
 QueryDeploymentRequest is request type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [DeploymentID](#akash.deployment.v1beta2.DeploymentID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.QueryDeploymentResponse"></a>

 ### QueryDeploymentResponse
 QueryDeploymentResponse is response type for the Query/Deployment RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [Deployment](#akash.deployment.v1beta2.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta2.Group) | repeated |  |
 | `escrow_account` | [akash.escrow.v1beta2.Account](#akash.escrow.v1beta2.Account) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.QueryDeploymentsRequest"></a>

 ### QueryDeploymentsRequest
 QueryDeploymentsRequest is request type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `filters` | [DeploymentFilters](#akash.deployment.v1beta2.DeploymentFilters) |  |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageRequest](#cosmos.base.query.v1beta1.PageRequest) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.QueryDeploymentsResponse"></a>

 ### QueryDeploymentsResponse
 QueryDeploymentsResponse is response type for the Query/Deployments RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [QueryDeploymentResponse](#akash.deployment.v1beta2.QueryDeploymentResponse) | repeated |  |
 | `pagination` | [cosmos.base.query.v1beta1.PageResponse](#cosmos.base.query.v1beta1.PageResponse) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.QueryGroupRequest"></a>

 ### QueryGroupRequest
 QueryGroupRequest is request type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `id` | [GroupID](#akash.deployment.v1beta2.GroupID) |  |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.QueryGroupResponse"></a>

 ### QueryGroupResponse
 QueryGroupResponse is response type for the Query/Group RPC method

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `group` | [Group](#akash.deployment.v1beta2.Group) |  |  |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

 
 <a name="akash.deployment.v1beta2.Query"></a>

 ### Query
 Query defines the gRPC querier service

 | Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
 | ----------- | ------------ | ------------- | ------------| ------- | -------- |
 | `Deployments` | [QueryDeploymentsRequest](#akash.deployment.v1beta2.QueryDeploymentsRequest) | [QueryDeploymentsResponse](#akash.deployment.v1beta2.QueryDeploymentsResponse) | Deployments queries deployments | GET|/akash/deployment/v1beta2/deployments/list|
 | `Deployment` | [QueryDeploymentRequest](#akash.deployment.v1beta2.QueryDeploymentRequest) | [QueryDeploymentResponse](#akash.deployment.v1beta2.QueryDeploymentResponse) | Deployment queries deployment details | GET|/akash/deployment/v1beta2/deployments/info|
 | `Group` | [QueryGroupRequest](#akash.deployment.v1beta2.QueryGroupRequest) | [QueryGroupResponse](#akash.deployment.v1beta2.QueryGroupResponse) | Group queries group details | GET|/akash/deployment/v1beta2/groups/info|
 
  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/authz.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/authz.proto
 

 
 <a name="akash.deployment.v1beta2.DepositDeploymentAuthorization"></a>

 ### DepositDeploymentAuthorization
 DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
the granter's account for a deployment.

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `spend_limit` | [cosmos.base.v1beta1.Coin](#cosmos.base.v1beta1.Coin) |  | SpendLimit is the amount the grantee is authorized to spend from the granter's account for the purpose of deployment. |
 
 

 

  <!-- end messages -->

  <!-- end enums -->

  <!-- end HasExtensions -->

  <!-- end services -->

 
 
 <a name="akash/deployment/v1beta2/genesis.proto"></a>
 <p align="right"><a href="#top">Top</a></p>

 ## akash/deployment/v1beta2/genesis.proto
 

 
 <a name="akash.deployment.v1beta2.GenesisDeployment"></a>

 ### GenesisDeployment
 GenesisDeployment defines the basic genesis state used by deployment module

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployment` | [Deployment](#akash.deployment.v1beta2.Deployment) |  |  |
 | `groups` | [Group](#akash.deployment.v1beta2.Group) | repeated |  |
 
 

 

 
 <a name="akash.deployment.v1beta2.GenesisState"></a>

 ### GenesisState
 GenesisState stores slice of genesis deployment instance

 
 | Field | Type | Label | Description |
 | ----- | ---- | ----- | ----------- |
 | `deployments` | [GenesisDeployment](#akash.deployment.v1beta2.GenesisDeployment) | repeated |  |
 | `params` | [Params](#akash.deployment.v1beta2.Params) |  |  |
 
 

 

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
 
