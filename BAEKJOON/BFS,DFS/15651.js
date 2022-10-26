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

const dfs = (cnt) => {
  if (cnt === M) return (answer += output.join(" ") + "\n");

  for (let i = 1; i <= N; i++) {
    output.push(i);
    dfs(cnt + 1);
    output.pop();
  }
};

dfs(0);

console.log(answer);
