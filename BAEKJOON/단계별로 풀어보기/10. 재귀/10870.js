let input = require('fs').readFileSync('example.txt').toString();

// let input = require('fs').readFileSync('/dev/stdin').toString();

let num = +input;

function fib(n) {
    if(n === 0) return 0;
    else if(n === 1) return 1;
    else if(n >= 2)  return fib(n-1) + fib(n-2);
}

console.log(fib(num));