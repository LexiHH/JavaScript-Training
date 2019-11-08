var mysql = require("mysql")
var con = mysql.createConnection( {
	"host":"localhost",
	"user":"root",
	"password":"root",
	"database":"nationwide"
})
con.connect(function(abc) {
	con.query("Select * from school", function(err, result, fields) {
		result.forEach(function(item) {
			console.log(item.name)
		})
	})
})