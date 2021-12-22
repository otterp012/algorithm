let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('example.txt').toString().split(' ');

let max = Number.MIN_SAFE_INTEGER;

for(let x of input){
    x = Number(x.split('').reverse().join(''));
    max = Math.max(max, x);
}
console.log(max);