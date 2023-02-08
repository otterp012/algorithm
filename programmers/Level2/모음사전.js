const word = "AAAAE";

//

function solution(word) {
  const list = ["A", "E", "I", "O", "U"];
  const output = [];
  const visited = {};
  let order = 1;
  const dfs = (cnt, limit) => {
    if (cnt === limit) {
      return;
    }

    for (let i = 0; i < 5; i++) {
      output.push(list[i]);
      const current = output.join("");
      visited[current] = order;
      order += 1;
      dfs(cnt + 1, limit);
      output.pop();
    }
  };

  dfs(0, 5);
  return visited[word];
}
