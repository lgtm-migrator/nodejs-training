/*
	
创建一个类
有两个属性(name,size), 构造函数有一个参数name, size的值为name的长度
有两个方法
* setName 设置name的值
* getSize 获取name的长度

input           output

*/


module.exports = () => {

    const c = class {
        constructor(name) {
            this.setName(name);
        }

        setName(name) {
            this.name = name;
            this.size = name.length;
        }

        getSize() {
            return this.size;
        }

    };

    return c;

};
