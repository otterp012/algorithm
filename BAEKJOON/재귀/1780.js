const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((v) => v.split(" ").map(Number));

let minus = 0;
let zero = 0;
let one = 0;

const recur = (len, r, c) => {
  let _minus = 0;
  let _zero = 0;
  let _one = 0;

  for (let i = r; i < r + len; i++) {
    for (let j = c; j < c + len; j++) {
      console.log(i, j);
      if (map[i][j] === -1) _minus++;
      if (map[i][j] === 0) _zero++;
      if (map[i][j] === 1) _one++;
    }
  }

  if (_minus === len * len) return minus++;
  if (_zero === len * len) return zero++;
  if (_one === len * len) return one++;

  const newLen = len / 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      recur(newLen, r + newLen * i, c + newLen * j);
    }
  }
};
recur(N, 0, 0);
console.log(minus + "\n" + zero + "\n" + one);
