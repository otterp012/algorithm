const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));

const queue = [];
const visited = {};
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j]);
      visited[[i, j]] = true;
    }
  }
}
while (queue.length) {
  const [curX, curY] = queue.shift();

  for (let i = 0; i < 4; i++) {
    let nx = curX + dx[i];
    let ny = curY + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (map[nx][ny] === -1) continue;
    if (visited[[nx, ny]]) continue;

    if (map[nx][ny] === 0) {
      map[nx][ny] = map[curX][curY] + 1;
      queue.push([nx, ny]);
      visited[[nx, ny]] = true;
    }
  }
}

let isValid = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) isValid = false;
  }
}

let answer = isValid ? Math.max(...map.map((v) => Math.max(...v))) - 1 : -1;
console.log(answer);

// 시간초과