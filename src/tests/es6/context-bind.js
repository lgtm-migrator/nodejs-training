const { Random } = require('mockjs');

const description = `
请编写一个函数，这个函数有两个参数，第一个参数是一个函数

const f = function () {
    return this.value;
};

第二个参数是一个字符串

请返回一个新的函数，这个函数被调用时会返回value的值
`;

const template = `
module.exports = (f, value = "") => {

};
`;


module.exports = {
    title: 'context-bind',
    description,
    template,
    runner: async (f) => {

        const v = Random.paragraph();

        const f2 = function () {
            return this.value;
        };

        const f3 = f(f2, v);
        expect(typeof f3).toEqual('function');
        expect(f3()).toEqual(v);

    }
};