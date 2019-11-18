//var con=require('./dbConnection')
var info=require('./information.js')
var showRec=require("./checklogged.js")

module.exports=
function createUser(con,res,req,username,password,query) {
	con.query(query,function(err,result){
		if(err){
			console.log(err)
		}
		else{
			req.session.user=username
			req.session.pass=password
			var loggeduser=`Select * from users where username='${username}'`
			showRec(con,res,req,loggeduser,password)
		}
	})
}