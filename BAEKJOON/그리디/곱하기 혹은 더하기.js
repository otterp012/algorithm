// 이코테

const input = "02984";
let answer = 0;
let tmp = input[0];
for (let i = 1; i < input.length; i++) {
  if (tmp <= 1 || input[i] <= 1) {
    tmp += +input[i];
  } else {
    tmp *= +input[i];
  }
}

console.log(tmp);
