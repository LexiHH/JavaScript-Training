function reverse(word) {
	backwards = ""
	for(var b=0; b<word.length; b++) {
		backwards = word.substring(b, b+1) + backwards
	}
	return backwards
}