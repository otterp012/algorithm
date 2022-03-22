const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const [peoplenum, candynum] = input.shift().split(' ').map(Number);
const candies = input[0].split(' ').map(Number);

let left = 1;
let right = Math.max(...candies);

let answer = Number.MIN_SAFE_INTEGER;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let counter = 0;

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] >= mid) {
      counter += Math.floor(candies[i] / mid);
    }
  }

  if (counter >= peoplenum) {
    if (mid >= answer) answer = mid;
    left = mid + 1;
  }

  if (counter < peoplenum) {
    right = mid - 1;
  }
}
console.log(answer < 0 ? 0 : answer);
