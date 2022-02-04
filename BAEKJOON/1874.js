
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(el => Number(el));
input.shift();

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input);


let idx = 0;
const stack = [];
let count = 1;
const result = [];
while(true) {
    if(input[idx] !== count) {
        stack.push(count);
        count++;
        console.log(stack);
    }

    if(input[idx] === stack[stack.length-1]) {
        let popped = stack.pop();
        result.push(popped);
        idx++;
    }

    if(stack.length === input.length) break;
}

console.log(stack);
console.log(result);