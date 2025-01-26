package testutil

import (
	"math/rand"
)

func RandRangeInt(minVal, maxVal int) int {
	return rand.Intn(maxVal-minVal) + minVal // nolint: gosec
}

func RandRangeUint(minVal, maxVal uint) uint {
	val := rand.Uint64() // nolint: gosec
	val %= uint64(maxVal - minVal)
	val += uint64(minVal)
	return uint(val)
}

func RandRangeUint64(minVal, maxVal uint64) uint64 {
	val := rand.Uint64() // nolint: gosec
	val %= maxVal - minVal
	val += minVal
	return val
}
