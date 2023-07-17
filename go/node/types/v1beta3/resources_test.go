package v1beta3

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestVolumes_Dup(t *testing.T) {
	volumes := Volumes{
		Storage{
			Name:       "default",
			Quantity:   NewResourceValue(100),
			Attributes: Attributes{},
		},
	}

	dVolumes := volumes.Dup()

	require.Equal(t, volumes, dVolumes)
}

func TestVolumes_Equal(t *testing.T) {
	volumes := Volumes{
		Storage{
			Name:       "default",
			Quantity:   NewResourceValue(100),
			Attributes: Attributes{},
		},
	}

	dVolumes := volumes.Dup()

	require.True(t, volumes.Equal(dVolumes))

	dVolumes[0].Name = "class2"
	require.False(t, volumes.Equal(dVolumes))
}
