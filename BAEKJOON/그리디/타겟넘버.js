// programmers

function solution(numbers, target) {
  let answer;

  return answer;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;
let answer = 0;
const dfs = (num, len) => {
  if (len === numbers.length) {
    if (num === target) return answer++;
    else return;
  }
  dfs(num + numbers[len], len + 1);
  dfs(num - numbers[len], len + 1);
};

dfs(0, 0);
console.log(answer);
