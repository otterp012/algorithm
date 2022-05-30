const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(" ");

const [N, P, Q] = input.map(Number);

const dp = new Map();
dp.set(0, 1);
dp.set(1, 2);

// for (let i = 2; i <= N; i++) {
// let leftNum = Math.floor(i / P);
// let rightNum = Math.floor(i / Q);
// dp.set(i, dp.get(leftNum) + dp.get(rightNum));
// }

// console.log(dp.get(N));
// 메모리 초과 나는 코드
// 1 ~ N

const solve = (n) => {
  if (dp.has(n)) return dp.get(n);
  let leftNum = Math.floor(n / P);
  let rightNum = Math.floor(n / Q);

  dp.set(n, solve(leftNum) + solve(rightNum));
  return dp.get(n);
};
console.log(solve(N));
