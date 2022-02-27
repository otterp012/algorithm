// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// const num = +input;



// function dp(n, memo = [undefined, 1, 2]) {
//     for(let i=3; i<=n; i++) {
//         memo[i] = memo[i-1] + memo[i-2];
//     }
//     return memo[n] % 15746;
// }
// console.log(dp(5))
// // 틀림

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = +input;



function dp(n, memo = [undefined, 1, 2]) {
    for(let i=3; i<=n; i++) {
        memo[i] = (memo[i-1] + memo[i-2]) % 15746;
    }
    return memo[n];
}
console.log(dp(num))