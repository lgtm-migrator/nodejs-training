const { Random } = require('mockjs');

const description = `
s是一个字符串

正常情况下 s的格式为 ID-NAME[USERNAME]:{DATE} (字符串不会含有空格换行符等)
例如 1-Alice,[ALICE1]:{20202020}

异常情况下 s的格式任意

请将字符串结构化并返回一个object
其中包含属性
id: number 无需前缀0
name: string
username: string 
date: string

例如
return {
    id: 1,
    name: "Alice",
    username: "ALICE1",
    date: "20202020"
}

异常情况下，各字段请设置为null，并依然返回object
`;

const template = `
/**
 * @param s {string}
 * @returns {{id:number,name:string,username:string,date:string}}
 */
module.exports = function parse(s = '') {


    return {};
};
`;


module.exports = {
    title: 'parse-text',
    description,
    template,
    runner: async (f) => {

        for (let i = 0; i < Random.integer(10, 30); i++) {
            const id = Random.integer(10000, 99999);
            const name = Random.word(5, 10);
            const upperName = `${name.toUpperCase()}${id}`;
            const date = Random.date('yyyyMMdd');
            const obj = {
                id, name, username: upperName, date
            };
            const s = `${id}-${name},[${upperName}]:${date}`;
            expect(f(s), s).toStrictEqual(obj);
        }

        for (let i = 0; i < Random.integer(5, 30); i++) {
            expect(f(Random.word())).toStrictEqual({
                id: null, name: null, username: null, date: null
            });
        }


    }
};