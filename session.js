var express=require('express')
var cookieparser=require('cookie-parser')
var session=require('express-session')

var app=express()
app.use(cookieparser())
app.use(session({secret: "Shh, it's a secret"}))

app.get('/',function(req,res){
	console.log('abc')
	req.session.user='Shafeeq'
	req.session.pass='abc'
	res.send('Session created')
})

app.get('/show',function(req,res){
	res.send('username: '+req.session.user)
})

app.listen(8000)
