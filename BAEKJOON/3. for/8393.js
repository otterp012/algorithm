
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let sum = 0;
for(let i = 0; i <= +input; i++) {
    sum += i;
}

console.log(sum);