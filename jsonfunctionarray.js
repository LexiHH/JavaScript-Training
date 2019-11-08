class Data {
	constructor() {
		this.records={
		}
	}
	adding(key1, value1) {
		if(this.records[key1] == undefined) {
			this.records[key1] = []
			this.records[key1].push(value1)
		}
		else {
		this.records[key1].push(value1)
		}
	}
}

var Ref= new Data()

console.log(Ref.records)

Ref.adding("training", function() {
	console.log("Cookie break")
})

console.log(Ref.records)

Ref.adding("training", function() {
	console.log("Lunch time")
})

console.log(Ref.records)

Ref.records.training.forEach(function(item){
	item()
})