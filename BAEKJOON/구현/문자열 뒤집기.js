// 이코테
const input = require("fs").readFileSync("./example.txt").toString().trim();

const zero = input.split("0").filter((v) => v.length).length;
const one = input.split("1").filter((v) => v.length).length;

console.log(Math.min(zero, one));
