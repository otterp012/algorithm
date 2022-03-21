const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const [M, hascards, N, cards] = input.map((row) =>
  row.length > 1 ? row.split(' ').map(Number) : +row
);

hascards.sort((a, b) => a - b);

function binarySearch(n) {
  let left = 0;
  let right = hascards.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (hascards[mid] === n) return 1;

    if (hascards[mid] < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

let answer = cards.map((v) => binarySearch(v)).join(' ');
console.log(answer);
