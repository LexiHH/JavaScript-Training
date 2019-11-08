var Fs = require("fs")
var F = Fs.createReadStream("file4.txt", {encoding: 'UTF-8'})
var Fwrite = Fs.createWriteStream("file3.txt")
var Fread = Fs.createReadStream("file3.txt", {encoding: 'UTF-8'})
F.on("data", function(text) {
	var newdata = ""
	for(var i=0; i<text.length; i++) {
		if(text.substring(i, i+1) == "e") {
			newdata+=("*")
		}
		else {
			newdata+=(text.substring(i,i+1))
		}
	}
	Fwrite.write(newdata)
})
Fread.on("data", function(text) {
	console.log(text)
})
F.on("end", function() {
	console.log("File finished")
})