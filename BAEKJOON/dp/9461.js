// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// function triFib(n, memo = [undefined, 1, 1, 1,]) {
//     if(memo[n] !== undefined) return memo[n];
//     const res = triFib(n-2) + triFib(n-3);
//     memo[n] = res;
//     return res;
// }

// const TC = +input.shift();
// const cases = input.map(Number);

// cases.forEach((item) => {
//     console.log(triFib(item))
// })

function triFib(n, memo = [undefined, 1, 1, 1,]) {
    for(let i=4; i<=n; i++) {
        memo[i] = memo[i-2] + memo[i-3];
    }
    return memo[n];
}
console.log(triFib(12))