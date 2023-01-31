const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const list = input[0].split(" ").map(Number);

const dp = [];
for (let i = 0; i < N; i++) {
  dp[i] = list[i];
  for (let j = 0; j <= i; j++) {
    // i=2이면, j는 1,2
    // 100에서 이전의 값중 존재하는 값을 찾음.
    if (list[j] < list[i]) {
      // i는 2일때 i 이전의 값에서 i보다 작은 값이 나오면
      // 수열을 만들 수 있음.
      dp[i] = Math.max(dp[i], dp[j] + list[i]);
      // if (dp[i] < dp[j] + list[i]) {
      //   dp[i] = dp[j] + list[i];
      // }
    }
  }
}

console.log(Math.max(...dp));
// https://github.com/tony9402/baekjoon/blob/main/solution/dynamic_programming_1/11055/main.cpp
