/*
	
请读取系统临时路径下的fs-2-test-file.json文件, 其文件内容必然为JSON格式文本, 格式如下

{
    "host": "a.b.c",
    "port": 22233
}

请返回一个字符串, 格式为

可能使用到的API:
require或者fs
JSON.parse


*/
const path = require('path');
const os = require('os');
const fs = require('fs').promises;

module.exports = async () => {
    const m = JSON.parse(
        await fs.readFile(path.join(os.tmpdir(), 'fs-2-test-file.json'), { encoding: 'UTF-8' })
    );
    return `${m.host}:${m.port}`;
};
