const input = require('fs').readFileSync('example.txt').toString().trim();

const num = +input;

let two = 0;
let five = 0;
for(let i = 1; i <= num; i++) {
    two += check(i,2);
    five += check(i,5);
}

console.log(Math.min(two, five));



function check(n, k) {
    let count = 0;
    while(n > 0) {
        if(n % k) break;
        n = n/k;
        count++;
    }
    return count;
}

