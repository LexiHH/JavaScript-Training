var express=require("express")
var app=express()

app.get('/div/:no1/:no2',function(req,res,next){
	res.writeHead(200, {'Content-Type':'text/HTML'})
	var no1=parseInt(req.params.no1)
	var no2=parseInt(req.params.no2)
	if(no2==0){
		next()
	}
	else{
		var result=no1/no2
		res.write("Result: "+result)
		res.end()
	}
	},
	function(req,res){
		res.write("Cannot divide by zero")
		res.end()
	}
)

app.listen(8000)