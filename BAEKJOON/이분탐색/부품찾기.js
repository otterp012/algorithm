// 이코테

const N = 5;
const map = [8, 3, 7, 9, 2].sort((a, b) => a - b);

const M = 3;
const arr = [5, 7, 9];

const bs = (target) => {
  let left = 0;
  let right = map.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (map[mid] === target) return "YES";

    if (map[mid] > target) {
      right = mid - 1;
    }

    if (map[mid] < target) {
      left = mid + 1;
    }
  }
  return "NO";
};

arr.forEach((v) => console.log(bs(v)));
