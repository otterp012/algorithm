const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const board = input.map((v) =>
  v.split(" ").map((v) => (isNaN(Number(v)) ? v : Number(v)))
);

board.sort((a, b) => {
  return b[1] - a[1];
});

board.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[2] - b[2];
  }
});

board.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2]) {
    return b[3] - a[3];
  }
});

board.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    return a[0].charCodeAt() - b[0].charCodeAt();
  }
});

console.log(board.map((v) => v[0]).join("\n"));
