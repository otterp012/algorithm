const { toNamespacedPath } = require("path/posix");

const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));

const voids = [];
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (map[i][j] === 0) voids.push([i, j]);
  }
}

const tmp = [];
const dfs = (nums, num, result) => {
  if (num === 3) return tmp.push([...result]);
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i]);
    dfs(nums.slice(i + 1), num + 1, result);
    result.pop();
  }
};

dfs(voids, 0, []);
console.log(tmp);
const bfs = (start, maps) => {
  const queue = [start];
  const visited = {};
  visited[start] = true;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  while (queue.length) {
    const current = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = current[0] + dx[i];
      let ny = current[1] + dy[i];
      if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
      if (visited[[nx, ny]]) continue;
      if (maps[nx][ny] !== 0) continue;
      if (maps[nx][ny] === 0) {
        maps[nx][ny] = 2;
        queue.push([nx, ny]);
        visited[[nx, ny]] = true;
      }
    }
  }
  return maps;
};

const getSafe = (maps) => {
  let answer = 0;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === 0) answer++;
    }
  }
  return answer;
};

// for (const coords of tmp) {
//   let temp_map = map.slice();
//   console.log(temp_map);
//   for (const coord of coords) {
//     temp_map[coord[0]][coord[1]] = 1;
//   }
// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < col; j++) {
//     if (temp_map[i][j] === 2) {
//       const infected_map = bfs([i, j], temp_map);
//       result.push(getSafe(infected_map));
//     }
//   }
// }
//   temp_map = map.slice();
// }
const changeCoords = (map, arr) => {
  arr.forEach((v) => {
    map[v[0]][v[1]] = 1;
  });
  return map;
};
const result = [];
for (let i = 0; i < tmp.length; i++) {
  let temp_map = JSON.parse(JSON.stringify(map));
  temp_map = changeCoords(temp_map, tmp[i]);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (temp_map[i][j] === 2) {
        const infected_map = bfs([i, j], temp_map);
        result.push(getSafe(infected_map));
      }
    }
  }
}

console.log(bfs([0, 0], map));
