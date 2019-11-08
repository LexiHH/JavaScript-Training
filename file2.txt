function Add() {
	var result = 0
	for(var i=0; i<arguments.length; i++) {
		result += arguments[i]
	}
	return result
}

console.log(Add(2,5,7))
console.log(Add(2,4))
console.log(Add(2,4,2,5,2,5))