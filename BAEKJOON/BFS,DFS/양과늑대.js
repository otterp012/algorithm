// programmers

const info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
const edge = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 8],
  [8, 7],
  [9, 10],
  [9, 11],
  [4, 3],
  [6, 5],
  [4, 6],
  [8, 9],
];

function solution(info, edge) {
  let answer = 0;
  const visited = {};
  const dfs = (node, sheep, wolf) => {
    for (let i = 0; i < edge.length; i++) {
      if (!visited[i] && edge[i][0] === node) {
        visited[i] = true;
        let nextNode = edge[i][1];
        if (info[nextNode]) {
          dfs(edge[i][1], sheep, wolf + 1);
        } else {
          dfs(edge[i][1], sheep + 1, wolf);
        }
      }
    }
    console.log(node, sheep);
  };
  dfs(0, 0, 0);
  console.log(answer);
  return answer;
}

solution(info, edge);
