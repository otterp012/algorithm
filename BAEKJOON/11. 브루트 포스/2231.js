let input = require('fs').readFileSync('example.txt').toString().trim();

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = +input;

function check(num) {
    let sum = num;

    while(num > 0) {
        sum += num%10;
        num = Math.floor(num/10);
    }

    return sum;
}

for(let i=0; i<= 1000000; i++) {
    if(check(i) === n) {
        console.log(i);
        break;
    } 
    if(i === 1000000) console.log(0);
}

