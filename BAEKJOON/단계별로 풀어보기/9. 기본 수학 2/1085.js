let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [x, y, w, h] = [input[0], input[1], input[2], input[3]];


let min = Math.min(+x, +y, (+w - +x), (+h - +y));
console.log(min);