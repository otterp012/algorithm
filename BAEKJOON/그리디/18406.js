// 이코테
const input = require("fs").readFileSync("./example.txt").toString().trim();

const mid = Math.floor(input.length / 2);

let left = 0;
let right = 0;
for (let i = 0; i < input.length; i++) {
  if (i < mid) left += +input[i];
  else right += +input[i];
}

left === right ? console.log("LUCKY") : console.log("READY");
