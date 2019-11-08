class Data {
	constructor() {
		this.record={
			"regno":"001",
			"name":"Lexi",
			"address":"manchester",
			"emails":["A1","A2","A3"]
		}
	}
	adding(key1, value1) {
	this.record[key1] = value1
	}
}

var Ref= new Data()

console.log(Ref.record["regno"])
console.log(Ref.record.regno)

Ref.record.emails.forEach(function(item){
	console.log(item)
})
Ref.record.emails.forEach((item) => {
	console.log(item)
})

Ref.adding("postcode","M234")
Ref.adding("regno", "002")
console.log(Ref.record)
Ref.record.regno = "003"
console.log(Ref.record)
