const input = require('fs')
  .readFileSync('../example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, R] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(' ').map(Number));
const answer = Array.from({ length: N }).map(
  (row) => (row = Array.from({ length: M }).fill(0))
);

function getMap(i, j, N, M, R) {
  const first = i;
  const queue = [[i, j]];
  while (true) {
    if (queue[0][0] < N && j === first) queue.push([++i, j]);
    if (queue[queue.length - 1][0] === N - 1) queue.push([i, ++j]);
    if (
      queue[queue.length - 1][0] < N &&
      queue[queue.length - 1][1] === M - 1 &&
      i !== first
    )
      queue.push([--i, j]);
    if (
      queue[queue.length - 1][0] === first &&
      queue[queue.length - 1][1] < M
    ) {
      queue.push([i, --j]);
    }
    if (i === first && j === first) break;
  }
  queue.pop();
  console.log(queue);
  let mapArr = queue.map((v) => (v = map[v[0]][v[1]]));
  console.log(mapArr);
  let idx = R % mapArr.length;

  let tmp = mapArr.slice(mapArr.length - idx, mapArr.length);

  mapArr = [...tmp, ...mapArr.splice(0, mapArr.length - idx)];
  queue.forEach((v, i) => {
    answer[v[0]][v[1]] = mapArr[i];
  });
  return mapArr;
}

for (let i = 0; i < Math.floor(Math.min(N, M) / 2); i++) {
  console.log(getMap(i, i, N - i, M - i, R));
}

let anw = '';
answer.forEach((item) => {
  anw += item.join(' ') + '\n';
});

// console.log(anw);
