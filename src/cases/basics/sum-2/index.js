/*
	
sum array items' value, array length <= 100, -10000 < item value < 10000

input       output

[]          0
[1,2,3]     6
[1,99]      100
[-23,23]    0

*/


module.exports = (arr = []) => {
    return arr.reduce((pre, cur) => pre + cur, 0);
};
