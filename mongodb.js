var express=require("express")
var bodyparser=require("body-parser")
var mongo = require('mongodb').MongoClient;
var cors=require('cors')
var bodyparser=require('body-parser')
let url="mongodb://localhost:27017"
var app=express()
app.use(bodyparser.json())
app.set('view engine','ejs')
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/showall",function(req,res){
	mongo.connect('mongodb://localhost:27017', function (err, client) {
		if (err) throw err;
		var db = client.db('shafeeqdb');
		db.collection("personal").find().toArray(function(err, result) {
			if (err) throw err;
			res.send(result);
		});
	});
});

app.post("/post-data",function(req,res){
	let data={
		regno:req.body.regno,
		name:req.body.name,
		marks:req.body.marks
	}
	mongo.connect(url,function(err,client){
		if(err){
			console.log(err)
		}
		else{
			db=client.db("shafeeqdb")
			db.collection("personal").insertOne(data,function(error,result){
				if (error){
					console.log(error)
				}
				console.log("Data added")
			});
		}
	})
	res.end()
})

app.listen(2000)