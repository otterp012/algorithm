const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

const [start, target] = input.map(Number);

const queue = [];
const visited = {};

queue.push(start);
visited[start] = 1;

while (queue.length) {
  const current = queue.shift();
  if (current === target) break;
  const next = [current + 1, current - 1, current * 2];
  for (let i = 0; i < 3; i++) {
    if (visited[next[i]]) continue;
    if (next[i] < 0 || next[i] > 100000) continue;

    queue.push(next[i]);
    visited[next[i]] = visited[current] + 1;
  }
}

const answers = Object.entries(visited);
console.log(answers);
console.log(visited[target] - 1);
