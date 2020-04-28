/*
	
请编写一个异步函数, 这个函数会传入一个emitter

请让这个emitter监听多个事件

* data: (string) => void
* end: () => void

event: data会被触发多次，每次会传入一个字符串
event: end会被触发一次，当emitter接收到end事件时, 请将之前data事件中的接收到的所有字符串，组成一个数组，按顺序返回(resolve)

*/

module.exports = async (emitter) => {

    return new Promise((resolve, reject) => {
        const datas = [];
        emitter.on('data', data => {
            datas.push(data);
        });
        emitter.on('end', () => resolve(datas));
        emitter.on('error', err => reject(err));
    });

};
