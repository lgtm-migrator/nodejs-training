
const { Random } = require('mockjs');

const description = `
fibonacci array function

f(1) = f(2) = 1; for n > 2, f(n) = f(n - 1) + f(n - 2)
1, 1, 2, 3, 5, 8, 13 ...., 

input       output

0           0
1           1
2           1
3           2
4           3
`;

const template = `
module.exports = function fibo(index) {
    return 1;
};
`;

const fibo = (max = 100) => {
    let i;
    let fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= max; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
};

module.exports = {
    title: 'fibo',
    description,
    template,
    runner: async (f) => {
        const max = 30;
        const fibo_arr = fibo(max);
        for (let idx = 0; idx < 3; idx++) {
            const rIdx = Random.integer(0, max);
            expect(f(rIdx), `fibo(${rIdx}) should be ${fibo_arr[rIdx]}`).toEqual(fibo_arr[rIdx]);
        }

    }
};