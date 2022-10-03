// 백준 2178 미로찾기

const input = require("fs")
  .readFileSync("../example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const bfs = () => {
  const queue = [[0, 0]];
  const visited = {};
  visited[[0, 0]] = true;

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[[nx, ny]]) continue;
      if (!map[nx][ny]) continue;
      queue.push([nx, ny]);
      visited[[nx, ny]] = true;
      map[nx][ny] = map[curX][curY] + 1;
    }
  }
};

bfs();

let max = Math.max(...map.map((v) => Math.max(...v)));
console.log(max);
