const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, P] = input.shift().split(' ').map(Number);
const map = input.map((v) => v.split(' ').map(Number));

const stack = Array.from({ length: 7 }).map((v) => (v = []));

let answer = 0;
for (let i = 0; i < map.length; i++) {
  let [currentN, currentP] = map[i];
  let currentStack = stack[currentN];

  while (
    currentStack[currentStack.length - 1] > currentP &&
    currentStack.length
  ) {
    currentStack.pop();
    answer++;
  }

  if (currentStack[currentStack.length - 1] !== currentP) {
    currentStack.push(currentP);
    answer++;
  }
}
console.log(answer);
