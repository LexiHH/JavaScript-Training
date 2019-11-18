var express=require("express")
var app=express()
var TimesTable=require("./expresstimesfunction.js")
var cookieparser=require('cookie-parser')
app.use(cookieparser())

app.get("/",function(req,res){
	for(var i=1;i<=10;i++) {
		res.write(`<A href = "http://localhost:8000/TimesTableLowerRange/${i}">${i} Times Table</A>`)
		res.write('<BR>')
	}
	res.end() 	
})
app.use('/TimesTableLowerRange/:number?',function(req,res,next){
	if(req.params.number==undefined){
		if(req.cookies.number==undefined){
			res.redirect("/")
		}
		else{
			res.redirect("/TimesTableLowerRange/"+req.cookies.number)
		}
	} 
	else {
		var n=parseInt(req.params.number)
		res.cookie('number',n)
		next()
	}
})
app.get('/TimesTableLowerRange/:number?',function(req,res){
	res.writeHead(200, {'Content-Type':'text/HTML'})
	res.write("Select Lower Range of Times Table: ")
	res.write("<BR>")
	for(var i=10;i<=1000;i+=10) {
		res.write(`<A href = "http://localhost:8000/TimesTableUpperRange/${i}">${i}</A>`)
		res.write('<BR>')
	}
	res.end()
})
app.use('/TimesTableUpperRange/:range?',function(req,res,next){
	if(req.cookies.number==undefined){
		res.redirect("/")
	}
	else if(req.params.range==undefined){
		if(req.cookies.lowerrange==undefined){
			res.redirect("/TimesTableLowerRange/"+req.cookies.number)
		}
		else{
			res.redirect("/TimesTableUpperRange/"+req.cookies.lowerrange)
		}
	}
	else {
		var r=parseInt(req.params.range)
		res.cookie('lowerrange',r)
		next()
	}
})
app.get('/TimesTableUpperRange/:range?',function(req,res){
	var r=parseInt(req.params.range)
	res.writeHead(200, {'Content-Type':'text/HTML'})
	res.write("Select Upper Range of Times Table: ")
	res.write("<BR>")
	for(var i=r+10;i<=1000;i+=10) {
		res.write(`<A href = "http://localhost:8000/TimesTable/${i}">${i}</A>`)
		res.write('<BR>')
	}
	res.end()
})
app.use('/TimesTable/:range?',function(req,res,next){
	if(req.cookies.number==undefined){
		res.redirect("/")
	}
	else if(req.cookies.lowerrange==undefined){
		res.redirect("/TimesTableLowerRange/"+req.cookies.number)
	}
	else if(req.params.range==undefined){
		res.redirect("/TimesTableUpperRange/"+req.cookies.lowerrange)
	}
	else {
		var r=parseInt(req.params.range)
		res.cookie('upperrange',r)
		next()
	}
})
app.get('/TimesTable/:range?',function(req,res){
	var n=parseInt(req.cookies.number)
	var l=parseInt(req.cookies.lowerrange)
	var r=parseInt(req.params.range)
	res.writeHead(200, {'Content-Type':'text/HTML'})
	for(var i=l;i<=r;i++) {
		var result=(n*i)
		res.write(n+'x'+i+'='+result)
		res.write('<BR>')
	}
	res.end()
})

app.listen(8000)