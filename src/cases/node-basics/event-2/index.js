/*
	
请编写一个异步函数这个函数会传入一个emitter

请让这个emitter监听多个事件

* data: (string) => void
* end: () => void
* error: (error) => void

当emitter接收到end事件时, 请将之前接收到的data返回(resolve)
当emitter接收到error事件时, 请将error抛出(reject)


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
