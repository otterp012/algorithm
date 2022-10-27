const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = "";
const output = [];
const visited = {};

const dfs = (cnt) => {
  if (cnt === M) return (result += output.join(" ") + "\n");

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    output.push(map[i]);
    visited[i] = true;
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
};

dfs(0);
console.log(result);
