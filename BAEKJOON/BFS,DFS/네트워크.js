// programmers

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

const bfs = (x, y) => {
  const visited = {};
  const queue = [[x, y]];
  visited[[x, y]] = true;
  const result = [];
  while (queue.length) {
    const [start, end] = queue.shift();
    result.push([start, end]);
    console.log(result);
    for (let i = 0; i < n; i++) {
      if (computers[start][i] === 1) {
        if (!visited[[start, i]]) {
          queue.push([start, i]);
          visited[[start, i]] = true;
        }
      }
    }
  }
  return result;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i !== j && computers[i][j] == 1) {
      console.log(bfs(0, 0));
    }
  }
}

function solution(n, computers) {
  var answer = 0;

  return answer;
}
