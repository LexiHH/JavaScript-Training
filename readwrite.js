var Fs = require("fs")
var F = Fs.createReadStream("argsarray.js", {encoding: 'UTF-8'})
var F2read = Fs.createReadStream("file2.txt", {encoding: 'UTF-8'})
var F2write = Fs.createWriteStream("file2.txt")
F.on("data", function(text) {
	F2write.write(text)
})
F2read.on("data", function(text) {
	console.log(text)
})
F2read.on("end", function() {
	console.log("File finished")
})