var con=require('./dbConnection')
var info=require('./information.js')
var showRec=require("./checklogged.js")

module.exports=
function createUser(con,query,res,req) {
	con.query(query,function(err,result){
		if(err){
			console.log(err)
		}
		else{
			con.query('Select * from personal',function(err,result) {
				if(err) {
					console.log(err)
				}
				else {
					req.session.name=""
					res.redirect('/showAll')
				
				}	
			})
		}
	})
	
}