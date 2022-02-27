const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = +input;



// function dp(n, memo = [undefined, 1, 2]) {
//     for(let i=3; i<=n; i++) {
//         memo[i] = memo[i-1] + memo[i-2];
//     }
//     return memo[n] % 15746;
// }
// console.log(dp(5))
// // 틀림

function dp(n, memo = [undefined, 0]) {
    for(let i=2; i<=n; i++) {
        if(i % 2 !== 0 && i % 3 !== 0) {
            memo[i] = memo[i-1] + 1;
        } else if(i % 2 === 0 && i % 3 !== 0) {
            memo[i] = Math.min(memo[i-1], memo[i/2]) + 1;
        } else if(i % 2 !== 0 && i % 3 === 0) {
            memo[i] = Math.min(memo[i-1], memo[i/3]) + 1;
        } else {
            memo[i] = Math.min(memo[i-1], memo[i/2], memo[i/3]) + 1;
        }
    }
    return memo[n];
}

console.log(dp(10));