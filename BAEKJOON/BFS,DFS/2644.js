const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const [num1, num2] = input[1].split(" ").map(Number);
const m = Number(input[2]);

const board = input
  .slice(3, input.length)
  .map((item) => item.split(" ").map(Number));
const lists = Array.from({ length: n + 1 }, () => []);
// 인접리스트 생성하기.

board.forEach((item) => {
  const [start, end] = item;

  lists[start].push(end);
  lists[end].push(start);
});

const visited = {};
const bfs = (start) => {
  const queue = [start];
  visited[start] = 0;
  while (queue.length) {
    const current = queue.shift();

    lists[current].forEach((list) => {
      if (!visited[list] && visited[list] !== 0) {
        visited[list] = visited[current] + 1;
        queue.push(list);
      }
    });
  }
};
bfs(num1);
console.log(visited[num2] ? visited[num2] : -1);
