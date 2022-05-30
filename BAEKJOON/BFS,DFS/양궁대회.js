// programmers

const n = 10;
const info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3];

function solution(n, info) {
  let answer;
  const rion = Array.from({ length: 11 }).fill(0);
  const getScore = (apeachMap, rionMap) => {
    let [apeachCount, rionCount] = [0, 0];

    for (let i = 0; i < apeachMap.length; i++) {
      if (apeachMap[i] >= rionMap[i])
        apeachMap[i] ? (apeachCount += 10 - i) : null;
      else rionCount += 10 - i;
    }
    return rionCount - apeachCount;
  };

  let result = [];
  const dfs = (count, rionMap, apeachMap, index) => {
    if (count === n) {
      const currentScore = getScore(apeachMap, rionMap);
      const currentRionMap = [rionMap, currentScore];
      if (currentScore > 0) {
        if (!result.length) result.push(currentRionMap);
        if (result.length) {
          result[0][1] < currentScore
            ? (result = [[rionMap, currentScore]])
            : null;

          result[0][1] === currentScore
            ? result.push([rionMap, currentScore])
            : null;
        }
      }
      return;
    }

    for (let i = index; i < rionMap.length; i++) {
      const tmp_rion = [...rionMap];
      tmp_rion[i] += 1;
      dfs(count + 1, tmp_rion, apeachMap, i);
    }
  };
  dfs(0, rion, info, 0);
  const Sort = (a, b) => {
    for (let i = a.length - 1; i >= 0; i--) {
      if (a[i] === b[i]) continue;
      return b[i] - a[i];
    }
  };

  result.sort((a, b) => Sort(a[0], b[0]));
  answer = result.length ? result[0][0] : -1;
  return answer;
}

console.log(solution(n, info));
