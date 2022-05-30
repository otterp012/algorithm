const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const map = input.shift().split(' ').map(Number);

const stack = [];
const answer = Array.from({ length: N - 1 }).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length) {
    if (map[stack[stack.length - 1]] < map[i]) {
      answer[stack[stack.length - 1]] = map[i];
      stack.pop();
    } else break;
  } 
  stack.push(i)
}


answer.push(-1);
console.log(answer.join(' '));
