const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const map = [0, ...input];

const solve = (map, N) => {
  if (N === 1) return map[1];
  if (N === 2) return map[1] + map[2];

  const memo = Array.from({ length: N + 1 }).fill(0);

  memo[0] = 0;
  memo[1] = map[1];
  memo[2] = map[1] + map[2];

  for (let i = 3; i <= N; i++) {
    memo[i] = Math.max(
      memo[i - 3] + map[i - 1] + map[i],
      memo[i - 2] + map[i],
      memo[i - 1],
    );
  }

  return Math.max(...memo);
};

console.log(solve(map, N));
