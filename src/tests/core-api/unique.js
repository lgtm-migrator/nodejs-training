const { Random } = require('mockjs');

const description = `
arr1是一个Array, 其中包含任意多元素 (15 <= length <= 1000), 元素的类型不定

请返回arr1中的唯一值

如 arr1 = [1, "1", NaN, 1], 返回值应为[1, "1", NaN]

返回数组元素顺序任意

`;

const template = `
/**
 * @param arr1 {Array<any>}
 */
module.exports = function unique(arr1) {


  return [];
};
`;


module.exports = {
    title: 'unique',
    description,
    template,
    runner: async (f) => {

        const testArr = [2, 2.00];

        for (let idx = 0; idx < Random.integer(30, 200); idx++) {
            testArr.push(Random.integer(10, 30));
        }

        testArr.push('');

        for (let idx = 0; idx < Random.integer(30, 200); idx++) {
            testArr.push(Random.string('number', 2));
        }

        testArr.push(undefined);

        testArr.push('');

        testArr.push(NaN);

        for (let idx = 0; idx < Random.integer(30, 200); idx++) {
            testArr.push(Random.word());
        }

        testArr.push(NaN);

        const set = Array.from(new Set(testArr));

        const result = f(testArr);

        expect(result, 'please return an Array').toBeInstanceOf(Array);
        expect(result != testArr, 'please return a new Array').toBeTruthy();
        expect(result.length, 'the result Array size not correct').toEqual(set.length);

        set.forEach(i => {
            expect(result).toContainEqual(i);
        });

    }
};