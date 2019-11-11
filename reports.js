var dbfcon=require('./dbConnection')

module.exports=
function showRec(Response, query) {
	var con=dbfcon()
	con.query(query,function(err,result) {
		if(err) {
			console.log("Error occurred")
		}
		else {
			Response.writeHead(200, {'Content-Type':'text/HTML'})
			result.forEach(function(record) {
				Response.write("ID: "+record.ID)
				Response.write('<BR>')
				Response.write("Name: "+record.Name)
				Response.write('<BR>')
				Response.write("Postcode: "+record.Postcode)
				Response.write('<BR>')
			})
		}
	})
}