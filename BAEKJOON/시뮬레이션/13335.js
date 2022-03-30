const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const [n, w, L] = input.shift().split(' ').map(Number);
const cars = input[0].split(' ').map(Number);

const queue = Array.from({ length: w }).fill(0);
const result = [];

let cnt = 1;
while (true) {
  const shifted = queue.shift();
  if (shifted !== 0) result.push(shifted);
  if (result.length === n) break;
  if (cars.length) {
    queue.reduce((acc, cur) => acc + cur, 0) + cars[0] > L
      ? queue.push(0)
      : queue.push(cars.shift());
  }

  cnt++;
}
// reduce의 초깃값 설정 안해줘서 계속 타입에러 뜨는거였음... 초깃값 설정 꼭 해주기!
console.log(cnt);
