const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const list = input[0].split(" ").map(Number);

// dp는 I번째에서 최대 연속 수열의 합
// 이번에는 건너넘지 못하므로, 이전의 값만 비교하면 될듯??

for (let i = 1; i < N; i++) {
  list[i] = Math.max(list[i], list[i - 1] + list[i]);
}

console.log(list);
