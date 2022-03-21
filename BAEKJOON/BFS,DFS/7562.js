const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

function bfs(x, y, N, lx, ly) {
  const queue = [[x, y]];
  const visited = {};
  const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const dy = [-2, -1, 1, 2, -2, -1, 1, 2];

  visited[[x, y]] = 1;
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let coord = queue.shift();
      if (visited[[coord[0], coord[1]]]) continue;
      for (let i = 0; i < 8; i++) {
        let nx = coord[0] + dx[i];
        let ny = coord[1] + dy[i];

        if (nx < 0 || ny < 0 || nx >= N || ny >= N )
          continue;
        if (!visited[[nx, ny]]) {
          visited[[nx, ny]] = visited[coord] + 1;
          if (nx === lx && ny === ly) {
            return visited[[lx, ly]] - 1;
          }
          queue.push([nx, ny]);
        }
      }
    }
  }
}

let TC = +input.shift();
let answer = '';
let count = 0;
while (count < TC * 3) {
  let N = +input[count];
  let [x, y] = input[count + 1].split(' ').map(Number);
  let [lx, ly] = input[count + 2].split(' ').map(Number);
  count += 3;
  if (x === lx && y === ly) answer += 0 + '\n';
  else answer += bfs(x, y, N, lx, ly) + '\n';
}

console.log(answer);
