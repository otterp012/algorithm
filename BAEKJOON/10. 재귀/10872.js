let input = require('fs').readFileSync('example.txt').toString();

// let input = require('fs').readFileSync('/dev/stdin').toString();

let num = +input;

function factiorial(n) {
    if(n <= 1) return 1;

    
    return n * factiorial(n-1);
}

console.log(factiorial(num));