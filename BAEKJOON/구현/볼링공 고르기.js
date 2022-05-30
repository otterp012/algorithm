// 이코테

const [N, M] = [5, 3];
const arr = [1, 5, 4, 3, 2, 4, 5, 2];

let answer = 0;

const set = new Set();
for (let i = 0; i < arr.length - 1; i++) {
  let Aselected = arr[i];

  for (let j = i + 1; j < arr.length; j++) {
    if (i !== j) {
      if (Aselected !== arr[j]) {
        answer++;
      }
    }
  }
}
console.log(answer);
