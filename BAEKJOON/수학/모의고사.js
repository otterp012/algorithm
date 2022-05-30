// programmers

const one = "12345".repeat(8).split("");
const two = "21232425".repeat(5).split("");
const three = "3311224455".repeat(4).split("");
let arr = [0, 0, 0];
let answers = "12345".split("");
for (let i = 0; i < answers.length; i++) {
  let num = i >= 40 ? i % 40 : i;
  answers[i] === one[num] && arr[0]++;
  answers[i] === two[num] && arr[1]++;
  answers[i] === three[num] && arr[2]++;
}

let answer = [];
const max = Math.max(...arr);
arr.forEach((v, i) => {
  v === max && answer.push(i + 1);
});

console.log(answer);
