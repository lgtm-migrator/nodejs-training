const { Random } = require('mockjs');

const description = `
创建一个类
有两个属性(name, size), 构造函数有一个参数name, size的值为name的长度
有两个方法
* setName 设置name的值
* getSize 获取name的长度

请注意size属性必须存在于instance上并可以直接访问
`;

const template = `
module.exports = class {

};
`;


module.exports = {
    title: 'create-class',
    description,
    template,
    runner: async (f) => {
        const clazz = f;
        expect(typeof clazz).toBe('function');

        const text1 = Random.paragraph();
        const text2 = Random.paragraph();
        const i = new clazz(text1);
        expect(i).toHaveProperty('setName');
        expect(i).toHaveProperty('getSize');
        expect(i).toHaveProperty('name');
        expect(i).toHaveProperty('size');
        expect(i.size).toEqual(text1.length);
        expect(i.getSize()).toEqual(text1.length);

        i.setName(text2);
        expect(i.name).toEqual(text2);
        expect(i.size).toEqual(text2.length);
        expect(i.getSize()).toEqual(text2.length);

    }
};