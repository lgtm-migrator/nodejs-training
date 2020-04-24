const description = `
请访问'exports-1'模块, 并export 'exports-1'模块中的addr
`;

const template = `
module.exports = { addr };
`;


module.exports = {
    title: 'exports-2',
    description,
    template,
    runner: async (f) => {
        expect(f).toHaveProperty('addr');
    }
};