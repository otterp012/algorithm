const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = [0, ...input[0].split(" ").map(Number)];

const memo = Array.from({ length: N + 1 }).fill(1);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    if (map[j] < map[i]) {
      memo[i] = Math.max(memo[i], memo[j] + 1);
    }
  }
}
console.log(Math.max(...memo));
