package v2_1

const (
	valueFalse = "false"
	valueTrue  = "true"
	valueOn    = "on"
	valueOff   = "off"
	valueYes   = "yes"
	valueNo    = "no"
)

// as per yaml following allowed as bool values
func unifyStringAsBool(val string) (string, bool) {
	if val == valueTrue || val == valueOn || val == valueYes {
		return valueTrue, true
	} else if val == valueFalse || val == valueOff || val == valueNo {
		return valueFalse, true
	}

	return "", false
}
