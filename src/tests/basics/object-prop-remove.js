
const { Random } = require('mockjs');

const description = `
从object中移除对应属性

input       output

{a:1},'a'   {}
{a:1},'b'   {a:1}
`;

const template = `
module.exports = (obj, propName) => {
    return null;
};
`;

module.exports = {
    title: 'object-prop-remove',
    description,
    template,
    runner: async (f) => {

        for (let i = 0; i < 15; i++) {
            const n = Random.word();
            const v = Random.integer(1, 100);
            expect(f({ [n]: v }, n), `prop ${n} should be removed from object`).not.toHaveProperty(n);
        }

        for (let i = 0; i < 15; i++) {
            const n = Random.word();
            const n2 = Random.word();

            const v = Random.integer(1, 100);
            expect(f({ [n]: v }, n2), `object should keep the prop ${n}`).toHaveProperty(n);
        }

    }
};