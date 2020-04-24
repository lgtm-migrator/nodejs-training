/*
	
请编写一个函数, 动态的将src/cases/core-api中的所有modules加载到一个数组中并返回

可能使用到的API

https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fspromises_readdir_path_options


*/

const { readdir } = require('fs').promises;
const path = require('path');

module.exports = async () => {
    const dir = await readdir(path.join(__dirname, '../../core-api'));
    return dir.map(d => require(path.join(__dirname, '../../core-api', d)));
};
