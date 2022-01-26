let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.shift();

let arr = input.map((item) => item.split(' '));

let answer = '';
arr.sort((a,b) => a[0] -b[0]).forEach((item) => {
    answer += item[0] + ' '+ item[1] + '\n'
});
console.log(answer);
