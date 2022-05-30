// 이코테

const input = `4 5
00110
00011
11111
00000`.split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
// const visited = {};
// const bfs = (x, y) => {
//   const result = [];
//   const queue = [[x, y]];
//   visited[[x, y]] = true;

//   while (queue.length) {
//     for (let i = 0; i < queue.length; i++) {
//       const cur = queue.shift();
//       result.push(cur);
//       for (let i = 0; i < 4; i++) {
//         let nx = cur[0] + dx[i];
//         let ny = cur[1] + dy[i];
//         if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
//           if (!visited[[nx, ny]] && map[nx][ny] === 0) {
//             queue.push([nx, ny]);
//             visited[[nx, ny]] = true;
//           }
//         }
//       }
//     }
//   }

//   return result;
// };

// let answer = 0;
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < M; j++) {
//     if (!map[i][j] && !visited[[i, j]]) {
//       bfs(i, j);
//       answer++;
//     }
//   }
// }

// // console.log(answer);
// DFSRecursive(start) {
//   const result = [];
//   const visited = {};
//   const adjacencyList = this.adjacencyList;

//   function dfs(vertex) {
//     if (!vertex) return;
//     result.push(vertex);
//     visited[vertex] = true;
//     adjacencyList[vertex].forEach((neighbor) => {
//       if (!visited[neighbor]) {
//         return dfs(neighbor);
//       }
//     });
//   }
//   dfs(start);
//   return result;
// }

const result = [];
const visited = {};

const dfs = (x, y) => {
  console.log(result);

  if (x < 0 || y < 0 || x >= N || y >= M) return;
  result.push([x, y]);
  visited[[x, y]] = true;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    console.log(nx, ny);
    if (!visited[[nx, ny]]) return dfs(nx, ny);
  }

  return result;
};
console.log(dfs(0, 0));
``;
