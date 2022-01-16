let input = require("fs").readFileSync("/dev/stdin").toString().split('\n');


let n = input[0];
let answer = '';
for(let i=1; i<=n; i++) {
    answer += (+input[i].split(' ')[0]+ +input[i].split(' ')[1])+'\n';
}

console.log(answer);