// 이코테

const N = 4;
const map = [19, 15, 10, 17].sort((a, b) => a - b);
const target = 6;
console.log(map);
let left = 0;
let right = Math.max(...map);
let answer = 0;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let total = 0;
  for (i = 0; i < map.length; i++) {
    if (map[i] > mid) total += map[i] - mid;
  }
  if (total >= target) {
    if (mid > answer) answer = mid;
    left = mid + 1;
  }

  if (total < target) {
    right = mid - 1;
  }
}
console.log(answer);
