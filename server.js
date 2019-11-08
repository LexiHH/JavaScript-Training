var http = require('http')
var server = http.createServer(function(request, response) {
	console.log("request received")
	})
server.listen(4001)

