// 이코테

const input = `5 6
101010
111111
000001
111111
111111`.split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));
console.log(map);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

const visited = {};
const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[[x, y]] = true;

  while (queue.length) {
    let cur = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = cur[0] + dx[i];
      let ny = cur[1] + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (!visited[[nx, ny]] && map[nx][ny] === 1) {
          queue.push([nx, ny]);
          map[nx][ny] = map[cur[0]][cur[1]] + 1;
        }
      }
    }
  }
};
bfs(0, 0);
console.log(map);
