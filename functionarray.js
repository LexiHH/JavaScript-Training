var something=[]
var msg = function() {
	console.log("hello")
}
something.push(msg)
something.push(function() {
	console.log("hello2")
})
something.push(function() {
	console.log("hello3")
})

for (var i=0; i<something.length; i++) {
	something[i]()
}

something.forEach(function(item) {
	item()
})
