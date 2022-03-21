const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
const arr = input.map((row) => (row = row.split('').map(Number)));

function bfs(x, y) {
  const queue = [[x, y]];
  const visited = {};
  visited[[x, y]] = true;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];
  let cnt = 1;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let X = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = X[0] + dx[j];
        let ny = X[1] + dy[j];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < arr.length &&
          ny < arr.length &&
          arr[nx][ny] === 1 &&
          !visited[[nx, ny]]
        ) {
          visited[[nx, ny]] = true;
          arr[nx][ny] = 0;
          cnt++;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return cnt;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j]) console.log(bfs(i, j));
  }
}
