
const description = `
请对当前script进行debug(F5)

请返回i == 5时, tmp的值
`;

const template = `
let v = 'template';

for (let i = 0; i < 10; i++) {
    const tmp = v.split('').reverse().join('') + i;
    v = tmp;
    // i == 5, tmp == ?
}

module.exports = () => {
    return ''; // return the value of 'tmp' when i == 5
};


`;


module.exports = {
    title: 'debug',
    description,
    template,
    runner: async (f) => {
        expect(f(), 'please debug, inspect the value and return it').toEqual('420template135');
    }
};