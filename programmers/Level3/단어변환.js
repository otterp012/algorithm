const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

function DfsSol(begin, target, words) {
  const check = (b, t) => {
    let cnt = 0;
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== t[i]) cnt += 1;
      if (cnt >= 2) return false;
    }

    return true;
  };

  const visited = {};
  let answer = Number.MAX_SAFE_INTEGER;
  const dfs = (start, length, cnt) => {
    if (start === target) return (answer = Math.min(answer, cnt));
    if (length === words.length - 1) return;
    for (const word of words) {
      if (!check(start, word)) continue;
      // 달라진 개수가 2개 이상이라면 건너 뛴다. 하나씩만 바꿀 수 있다.
      if (visited[word]) continue;
      // 해당 word에 방문했었다면 건너 뛴다. 똑같은 dfs 가 반복될 것이기 때문이다.
      visited[word] = true;
      dfs(word, length + 1, cnt + 1);
      visited[word] = false;
      // 예를 들면, 4번째 값을 방문했다가 2번째 값에 방문해야하는 순간이 존재하므로
      // visited를 초기화해준다.
    }
  };

  dfs(begin, 0, 0);
  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}
function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    for (const word of words) {
      if (isConnected(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
};
