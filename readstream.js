var Fs = require("fs")
var F = Fs.createReadStream("argsarray.js", {encoding: 'UTF-8'})
F.on("data", function(text) {
	console.log(text)
})
F.on("end", function() {
	console.log("File finished")
})
