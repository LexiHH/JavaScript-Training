var express=require("express")
var app=express()
//var fs=require("fs")
//var querystring=require("querystring")
var MYSQL=require('./dbConnection')
var con=MYSQL()
//var cookieparser=require('cookie-parser')
var session=require('express-session')
var showRec=require("./checklogged.js")
var createUser=require("./createuserfunction.js")
var deleteUser=require("./delete.js")
var bodyparser=require('body-parser')
var editfunction=require("./editfunction.js")
var newfunction=require("./newfunction.js")
app.set('view engine','ejs')


var app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
//app.use(cookieparser())
app.use(session({secret: "Private"}))

app.get('/',function(req,res){
	res.render('homepage.ejs')
	res.end()
})

app.get('/login',function(req,res){
	req.session.destroy()
	res.render('login.ejs')
})

app.get('/createuser',function(req,res){
	res.render('createuser.ejs')
})

app.get('/deleted/:r',function(req,res){
	var r=parseInt(req.params.r)
	var user=`Delete from personal where regno='${r}'`
	deleteUser(con,user,res,req)	
})

app.get('/createperson/',function(req,res){
	res.render('newpersonal.ejs')	
})

app.post('/newperson',function(req,res){
	var name=req.body.Name
	var regno=req.body.Regno
	var address=req.body.Address
	var editsql=`insert into personal values('${name}',${regno},'${address}')`;
	newfunction(con,req,res,editsql)	
})

app.get('/editform/:r/:n/:a',function(req,res){
	res.render('editpersonal.ejs',{'regno':req.params.r, 'name':req.params.n, 'address':req.params.a})	
})

app.post('/editperson',function(req,res){
	var name=req.body.Name
	var regno=req.body.Regno
	var address=req.body.Address
	var editsql=`update personal set address='${address}', name='${name}' where regno=${regno}`;
	editfunction(con,req,res,editsql)	
})

app.post('/information',function(req,res){	
	if(!req.body.Name){
		req.session.user=req.body.Username
		req.session.pass=req.body.Password
		res.redirect('/showAll')
	}
	else{
		req.session.user=req.body.Username
		req.session.pass=req.body.Password
		req.session.name=req.body.Name
		req.session.role=parseInt(req.body.Role)
		res.redirect('/showAll')
	}
})

app.get('/showAll',function(req,res){
	if(!req.session.name || req.session.name==""){
		var username=req.session.user
		var password=req.session.pass
		var loggeduser=`Select * from users where username='${username}'`
		showRec(con,res,req,loggeduser,password)
	}
	else{
		var username=req.session.user
		var password=req.session.pass
		var name=req.session.name
		req.session.name=""
		var role=req.session.role
		var creatinguser=`Insert into users values(${role},'${username}','${name}','${password}')`
		createUser(con,res,req,username,password,creatinguser)
	}
})

app.listen(8000)