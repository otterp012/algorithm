const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [N, M, blocks] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(' ').map(Number));

function getTime(target) {
    let blockNum = blocks;
    let remove = 0;
    let add = 0;
    let time;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(map[i][j] > target) {
                remove += map[i][j] - target;
                blockNum += map[i][j] - target
            } else if(map[i][j] < target) {
                add += target - map[i][j];
                blockNum -= target - map[i][j];
            }
            time = remove * 2 + add;
        }
    }
    if(blockNum < 0) return [Number.MAX_SAFE_INTEGER, target];
    return [time, target];
}

const answer = [];
for(let i = 256; i >= 0; i--) {
    answer.push(getTime(i));
}

answer.sort((a,b) => {
    if(a[0] === b[0]) return b[1]-a[1];
    else return a[0] - b[0];
})

console.log(answer[0].join(' '));
