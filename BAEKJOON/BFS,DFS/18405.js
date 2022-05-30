const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const [S, X, Y] = input.pop().split(" ").map(Number);
const board = input.map((v) => v.split(" ").map(Number));

const data = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j]) {
      data.push([board[i][j], 0, i, j]);
    }
  }
}

data.sort((a, b) => a[0] - b[0]);

const queue = data;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

while (queue.length) {
  const [virus, s, x, y] = queue.shift();

  if (s === S) break;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
    if (!board[nx][ny]) {
      board[nx][ny] = virus;
      queue.push([virus, s + 1, nx, ny]);
    }
  }
}

console.log(board[X - 1][Y - 1]);
