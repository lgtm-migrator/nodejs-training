const { Random } = require('mockjs');
const { range, sum } = require('lodash');
const description = `
sum array items' value, array length <= 100, -10000 < item value < 10000

input       output

[]          0
[1,2,3]     6
[1,99]      100
[-23,23]    0
`;

const template = `
module.exports = (arr = []) => {
    return 0;
};
`;

const createRandomArray = () => range(0, Random.integer(0, 100)).map(() => Random.integer(-10000, 10000));

module.exports = {
    title: 'sum-2',
    description,
    template,
    runner: async (f) => {
        for (let idx = 0; idx < 15; idx++) {
            const arr = createRandomArray();
            const s = sum(arr);
            expect(f(arr), `sum of array ${arr} is ${s}`).toEqual(s);
        }
    }
};