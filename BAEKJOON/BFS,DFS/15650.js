const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

const output = [];
const visited = {};

const dfs = (cnt) => {
  if (cnt === M) return console.log(output.join(" "));
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    if (output[output.length - 1] > i) continue;
    output.push(i);
    visited[i] = true;
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
};
dfs(0);
