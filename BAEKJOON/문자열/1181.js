const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const test = new Set(input);
const byLen = [...test.values()].sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }

  return a.length - b.length;
});

console.log(byLen.join("\n"));
