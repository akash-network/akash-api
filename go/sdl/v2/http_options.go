package v2

import (
	"errors"
	"fmt"

	manifest "github.com/akash-network/akash-api/go/manifest/v2beta2"
)

const (
	nextCaseError         = "error"
	nextCaseTimeout       = "timeout"
	nextCase500           = "500"
	nextCase502           = "502"
	nextCase503           = "503"
	nextCase504           = "504"
	nextCase403           = "403"
	nextCase404           = "404"
	nextCase400           = "429"
	nextCaseOff           = "off"
	DefaultMaxBodySize    = uint32(1048576)
	upperLimitBodySize    = uint32(104857600)
	DefaultReadTimeout    = uint32(60000)
	upperLimitReadTimeout = DefaultReadTimeout
	DefaultSendTimeout    = uint32(60000)
	upperLimitSendTimeout = DefaultSendTimeout
	DefaultNextTries      = uint32(3)
	endpointKindIP        = "ip"
)

var (
	defaultNextCases                 = []string{nextCaseError, nextCaseTimeout}
	errCannotSpecifyOffAndOtherCases = errors.New("if 'off' is specified, no other cases may be specified")
	errUnknownNextCase               = errors.New("next case is unknown")
	errHTTPOptionNotAllowed          = errors.New("http option not allowed")
)

func (ho HTTPOptions) asManifest() (manifest.ServiceExposeHTTPOptions, error) {
	maxBodySize := ho.MaxBodySize

	if maxBodySize == 0 {
		maxBodySize = DefaultMaxBodySize
	} else if maxBodySize > upperLimitBodySize {
		return manifest.ServiceExposeHTTPOptions{}, fmt.Errorf("%w: body size cannot be greater than %d bytes", errHTTPOptionNotAllowed, upperLimitBodySize)
	}

	readTimeout := ho.ReadTimeout
	if readTimeout == 0 {
		readTimeout = DefaultReadTimeout
	} else if readTimeout > upperLimitReadTimeout {
		return manifest.ServiceExposeHTTPOptions{}, fmt.Errorf("%w: read timeout cannot be greater than %d ms", errHTTPOptionNotAllowed, upperLimitReadTimeout)
	}

	sendTimeout := ho.SendTimeout
	if sendTimeout == 0 {
		sendTimeout = DefaultSendTimeout
	} else if sendTimeout > upperLimitSendTimeout {
		return manifest.ServiceExposeHTTPOptions{}, fmt.Errorf("%w: send timeout cannot be greater than %d ms", errHTTPOptionNotAllowed, upperLimitSendTimeout)
	}

	nextTries := ho.NextTries
	if nextTries == 0 {
		nextTries = DefaultNextTries
	}

	nextCases := ho.NextCases
	if len(nextCases) == 0 {
		nextCases = defaultNextCases
	} else {
		for _, nextCase := range nextCases {
			switch nextCase {
			case nextCaseOff:
				if len(nextCases) != 1 {
					return manifest.ServiceExposeHTTPOptions{}, errCannotSpecifyOffAndOtherCases
				}
			case nextCaseError:
			case nextCaseTimeout:
			case nextCase500:
			case nextCase502:
			case nextCase503:
			case nextCase504:
			case nextCase403:
			case nextCase404:
			case nextCase400:
			default:
				return manifest.ServiceExposeHTTPOptions{}, fmt.Errorf("%w: %q", errUnknownNextCase, nextCase)
			}
		}
	}

	return manifest.ServiceExposeHTTPOptions{
		MaxBodySize: maxBodySize,
		ReadTimeout: readTimeout,
		SendTimeout: sendTimeout,
		NextTries:   nextTries,
		NextTimeout: ho.NextTimeout,
		NextCases:   nextCases,
	}, nil
}
