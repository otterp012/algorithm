const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const map = input.map((row) => row.split(''));
const visited = {};

// function bfs(x, y, target1, target2 = null) {
//   const queue = [[x, y]];
//   const result = [];
//   visited[[x, y]] = true;
//   visited2[[x, y]] = true;
//   const dx = [0, 0, 1, -1];
//   const dy = [1, -1, 0, 0];

//   for (let coord of queue) {
//     result.push(coord);
//     console.log(queue);
//     for (let i = 0; i < 4; i++) {
//       let nx = coord[0] + dx[i];
//       let ny = coord[1] + dy[i];

//       if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
//         if (!target2) {
//           if (map[nx][ny] === target1 && !visited[[nx, ny]]) {
//             visited[[nx, ny]] = true;
//             queue.push([nx, ny]);
//           }
//         } else {
//           if (
//             (map[nx][ny] === target1 || map[nx][ny] === target2) &&
//             !visited2[[nx, ny]]
//           ) {
//             visited2[[nx, ny]] = true;
//             queue.push([nx, ny]);
//             console.log(visited2);
//           }
//         }
//       }
//     }
//   }
// }

function bfs(x, y, obj, target1) {
  const queue = [[x, y]];
  const result = [];
  obj[[x, y]] = true;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  for (let coord of queue) {
    result.push(coord);
    for (let i = 0; i < 4; i++) {
      let nx = coord[0] + dx[i];
      let ny = coord[1] + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        map[nx][ny] === target1 &&
        !obj[[nx, ny]]
      ) {
        obj[[nx, ny]] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

function getAnswer(obj, target1) {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!obj[[i, j]] && map[i][j] === target1) {
        bfs(i, j, obj, target1);
        answer++;
      }
    }
  }
  return answer;
}

const visited2 = {};
function bfs2(x, y, target1) {
  const queue = [[x, y]];
  const result = [];
  if (map[x][y] === 'G') map[x][y] = 'R';
  visited2[[x, y]] = true;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  for (let coord of queue) {
    result.push(coord);
    for (let i = 0; i < 4; i++) {
      let nx = coord[0] + dx[i];
      let ny = coord[1] + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        map[nx][ny] === target1 &&
        !visited2[[nx, ny]]
      ) {
        visited2[[nx, ny]] = true;
        queue.push([nx, ny]);
      }
    }
  }
}
const r = getAnswer(visited, 'R');
const g = getAnswer(visited, 'G');
const b = getAnswer(visited, 'B');

const answer1 = r + g + b;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 'G') map[i][j] = 'R';
  }
}
const answer2 = getAnswer(visited2, 'R') + b;

console.log(answer1 + ' ' + answer2);
