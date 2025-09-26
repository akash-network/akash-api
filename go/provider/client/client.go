package rest

import (
	"bytes"
	"context"
	"crypto"
	"crypto/tls"
	"crypto/x509"
	"encoding/json"
	"encoding/pem"
	"errors"
	"fmt"
	"io"
	"math/big"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/gorilla/websocket"
	"k8s.io/client-go/tools/remotecommand"

	sdk "github.com/cosmos/cosmos-sdk/types"

	manifest "github.com/akash-network/akash-api/go/manifest/v2beta2"
	ctypes "github.com/akash-network/akash-api/go/node/cert/v1beta3"
	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	mtypes "github.com/akash-network/akash-api/go/node/market/v1beta4"
	ptypes "github.com/akash-network/akash-api/go/node/provider/v1beta3"
	ajwt "github.com/akash-network/akash-api/go/util/jwt"
	atls "github.com/akash-network/akash-api/go/util/tls"
)

const (
	schemeWSS   = "wss"
	schemeHTTPS = "https"
)

const (
	contentTypeJSON = "application/json; charset=UTF-8"

	// PingWait Time allowed writing the file to the client.
	PingWait = 15 * time.Second

	// PongWait Time allowed reading the next pong message from the client.
	PongWait = 15 * time.Second

	// PingPeriod Send pings to a client with this period. Must be less than pongWait.
	PingPeriod = 10 * time.Second
)

var (
	ErrNotInitialized  = errors.New("rest: not initialized")
	ErrRPCClientNotSet = errors.New("rest: RPC client is not set - use WithQueryClient option for on-chain operations")
)

type ReqClient interface {
	DialContext(ctx context.Context, urlStr string, requestHeader http.Header) (*websocket.Conn, *http.Response, error)
	Do(*http.Request) (*http.Response, error)
}

// Client defines the methods available for connecting to the gateway server.
type Client interface {
	NewReqClient(ctx context.Context) ReqClient
	Status(ctx context.Context) (*ProviderStatus, error)
	Validate(ctx context.Context, gspec dtypes.GroupSpec) (ValidateGroupSpecResult, error)
	SubmitManifest(ctx context.Context, dseq uint64, mani manifest.Manifest) error
	GetManifest(ctx context.Context, id mtypes.LeaseID) (manifest.Manifest, error)
	LeaseStatus(ctx context.Context, id mtypes.LeaseID) (LeaseStatus, error)
	LeaseEvents(ctx context.Context, id mtypes.LeaseID, services string, follow bool) (*LeaseKubeEvents, error)
	LeaseLogs(ctx context.Context, id mtypes.LeaseID, services string, follow bool, tailLines int64) (*ServiceLogs, error)
	ServiceStatus(ctx context.Context, id mtypes.LeaseID, service string) (*ServiceStatus, error)
	LeaseShell(ctx context.Context, id mtypes.LeaseID, service string, podIndex uint, cmd []string,
		stdin io.Reader,
		stdout io.Writer,
		stderr io.Writer,
		tty bool,
		tsq <-chan remotecommand.TerminalSize) error
	MigrateHostnames(ctx context.Context, hostnames []string, dseq uint64, gseq uint32) error
	MigrateEndpoints(ctx context.Context, endpoints []string, dseq uint64, gseq uint32) error
}

type client struct {
	ctx     context.Context
	host    *url.URL
	addr    sdk.Address
	cclient ctypes.QueryClient
	tlsCfg  *tls.Config
	opts    clientOptions
}

type reqClient struct {
	ctx      context.Context
	host     *url.URL
	hclient  *http.Client
	wsclient *websocket.Dialer
	addr     sdk.Address
	cclient  ctypes.QueryClient
}

