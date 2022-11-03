const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const [map, commend] = input.map((v) => v.split(" ").map(Number));

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
const dfs = (count, result) => {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (!commend[i]) continue;
    commend[i] -= 1;
    if (i === 0) {
      dfs(count + 1, result + map[count + 1]);
    }

    if (i === 1) {
      dfs(count + 1, result - map[count + 1]);
    }

    if (i === 2) {
      dfs(count + 1, result * map[count + 1]);
    }

    if (i === 3) {
      if (result < 0) {
        let temp = Math.floor((result * -1) / map[count + 1]) * -1;
        dfs(count + 1, temp);
      } else dfs(count + 1, Math.floor(result / map[count + 1]));
    }
    commend[i] += 1;
  }
};

dfs(0, map[0]);

console.log(max + "\n" + min);

const test = ["+", "+", "-", "*", "/"];

const visited = {};
const output = [];

const dfsT = (cnt) => {
  if (cnt === test.length) return console.log(output);

  for (let i = 0; i < test.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    output.push(test[i]);
    dfsT(cnt + 1);
    visited[i] = false;
    output.pop();
  }
};

dfsT(0);
