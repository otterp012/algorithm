// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(el => Number(el));

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => Number(el));

input.shift();

const stack = [];

for(let x of input) {
    if(x) stack.push(x);
    else stack.pop();
}

let sum = 0;
for(let x of stack) {
    sum += x;
}

console.log(sum);
