module.exports=
function TimesTable(T,R,res){
	console.log(T)
	console.log(R)
	for(var i=1;i<=R;i++) {
		var result=(T*i)
		res.write(T+'x'+i+'='+result)
		res.write('<BR>')
	}
	res.end()
}
	