// NewClient creates and returns a new Client instance for interacting with the Akash provider.
//
// It takes a context.Context for managing the lifecycle of operations, a QueryClient for making
// provider queries, the provider's address, and optional ClientOption functions for customizing
// the client configuration.
//
// The following options can be provided:
//   - WithAuthCerts: Configure TLS certificates for secure communication
//   - WithAuthJWTSigner: Set a JWT signer for authentication
//   - WithAuthToken: Provide an authentication token
//   - WithQueryClient: Set a query client for on-chain provider discovery (for on-chain operations)
//   - WithProviderURL: Set a provider URL directly (for off-chain operations)
//
// Note: WithQueryClient and WithProviderURL are mutually exclusive.
// Auth options have the following priority: WithAuthCerts > WithAuthJWTSigner > WithAuthToken
//
// The function will:
// 1. Apply any provided ClientOptions
// 2. Query the provider's host URI using the QueryClient (if provided) or use the direct URL
// 3. Set up TLS configuration with system certificates
// 4. Configure client authentication using either provided certificates or JWT signing
//
// Returns an error if:
// - Any ClientOption fails to apply
// - Both WithQueryClient and WithProviderURL are provided
// - Neither WithQueryClient nor WithProviderURL are provided
// - The provider query fails (when using QueryClient)
// - The host URI is invalid
// - System certificates cannot be loaded
func NewClient(ctx context.Context, addr sdk.Address, opts ...ClientOption) (Client, error) {
	certPool, err := x509.SystemCertPool()
	if err != nil {
		return nil, err
	}

	cl := &client{
		ctx:  ctx,
		addr: addr,
	}

	for _, opt := range opts {
		err := opt(&cl.opts)
		if err != nil {
			return nil, err
		}
	}

	if cl.opts.qclient == nil && cl.opts.providerURL == "" {
		return nil, errors.New("either WithQueryClient or WithProviderURL must be provided")
	}

	var rawURI string
	if cl.opts.qclient != nil {
		// On-chain mode: query provider information
		cl.cclient = cl.opts.qclient
		res, err := cl.opts.qclient.Provider(ctx, &ptypes.QueryProviderRequest{Owner: addr.String()})
		if err != nil {
			return nil, err
		}

		rawURI = res.Provider.HostURI

	} else {
		// Off-chain mode: use provided URL directly
		rawURI = cl.opts.providerURL
	}

	uri, err := url.Parse(rawURI)
	if err != nil {
		return nil, err
	}

	cl.host = uri

	cl.tlsCfg = &tls.Config{
		MinVersion:            tls.VersionTLS13,
		RootCAs:               certPool,
		VerifyPeerCertificate: cl.verifyPeerCertificate,
		InsecureSkipVerify:    true, // nolint: gosec
	}

	// must use Hostname rather than Host field as a certificate is issued for host without port
	// logic here defaults to normal TLS behavior and mTLS is being used only when explicitly called
	// by user by providing auth certificate.
	// this allows read-only calls like get provider status to proceed with normal TLS flow without need
	// to provider cert or token
	if len(cl.opts.certs) > 0 {
		cl.tlsCfg.Certificates = cl.opts.certs
		cl.tlsCfg.ServerName = fmt.Sprintf("mtls.%s", uri.Hostname())
	} else {
		cl.tlsCfg.ServerName = uri.Hostname()
	}

	return cl, nil
}

