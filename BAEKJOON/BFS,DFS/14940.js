const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((item) => item.split(" ").map(Number));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

// 모든 지점에 대해서, 목표지점까지의 거리
// 목표지점에서 해당 지점까지의 최단거리.

const visited = {};
let start = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 2) {
      start = [i, j];
      visited[[i, j]] = true;
      board[i][j] = 0;
    }
    if (board[i][j] === 0) visited[[i, j]] = true;
    if (board[i][j] === 1) board[i][j] = -1;
  }
}

const isValid = (row, col) => {
  if (row < 0 || col < 0 || row >= N || col >= M) return false;
  return true;
};

const bfs = (start) => {
  const queue = [start];
  while (queue.length) {
    const [curRow, curCol] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + curRow;
      let ny = dy[i] + curCol;

      if (!isValid(nx, ny)) continue;
      if (visited[[nx, ny]]) continue;
      board[nx][ny] = board[curRow][curCol] + 1;
      visited[[nx, ny]] = true;
      queue.push([nx, ny]);
    }
  }
};

bfs(start);

console.log(board.map((item) => item.join(" ")).join("\n"));
