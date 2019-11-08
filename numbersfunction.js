var Numbers = [24,25,26]

var F = function(item) {
	if(item%2 == 0) {
		console.log(item, " is even")
	}
	else {
		console.log(item, " is odd")
	}
}

Numbers.forEach(F)

Numbers.forEach(function(item) {
	if(item%2 == 0) {
		console.log(item, " is even")
	}
	else {
		console.log(item, " is odd")
	}
})
