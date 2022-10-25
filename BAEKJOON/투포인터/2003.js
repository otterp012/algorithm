const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, target] = input.shift().split(" ").map(Number);
const map = input[0].split(" ").map(Number);
let start = 0;
let end = 0;
let max = map.length;
let sum = map[start];
let answer = 0;
while (end < max && start < max) {
  if (sum === target) {
    answer++;
    end++;
    sum += map[end];
  } else if (sum < target) {
    end++;
    sum += map[end];
  } else if (sum > target) {
    sum -= map[start];
    start++;
  }
}

console.log(answer);
