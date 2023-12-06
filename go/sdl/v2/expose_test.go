package v2

import (
	"testing"

	"github.com/stretchr/testify/require"
	"gopkg.in/yaml.v3"
)

func TestV2Expose(t *testing.T) {
	var stream = `
- port: 80
  as: 80
  accept:
    - hello.localhost
  to:
    - global: true
`

	var p Exposes

	err := yaml.Unmarshal([]byte(stream), &p)
	require.NoError(t, err)
}
