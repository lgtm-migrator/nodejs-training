const { Random } = require('mockjs');
const { writeFile, unlink, } = require('fs').promises;
const path = require('path');
const os = require('os');

const description = `
请读取系统临时路径下的fs-2-test-file.json文件, 其文件内容必然为JSON格式文本, 格式如下

{
    "host": "a.b.c",
    "port": 22233
}

请返回一个字符串, 格式为host:port

可能使用到的API:
require或者fs
JSON.parse

`;

const template = `
const fs = require('fs').promises;

module.exports = async () => {

    return '';
};
`;


module.exports = {
    title: 'fs-2',
    description,
    template,
    runner: async (f) => {
        const host = Random.domain();
        const port = Random.integer(1, 60000);
        const p = path.join(os.tmpdir(), 'fs-2-test-file.json');

        await writeFile(p, JSON.stringify({ host, port }), { encoding: 'UTF-8' });
        expect(await f(), 'content check failed').toEqual(`${host}:${port}`);
        await unlink(p); // delete tmp file
    }
};