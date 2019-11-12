var express=require("express")
var app=express()
var TimesTable=require("./expresstimesfunction.js")

app.get("/",function(req,res){
	for(var i=1;i<=10;i++) {
		res.write(`<A href = "http://localhost:8000/TimesTable/${i}">${i} Times Table</A>`)
		res.write('<BR>')
	}
})

app.get('/TimesTable/:number',function(req,res){
	res.writeHead(200, {'Content-Type':'text/HTML'})
	res.write("Select Upper Range of Times Table: ")
	res.write("<BR>")
	var n=parseInt(req.params.number)
	for(var i=10;i<=100;i+=10) {
		res.write(`<A href = "http://localhost:8000/TimesTable/${n}/${i}">${i}</A>`)
		res.write('<BR>')
	}
})

app.get('/TimesTable/:number/:range',function(req,res){
	res.writeHead(200, {'Content-Type':'text/HTML'})
	var n=parseInt(req.params.number)
	var r=parseInt(req.params.range)
	TimesTable(n,r,res)
})

app.listen(8000)
