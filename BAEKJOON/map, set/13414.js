const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const [K, L] = input.shift().split(" ").map(Number);

const set = new Set();
for (let i = 0; i < L; i++) {
  if (set.has(input[i])) {
    set.delete(input[i]);
    set.add(input[i]);
  } else {
    set.add(input[i]);
  }
}

let answer = "";
[...set].forEach((v, i) => {
  if (i < K) answer += v + "\n";
});

console.log(answer);
