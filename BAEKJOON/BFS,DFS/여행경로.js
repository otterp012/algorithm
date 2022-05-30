// programmers

const words = [
  ["ICN", "A"],
  ["ICN", "A"],
  ["A", "ICN"],
];

const visited = {};

const result = [];

const dfs = (current, len, answer) => {
  if (answer.length === words.length) return result.push(answer);

  for (let i = 0; i < words.length; i++) {
    if (current === words[i][0]) {
      if (!visited[i]) {
        visited[i] = true;
        answer.push(words[i][1]);
        dfs(words[i][1], len + 1, answer);
        visited[i] = false;
        answer = [];
      }
    }
  }
};

function solution(tickets) {
  const visited = {};
  const result = [];
  const dfs = (current, len, tmp) => {
    if (tmp.length === tickets.length) return result.push(tmp);
    for (let i = 0; i < tickets.length; i++) {
      if (current === tickets[i][0] && !visited[i]) {
        visited[i] = true;
        tmp.push(tickets[i][1]);
        dfs(tickets[i][1], len + 1, tmp);
        visited[i] = false;
        tmp = [];
      }
    }
  };
  dfs(tickets[0][0], 0, []);
  return [tickets[0][0], ...result.sort()[0]];
}
console.log(solution(words));
