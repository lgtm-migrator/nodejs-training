/*
	
创建一个函数，这个函数被调用时，可能会传入1-100个参数，这个函数的返回值是所有参数的和

*/

const { sum } = require('lodash');

module.exports = () => {
    return function (...args) {
        return sum(args);
    };
};
