let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n = input[0];
let answer = '';
for(let i=1; i<=n; i++) {
    answer += `Case #${i}: `+ `${+input[i].split(' ')[0] + +input[i].split(' ')[1]}` + '\n';

}

console.log(answer);