func (c *client) verifyPeerCertificate(certificates [][]byte, _ [][]*x509.Certificate) error {
	peerCerts := make([]*x509.Certificate, 0, len(certificates))

	for idx := range certificates {
		cert, err := x509.ParseCertificate(certificates[idx])
		if err != nil {
			return err
		}

		peerCerts = append(peerCerts, cert)
	}

	if len(peerCerts) == 0 {
		return atls.CertificateInvalidError{Reason: atls.EmptyPeerCertificate}
	}

	opts := x509.VerifyOptions{
		Roots:                     c.tlsCfg.RootCAs,
		CurrentTime:               time.Now(),
		KeyUsages:                 []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth},
		MaxConstraintComparisions: 0,
		// Enable strict hostname validation.
		// mTLS usecase will drop this requirement if the server provides a self-signed certificate
		DNSName: c.tlsCfg.ServerName,
	}

	// if the server provides just 1 certificate, it is most likely then not it is mTLS
	if len(peerCerts) == 1 {
		cert := peerCerts[0]
		// validation
		var owner sdk.Address
		var err error

		if owner, err = sdk.AccAddressFromBech32(cert.Subject.CommonName); err != nil {
			return fmt.Errorf("%w: (%w)", atls.CertificateInvalidError{Cert: cert, Reason: atls.EmptyPeerCertificate}, err)
		}

		// 1. CommonName in issuer and Subject must match and be as Bech32 format
		if cert.Subject.CommonName != cert.Issuer.CommonName {
			return fmt.Errorf("%w: (%w)", atls.CertificateInvalidError{Cert: cert, Reason: atls.InvalidCN}, err)
		}

		// 2. serial number must be in
		if cert.SerialNumber == nil {
			return fmt.Errorf("%w: (%w)", atls.CertificateInvalidError{Cert: cert, Reason: atls.InvalidSN}, err)
		}

		// 3. look up the certificate on the chain
		onChainCert, _, err := c.GetAccountCertificate(c.ctx, owner, cert.SerialNumber)
		if err != nil {
			return fmt.Errorf("%w: (%w)", atls.CertificateInvalidError{Cert: cert, Reason: atls.Expired}, err)
		}

		c.tlsCfg.RootCAs.AddCert(onChainCert)
		opts.DNSName = ""
	}

	for _, cert := range peerCerts {
		if _, err := cert.Verify(opts); err != nil {
			return fmt.Errorf("%w: (%w)", atls.CertificateInvalidError{Cert: cert, Reason: atls.Verify}, err)
		}
	}

	return nil
}

func (c *reqClient) Do(req *http.Request) (*http.Response, error) {
	return c.hclient.Do(req)
}

func (c *reqClient) DialContext(ctx context.Context, urlStr string, requestHeader http.Header) (*websocket.Conn, *http.Response, error) {
	return c.wsclient.DialContext(ctx, urlStr, requestHeader)
}

func (c *client) GetAccountCertificate(ctx context.Context, owner sdk.Address, serial *big.Int) (*x509.Certificate, crypto.PublicKey, error) {
	if c.cclient == nil {
		return nil, nil, ErrRPCClientNotSet
	}

	cresp, err := c.cclient.Certificates(ctx, &ctypes.QueryCertificatesRequest{
		Filter: ctypes.CertificateFilter{
			Owner:  owner.String(),
			Serial: serial.String(),
			State:  ctypes.CertificateValid.String(),
		},
	})
	if err != nil {
		return nil, nil, err
	}

	certData := cresp.Certificates[0]

	blk, rest := pem.Decode(certData.Certificate.Cert)
	if blk == nil || len(rest) > 0 {
		return nil, nil, ctypes.ErrInvalidCertificateValue
	} else if blk.Type != ctypes.PemBlkTypeCertificate {
		return nil, nil, fmt.Errorf("%w: invalid pem block type", ctypes.ErrInvalidCertificateValue)
	}

	cert, err := x509.ParseCertificate(blk.Bytes)
	if err != nil {
		return nil, nil, err
	}

	blk, rest = pem.Decode(certData.Certificate.Pubkey)
	if blk == nil || len(rest) > 0 {
		return nil, nil, ctypes.ErrInvalidPubkeyValue
	} else if blk.Type != ctypes.PemBlkTypeECPublicKey {
		return nil, nil, fmt.Errorf("%w: invalid pem block type", ctypes.ErrInvalidPubkeyValue)
	}

	pubkey, err := x509.ParsePKIXPublicKey(blk.Bytes)
	if err != nil {
		return nil, nil, err
	}

	return cert, pubkey, nil
}

