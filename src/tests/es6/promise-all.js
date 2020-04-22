const { Random } = require('mockjs');
const { md5 } = require('../utils');
const { range } = require('lodash');

const description = `
f1是一个函数, 有一个参数, 执行后会返回Promise
arr是一个字符串数组, 包含任意多(10<length<100)字符串
请将arr中的每一个字符串传入f1中, 并等待所有promise结束后返回
cb是回调函数, 请将结果(数组)(按照顺序)作为第一个参数传入cb
`;

const template = `
module.exports = (f1, arr, cb) => {

};
`;


module.exports = {
    title: 'promise-all',
    description,
    template,
    runner: async (f) => {

        const arr = range(Random.integer(10, 100)).map(() => Random.word());
        const arr_assert = arr.map(v => md5(v));
        let f1Invoked = false;

        const f1 = v => {
            f1Invoked = true;
            return new Promise(res => res(md5(v)));
        };

        const cb = (arr) => {
            expect(arr, 'result not correct').toStrictEqual(arr_assert);
        };

        f(f1, arr, cb);

        expect(f1Invoked, 'f1 must be called').toEqual(true);

    }
};