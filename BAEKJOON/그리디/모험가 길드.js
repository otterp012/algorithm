// 이코테

const arr = [2, 3, 1, 2, 2];
arr.sort((a, b) => a - b);
// 공포도가 낮은 모험가 먼저 집단을 구성한다.

console.log(arr);

// 한명은 각각 공포도 1씩을 책임짐
let cnt = 0;
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  cnt++;
  if (cnt >= arr[i]) {
    answer++;
    cnt = 0;
  }
}
console.log(answer);
