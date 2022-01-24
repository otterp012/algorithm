let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

input.shift();
let arr = input.map(item => item.split(' ').map(item => Number(item)))

let sorted = arr.sort((a,b) => {
    if(a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
});

let answer = '';
sorted.forEach(item => {
    answer += item.join(' ') + '\n'
})

console.log(answer);
