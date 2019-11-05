function reverse(word) {
	var backwards = ""
	for(var b=0; b<word.length; b++) {
		backwards = word.substring(b, b+1) + backwards
	}
	return backwards
}
	
var message = "Shafeeq is back"
var word = ""
var phrase = ""
var space = " "
for(var i=0; i<message.length; i++) {
	if(message.substring(i, i+1) == " ") {
		phrase= phrase + reverse(word) + space;
		word = "";
	}
	else {
		word+=message.substring(i, i+1)
	}
}
phrase = phrase + reverse(word)
console.log(phrase)

