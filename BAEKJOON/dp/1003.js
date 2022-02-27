const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const TC = +input.shift();
const cases = input.map(Number);

function fibZero(n, memo = [1, 0]) {
    if(memo[n] !== undefined) return memo[n];
    // fibZero(1)  = 1, fibZero(2) = 0;
    const res = fibZero(n-1) + fibZero(n-2);
    memo[n] = res;
    return res;
}

function fibOne(n, memo = [0, 1]) {
    if(memo[n] !== undefined) return memo[n];
    const res = fibOne(n-1) + fibOne(n-2);
    memo[n] = res;
    return res;
}

// 이렇게 만들어둔 함수를 하나로 합쳐야 한다.
function fib(n) {  
    const fibNums = [[1, 0], [0, 1]];
    for(let i=2; i<=n; i++) {
        fibNums[i] = [fibNums[i-1][0] + fibNums[i-2][0],
                        fibNums[i-1][1] + fibNums[i-2][1]]
    }
    return fibNums[n];
}
let answer = '';
cases.forEach((item) => {
    answer += fib(item).join(' ')+'\n';
})
console.log(answer);
