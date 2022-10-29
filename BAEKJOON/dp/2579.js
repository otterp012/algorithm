const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const map = input;
const N = map[0];
const memo = Array.from({ length: N + 2 }, (v) => Array.from({ length: 3 }));
memo[1][1] = map[1];
memo[1][2] = 0;
memo[2][1] = map[2];
memo[2][2] = map[1] + map[2];
for (let i = 3; i < map.length; i++) {
  memo[i][1] = Math.max(memo[i - 2][1], memo[i - 2][2]) + map[i];
  memo[i][2] = memo[i - 1][1] + map[i];
}

console.log(Math.max(memo[N][1], memo[N][2]).toString());
