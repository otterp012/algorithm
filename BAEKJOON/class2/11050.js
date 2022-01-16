let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const n = +input[0];
const k = +input[1];


function recursion(n, k) {
    if( k=== 0 || n === k) return 1;

    return recursion(n-1,k) + recursion(n-1,k-1);
}

console.log(recursion(4,2));