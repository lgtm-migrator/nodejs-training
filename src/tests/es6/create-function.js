const { Random } = require('mockjs');
const { range, sum } = require('lodash');

const description = `
创建一个函数，这个函数被调用时，可能会传入1-100个参数，这个函数的返回值是所有参数的和

input           output
fSum(1,2,3)     6
fSum(2,3)       5
`;

const template = `
module.exports = () => {
    return function fSum() {

    };
};
`;

const createRandomArray = () => range(0, Random.integer(0, 100)).map(() => Random.integer(-10000, 10000));

module.exports = {
    title: 'create-function',
    description,
    template,
    runner: async (f) => {
        for (let idx = 0; idx < 15; idx++) {
            const a = createRandomArray();
            expect(f()(...a)).toEqual(sum(a));
        }
    }
};