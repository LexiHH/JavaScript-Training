var con=require('./dbConnection')
var showRec=require("./checklogged.js")

module.exports=
function editfunction(con,req,res,query) {
	con.query(query,function(err,result){
		if(err){
			console.log(err)
		}
		else{
			req.session.name=""
			res.redirect('/showAll')
		}
	})
}