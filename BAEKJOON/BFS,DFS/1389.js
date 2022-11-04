const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const bacon = new Array(N + 1).fill(0);
const graph = [...new Array(N + 1)].map(() => []);

input.forEach((v) => {
  const [start, end] = v.split(" ").map((v) => +v);
  graph[start].push(end);
  graph[end].push(start);
});

const BFS = (start) => {
  const visited = new Array(N + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [node, count] = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      bacon[start] += count;
      // 첫번째 노드는 자기 자신이므로, count += 해주고
      // count++ 해주자.
      count++;
      console.log(bacon[start]);
      graph[node].forEach((v) => queue.push([v, count]));
    }
  }
};

BFS(1);

console.log(bacon);
