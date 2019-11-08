class Data {
	constructor() {
		this.something={
			"A": function(){
				console.log("hello")
			},
			"B": function(){
				console.log("hello2")
			}
		}
	}
}

var Ref = new Data()
Ref.something["A"]()
Ref.something["B"]()
Ref.something.A()

