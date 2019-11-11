var http=require('http')
var URL=require("url")
var fs=require("fs")
var querystring=require("querystring")
var MYSQL=require('./dbConnection')
var con=MYSQL()
var showRec=require("./reports.js")

function indexRequest(req, res) {
	var lookingfor=URL.parse(req.url).pathname
	if(lookingfor=="/") {
		fs.readFile('./index.html',function(error, data) {
			if(!(error)) {
				res.write(data)
				res.end()
			}
		})
	}
	if(lookingfor=="/view") {
		fs.readFile('./view.html',function(error, data) {
			if(!(error)) {
				res.write(data)
				res.end()
			}
		})
	}
	if(lookingfor=="/showallrecords") {
		showRec(res, "Select * from names")
	}
	if(lookingfor=="/shownamerecord") {
		var data=""
		var record=""
		req.on("data", function(chunk) {
			data+=chunk
		})
		req.on("end", function() {
			record=querystring.parse(data)
			var sql=`Select * from names where Name='${record.Name}'`
			showRec(res,sql)
		})
	}
	if(lookingfor=="/entryform") {
		fs.readFile('./Entry.html', function(error, data) {
			if(!(error)){
				res.write(data)
				res.end()
			}
		})
	}
	if(lookingfor=="/insertRecord") {
		console.log("hello")
		var data=""
		var record=""
		req.on("data", function(chunk) {
			data+=chunk
		})
		req.on("end", function() {
			record=querystring.parse(data)
			var sql=`insert into names values(${record.ID},'${record.Name}','${record.Postcode}')`
			
			con.query(sql,function(error,result) {
				if(error) {
					console.log("Error:"+error)
				}
				else {
					console.log(result)
				}
			})
		})
	}
}
server=http.createServer(indexRequest)
server.listen(8000)	

