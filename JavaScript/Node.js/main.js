var events = require('events');
var eventEmitter = new events.EventEmitter();
var listner1 = function listner1(){
	console.log('listner 1 is executed');
}
var listner2 = function listner2()
{
	console.log('listner 2 is executed');
}
eventEmitter.addListener('connection',listner1);
eventEmitter.on('connection',listner2);
eventEmitter.emit('connection');