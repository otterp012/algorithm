let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[1];
let answer = 0;
for(let x of num) {
    answer += +x;
}

console.log(answer);

