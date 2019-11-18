//var con=require('./dbConnection')
var info=require('./information.js')

module.exports=
function showRec(con, res, req, query, password) {
	var sql=`Select * from personal`
	con.query(query,function(err,result){
		if(result==""){
			res.redirect("/login")
		}
		else{
			result.forEach(function(record) {
				if(record.password!=password){
					res.redirect("/login")
				}
				else{
				var loggeduser=record.name
				var role=record.role
				req.session.role=role
				req.session.name=loggeduser
				info(con,res,sql,loggeduser,role)
				}
			})
		}
	})
}