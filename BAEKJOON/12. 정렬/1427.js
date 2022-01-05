// let input = require('fs').readFileSync('example.txt').toString().trim();

let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 버블 정렬 큰 수를 맨 뒤에 먼저 정렬

let answer = input.split('').sort((a,b) => b-a).join('');
console.log(answer);