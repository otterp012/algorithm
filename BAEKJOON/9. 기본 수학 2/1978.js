let input = require('fs').readFileSync('example.txt').toString().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

let arr = input.join('').split(' ');
let cnt = 0;

function isPrime(num) {
    for(let i=2; i<Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    if(num === 1) return false;
    return true;
}

for(let x of arr) {
    if(isPrime(+x)) cnt++;
}
console.log(cnt);