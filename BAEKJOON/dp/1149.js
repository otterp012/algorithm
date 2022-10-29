const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = [[0, 0, 0], ...input.map((v) => [0, ...v.split(" ").map(Number)])];

const memo = Array.from({ length: N + 1 }, (v) => (v = [0, 0, 0, 0]));
// i[집의 순서]] [j] [1 === r] 2===G 3=== B
memo[1][1] = map[1][1];
memo[1][2] = map[1][2];
memo[1][3] = map[1][3];

for (let i = 2; i <= N; i++) {
  memo[i][1] = Math.min(memo[i - 1][2], memo[i - 1][3]) + map[i][1];
  memo[i][2] = Math.min(memo[i - 1][1], memo[i - 1][3]) + map[i][2];
  memo[i][3] = Math.min(memo[i - 1][2], memo[i - 1][1]) + map[i][3];
}
memo[N].shift();
console.log(Math.min(...memo[N]));
