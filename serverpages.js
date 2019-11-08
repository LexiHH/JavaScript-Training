var http = require('http')
var RequestFunction = function(request, response) {
	if(request.url == "/home") {
		console.log("This is home page")
	}
	if(request.url == "/login") {
		console.log("This is the login page")
	}
}
var server = http.createServer(RequestFunction)
server.listen(4001)
		