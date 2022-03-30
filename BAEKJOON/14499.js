const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, x, y, commandNum] = input.shift().split(' ').map(Number);
const map = [];
for (let i = 0; i < N; i++) {
  map.push(input.shift().split(' ').map(Number));
}
const commands = input[0].split(' ').map(Number);
const dice = [
  [2, 1, 5, 6],
  [4, 1, 3, 6],
];

// dice[0] : up, view, down, unview
// dice[1] : left, view, right, unview

const diceMove = {
  up: (newInput) => {
    dice[0].push(dice[0].shift());
    if (newInput) dice[0][3] = newInput;
    dice[1][1] = dice[0][1];
    dice[1][3] = dice[0][3];
  },

  down: (newInput) => {
    dice[0].unshift(dice[0].pop());
    if (newInput) dice[0][3] = newInput;
    dice[1][1] = dice[0][1];
    dice[1][3] = dice[0][3];
  },

  left: (newInput) => {
    dice[1].push(dice[1].shift());
    if (newInput) dice[0][3] = newInput;
    dice[0][1] = dice[1][1];
    dice[0][3] = dice[1][3];
  },

  right: (newInput) => {
    dice[1].unshift(dice[1].pop());
    if (newInput) dice[0][3] = newInput;
    dice[0][1] = dice[1][1];
    dice[0][3] = dice[1][3];
  },
};
