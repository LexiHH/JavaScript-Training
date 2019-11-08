var http = require('http')
var url = require('url')
var RequestFunction = function(request, response) {
	response.writeHead(200, {'content-type':'text/html'})
	if(request.url == '/') {
		//response.write('<A href = "http://localhost:4001/TimesTable" > Times Table </A>')
		//response.write('<BR>')
		response.write('<A href = "http://localhost:4001/SelectTimesTable" > Select Times Table </A>')
	}
	var urldata = url.parse(request.url, true)
	if(urldata.pathname == '/TimesTable') {
		for(var i=1;i<=10;i++) {
			response.write(urldata.query.N+'x'+i+'='+(urldata.query.N*i))
			response.write('<BR>')
		}
	}
	if(request.url == '/SelectTimesTable') 
		for(var i=1;i<=10;i++) {
		response.write('<A href = "http://localhost:4001/TimesTable?N='+i+'">'+i+" Times Table" +'</A>')
		response.write('<BR>')
	}
	response.end()
}
var server = http.createServer(RequestFunction)
server.listen(4001)