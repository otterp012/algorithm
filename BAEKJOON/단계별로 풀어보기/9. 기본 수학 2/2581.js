let input = require('fs').readFileSync('example.txt').toString().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


function isPrime(num) {
    for(let i=2; i<num; i++){
        if(num%i === 0) return false;
    }
    if(num === 1) return false;
    return true;
}


let min = +input[0];
let max = +input[1];


let sum = 0;
let minPrime = Number.MAX_SAFE_INTEGER;
for(let i=min; i<=max; i++) {
    if(isPrime(i)) {
        sum += i;
        minPrime = Math.min(minPrime, i);
    }
    
}

let answer = sum+'\n'+minPrime;

if(sum === 0) console.log(-1) 
else console.log(answer);
