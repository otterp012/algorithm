// 이코테

const input = "K1KA5CB7";

console.log("K" * 1);
let str = "";
let num = 0;
for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i] * 1)) {
    str += input[i];
  } else {
    num += Number(input[i]);
  }
}

console.log(str.split("").sort().join("") + String(num));
