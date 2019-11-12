var express=require("express")
var app=express()

app.use('/home',function(req,res,next){
	res.writeHead(200, {'Content-Type':'text/HTML'})
	console.log(""+(8*8))
	next()
	res.end()
})
app.get('/home',function(req,res){
	res.write("Home Page")
	res.end()
})

app.listen(8000)