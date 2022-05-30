const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const cost = [0];
const weight = [0];
for (let i = 0; i < N + M; i++) {
  i < N ? cost.push(+input[i]) : weight.push(+input[i]);
}

const map = input.slice(N + M, input.length).map(Number);


const queue = Array.from({ length: N }).fill(0);
const watingQueue = [];
const answer = Array.from({ length: M + 1 }).fill(0);

for (let i = 0; i < map.length; i++) {
  // 빈공간 : 0
  if (map[i] > 0) {
    if (queue[queue.indexOf(0)] > -1) {
      queue[queue.indexOf(0)] = map[i];
    } else {
      watingQueue.push(map[i]);
    }
  }

  // 출차 : watingQueue값 가져와서 갱신해줌
  if (map[i] < 0) {
    const idx = queue.indexOf(map[i] * 1);
    answer[queue[idx]] = idx + 1;
    if (watingQueue.length) queue[idx] = watingQueue.shift();
    else queue[idx] = 0;
  }
}

let sum = 0;
answer.forEach((v, i) => {
  sum += cost[v] * weight[i];
});
console.log(sum);
