const n = 7;
const wires = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];

function solution(n, wires) {
  const Lists = {};
  for (const wire of wires) {
    const [from, to] = wire;
    if (!Lists[from]) Lists[from] = [];
    if (!Lists[to]) Lists[to] = [];
    Lists[from].push(to);
    Lists[to].push(from);
  }

  const dfs = (wires, start) => {
    const visited = {};
    let result = 1;
    visited[start] = true;

    const helper = (num) => {
      // 해당 Num에 이미 접근했으면, return;
      wires[num].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          result += 1;
          helper(item);
        }
      });
    };

    helper(start);

    return result;
  };

  const removeWire = (Lists, [from, to]) => {
    const fromArr = Lists[from].filter((item) => item !== to);
    const toArr = Lists[to].filter((item) => item !== from);

    return {
      ...Lists,
      [from]: fromArr,
      [to]: toArr,
    };

    // 원본 Lists들을 수정하면 안되니까 위 같은 방식으로 진행함.
  };

  let answer = Number.MAX_SAFE_INTEGER;
  for (const wire of wires) {
    const removedWires = removeWire(Lists, wire);
    const a = dfs(removedWires, 1);
    const b = Math.abs(n - a);
    answer = Math.min(answer, Math.abs(a - b));
  }

  return answer;
}

console.log(solution(n, wires));
