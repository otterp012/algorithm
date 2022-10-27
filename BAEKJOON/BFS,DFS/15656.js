const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

let result = "";
const output = [];
const visited = {};

const dfs = (cnt) => {
  if (cnt === M) return (result += output.join(" ") + "\n");

  for (let i = 0; i < N; i++) {
    output.push(map[i]);

    dfs(cnt + 1);

    output.pop();
  }
};

dfs(0);
console.log(result);
