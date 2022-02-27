const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = +input;



function solution(n, memo = [undefined, 1, 2]) {
    for(let i=3; i<=n; i++) {
        memo[i] = (memo[i-1] + memo[i-2]) % 10007;
    }
    return memo[n];
}

console.log(solution(num))