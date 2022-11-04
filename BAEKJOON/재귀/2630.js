const { resourceUsage } = require("process");

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((v) => v.split(" ").map(Number));

let white = 0;
let blue = 0;
const recur = (length, r, c) => {
  let zero = 0;
  let one = 0;
  for (let i = r; i < r + length; i++) {
    for (let j = c; j < c + length; j++) {
      if (map[i][j] === 0) zero++;
      else one++;
    }
  }
  if (length * length === one) return white++;
  if (length * length === zero) return blue++;
  recur(length / 2, r, c);
  recur(length / 2, r + length / 2, c);
  recur(length / 2, r, c + length / 2);
  recur(length / 2, r + length / 2, c + length / 2);
};
recur(N, 0, 0);
console.log(blue + "\n" + white);
