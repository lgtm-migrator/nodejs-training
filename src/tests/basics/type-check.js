
const description = `
check the input parameter type

input   output

1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'
`;

const template = `
module.exports = (v1) => {
    const t = typeof v1;
    if (t == 'number' || t == 'string') {
        return t;
    }
};
`;

module.exports = {
    title: 'type-check',
    description,
    template,
    runner: async (f) => {
        expect(f(1)).toEqual('number');
        expect(f('2')).toEqual('string');
        expect(f(null)).toEqual('null');
        expect(f(NaN)).toEqual('NaN');
        expect(f([])).toEqual('array');
        expect(f({})).toEqual('object');
    }
};