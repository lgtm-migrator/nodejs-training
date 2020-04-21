const { Random } = require('mockjs');

const description = `
请创建一个类，含有如下方法

* push    入栈
* pop     出栈， 当没有元素时返回null
* size    栈大小

`;

const template = `
module.exports = class Stack {

};
`;


module.exports = {
    title: 'stack',
    description,
    template,
    runner: async (f) => {

        const inst = new f();

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

    }
};