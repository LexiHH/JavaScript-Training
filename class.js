class Data {
	constructor() {
		this.physics = 24
		this.postcode = "SN3 1PU"
	}
}

var Ref= new Data()
console.log("Physics marks: ", Ref.physics)
Ref.postcode = "SP4 6AW"
console.log(Ref.postcode)