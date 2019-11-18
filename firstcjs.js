var express=require("express")
var app=express()
app.set('view engine','ejs')

app.get('/',function(request,response){
	response.render('firstexample.ejs',{
		'regno':24,
		'name':'The Shafeeq',
		'phy':45,
		'che':89,
		'mat':90
	})
})

app.listen(8000)