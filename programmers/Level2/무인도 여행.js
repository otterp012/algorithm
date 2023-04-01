const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];

function solution(maps) {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const visited = {};
  const answer = [];

  const bfs = (start) => {
    const queue = [start];
    visited[start] = true;
    const result = [];

    while (queue.length) {
      const [row, col] = queue.shift();
      result.push(Number(maps[row][col]));
      for (let i = 0; i < 4; i++) {
        const nx = row + dx[i];
        const ny = col + dy[i];

        if (nx < 0 || ny < 0) continue;
        if (visited[[nx, ny]]) continue;
        if (nx > maps.length - 1 || ny > maps[0].length - 1) continue;
        if (maps[nx][ny] === "X") continue;
        visited[[nx, ny]] = true;
        queue.push([nx, ny]);
      }
    }
    return result.reduce((acc, cur) => acc + cur, 0);
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "X") continue;
      if (visited[[i, j]]) continue;
      const result = bfs([i, j]);
      if (result) answer.push(result);
    }
  }

  if (!answer.length) return -1;
  return answer.sort((a, b) => a - b);
}

console.log(solution(maps));
