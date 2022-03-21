const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const classes = input[0].split(' ').map(Number);

let left = Math.max(...classes);
// 첫번째 틀린 포인트 left = 1
// https://www.acmicpc.net/board/view/49644

let right = classes.reduce((acc, cur) => acc + cur);

let answer = Number.MAX_SAFE_INTEGER;
while (left <= right) {
  let cnt = 1;
  let mid = Math.floor((left + right) / 2);
  let tmp = 0;
  for (let i = 0; i < classes.length; i++) {
    if (tmp + classes[i] <= mid) {
      tmp += classes[i];
    } else {
      tmp = 0 + classes[i];
      cnt++;
      if (cnt > M) break;
    }
  }

  // if (cnt === M) {
  //   if (answer >= mid) answer = mid;
  //   right = mid - 1;
  // }
  // 두번째 틀린 포인트

  if (cnt > M) {
    left = mid + 1;
  }

  if (cnt <= M) {
    if (answer >= mid) answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
