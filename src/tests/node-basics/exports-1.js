const description = `
请编写一个模块，这个模块会exports三个属性

host: string
port: number
addr: string

addr由host:port拼接而成

三个属性的值任意但不为null, undefined或NaN

`;

const template = `
const host = "";

module.exports = {};
`;


module.exports = {
    title: 'exports-1',
    description,
    template,
    runner: async (f) => {
        expect(f).toHaveProperty('host');
        expect(f).toHaveProperty('port');
        expect(f).toHaveProperty('addr');
        expect(typeof f.host).toEqual('string');
        expect(typeof f.addr).toEqual('string');
        expect(typeof f.port).toEqual('number');
        expect(f.addr).toEqual(`${f.host}:${f.port}`);
    }
};