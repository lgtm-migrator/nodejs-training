const { Random } = require('mockjs');

const description = `
(请先完成训练 - stack)

创建一个类LimitedStack, 继承于Stack类

构造器含有一个参数limit (10 < limit < 1000)

当push item时，如果stack的大小 大于等于 limit的值，请抛出任意异常

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw

`;

const template = `

const Stack = require('../stack');

module.exports = class LimitedStack {

};
`;


module.exports = {
    title: 'stack-extend',
    description,
    template,
    runner: async (f) => {

        const limit = Random.integer(10, 1000);
        const inst = new f(limit);

        expect(inst).toHaveProperty('push');
        expect(inst).toHaveProperty('pop');
        expect(inst).toHaveProperty('size');

        for (let idx = 0; idx < 5; idx++) {
            const v = Random.word();
            inst.push(v);
            expect(inst.pop()).toEqual(v);
        }

        for (let idx = 0; idx < 5; idx++) {
            const v = Random.word();
            inst.push(v);
        }

        expect(inst.size()).toEqual(5);

        for (let idx = 0; idx < 5; idx++) {
            inst.pop();
        }

        expect(inst.pop(), 'stack should return "null" if empty').toBeNull();

        for (let idx = 0; idx < limit; idx++) {
            inst.push(Random.word());
        }

        expect(() => { inst.push(Random.word()); }, 'stack should throw error when stack size >= limit').toThrowError();

    }
};