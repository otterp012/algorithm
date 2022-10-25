const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let answer = 0;
const getGood = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (stack.length && stack[stack.length - 1] === current) stack.pop();
    else stack.push(current);
  }
  return stack.length ? false : true;
};

input.forEach((item) => {
  if (getGood(item)) answer++;
});
console.log(answer);
