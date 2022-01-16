let input = require("fs").readFileSync("/dev/stdin").toString();

let answer = "";

for (let a = 1; a <= input; a++) {
  answer += a + "\n";
}
console.log(answer);

// 시간 초과로 고생한 문제..
