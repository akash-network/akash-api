package v2beta2

import (
	"errors"
)

var (
	ErrInvalidManifest         = errors.New("invalid manifest")
	ErrManifestCrossValidation = errors.New("manifest cross validation error")
)
