let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(input);

function isPrime(num) {
    for(let i=2; i<= Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    if(num === 1) return false;
    return true;
}

let answer = '';
input.forEach((item) => {
    let cnt = 0;
    for(let i=(+item+1); i<= item*2; i++) {
        if(isPrime(i)) {
            cnt++;
        }
    }
    if(cnt) answer += cnt+'\n';
})

console.log(answer);