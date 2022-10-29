const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const map = input;

const dp = (num) => {
  const memo = [0, 1, 2, 4];
  for (let i = 4; i <= num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  return memo[num];
};

map.forEach((v) => console.log(dp(v)));
