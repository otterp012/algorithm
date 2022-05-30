// programmers

const words = ["hot", "dot", "dog", "cog", "lot", "log"];
const begin = "hit";
const target = "cog";
function solution(begin, target, words) {
  var answer = 0;

  const check = (current, next) => {
    let cnt = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== next[i]) {
        cnt++;
        if (cnt > 1) return false;
      }
    }
    if (cnt === 1) return true;
  };

  const visited = {};
  const dfs = (word, len, cnt) => {
    if (word === target) return (answer = cnt);
    if (len === words.length - 1) return;

    for (let i = 0; i < words.length; i++) {
      if (!visited[words[i]]) {
        if (check(word, words[i])) {
          visited[words[i]] = true;
          dfs(words[i], len + 1, cnt + 1);
          visited[words[i]] = false;
        }
      }
    }
  };
  dfs(begin, 0, 0);
  return answer;
}
console.log(solution(begin, target, words));
