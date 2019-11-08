var http = require('http')
var url = require('url')
var RequestFunction = function(request, response) {
	var urldata = url.parse(request.url, true)
	response.writeHead(200, {'content-type':'text/html'})
	if(request.url == '/') {
		response.write('<A href = "http://localhost:4001/Add?No1=1&No2=2" > Add </A>')
		response.write('<BR>')
		response.write('<A href = "http://localhost:4001/Subtract?No1=1&No2=2" > Subtract </A>')
		response.write('<BR>')
		response.write('<A href = "http://localhost:4001/Multiply?No1=1&No2=2" > Multiply </A>')
		response.write('<BR>')
		response.write('<A href = "http://localhost:4001/Divide?No1=1&No2=2" > Divide </A>')
	}
	
	if(urldata.pathname == '/Add') {
			var result = parseInt(urldata.query.No1) + parseInt(urldata.query.No2)
			response.write('Result: '+ result)
			response.write('<BR>')
	}
	if(urldata.pathname == '/Subtract') {
			var result = parseInt(urldata.query.No1) - parseInt(urldata.query.No2)
			response.write('Result: '+ result)
			response.write('<BR>')
	}
	if(urldata.pathname == '/Multiply') {
			var result = parseInt(urldata.query.No1) * parseInt(urldata.query.No2)
			response.write('Result: '+ result)
			response.write('<BR>')
	}
	if(urldata.pathname == '/Divide') {
			var result = parseInt(urldata.query.No1) / parseInt(urldata.query.No2)
			response.write('Result: '+ result)
			response.write('<BR>')
	}
	response.end()
}
var server = http.createServer(RequestFunction)
server.listen(4001)