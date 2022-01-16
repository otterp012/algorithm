// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let x = +input[0].split(' ')[1];

let arr = input[1].split(' ');
let answer = '';

for(let s of arr) {
    if(s < x) answer += s+' ';
}

console.log(answer);