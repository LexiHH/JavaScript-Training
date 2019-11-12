var add=function(a,b){
	return new Promise(function(resolve,reject){
	//can also be written as: return new Promise((resolve,reject)=>{
		if(a!=b){
			var result=a+b
			resolve(result)
		}
		else{
			reject("The numbers shouldn't be the same")
		}
	})
}

var P=add(2,3)
P.then((res)=>{
	console.log("Result of addition: "+res)
},(err)=>{
	console.log(err)
})

//Or can write as:
//var F1 = function(res){
//	console.log("Result of addition: "+res)
//}
//var F2 = function(err){
//	console.log(err)
//}
//P.then(F1,F2)