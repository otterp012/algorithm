const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const N = +input.shift();
const map = input.map((row) => row = row.split(' ').map(Number));

let max;
map.forEach((row) => {
    max = Math.max(...row);
})

function bfs(x,y, target, visisted) {
    const queue = [[x,y]];
    const result = [];
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];

    while(queue.length) {
        for(let i=0; i<queue.length; i++) {
            let coord = queue.shift();
            result.push(coord);
            if(visisted[[coord[0], coord[1]]]) continue;
            visisted[[x,y]] = true;

            for(let j=0; j<4; j++) {
                let nx = coord[0] + dx[j];
                let ny = coord[1] + dy[j];

                if(( nx >= 0 &&
                    ny >= 0 &&
                    nx < N &&
                    ny < N) &&
                    map[nx][ny] > target &&
                    !visisted[[nx,ny]]
                ) {
                    visisted[[nx,ny]] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }
}


let answer = Number.MIN_SAFE_INTEGER;
for(let k=0; k<=max; k++) {
    const visisted = {};
    let cnt = 0;
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(map[i][j] > k && !visisted[[i,j]]) {
                bfs(i,j,k,visisted);
                cnt++;
            }
        }
    }
    if(answer < cnt) answer = cnt;
}

console.log(answer)