let input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(el => Number(el));


let sum = 0;

input.forEach((item) => {
    sum += item**2;
})

console.log(sum%10);


let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => Number(el));


let sum = 0;

input.forEach((item) => {
    sum += item**2;
})

console.log(sum%10);