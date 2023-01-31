const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const num = +input.shift();

const map = input.map((item) => item.split(" ").map(Number));
// map을 인접리스트로 만들기

const graph = {};
for (let i = 1; i <= num; i++) {
  graph[i] = [];
}

map.forEach((item) => {
  const [s, e] = item;
  graph[s].push(e);
  graph[e].push(s);
});

let answer = 0;

const visited = {};
const result = [];
const dfs = (n) => {
  const next = graph[n];

  if (!next) return;
  next.forEach((item) => {
    if (!visited[item]) {
      visited[item] = true;
      result.push(item);
      answer++;
      dfs(item);
    }
  });
};

dfs(1);

console.log(answer - 1);
