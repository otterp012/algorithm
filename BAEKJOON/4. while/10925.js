// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = require('fs').readFileSync('example.txt').toString().split('\n');

let n = input.length;

let i = 0;
let answer = '';
while(i < n-1) {
    let a = +input[i].split(' ')[0];
    let b = +input[i].split(' ')[1];
    if(a === 0 || b === 0) break
    else {
        answer += `${a+b}` +'\n'
    }
    i++;
}


console.log(answer);