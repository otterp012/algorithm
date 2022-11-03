const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [R, C] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(""));
const map2 = JSON.parse(JSON.stringify(map));

let start = [];
let fireStart = [];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] === "F") {
      fireStart.push([i, j]);
      map[i][j] = 0;
      map2[i][j] = 0;
    }
    if (map[i][j] === "J") {
      start.push([i, j]);
      map[i][j] = 0;
      map2[i][j] = 0;
    }

    if (map[i][j] === ".") {
      map[i][j] = -1;
      map2[i][j] = -1;
    }
  }
}

// 불이 전파되는 시간을 먼저 구하기

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const fireBfs = (arr, start) => {
  const map = arr;
  const queue = start;

  while (queue.length) {
    const [curR, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = curR + dx[i];
      let ny = curY + dy[i];

      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      if (map[nx][ny] === "#") continue;
      if (map[nx][ny] >= 0) continue;
      map[nx][ny] = map[curR][curY] + 1;
      queue.push([nx, ny]);
    }
  }
  return arr;
};

fireBfs(map, fireStart);

let answer = [];

while (start.length) {
  const [curR, curY] = start.shift();
  for (let i = 0; i < 4; i++) {
    let nx = curR + dx[i];
    let ny = curY + dy[i];
    if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
      answer.push(map2[curR][curY] + 1);
      continue;
    }
    if (map2[nx][ny] === "#") continue;
    if (map2[nx][ny] >= 0) continue;
    if (map2[curR][curY] + 1 >= map[nx][ny] && map[nx][ny] !== -1) continue;
    map2[nx][ny] = map2[curR][curY] + 1;
    start.push([nx, ny]);
  }
}

console.log(answer.length ? answer[0] : "IMPOSSIBLE");
