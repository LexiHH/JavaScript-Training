var http = require('http')
var RequestFunction = function(request, response) {
	response.writeHead(200, {'content-type':'text/html'})
	if(request.url == "/home") {
		response.write("<B> This is the home page </B>")
		response.write("Made by NBS")
	}
	if(request.url == "/aboutus") {
		response.write("<B> This is about us </B>")
	}
	response.end()
}
var server = http.createServer(RequestFunction)
server.listen(4001)