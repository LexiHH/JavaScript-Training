//var con=require('./dbConnection')

module.exports=
function showRec(con,res,sql,loggeduser,role) {
	con.query(sql,function(err,result) {
		if(err) {
			console.log(err)
		}
		else {
			if(role==1){
				res.render('information.ejs',
				{
					'Results':result,
					'Loggeduser':loggeduser
				}
			)
			}
			else if(role==2){
				res.render('lessinformation.ejs',
				{
					'Results':result,
					'Loggeduser':loggeduser
				}
			)
			}
				
		}
	})
}