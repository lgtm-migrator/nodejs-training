
const { Random } = require('mockjs');

const description = `
is less than

input       output

1,2         true
'1','2'     true
'1','1'     false
'1',-1      false
`;

const template = `
/**
 * @param v1 {number|string}
 * @param v2 {number|string}
 */
module.exports = (v1, v2) => {
    return null;
};
`;

module.exports = {
    title: 'str-num-compare',
    description,
    template,
    runner: async (f) => {

        for (let i = 0; i < 15; i++) {
            let v1 = Random.integer(-10000, 10000);
            let v2 = Random.integer(-10000, 10000);
            const b = v1 < v2;
            if (Random.boolean()) {
                v1 = `${v1}`;
            }
            if (Random.boolean()) {
                v2 = `${v2}`;
            }
            expect(f(v1, v2)).toEqual(b);
        }

    }
};