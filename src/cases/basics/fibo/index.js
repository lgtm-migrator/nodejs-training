/*
	
fibonacci array function

f(1) = f(2) = 1; for n > 2, f(n) = f(n - 1) + f(n - 2)
1, 1, 2, 3, 5, 8, 13 ...., 

input       output

0           0
1           1
2           1
3           2
4           3

*/


module.exports = function fibo(index) {
    if (index == 0) {
        return 0;
    } else if (index <= 2) {
        return 1;
    } else {
        return fibo(index - 1) + fibo(index - 2);
    }
};
