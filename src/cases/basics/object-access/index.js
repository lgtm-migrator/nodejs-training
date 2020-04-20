/*
	
dynamic object access

input       output

{a:1},'a'   1
{a:1},'b'   null    // not undefined

*/


module.exports = function (obj, propName) {
    return obj[propName] || null;
};
