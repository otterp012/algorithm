// let recur = 0;

// function fib(n) {
//     recur++;
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// 단순 재귀적 연산을 하면 시간복잡도는 아주 큼
// 2^n의 시간복잡도 : 엄청 안좋음


// let recur = 0;
// function fib(n, memo = []) {
//     recur++;
//     if(memo[n] !== undefined) return memo[n];
//     if(n <= 2) return 1;
//     let res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     console.log(memo);
//     return res;
// }
// fib(7)
// console.log(recur);

function fib(n) {
    if(n <= 2) return 1;
    const fibNums = [0, 1, 1];
    for(let i=3; i<=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    console.log(fibNums);
    return fibNums[n];
}

fib(6);