func (c *client) newJWT() (string, error) {
	now := time.Now()

	claims := ajwt.Claims{
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    c.opts.signer.GetAddress().String(),
			IssuedAt:  jwt.NewNumericDate(now),
			NotBefore: jwt.NewNumericDate(now),
			ExpiresAt: jwt.NewNumericDate(now.Add(15 * time.Minute)),
		},
		Version: "v1",
		Leases:  ajwt.Leases{Access: ajwt.AccessTypeFull},
	}

	tok := jwt.NewWithClaims(ajwt.SigningMethodES256K, &claims)

	return tok.SignedString(c.opts.signer)
}

func (c *client) setAuth(hdr http.Header) error {
	var tok string
	var err error

	if len(c.opts.certs) > 0 {
		return nil
	} else if c.opts.signer != nil {
		tok, err = c.newJWT()
		if err != nil {
			return err
		}
	} else {
		tok = c.opts.token
	}

	if tok != "" {
		hdr.Set("Authorization", fmt.Sprintf("Bearer %s", tok))
	}

	return nil
}

func (c *client) NewReqClient(ctx context.Context) ReqClient {
	cl := &reqClient{
		ctx:     ctx,
		host:    c.host,
		addr:    c.addr,
		cclient: c.cclient,
	}

	httpClient := &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: c.tlsCfg,
		},
		// Never follow redirects
		CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
			return http.ErrUseLastResponse
		},
		Jar:     nil,
		Timeout: 0,
	}

	cl.hclient = httpClient

	cl.wsclient = &websocket.Dialer{
		Proxy:            http.ProxyFromEnvironment,
		HandshakeTimeout: 45 * time.Second,
		TLSClientConfig:  c.tlsCfg,
	}

	return cl
}

type ClientResponseError struct {
	Status  int
	Message string
}

func (err ClientResponseError) Error() string {
	return fmt.Sprintf("remote server returned %d", err.Status)
}

func (err ClientResponseError) ClientError() string {
	return fmt.Sprintf("Remote Server returned %d\n%s", err.Status, err.Message)
}

func (c *client) Status(ctx context.Context) (*ProviderStatus, error) {
	uri, err := MakeURI(c.host, StatusPath())
	if err != nil {
		return nil, err
	}
	var obj ProviderStatus

	if err := c.getStatus(ctx, uri, &obj); err != nil {
		return nil, err
	}

	return &obj, nil
}

func (c *client) Validate(ctx context.Context, gspec dtypes.GroupSpec) (ValidateGroupSpecResult, error) {
	uri, err := MakeURI(c.host, ValidatePath())
	if err != nil {
		return ValidateGroupSpecResult{}, err
	}

	if err = gspec.ValidateBasic(); err != nil {
		return ValidateGroupSpecResult{}, err
	}

	bgspec, err := json.Marshal(gspec)
	if err != nil {
		return ValidateGroupSpecResult{}, err
	}

	req, err := http.NewRequestWithContext(ctx, "GET", uri, bytes.NewReader(bgspec))
	if err != nil {
		return ValidateGroupSpecResult{}, err
	}
	req.Header.Set("Content-Type", contentTypeJSON)

	if err = c.setAuth(req.Header); err != nil {
		return ValidateGroupSpecResult{}, err
	}

	rCl := c.NewReqClient(ctx)
	resp, err := rCl.Do(req)
	if err != nil {
		return ValidateGroupSpecResult{}, err
	}

	buf := &bytes.Buffer{}
	_, err = io.Copy(buf, resp.Body)
	defer func() {
		_ = resp.Body.Close()
	}()

	if err != nil {
		return ValidateGroupSpecResult{}, err
	}

	err = createClientResponseErrorIfNotOK(resp, buf)
	if err != nil {
		return ValidateGroupSpecResult{}, err
	}

	var obj ValidateGroupSpecResult
	if err = json.NewDecoder(buf).Decode(&obj); err != nil {
		return ValidateGroupSpecResult{}, err
	}

	return obj, nil
}

