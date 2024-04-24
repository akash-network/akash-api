package v2_1

import (
	"sort"
)

type Dependencies []Dependency

var _ sort.Interface = (*Dependencies)(nil)

func (s Dependencies) Len() int {
	return len(s)
}

func (s Dependencies) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s Dependencies) Less(i, j int) bool {
	return s[i].Service < s[j].Service
}
