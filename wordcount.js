var name = "Shafeeq is back";
var words = 1;
console.log(name.substring(2,7));
for(var i=0; i<name.length; i++) {
	if(name.substring(i,i+1) == " ") {
		words++;
	}
}
console.log("There are " +words+ " words");

var word = "";
alpha = "";
for(var i=0; i<name.length; i++) {
	if(name.substring(i,i+1) == " ") {
		console.log(word)
		word = "";
	}
	else {
		alpha = name.substring(i,i+1)
		word+=alpha;
	}
}
console.log(word);

var word2 = "";
alpha2 = "";
for(var i=name.length-1; i>=0; i--) {
	if(name.substring(i,i+1) == " ") {
		console.log(word2)
		word2 = "";
	}
	else {
		alpha2 = name.substring(i,i+1)
		word2 = alpha2 + word2;
	}
}
console.log(word2);