func (c *client) SubmitManifest(ctx context.Context, dseq uint64, mani manifest.Manifest) error {
	uri, err := MakeURI(c.host, SubmitManifestPath(dseq))
	if err != nil {
		return err
	}

	buf, err := json.Marshal(mani)
	if err != nil {
		return err
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", uri, bytes.NewBuffer(buf))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", contentTypeJSON)

	if err = c.setAuth(req.Header); err != nil {
		return err
	}

	rCl := c.NewReqClient(ctx)
	resp, err := rCl.Do(req)
	if err != nil {
		return err
	}
	responseBuf := &bytes.Buffer{}
	_, err = io.Copy(responseBuf, resp.Body)
	defer func() {
		_ = resp.Body.Close()
	}()

	if err != nil {
		return err
	}

	return createClientResponseErrorIfNotOK(resp, responseBuf)
}

func (c *client) GetManifest(ctx context.Context, lid mtypes.LeaseID) (manifest.Manifest, error) {
	uri, err := MakeURI(c.host, GetManifestPath(lid))
	if err != nil {
		return nil, err
	}

	req, err := http.NewRequestWithContext(ctx, "GET", uri, nil)
	if err != nil {
		return nil, err
	}

	if err = c.setAuth(req.Header); err != nil {
		return nil, err
	}

	rCl := c.NewReqClient(ctx)
	resp, err := rCl.Do(req)
	if err != nil {
		return nil, err
	}

	defer func() {
		_ = resp.Body.Close()
	}()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	err = createClientResponseErrorIfNotOK(resp, bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	var mani manifest.Manifest
	if err = json.Unmarshal(body, &mani); err != nil {
		return nil, err
	}

	return mani, nil
}

func (c *client) MigrateEndpoints(ctx context.Context, endpoints []string, dseq uint64, gseq uint32) error {
	uri, err := MakeURI(c.host, "endpoint/migrate")
	if err != nil {
		return err
	}

	body := EndpointMigrateRequestBody{
		EndpointsToMigrate: endpoints,
		DestinationDSeq:    dseq,
		DestinationGSeq:    gseq,
	}

	buf, err := json.Marshal(body)
	if err != nil {
		return err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, uri, bytes.NewReader(buf))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", contentTypeJSON)
	if err = c.setAuth(req.Header); err != nil {
		return err
	}

	rCl := c.NewReqClient(ctx)
	resp, err := rCl.Do(req)
	if err != nil {
		return err
	}
	responseBuf := &bytes.Buffer{}
	_, err = io.Copy(responseBuf, resp.Body)
	defer func() {
		_ = resp.Body.Close()
	}()

	if err != nil {
		return err
	}

	return createClientResponseErrorIfNotOK(resp, responseBuf)
}

func (c *client) MigrateHostnames(ctx context.Context, hostnames []string, dseq uint64, gseq uint32) error {
	uri, err := MakeURI(c.host, "hostname/migrate")
	if err != nil {
		return err
	}

	body := MigrateRequestBody{
		HostnamesToMigrate: hostnames,
		DestinationDSeq:    dseq,
		DestinationGSeq:    gseq,
	}

	buf, err := json.Marshal(body)
	if err != nil {
		return err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, uri, bytes.NewReader(buf))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", contentTypeJSON)
	if err = c.setAuth(req.Header); err != nil {
		return err
	}

	rCl := c.NewReqClient(ctx)
	resp, err := rCl.Do(req)
	if err != nil {
		return err
	}
	responseBuf := &bytes.Buffer{}
	_, err = io.Copy(responseBuf, resp.Body)
	defer func() {
		_ = resp.Body.Close()
	}()

	if err != nil {
		return err
	}

	return createClientResponseErrorIfNotOK(resp, responseBuf)
}

func (c *client) LeaseStatus(ctx context.Context, id mtypes.LeaseID) (LeaseStatus, error) {
	uri, err := MakeURI(c.host, LeaseStatusPath(id))
	if err != nil {
		return LeaseStatus{}, err
	}

	var obj LeaseStatus
	if err := c.getStatus(ctx, uri, &obj); err != nil {
		return LeaseStatus{}, err
	}

	return obj, nil
}

func (c *client) LeaseEvents(ctx context.Context, id mtypes.LeaseID, _ string, follow bool) (*LeaseKubeEvents, error) {
	endpoint, err := url.Parse(c.host.String() + "/" + LeaseEventsPath(id))
	if err != nil {
		return nil, err
	}

	switch endpoint.Scheme {
	case schemeWSS, schemeHTTPS:
		endpoint.Scheme = schemeWSS
	default:
		return nil, fmt.Errorf("invalid uri scheme %s. supported schemes http|https|ws|wss", endpoint.Scheme)
	}

	query := url.Values{}
	query.Set("follow", strconv.FormatBool(follow))

	endpoint.RawQuery = query.Encode()
	rCl := c.NewReqClient(ctx)

	hdr := make(http.Header)
	if err = c.setAuth(hdr); err != nil {
		return nil, err
	}

	conn, response, err := rCl.DialContext(ctx, endpoint.String(), hdr)
	if err != nil {
		if errors.Is(err, websocket.ErrBadHandshake) {
			buf := &bytes.Buffer{}
			_, _ = io.Copy(buf, response.Body)

			return nil, ClientResponseError{
				Status:  response.StatusCode,
				Message: buf.String(),
			}
		}

		return nil, err
	}

	streamch := make(chan LeaseEvent)
	onclose := make(chan string, 1)
	logs := &LeaseKubeEvents{
		Stream:  streamch,
		OnClose: onclose,
	}

	processOnCloseErr := func(err error) {
		if err != nil {
			if _, ok := err.(*websocket.CloseError); ok { // nolint: gosimple
				onclose <- parseCloseMessage(err.Error())
			} else {
				onclose <- err.Error()
			}
		}
	}

	if err = conn.SetReadDeadline(time.Now().Add(PingWait)); err != nil {
		return nil, err
	}

	conn.SetPingHandler(func(string) error {
		err := conn.WriteControl(websocket.PongMessage, nil, time.Now().Add(time.Second))
		if err != nil {
			return err
		}

		return conn.SetReadDeadline(time.Now().Add(PingWait))
	})

	go func(conn *websocket.Conn) {
		defer func() {
			close(streamch)
			close(onclose)
			_ = conn.Close()
		}()

		for {
			mType, msg, e := conn.ReadMessage()
			if e != nil {
				processOnCloseErr(e)
				return
			}

			switch mType {
			case websocket.TextMessage:
				var evt LeaseEvent
				if e = json.Unmarshal(msg, &evt); e != nil {
					onclose <- e.Error()
					return
				}

				streamch <- evt
			case websocket.CloseMessage:
				onclose <- parseCloseMessage(string(msg))
				return
			default:
			}
		}
	}(conn)

	return logs, nil
}

func (c *client) ServiceStatus(ctx context.Context, id mtypes.LeaseID, service string) (*ServiceStatus, error) {
	uri, err := MakeURI(c.host, ServiceStatusPath(id, service))
	if err != nil {
		return nil, err
	}

	var obj ServiceStatus
	if err := c.getStatus(ctx, uri, &obj); err != nil {
		return nil, err
	}

	return &obj, nil
}

func (c *client) getStatus(ctx context.Context, uri string, obj interface{}) error {
	req, err := http.NewRequestWithContext(ctx, "GET", uri, nil)
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", contentTypeJSON)
	if err = c.setAuth(req.Header); err != nil {
		return err
	}

	rCl := c.NewReqClient(ctx)
	resp, err := rCl.Do(req)
	if err != nil {
		return err
	}

	buf := &bytes.Buffer{}
	_, err = io.Copy(buf, resp.Body)
	defer func() {
		_ = resp.Body.Close()
	}()

	if err != nil {
		return err
	}

	err = createClientResponseErrorIfNotOK(resp, buf)
	if err != nil {
		return err
	}

	dec := json.NewDecoder(buf)
	return dec.Decode(obj)
}

func createClientResponseErrorIfNotOK(resp *http.Response, responseBuf *bytes.Buffer) error {
	if resp.StatusCode == http.StatusOK {
		return nil
	}

	return ClientResponseError{
		Status:  resp.StatusCode,
		Message: responseBuf.String(),
	}
}

// MakeURI
// for client queries path must not include owner id
func MakeURI(uri *url.URL, path string) (string, error) {
	endpoint, err := url.Parse(uri.String() + "/" + path)
	if err != nil {
		return "", err
	}

	return endpoint.String(), nil
}

func (c *client) LeaseLogs(ctx context.Context,
	id mtypes.LeaseID,
	services string,
	follow bool,
	_ int64,
) (*ServiceLogs, error) {
	endpoint, err := url.Parse(c.host.String() + "/" + ServiceLogsPath(id))
	if err != nil {
		return nil, err
	}

	switch endpoint.Scheme {
	case schemeWSS, schemeHTTPS:
		endpoint.Scheme = schemeWSS
	default:
		return nil, fmt.Errorf("invalid uri scheme %s. supported schemes http|https|ws|wss", endpoint.Scheme)
	}

	query := url.Values{}

	query.Set("follow", strconv.FormatBool(follow))

	if services != "" {
		query.Set("services", services)
	}

	endpoint.RawQuery = query.Encode()

	rCl := c.NewReqClient(ctx)

	hdr := make(http.Header)
	if err = c.setAuth(hdr); err != nil {
		return nil, err
	}

	conn, response, err := rCl.DialContext(ctx, endpoint.String(), hdr)
	if err != nil {
		if errors.Is(err, websocket.ErrBadHandshake) {
			buf := &bytes.Buffer{}
			_, _ = io.Copy(buf, response.Body)

			return nil, ClientResponseError{
				Status:  response.StatusCode,
				Message: buf.String(),
			}
		}

		return nil, err
	}

	streamch := make(chan ServiceLogMessage)
	onclose := make(chan string, 1)
	logs := &ServiceLogs{
		Stream:  streamch,
		OnClose: onclose,
	}

	if err = conn.SetReadDeadline(time.Now().Add(PingWait)); err != nil {
		return nil, err
	}

	conn.SetPingHandler(func(string) error {
		err := conn.WriteControl(websocket.PongMessage, nil, time.Now().Add(time.Second))
		if err != nil {
			return err
		}

		return conn.SetReadDeadline(time.Now().Add(PingWait))
	})

	go func(conn *websocket.Conn) {
		defer func() {
			close(streamch)
			close(onclose)
			_ = conn.Close()
		}()

		for {
			mType, msg, e := conn.ReadMessage()
			if e != nil {
				onclose <- parseCloseMessage(e.Error())
				return
			}

			switch mType {
			case websocket.TextMessage:
				var logLine ServiceLogMessage
				if e = json.Unmarshal(msg, &logLine); e != nil {
					return
				}

				streamch <- logLine
			case websocket.CloseMessage:
				onclose <- parseCloseMessage(string(msg))
				return
			default:
			}
		}
	}(conn)

	return logs, nil
}

// parseCloseMessage extract close reason from websocket close message
// "websocket: [error code]: [client reason]"
func parseCloseMessage(msg string) string {
	errmsg := strings.SplitN(msg, ": ", 3)
	if len(errmsg) == 3 {
		return errmsg[2]
	}

	return ""
}
