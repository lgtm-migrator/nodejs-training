const { Random } = require('mockjs');

const description = `
f1, f2, cb 是不同的函数
f1, f2调用时会返回Promise
f1没有参数, f2有一个参数

请先调用f1, 获取f1 resolve的返回值，然后调用f2并传入该返回值

最后将f2 resolve的值传入cb中

不需要进行异常处理
`;

const template = `
module.exports = (f1, f2, cb) => {

};
`;


module.exports = {
    title: 'promise',
    description,
    template,
    runner: async (f) => {

        return new Promise(resolve => {
            const value1 = Random.word();
            const value2 = Random.word();
            const value3 = value1 + value2;

            let f1Invoked = false;

            const cb = (v) => {
                expect(v, 'value is not equal').toEqual(value3);
                resolve();
            };

            const p1 = () => {
                f1Invoked = true;
                return new Promise(res => res(value1));
            };

            const p2 = (v = '') => {
                return new Promise(res => res(v + value2));
            };

            f(p1, p2, cb);

            expect(f1Invoked, "you must at least call the 'p1' function").toBeTruthy();
        });

    }
};