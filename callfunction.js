var F1 = function(A,B) {
	var result = A+B
	console.log("Result: " + result)
}
var F2 = function(A,B) {
	var result = A-B
	console.log("Result: " + result)
}

function maths(F, A, B) {
	F(A, B)
}
maths(F1, 2, 3)

function maths(F) {
	F(2,3)
}
maths(F2)