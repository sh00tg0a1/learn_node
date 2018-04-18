// 创建 events
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function conected () {
    console.log('连接成功');

    // 触发 data_received 事件
    eventEmitter.emit('data_received', 123);
}

// 绑定 connection 事件
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(aa) {
    console.log(aa, '数据接收成功');
})

// 出发 connection 事件
eventEmitter.emit('connection');

console.log('The End!')
