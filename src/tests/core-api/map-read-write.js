const { Random } = require('mockjs');

const description = `
编写一段逻辑，读取Map m中的所有value
Map m的key皆为number
Map m的value皆为string，格式如'Qtrv Nutesxgya Gblpmjv Yjwiti Xiosjw', 只会包含字母及空格, 该value的有五个单词

请统计Map m中所有value中的单词数目总和
并将该总和的值通过key "__total__" 填入Map m中

最后返回原Map m
`;

const template = `
/**
 * @param m {Map<any, string>}
 */
module.exports = function mapReadWrite(m) {


  return m;
};
`;


module.exports = {
    title: 'map-read-write',
    description,
    template,
    runner: async (f) => {
        const testMap = new Map();
        const paragraphSize = Random.integer(5, 15);

        let totalWords = 0;

        for (let idx = 0; idx < paragraphSize; idx++) {
            const p = Random.title(3, 15);
            totalWords += p.split(' ').length;
            testMap.set(Random.increment(10), p);
        }

        const r = f(testMap);
        expect(r == testMap, 'don not return a new Map instance').toBeTruthy();
        expect(r, "please set '__total__' key pair to map instead of add __total__ property to map").not.toHaveProperty('__total__');
        expect(r.has('__total__'), 'must have __total__ key in map').toBeTruthy();
        expect(r.get('__total__'), 'words value must equal').toEqual(totalWords);
    }
};