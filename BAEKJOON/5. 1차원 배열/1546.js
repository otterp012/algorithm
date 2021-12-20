// let input = require('fs').readFileSync('example.txt').toString().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let n = input[0];
let arr = input[1].split(' ');
let max = Number.MIN_SAFE_INTEGER;
for(let x of arr) {
    max = Math.max(+x, max);
}
let sum = 0;
for(let x of arr) {
    sum += +x/max*100
}
console.log((sum/n).toFixed(2));