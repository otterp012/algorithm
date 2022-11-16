const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map(Number).sort((a, b) => a - b);

let rt = 0;
let min = Number.MAX_SAFE_INTEGER;

for (let lt = 0; lt < map.length; lt++) {
  const currLeft = map[lt];
  while (map[rt] - currLeft < M && rt < N) {
    rt++;
  }
  if (rt === N) break;
  min = Math.min(min, map[rt] - currLeft);
}

console.log(min);
