var fs = require('fs');
var rs = fs.createReadStream('./mynewFile3.txt');
rs.on('open', function () {
  console.log('The file is open');
});

var events = require('events');
var eventEmitter = new events.EventEmitter();
console.log(eventEmitter);
var myEventHandler = () => {
    console.log("I hear a scream !");
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');
eventEmitter.on('close', myEventHandler);