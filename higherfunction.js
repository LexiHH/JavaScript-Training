function operations(choice) {
	if(choice == 1) {
		var func = function(A,B) {
			console.log("Result: ",(A+B))
		}
	}
	if(choice == 2) {
		var func = function(A,B) {
			var result = A-B
			console.log("Result: " + result)
		}
	}
	return func
}

var F =operations(2)
F(2,7)