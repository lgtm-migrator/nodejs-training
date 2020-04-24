const description = `
请编写一个函数, 动态的将src/cases/core-api中的所有modules加载到一个数组中并返回

可能使用到的API

https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fspromises_readdir_path_options

以及path.join

`;

const template = `
module.exports = async () => {

    return [];
};
`;


module.exports = {
    title: 'require-1',
    description,
    template,
    runner: async (f) => {
        const r = await f();
        expect(r.length, 'only 5 module in core-api').toEqual(5);
    }
};