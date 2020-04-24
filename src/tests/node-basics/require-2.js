const description = `
请将require-1中exports的function重新exports一次
`;

const template = `
module.exports = null;
`;


module.exports = {
    title: 'require-2',
    description,
    template,
    runner: async (f) => {
        expect(f, 'must export a function').toBeInstanceOf(Function);
    }
};