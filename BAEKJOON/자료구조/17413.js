const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const regExp = /(<.+?>|\s)/g;

const tmp = input.split(regExp);
let answer = '';
tmp.forEach((v) =>
  regExp.test(v) ? (answer += v) : (answer += v.split('').reverse().join(''))
);
console.log(answer);
