

const createRandomDate = () => new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

const description = `
使用给定格式对日期进行格式化

d是一个Date对象, f是一个字符串
f中可能包含的占位符:

yyyy, year
MM, month, 1,2,3,4, .... 12
dd, day of month, 1 .... 30 (31)

例如:
const d = new Date("2020-01-01")
const f = 'dd-dd-dd-yyyy'

formatDate(d, f) // 01-01-01-2020

please ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

`;

const template = `
/**
 * @param d {Date}
 * @param f {string}
 * @returns {string}
 */
module.exports = function formatDate(d, f) {


    return '';
};
`;


module.exports = {
    title: 'format-date',
    description,
    template,
    runner: async (fuc) => {
        for (let i = 0; i < 10; i++) {
            const d = createRandomDate();
            const f = 'dd-yyyy-MM';
            expect(fuc(d, f), `date: ${d.toISOString()}, format ${f}`)
                .toEqual(`${d.getDate()}-${d.getFullYear()}-${d.getMonth() + 1}`);
        }

        for (let i = 0; i < 10; i++) {
            const d = createRandomDate();
            const f = 'yyyy MM/dd';
            expect(fuc(d, f), `date: ${d.toISOString()}, format ${f}`)
                .toEqual(`${d.getFullYear()} ${d.getMonth() + 1}/${d.getDate()}`);
        }

        for (let i = 0; i < 10; i++) {
            const d = createRandomDate();
            const f = 'yyyy [yyyy] MM/dd';
            expect(fuc(d, f), `date: ${d.toISOString()}, format ${f}`)
                .toEqual(`${d.getFullYear()} [${d.getFullYear()}] ${d.getMonth() + 1}/${d.getDate()}`);
        }
    }
};