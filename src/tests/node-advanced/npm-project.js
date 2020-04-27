
const description = `
请使用npm init一个project，名称任意

安装express作为dependency

然后参考express官方文档，编写如下REST API

GET /fibo?count=10
返回count指定长度的fibonacci数组

POST /reverse
Request Body: {"str": "username"} 
Response Body: {"reversed": "emanresu"}

可能用到的API
https://expressjs.com/zh-cn/api.html#express.json

完成后返回true
`;

const template = `
module.exports = () => {
    return false;
};
`;

module.exports = {
    title: 'npm-project',
    description,
    template,
    runner: async (f) => {
        expect(f(), 'please finish the npm related task').toBeTruthy();
    }
};