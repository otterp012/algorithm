const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let [add, sub, mul, div] = input.pop().split(" ").map(Number);
const board = input[0].split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
const dfs = (result, num) => {
  if (num === N) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }

  if (add > 0) {
    add -= 1;
    dfs(result + board[num], num + 1);
    add += 1;
  }

  if (sub > 0) {
    sub -= 1;
    dfs(result - board[num], num + 1);
    sub += 1;
  }
  if (mul > 0) {
    mul -= 1;
    dfs(result * board[num], num + 1);
    mul += 1;
  }
  if (div > 0) {
    div -= 1;
    dfs(Math.floor(result / board[num]), num + 1);
    div += 1;
  }
};

dfs(board[0], 1);

console.log(max + "\n" + min);
