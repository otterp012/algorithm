const input = require('fs').readFileSync('example.txt').toString().trim();

const N = +input;

const DP = Array.from({ length: 101 }).map(
  (row) => (row = Array.from({ length: 10 }).fill(0))
);

for (let i = 1; i <= 9; i++) {
  DP[1][i] = 1;
}

for (let i = 2; i <= 4; i++) {
  DP[i][0] = DP[i - 1][1];
  for (let j = 1; j < 9; j++) {
    DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % 1_000_000_000;
  }
  DP[i][9] = DP[i - 1][8];
}

console.log(DP);
