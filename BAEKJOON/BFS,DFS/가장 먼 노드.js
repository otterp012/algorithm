let edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

// function solution(n, edge) {
//   const visited = {};
//   const bfs = (num) => {
//     const queue = [num];
//     visited[num] = 1;
//     while (queue.length) {
//       for (let i = 0; i < queue.length; i++) {
//         let current = queue.shift();
//         for (let i = 0; i < edge.length; i++) {
//           if (edge[i][0] === current && visited[edge[i][1]] === undefined) {
//             queue.push(edge[i][1]);
//             visited[Number(edge[i][1])] = visited[current] + 1;
//           }
//         }
//       }
//     }
//   };
//   bfs(1);
//   const tmp = Object.values(visited);
//   const answer = tmp.filter((v) => v === Math.max(...tmp)).length;
//   return answer;
// }
// console.log(solution(0, edge));

function solution(n, edge) {
  const visited = {};

  const bfs = (num) => {
    const queue = [num];
    visited[num] = 1;
    while (queue.length) {
      let current = queue.shift();
      let newLen = visited[current] + 1;
      for (const node of edge) {
        if (current == node[0] && !visited[node[1]]) {
          queue.push(node[1]);
          visited[node[1]] = newLen;
        }

        if (current === node[1] && !visited[node[0]]) {
          queue.push(node[0]);
          visited[node[0]] = newLen;
        }
      }
    }
  };
  bfs(1);
  const values = Object.values(visited);
  const max = Math.max(...values);

  return values.filter((v) => v === max).length;
}
console.log(solution(0, edge));
