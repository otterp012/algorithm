const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

let answer = "";
const output = [];
const visited = {};

const dfs = (cnt) => {
  if (cnt === M) return (answer += output.join(" ") + "\n");

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    output.push(i);
    visited[i] = true;
    dfs(cnt + 1);
    visited[i] = false;
    output.pop();
  }
};

dfs(0);

console.log(answer);
