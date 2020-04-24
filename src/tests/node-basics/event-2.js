const { Random } = require('mockjs');
const { range } = require('lodash');
const { EventEmitter } = require('events');

const description = `
请编写一个异步函数, 这个函数会传入一个emitter

请让这个emitter监听多个事件

* data: (string) => void
* end: () => void

当emitter接收到end事件时, 请将之前接收到的data数组按顺序返回(resolve)

`;

const template = `
module.exports = async (emitter) => {

    return new Promise((resolve, reject) => {

    });

};
`;

const createRandomArray = () => range(0, Random.integer(0, 100)).map(() => Random.word(5, 13));



module.exports = {
    title: 'event-2',
    description,
    template,
    runner: async (f) => {

        const e = new EventEmitter();
        const arr = createRandomArray();
        const p = f(e);
        arr.forEach(i => e.emit('data', i));
        e.emit('end');
        const r = await p;
        expect(r).toStrictEqual(arr);

    }
};