const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const DP = Array.from({ length: 30 }, (_, index) =>
  Array.from({ length: index + 1 }),
);
for (let i = 0; i < 30; i++) {
  DP[i][i] = 1;
  DP[i][0] = 1;
}

for (let i = 2; i < 30; i++) {
  for (let j = 1; j < i; j++) {
    // 1번 성질
    DP[i][j] = DP[i - 1][j - 1] + DP[i - 1][j];
  }
}

let answer = "";
for (let i = 0; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += DP[b][a] + "\n";
}
console.log(answer);
