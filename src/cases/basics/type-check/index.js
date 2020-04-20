/*
	
check the input parameter type

input   output
1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'

*/


module.exports = (v1) => {
    const t = typeof v1;
    if (t == 'number' && isNaN(v1)) {
        return 'NaN';
    } else if (t == 'number' || t == 'string') {
        return t;
    } else if (v1 == null) {
        return 'null';
    } else if (t == 'object' && Array.isArray(v1)) {
        return 'array';
    } else if (t == 'object') {
        return 'object';
    }
};
