let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((el) => Number(el));
input.shift();

let arr = input.map((items) => items.split(' ').map(el=>Number(el)));
console.log(arr);

let sorted = arr.sort();
console.log(sorted);