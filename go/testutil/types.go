package testutil

import (
	"math/rand"
)

func RandRangeInt(min, max int) int {
	return rand.Intn(max-min) + min // nolint: gosec
}

func RandRangeUint(min, max uint) uint {
	val := rand.Uint64() // nolint: gosec
	val %= uint64(max - min)
	val += uint64(min)
	return uint(val)
}

func RandRangeUint64(min, max uint64) uint64 {
	val := rand.Uint64() // nolint: gosec
	val %= max - min
	val += min
	return val
}
