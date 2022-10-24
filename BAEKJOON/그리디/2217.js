const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const map = input.sort((a, b) => b - a).map((v, i) => v * (i + 1));
console.log(Math.max(...map));
