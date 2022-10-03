const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));
const visited = {};

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[[x, y]] = true;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const result = [[x, y]];
  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[[nx, ny]]) continue;
      if (map[nx][ny] === 0) continue;

      visited[[nx, ny]] = true;
      queue.push([nx, ny]);
      result.push([nx, ny]);
    }
  }
  return result;
};

let tmp = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1 && !visited[[i, j]]) {
      tmp.push(bfs(i, j));
    }
  }
}

let answers = tmp.map((v) => v.length);
let total = answers.length;
let max = answers.length ? Math.max(...answers) : 0;
console.log(total + "\n" + max);
