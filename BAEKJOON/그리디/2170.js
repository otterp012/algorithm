const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const map = input
  .map((row) => row.split(' ').map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

let currentX = map[0][0];
let currentY = map[0][1];
let result = currentY - currentX;
for (let i = 0; i < N; i++) {
  if (currentX <= map[i][0] && currentY >= map[i][1]) continue;
  // 선분이 포함될때

  if (currentY >= map[i][0]) {
    result += map[i][1] - currentY;
    currentY = map[i][1];
    currentX = map[i][0];
  }
  // 선분이 연결될때

  if (currentY < map[i][0]) {
    result += map[i][1] - map[i][0];
    currentY = map[i][1];
    currentX = map[i][0];
  }

}

// let currentX = map[0][0];
// let currentY = map[0][1];
// let result = 0;
// for (let i = 1; i < N; i++) {
//   if (i === N - 1) {
//     result += currentY - currentX;
//     break;
//   }
//   if (currentY < map[i][0]) {
//     result += currentY - currentX;
//     currentX = map[i][0];
//     currentY = map[i][1];
//   }
//   if (currentX <= map[i][0] && currentY >= map[i][1]) continue;
//   if (currentY >= map[i][0]) {
//     currentY = map[i][1];

//   }
// }

// console.log(result);
console.log(result);
