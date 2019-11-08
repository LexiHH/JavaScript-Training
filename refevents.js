var refevents = require("events")
var emitter = new refevents.EventEmitter()

emitter.on("Boom", function() {
	console.log("hello")
})
emitter.on("Boom", function() {
	console.log("goodbye")
})
emitter.on("Fire", function() {
	console.log("hello")
})

emitter.emit("Boom")
