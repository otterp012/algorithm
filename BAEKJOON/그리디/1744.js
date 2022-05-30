const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

const map = input.map(Number).sort((a, b) => a - b);

let idx = N - 1;
let result = [];

while (map[idx] > 0) {
  if (map[idx - 1] <= 0 || map[idx] === 1 || map[idx - 1] === undefined) {
    result.push(map[idx]);
    map.pop();
    idx -= 1;
  } else {
    if (map[idx - 1] === 1) {
      result.push(map[idx]);
      result.push(map[idx - 1]);
    } else {
      result.push(map[idx] * map[idx - 1]);
    }
    map.pop();
    map.pop();
    idx -= 2;
  }
}

idx = 0;

while (map.length) {
  if (map[idx + 1] === 0 || map[idx + 1]) {
    result.push(map[idx] * map[idx + 1]);
    map.shift();
    map.shift();
  } else {
    result.push(map[idx]);
    map.shift();
  }
}

const answer = result.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
