

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

input.shift();

const stack = [];
let answer = '';
input.forEach((item)=> {
    if(item.includes('push')) {
        stack.push(item.split(' ')[1]);
    } else if(item.includes('pop')) {
        if(stack.length)  answer += stack.pop() + '\n';
        else answer += -1 + '\n';
    } else if(item.includes('top')) {
        answer += (stack[stack.length-1] ? stack[stack.length-1] : -1)  + '\n'
    } else if(item.includes('size')) {
        answer += stack.length + '\n'
    } else if(item.includes('empty')) {
        if(stack.length) answer += 0 + '\n'
        else answer += 1 + '\n';
    }
})

console.log(answer);