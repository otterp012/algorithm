let input = require('fs').readFileSync('example.txt').toString().trim();

let num = +input;
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let temp = num;
let answer = '';
while(true) {
    for(let i=2; i<=temp; i++) {
        if(temp % i === 0) {
            answer += i + '\n'
            temp = temp/i;
            break;
        }
    }
    if(temp === 1) break;
}



num !==1 ? console.log(answer) : null;