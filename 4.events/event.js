var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

var looper = null;

event.on('some_event', function(arg1, arg2) {
    console.log('\nsome event emitted!', arg1, arg2);
    clearInterval(looper);
})

looper = setInterval(function(){
    process.stdout.write('.')
}, 100)

setTimeout(function(){
    event.emit('some_event', 11, 22);
}, 2000);

event.addListener('some_event', function(){
    console.log('this is the 2nd listner!');
})

setTimeout(function(){
    event.emit('error');
}, 3000);

event.on('error', function(){
    console.log('error occurred!')
});