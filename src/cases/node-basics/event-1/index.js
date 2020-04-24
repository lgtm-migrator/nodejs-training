/*
	
请编写并返回一个EventEmitter instance

该emitter需要响应wow事件, 并将第一个参数传入cb中

例如
emitter.emit("wow", "123123") // => exec cb("123123")


*/

const { EventEmitter } = require('events');

module.exports = (cb) => {
    const emitter = new EventEmitter();
    emitter.on('wow', cb);
    return emitter;
};
