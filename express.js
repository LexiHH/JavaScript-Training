var express=require("express")
var app=express()

app.get("/process",function(req,res){
	res.send("Hello")
})
app.post("/process",function(req,res){
	res.send("Bye")
})
app.listen(8000)