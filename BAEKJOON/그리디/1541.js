const input = require('fs').readFileSync('./example.txt').toString().trim();

const answer = input
  .split('-')
  .map((v) => (v.includes('+') ? v.split('+') : v))
  .map((v) => (Array.isArray(v) ? v.reduce((acc, cur) => acc + +cur, 0) : +v))
  .reduce((acc, cur) => acc - cur);

console.log(answer);
