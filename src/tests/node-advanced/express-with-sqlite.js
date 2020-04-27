
const description = `
请参考session-5-example/express/api_user

user table: create table user (id int, name text)

请编写系列CRUD的API

GET /:id get user by id
POST / create user with id & name
PATCH / update user name
DELETE /:id delete user

可能使用到的API:

https://github.com/mapbox/node-sqlite3/wiki/API#databaserunsql-param--callback
https://expressjs.com/zh-cn/4x/api.html#router.METHOD


完成后请自行使用PostMan测试，测试通过后，修改本用例使其返回true
`;

const template = `
module.exports = () => {
    return false;
};
`;

module.exports = {
    title: 'express-with-sqlite',
    description,
    template,
    runner: async (f) => {
        expect(f(), 'please finish the express-with-sqlite task').toBeTruthy();
    }
};