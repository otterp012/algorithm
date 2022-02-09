
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const N = input.shift();
const arr = input.map((item) => item.split('').map(Number))

function bfs(x, y) {
    const queue = [[x,y]];
    const visited = {};
    visited[[x,y]] = true;
    visitedCoords[[x,y]] = true;
    let dx = [0, 0, 1, -1];
    let dy = [-1, 1, 0, 0];
    let cnt = 1;

    while(queue.length) {
        for(let i=0; i<queue.length; i++) {
            let X = queue.shift();
            for(let j = 0; j < 4; j++) {
                let nx = X[0] + dx[j];
                let ny = X[1] + dy[j];
                if(( nx >= 0 &&
                    ny >= 0 &&
                    nx < arr.length &&
                    ny < arr.length ) &&
                // 좌표의 유효성 확인 
                    (arr[nx][ny] === 1) &&
                // 1일 경우에만 진행되므로 1인 경우만 좌표 출력
                    (!visited[[nx,ny]])
                // visited 확인
                    )
                {   
                    visited[[nx,ny]] = true;
                    visitedCoords[[nx,ny]] = true;
                    cnt++;
                    queue.push([nx,ny]);
                }
            }
        }
    }
    return cnt;
}

const visitedCoords = {};
const answer = [];
for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
        console.log(dfs(i,j))
        
      
}}
// answer.sort((a,b) => a-b)
// console.log(answer.length);
// answer.forEach((item) => console.log(item));

