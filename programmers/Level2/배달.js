const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];

const K = 3;

const lines = Array.from(Array(N + 1), () => []);

road.forEach((value) => {
  // 연결되어 있는 경로를 모두 lines배열에 저장한다.
  let [a, b, c] = value;
  lines[a].push({ to: b, cost: c });
  lines[b].push({ to: a, cost: c });
});

const answers = Array.from({ length: N + 1 }).fill(Number.MAX_SAFE_INTEGER);

answers[1] = 0;
const queue = [{ to: 1, cost: 0 }];

while (queue.length) {
  const { to } = queue.pop();

  lines[to].forEach((next) => {
    if (answers[next.to] > answers[to] + next.cost) {
      answers[next.to] = answers[to] + next.cost;
      queue.push(next);
    }
  });
}

return answers.filter((v) => v <= K).length;
