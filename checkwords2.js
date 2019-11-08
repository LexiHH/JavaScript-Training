var words = []
var check = 0
function checkwords(word) {
	check = 0
	for(var i=0; i<words.length; i++) {
		if(words[i] == word) {
		return false
		}
	}
	words.push(word)
	return true
}

var message = "shafeeq is back is shafeeq no no shafeeq yes"
alpha = "";
endmessage = ""
string = ""
for(var i=0; i<message.length; i++) {
	if(message.substring(i,i+1) == " ") {
		if(checkwords(string)) {
		endmessage= endmessage + string + " "
		}
		string = ""
	}
	else {
		string+=message.substring(i,i+1)
	}
}
if(checkwords(string)) {
		endmessage= endmessage + string + " "
}
console.log(endmessage)
