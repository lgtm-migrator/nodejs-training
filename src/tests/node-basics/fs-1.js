const { Random } = require('mockjs');
const { writeFile, unlink } = require('fs').promises;
const path = require('path');
const os = require('os');

const description = `
请读取系统临时路径下的fs-1-test-file文件, 并以UTF-8格式编码返回文件内容字符串

可能用到的API

os.tmpdir
path.join
fs.readFile

`;

const template = `
const fs = require('fs').promises;

module.exports = async () => {

    return '';
};
`;


module.exports = {
    title: 'fs-1',
    description,
    template,
    runner: async (f) => {
        const t = Random.paragraph();
        const p = path.join(os.tmpdir(), 'fs-1-test-file');
        await writeFile(p, t, { encoding: 'UTF-8' });
        expect(await f(), 'file content check failed').toEqual(t);
        await unlink(p); // delete tmp file
    }
};