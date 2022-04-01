const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const move = {
  0: {
    left: [0, -1],
    back: [1, 0],
  },
  // 북쪽
  1: {
    left: [-1, 0],
    back: [0, -1],
  },
  // 동쪽
  2: {
    left: [0, 1],
    back: [-1, 0],
  },
  // 남쪽
  3: {
    left: [1, 0],
    back: [0, 1],
  },
  // 서쪽
};

//

const changeFlag = (input) => {
  switch (input) {
    case 0:
      return 3;
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
  }
};

const valid = (r, c) => {
  if (
    map[r - 1][c] !== 0 &&
    map[r + 1][c] !== 0 &&
    map[r][c - 1] !== 0 &&
    map[r][c + 1] !== 0
  ) {
    return false;
  }
  return true;
};

const [N, M] = input.shift().split(' ').map(Number);
let [r, c, flag] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(' ').map(Number));

let cnt = 1;
if (map[r][c] === 0) map[r][c] = 2;

while (true) {
  if (valid(r, c)) {
    if (!map[r + move[flag].left[0]][c + move[flag].left[1]]) {
      r = r + move[flag].left[0];
      c = c + move[flag].left[1];
      flag = changeFlag(flag);
      map[r][c] = ++cnt;
    } else {
      flag = changeFlag(flag);
    }
  } else {
    r = r + move[flag].back[0];
    c = c + move[flag].back[1];
    if (map[r][c] === 1) break;
  }
}
console.log(cnt);
