
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n = input[0];

for(let i = 1; i <= n; i++) {
    console.log(+input[i].split(" ")[0] + +input[i].split(" ")[1]);
}
