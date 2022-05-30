const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, edges, distance, start] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));
let answer = [];
const bfs = (start) => {
  const queue = [start];
  const visited = {};
  visited[start] = 0;

  while (queue.length) {
    const current = queue.shift();

    for (let edge of map) {
      if (current === edge[0] && visited[edge[1]] === undefined) {
        queue.push(edge[1]);
        visited[edge[1]] = visited[current] + 1;
        visited[edge[1]] === distance ? answer.push(edge[1]) : null;
      }
    }
  }
};
bfs(start);
answer.length
  ? console.log(answer.sort((a, b) => a - b).join("\n"))
  : console.log(-1);

// 시간초과
