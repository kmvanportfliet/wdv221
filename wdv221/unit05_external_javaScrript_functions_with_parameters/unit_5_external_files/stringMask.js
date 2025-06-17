function maskValue(inValue) {
	if (inValue.length <= 4) {
		return "####";
	} else {
		return getMaskString(inValue.length - 4) + inValue.substring(inValue.length - 4);
	}
}

function getMaskString(inLength) {
	var result = "";
	for (let i = 0; i < inLength; i++) {
		result += "#";
	}
	return result;
}
