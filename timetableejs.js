var express=require("express")
var app=express()
app.set('view engine','ejs')

app.get('/',function(req,res){
	res.render('index.ejs')
})

app.get('/range/:t',function(req,res){
	res.render('range.ejs',{'T':req.params.t})
})
	
app.get('/timetable/:t/:r',function(req,res){
	res.render('timetable.ejs',
	{
		'T':req.params.t,
		'R':req.params.r
	})
})

app.listen(8000)