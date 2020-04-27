/*
	
请对当前script进行debug(F5)

请返回i == 5时, tmp的值

*/


let v = 'template';

for (let i = 0; i < 10; i++) {
    const tmp = v.split('').reverse().join('') + i;
    v = tmp;
    // i == 5, tmp == ?
}

module.exports = () => {
    return '420template135';
};
