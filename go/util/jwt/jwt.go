package jwt

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/golang-jwt/jwt/v5"
)

var (
	ErrJWTValidation = fmt.Errorf("jwt: validation error")
)

type AccessType string
type PermissionScope string

const (
	AccessTypeFull     AccessType = "full"
	AccessTypeGranular AccessType = "granular"
)

const (
	PermissionScopeSendManifest PermissionScope = "send-manifest"
	PermissionScopeLogs         PermissionScope = "logs"
	PermissionScopeShell        PermissionScope = "shell"
	PermissionScopeEvents       PermissionScope = "events"
	PermissionScopRestart       PermissionScope = "restart"
)

var (
	validScopes = map[string]bool{
		PermissionScopeSendManifest.String(): true,
		PermissionScopeLogs.String():         true,
		PermissionScopeShell.String():        true,
		PermissionScopeEvents.String():       true,
		PermissionScopRestart.String():       true,
	}
)

func (s PermissionScope) String() string {
	return string(s)
}

type JWT interface {
}

type Permission struct {
	Provider sdk.AccAddress    `json:"provider"`
	Scope    []PermissionScope `json:"scope"`
	DSeq     uint64            `json:"dseq,omitempty"`
	GSeq     uint32            `json:"gseq,omitempty"`
	OSeq     uint32            `json:"oseq,omitempty"`
	Services []string          `json:"services,omitempty"`
}

type Permissions []Permission

type Claims struct {
	jwt.RegisteredClaims
	Version string `json:"version"`
	Leases  Leases `json:"leases"`
}

var _ jwt.Claims = (*Claims)(nil)

type Leases struct {
	Access      AccessType  `json:"access"`
	Permissions Permissions `json:"permissions,omitempty"`
}

func (p Permissions) Validate() error {
	providers := make(map[string]bool)
	for _, permission := range p {
		// AccAddress.UnmarshalJSON does not validate empty case
		if permission.Provider.Empty() {
			return fmt.Errorf("%w: empty provider", ErrJWTValidation)
		}

		if _, ok := providers[permission.Provider.String()]; ok {
			return fmt.Errorf("%w: duplicate provider %s", ErrJWTValidation, permission.Provider.String())
		}

		providers[permission.Provider.String()] = true

		if permission.OSeq > 0 && permission.GSeq == 0 {
			return fmt.Errorf("%w: gseq must be set if oseq is set", ErrJWTValidation)
		}

		if permission.GSeq > 0 && permission.DSeq == 0 {
			return fmt.Errorf("%w: dseq must be set if gseq is set", ErrJWTValidation)
		}

		if len(permission.Scope) == 0 {
			return fmt.Errorf("%w: empty permissions scope", ErrJWTValidation)
		}

		scopes := make(map[string]bool)

		for _, scope := range permission.Scope {
			if _, ok := validScopes[scope.String()]; !ok {
				return fmt.Errorf("%w: invalid scope %s", ErrJWTValidation, scope)
			}

			if _, ok := scopes[scope.String()]; ok {
				return fmt.Errorf("%w: duplicate scope %s", ErrJWTValidation, scope)
			}

			scopes[scope.String()] = true
		}

		services := make(map[string]bool)

		for _, svc := range permission.Services {
			if _, ok := services[svc]; ok {
				return fmt.Errorf("%w: duplicate service %s", ErrJWTValidation, svc)
			}

			services[svc] = true
		}
	}

	return nil
}

func (c Claims) Validate() error {
	_, err := sdk.AccAddressFromBech32(c.Issuer)
	if err != nil {
		return fmt.Errorf("%w: invalid issuer: %w", ErrJWTValidation, err)
	}

	if c.IssuedAt == nil {
		return fmt.Errorf("%w: missing issued at", ErrJWTValidation)
	}

	if c.ExpiresAt == nil {
		return fmt.Errorf("%w: missing expiration time", ErrJWTValidation)
	}

	if c.Version != "v1" {
		return fmt.Errorf("%w: invalid version", ErrJWTValidation)
	}

	switch c.Leases.Access {
	case AccessTypeFull:
		if len(c.Leases.Permissions) > 0 {
			return fmt.Errorf("%w: full access cannot have permissions set", ErrJWTValidation)
		}
	case AccessTypeGranular:
		if len(c.Leases.Permissions) == 0 {
			return fmt.Errorf("%w: granular access must have permissions set", ErrJWTValidation)
		}

		err = c.Leases.Permissions.Validate()
		if err != nil {
			return fmt.Errorf("%w: invalid permissions: %w", ErrJWTValidation, err)
		}
	case "":
		return fmt.Errorf("%w: missing access type", ErrJWTValidation)
	default:
		return fmt.Errorf("%w: invalid access type '%s'", ErrJWTValidation, c.Leases.Access)
	}

	return nil
}
