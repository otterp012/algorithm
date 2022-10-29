const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const memo = [];
memo[1] = 0;

for (let i = 2; i <= +input; i++) {
  memo[i] = memo[i - 1] + 1;
  if (i % 3 === 0) memo[i] = Math.min(memo[i], memo[i / 3] + 1);
  if (i % 2 === 0) memo[i] = Math.min(memo[i], memo[i / 2] + 1);
}
console.log(memo[+input]);
