// const queue1 = [1, 1];
// const queue2 = [1, 5];
// let sum1 = queue1.reduce((acc, cur) => acc + cur);
// let sum2 = queue2.reduce((acc, cur) => acc + cur);
// let q1 = queue1;
// let q2 = queue2;
// const target = (sum1 + sum2) / 2;

// let answer = 0;
// let sum = (acc, cur) => acc + cur;
// while (sum1 !== target && sum2 !== target) {
//   if (sum1 > sum2) {
//     const shifted = q1.shift();
//     q2.push(shifted);
//     sum2 += shifted;
//     sum1 -= shifted;
//     answer += 1;
//   } else {
//     const shifted = q2.shift();
//     q1.push(shifted);
//     sum1 += shifted;
//     sum2 -= shifted;
//     answer += 1;
//   }

//   if (sum1 === sum2 && sum1 !== target) {
//     answer = -1;
//     break;
//   }

//   if (answer > queue1.length * 3) {
//     answer = -1;
//     break;
//   }
// }

// console.log(q2, q1, answer);

// 시간초과
// const queue1 = [1, 1];
// const queue2 = [1, 5];
// const q = [...queue1, ...queue2];
// const getSum = (arr) => {
//   return arr.reduce((acc, cur) => acc + cur, 0);
// };
// let left = 0;
// let right = 0;
// let target = getSum(q) / 2;
// let total = getSum(q);
// let sum = 0;
// let answer = 0;

// while (true) {
//   if (left > right) {
//     answer = -1;
//     break;
//   }
//   if (right === q.length) {
//     answer = -1;
//     break;
//   }
//   if (sum === target) break;

//   if (sum > target) {
//     sum -= q[left];
//     left += 1;
//     answer += 1;
//   } else {
//     sum += q[right];
//     right += 1;
//     answer += 1;
//   }
// }
// console.log(answer);
const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];
function solution(queue1, queue2) {
  const q = [...queue1, ...queue2];

  let left = 0;
  let right = queue1.length - 1;
  let target = q.reduce((acc, cur) => acc + cur, 0) / 2;
  let sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let total = q.reduce((acc, cur) => acc + cur, 0);
  // 연속하는 수들의 합이 target이 되면 됨.
  let answer = 0;
  while (true) {
    if (left > right) {
      answer = -1;
      break;
    }
    if (right === q.length) {
      answer = -1;
      break;
    }
    if (sum === target) break;
    if (sum > target) {
      sum -= q[left];
      left += 1;
      answer += 1;
    }

    if (sum < target) {
      right += 1;
      sum += q[right];
      answer += 1;
    }
  }

  return answer;
}
console.log(solution(queue1, queue2));
