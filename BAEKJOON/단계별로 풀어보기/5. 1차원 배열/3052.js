// let input = require('fs').readFileSync('example.txt').toString().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const map = {};
input.map(item => +item%42).forEach((item) => {
    map[item] = item;
})

console.log(''+Object.keys(map).length);