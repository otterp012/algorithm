let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.shift();

function solution(h, w, n) {
    let room = Number.isInteger(n/h) ? n/h : Math.ceil(n/h);
    let floor = n%h || h;

    if(room >= 10) {
        return ''+floor + room;
    } else {
        return floor + '0' + room;
    }
}

input.forEach((item) => {
    item = item.split(' ');
    console.log(solution(item[0], item[1], item[2]))
})

console.log(solution(6, 12, 10))
console.log(solution(30,50,72))
console.log(solution(5,5,5))
console.log(solution(99,99,9801))