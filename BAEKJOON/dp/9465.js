const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 하나만 가지고 해보면,
const TC = Number(input.shift());
const solve = (n, lists) => {
  const DP = Array.from({ length: n + 1 }, () => [0, 0]);
  DP[1][0] = lists[0][0];
  DP[1][1] = lists[1][0];
  for (let i = 2; i <= n; i++) {
    DP[i][0] = Math.max(DP[i - 1][1], DP[i - 2][1]) + lists[0][i - 1];
    DP[i][1] = Math.max(DP[i - 1][0], DP[i - 2][0]) + lists[1][i - 1];
  }

  return Math.max(...DP[n]);
};

let answer = "";
for (let i = 0; i < TC * 3; i += 3) {
  const N = Number(input[i]);
  const Lists = [
    input[i + 1].split(" ").map(Number),
    input[i + 2].split(" ").map(Number),
  ];
  answer += solve(N, Lists) + "\n";
}

console.log(answer);
