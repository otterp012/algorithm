let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');


let min = +input[0];
let max = +input[1];

function isPrime(N) {
    if(N === 1) return false;

    for(let i = 2; i <= Math.sqrt(N); i++) {
        if(N % i === 0) return false; 
    }

    return true;
}


let answer = '';
for(let i=min; i<=max; i++) {
    if(isPrime(i)) answer += i + '\n'
}

console.log(answer);