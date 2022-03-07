
// const map = [0, 1, 3, 4, 5, 6, 7, 8, 10, 12, 14];

// let result =0;
// let arr = [];


// function dfs(index, time, size) {
//     if(index > map.length) return arr.push(result);
//     if(time > 5) return arr.push(result);
//     result += size;
//     console.log(result);
//     dfs(index+1, time+1, map[index+1]);
//     dfs(index+2, time+1, map[index+2])
// }
// console.log(dfs(0,0,1))
// console.log(arr);

// function dfs(index, time, size) {
//     if(index > map.length) return size;
//     if(time > 5) return size;
//     console.log(size);
//     dfs(index+1, time+1, size + map[index+1]);
//     dfs(index+2, time+2, size + map[index+2]/2);
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = [0, ...input[0].split(' ').map(Number)];

let answer = [];
function dfs(index, time, size) {
    // if(index > map.length) return answer.push(Math.floor(size))
    if(time <= M) answer.push(Math.floor(size));
    if( time === 5) return;

    if(index+1 <= N) dfs(index+1, time+1, size + map[index+1]);
    if(index+2 <= N) dfs(index+2, time+1, (size/2) + map[index+2]);
}
// 맨 처음 인덱스에 0을 넣어주지 않아서 오류 생겼음.

dfs(0,0,1);
console.log(answer);
console.log(Math.max(...answer));

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const [N, M] = input.shift().split(' ').map(Number);
// const map = [0, ...input[0].split(' ').map(Number)];

// let answer = [];
// function dfs(index, time, size) {
//     // if(index > map.length) return answer.push(Math.floor(size))
//     if(time === M) return answer.push(Math.floor(size));

//     if(index+1 <= N) dfs(index+1, time+1, size + map[index+1]);
//     if(index+2 <= N) dfs(index+2, time+1, (size/2) + map[index+2]);
// }

// dfs(0,0,1);
// console.log(Math.max(...answer));