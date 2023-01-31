const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const lists = input.map((item) => item.split(" ").map(Number));

// 인접리스트 만들기.
// [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 4 ], [ 3, 4 ] ]
// 1, 2 라는 것은 vertex 1 ----- 2 가 연결되어있다는 이야기.
// 이를 인접리스트로 만들려면 1 : [ 2 ], 2 : [ 1 ] , 모두 성립되어야 함.

const newList = {};
for (let i = 1; i <= N; i++) {
  newList[i] = [];
}
for (const [s, e] of lists) {
  newList[s].push(e);
  newList[e].push(s);

  newList[s].sort((a, b) => a - b);
  newList[e].sort((a, b) => a - b);
}

// for (const list in lists) {
//   lists[list] = lists[list].sort((a, b) => a - b);
// }

console.log(newList);
const dfs = (n) => {
  const visited = {};
  visited[n] = true;
  const result = [n];

  const recur = (m) => {
    for (const v of newList[m]) {
      if (visited[v]) continue;
      result.push(v);
      visited[v] = true;
      recur(v);
    }
  };

  recur(n);
  return result;
};

const bfs = (n) => {
  const visited = {};
  const queue = [n];
  visited[n] = true;
  const result = [n];
  while (queue.length) {
    const item = queue.shift();
    for (const v of newList[item]) {
      if (visited[v]) continue;
      queue.push(v);
      result.push(v);
      visited[v] = true;
    }
  }

  return result;
};

const upper = dfs(V).join(" ");
const down = bfs(V).join(" ");

console.log(upper + "\n" + down);
