/*
	
请创建一个类，含有如下方法

* push    入栈
* pop     出栈， 当没有元素时返回null
* size    栈大小


*/


module.exports = class Stack {

    constructor() {
        this._items = [];
    }

    push(item) {
        return this._items.push(item);

    }

    pop() {
        const item = this._items.pop();
        if (item) {
            return item;
        } else {
            return null;
        }
    }

    size() {
        return this._items.length;
    }

};
