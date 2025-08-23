package v1beta3

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type regexTest struct {
	runName    string
	key        string
	shouldPass bool
}

func TestAttributes_Validate(t *testing.T) {
	attr := Attributes{
		{Key: "key"},
		{Key: "key"},
	}

	require.EqualError(t, attr.Validate(), ErrAttributesDuplicateKeys.Error())

	// unsupported key symbol
	attr = Attributes{
		{Key: "$"},
	}

	require.EqualError(t, attr.Validate(), ErrInvalidAttributeKey.Error())

	// empty key
	attr = Attributes{
		{Key: ""},
	}

	require.EqualError(t, attr.Validate(), ErrInvalidAttributeKey.Error())
	// to long key
	attr = Attributes{
		{Key: "sdgkhaeirugaeroigheirghseiargfs3ssdgkhaeirugaeroigheirghseiargfs3sdgkhaeirugaeroigheirghseiargfs3ssdgkhaeirugaeroigheirghseiargfs3"},
	}

	require.EqualError(t, attr.Validate(), ErrInvalidAttributeKey.Error())
}

func TestAttribute_Equal(t *testing.T) {
	attr1 := &Attribute{Key: "key1", Value: "val1"}
	attr2 := &Attribute{Key: "key1", Value: "val1"}
	attr3 := &Attribute{Key: "key1", Value: "val2"}

	require.True(t, attr1.Equal(attr2))
	require.False(t, attr1.Equal(attr3))
}

func TestAttribute_SubsetOf(t *testing.T) {
	attr1 := Attribute{Key: "key1", Value: "val1"}
	attr2 := Attribute{Key: "key1", Value: "val1"}
	attr3 := Attribute{Key: "key1", Value: "val2"}

	require.True(t, attr1.SubsetOf(attr2))
	require.False(t, attr1.SubsetOf(attr3))
}

func TestAttribute_AnyOf(t *testing.T) {
	attr1 := Attribute{Key: "key1", Value: "val1"}
	attr2 := Attribute{Key: "key1", Value: "val1"}
	attr3 := Attribute{Key: "key1", Value: "val2"}

	require.True(t, attr1.SubsetOf(attr2))
	require.False(t, attr1.SubsetOf(attr3))
}

func TestAttributes_SubsetOf(t *testing.T) {
	attr1 := Attributes{
		{Key: "key1", Value: "val1"},
	}

	attr2 := Attributes{
		{Key: "key1", Value: "val1"},
		{Key: "key2", Value: "val2"},
	}

	attr3 := Attributes{
		{Key: "key1", Value: "val1"},
		{Key: "key2", Value: "val2"},
		{Key: "key3", Value: "val3"},
		{Key: "key4", Value: "val4"},
	}

	attr4 := Attributes{
		{Key: "key3", Value: "val3"},
		{Key: "key4", Value: "val4"},
	}

	require.True(t, attr1.SubsetOf(attr2))
	require.True(t, attr2.SubsetOf(attr3))
	require.False(t, attr1.SubsetOf(attr4))
}

func TestAttributes_AnyOf(t *testing.T) {
	attr1 := Attributes{
		{Key: "key1", Value: "val1"},
	}

	attr2 := Attributes{
		{Key: "key1", Value: "val1"},
		{Key: "key2", Value: "val2"},
	}

	attr3 := Attributes{
		{Key: "key1", Value: "val1"},
		{Key: "key2", Value: "val2"},
		{Key: "key3", Value: "val3"},
		{Key: "key4", Value: "val4"},
	}

	attr4 := Attributes{
		{Key: "key3", Value: "val3"},
		{Key: "key4", Value: "val4"},
	}

	require.True(t, attr1.AnyOf(attr2))
	require.True(t, attr2.AnyOf(attr1))
	require.True(t, attr2.AnyOf(attr3))
	require.False(t, attr1.AnyOf(attr4))
}

func TestAttributeRegex(t *testing.T) {
	tests := []regexTest{
		{
			"arbitrary key",
			"key1",
			true,
		},
		{
			"allow trailing wildcard",
			"key1*",
			true,
		},
		{
			"allow trailing wildcard",
			"key1/*",
			true,
		},
		{
			"leading wildcard is not allowed",
			"*key1",
			false,
		},
		{
			"multiple wildcards are not allowed",
			"key1**",
			false,
		},
		{
			"wildcards in the middle of key are not allowed",
			"key1*/",
			false,
		},
		{
			"wildcards in the middle of key are not allowed",
			"key1/*/",
			false,
		},
	}

	for _, test := range tests {
		t.Run(test.runName, func(t *testing.T) {
			require.Equal(t, test.shouldPass, attributeNameRegexpWildcard.MatchString(test.key))
		})
	}
}

func TestAttributes_Dup(t *testing.T) {
	attrs := Attributes{
		Attribute{
			Key:   "key",
			Value: "val",
		},
	}

	dAttrs := attrs.Dup()
	require.Equal(t, attrs, dAttrs)
}

func TestAttributes_GetNonMatchingAttributes(t *testing.T) {
	attr1 := Attributes{
		{Key: "key1", Value: "val1"},
		{Key: "key2", Value: "val2"},
		{Key: "key3", Value: "val3"},
	}

	attr2 := Attributes{
		{Key: "key1", Value: "val1"},
		{Key: "key3", Value: "val3"},
		{Key: "key4", Value: "val4"},
	}

	nonMatching := attr1.GetNonMatchingAttributes(attr2)
	require.Len(t, nonMatching, 1)
	require.Equal(t, "key2", nonMatching[0].Key)
	require.Equal(t, "val2", nonMatching[0].Value)

	// Test with empty attributes
	empty := Attributes{}
	nonMatching = empty.GetNonMatchingAttributes(attr1)
	require.Empty(t, nonMatching)

	// Test with no matches
	attr3 := Attributes{
		{Key: "key5", Value: "val5"},
		{Key: "key6", Value: "val6"},
	}
	nonMatching = attr3.GetNonMatchingAttributes(attr1)
	require.Equal(t, nonMatching, attr3)
}

func TestAttributes_String(t *testing.T) {
	tests := []struct {
		name     string
		attrs    Attributes
		expected string
	}{
		{
			"single attribute",
			Attributes{
				{Key: "key1", Value: "val1"},
			},
			"key1=val1",
		},
		{
			"multiple attributes",
			Attributes{
				{Key: "key1", Value: "val1"},
				{Key: "key2", Value: "val2"},
				{Key: "key3", Value: "val3"},
			},
			"key1=val1, key2=val2, key3=val3",
		},
		{
			"empty attributes",
			Attributes{},
			"",
		},
		{
			"attributes with special characters",
			Attributes{
				{Key: "key/1", Value: "val/1"},
				{Key: "key.2", Value: "val.2"},
			},
			"key/1=val/1, key.2=val.2",
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := test.attrs.String()
			require.Equal(t, test.expected, result)
		})
	}
}
