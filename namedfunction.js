var myfunction = function() {
	console.log("hello")
}
myfunction()

function operations() {
	var F = function() {
		console.log("hello again")
	}
	return F
}
var myF = operations()
myF()